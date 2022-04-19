import React, { useEffect, useState } from "react";

function UserOverview() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () =>
    fetch("http://localhost:3001/user", {
      method: "GET",
      mode: "cors",
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });

  const deletePeripheralType = (id: number) =>
    fetch(`http://localhost:3001/peripheral/category/${id}`, {
      method: "DELETE",
      mode: "cors",
    })
      .then((result) => result.json())
      .then(() => {
        refresh();
      });

  return (
    <div className="border border-gray-200 rounded-xl m-8 bg-white">
      <div className="px-4">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="py-4 font-bold text-xl">Users</h1>
          </div>
          <hr />
        </div>

        <div className="my-4">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="rounded-lg font-bold text-gray-700 text-left">
                <th className="px-4 py-2 bg-slate-200 rounded-l-lg">Name</th>
                <th className="px-4 py-2 bg-slate-200 ">id</th>
                <th className="px-4 py-2 bg-slate-200 rounded-r-lg"></th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {data.map((u: any) => (
                <tr className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="px-4 py-2 font-bold">{u.name}</td>
                  <td className="px-4 py-2">{u.user_id}</td>
                  <td className="px-4 py-2 text-right space-x-4">
                    <a
                      className="text-yellow-500"
                      href={`/peripherals/categories/${u.user_id}`}
                    >
                      Edit
                    </a>
                    <button
                      className="text-red-500"
                      onClick={() =>
                        deletePeripheralType(u.user_id ? u.user_id : 1)
                      }
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

export default UserOverview;
