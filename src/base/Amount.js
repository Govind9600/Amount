import React, { useState } from "react";
import "./Amount.css";
import FFbutton from "./FFbutton";
//import { useState } from "react";
function Amount() {
  const [orgamount, setorgAmount] = useState([]);
  const [Balance, setBalance] = useState(100);
  const [values, setValues] = React.useState();
  let amountarray = [];
  let newtime = new Date().toISOString();
  const SaveFieldHandler = (event) => {
    if (values && values?.amount) {
      let changeval =
        event.target.value.toLowerCase() === "add"
          ? parseInt(Balance) + parseInt(values.amount)
          : parseInt(Balance) - parseInt(values.amount);
      setBalance(changeval);

      amountarray.push(`${newtime}-${values.amount}-${event.target.value}`);
      setorgAmount([...orgamount, ...amountarray]);
    } else {
      alert("Input Filed is empty!");
    }
  };

  const handleInputChanged = (event) => {
    const { id, value } = event?.target;
    setValues({
      ...values,
      [id]: value,
    });
    //alert(event.target.value);
  };
  return (
    <div>
      Expense Tracker -Basic
      <div className="inputcontrol">
        <p> Balance {Balance}</p>
        <div>
          <input
            type="number"
            id="amount"
            onChange={handleInputChanged}
          ></input>
        </div>
        <div className="btncontrol">
          <FFbutton
            Field={{
              FieldValue: "Add",
              FieldLabel: `Add`,
            }}
            className="Btn_Add"
            onClickHandler={SaveFieldHandler}
          />
          <FFbutton
            Field={{
              FieldValue: "Remove",
              FieldLabel: `Remove`,
            }}
            className="Btn_Remove"
            onClickHandler={SaveFieldHandler}
          />
        </div>
      </div>
      <div
        className={`outputcontrol ${orgamount.length === 0 ? "Active" : ""}`}
      >
        <div>Transaction:</div>
        <div>
          {orgamount.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Amount;
