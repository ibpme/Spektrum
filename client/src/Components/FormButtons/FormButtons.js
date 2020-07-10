import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const FormButtons = (props) => {
  const [rSelected, setRSelected] = useState(null);

  return (
    <div className=".container-md text-center m-auto p-4">
      <ButtonGroup>
        <p className="p-2 m-auto text-danger">Disagree</p>
        <Button
          className="rounded-left"
          color="primary"
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          1
        </Button>
        <Button
          color="primary"
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          2
        </Button>
        <Button
          color="primary"
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          3
        </Button>
        <Button
          className="rounded-right"
          color="primary"
          onClick={() => setRSelected(4)}
          active={rSelected === 4}
        >
          4
        </Button>
        <p className="p-2 m-auto text-success">Agree</p>
      </ButtonGroup>

      <p>Selected: {rSelected}</p>
    </div>
  );
};

export default FormButtons;
