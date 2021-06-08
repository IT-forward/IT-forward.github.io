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
import HTML from "./course-images/html.png";
import CSS from "./course-images/css.png";
import BOOTSTRAP from "./course-images/bootstrap.png";
import SASS from "./course-images/sass.png";
import GIT from "./course-images/git.png";
import GITHUB from "./course-images/github.png";
import NETLIFY from "./course-images/netlify.png";
import NODEJS from "./course-images/nodejs.png";
import JAVASCRIPT from "./course-images/javascript.png";
import REDUX from "./course-images/redux.png";
import TYPESCRIPT from "./course-images/typescript.png";
import MONGODB from "./course-images/mongodb.png";
import REACT from "./course-images/react.png";

export const lessonsData = {
  html: {
    title: "HTML5",
    iconComponent: <AiFillHtml5 className="icon-group html" />,
    lessonImage: { HTML },
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  css: {
    title: "CSS3",
    iconComponent: <DiCss3 className="icon-group css" />,
    lessonImage: { CSS },
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  sass: {
    title: "SASS",
    iconComponent: <DiSass className="icon-group sass" />,
    lessonImage: { SASS },
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },

  bootstrap: {
    title: "BOOTSTRAP",
    iconComponent: <FaBootstrap className="icon-group bootstrap" />,
    lessonImage: { BOOTSTRAP },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
    tenetur cumque vero exercitationem quidem veniam placeat 
    doloribus quibusdam nobis eos recusandae quo esse illo qui
     quae commodi laudantium necessitatibus vitae repudiandae. 
     Atque architecto accusamus, itaque recusandae facere harum 
     quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  netlify: {
    title: "NETLIFY",
    iconComponent: <SiNetlify className="icon-group netlify" />,
    lessonImage: { NETLIFY },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
    tenetur cumque vero exercitationem quidem veniam placeat 
    doloribus quibusdam nobis eos recusandae quo esse illo qui
     quae commodi laudantium necessitatibus vitae repudiandae. 
     Atque architecto accusamus, itaque recusandae facere harum 
     quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  git: {
    title: "GIT",
    iconComponent: <FaGitAlt className="icon-group git" />,
    lessonImage: { GIT },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
    tenetur cumque vero exercitationem quidem veniam placeat 
    doloribus quibusdam nobis eos recusandae quo esse illo qui
     quae commodi laudantium necessitatibus vitae repudiandae. 
     Atque architecto accusamus, itaque recusandae facere harum 
     quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  github: {
    title: "GITHUB",
    iconComponent: <AiFillGithub className="icon-group github" />,
    lessonImage: { GITHUB },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
    tenetur cumque vero exercitationem quidem veniam placeat 
    doloribus quibusdam nobis eos recusandae quo esse illo qui
     quae commodi laudantium necessitatibus vitae repudiandae. 
     Atque architecto accusamus, itaque recusandae facere harum 
     quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  codepen: {
    title: "CODEPEN",
    iconComponent: <FiCodepen className="icon-group" />,
    lessonImage: { },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  javascript: {
    title: "JAVASCRIPT",
    iconComponent: <SiJavascript className="icon-group javascript" />,
    lessonImage: { JAVASCRIPT },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  reactjs: {
    title: "REACT JS",
    iconComponent: <GrReactjs className="icon-group react-js" />,
    lessonImage: {  REACT },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  redux: {
    title: "REDUX",
    iconComponent: <SiRedux className="icon-group redux" />,
    lessonImage: { REDUX },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
    tenetur cumque vero exercitationem quidem veniam placeat 
    doloribus quibusdam nobis eos recusandae quo esse illo qui
     quae commodi laudantium necessitatibus vitae repudiandae. 
     Atque architecto accusamus, itaque recusandae facere harum 
     quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  typescript: {
    title: "TYPESCRIPT",
    iconComponent: <SiTypescript className="icon-group typescript" />,
    lessonImage: { TYPESCRIPT },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  nodejs: {
    title: "NODEJS",
    iconComponent: <GrNode className="icon-group nodejs" />,
    lessonImage: { NODEJS },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
  mongodb: {
    title: "MONGODB",
    iconComponent: <DiMongodb className="icon-group mongodb" />,
    lessonImage: {  MONGODB },
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
      tenetur cumque vero exercitationem quidem veniam placeat 
      doloribus quibusdam nobis eos recusandae quo esse illo qui
       quae commodi laudantium necessitatibus vitae repudiandae. 
       Atque architecto accusamus, itaque recusandae facere harum 
       quaerat dolores consequuntur quas? Hic, vel.
    `,
  },
};

export const roadmapData = [
  {
    title: "Chapter 1",
    iconComponent: <FaLinux className="image-box-solid-icon" />,
    children: [
      [lessonsData.html],
      [lessonsData.css, lessonsData.sass],
      [lessonsData.bootstrap, lessonsData.netlify],
      [lessonsData.git, lessonsData.github, lessonsData.codepen],
    ],
  },
  {
    title: "Chapter 2",
    iconComponent: <FaLinux className="image-box-solid-icon" />,
    children: [
      [lessonsData.javascript],
      [lessonsData.reactjs, lessonsData.redux, lessonsData.typescript],
      [lessonsData.nodejs, lessonsData.mongodb],
    ],
  },
];
