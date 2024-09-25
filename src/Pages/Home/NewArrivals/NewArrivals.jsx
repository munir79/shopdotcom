import { useEffect } from "react";
import { useState } from "react";
import NewArrivalCard from "./NewArrivalCard";



const NewArrivals = () => {
  const [newData,setData]=useState([]);
  useEffect(()=>{
    fetch('arrival.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  } ,[])

    return (
        <div className="max-w-6xl mt-10 mx-auto">
        <h2 className="text-2xl text-center md:text-right mr-0 md:mr-20">
          New Arrivals
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {newData.map(data => (
            <NewArrivalCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    );
};

export default NewArrivals;