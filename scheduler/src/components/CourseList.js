import {Button} from 'rbx';
import React , {useState} from 'react';
import Course from './Course';
import {buttonColor} from './Course/Course';
import {getCourseTerm, terms} from './Course/times';

const CourseList = ({ courses, user }) => {
    const [term, setTerm] = useState('Fall');
    const [selected, toggle] = useSelection();
    const termCourses = courses.filter(course => term === getCourseTerm(course));
   
    return (
      <React.Fragment>
        <TermSelector state={ { term, setTerm } } />
        <Button.Group>
          { termCourses.map(course =>
             <Course key={ course.id } course={ course }
               state={ { selected, toggle } }
               user={ user } />) }
        </Button.Group>
      </React.Fragment>
    );
  };

  const TermSelector = ({ state }) => (
    <Button.Group hasAddons>
      { Object.values(terms)
          .map(value => 
            <Button key={value}
              color={ buttonColor(value === state.term) }
              onClick={ () => state.setTerm(value) }
              >
              { value }
            </Button>
          )
      }
    </Button.Group>
  );

const useSelection = () => {
    const [selected, setSelected] = useState([]);
    const toggle = (x) => { //setSelected receives the entire new list of selected courses
      setSelected(selected.includes(x) ? selected.filter(y => y !== x) : [x].concat(selected))
    };
    return [ selected, toggle ];
  };

 

export default CourseList;