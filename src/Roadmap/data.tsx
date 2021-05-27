import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { FaLinux } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

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
};

export const roadmapData = [
  {
    title: "Chapter 1",
    icon: () => <FaLinux className="image-box-solid-icon" />,
    children: [
      [lessonsData.html],
      [lessonsData.css, lessonsData.sass],
      [lessonsData.bootstrap, lessonsData.netlify],
    ],
  },
  {
    title: "Chapter 2",
    icon: () => <FaLinux className="image-box-solid-icon" />,
    children: [
      [lessonsData.bootstrap, lessonsData.netlify],
      [lessonsData.css, lessonsData.sass],
      [lessonsData.html],
    ],
  },
];
