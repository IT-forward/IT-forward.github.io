import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { FaLinux } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiCodepen } from "react-icons/fi";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";

export const lessonsData = {
  html: {
    title: "HTML5",
    icon: () => <AiFillHtml5 className="icon-group html" />,
    path: "#",
    description: `
      HTML - we can
      put here
      as many lines
      as we want.
    `,
  },
  css: {
    title: "CSS3",
    icon: () => <DiCss3 className="icon-group css" />,
    path: "#",
    description: `
      CSS - we can
      put here
      as many lines
      as we want.
    `,
  },
  sass: {
    title: "SASS",
    icon: () => <DiSass className="icon-group sass" />,
    path: "#",
    description: `
      SASS - we can
      put here
      as many lines
      as we want.
    `,
  },

  bootstrap: {
    title: "BOOTSTRAP",
    icon: () => <FaBootstrap className="icon-group bootstrap" />,
    path: "#",
    description: `
      BOOTSTRAP - we can
      put here
      as many lines
      as we want.
    `,
  },
  netlify: {
    title: "NETLIFY",
    icon: () => <SiNetlify className="icon-group netlify" />,
    path: "#",
    description: `
      NETLIFY - we can
      put here
      as many lines
      as we want.
    `,
  },
  git: {
    title: "GIT",
    icon: () => <FaGitAlt className="icon-group git" />,
    path: "#",
    description: `
      GIT - we can
      put here
      as many lines
      as we want.
    `,
  },
  github: {
    title: "GITHUB",
    icon: () => <AiFillGithub className="icon-group github" />,
    path: "#",
    description: `
      GITHUB - we can
      put here
      as many lines
      as we want.
    `,
  },
  codepen: {
    title: "CODEPEN",
    icon: () => <FiCodepen className="icon-group" />,
    path: "#",
    description: `
    CODEPEN - we can
      put here
      as many lines
      as we want.
    `,
  },
  javascript: {
    title: "JAVASCRIPT",
    icon: () => <SiJavascript className="icon-group javascript" />,
    path: "#",
    description: `
    JAVASCRIPT - we can
      put here
      as many lines
      as we want.
    `,
  },
  reactjs: {
    title: "REACT JS",
    icon: () => <GrReactjs className="icon-group react-js" />,
    path: "#",
    description: `
    REACT JS - we can
      put here
      as many lines
      as we want.
    `,
  },
  redux: {
    title: "REDUX",
    icon: () => <SiRedux className="icon-group redux" />,
    path: "#",
    description: `
    REDUX - we can
      put here
      as many lines
      as we want.
    `,
  },
  typescript: {
    title: "TYPESCRIPT",
    icon: () => <SiTypescript className="icon-group typescript" />,
    path: "#",
    description: `
    TYPESCRIPT - we can
      put here
      as many lines
      as we want.
    `,
  },
  nodejs: {
    title: "NODEJS",
    icon: () => <GrNode className="icon-group nodejs" />,
    path: "#",
    description: `
    NODEJS - we can
      put here
      as many lines
      as we want.
    `,
  },
  mongodb: {
    title: "MONGODB",
    icon: () => <DiMongodb className="icon-group mongodb" />,
    path: "#",
    description: `
    MONGODB - we can
      put here
      as many lines
      as we want.
    `,
  },
};

export const roadmapData = [
  {
    title: "Chapter 1",
    icon: () => <FaLinux className="image-box-solid-icon" />,
    children: [
      [lessonsData.html],
      [lessonsData.css, lessonsData.sass],
      [lessonsData.bootstrap, lessonsData.netlify],
      [lessonsData.git, lessonsData.github, lessonsData.codepen],
    ],
  },
  {
    title: "Chapter 2",
    icon: () => <FaLinux className="image-box-solid-icon" />,
    children: [
      [lessonsData.javascript],
      [lessonsData.reactjs, lessonsData.redux, lessonsData.typescript],
      [lessonsData.nodejs, lessonsData.mongodb]
    ]
  }
];
