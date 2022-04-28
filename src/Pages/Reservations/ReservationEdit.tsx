import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateInput from "../../Components/DateInput";
import EntitySelect from "../../Components/EntitySelect";
import TextInput from "../../Components/TextInput";
import { Workspace } from "../Workspaces/WorkspaceEntity";
import { Reservation } from "./ReservationEntity";

function ReservationEdit() {
  const { id } = useParams();

  const [reservation, setReservation] = useState<Reservation>(
    new Reservation()
  );

  const updateReservation = (key: keyof Reservation, value: any) => {
    setReservation({ ...reservation, [key]: value });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/reservation/${id}`, {
        method: "GET",
        mode: "cors",
      })
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          setReservation(data);
        });
    }
  }, []);

  const submit = () => {
    console.log(reservation);
    fetch(`http://localhost:3001/reservation/`, {
      method: id ? "PUT" : "POST",
      mode: "cors",
      body: JSON.stringify(reservation),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => updateReservation("id", data.id));
  };

  return (
    <div className="border border-gray-200 rounded-xl m-8 bg-white">
      <div className="px-4">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="py-4 font-bold text-xl">Reservation</h1>
            <div className="my-auto">
              <button
                className="bg-slate-100 rounded px-4 py-2"
                onClick={submit}
              >
                Save
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="p-4 flex flex-col space-y-4">
        <TextInput
          title="Auth0 User Id"
          value={reservation.userId}
          onChange={(text) => updateReservation("userId", text)}
        />
        <DateInput
          title="Start"
          placeholder="Start date and time of reservation"
          value={moment(reservation.start).toDate()}
          onChange={(datetime) => updateReservation("start", datetime)}
        />
        <DateInput
          title="End"
          placeholder="End date and time of reservation"
          value={moment(reservation.end).toDate()}
          onChange={(datetime) => updateReservation("end", datetime)}
        />
        <EntitySelect
          title="Workspace"
          searchUrl={"http://localhost:3001/workspace"}
          titleGenerator={(e: Workspace) => `${e.title}`}
          onChange={(e) => updateReservation("workspace", e)}
          value={reservation.workspace}
        />
        <div className="w-full flex flex-col">
          <span className="mb-1">Secret</span>
          <input
            type="text"
            disabled
            value={reservation.secret}
            className="border border-gray-200 rounded p-2 bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

export default ReservationEdit;
