import React, { useEffect, useState } from "react";
import axios from "axios";

function CatFact() {
  const [data, setData] = useState({ fact: "", length: "" });
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(
    function () {
      // fetch("https://catfact.ninja/fact")
      //   .then(function (response) {
      //     return response.json();
      //   })
      //   .then(function (data) {
      //     setData(data);
      //   })
      //   .catch(function (error) {});
      axios
        .get("https://catfact.ninja/fact")
        .then(function (data) {
          setData(data.data);
          setIsLoading(false);
        })
        .catch(function (err) {
          setErrorMsg(err.message);
          setError(true);
        });
    },
    [count]
  );

  if (isLoading === true && error === false) {
    return <div>Loading......</div>;
  }

  if (error === true) {
    return <div>{errorMsg}</div>;
  }

  return (
    <div>
      <h1>{data.length}</h1>
      <p>{data.fact}</p>
      <button
        onClick={function () {
          setIsLoading(true);
          setCount(function (prev) {
            return ++prev;
          });
        }}
      >
        Fetch Fact
      </button>
    </div>
  );
}

export default CatFact;
