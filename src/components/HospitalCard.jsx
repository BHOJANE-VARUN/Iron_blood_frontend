// import React from "react";
// import { HospitalIcon } from "../util/Markers";
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



// function HospitalCard({end,setend,myid,data}) {
//   const storedHospital = JSON.parse(localStorage.getItem("hospital"));
//   const handleClick = ()=>{
//     if(myid===end?.id)
//     {
//         setend(null);
//         return;
//     }
//     const geocodes = {
//       lng: data.location.coordinates[0],
//       lat: data.location.coordinates[1],
//     };
//     var temp = {...geocodes,id:myid,MyIcon:HospitalIcon};
//     setend(temp);
//   }
//   return (
//     <div onClick={handleClick} className= {` ${end?.id===myid?"border-4":"border-2"} border-black p-3 flex-col flex gap-3 justify-between h-fit w-fit`}>
//       <h1 className="text-3xl font-bold w-full text-center">
//         {data.name}
//       </h1>
//       <div>
//       {haversine(storedHospital.location.coordinates[1],storedHospital.location.coordinates[0],data.location.coordinates[1],data.location.coordinates[0]).toLocaleString()} KM
//       </div>
//       <div className=" flex-col flex gap-2 h-fit">
//         <div className="flex h-fit w-full justify-start gap-3">
//           <svg
//             fill="#000000"
//             width="30px"
//             height="35px"
//             viewBox="10 10 80 80"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
//           </svg>
//           <p className="text-wrap w-fit text-sm font-light max-w-48">
//             {data.address}
//           </p>
//         </div>
//         <div className="flex  h-fit w-full justify-start gap-3">
//           <svg
//             width="25px"
//             height="25px"
//             viewBox="0 0 24 24"
//             fill="#000000"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
//               fill="#000000"
//             />
//             <path
//               d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"
//               fill="#000000"
//             />
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z"
//               fill="#000000"
//             />
//           </svg>{" "}
//           <p className="text-sm font-light">{data.phone}</p>
//         </div>
//         <div className="flex  h-fit w-full justify-start">
//           <svg
//             fill="#000000"
//             height="40px"
//             width="40px"
//             version="1.1"
//             id="Capa_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlns:xlink="http://www.w3.org/1999/xlink"
//             viewBox="0 0 300 300"
//             xml:space="preserve"
//           >
//             <g>
//               <path
//                 d="M241.596,276.979h-84.633c-9.572,0-17.84-5.673-21.631-13.832h4.705c5.528,0,10.01-4.482,10.01-10.01v-23.843h9.987
// 		c22.493,0,40.792-18.299,40.792-40.792V33.092c0-5.528-4.482-10.01-10.01-10.01h-39.749C148.538,9.951,136.968,0,123.111,0
// 		S97.683,9.951,95.154,23.081h-39.75c-5.528,0-10.01,4.482-10.01,10.01v155.41c0,22.493,18.299,40.792,40.792,40.792h9.988v23.843
// 		c0,5.528,4.482,10.01,10.01,10.01h8.082C118.809,282.524,136.221,297,156.963,297h84.633c5.528,0,10.01-4.482,10.01-10.01
// 		S247.124,276.979,241.596,276.979z M123.111,20.021c2.613,0,4.952,1.192,6.504,3.061h-13.009
// 		C118.158,21.213,120.497,20.021,123.111,20.021z M180.806,43.102v47.685H65.414V43.102H180.806z M65.414,188.502v-77.694h115.392
// 		v77.694c0,11.453-9.318,20.771-20.771,20.771H86.186C74.732,209.274,65.414,199.955,65.414,188.502z M130.027,229.294v13.833
// 		h-13.833v-13.833H130.027z"
//               />
//               <path
//                 d="M150.048,168.504c0-11.255-13.078-31.403-18.701-39.543c-1.869-2.706-4.947-4.321-8.236-4.321s-6.367,1.615-8.236,4.321
// 		c-5.623,8.14-18.701,28.288-18.701,39.543c0,14.853,12.084,26.937,26.937,26.937S150.048,183.357,150.048,168.504z
// 		 M116.194,168.561c0.195-2.351,2.98-8.296,6.92-15.158c3.953,6.878,6.741,12.822,6.912,15.102c0,3.814-3.103,6.916-6.916,6.916
// 		C119.316,175.42,116.225,172.349,116.194,168.561z"
//               />
//             </g>
//           </svg>
//           <p className="text-sm font-light flex items-center">3 litres of O+ blood available</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HospitalCard;

import React from "react";
import { HospitalIcon } from "../util/Markers";

function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (angle) => angle * (Math.PI / 180);
  const R = 6371; // Radius of Earth in km

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in km
}

function HospitalCard({ end, setend, myid, data }) {
  const storedHospital = JSON.parse(localStorage.getItem("hospital"));

  const handleClick = ()=>{
    if(myid===end?.id)
    {
        setend(null);
        return;
    }
    const geocodes = {
      lng: data.location.coordinates[0],
      lat: data.location.coordinates[1],
    };
    var temp = {...geocodes,id:myid,MyIcon:HospitalIcon};
    setend(temp);
  }


  return (
    <div
      onClick={handleClick}
      className={`${
        end?.id === myid ? "border-rose-500" : "border-rose-100"
      } border-gray-300 border-2 rounded-lg shadow-lg p-4 flex flex-col gap-3 cursor-pointer w-full max-w-xs`}
    >
      <h1 className="text-2xl font-semibold text-center text-gray-800">
        {data.name}
      </h1>
      <p className="text-sm text-rose-600 font-medium">
        📍 {haversine(
          storedHospital.location.coordinates[1],
          storedHospital.location.coordinates[0],
          data.location.coordinates[1],
          data.location.coordinates[0]
        ).toFixed(2)}{" "}
        KM away
      </p>

      <div className="flex flex-col gap-3 mt-3">
        <div className="flex items-center gap-2">
        <span className="text-rose-400">🏠</span>
          <p className="text-sm text-gray-600">{data.address}</p>
        </div>
        <div className="flex items-center gap-2">
        <span className="text-rose-400">📞</span>
          <p className="text-sm text-gray-600">{data.phone}</p>
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default HospitalCard;
