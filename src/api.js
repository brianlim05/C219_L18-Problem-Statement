export const diplomas = [
  {
    id: "D3A",
    name: "Diploma in Applied AI & Analytics (R13)",
    description:
      "Gain expertise in AI principles, data analytics, and software application development to solve real-world problems.",
    modules: [
      {
        id: "C389",
        name: "AI Solution Design and Implementation",
        details:
          "Equips students with the knowledge and practical skills to design, implement, and evaluate artificial intelligence (AI) solutions across real-world contexts.",
        duration: "24 weeks",
        level: "Year 2",
      },
      {
        id: "C387",
        name: "Machine Learning for Predictive Analytics",
        details:
          "Equips students with advanced knowledge and practical skills in data mining and machine learning, with emphasis on supervised and unsupervised algorithms for predictive modelling.",
        duration: "24 weeks",
        level: "Year 2",
      },
    ],
  },
  {
    id: "DIT",
    name: "Diploma in Information Technology (R47)",
    description:
      "Choose from Full Stack Development, IT Solutions Management, or Business Digitalisation to gain specialised skills for the tech industry.",
    modules: [
      {
        id: "C218",
        name: "UI/UX Design for Apps",
        details:
          "Equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        duration: "24 weeks",
        level: "Year 2",
      },
      {
        id: "C220",
        name: "Digital Storefront Creation",
        details:
          "Equips students with the knowledge and skills to conceptualise and develop a responsive digital store in today’s mobile-first commerce landscape.",
        duration: "24 weeks",
        level: "Year 2",
      },
    ],
  },
  {
    id: "DIFT",
    name: "Diploma in Financial Technology (R18)",
    description:
      "Develop software skills, explore key FinTech concepts, and gain valuable experience through internships or start your own FinTech venture.",
    modules: [
      {
        id: "C369",
        name: "Financial Technologies",
        details:
          "Offers a comprehensive study of Financial Technologies (FinTech) and their application in strengthening compliance processes within the financial and banking sectors.",
        duration: "24 weeks",
        level: "Year 2",
      },
      {
        id: "C368",
        name: "Financial Ecosystems",
        details:
          "Learn about the different types of financial institutions, their roles and functions in the financial industry, how they interact with each other and their significance to the economy.",
        duration: "24 weeks",
        level: "Year 2",
      },
    ],
  },
];

export function getDiplomas() {
  return diplomas.map((d) => ({
    id: d.id,
    name: d.name,
    description: d.description,
    modulesCount: d.modules.length,
  }));
}

export function getDiploma(diplomaId) {
  return diplomas.find((d) => d.id === diplomaId);
}

export function getModule(diplomaId, moduleId) {
  const d = getDiploma(diplomaId);
  if (!d) return null;
  return d.modules.find((m) => m.id === moduleId) || null;
}

export function getFavs() {
  const raw = localStorage.getItem("rp_favs");
  if (!raw) return [];
  try {
    const array = JSON.parse(raw);
    return Array.isArray(array) ? array : [];
  } catch {
    return [];
  }
}

export function setFavs(array) {
  localStorage.setItem("rp_favs", JSON.stringify(array));
}

export function toggleFav(diplomaId, moduleId) {
  const key = diplomaId + ":" + moduleId;
  const favs = getFavs();
  const idx = favs.indexOf(key);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(key);
  setFavs(favs);
  return favs;
}

export function isFav(diplomaId, moduleId) {
  const key = diplomaId + ":" + moduleId;
  return getFavs().includes(key);
}
