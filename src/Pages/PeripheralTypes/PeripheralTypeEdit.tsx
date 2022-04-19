import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../../Components/TextInput";
import Global from "../../Helper/Constants";
import { PeripheralType } from "./PeripheralTypeEntity";

function PeripheralTypeEdit() {
  const { id } = useParams();

  const [peripheralType, setPeripheralType] = useState<PeripheralType>(
    new PeripheralType()
  );

  const updatePeripheralType = (key: keyof PeripheralType, value: any) => {
    setPeripheralType({ ...peripheralType, [key]: value });
  };

  useEffect(() => {
    if (id) {
      fetch(`${Global.ApiUrl}/peripheral/category${id}`, {
        method: "GET",
        mode: "cors",
      })
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          setPeripheralType(data);
        });
    }
  }, []);

  const submit = () => {
    console.log(peripheralType);
    fetch(`${Global.ApiUrl}/peripheral/category${id ? "" : "/create"}`, {
      method: id ? "PUT" : "POST",
      mode: "cors",
      body: JSON.stringify(peripheralType),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => updatePeripheralType("id", data.id));
  };

  return (
    <div className="border border-gray-200 rounded-xl m-8 bg-white">
      <div className="px-4">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="py-4 font-bold text-xl">PeripheralType</h1>
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
          placeholder="PeripheralType title..."
          value={peripheralType.title}
          onChange={(text) => updatePeripheralType("title", text)}
        />
        <TextInput
          title="Description"
          placeholder="PeripheralType title..."
          value={peripheralType.description}
          onChange={(text) => updatePeripheralType("description", text)}
        />
      </div>
    </div>
  );
}

export default PeripheralTypeEdit;
