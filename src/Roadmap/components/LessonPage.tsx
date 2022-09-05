import '../components/LessonPage.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import  { lessonsData } from '../data';
import { useState } from 'react';
import { useEffect } from 'react';
interface paramtypes  {
    id: string
}
export type LessonType = {
    title: string,
    lessonImage?: string,
    path?: string,
    description?: string,
    iconComponent: JSX.Element
}
function LessonPage(
//     props : {
//     title: string,
//     lessonImage: string,
//     path: string,
//     description: string,
//     iconComponent: JSX.Element
// }
) { 
   // @ts-ignore
   const [item, setItem] = useState<LessonType | undefined>();


  const  { id }  = useParams<paramtypes>();
   console.log(id);

   useEffect(() => {
       lessonsData.find(e => (
        (e.path === id) ? setItem(e) : null )
        )   
   },[])
    console.log(item);




   return (

        <Container>

            <h1>{item?.title}</h1>
            <img src={item?.lessonImage} alt="" />
            <p>
                {item?.description}
            </p>
            
        </Container>
        

    )
}

export default LessonPage;


