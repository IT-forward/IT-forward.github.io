import ReactFlow, { Background, Controls, MiniMap } from 'react-flow-renderer';
import BahriddinNodes from './customNodes/BahriddinNodes';
import OtabekNodes from './customNodes/OtabekNodes';
import EldorNodes from './customNodes/EldorNodes';
import HusanNodes from './customNodes/HusanNodes';
import OybekNodes from './customNodes/OybekNodes';

const elements = [
      {
        id: "1",
        type: "bahriddin",
        position: { x: 750, y: 20 },
        // data: { text: "Bahriddin Abdiev" },
      },
      {
        id: "2",
        type: "eldor",
        position: { x: 300, y: 250 },
        // data: { text: "Eldor Ergashov" },
      },
      {
        id: "3",
        type: "otabek",
        position: { x: 600, y: 250 },
        // data: { text: "Otabek Kadirov" },
      },
      {
        id: "4",
        type: "husan",
        position: { x: 900, y: 250 },
        // data: { text: "Husan Eshonqulov" },
      },
      {
        id: "5",
        type: "oybek",
        position: { x: 1200, y: 250 },
        // data: { text: "Oybek Turaev" },
      },
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e1-3", source: "1", target: "3", animated: true },
      { id: "e1-4", source: "1", target: "4", animated: true },
      { id: "e1-5", source: "1", target: "5" },
];

const nodeTypes = {
    bahriddin: BahriddinNodes,
    eldor: EldorNodes,
    otabek: OtabekNodes,
    husan: HusanNodes,
    oybek: OybekNodes,
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
  };