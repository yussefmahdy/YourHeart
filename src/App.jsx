import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  const [password, setPassword] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [showAbbreviationInput, setShowAbbreviationInput] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showAbbreviationError, setAbbreviationShowError] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [disable, setDisable] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAbbreviationChange = (event) => {
    setAbbreviation(event.target.value);
  };

  const handleSubmit = () => {
    if (password.toLowerCase() === "aimol") {
      setShowAbbreviationInput(true);
      setShowError(false);
      setDisable(true);
    } else {
      setShowError(true);
      setDisable(false);
    }
  };

  const handleSubmitA = () => {
    if (
      abbreviation.toLowerCase() === "ahmed is my only love" ||
      abbreviation.toLowerCase() === "alaa is my only love"
    ) {
      setShowSuccessMsg(true);
      setAbbreviationShowError(false);
    } else {
      setAbbreviationShowError(true);
      setShowSuccessMsg(false);
    }
  };

  useEffect(() => {
    document.title = "Your Heart ❤️";
  }, []);

  return (
    <div className="flex w-full h-screen bg-slate-500 justify-center items-center">
      {/* Main Dialog */}
      <div className="flex h-fit w-fit p-4 rounded-md flex-col shadow-md bg-slate-50 items-center gap-3">
        <p className="font-bold text-lg">Your Heart Passcode ❤️</p>
        <div className="flex flex-col items-center mb-5">
          <p className="text-sm text-[#6b7280]">Is it really you? 🧐</p>
          <p className="text-sm text-[#6b7280]">
            Well there is only one way to find out. 😉{" "}
          </p>
        </div>
        <div className="space-y-3 w-full mb-3">
          <div className="space-y-1">
            <p className="text-xs">Enter Passcode</p>
            <input
              type="text"
              className={`w-full border-2 text-sm rounded-md px-2 py-1 ${
                disable && "cursor-not-allowed "
              }`}
              placeholder="Enter Passcode"
              value={password}
              onChange={handlePasswordChange}
              disabled={disable}
            />
          </div>
          <button
            onClick={() => handleSubmit()}
            disabled={disable}
            className={`rounded-md py-1 w-full bg-[#64748B] text-white text-sm ${
              disable && "cursor-not-allowed "
            }`}
          >
            Check Passcode
          </button>
        </div>
        {showError && (
          <p className="text-red-500 text-sm">
            Incorrect Passcode 😔, Try a diffrent one.
          </p>
        )}
        {showAbbreviationInput && (
          <div className="space-y-3 w-full">
            <div className="space-y-1">
              <p className="text-xs">Enter Abbreviation</p>
              <input
                type="text"
                className="w-full border-2 text-sm rounded-md px-2 py-1"
                placeholder="Enter Abbreviation"
                value={abbreviation}
                onChange={handleAbbreviationChange}
              />
            </div>
            <button
              onClick={() => handleSubmitA()}
              className="rounded-md py-1 w-full bg-[#64748B] text-white text-sm"
            >
              Check Abbreviation
            </button>
          </div>
        )}
        {showAbbreviationError && (
          <p className="text-red-500 text-sm">
            Incorrect abbreviation 😔, Try a diffrent one.
          </p>
        )}
        {showSuccessMsg && <p className="text-green-500 text-sm">راجع علبة (تريوم) في درج من أدراج يوسف</p>}
      </div>
    </div>
  );
}

export default App;
