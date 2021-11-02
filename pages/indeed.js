/* eslint react/prop-types: 0 */
import React, { useEffect } from "react";

const CalendarInput = ({
  id,
  onChange,
  removeDate,
  hidden = "text-transparent",
  value,
}) => {
  return (
    <div>
      <input
        className="m-2 p-2 border rounded border-1"
        onChange={onChange}
        type="date"
        id={id}
        name={id}
        value={value}
      />
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




function App() {
  const [firstDate, setFirstDate] = React.useState("");
  const [secondDate, setSecondDate] = React.useState("");
  const [thirdDate, setThirdDate] = React.useState("");
  const [hidden, setHidden] = React.useState(true);

  // const [portfolioLink, setPortfolioLink] = React.useState("");
  // const [githubLink, setGithubLink] = React.useState("");
  // const [linkedinLink, setLinkedinLink] = React.useState("");

  useEffect(() => {
    setFirstDate(localStorage.getItem("firstDate"));
    setSecondDate(localStorage.getItem("secondDate"));
    setThirdDate(localStorage.getItem("thirdDate"));
    // setPortfolioLink(localStorage.getItem("portfolioLink"));
    // setGithubLink(localStorage.getItem("githubLink"));
    // setLinkedinLink(localStorage.getItem("linkedinLink"));
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

  function copyTextColorFn() {
    setCopyTextColor("black");

    setTimeout(() => {
      setCopyTextColor("white");
    }, 2000);
  }

  function hideCopyTextAlert() {
    setHidden(false);

    setTimeout(() => {
      setHidden(true);
    }, 2000);
  }

  return (
    <div className="App flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="text-5xl font-bold p-4">Time Availability</div>
        <form>
          <CalendarInput
            onChange={handleChange}
            removeDate={removeDate}
            id="first"
            hidden={`${
              firstDate ? "text-black cursor-pointer" : "text-transparent"
            }`}
            value={firstDate}
          />
          <CalendarInput
            onChange={handleChange}
            removeDate={removeDate}
            id="second"
            hidden={`${
              secondDate ? "text-black cursor-pointer" : "text-transparent"
            }`}
            value={secondDate}
          />
          <CalendarInput
            onChange={handleChange}
            removeDate={removeDate}
            id="third"
            hidden={`${
              thirdDate ? "text-black cursor-pointer" : "text-transparent"
            }`}
            value={thirdDate}
          />
        </form>

        <div id="final" className="h-42 w-screen text-red-500 p-4 text-xl">
          <span className="text-red-400">
            {firstDate ? `${firstDate} 12PM-8PM` : null}
          </span>
          <span className="text-blue-400">
            {secondDate
              ? `${firstDate ? "," : ""} ${secondDate} 12PM-8PM`
              : null}
          </span>
          <span className="text-green-500">
            {thirdDate
              ? `${firstDate || secondDate ? "," : ""} ${thirdDate} 12PM-8PM`
              : null}
          </span>
        </div>
        <button
          className="border border-black py-2 px-4 rounded-lg hover:bg-gray-200 ease-in-out transition focus:outline-none"
          onClick={() => {
            navigator.clipboard.writeText(
              document.getElementById("final").textContent
            );
            hideCopyTextAlert();
          }}
        >
          Click to Copy
        </button>
        <div
          className={`${
            hidden ? "hidden" : "block"
          } font-semibold mt-2 transition ease-in-out`}
        >
          Copied!
        </div>

        <div className="m-4">
          <button
            onClick={() => {
              const link = document.getElementById("github-link");
              navigator.clipboard.writeText(link.textContent);
              link.textContent = "Copied!";
              setTimeout(() => {
                link.textContent = "https://www.github.com/kevinelee";
              }, 2000);
            }}
            id="github-link"
            className="p-4 rounded focus:outline-none font-semibold"
          >
            https://www.github.com/kevinelee
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                document.getElementById("linkedin-link").textContent
              );
            }}
            id="linkedin-link"
            className="p-4"
          >
            https://www.linkedin.com/in/kevinelee/
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                document.getElementById("portfolio-link").textContent
              );
            }}
            id="portfolio-link"
            className="p-4"
          >
            https://www.kevinelee.com/
          </button>
        </div>
        {/* <form className="p-4">
          <input
            id="domain"
            className="border border-1 rounded p-2"
            type="text"
          />
          <button
            className="ml-2 border border-black py-1 px-2 rounded-lg hover:bg-gray-200 ease-in-out transition focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(
                document.getElementById("domain").value
              );
            }}
          >
            Click to Copy
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default App;
