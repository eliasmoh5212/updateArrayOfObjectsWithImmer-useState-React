import { useState } from "react";
import produce from "immer";

const App = () => {
  let [persons, setPerson] = useState([
    { id: 1, name: "Elias", province: "Kabul", status: "Married" },
    { id: 2, name: "Mohammad Haroon", province: "Takhar", status: "Married" },
    { id: 3, name: "Ismail Noor", province: "Nangarhar", status: "Married" }
  ]);

  const handleClick = () => {
    setPerson(
      produce(draft => {
        const person = draft.find(person => person.id === 1);
        if (person) person.status = "Single";
      })
    );
  };

  return (
    <div>
      {persons.map(person => (
        <p key={person.id}>
          {person.name} {person.status == "Single" ? "Updated" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Change</button>
    </div>
  );
};
export default App;
