export default function App() {
  return (
    <div>
      <Form />
      <VoteList />
    </div>
  );
}

// Tanke: ett enkelt formulär där man kan rösta på sitt favoritland
//skissa upp vad för funktioner som behövs:

// en funktion för att hantera formuläret som ska innehålla:
// dropdown med förslag på land, fält för användarens namn, fält för användarens mailadress
function Form() {
  return (
    <>
      <h1>Rösta på ditt favoritland!</h1>

      <form>
        <label>Rösta på:</label>
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

// en funktion för att hantera varje röst
function Vote() {}

// en funktion för att hantera en lista av alla röster
function VoteList() {}
