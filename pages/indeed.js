/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CalendarInput = ({
  id,
  onChange,
  startTimeOnChange,
  endTimeOnChange,
  removeDate,
  startTime,
  endTime,
  start,
  end,
  hidden = "text-transparent",
  value,
  st,
  et,
  stVal,
  etVal,
}) => {
  return (
    <div id={id} className="flex justify-center flex-col md:flex-row">
      <input
        className="m-2 p-2 border rounded border-1"
        onChange={onChange}
        type="date"
        id={id}
        name={id}
        value={value}
      />

      <input
        value={stVal}
        start={start}
        type="time"
        id={st}
        onChange={startTimeOnChange}
        className="border-1 border p-2 mx-2"
      ></input>
      <input
        value={etVal}
        end={end}
        type="time"
        id={et}
        onChange={endTimeOnChange}
        className="border-1 border p-2 mx-2"
      ></input>

      <button
        id={id}
        onClick={removeDate}
        className={`${hidden} text-2xl font-bold cursor-auto mr-1 p-2 focus:outline-none`}
      >
        &#215;
      </button>
    </div>
  );
};

const CopyLinkButton = ({ id, link }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => {
        const item = document.getElementById(id);
        navigator.clipboard.writeText(item.textContent);
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 1500);
      }}
      id={id}
      className={`p-4 rounded focus:outline-none font-semibold transition transform ease-in-out`}
    >
      {isClicked ? <span className="text-green-500">Copied!</span> : link}
    </button>
  );
};

