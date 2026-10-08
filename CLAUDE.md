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

## En cours : refonte design (branche `prototype/paradigm-redesign`)

- Prototype sur `/prototype` (`components/prototype/VariantA3.astro`, copy dans `content/prototype.ts`), design system Paradigm, offre **Expert Asymétrique** (Drive `102-expert-asymetrique/OFFRE.md` + `SALES.md`).
- Direction retenue : A3R3 (grand format, hero + newsletter sienna). Section problème : choisir entre les variantes du sélecteur (A3R3, B, P, O, L).
- Reste à faire : Damien finalise l'offre et les mots → mettre à jour `prototype.ts` → passer tout le site sous ce design (pages légales et thanks incluses) → publier.
- Ne pas toucher `site.ts` (site en ligne, encore « Conversions Asymétriques™ ») avant la bascule.
