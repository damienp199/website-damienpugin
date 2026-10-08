/**
 * PROTOTYPE — copy de la variante A3 (/prototype), repositionnée sur l'offre Expert Asymétrique
 * (Drive : 102-expert-asymetrique/OFFRE.md + SALES.md).
 * Le site réel continue de lire site.ts ; rien ici n'est en production.
 */

export const proto = {
  hero: {
    title: "Systématise ton génie.",
    sub: "Transforme ton service en produit répétable, qui livre les résultats sans dépendre de toi.",
    cta: "Suivre la construction",
    proof: "Je construis cette offre avec les 5 premiers experts.",
  },

  // Bandeau sous le hero : les trois résultats de l'offre
  outcomes: [
    { title: "Un prix fixe", text: "On n'achète plus tes heures, on achète ta méthode." },
    { title: "Un revenu prévisible", text: "Fini le yo-yo entre acquisition et livraison." },
    { title: "Un système qui livre sans toi", text: "Le même chemin pour chaque client." },
  ],

  problem: {
    title: "Tu as construit une prison dorée.",
    center: "Toi",
    fronts: ["Acquisition", "Livraison", "Obligations"],
    // Suivi d'un petit SVG en dents de scie
    outcomeLabel: "Résultat",
    outcome: "des revenus en",
    outcomeAlt: "dents de scie",
  },

  method: {
    title: "Expert Asymétrique",
    intro: "Peu de temps investi, beaucoup de résultats produits.",
    start: "Ton expertise",
    end: "Vente productisée",
    steps: [
      { title: "Framework signature", text: "Sortir ton expertise de ta tête." },
      { title: "Prototype productisé", text: "Une offre à prix fixe et tes premières préventes." },
      { title: "Livraison systématisée", text: "Ton service tourne sans ta présence." },
    ],
  },

  statement: "Remplaçable dans l'exécution. Irremplaçable dans le jugement.",

  // Extraits fidèles des témoignages de site.ts
  quotes: [
    { text: "Damien est une encyclopédie vivante.", name: "Jean Rivière", title: "\"Papa\" du marketing sur le web francophone" },
    { text: "C'est plus des mots, c'est de l'art.", name: "Bastien Desveaux", title: "L'expert en YouTube Ads" },
    { text: "J'ai mes premiers clients et je gagne ma vie en écrivant un mail par jour.", name: "Egon Liberge", title: "Copywriter pour titans du web" },
    { text: "Il t'enseigne la psychologie, les fondamentaux et appuie là où ça fait mal.", name: "Julien Gueniat", title: "Conférencier TEDx, auteur" },
    { text: "Chaque leçon qu'il me transmet me sert à évoluer.", name: "Mélanie Richard", title: "Reine du marketing en ligne" },
  ],

  about: {
    title: "Ce principe, je l'applique depuis longtemps.",
    timeline: [
      { year: "2011", text: "Mon école de DJing tourne avec 6 h par semaine de mon temps. Avant même l'IA." },
      { year: "2016", text: "Consultant. Une centaine d'entrepreneurs et d'experts aidés à systématiser leur activité." },
      { year: "Aujourd'hui", text: "Plus de 3 000 heures passées sur l'IA. Expert Asymétrique." },
    ],
  },

  newsletter: {
    title: "Je construis l'offre avec 5 experts.",
    sub: "Suis chaque étape, documentée de l'intérieur.",
  },
} as const;
