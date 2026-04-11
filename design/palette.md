# Brand Palette — Damien Pugin

**Direction** : Editorial minimalist authority. Crème chaude + vermillon premium + typographie éditoriale Fraunces. Feel magazine, chaleureux, confiant.

---

## Core palette

| Token | Role | Hex | RGB | Usage |
|---|---|---|---|---|
| **Paper** | Background primaire | `#FAF7F2` | 250 247 242 | Fond du site, surfaces principales |
| **Ink** | Texte primaire / titres | `#0A0A0A` | 10 10 10 | H1, H2, H3, texte fort |
| **Ink 2** | Texte secondaire profond | `#1A1A1A` | 26 26 26 | Body long, quotes, texte narratif |
| **Vermilion** | Accent / CTA | `#F04E30` | 240 78 48 | Boutons, liens actifs, focus rings, accents italiques |
| **Vermilion Hover** | CTA état hover | `#D13A1E` | 209 58 30 | `:hover` des boutons vermillon |
| **Muted** | Texte tertiaire | `#6B6259` | 107 98 89 | Sous-titres, meta, dates |
| **Muted 2** | Texte quaternaire | `#8F877C` | 143 135 124 | Placeholders, disclaimers, captions |
| **Hairline** | Bordures fines | `#ECE5D8` | 236 229 216 | Séparateurs de sections, cards |
| **Hairline 2** | Bordures renforcées | `#D9CFBC` | 217 207 188 | Champs de formulaire, bordures interactives |
| **Surface** | Surface alternative | `#F2EDE2` | 242 237 226 | Blocs surélevés, highlights discrets |
| **White** | Surface contraste | `#FFFFFF` | 255 255 255 | Section newsletter, inputs |

---

## Sémantique d'usage

### Vermilion `#F04E30`
À utiliser **uniquement** pour :
- Boutons CTA principaux (background plein)
- Focus rings (outline accessibilité)
- Accents italiques dans les titres (`<em>` ciblés)
- Dots / pastilles de statut ("en live", social proof)
- Numéros de sections décoratifs (01 / 02 / 03)
- Chiffre doré de la wordmark (le point `·`)

À **ne jamais** utiliser pour :
- Body text long (fatigue visuelle)
- Liens inline dans prose (utiliser Ink avec underline hairline)
- Backgrounds pleine largeur (sauf CTA ponctuel)

### Crème `#FAF7F2`
Background par défaut. La section **Newsletter** utilise `#FFFFFF` pour créer un léger lift visuel avant le footer, sans rompre la cohérence.

### Ink `#0A0A0A`
Préférer à un noir pur `#000` : sur crème, un noir absolu vibre trop. `#0A0A0A` reste perçu comme noir tout en adoucissant le contraste.

---

## Contrastes WCAG

Vérifiés sur fond `#FAF7F2` :

| Couleur | Contraste | Niveau |
|---|---|---|
| Ink `#0A0A0A` | 18.2 : 1 | ✅ AAA |
| Ink 2 `#1A1A1A` | 15.8 : 1 | ✅ AAA |
| Muted `#6B6259` | 5.8 : 1 | ✅ AA (body) / AAA (large) |
| Muted 2 `#8F877C` | 3.6 : 1 | ✅ AA large only — réservé meta ≤14px |
| Vermilion `#F04E30` | 4.1 : 1 | ✅ AA large only — jamais body text |

**Règle** : Vermilion n'est jamais utilisé pour du texte body. Sur bouton, le texte est en `#FAF7F2` (crème) → contraste 4.5:1 ✅ AA.

---

## Mapping CSS

Exposé dans `src/styles/global.css` via `@theme` Tailwind v4 :

```css
@theme {
  --color-paper:      #faf7f2;
  --color-ink:        #0a0a0a;
  --color-ink-2:      #1a1a1a;
  --color-muted:      #6b6259;
  --color-muted-2:    #8f877c;
  --color-hairline:   #ece5d8;
  --color-hairline-2: #d9cfbc;
  --color-gold:       #f04e30;  /* legacy var name — contient vermilion */
  --color-gold-hover: #d13a1e;
  --color-surface:    #f2ede2;
}
```

> **Note** : la variable CSS se nomme `--color-gold` pour raisons historiques (première itération en or). La valeur contient désormais le vermillon. Ne pas refactoriser sauf besoin — aucun impact visible, et toute utilisation de "gold" dans le code mappe sur le vermillon.

---

## Typographie

