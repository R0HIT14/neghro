import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import "./style.css";
import Card from "../Card";

const query = "https://dummyjson.com";

async function fetchData(query) {
  try {
    const response = await axios.get(query);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default function Products({ uri }) { 
  console.log(`${query}/${uri}`);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(`${query}/${uri}`)
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [uri]);

  console.log(data);

  return (
    <div className="wrapper">
      <Card data={data} />
    </div>
  );
}
