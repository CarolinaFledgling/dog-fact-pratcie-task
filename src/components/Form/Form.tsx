import React, { useState } from "react";
import { DogFactType } from "../../App";

type FormProps = {
  data: DogFactType[];
};

type FactType = {
  id: number;
  fact: string;
};
export const Form = ({ data }: FormProps) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [facts, setFacts] = useState<DogFactType[]>([]);

  // Specify the type of `result` a
  const generateNumberOfDogFacts = (number: number): DogFactType[] => {
    const newFactArr = data?.sort(() => Math.random() - 0.5).slice(0, number);
    return newFactArr;
  };

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = generateNumberOfDogFacts(inputValue);
    console.log(result);
    setFacts(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numberFacts">Number of Dog Facts</label>
          <input
            id="numberFacts"
            min="1"
            max="10"
            type="number"
            onChange={(event) => setInputValue(+event.target.value)}
            value={inputValue}
          />
        </div>
        <input type="submit" value="show random dog facts" />
      </form>
      <section>
        {facts.map((fact: FactType) => {
          return (
            <article key={fact.id}>
              <h3>Dog Fact</h3>
              <p>{fact.fact}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};
