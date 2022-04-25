import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const onChange = (event) => {
    setNewName(event.target.value);
  };

  const addNumber = (event) => {
    event.preventDefault();
    if (alreadyAdded(newName)) {
      alert(`${newName} already added to phone list`);
      setNewName("");
      return;
    }
    const obj = {
      name: newName,
    };
    setPersons(persons.concat(obj));
    setNewName("");
  };

  const alreadyAdded = (name) => {
    return persons.some((person) => person.name === name);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={onChange} value={newName} />
        </div>
        <div>
          <button onClick={addNumber} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <p key={i}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
