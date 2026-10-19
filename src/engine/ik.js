import { Matrix4, Quaternion, Vector3 } from 'three';
import { clamp } from './math.js';

/** Longitudes de los huesos del avatar (m). Todas las poses se calculan en estas unidades. */
export const BONE = { thigh: 0.31, shin: 0.31, upperArm: 0.22, foreArm: 0.2 };

const root = new Vector3();
const dir = new Vector3();
const side = new Vector3();
const elbowDir = new Vector3();
const perp = new Vector3();
const axisY = new Vector3();
const axisZ = new Vector3();
const axisX = new Vector3();
const basis = new Matrix4();
const qWorld = new Quaternion();
const qParent = new Quaternion();

/**
 * IK de dos huesos analítico.
 * @param upper  articulación superior (cadera u hombro). Se orienta en espacio local.
 * @param lower  articulación inferior (rodilla o codo). Solo gira en X.
 * @param target punto objetivo en coordenadas de mundo (tobillo o muñeca).
 * @param la     longitud del hueso superior.
 * @param lb     longitud del hueso inferior.
 * @param pole   dirección hacia la que apunta la rodilla/codo (mundo).
 * @param kind   'leg' | 'arm' (los brazos se doblan en sentido contrario).
 */
export function solveTwoBone(upper, lower, target, la, lb, pole, kind) {
  upper.updateWorldMatrix(true, false);
  upper.getWorldPosition(root);
  dir.subVectors(target, root);
  let dist = dir.length();
  if (dist < 1e-4) {
    dir.set(0, -1, 0);
    dist = 1e-4;
  }
  dir.divideScalar(dist);
  dist = clamp(dist, Math.abs(la - lb) + 0.001, la + lb - 0.001);

  const cosA = clamp((la * la + dist * dist - lb * lb) / (2 * la * dist), -1, 1);
  const sinA = Math.sqrt(1 - cosA * cosA);
  const bend = Math.PI - Math.acos(clamp((la * la + lb * lb - dist * dist) / (2 * la * lb), -1, 1));

  side.copy(pole).addScaledVector(dir, -pole.dot(dir));
  if (side.lengthSq() < 1e-6) {
    side.set(0, 0, 1).addScaledVector(dir, -dir.z);
    if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
  }
  side.normalize();

  elbowDir.copy(dir).multiplyScalar(cosA).addScaledVector(side, sinA);
  perp.copy(side).multiplyScalar(cosA).addScaledVector(dir, -sinA);
  axisY.copy(elbowDir).negate();
  axisZ.copy(perp).multiplyScalar(kind === 'arm' ? -1 : 1);
  axisX.crossVectors(axisY, axisZ);
  basis.makeBasis(axisX, axisY, axisZ);
  qWorld.setFromRotationMatrix(basis);

  upper.parent.updateWorldMatrix(true, false);
  upper.parent.getWorldQuaternion(qParent);
  upper.quaternion.copy(qParent.invert()).multiply(qWorld);
  lower.rotation.set(kind === 'arm' ? -bend : bend, 0, 0);
}
