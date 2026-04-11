# Logo · damienpugin]

Brand assets organisés par type. Chaque dossier est auto-contenu : SVG source, template HTML pour rendu Chrome headless, et PNG exportés.

## Structure

```
design/logo/
├── README.md          ← ce fichier
├── export.sh          ← pipeline Chrome headless qui génère tous les PNG
│
├── wordmark/          ← le logo complet « damienpugin] »
│   ├── on-light.svg              source SVG (texte ink, pour fond clair)
│   ├── on-dark.svg               source SVG (texte paper, pour fond sombre)
│   ├── template-on-light.html    rendu Chrome — version ink
│   ├── template-on-dark.html     rendu Chrome — version paper
│   └── exports/
│       ├── on-light-1200.png     1200 × 300 px, transparent
│       ├── on-light-2400.png     2400 × 600 px, transparent
│       ├── on-light-4800.png     4800 × 1200 px, transparent
│       ├── on-dark-1200.png      version paper (pour fond sombre)
│       ├── on-dark-2400.png
│       └── on-dark-4800.png
│
└── favicon/           ← le mini wordmark dp] (favicon, app icon)
    ├── source.svg                source SVG
    ├── template.html             rendu Chrome
    └── exports/
        ├── 16.png                onglet navigateur
        ├── 32.png                favicon standard
        ├── 64.png
        ├── 128.png
        ├── 192.png               Android home screen
        ├── 256.png               apple-touch-icon
        └── 512.png               PWA / OpenGraph
```

## Specs typographiques

- **Fonte** : [Author](https://www.fontshare.com/fonts/author) (Indian Type Foundry, libre)
- **Wordmark** : `damien` (light 300) + `pugin` (bold 700) + `]` (medium 500, vermillon)
- **Favicon** : `d` (light 300) + `p` (bold 700) + `]` (medium 500, vermillon)
- **Couleurs** : ink `#0A0A0A`, paper `#FAF7F2`, vermillon `#F04E30`
- **Pas d'espace** entre les lettres et le bracket

## Régénérer les PNG

```bash
./design/logo/export.sh
```

Le script utilise Chrome headless (présent par défaut sur macOS) — aucune installation. Il efface tous les PNG existants et régénère depuis les templates HTML. La fonte Author est chargée depuis Fontshare via le CDN au moment du rendu (`--virtual-time-budget=6000` laisse 6 s pour le chargement).

Pour modifier un asset : édite le fichier `template-*.html` correspondant (HTML/CSS standard), puis relance `export.sh`.

## Convertir SVG → PNG (autres méthodes)

Les PNG générés par `export.sh` couvrent les besoins courants. Pour des tailles ou variantes spécifiques :

### Figma (le plus simple)
1. Installe la fonte [Author](https://www.fontshare.com/fonts/author) sur ta machine
2. Drag-drop le `.svg` dans Figma
3. Sélectionne le texte → `Cmd+Shift+O` pour le convertir en path (le PNG ne dépendra plus de la fonte)
4. Export → PNG, choisis la taille et le background transparent

### Inkscape CLI
```bash
brew install --cask inkscape
inkscape design/logo/wordmark/on-light.svg \
  --export-type=png \
  --export-filename=output.png \
  --export-width=2000 \
  --export-background-opacity=0
```
Inkscape utilise les fontes système — installe Author d'abord.

### rsvg-convert
```bash
brew install librsvg
rsvg-convert -w 2000 design/logo/wordmark/on-light.svg -o output.png
```
Même contrainte : Author doit être installée localement.

## Tailles recommandées par usage

| Usage | Asset | Taille |
|---|---|---|
| Onglet navigateur | favicon | 16, 32 |
| Bookmark mobile | favicon | 192, 256 |
| Apple touch icon | favicon | 256 |
| OpenGraph image | wordmark on-light + fond paper | 1200 × 630 |
| Email signature | wordmark on-light | 400 |
| Header de site | wordmark on-light | 800 |
| Cover keynote / slide | wordmark on-light ou on-dark | 2400 |
| Print / poster | wordmark | 4800+ |
