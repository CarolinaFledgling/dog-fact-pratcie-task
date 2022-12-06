import React, { useState } from "react";
import { DogFactType } from "../../App";

type FormProps = {
  data: DogFactType[] | null;
};

export const Form = ({ data }: FormProps) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <form>
        <div>
          <label htmlFor="numberFacts">Number of Dog Facts</label>
          <input
            id="numberFacts"
            min="1"
            max="10"
            type="number"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
      </form>
    </div>
  );
};
