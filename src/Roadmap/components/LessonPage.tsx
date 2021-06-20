import '../components/LessonPage.css';
import { Container } from 'react-bootstrap';


function LessonPage(props: {
    title: string,
    lessonImage: string,
    description: string
}) {
    return (

        <Container id="htmlLesson">
            <h1 className="text-center mt-5">{props.title}</h1>
            <img className="d-block m-auto" src={props.lessonImage} alt="" />
                {props.description}
        </Container>
        

    )
}

export default LessonPage;