#!/usr/bin/env bash
# Стискає відео для сайту: кладеш оригінали в raw/, отримуєш легкі mp4 + обкладинки в media/.
# Потрібен ffmpeg (один раз):  brew install ffmpeg
#
# Використання (з папки portfolio):
#   ./tools/compress-videos.sh                → усе з raw/ → media/
#   ./tools/compress-videos.sh betterme       → усе з raw/ → media/betterme/
set -euo pipefail
cd "$(dirname "$0")/.."

command -v ffmpeg >/dev/null || { echo "Немає ffmpeg. Встанови: brew install ffmpeg"; exit 1; }

out="media${1:+/$1}"
mkdir -p "$out"
shopt -s nullglob nocaseglob

found=0
for f in raw/*.{mp4,mov,m4v,webm}; do
  found=1
  name="$(basename "${f%.*}" | tr '[:upper:] ' '[:lower:]-')"
  echo "→ $f  ⟶  $out/$name.mp4"
  # 720 px по короткій стороні, H.264 + AAC, faststart — відкривається одразу в будь-якому браузері й на iPhone
  ffmpeg -loglevel error -y -i "$f" \
    -vf "scale='if(gt(iw,ih),-2,720)':'if(gt(iw,ih),720,-2)'" \
    -c:v libx264 -profile:v high -preset slow -crf 26 -pix_fmt yuv420p \
    -c:a aac -b:a 96k -movflags +faststart \
    "$out/$name.mp4"
  # обкладинка з 1-ї секунди
  ffmpeg -loglevel error -y -ss 1 -i "$out/$name.mp4" -frames:v 1 -q:v 4 "$out/$name.jpg"
  du -h "$out/$name.mp4" | awk '{print "   розмір: " $1}'
done

[ $found = 1 ] || echo "У папці raw/ немає відео (.mp4 .mov .m4v .webm)."
