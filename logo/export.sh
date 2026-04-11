#!/usr/bin/env bash
# Export tous les PNG transparents du logo damienpugin] via Chrome headless.
# Usage : ./logo/export.sh

set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DIR="$(cd "$(dirname "$0")" && pwd)"
TPL="$DIR/templates"
OUT="$DIR/exports"

mkdir -p "$OUT"
rm -f "$OUT"/*.png

shoot () {
  local file="$1" w="$2" h="$3" out="$4"
  echo "  $out  (${w}×${h})"
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --hide-scrollbars \
    --no-sandbox \
    --default-background-color=00000000 \
    --force-device-scale-factor=1 \
    --virtual-time-budget=6000 \
    --window-size="${w},${h}" \
    --screenshot="$OUT/$out" \
    "file://$TPL/$file" \
    > /dev/null 2>&1
}

echo
echo "▸ Wordmark complet — ink (transparent)"
shoot wordmark-trans-ink.html 1200 300 wordmark-ink-1200.png
shoot wordmark-trans-ink.html 2400 600 wordmark-ink-2400.png
shoot wordmark-trans-ink.html 4800 1200 wordmark-ink-4800.png

echo
echo "▸ Wordmark complet — paper (transparent, pour fond sombre)"
shoot wordmark-trans-paper.html 1200 300 wordmark-paper-1200.png
shoot wordmark-trans-paper.html 2400 600 wordmark-paper-2400.png
shoot wordmark-trans-paper.html 4800 1200 wordmark-paper-4800.png

echo
echo "▸ Mark seul — ] vermillon (transparent)"
shoot mark-trans.html 64 64 mark-64.png
shoot mark-trans.html 128 128 mark-128.png
shoot mark-trans.html 256 256 mark-256.png
shoot mark-trans.html 512 512 mark-512.png
shoot mark-trans.html 1024 1024 mark-1024.png

echo
echo "▸ Favicon · dp] mini wordmark (validé)"
shoot favicon-dp-mini.html 16 16 favicon-16.png
shoot favicon-dp-mini.html 32 32 favicon-32.png
shoot favicon-dp-mini.html 64 64 favicon-64.png
shoot favicon-dp-mini.html 128 128 favicon-128.png
shoot favicon-dp-mini.html 192 192 favicon-192.png
shoot favicon-dp-mini.html 256 256 favicon-256.png
shoot favicon-dp-mini.html 512 512 favicon-512.png

echo
echo "Terminé."
ls -lh "$OUT"/*.png | awk '{printf "  %-44s  %s\n", $9, $5}'
