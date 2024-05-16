import { useState } from "react";

export function JustMarriedModal({ onClose, handleDateChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  function handleModalDateChange(e) {
    setSelectedDate(e.target.value);
  }

  function handleSave() {
    handleDateChange(selectedDate);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className="bg-white p-2 rounded-md flex flex-col items-center">
        <p className="text-sm text-slate-400 mb-[1rem]">
          A kedvezmény először a házasságkötést követő hónapra vehető igénybe és
          a házassági életkötelezettség alatt legfeljebb 24 hónapon keresztül
          jár.
        </p>
        <h2>Írd be a házasságkötés dátumát:</h2>
        <input
          type="date"
          onChange={handleModalDateChange}
          placeholder="YYYY-MM-DD"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 p-1 rounded-md w-[3.5rem] text-sm text-white p-1 my-[1rem]"
          onClick={handleSave}
        >
          Mentés
        </button>
      </div>
    </div>
  );
}
