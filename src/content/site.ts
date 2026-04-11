/**
 * Source de vérité pour toute la copy du site.
 * Édite ici, les composants lisent depuis cet objet.
 *
 * Les briefs éditoriaux humains (plus longs, brouillons) restent dans /_content/*.md.
 */

export const site = {
  meta: {
    title: "Damien Pugin — Vendre son service sans appels",
    description:
      "Pour les coachs et freelances qui veulent remplacer leurs appels par des contenus qui vendent à leur place. Méthode Conversions Asymétriques™.",
    url: "https://damienpugin.com",
  },

  nav: {
    brand: { first: "Damien", last: "Pugin" },
    cta: "Rejoindre",
  },

  hero: {
    eyebrow: "Méthode Conversions Asymétriques™",
    title: "Vendre son service",
    titleAccent: "sans appels.",
    sub: "Pour les coachs et freelances qui veulent remplacer leurs appels par des contenus qui vendent à leur place.",
    cta: "Suivre la mise en place",
    proof: "Je documente la mise en place du système avec mes premiers clients.",
  },

  problem: {
    eyebrow: "Le problème",
    title: "Tu gères trois fronts",
    titleBreak: "en même temps.",
    items: [
      { num: "01", label: "Marketing", text: "Tu cours après les leads." },
      { num: "02", label: "Vente", text: "Tu passes tes journées en call." },
      {
        num: "03",
        label: "Livraison",
        text: "Et, quand tu as des clients… tu n'as plus le temps de faire ni le marketing, ni la vente.",
      },
    ],
    outcome: "Épuisement et revenus en dents de scie.",
  },

  method: {
    eyebrow: "La méthode",
    title: "Conversions",
    titleAccent: "Asymétriques™",
    intro:
      "Tu es expert dans ton domaine — pas dans le marketing. Ce système te laisse faire ce que tu fais de mieux, pendant que l'IA fait le reste.",
    steps: [
      {
        num: "01",
        title: "Méthode Magnétique",
        text: "Transforme ton expertise en méthode signature claire, scalable et différenciante.",
      },
      {
        num: "02",
        title: "Orchestration de Contenus",
        text: "Sors de la roue de hamster de la création en combinant ta méthode à l'IA pour générer des contenus authentiques.",
      },
      {
        num: "03",
        title: "Vendre sans Appels",
        text: "Ces contenus génèrent la confiance nécessaire pour que les clients achètent… sans appels de vente.",
      },
    ],
  },

  podcast: {
    eyebrow: "Le podcast",
    title: "Le Podcast.",
    sub: "Des stratégies concrètes pour construire un système d'acquisition qui tourne sans toi.",
    captivateShowId: "69358d2b-59c1-4481-b4d8-b42082d1e4af",
  },

  testimonials: {
    eyebrow: "Ils en parlent",
    title: "Quelques clients",
    titleBreak: "et marketeurs connus.",
    featured: {
      name: "Jean Rivière",
      title: "\"Papa\" du marketing sur le web francophone",
      site: "RejoinsLeMouvement.com",
      youtubeId: "h0OX2zlDv90",
      quote:
        "Damien m'a aidé à trouver des réponses que je cherchais depuis des années. Sa vision du métier de créateur est un vent d'air frais dans l'univers du marketing francophone. Damien est une encyclopédie vivante. Chez lui, c'est la bibliothèque d'Alexandrie du marketing. Si tu cherches une idée, il y a beaucoup de chances qu'il l'ait en stock quelque part…",
    },
    others: [
      {
        name: "Bastien Desveaux",
        title: "L'expert en YouTube Ads",
        site: "TubeMastery.net",
        quote: "Mon copywriter préféré ever ! C'est plus des mots, c'est de l'art. Je suis hypnotisé !",
      },
      {
        name: "Egon Liberge",
        title: "Copywriter pour titans du web",
        site: "EgonLiberge.fr",
        quote:
          "Après des années de galère, j'ai fait appel à Damien. Aujourd'hui j'ai quitté mon job de trimard en call center, j'ai mes premiers clients et je gagne ma vie en écrivant un mail par jour.",
      },
      {
        name: "Julien Gueniat",
        title:
          "Expert en organisation, conférencier TEDx et auteur de « 2h chrono pour mieux s'organiser »",
        site: "Organisologie.com",
        quote:
          "Beaucoup d'amateurs vont vous promettre monts et merveilles, mais pas Damien. Il t'enseigne la psychologie, les fondamentaux et appuie là où ça fait mal. Et ça c'est génial.",
      },
      {
        name: "Mélanie Richard",
        title: "Reine du marketing en ligne",
        site: "WonderWildQueen.fr",
        quote:
          "C'est l'un des seuls entrepreneurs que je suis régulièrement, car il ne se contente pas de former avec superficialité. Chaque leçon qu'il me transmet me sert à évoluer aujourd'hui et sur le long terme.",
      },
    ],
  },

  about: {
    eyebrow: "À propos",
    title: "15 ans",
    titleLine2: "d'entrepreneuriat.",
    titleAccent: "Un système.",
    paragraphs: [
      "Suisse, entrepreneur digital depuis 2011. J'ai d'abord été formateur leader de la thématique DJ en francophonie. En 2016, j'ai pivoté pour accompagner les gros de la creator economy.",
      "15 ans d'entrepreneuriat m'ont appris une chose : la difficulté d'un business de service, c'est de devoir être au four et au moulin… générer des leads, convertir des prospects, délivrer des résultats. En même temps. En continu.",
      "Ceux qui gèrent ces trois fronts durablement sont l'exception. C'est pour ça que j'ai développé **Conversions Asymétriques™** : la machine à contenus qui remplacent les appels de vente.",
    ],
    outro: {
      linkText: "Rejoins ma newsletter",
      linkHref: "#newsletter",
      suffix: "si tu veux arrêter de jongler.",
    },
  },

  newsletter: {
    eyebrow: "Newsletter",
    title: "Je construis le système",
    titleAccent: "en live.",
    sub: "Je documente chaque étape avec mes premiers clients — stratégies, erreurs, ajustements. Rejoins la liste pour suivre la mise en place de l'intérieur.",
    cta: "Je suis la mise en place en direct",
    placeholder: "Ma meilleure adresse email",
    disclaimer: "Désabonnement en 1 clic. Zéro spam.",
  },

  footer: {
    copyright: "Damien Pugin. Tous droits réservés.",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "CGV", href: "/cgv" },
      { label: "Confidentialité", href: "/politique-de-confidentialite" },
    ],
  },

  // Kit (ex-ConvertKit) — form partagé entre Hero et Newsletter
  kit: {
    formId: "1528990",
  },
} as const;

export type Site = typeof site;
