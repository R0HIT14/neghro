import React, { useEffect, useState } from "react";
import "./header.css";
import axios from "axios";
// import Button from "../Category"
import Category from "../Category";
import Products from "../Products";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default function Header() {
  const [data, setData] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    const text = searchText;
    setSearchResult(text);
  };

  console.log(searchResult);

  useEffect(() => {
    fetchData()
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => {});
  }, []);


  return (
    <div>
      <div class="Container">
        <div className="logoImage">
          <img className="logoImg" src="./logo.jpg" alt="" />
        </div>
        <input
        class="searchBar"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      <div className="categoryBtn">
        <Category data={data} />
      </div>
      {searchResult && <Products uri={`products/search?q=${searchResult}`} />}
      
    </div>
  );
}
