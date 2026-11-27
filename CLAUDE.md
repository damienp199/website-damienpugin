# CLAUDE.md — www-damienp

Site français de Damien Pugin, `damienpugin.com`.

**Offre** : Expert Asymétrique — systématiser le génie d'un fondateur qui vend son expertise (source : Drive `2-BUSINESS/Produits/expert-asymetrique`, `OFFRE.md` + `SALES.md`).

**Objectif business** : amener le visiteur à écrire sur WhatsApp. Lien `/dm` = Redirect Rule Cloudflare vers WhatsApp (pas dans le repo). Plus de formulaire Kit sur le site ; seules les pages de remerciement Kit subsistent.

## Structure du repo

```
design/                 → logo, ancienne palette (obsolète)
site/                   → app Astro (racine npm)
  public/               → favicons
  src/
    content/prototype.ts → copy de la page d'accueil
    content/site.ts      → témoignages historiques, podcast, liens du footer (le reste est l'ancienne copy, plus affichée)
    components/prototype/
      VariantFil.astro   → toute la page d'accueil (sections, styles)
      SiteHeader.astro, SiteFooter.astro → barre et pied des pages légales / thanks
      Wordmark.astro, Icon.astro
    layouts/
      Paradigm.astro     → coquille commune (head, reset, thème sombre)
      Legal.astro, Thanks.astro
    pages/               → index + cgv, mentions-legales, politique-de-confidentialite, thanks/*
    styles/prototype/    → tokens.css + bundle.css
```

Stack : **Astro 5**, CSS pur, pas de framework JS ni de Tailwind. Déploiement Cloudflare Workers (assets statiques) via `wrangler deploy` dans `.github/workflows/cloudflare-pages.yml` à chaque push sur `main` ; config dans `site/wrangler.jsonc`, secrets GitHub `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`. www → apex via Redirect Rule Cloudflare.

## Design

- Design system **Paradigm** : source dans le Drive `2-BUSINESS/Marketing/brand-design/_design-system` (lire son `README.md`), copié tel quel dans `styles/prototype/`. Toute couleur vient d'un token.
- **Thème sombre uniquement** : `data-theme="dark"` sur `<html>` dans `Paradigm.astro`. Pas de bascule.
- Sur fond sienna, le texte est sombre (`--grey-100`), jamais blanc (contraste 3:1 insuffisant).
- Pas de capitales ni d'espacement de lettres (règle Paradigm).

## Texte

- Les mots sont ceux de Damien : ne pas reformuler lors d'un travail de design, proposer et faire valider.
- Accueil : `content/prototype.ts`. Les composants lisent cet objet, pas de texte en dur (sauf les libellés du menu dans `VariantFil.astro`).
- Pages légales et thanks : texte en dur dans chaque `.astro`.

## Commandes

Toujours depuis `site/` :

```bash
npm run dev      # astro dev
npm run build    # astro build
npm run preview  # astro preview
```

Le serveur de dev sert parfois un CSS en retard d'une modification : le redémarrer avant de juger un rendu.
