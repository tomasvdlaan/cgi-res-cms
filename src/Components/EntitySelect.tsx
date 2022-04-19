import React, { useEffect, useState } from "react";
import { BaseEntity } from "../Helper/BaseEntity";

interface EntitySelectProps<T extends BaseEntity> {
  title: string;
  searchUrl: string;
  value?: T;
  onChange?: (entity?: { id: number }) => any;
  titleGenerator: (entity: T) => string;
}

const EntitySelect = <T extends BaseEntity>(props: EntitySelectProps<T>) => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () =>
    fetch(props.searchUrl, { method: "GET", mode: "cors" })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });

  return (
    <div className="flex flex-col">
      <span className="mb-1">{props.title}</span>
      <select
        className="h-10"
        onChange={(e) =>
          props.onChange
            ? props.onChange({ id: Number.parseInt(e.target.value) })
            : null
        }
        value={props.value?.id}
      >
        <option disabled selected>
          Select an option
        </option>
        {data.map((e) => (
          <option value={e.id}>{props.titleGenerator(e)}</option>
        ))}
      </select>
    </div>
  );
};

export default EntitySelect;
