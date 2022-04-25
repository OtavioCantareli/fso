import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filters, setFilters] = useState("");
  const [filterPerson, setFilterPerson] = useState([]);

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

  const filter = (event) => {
    setFilters(event.target.value);
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(filters)
    );
    setFilterPerson(filtered);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter name <input onChange={filter} />
        </div>
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
      {filters === ""
        ? persons.map((person) => (
            <p key={person.id}>
              <strong>Name:</strong> {person.name}, <strong>Number:</strong>{" "}
              {person.number}
            </p>
          ))
        : filterPerson.map((person) => (
            <p key={person.id}>
              <strong>Name:</strong> {person.name}, <strong>Number:</strong>{" "}
              {person.number}
            </p>
          ))}
    </div>
  );
};

export default App;