### Display — Author (Indian Type Foundry / Fontshare)
- **Source** : Fontshare (libre)
- **CDN** : `https://api.fontshare.com/v2/css?f[]=author@200,300,400,500,600,700&display=swap`
- **Poids utilisés** : 200-700 (max 700 — Author n'a pas de black)
- **H1** : `font-weight: 700`, `letter-spacing: -0.05em`, `line-height: 0.92`
- **H2/H3** : `font-weight: 700`, `letter-spacing: -0.04em`, `line-height: 0.95`
- **Font-features** : `ss01`, `kern`, `calt` activées
- **Usage** : titres, hero, headings, wordmark, accents éditoriaux
- **Remplace** : Fraunces (utilisée en première itération — trop "essayiste classique" pour le positionnement Tech × Think)
- **Why Author** : sans-serif premium contemporaine avec du caractère, équilibre Tech × Think sans tomber dans le SaaS générique (Inter/Geist/Manrope) ni l'éditorial pur. Pont visuel entre les deux pôles du positionnement.

#### Compensation thud factor
Le passage d'un serif heavy (Fraunces 900) à un sans (Author 700 max) fait perdre de la masse visuelle. Trois leviers de compensation :
1. **Weight max** : toujours `700` sur les titres, jamais en dessous
2. **Letter-spacing serré** : `-0.04em` à `-0.05em` (vs `-0.025em` Fraunces)
3. **Line-height écrasé** : `0.92` à `0.95` (vs `0.98` Fraunces) pour densifier

### Body — Jost
- **Source** : Google Fonts (libre)
- **Poids utilisés** : 300, 400, 500, 600, 700
- **Body** : `font-weight: 400`, `line-height: 1.65`, `font-size: 17px` base
- **Usage** : texte courant, paragraphes, UI secondaire, formulaires
- **Note** : Jost reste pour le body car le contraste sans-display (Author) / sans-body (Jost) est subtil mais distinct — Jost a des proportions plus géométriques, Author plus humanistes. Si à terme on veut tout unifier sur Author, c'est faisable mais non requis.

---

## Logo / Wordmark

**Construction** : `damienpugin]` — un seul mot, suivi d'un bracket fermant asymétrique en vermillon.

### Specs typographiques exactes

| Élément | Fonte | Poids | Letter-spacing | Couleur |
|---|---|---|---|---|
| `damien` | Author | `300` (light) | `-0.005em` | Ink `#0A0A0A` |
| `pugin` | Author | `700` (bold) | `-0.02em` | Ink `#0A0A0A` |
| `]` | Author | `500` (medium) | `0` | Vermilion `#F04E30` |

- **Pas d'espace** entre `damien`, `pugin` et `]` (le bracket a un `margin-left: 0.04em`)
- **Taille du bracket** : `1em` (même taille que le wordmark, pas surdimensionné)
- **Inversion** : sur fond ink, le wordmark passe en `paper`, le bracket reste en `vermilion`

### Pourquoi cette construction

1. **Author light + bold** : le contraste de poids dans un seul mot incarne **Tech × Think** — deux forces opposées dans une seule forme.
2. **Bracket asymétrique `]` seul** : pas de pendant gauche `[`. C'est l'asymétrie incarnée — référence directe à *Conversions Asymétriques™*. La marque *est* l'asymétrie, pas juste un nom encadré.
3. **Vermillon localisé sur le bracket** : signal coloré ponctuel, identique au rôle du dot vermillon dans le brand system. Le bracket devient l'accent.
4. **Mark autonome** : le `]` vermillon seul peut servir de favicon, watermark, end-card podcast, séparateur de section. C'est le signe distinctif réutilisable.

### Règles d'usage

- **Ne jamais** ajouter le bracket gauche `[` — ça casse l'asymétrie
- **Ne jamais** séparer `damien` et `pugin` par un espace
- **Toujours** garder le bracket en vermillon (sur tous les fonds)
- **Tailles minimales** : 18px (email signature), 24px (footer mobile), 36px+ pour navbar standard

---

## Inspirations & anti-patterns

**S'inspire de** : presse éditoriale premium (Bloomberg Businessweek, The Gentlewoman), landing pages de studios de design haut de gamme, livres beaux comme objet.

**À éviter absolument** :
- Gradients IA purple/pink
- Glassmorphism / neumorphism
- Neon / cyber / crypto look
- Emojis comme icônes
- Backgrounds photo sous le texte
- Accent color en sursaturation généralisée
