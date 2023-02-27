import React from 'react';

const students = [
  {
    id: '1',
    name: '영환',
  },
  {
    id: '2',
    name: '유진',
  },
  {
    id: '3',
    name: '민수',
  },
  {
    id: '4',
    name: '건',
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default AttendanceBook;
