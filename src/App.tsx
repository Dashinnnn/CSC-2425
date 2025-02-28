import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [visible, setVisibility] = useState(false);

  const buttonLabels = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
    "Link",
  ];

//   const buttonLabels = [
//  ,
//     "Secondary",
//     "Success",
//     "Danger",
//     "Warning",
//     "Info",
//     "Light",
//     "Dark",
//     "Link",
//   ];

  return (
    <>
      {visible && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setVisibility(false)} 
          ></button>
        </div>
      )}

      <Button buttonLabels={buttonLabels} onBtn={() => setVisibility(true)} />
    </>
  );
}

export default App;
