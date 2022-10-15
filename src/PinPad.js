import React, { useState } from "react";
import backspaceIcon from "./assets/icons/backspace.svg";
import submitIcon from "./assets/icons/submit.svg";

function PinButton({ number, onClick, backspace, submit }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          border: "none",
          borderRadius: "50%",
          height: "5rem",
          width: "5rem",
          fontSize: "1.3rem",
          backgroundColor: "rgba(255,255,255,0.3)",
          boxShadow: "4px 2px 32px 1px rgba(0,0,0,0.3)",
          color: "#222",
        }}
        onClick={onClick}
      >
        {backspace && <img src={backspaceIcon} style={{ width: "1.3rem" }} />}
        {submit && <img src={submitIcon} style={{ width: "1.3rem" }} />}
        {number >= 0 ? number : null}
      </button>
    </div>
  );
}

function PinPad({ checkPasscode }) {
  const [passcode, setPasscode] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2rem",
          color: "white",
        }}
      >
        {passcode.split("").map(() => (
          <span style={{ margin: "0.5rem" }}>&#x2022;</span>
        ))}
      </div>
      <div
        style={{
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        <PinButton
          number={1}
          onClick={() => setPasscode((prev) => prev + "1")}
        />
        <PinButton
          number={2}
          onClick={() => setPasscode((prev) => prev + "2")}
        />
        <PinButton
          number={3}
          onClick={() => setPasscode((prev) => prev + "3")}
        />
        <PinButton
          number={4}
          onClick={() => setPasscode((prev) => prev + "4")}
        />
        <PinButton
          number={5}
          onClick={() => setPasscode((prev) => prev + "5")}
        />
        <PinButton
          number={6}
          onClick={() => setPasscode((prev) => prev + "6")}
        />
        <PinButton
          number={7}
          onClick={() => setPasscode((prev) => prev + "7")}
        />
        <PinButton
          number={8}
          onClick={() => setPasscode((prev) => prev + "8")}
        />
        <PinButton
          number={9}
          onClick={() => setPasscode((prev) => prev + "9")}
        />
        <PinButton
          backspace
          onClick={() => setPasscode((prev) => prev.slice(0, -1))}
        />
        <PinButton
          number={0}
          onClick={() => setPasscode((prev) => prev + "0")}
        />
        <PinButton submit onClick={() => checkPasscode(passcode)} />
      </div>
    </div>
  );
}

export default PinPad;
