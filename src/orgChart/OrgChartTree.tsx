import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import MentorNode from "./customNodes/MentorNode";
import MenteeNode from "./customNodes/MenteeNode";
import MentorMenteeNode from "./customNodes/MentorMenteeNode";
import { treeData } from "./treeData";
import "./OrgChart.css";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";

const bottomLeftX = 300;
const bottomLeftY = 300;

const nodes = [
  {
    id: `${treeData.id}`,
    type: "mentor",
    position: {
      x: (bottomLeftX + treeData.students.length * 300) / 2,
      y: bottomLeftY - 250,
    },
    data: { fullName: treeData.fullName, image: treeData.image },
  },
  ...treeData.students.map((student, index) => {
    return {
      id: `${student.id}`,
      type:
        student.students && student.students.length > 0
          ? "mentorMentee"
          : "mentee",
      position: { x: bottomLeftX + index * 300, y: bottomLeftY },
      data: { fullName: student.fullName, image: student.image },
    };
  }),
];

const edges = treeData.students.map((student) => {
  return {
    id: `${treeData.id}-${student.id}`,
    source: `${treeData.id}`,
    target: `${student.id}`,
    animated: !student.finished,
  };
});

const elements = [...nodes, ...edges];

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
        defaultZoom={0.6}
        nodesDraggable={false}
        className="org-chart-tree"
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
      <Footer />
    </div>
  );
}
