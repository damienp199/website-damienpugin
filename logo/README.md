# Logo · damienpugin]

Source files du wordmark et instructions d'export PNG.

## Fichiers

| Fichier | Usage |
|---|---|
| `damienpugin-logo-light.svg` | Wordmark complet, ink (#0A0A0A) sur fond clair, bracket vermillon |
| `damienpugin-logo-dark.svg` | Wordmark complet, paper (#FAF7F2) sur fond sombre, bracket vermillon |
| `damienpugin-mark.svg` | Mark autonome — juste le `]` vermillon (favicon, watermark, end-card) |
| `export.html` | Page HTML qui rend toutes les variantes en grand format pour screenshot/export |

## Specs typographiques

- **Fonte** : [Author](https://www.fontshare.com/fonts/author) (Indian Type Foundry, libre)
- **Construction** : `damien` (light 300) + `pugin` (bold 700) + `]` (medium 500, vermillon)
- **Couleurs** : ink `#0A0A0A`, paper `#FAF7F2`, vermillon `#F04E30`
- **Pas d'espace** entre `damien`, `pugin` et `]`

## Convertir SVG → PNG

Quatre options, du plus simple au plus contrôlé.

### Option 1 — Figma (le plus simple, recommandé)

1. Télécharge la fonte Author depuis https://www.fontshare.com/fonts/author et installe-la sur ton Mac
2. Ouvre [figma.com](https://figma.com) (gratuit)
3. Drag-drop le `.svg` dans Figma
4. Sélectionne le texte → clic droit → **Outline stroke** (ou `Cmd+Shift+O` pour convertir en path) — important pour que le PNG ne dépende plus de la fonte
5. Sélectionne le frame → panneau Export à droite → choisis PNG, taille (1x, 2x, 4x), background transparent
6. Export

**Avantage** : tu obtiens des PNG transparents à n'importe quelle taille, et tu peux dupliquer/modifier facilement.

### Option 2 — Chrome headless (zéro install, automatisable)

Ouvre `export.html` dans Chrome puis dans la console DevTools :
1. Clic droit sur l'élément `.frame` que tu veux exporter
2. **Inspect**
3. Dans le panneau Elements, clic droit sur le node → **Capture node screenshot**
4. PNG téléchargé instantanément (taille = taille du node à l'écran)

Pour une résolution plus élevée, zoom in dans Chrome (Cmd +) avant d'inspect, ou ajoute une règle CSS `transform: scale(2)` temporaire.

### Option 3 — CLI avec rsvg-convert (le plus rapide pour batch)

```bash
brew install librsvg

# Wordmark light, 1024px de large
rsvg-convert -w 1024 logo/damienpugin-logo-light.svg -o damienpugin-1024.png

# Wordmark dark, 2048px
rsvg-convert -w 2048 logo/damienpugin-logo-dark.svg -o damienpugin-dark-2048.png

# Mark seul, 512px
rsvg-convert -w 512 logo/damienpugin-mark.svg -o mark-512.png
```

**Limite** : `rsvg-convert` ne télécharge pas les fontes web. Il faut que **Author soit installée localement** sur ta machine pour que le rendu soit correct. Sinon il fallback sur une fonte système (le résultat ne sera pas fidèle).

### Option 4 — Inkscape CLI (alternative à rsvg)

```bash
brew install --cask inkscape

inkscape logo/damienpugin-logo-light.svg \
  --export-type=png \
  --export-filename=damienpugin-1024.png \
  --export-width=1024 \
  --export-background-opacity=0
```

Inkscape utilise aussi les fontes système — installe Author d'abord.

## Workflow recommandé pour des assets pro

1. Installe Author une fois pour toutes (Fontshare → download → double-clic → Install)
2. Ouvre les SVG dans Figma
3. Convertis le texte en outline (`Cmd+Shift+O`)
4. Sauvegarde une copie outlined comme master (le texte n'est plus éditable mais le PNG est portable partout)
5. Exporte aux tailles dont tu as besoin : 512, 1024, 2048 pour les assets web/social, 4096+ pour print

## Tailles recommandées

| Usage | Taille (largeur) |
|---|---|
| Favicon | 32, 64, 128, 256 px (carré, mark `]` seul) |
| Avatar social (Twitter/LinkedIn) | 400 px (carré, mark `]` seul) |
| Open Graph image | 1200 × 630 px (wordmark complet centré) |
| Email signature | 200-400 px |
| Watermark vidéo | 100-200 px (mark seul) |
| Print / cover | 2048 px+ |
