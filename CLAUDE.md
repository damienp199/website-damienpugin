# CLAUDE.md — www-damienp

Site one-page français pour Damien Pugin.

**Service** : Aider coachs et freelances à remplacer leurs appels de vente par des contenus qui vendent à leur place (méthode Conversions Asymétriques™).

**Objectif business** : Capturer des emails via Kit (ex-ConvertKit), formId dans `site.kit.formId`.

## Structure du repo

```
design/                 → logo, palette
site/                   → app Astro (racine npm)
  astro.config.mjs
  public/               → favicons
  src/
    content/site.ts     → SOURCE DE VÉRITÉ pour toute la copy
    components/*.astro  → un composant par section
    layouts/            → Base, Legal, Thanks
    pages/              → index.astro + cgv, mentions-legales, politique-de-confidentialite, thanks/*
    styles/global.css   → Tailwind v4
```

Stack : **Astro 5 + Tailwind 4**. Pas de framework JS. Déploiement Cloudflare Workers (assets statiques) via `wrangler deploy` dans `.github/workflows/cloudflare-pages.yml` à chaque push sur `main` ; config dans `site/wrangler.jsonc`, secrets GitHub `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`. Domaine `damienpugin.com` attaché au Worker ; www → apex via Redirect Rule Cloudflare.

## Mettre à jour le texte

**Tout le texte vit dans `site/src/content/site.ts`.** Un seul fichier, typé via `as const`. Les composants `.astro` lisent depuis cet objet — ne jamais hardcoder du texte dans un composant.

Mapping section → clé :

| Section            | Clé `site.*`     | Composant                  |
| ------------------ | ---------------- | -------------------------- |
| Meta SEO           | `meta`           | `layouts/Base.astro`       |
| Nav                | `nav`            | `components/Nav.astro`     |
| Hero               | `hero`           | `Hero.astro`               |
| Problème           | `problem`        | `Problem.astro`            |
| Méthode (3 étapes) | `method`         | `Method.astro`             |
| Podcast            | `podcast`        | `Podcast.astro`            |
| Témoignages        | `testimonials`   | `Testimonials.astro`       |
| About              | `about`          | `About.astro`              |
| Newsletter         | `newsletter`     | `Newsletter.astro`         |
| Footer             | `footer`         | `Footer.astro`             |
| Kit form ID        | `kit.formId`     | `EmailForm.astro`          |

Pages légales (`cgv`, `mentions-legales`, `politique-de-confidentialite`) : texte en dur dans les `.astro` correspondants, pas dans `site.ts`.

Pages de remerciement post-inscription Kit : `pages/thanks/newsletter-{subscribed,reengaged,segmented,wait}.astro` via `layouts/Thanks.astro`.

## Modifier la structure / le design

- Composants : `site/src/components/*.astro` — un par section, ordre d'affichage dans `pages/index.astro`.
- Styles globaux + tokens Tailwind : `site/src/styles/global.css`.
- Palette de référence : `design/palette.md`.
- Favicons (light + dark, plusieurs tailles) : `site/public/`.

## Commandes

Toujours depuis `site/` :

```bash
npm run dev      # astro dev
npm run build    # astro build
npm run preview  # astro preview
```

## Page d'accueil : design Paradigm (en ligne)

- `pages/index.astro` → `components/prototype/VariantFil.astro`, copy dans `content/prototype.ts` (offre **Expert Asymétrique**, Drive `2-BUSINESS/Produits/expert-asymetrique`). Styles : `styles/prototype/{tokens,bundle}.css` (design system Paradigm, Drive `2-BUSINESS/Marketing/brand-design/_design-system`).
- Thème sombre uniquement (`data-theme="dark"` sur `<html>`). CTA unique : WhatsApp via `/dm` (Redirect Rule Cloudflare, pas dans le repo). Plus de formulaire Kit sur l'accueil.
- Reste à faire : pages légales et thanks encore sur l'ancien design (Tailwind, `site.ts`, composants `Nav`/`Footer`…). Le mapping `site.*` ci-dessus ne vaut plus que pour elles.
- Dev : le serveur Astro sert parfois un CSS en retard d'une modification → le redémarrer.
