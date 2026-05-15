import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>

      <tbody>
        {students.map((stu) => (
          <StudentRow
            key={stu.id}
            student={stu}
            updateScore={updateScore}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;