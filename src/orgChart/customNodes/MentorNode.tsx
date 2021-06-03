import { treeData } from './treeData';
import '../OrgChart.css';

export default function Mentor() {
    return (
        <>
        <div className={'branch-box'}>
            {treeData.mentor.image}
            <div>{treeData.mentor.name}</div>
        </div>
        </>
    )
}