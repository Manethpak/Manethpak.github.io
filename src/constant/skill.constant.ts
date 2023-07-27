type SkillType = {
  name: string;
  link: string;
  icon: string;
  ignoreColor?: boolean;
  isSvg?: boolean;
}[];

const SKILL: SkillType = [
  {
    name: "vscode",
    link: "https://code.visualstudio.com/",
    icon: "devicon-vscode-plain",
  },
  {
    name: "html 5",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    icon: "devicon-html5-plain-wordmark",
  },
  {
    name: "css 3",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/CSS",
    icon: "devicon-css3-plain-wordmark",
  },
  {
    name: "javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "devicon-javascript-plain",
  },
  {
    name: "typescript",
    link: "https://www.typescriptlang.org/",
    icon: "devicon-typescript-plain",
  },
  {
    name: "python",
    link: "https://python.org",
    icon: "devicon-python-plain",
  },
  {
    name: "go",
    link: "https://go.dev/",
    icon: "devicon-go-original-wordmark",
  },
  {
    name: "tailwindcss",
    link: "https://tailwindcss.com/",
    icon: "devicon-tailwindcss-plain",
  },
  {
    name: "react",
    link: "https://fastapi.tiangolo.com/",
    icon: "devicon-react-original",
  },
  {
    name: "nextjs",
    link: "https://nextjs.org/",
    icon: "devicon-nextjs-original",
    ignoreColor: true,
  },
  {
    name: "nestjs",
    link: "https://nestjs.com/",
    icon: "devicon-nestjs-plain",
  },
  {
    name: "fastapi",
    link: "https://fastapi.tiangolo.com/",
    icon: "devicon-fastapi-plain",
  },
  {
    name: "prisma",
    link: "https://www.prisma.io/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#2d3748" d="M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z"/></svg>`,
    isSvg: true,
  },
  {
    name: "nodejs",
    link: "https://nodejs.org/en/",
    icon: "devicon-nodejs-plain",
  },
  {
    name: "npm",
    link: "https://www.npmjs.com/",
    icon: "devicon-npm-original-wordmark",
  },
  {
    name: "yarn",
    link: "https://yarnpkg.com/",
    icon: "devicon-yarn-plain",
  },
  {
    name: "git",
    link: "https://git-scm.com/",
    icon: "devicon-git-plain",
  },
  {
    name: "github",
    link: "https://github.com/",
    icon: "devicon-github-original",
    ignoreColor: true,
  },
  {
    name: "docker",
    link: "https://www.docker.com/",
    icon: "devicon-docker-plain",
  },
  {
    name: "digitalocean",
    link: "https://www.digitalocean.com/",
    icon: "devicon-digitalocean-plain",
  },
  {
    name: "postgresql",
    link: "https://www.postgresql.org/",
    icon: "devicon-postgresql-plain",
  },
  {
    name: "firebase",
    link: "https://firebase.google.com/",
    icon: "devicon-firebase-plain",
  },
];

export default SKILL;
