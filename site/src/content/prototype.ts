/**
 * Copy de la page d'accueil (offre Expert Asymétrique), lue par components/prototype/VariantFil.astro.
 * Mots repris tels quels de la sales page (Drive : 102-expert-asymetrique/SALES.md).
 * Page d'accueil : philosophie + promesse, pas l'offre (ni prix, ni garantie, ni phases).
 * Les pages légales et thanks lisent encore site.ts.
 */

export const proto = {
  whatsapp: "/dm",

  // Onglet du navigateur et résultat Google. Composé par Claude à partir des phrases de la page, à valider.
  meta: {
    title: "Damien Pugin — Un business qui n'a plus besoin de tes bras",
    description: "Tu es fondateur et tu vends ton expertise ? Mon plan d'évasion pour toi : devenir un expert asymétrique et systématiser ton génie.",
  },

  hero: {
    title: "Un business qui n'a plus besoin de tes bras.",
    // Désigne l'avatar, au-dessus du titre (variante FIL)
    avatar: "Tu es fondateur et tu vends ton expertise ?",
    ctaLead: "Je veux systématiser mon génie",
    cta: "Envoyer un WhatsApp",
  },

  // Bandeau sous le hero : « Autrement dit… »
  outcomes: [
    { title: "Une offre non négociable.", text: "" },
    { title: "Un service standardisé", text: "pour tous tes clients." },
    { title: "Un framework propriétaire", text: "pour déléguer ou automatiser le service." },
  ],

  problem: {
    questions: [
      "Tu jongles entre acquisition, livraison et le reste ?",
      "Tu ne peux pas partir en vacances sans que ton business parte en vrille ?",
    ],
    title: "Alors, tu as construit une prison dorée.",
    // Variantes « question » : « Des revenus en ⩘ » seul à gauche
    titleAlt: "Des revenus en",
    titleAltSub: "Ton business ressemble peut-être à ça…",
    center: "Toi",
    fronts: ["Acquisition", "Livraison", "Le reste"],
    outcomeLabel: "Résultat",
    outcome: "des revenus qui font du yo‑yo",
  },

  // Juste après le problème : la réponse, suivie des 3 points
  plan: { lead: "Mon plan d'évasion :", title: "Systématiser ton génie." },

  philosophy: {
    // 10 / 80 / 10 : tu restes indispensable là où tu dois l'être
    title: "Expert asymétrique",
    intro: "Tant que ton expertise reste dans ta tête, chaque client a besoin de toi à chaque étape.",
    // Framework 10 / 80 / 10 : les deux 10 % (sienna) = les 20 % où personne ne peut te remplacer
    split: [
      { pct: "10 %", label: "Décision", you: true },
      { pct: "80 %", label: "Exécution", you: false },
      { pct: "10 %", label: "Validation", you: true },
    ],
    // Sous la barre (verbatim sales page)
    body: "Mon objectif : t'extraire des 80 % de l'exécution et te focaliser sur les 20 % où personne ne peut te remplacer.",
  },

  quotes: {
    // Les anciens témoignages (Jean Rivière + 4) sont lus depuis site.testimonials, texte inchangé
    title: "Quelques clients et marketeurs connus.",
    items: [
      {
        text: "Au début, j'étais dans le dur... Ma vie d'aujourd'hui n'a plus rien à voir avec ma vie d'avant. Cet été, je bosse 3 jours par semaine, un jour à la maison pour l'admin, et un jour où je me laisse la possibilité de faire autre chose, comme de la formation. Et je ne crois pas avoir perdu en termes de gains.",
        name: "Emilie Perrollaz",
        title: "Infirmière en santé mentale, indépendante",
      },
      {
        text: "Comparé à avant le système, je gagne un temps fou, et surtout une énergie de fou. […] Je suis capable de publier sans ouvrir YouTube : la description et les mots-clés sont faits automatiquement.",
        name: "Samy Alami",
        title: "Coach de Guitariste Libre – la meilleure formation guitare francophone",
      },
      {
        text: "Là, j'ai énormément avancé. J'ai presque fini tous les mails d'ici le mois de mai. Ça fait environ un mois d'avance sur les emails.",
        name: "Francisco Teixeira",
        title: "rédacteur emails des plus gros formateurs en investissement",
      },
    ],
  },

  why: {
    title: "Pourquoi ?",
    lines: [
      "J'ai voyagé ces 10 dernières années... sans me sentir libre.",
      "J'étais dans les plus beaux pays du monde... prisonnier derrière l'écran de mon Mac.",
    ],
    punch: "La liberté, c'est de ne pas avoir besoin d'être à un endroit précis, à un moment précis.",
    close: "Et, avec l'IA c'est devenu possible sans équipe (ou micro équipe).",
  },

  about: {
    title: "Je l'applique depuis longtemps.",
    timeline: [
      { year: "2011", text: "Mon école de DJing, leader du marché entre 2011 et 2016, tournait en 6 h par semaine (bien avant l'IA)." },
      { year: "2016", text: "Consultant depuis 2016, j'ai aidé un peu moins d'une centaine d'entrepreneurs en 1:1 à systématiser leur activité, sans embaucher." },
      { year: "Aujourd'hui", text: "Et ces 3 dernières années, j'ai passé près de 5'000 heures à trouver comment utiliser l'IA pour systématiser un business de service." },
    ],
  },

  // Variante FIL : le plan d'évasion titre la section 10/80/10, puis « Systématise ton génie » titre les 3 points
  fil: {
    planLead: "Mon plan d'évasion pour toi :",
    planTitle: "Devenir un expert asymétrique.",
    // Transition plan → comment (proposée par Claude, à valider)
    stepsLead: "Comment ?",
    stepsTitle: "Systématise ton génie.",
    // CTA du hero : question, puis bouton
    heroLead: "Tu veux systématiser ton génie ?",
    heroCta: "WhatsApp moi",
  },

  // Fin de page : WhatsApp en principal
  contact: {
    lead: "Si ça te ressemble et que tu aimerais travailler avec moi :",
    title: "Lance-moi un WhatsApp.",
    sub: "Et, on voit comment je peux t'aider au mieux.",
  },

} as const;
