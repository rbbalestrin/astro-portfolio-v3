type Social = {
  label: string;
  link: string;
};

type Apresentacao = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Apresentacao = {
  mail: "renanbbez@gmail.com",
  title: "Olá, sou um desenvolvedor indie sediado no Brasil!👋",
  // perfil: "/perfil.webp",
  description:
    "Renan Bez é um talentoso **desenvolvedor full-stack baseado no Brasil**. Com uma paixão por construir soluções digitais. Suas habilidades estão em compreender o desenvolvimento fullstack com tecnologias como **React, Svelte, Firebase e até mesmo Rust**. Renan Bez é uma força dinâmica no mundo da tecnologia, constantemente empurrando limites e criando soluções impactantes.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/renan-bez-911525257/",
    },
    {
      label: "Github",
      link: "https://github.com/rbbalestrin",
    },
  ],
};

export default presentation;
