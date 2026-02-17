import axios from "axios";
import React from "react";
import { useState } from "react";

export const ApiDemo2 = () => {
  const [userData, setuserData] = useState([]);
  const getUser = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    setuserData(response.data.products);
  };
  return (
    <div style={{ color: "skyblue", textAlign: "center" }}>
      <h1>Api Demo 2</h1>
      <button
        onClick={() => {
          getUser();
        }}
      >
        GET Detail
      </button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
