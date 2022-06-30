import "./styles/trekcards.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function TrekCards() {
  const [data, setData] = useState("");
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "http://localhost8000:/api/treksList",
      });
      console.log(resp.data);
      setData(resp.data);
    } catch (err) {
      alert("Something went wrong");
      return [];
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="treks">
      <div className="trekCard">
        <a href="/treks-id">
          <img src="https://himalayandreamtreks.in/wp-content/uploads/2021/03/Kedarkantha-min-1.jpg" />
        </a>
        <div className="topLeft">
          <span>05 </span>
          <span>Days</span>
        </div>
        <div className="topRight">
          <span>Rs. </span>
          <span>8,999</span>
        </div>
        <div className="bottom">
          <a href="/treks-id">
            <button className="trekName">{data.title}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrekCards;
