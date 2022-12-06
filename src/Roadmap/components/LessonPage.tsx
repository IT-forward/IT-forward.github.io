import "../components/LessonPage.css";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { lessonsData } from "../data";
import { useState } from "react";
import { useEffect } from "react";
interface paramtypes {
  id: string;
}
export type LessonType = {
  title: string;
  lessonImage?: string;
  path?: string;
  description?: string;
  url?: string;
  iconComponent: JSX.Element;
};
function LessonPage() {
  const [item, setItem] = useState<LessonType | undefined>();
  const { id } = useParams<paramtypes>();

  useEffect(() => {
    lessonsData.find((lesson) => (lesson.path === id ? setItem(lesson) : null));
  }, []);

  return (
    <Container className="lessons-page">
      <h1>{item?.title}</h1>
      <img src={item?.lessonImage} alt="" />
      <p>{item?.description}</p>
      <a href={item?.url} target="_blank" rel='noreferrer'>
        Dars saytini ochish
      </a>
    </Container>
  );
}

export default LessonPage;
