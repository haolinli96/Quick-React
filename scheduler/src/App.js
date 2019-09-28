import React from 'react';
import 'rbx/index.css'; //import in react file need styling
import { Button, Container, Title } from 'rbx'; //and specify the components

const schedule = {
  "title": "CS Courses for 2018-2019",
  "courses": [
    {
      "id": "F101",
      "title": "Computer Science: Concepts, Philosophy, and Connections",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F110",
      "title": "Intro Programming for non-majors",
      "meets": "MWF 10:00-10:50"
    },
    {
      "id": "F111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 13:00-13:50"
    },
    {
      "id": "W111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F211",
      "title": "Fundamentals of Computer Programming II",
      "meets": "TuTh 12:30-13:50"
    }
  ]
};

const terms = { F: 'Fall', W: 'Winter', S: 'Spring'};

const Banner = ({ title }) => (
  <Title>{ title }</Title>  //styled
);

const getCourseTerm = course => (
  terms[course.id.charAt(0)]
);

const getCourseNumber = course => (
  course.id.slice(1, 4)
)

const Course = ({ course }) => (
  <Button>
    { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
  </Button> //styled
);

const CourseList = ({ courses }) => (
  <Button.Group>
    {courses.map(course => <Course key={course.id} course={ course } />)}
  </Button.Group> //styled
);

const App = () =>  (
  <Container>
    <Banner title={ schedule.title } />
    <CourseList courses={ schedule.courses } />
  </Container>  //<Banner ???/> is like function call
);

/*ReactDOM.render(
  <App />,
  document.getElementById('container')
);*/
//pass title to banner pass list of course to courselist
//need to define component Banner & CourseList
//react sees component in JSX, it calls the function with same name
//the function return replace component in the JSX that called it

export default App;