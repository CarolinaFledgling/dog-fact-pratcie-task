import React, { useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-expressions */
import "./App.css";
import { Form } from "./components/Form/Form";
import { data } from "./data/facts";

export type DogFactType = {
  id: number;
  fact: string;
};

function App() {
  const [dataFact, setDataFact] = useState<DogFactType[] | []>([]);
  const [error, setError] = useState(null);

  const MyPromiseToFetchFacts: Promise<DogFactType[]> = new Promise(function (
    myResolve,
    myRejects
  ) {
    if (data) {
      setTimeout(() => {
        myResolve(data);
      }, 2000);
    } else {
      myRejects("no data");
    }
  });

  MyPromiseToFetchFacts.then((data) => {
    setDataFact(data);
  }).catch((err) => {
    setError(err);
    console.log(err);
  });
  console.log("data Fact", dataFact);
  console.log("err", error);
  return (
    <div className="App">
      <header className="App-header"></header>
      <Form data={dataFact} />
    </div>
  );
}

export default App;
