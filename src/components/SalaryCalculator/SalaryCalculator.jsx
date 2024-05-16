import { useState, useEffect } from "react";
import { InputField } from "./components/InputField";
import { Range } from "./components/Range";
import { NetSalary } from "./components/NetSalary";
import { JustMarried } from "./components/JustMarried";
import { JustMarriedModal } from "./components/JustMarriedModal";
import { DiscountedMembers } from "./components/DiscountedMembers";
import { DiscountedMembersSettings } from "./components/DiscountedMembersSettings";

function SalaryCalculator({
  name,
  setName,
  setNetSalary,
  netSalary,
  people,
  setPeople,
  discountedPeople,
  setDiscountedPeople,
  isUnder25Exempt,
  setIsUnder25Exempt,
  isDiscounted,
  setIsDiscounted,
  isPersonalTaxAllowanceChecked,
  setIsPersonalTaxAllowanceChecked,
  isCheckedDiscountedMembers,
  setIsCheckedDiscountedMembers,
  selectedMember,
  grossSalary,
  setGrossSalary,
}) {
  const [showModal, setShowModal] = useState(false);
  const [sliderValue, setSliderValue] = useState("");

  const [marriageDate, setMarriageDate] = useState(null);

  const [showDiscountedMembersSettings, setShowDiscountedMembersSettings] =
    useState(false);

  const handlePeopleChange = (newPeople, newDiscountedPeople) => {
    setPeople(newPeople);
    setDiscountedPeople(newDiscountedPeople);
  };

  function handleCheckboxChange() {
    setIsCheckedDiscountedMembers(!isCheckedDiscountedMembers);
    if (!isCheckedDiscountedMembers) {
      setShowDiscountedMembersSettings(true);
    } else {
      setShowDiscountedMembersSettings(false);
    }
  }

  function handleShowModal() {
    setShowModal((show) => !show);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSliderChange(event) {
    let value = event.target.value.trim();
    value = value.replace(/[^0-9\s]/g, "");

    if (value === "") {
      setGrossSalary("");
      setSliderValue("");
    } else {
      const parsedValue = parseInt(value);
      setGrossSalary(parsedValue);
      setSliderValue(parsedValue);
    }
  }

  function handlePercentageChange(percentage) {
    if (grossSalary !== "") {
      const newGrossSalary = Math.round(grossSalary * (1 + percentage / 100));
      setGrossSalary(newGrossSalary);
      setSliderValue(newGrossSalary);
    }
  }

  function calculateNetSalary(grossSalary) {
    const szja = grossSalary * 0.15;
    const tb = grossSalary * 0.185;
    let net = 0;
    let discount = 0;
    if (grossSalary !== "") {
      if (isUnder25Exempt && grossSalary <= 499952) {
        net = grossSalary - tb;
      } else if (isUnder25Exempt && grossSalary > 499952) {
        const exemptAmount = 499952;
        const taxableAmount = grossSalary - exemptAmount;
        net = (exemptAmount + taxableAmount * 0.85) * 0.815;
      } else {
        net = grossSalary - szja - tb;
      }

      if (isDiscounted) {
        net += 5000;
      }
      if (discountedPeople === 1) {
        discount = 10000 * people;
      } else if (discountedPeople === 2) {
        discount = 20000 * people;
      } else if (discountedPeople >= 3) {
        discount = 33000 * people;
      }

      net += discount;
      if (isPersonalTaxAllowanceChecked) {
        const personalTaxAllowance = 77300;
        const totalTax = szja + tb;
        if (totalTax > personalTaxAllowance) {
          net += personalTaxAllowance;
        } else {
          net += totalTax;
        }
      }

      return net.toFixed(2);
    } else {
      return "0";
    }
  }

  useEffect(() => {
    const net = calculateNetSalary(grossSalary);
    setNetSalary(net);
  }, [
    grossSalary,
    isUnder25Exempt,
    isDiscounted,
    isPersonalTaxAllowanceChecked,
    people,
    discountedPeople,
  ]);

  return (
    <div className="relative p-4 bg-slate-300 rounded-lg w-[45%]">
      {selectedMember === null ? (
        <h1 className="text-xl font-bold mb-2">
          {name === ""
            ? "Név bérének kiszámítása"
            : `${name} bérének kiszámítása`}
        </h1>
      ) : (
        <h1 className="text-xl font-bold mb-2">
          {selectedMember.name} bérének kiszámítása
        </h1>
      )}
      <h4 className="text-sm mb-1">Családtag neve</h4>
      <InputField
        placeholder="Név"
        onChange={handleNameChange}
        value={selectedMember ? selectedMember.name : name}
      />
      <p className="text-slate-400 text-[0.70rem] mt-1 mb-1">
        Add meg a családtag nevét!
      </p>
      <h4 className="text-sm mb-1">Bruttó bér</h4>
      {selectedMember ? (
        <>
          <InputField
            placeholder="Bruttó bér"
            value={
              selectedMember && selectedMember.grossSalary
                ? selectedMember.grossSalary
                : ""
            }
            onChange={handleSliderChange}
          />
        </>
      ) : (
        <InputField
          placeholder="Bruttó bér"
          value={grossSalary === "" ? "" : grossSalary}
          onChange={handleSliderChange}
        />
      )}
      <p className="text-slate-400 text-[0.70rem] mt-1">
        Add meg a bruttó béredet!
      </p>
      <Range value={sliderValue} onChange={handleSliderChange} />
      <div className="flex justify-around mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 p-1 rounded-md w-[3.5rem] text-sm text-white"
          onClick={() => handlePercentageChange(-1)}
        >
          -1%
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 p-1 rounded-md w-[3.5rem] text-sm text-white"
          onClick={() => handlePercentageChange(-5)}
        >
          -5%
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 p-1 rounded-md w-[3.5rem] text-sm text-white"
          onClick={() => handlePercentageChange(1)}
        >
          +1%
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 p-1 rounded-md w-[3.5rem] text-sm text-white"
          onClick={() => handlePercentageChange(5)}
        >
          +5%
        </button>
      </div>
      <div className="mt-[1rem] mb-[1rem]">
        <h3 className="font-bold text-lg">Kedvezmények</h3>
        <ul>
          <li className="flex gap-[1rem] text-sm">
            <input
              type="checkbox"
              checked={isUnder25Exempt}
              onChange={() => setIsUnder25Exempt(!isUnder25Exempt)}
            />
            <label>25 év alattiak SZJA mentessége</label>
          </li>
          <JustMarried
            handleShowModal={handleShowModal}
            setIsDiscounted={setIsDiscounted}
            setMarriageDate={setMarriageDate}
            marriageDate={marriageDate}
          />
          {showModal && (
            <JustMarriedModal
              handleShowModal={handleShowModal}
              onClose={handleCloseModal}
              setMarriageDate={setMarriageDate}
            />
          )}
          <li className="flex gap-[1rem] text-sm">
            <input
              type="checkbox"
              checked={isPersonalTaxAllowanceChecked}
              onChange={(e) =>
                setIsPersonalTaxAllowanceChecked(e.target.checked)
              }
            />
            <label>Személyi adókedvezmény</label>
          </li>
          <DiscountedMembers
            checked={isCheckedDiscountedMembers}
            onChange={handleCheckboxChange}
          />
          {showDiscountedMembersSettings && (
            <DiscountedMembersSettings onChange={handlePeopleChange} />
          )}
        </ul>
      </div>

      <div className="flex flex-col text-center items-center">
        <h2 className="font-bold text-xl mb-2">Számított nettó bér:</h2>
        <NetSalary netSalary={netSalary} selectedMember={selectedMember} />
      </div>
    </div>
  );
}
export default SalaryCalculator;
