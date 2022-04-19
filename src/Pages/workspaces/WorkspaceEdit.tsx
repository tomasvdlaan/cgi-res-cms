import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EntitySelect from "../../Components/EntitySelect";
import TextInput from "../../Components/TextInput";
import { Building } from "../buildings/BuildingEntity";
import { Workspace } from "./WorkspaceEntity";

function WorkspaceEdit() {
  const { id } = useParams();

  const [workspace, setWorkspace] = useState<Workspace>(new Workspace());

  const updateWorkspace = (key: keyof Workspace, value: any) => {
    setWorkspace({ ...workspace, [key]: value });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/workspace/${id}`, {
        method: "GET",
        mode: "cors",
      })
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          setWorkspace(data);
        });
    }
  }, []);

  const submit = () => {
    console.log(workspace);
    fetch(`http://localhost:3001/workspace/`, {
      method: id ? "PUT" : "POST",
      mode: "cors",
      body: JSON.stringify(workspace),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => updateWorkspace("id", data.id));
  };

  return (
    <div className="border border-gray-200 rounded-xl m-8 bg-white">
      <div className="px-4">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="py-4 font-bold text-xl">Workspace</h1>
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
          placeholder="Workspace title..."
          value={workspace.title}
          onChange={(text) => updateWorkspace("title", text)}
        />
        <EntitySelect
          title="Building"
          searchUrl={"http://localhost:3001/building"}
          titleGenerator={(e: Building) => `${e.title}`}
          onChange={(e) => updateWorkspace("building", e)}
          value={workspace.building}
        />
      </div>
    </div>
  );
}

export default WorkspaceEdit;
