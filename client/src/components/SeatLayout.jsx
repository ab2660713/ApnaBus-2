import { useState } from "react";
import {
  User,
  UserRound,
} from "lucide-react";

function SeatLayout({
  totalSeats = 40,
  bookedSeats = [2, 8, 11],
  ladiesSeats = [1, 5, 9, 13],
}) {
  const seatsPerRow = 4;
  const rows = Math.ceil(totalSeats / seatsPerRow);

  // seat data
  const initialSeats = Array.from({ length: totalSeats }, (_, i) => {
    const seatNo = i + 1;

    return {
      number: seatNo,
      status: bookedSeats.includes(seatNo)
        ? "booked"
        : "available",
      gender: null,
      reservedForLadies: ladiesSeats.includes(seatNo),
    };
  });

  const [seats, setSeats] = useState(initialSeats);

  // select seat
  const toggleSeat = (index) => {
    const seat = seats[index];

    if (seat.status === "booked") return;

    const gender = prompt(
      "Select Gender:\nType male or female"
    );

    if (!gender) return;

    // ladies reserved validation
    if (
      seat.reservedForLadies &&
      gender.toLowerCase() === "male"
    ) {
      alert("This seat is reserved for ladies");
      return;
    }

    setSeats((prev) =>
      prev.map((s, i) =>
        i === index
          ? {
              ...s,
              status:
                s.status === "selected"
                  ? "available"
                  : "selected",
              gender:
                s.status === "selected"
                  ? null
                  : gender.toLowerCase(),
            }
          : s
      )
    );
  };

  const selectedSeats = seats.filter(
    (seat) => seat.status === "selected"
  );

  const getSeatStyle = (seat) => {
    if (seat.status === "booked") {
      return "bg-gray-400 text-white cursor-not-allowed";
    }

    if (seat.status === "selected") {
      return seat.gender === "female"
        ? "bg-pink-500 text-white"
        : "bg-blue-600 text-white";
    }

    return seat.reservedForLadies
      ? "bg-pink-100 border border-pink-400 hover:bg-pink-200"
      : "bg-gray-200 hover:bg-blue-100";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Select Your Seats
      </h2>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm">
        <Legend color="bg-gray-200" label="Available" />
        <Legend color="bg-blue-600" label="Male Selected" />
        <Legend color="bg-pink-500" label="Female Selected" />
        <Legend color="bg-pink-100 border border-pink-400" label="Ladies Seat" />
        <Legend color="bg-gray-400" label="Booked" />
      </div>

      {/* Driver */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-300 px-6 py-2 rounded-xl font-semibold">
          Driver
        </div>
      </div>

      {/* Seats */}
      <div className="flex justify-center">
        <div className="grid gap-3">
          {Array.from({ length: rows }).map((_, row) => (
            <div key={row} className="flex gap-3">
              {Array.from({ length: seatsPerRow }).map((_, col) => {
                const seatIndex =
                  row * seatsPerRow + col;

                if (seatIndex >= totalSeats)
                  return null;

                const seat = seats[seatIndex];

                return (
                  <div
                    key={col}
                    onClick={() =>
                      toggleSeat(seatIndex)
                    }
                    className={`w-12 h-12 rounded-xl flex items-center justify-center relative font-semibold transition-all duration-200 cursor-pointer ${getSeatStyle(
                      seat
                    )} ${col === 1 ? "mr-6" : ""}`}
                  >
                    {seat.gender === "female" ? (
                      <UserRound size={16} />
                    ) : seat.gender === "male" ? (
                      <User size={16} />
                    ) : (
                      seat.number
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Seats */}
      {selectedSeats.length > 0 && (
        <div className="mt-8 bg-gray-100 p-4 rounded-xl">
          <h3 className="font-bold mb-2">
            Selected Seats
          </h3>

          <div className="flex flex-wrap gap-3">
            {selectedSeats.map((seat) => (
              <div
                key={seat.number}
                className="px-4 py-2 rounded-lg bg-white shadow text-sm"
              >
                Seat {seat.number} (
                {seat.gender})
              </div>
            ))}
          </div>

          {/* Payment Button */}
          <button
            className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
            onClick={() => {
              alert(
                "Payment successful → Now save booked seats in DB"
              );
            }}
          >
            Proceed To Payment
          </button>
        </div>
      )}
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-5 h-5 rounded ${color}`}></div>
      <span>{label}</span>
    </div>
  );
}

export default SeatLayout;