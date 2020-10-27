import React from "react";

import Select from "react-select";

export default function WeedingHalls({ cities }) {
  return (
    <React.Fragment>
      <div className="col-sm">
        <Select
          isMulti
          name="colors"
          options={cities}
          placeholder="cities"
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <div className="col-sm">
        <Select
          isMulti
          name="colors"
          options={[]}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <div className="col-sm">
        <Select
          isMulti
          name="colors"
          options={[]}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    </React.Fragment>
  );
}
