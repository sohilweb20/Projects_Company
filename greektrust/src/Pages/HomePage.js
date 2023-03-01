import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/Navbar.css";
const HomePage = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
      )
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("DATA", data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="SearchInput">
        <input type="text" placeholder="Search " />
        <button>Search</button>
      </div>
      <div className="Clothes">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div>
                <img style={{ width: "200px" }} src={item.imageURL} alt="" />
                <h3px>{item.price}</h3px>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
