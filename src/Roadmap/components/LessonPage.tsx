import '../components/LessonPage.css';
import { Container } from 'react-bootstrap';
//import {lessonsData} from '../data';
function LessonPage(props : any
//     {
//     title: string,
//     lessonImage: string,
//     path: string,
//     description: string,
//     iconComponent: JSX.Element
// }
) { 
   // console.log(lessonsData);
   
    console.log(props.htmlData);
    return (

        <Container id="htmlLesson">
            <h1 className="text-center mt-5">{props.title}</h1>
            <img className="d-block m-auto" src={props.lessonImage} alt="" />
                {props.description}

        </Container>
        

    )
}

export default LessonPage;


