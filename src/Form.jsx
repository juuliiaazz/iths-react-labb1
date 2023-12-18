// en funktion för att hantera formuläret som ska innehålla:
// dropdown med förslag på land, fält för användarens namn, fält för användarens mailadress
export function Form({ selectData }) {
  //skapa dropdown-funktion:

  function SelectDropdown() {
    return (
      <select>
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

      <form>
        <label>Rösta på:</label>
        <SelectDropdown />

        <label>Ditt namn:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ange namn här..."
        ></input>

        <label>Din mailadress:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ange mailadress här..."
        ></input>

        <button>Rösta</button>
      </form>
    </>
  );
}
