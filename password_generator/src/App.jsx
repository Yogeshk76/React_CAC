import React, { use, useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pass)
    alert("Password copied to clipboard");
  }, [password])

  useEffect(() => {
    passwordGenerator();
    console.log(password);
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <>
      <div className="bg-gray-800 w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4  text-black bg-gray-200 text-base">
          <h1 className="text-black text-2xl font-bold text-center">
            Password Generator
          </h1>

          <div className="flex justify-evenly mt-2 mb-2">
            <input
              value={password}
              className="w-full py-1 px-3 outline-none bg-gray-400 rounded-xl mr-2"
              readOnly
              ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className="outline-none border-2 border-black rounded-md w-20 bg-blue-400">
              Copy
            </button>
          </div>

          <div className="flex justify-evenly mt-2 mb-2 ">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length {length} </label>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput"> Number </label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput"> Special Chars </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
