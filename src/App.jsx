import { useEffect, useState } from "react";
import { Form } from "./Form";
import { VoteList } from "./VoteList";

export default function App() {
  const [votes, setVotes] = useState([]);
  const [selectData, setSelectData] = useState([]);

  function handleAddVotes(vote) {
    setVotes((votes) => [...votes, vote]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Simpelt fake-API med en lista över alla länder i världen:
  const fetchData = async () => {
    await fetch("https://testapi.devtoolsdaily.com/countries")
      .then((res) => res.json())
      .then((data) => setSelectData(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <Form onAddVotes={handleAddVotes} selectData={selectData} />
      <VoteList votes={votes} />
    </div>
  );
}
