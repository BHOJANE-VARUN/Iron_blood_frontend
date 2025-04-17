// import React from "react";
// import { DonorIcon } from "../util/Markers";
// function haversine(lat1, lon1, lat2, lon2) {
//   const toRad = (angle) => angle * (Math.PI / 180);
//   const R = 6371; // Radius of Earth in km

//   const dLat = toRad(lat2 - lat1);
//   const dLon = toRad(lon2 - lon1);

//   const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);

//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c; // Distance in km
// }

// function Card({ myid, end, setend, data}) {
//   const storedHospital = JSON.parse(localStorage.getItem("hospital"));
//   const handleClick = () => {

//     if (myid === end?.id) {
//       setend(null);
//       return;
//     }

//     // location
//     // : 
//     // coordinates
//     // : 
//     // (2) [80.2707, 13.0827]
//     // type
//     // : 
//     // "Point"
//     // Create a new object to avoid mutating the original geocodes
//     const geocodes = { lng: data.location.coordinates[0], lat: data.location.coordinates[1] };
//     const temp = {...geocodes , id: myid ,MyIcon:DonorIcon};
//     setend(temp);
//   };
//   const CSSvalue = `${myid === end?.id ? "border-4" : "border-2"} border-black p-3 flex-col flex gap-3 justify-between h-fit w-[90%]`;

//   return (
//     <div className={CSSvalue} onClick={handleClick}>
//       <h1 className="text-2xl font-bold w-full  ">{data?.name}</h1>
//       <p className="text-sm font-semibold">
//           {haversine(storedHospital.location.coordinates[1],storedHospital.location.coordinates[0],data.location.coordinates[1],data.location.coordinates[0]).toLocaleString()} KM
//         </p>
//       <div className="flex-col flex gap-2 h-fit">
//         <div className="flex h-fit w-full justify-start gap-1">
//           {/* <svg fill="#000000" width="30px" height="35px" viewBox="10 10 80 80" xmlns="http://www.w3.org/2000/svg">
//             <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
//           </svg> */}
//           <p className="text-wrap w-fit text-sm font-semibold  max-w-48">{data?.address}</p>
//         </div>
//         <p className="text-sm font-semibold">
//           {data.blood_type}
//         </p>
//         <div className="flex h-fit w-full justify-start gap-1">
//           {/* <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" />
//           </svg> */}
//           <p className="text-sm font-semibold">{data?.phone}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;


import React from "react";
import { DonorIcon } from "../util/Markers";

function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (angle) => angle * (Math.PI / 180);
  const R = 6371;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function Card({ myid, end, setend, data }) {
  const storedHospital = JSON.parse(localStorage.getItem("hospital"));

  const handleClick = () => {
    if (myid === end?.id) {
      setend(null);
      return;
    }

    const geocodes = {
      lng: data.location.coordinates[0],
      lat: data.location.coordinates[1],
    };
    const temp = { ...geocodes, id: myid, MyIcon: DonorIcon };
    setend(temp);
  };

  const isSelected = myid === end?.id;
  const cardClasses = `
    border-2 ${isSelected ? "border-rose-500" : "border-rose-100"}
    rounded-2xl p-5 flex flex-col gap-4 bg-white hover:shadow-md cursor-pointer w-[90%] transition-all
  `;

  return (
    <div className={cardClasses} onClick={handleClick}>
      <h1 className="text-lg font-semibold text-gray-800 tracking-wide">{data?.name}</h1>

      <p className="text-sm text-rose-600 font-medium">
        📍 {haversine(
          storedHospital.location.coordinates[1],
          storedHospital.location.coordinates[0],
          data.location.coordinates[1],
          data.location.coordinates[0]
        ).toFixed(2)}{" "}
        KM away
      </p>

      <div className="flex flex-col gap-2 text-sm text-gray-600 leading-relaxed">
        <div className="flex gap-2 items-start">
          <span className="text-rose-400">🏠</span>
          <p className="break-words max-w-xs">{data?.address}</p>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-rose-400">🩸</span>
          <p className="font-medium">{data?.blood_type}</p>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-rose-400">📞</span>
          <p>{data?.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
