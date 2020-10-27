import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./filleterForm.css";

export default function MySelector({ options, title, onChangeService }) {
  const direction = "up";
  return (
    <div className="mb-2">
      <DropdownButton
        // as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={title}
      >
        {options.map((i) => (
          <Dropdown.Item onClick={() => onChangeService(i)} eventKey="1">
            {i}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}
