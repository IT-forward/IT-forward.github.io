import { AiFillCode, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { FaBook, FaFlagCheckered, FaUniversity } from "react-icons/fa";
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
import CS50 from "./course-images/cs50.jpg";
import Odin from "./course-images/odin.svg";
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
import { LessonType } from "./components/LessonPage";
export const lessonsData: LessonType[]  = [
 {
  title: "CS50",
  iconComponent: <FaUniversity className="icon-group cs50" />,
  lessonImage:  CS50 ,
  path: 'cs50',
  description: `
    Dunyodagi eng nufuzli universitetlardan biri bo'lgan Garvard universiteti 
    tomonidan o'qitiladigan CS50 dasturlashga kirish fani ham qiziqarli, ham barcha
    asosiy tushunchalarni o'zida qamrab olgan kursdir. Shuning uchun ham biz uni
    birinchilardan o'rganiladigan dars sifatida tanlab oldik.
  `,
  url: 'https://cs50.harvard.edu/x',
 }, 
 {
  title: "Odin Project",
  iconComponent: <FaBook className="icon-group odin" />,
  lessonImage: Odin,
  path: 'odin',
  description: `
    Odin loyihasi ochiq kodli, eng yaxshi ochiq manbalardan foydalanib tuzilganligi
    va minglab insonlar uni doimiy boyitib borishganlari uchun ham eng mukammal kurslardan
    biri hisoblanadi. Bu kursda asosiy urg'u sizni mukammal dasturchi qilib tayyorlash.
    Qolaversa, siz bu yerda yo JavaScript yoki Ruby yo'nalishini tanlab, o'z bilimingizni
    boyitishingiz mumkin.
  `,
  url: 'https://www.theodinproject.com/',
 }
 
  // css: {
  //   title: "CSS3",
  //   iconComponent: <DiCss3 className="icon-group css" />,
  //   lessonImage: { CSS },
  //   path: 'css',
  //   description: `
  //     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //     Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //     tenetur cumque vero exercitationem qupathem veniam placeat 
  //     doloribus quibusdam nobis eos recusandae quo esse illo qui
  //      quae commodi laudantium necessitatibus vitae repudiandae. 
  //      Atque architecto accusamus, itaque recusandae facere harum 
  //      quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // sass: {
  //   title: "SASS",
  //   iconComponent: <DiSass className="icon-group sass" />,
  //   lessonImage: { SASS },
  //   path: 'sass',
  //   description: `
  //     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //     Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //     tenetur cumque vero exercitationem qupathem veniam placeat 
  //     doloribus quibusdam nobis eos recusandae quo esse illo qui
  //      quae commodi laudantium necessitatibus vitae repudiandae. 
  //      Atque architecto accusamus, itaque recusandae facere harum 
  //      quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },

  // bootstrap: {
  //   title: "BOOTSTRAP",
  //   iconComponent: <FaBootstrap className="icon-group bootstrap" />,
  //   lessonImage: { BOOTSTRAP },
  //   path: 'bootstrap',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //   Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //   tenetur cumque vero exercitationem qupathem veniam placeat 
  //   doloribus quibusdam nobis eos recusandae quo esse illo qui
  //    quae commodi laudantium necessitatibus vitae repudiandae. 
  //    Atque architecto accusamus, itaque recusandae facere harum 
  //    quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // netlify: {
  //   title: "NETLIFY",
  //   iconComponent: <SiNetlify className="icon-group netlify" />,
  //   lessonImage: { NETLIFY },
  //   path: 'netlify',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //   Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //   tenetur cumque vero exercitationem qupathem veniam placeat 
  //   doloribus quibusdam nobis eos recusandae quo esse illo qui
  //    quae commodi laudantium necessitatibus vitae repudiandae. 
  //    Atque architecto accusamus, itaque recusandae facere harum 
  //    quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // git: {
  //   title: "GIT",
  //   iconComponent: <FaGitAlt className="icon-group git" />,
  //   lessonImage: { GIT },
  //   path: 'git',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //   Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //   tenetur cumque vero exercitationem qupathem veniam placeat 
  //   doloribus quibusdam nobis eos recusandae quo esse illo qui
  //    quae commodi laudantium necessitatibus vitae repudiandae. 
  //    Atque architecto accusamus, itaque recusandae facere harum 
  //    quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // github: {
  //   title: "GITHUB",
  //   iconComponent: <AiFillGithub className="icon-group github" />,
  //   lessonImage: { GITHUB },
  //   path: 'github',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //   Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //   tenetur cumque vero exercitationem qupathem veniam placeat 
  //   doloribus quibusdam nobis eos recusandae quo esse illo qui
  //    quae commodi laudantium necessitatibus vitae repudiandae. 
  //    Atque architecto accusamus, itaque recusandae facere harum 
  //    quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // codepen: {
  //   title: "CODEPEN",
  //   iconComponent: <FiCodepen className="icon-group" />,
  //   lessonImage: { },
  //   path: 'codepen',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //     Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //     tenetur cumque vero exercitationem qupathem veniam placeat 
  //     doloribus quibusdam nobis eos recusandae quo esse illo qui
  //      quae commodi laudantium necessitatibus vitae repudiandae. 
  //      Atque architecto accusamus, itaque recusandae facere harum 
  //      quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // javascript: {
  //   title: "JAVASCRIPT",
  //   iconComponent: <SiJavascript className="icon-group javascript" />,
  //   lessonImage: { JAVASCRIPT },
  //   path: 'javascript',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //     Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //     tenetur cumque vero exercitationem qupathem veniam placeat 
  //     doloribus quibusdam nobis eos recusandae quo esse illo qui
  //      quae commodi laudantium necessitatibus vitae repudiandae. 
  //      Atque architecto accusamus, itaque recusandae facere harum 
  //      quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // reactjs: {
  //   title: "REACT JS",
  //   iconComponent: <GrReactjs className="icon-group react-js" />,
  //   lessonImage: {  REACT },
  //   path: 'reactjs',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //     Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //     tenetur cumque vero exercitationem qupathem veniam placeat 
  //     doloribus quibusdam nobis eos recusandae quo esse illo qui
  //      quae commodi laudantium necessitatibus vitae repudiandae. 
  //      Atque architecto accusamus, itaque recusandae facere harum 
  //      quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // redux: {
  //   title: "REDUX",
  //   iconComponent: <SiRedux className="icon-group redux" />,
  //   lessonImage: { REDUX },
  //   path: 'redux',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //   Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //   tenetur cumque vero exercitationem qupathem veniam placeat 
  //   doloribus quibusdam nobis eos recusandae quo esse illo qui
  //    quae commodi laudantium necessitatibus vitae repudiandae. 
  //    Atque architecto accusamus, itaque recusandae facere harum 
  //    quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // typescript: {
  //   title: "TYPESCRIPT",
  //   iconComponent: <SiTypescript className="icon-group typescript" />,
  //   lessonImage: { TYPESCRIPT },
  //   path: 'typescript',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //     Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //     tenetur cumque vero exercitationem qupathem veniam placeat 
  //     doloribus quibusdam nobis eos recusandae quo esse illo qui
  //      quae commodi laudantium necessitatibus vitae repudiandae. 
  //      Atque architecto accusamus, itaque recusandae facere harum 
  //      quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // nodejs: {
  //   title: "NODEJS",
  //   iconComponent: <GrNode className="icon-group nodejs" />,
  //   lessonImage: { NODEJS },
  //   path: 'nodejs',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //     Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //     tenetur cumque vero exercitationem qupathem veniam placeat 
  //     doloribus quibusdam nobis eos recusandae quo esse illo qui
  //      quae commodi laudantium necessitatibus vitae repudiandae. 
  //      Atque architecto accusamus, itaque recusandae facere harum 
  //      quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // },
  // mongodb: {
  //   title: "MONGODB",
  //   iconComponent: <DiMongodb className="icon-group mongodb" />,
  //   lessonImage: {  MONGODB },
  //   path: 'mongodb',
  //   description: `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  //     Iusto, ullam accusamus maxime aspernatur ipsum distinctio 
  //     tenetur cumque vero exercitationem quidem veniam placeat 
  //     doloribus quibusdam nobis eos recusandae quo esse illo qui
  //      quae commodi laudantium necessitatibus vitae repudiandae. 
  //      Atque architecto accusamus, itaque recusandae facere harum 
  //      quaerat dolores consequuntur quas? Hic, vel.
  //   `,
  // }
]

export const roadmapData = [
  {
    title: "Chapter 1",
    iconComponent: <FaFlagCheckered className="image-box-solid-icon" />,
    children: lessonsData
    // [
    //   [lessonsData.html],
    //   [lessonsData.css, lessonsData.sass],
    //   [lessonsData.bootstrap, lessonsData.netlify],
    //   [lessonsData.git, lessonsData.github, lessonsData.codepen],
    // ],
   }
   ,
  // {
  //   title: "Chapter 2",
  //   iconComponent: <FaLinux className="image-box-solid-icon" />,
  //   children: [
  //     [lessonsData.javascript],
  //     [lessonsData.reactjs, lessonsData.redux, lessonsData.typescript],
  //     [lessonsData.nodejs, lessonsData.mongodb],
  //   ],
  // },
];

