import { useState, useEffect } from "react";

export function DiscountedMembersSettings({ onChange }) {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);

  const incrementNumber1 = () => setNumber1(number1 + 1);
  const decrementNumber1 = () => setNumber1(number1 - 1 > 0 ? number1 - 1 : 0);

  const incrementNumber2 = () => {
    if (number2 < number1 && number2 < 3) {
      setNumber2(number2 + 1);
    }
  };
  const decrementNumber2 = () => setNumber2(number2 - 1 > 0 ? number2 - 1 : 0);

  useEffect(() => {
    if (onChange) {
      onChange(number1, number2);
    }
  }, [number1, number2, onChange]);
  useEffect(() => {
    if (onChange) {
      onChange(number1, number2);
    }

    if (number2 > number1) {
      setNumber2(number1);
    }
  }, [number1, number2, onChange]);

  return (
    <div className="flex gap-1 items-center text-sm">
      <button
        onClick={decrementNumber1}
        className="bg-white rounded-[100%] px-1.5"
      >
        -
      </button>
      <p>{number1}</p>
      <button
        onClick={incrementNumber1}
        className="bg-white rounded-[100%] px-1.5"
      >
        +
      </button>
      <p> Eltartott, ebből kedvezményezett: </p>
      <button
        onClick={decrementNumber2}
        className="bg-white rounded-[100%] px-1.5"
      >
        -
      </button>
      <p>{number2}</p>
      <button
        onClick={incrementNumber2}
        className="bg-white rounded-[100%] px-1.5"
      >
        +
      </button>
    </div>
  );
}
