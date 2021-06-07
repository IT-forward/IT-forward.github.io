import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import MentorNode from "./customNodes/MentorNode";
import MenteeNode from "./customNodes/MenteeNode";
import MentorMenteeNode from "./customNodes/MentorMenteeNode";
import { treeData } from "./treeData";
import "./OrgChart.css";

const positionX = 300;
const positionY = 300;

const nodes = [
  {
    id: `${treeData.id}`,
    type: "mentor",
    position: {
      x: (positionX + treeData.students.length * 300) / 2,
      y: positionY - 250,
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
      position: { x: positionX + index * 300, y: positionY },
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
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        defaultZoom={1}
        nodesDraggable={false}
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
}
