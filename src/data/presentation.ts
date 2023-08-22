type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "renanbbez@gmail.com",
  title: "Hello, I'm an indie app developer based in Brazil! 👋",
  // profile: "/profile.webp",
  description:
    "Renan Bez is a talented **full-stack developer based in Brazil**. With a passion for building digital solutions. His skills lies in understanding the fullstack with tecnologies like **React, Svelte, Firebase and even Rust.** Renan Bez is a dynamic force in the world of technology, constantly pushing boundaries and creating impactful solutions.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/renan-bez-911525257/",
    },
    {
      label: "Github",
      link: "https://github.com/rbbalestrin",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/rb.balestrin",
    },
  ],
};

export default presentation;
