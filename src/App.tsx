import React, { useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-expressions */
import "./App.css";
import { data } from "./data/facts";

export type DogFactType = {
  id: number;
  fact: string;
};

function App() {
  const [dataFact, setDataFact] = useState<DogFactType[] | null>(null);
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
  console.log("datafact", dataFact);
  console.log("err", error);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
