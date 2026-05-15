import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [newScore, setNewScore] = useState(student.score);

  const handleUpdate = () => {
    updateScore(student.id, newScore);
  };

  const status = student.score >= 40 ? "Pass" : "Fail";

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td className={status === "Pass" ? "pass" : "fail"}>
        {status}
      </td>

      <td>
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button onClick={handleUpdate}>Save</button>
      </td>
    </tr>
  );
}

export default StudentRow;