import React from 'react';
import Student from './Student';

const Students = ({classroom}) => {
  console.log(Array.isArray(classroom))
    return (
      <div className="studentBox">
        {classroom.map(student=>(<Student key={student.id} student={student} />))}
      </div>
    )
}

export default Students;
  //     // {classroom.map(student => (<Student key={student.id} student={student} />))}