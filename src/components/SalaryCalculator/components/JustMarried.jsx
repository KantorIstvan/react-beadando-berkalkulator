import { useState } from "react";
import { ApprovedMarriage } from "./ApprovedMarriage";
import { JustMarriedModal } from "./JustMarriedModal";

export function JustMarried({
  handleShowModal,
  setIsDiscounted,
  setMarriageDate,
  marriageDate,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setShowModal(true);
    } else {
      setMarriageDate(null);
      setIsDiscounted(false);
    }
  }

  function handleDateChange(date) {
    setMarriageDate(date);
    setShowModal(false);
    const currentDate = new Date();
    const marriageDateObj = new Date(date);
    const differenceInMilliseconds = currentDate - marriageDateObj;
    const differenceInYears =
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    setIsDiscounted(differenceInYears <= 2);
  }

  return (
    <li className="flex gap-[1rem] text-sm">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>Friss házasok kedvezménye</label>
      {isChecked && (
        <>
          <ApprovedMarriage marriageDate={marriageDate} />
          <button
            className="bg-slate-700 p-[0.1rem] px-2 text-[0.5rem] text-white rounded-md"
            onClick={() => setShowModal(true)}
          >
            Dátum változtatása
          </button>
        </>
      )}
      {showModal && (
        <JustMarriedModal
          onClose={() => setShowModal(false)}
          handleDateChange={handleDateChange}
        />
      )}
    </li>
  );
}
