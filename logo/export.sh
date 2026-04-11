#!/usr/bin/env bash
# Export tous les PNG transparents du logo damienpugin] via Chrome headless.
# Chaque asset (wordmark / mark / favicon) a son propre dossier qui contient :
#   - source SVG
#   - template HTML rendu par Chrome
#   - exports/ pour les PNG générés
#
# Usage : ./logo/export.sh

set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DIR="$(cd "$(dirname "$0")" && pwd)"

shoot () {
  # shoot <template-path> <width> <height> <output-path>
  local tpl="$1" w="$2" h="$3" out="$4"
  echo "  $(basename "$out")  (${w}×${h})"
  mkdir -p "$(dirname "$out")"
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --hide-scrollbars \
    --no-sandbox \
    --default-background-color=00000000 \
    --force-device-scale-factor=1 \
    --virtual-time-budget=6000 \
    --window-size="${w},${h}" \
    --screenshot="$out" \
    "file://$tpl" \
    > /dev/null 2>&1
}

# Reset all exports
rm -f "$DIR"/wordmark/exports/*.png "$DIR"/favicon/exports/*.png

echo
echo "▸ Wordmark — sur fond clair (texte ink)"
shoot "$DIR/wordmark/template-on-light.html" 1200 300  "$DIR/wordmark/exports/on-light-1200.png"
shoot "$DIR/wordmark/template-on-light.html" 2400 600  "$DIR/wordmark/exports/on-light-2400.png"
shoot "$DIR/wordmark/template-on-light.html" 4800 1200 "$DIR/wordmark/exports/on-light-4800.png"

echo
echo "▸ Wordmark — sur fond sombre (texte paper)"
shoot "$DIR/wordmark/template-on-dark.html" 1200 300  "$DIR/wordmark/exports/on-dark-1200.png"
shoot "$DIR/wordmark/template-on-dark.html" 2400 600  "$DIR/wordmark/exports/on-dark-2400.png"
shoot "$DIR/wordmark/template-on-dark.html" 4800 1200 "$DIR/wordmark/exports/on-dark-4800.png"

echo
echo "▸ Favicon — dp] mini wordmark"
shoot "$DIR/favicon/template.html" 16  16  "$DIR/favicon/exports/16.png"
shoot "$DIR/favicon/template.html" 32  32  "$DIR/favicon/exports/32.png"
shoot "$DIR/favicon/template.html" 64  64  "$DIR/favicon/exports/64.png"
shoot "$DIR/favicon/template.html" 128 128 "$DIR/favicon/exports/128.png"
shoot "$DIR/favicon/template.html" 192 192 "$DIR/favicon/exports/192.png"
shoot "$DIR/favicon/template.html" 256 256 "$DIR/favicon/exports/256.png"
shoot "$DIR/favicon/template.html" 512 512 "$DIR/favicon/exports/512.png"

echo
echo "Terminé."
find "$DIR"/{wordmark,favicon}/exports -name '*.png' | sort | \
  awk -v base="$DIR/" '{ sub(base, "", $0); printf "  %s\n", $0 }'
