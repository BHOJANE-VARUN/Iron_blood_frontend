import React, { useRef, useState } from "react";

import Maps from "./Maps";
import Header from "./Header";
import Donors from "./Donors";
import HosMain from "./HosMain";

function Body() {
  //   {
  //     "location": {
  //         "type": "Point",
  //         "coordinates": [
  //             -118.2436849,
  //             34.052235
  //         ]
  //     },
  //     "_id": "67b574d104455350afadc7ea",
  //     "name": "Saint Mary Hospital",
  //     "address": "789 Pine Street, Metropolis, USA",
  //     "phone": "9876543210",
  //     "__v": 0
  // }
  const storedHospital = JSON.parse(localStorage.getItem("hospital"));
  const start = {
    lat: storedHospital.location.coordinates[1],
    lng: storedHospital.location.coordinates[0],
    name: storedHospital.name,
  };
  const [Blood,setBlood] = useState("o_negative");
  const [Range,setRange] = useState(1000);
  const [end, setend] = useState(null);

  return (
    <div className="w-screen h-screen">
      <Header Blood={Blood} Range={Range} setBlood={setBlood} setRange={setRange} />
      <div className="flex justify-evenly w-screen h-[90%] px-2 py-3">
        <Donors end={end} setend={setend} queryData={{Blood,Range,hos_id:storedHospital._id}}/>
        <div className="border-2 border-gray-300  shadow-2xl h-full w-[50%]">
          <Maps start={start} end={end} />
        </div>
        <HosMain end={end} setend={setend}  queryData={{Blood,Range,hos_id:storedHospital._id}}/>
      </div>
    </div>
  );
}

export default Body;
