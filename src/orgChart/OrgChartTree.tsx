import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import MentorNode from "./customNodes/MentorNode";
import MenteeNode from "./customNodes/MenteeNode";
import MentorMenteeNode from "./customNodes/MentorMenteeNode";
import treeData from "./treeData";
import "./OrgChart.css";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";

const bottomLeftX = 300;
const bottomLeftY = 300;

// @ts-ignore
function getPersonType(person) {
  if (person.students.length > 0 && person.mentorId !== undefined) {
    return "mentorMentee";
  } else if (person.students.length > 0) {
    return "mentor";
  } else {
    return "mentee";
  }
}

const nodes = Object.keys(treeData).map((key) => {
  // @ts-ignore
  const person = treeData[key];
  return {
    id: key,
    type: getPersonType(person),
    position: {
      x: (bottomLeftX + person.students.length * 300) / 2,
      y: bottomLeftY - 250,
    },
    data: { fullName: person.fullName, image: person.image },
  };
});

// [
//   {
//     id: `${treeData.id}`,
//     type: "mentor",
//     position: {
//       x: (bottomLeftX + treeData.students.length * 300) / 2,
//       y: bottomLeftY - 250,
//     },
//     data: { fullName: treeData.fullName, image: treeData.image },
//   },
//   ...treeData.students.map((student, index) => {
//     return {
//       id: `${student.id}`,
//       type:
//         student.students && student.students.length > 0
//           ? "mentorMentee"
//           : "mentee",
//       position: { x: bottomLeftX + index * 300, y: bottomLeftY },
//       data: { fullName: student.fullName, image: student.image },
//     };
//   }),
// ];

// const edges = treeData.students.map((student) => {
//   return {
//     id: `${treeData.id}-${student.id}`,
//     source: `${treeData.id}`,
//     target: `${student.id}`,
//     animated: !student.finished,
//   };
// });

const elements = [...nodes];

const nodeTypes = {
  mentor: MentorNode,
  mentee: MenteeNode,
  mentorMentee: MentorMenteeNode,
};

export default function Tree() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        defaultZoom={0.8}
        nodesDraggable={false}
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
      <Footer />
    </div>
  );
}
