import { useState } from "react";

// dropdown med förslag på land, fält för användarens namn, fält för användarens mailadress
export function Form({ onAddVotes, selectData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!selectValue && !name && !email) {
      setError(<p className="error">⚠️ Du måste fylla i fälten! ⚠️</p>);
      return;
    } else {
      setError("");
    }

    if (!selectValue) {
      setError(<p className="error">⚠️ Du måste välja ett land! ⚠️</p>);
      return;
    } else {
      setError("");
    }

    if (!name) {
      setError(<p className="error">⚠️ Du måste fylla i ditt namn! ⚠️</p>);
      return;
    } else {
      setError("");
    }

    if (!email) {
      setError(<p className="error">⚠️ Du måste fylla i din mailadress! ⚠️</p>);
      return;
    } else {
      setError("");
    }

    const newVote = { selectValue, name, email };
    console.log(newVote);

    onAddVotes(newVote);

    setSelectValue("");
    setName("");
    setEmail("");
  }

  //skapa dropdown-funktion:

  function SelectDropdown() {
    return (
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option>Välj land...</option>
        {selectData?.map((item) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <>
      <h1>Rösta på ditt favoritland!</h1>

      <form className="voteForm" onSubmit={handleSubmit}>
        <label>Rösta på:</label>
        <SelectDropdown />

        <label>Ditt namn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ange namn här..."
        ></input>

        <label>Din mailadress:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ange mailadress här..."
        ></input>

        {error}

        <button>Rösta</button>
      </form>
    </>
  );
}