function App() {
  const [firstDate, setFirstDate] = React.useState("");
  const [secondDate, setSecondDate] = React.useState("");
  const [thirdDate, setThirdDate] = React.useState("");
  const [firstTimeStart, setFirstTimeStart] = React.useState("");
  const [secondTimeStart, setSecondTimeStart] = React.useState("");
  const [thirdTimeStart, setThirdTimeStart] = React.useState("");
  const [firstTimeEnd, setFirstTimeEnd] = React.useState("");
  const [secondTimeEnd, setSecondTimeEnd] = React.useState("");
  const [thirdTimeEnd, setThirdTimeEnd] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    setFirstDate(localStorage.getItem("firstDate"));
    setSecondDate(localStorage.getItem("secondDate"));
    setThirdDate(localStorage.getItem("thirdDate"));
    setFirstTimeStart(localStorage.getItem("firstStartTime"));
    setSecondTimeStart(localStorage.getItem("secondStartTime"));
    setThirdTimeStart(localStorage.getItem("thirdStartTime"));
    setFirstTimeEnd(localStorage.getItem("firstEndTime"));
    setSecondTimeEnd(localStorage.getItem("secondEndTime"));
    setThirdTimeEnd(localStorage.getItem("thirdEndTime"));
  }, []);

  function handleChange(event) {
    switch (event.target.id) {
      case "first":
        localStorage.setItem("firstDate", event.target.value);
        setFirstDate(event.target.value);
        break;
      case "second":
        localStorage.setItem("secondDate", event.target.value);
        setSecondDate(event.target.value);
        break;
      case "third":
        localStorage.setItem("thirdDate", event.target.value);
        setThirdDate(event.target.value);
        break;
      case "fourth":
        break;
    }
  }

  function timeHandleChange(event) {
    console.log(event.target.value);
    switch (event.target.id) {
      case "fst":
        localStorage.setItem("firstStartTime", event.target.value);
        setFirstTimeStart(event.target.value);
        console.log(firstDate);
        break;
      case "sst":
        localStorage.setItem("secondStartTime", event.target.value);
        setSecondTimeStart(event.target.value);
        break;
      case "tst":
        localStorage.setItem("thirdStartTime", event.target.value);
        setThirdTimeStart(event.target.value);
        break;
      case "fet":
        localStorage.setItem("firstEndTime", event.target.value);
        setFirstTimeEnd(event.target.value);
        console.log(firstDate);
        break;
      case "set":
        localStorage.setItem("secondEndTime", event.target.value);
        setSecondTimeEnd(event.target.value);
        break;
      case "tet":
        localStorage.setItem("thirdEndTime", event.target.value);
        setThirdTimeEnd(event.target.value);
        break;
      case "fourth":
        break;
    }
  }

  function removeDate(event) {
    event.preventDefault();
    switch (event.target.id) {
      case "first":
        setFirstDate("");
        break;
      case "second":
        setSecondDate("");
        break;
      case "third":
        setThirdDate("");
        break;
      case "fourth":
        break;
    }
  }

  function timeConvert(t) {
    // Check correct time format and split into components
    if (t) {
      let time = t
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(""); // return adjusted time or original string
    }
  }

  return (
    <div className="App flex justify-center items-center h-screen">
      <div className="text-center">
        <Link href="/">
          <a>Home</a>
        </Link>
        <div className="text-5xl font-bold p-4">Time Availability</div>
        <form>
          <CalendarInput
            onChange={handleChange}
            removeDate={removeDate}
            startTimeOnChange={timeHandleChange}
            endTimeOnChange={timeHandleChange}
            start={"start"}
            st={"fst"}
            et={"fet"}
            stVal={firstTimeStart}
            etVal={firstTimeEnd}
            id="first"
            hidden={`${
              firstDate ? "text-black cursor-pointer" : "text-transparent"
            }`}
            value={firstDate}
          />
          <CalendarInput
            onChange={handleChange}
            removeDate={removeDate}
            startTimeOnChange={timeHandleChange}
            endTimeOnChange={timeHandleChange}
            st={"sst"}
            et={"set"}
            stVal={secondTimeStart}
            etVal={secondTimeEnd}
            id="second"
            hidden={`${
              secondDate ? "text-black cursor-pointer" : "text-transparent"
            }`}
            value={secondDate}
          />
          <CalendarInput
            onChange={handleChange}
            removeDate={removeDate}
            startTimeOnChange={timeHandleChange}
            endTimeOnChange={timeHandleChange}
            st={"tst"}
            et={"tet"}
            stVal={thirdTimeStart}
            etVal={thirdTimeEnd}
            id="third"
            hidden={`${
              thirdDate ? "text-black cursor-pointer" : "text-transparent"
            }`}
            value={thirdDate}
          />
        </form>

        <div id="final" className="h-42 w-screen text-red-500 p-4 text-xl">
          <span className="text-red-400">
            {firstDate
              ? `${firstDate} ${timeConvert(firstTimeStart)}-${timeConvert(
                  firstTimeEnd
                )}`
              : null}
          </span>
          <span className="text-blue-400">
            {secondDate
              ? `${secondDate ? "," : ""} ${secondDate} ${timeConvert(
                  secondTimeStart
                )}-${timeConvert(secondTimeEnd)}`
              : null}
          </span>
          <span className="text-green-500">
            {thirdDate
              ? `${
                  firstDate || secondDate ? "," : ""
                } ${thirdDate}  ${timeConvert(thirdTimeStart)}-${timeConvert(
                  thirdTimeEnd
                )}`
              : null}
          </span>
        </div>

        <button
          id="copy-button"
          className="border border-black py-2 px-4 rounded-lg hover:bg-gray-200 ease-in-out transition focus:outline-none font-semibold"
          onClick={() => {
            navigator.clipboard.writeText(
              document.getElementById("final").textContent
            );
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1500);
          }}
        >
          {copied ? (
            <span className="text-green-500">Copied!</span>
          ) : (
            "Click to Copy"
          )}
        </button>

        <div className="m-4">
          <CopyLinkButton
            id="github-link"
            link="https://www.github.com/kevinelee"
          />
          <CopyLinkButton
            id="linkedin-link"
            link="https://www.linkedin.com/in/kevinelee/"
          />
          <CopyLinkButton
            id="portfolio-link"
            link="https://www.kevinelee.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
