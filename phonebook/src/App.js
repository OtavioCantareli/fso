import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addNumber = (event) => {
    event.preventDefault();
    if (alreadyAdded(newName)) {
      alert(`${newName} already added to phone list`);
      setNewName("");
      setNewNumber("");
      return;
    }
    const obj = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(obj));
    setNewName("");
    setNewNumber("");
  };

  const alreadyAdded = (name) => {
    return persons.some((person) => person.name === name);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={onNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={onNumberChange} value={newNumber} />
        </div>
        <div>
          <button onClick={addNumber} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <p key={i}>
          <strong>Name:</strong> {person.name}, <strong>Number:</strong>{" "}
          {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
