import { useEffect, useState } from "react";
import { Form } from "./Form";
import { VoteList } from "./VoteList";

export default function App() {
  const [selectData, setSelectData] = useState([]);
  // Lägga till API till dropdown i formuläret

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
    <div>
      <Form selectData={selectData} />
      <VoteList />
    </div>
  );
}
