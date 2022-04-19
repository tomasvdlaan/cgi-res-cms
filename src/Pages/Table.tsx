import React from "react";

const data = [
  { title: "Tafel 1", seats: 1 },
  { title: "Tafel 2", seats: 1 },
  { title: "Tafel 3", seats: 1 },
  { title: "Tafel 4", seats: 1 },
  { title: "Tafel 5", seats: 1 },
  { title: "Tafel 6", seats: 1 },
  { title: "Tafel 7", seats: 1 },
  { title: "Vergaderruimte 1", seats: 6 },
  { title: "Vergaderruimte 2", seats: 6 },
];

function Table() {
  return (
    <div className="border border-gray-200 rounded-xl m-8 bg-white">
      <div className="px-4">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="py-4 font-bold text-xl">Workspaces</h1>
            <div className="my-auto">
              <button className="bg-slate-100 rounded px-4 py-1">
                + Add new workspace
              </button>
            </div>
          </div>
          <hr />
        </div>

        <div className="my-4">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="rounded-lg font-bold text-gray-700 text-left">
                <th className="px-4 py-2 bg-slate-200 rounded-l-lg">
                  Workplace
                </th>
                <th className="px-4 py-2 bg-slate-200">Seats</th>
                <th className="px-4 py-2 bg-slate-200 rounded-r-lg"></th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {data.map((w) => (
                <tr className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="px-4 py-2">{w.title}</td>
                  <td className="px-4 py-2">{w.seats}</td>
                  <td className="px-4 py-2 text-right space-x-4">
                    <button className="text-yellow-500">Edit</button>
                    <button className="text-red-500">Delete</button>
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

export default Table;
