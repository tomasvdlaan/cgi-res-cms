import Menu from "../../Components/Menu";
import Overview from "../../Components/Overview";
import PopUp from "../../Components/PopUp";

import moment from "moment";
import React, { useEffect, useState } from "react";
import { Reservation } from "./ReservationEntity";

function ReservationOverview() {
  const [data, setData] = useState<Reservation[]>([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () =>
    fetch("http://localhost:3001/reservation", { method: "GET", mode: "cors" })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });

  const deleteReservation = (id: number) =>
    fetch(`http://localhost:3001/reservation/${id}`, {
      method: "DELETE",
      mode: "cors",
    })
      .then((result) => result.json())
      .then(() => {
        refresh();
      });

  const dateStringer = (start: Date, end: Date) => {
    let startMoment = moment(start);
    let endMoment = moment(end);
    return startMoment.month() == endMoment.month() &&
      startMoment.day() == endMoment.day()
      ? `${startMoment.format("MM/DD/YYYY HH:mm:ss")} - ${endMoment.format(
          "HH:mm:ss"
        )}`
      : `${startMoment.format("MM/DD/YYYY HH:mm:ss")} - ${endMoment.format(
          "MM/DD/YYYY HH:mm:ss"
        )}`;
  };

  return (
    <div className="border border-gray-200 rounded-xl m-8 bg-white">
      <div className="px-4">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="py-4 font-bold text-xl">Reservations</h1>
            <div className="my-auto">
              <a
                className="bg-slate-100 rounded px-4 py-2"
                href="/reservations/edit"
              >
                + Add new reservation
              </a>
            </div>
          </div>
          <hr />
        </div>

        <div className="my-4">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="rounded-lg font-bold text-gray-700 text-left">
                <th className="px-4 py-2 bg-slate-200 rounded-l-lg">Title</th>
                <th className="px-4 py-2 bg-slate-200">Time</th>
                <th className="px-4 py-2 bg-slate-200 rounded-r-lg"></th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {data.map((r: Reservation) => (
                <tr className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="px-4 py-2 font-bold">{r.workspace?.title}</td>
                  <td className="px-4 py-2">
                    {dateStringer(r.start!, r.end!)}
                  </td>
                  <td className="px-4 py-2 text-right space-x-4">
                    <a
                      className="text-yellow-500"
                      href={`/reservations/${r.id}`}
                    >
                      Edit
                    </a>
                    <button
                      className="text-red-500"
                      onClick={() => deleteReservation(r.id ? r.id : 1)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>




  );
}

export default ReservationOverview;
