"""Hoja de contacto: python3 tools/sheet.py out.png cols scale img1 img2 ..."""
import sys
from PIL import Image, ImageDraw
out, cols, scale = sys.argv[1], int(sys.argv[2]), float(sys.argv[3])
files = sys.argv[4:]
ims = [Image.open(f).convert('RGB') for f in files]
w, h = ims[0].size
tw, th = int(w * scale), int(h * scale)
rows = (len(ims) + cols - 1) // cols
S = Image.new('RGB', (tw * cols, th * rows), (10, 10, 10))
d = ImageDraw.Draw(S)
for i, im in enumerate(ims):
    x, y = (i % cols) * tw, (i // cols) * th
    S.paste(im.resize((tw, th)), (x, y))
    d.text((x + 6, y + 4), files[i].split('/')[-1].replace('.png', ''), fill=(255, 255, 255))
S.save(out)
print(S.size)
