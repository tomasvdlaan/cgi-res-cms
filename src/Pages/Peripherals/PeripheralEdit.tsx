import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EntitySelect from "../../Components/EntitySelect";
import TextInput from "../../Components/TextInput";
import { Building } from "../buildings/BuildingEntity";
import { Peripheral } from "./PeripheralEntity";

function PeripheralEdit() {
  const { id } = useParams();

  const [peripheral, setPeripheral] = useState<Peripheral>(new Peripheral());

  const updatePeripheral = (key: keyof Peripheral, value: any) => {
    setPeripheral({ ...peripheral, [key]: value });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/peripheral/${id}`, {
        method: "GET",
        mode: "cors",
      })
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          setPeripheral(data);
        });
    }
  }, []);

  const submit = () => {
    console.log(peripheral);
    fetch(`http://localhost:3001/peripheral/`, {
      method: id ? "PUT" : "POST",
      mode: "cors",
      body: JSON.stringify(peripheral),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => updatePeripheral("id", data.id));
  };

  return (
    <div className="border border-gray-200 rounded-xl m-8 bg-white">
      <div className="px-4">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="py-4 font-bold text-xl">Peripheral</h1>
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
          title="Title"
          placeholder="Peripheral title..."
          value={peripheral.title}
          onChange={(text) => updatePeripheral("title", text)}
        />
        <EntitySelect
          title="Category"
          searchUrl={"http://localhost:3001/peripheral/category"}
          titleGenerator={(e: Building) => `${e.title}`}
          onChange={(e) => updatePeripheral("category", e)}
          value={peripheral.category}
        />
        <EntitySelect
          title="Building"
          searchUrl={"http://localhost:3001/building"}
          titleGenerator={(e: Building) => `${e.title}`}
          onChange={(e) => updatePeripheral("building", e)}
          value={peripheral.building}
        />
      </div>
    </div>
  );
}

export default PeripheralEdit;
