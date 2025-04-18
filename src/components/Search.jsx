// import React, { useState, useEffect} from "react";
// import axios from "axios";
// import { SEARCH_URL, SEARCH_URL_ONE } from "../util/constants";
// import {useNavigate} from "react-router-dom"

// function Search() {

//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [data,setdata] = useState([]);

//   if(localStorage.getItem("hospital"))
//   {
//     navigate("/body");
//   }
//   const fetchdata = async (x)=>{
//     if(x.length>0)
//     {
//       const rawData = await axios.get(`${SEARCH_URL}${x}`);
//     setdata(rawData.data);
//     }
//     else{
//         setdata([]);
//     }

//   };

//   const fetchOne = async (hospitalName)=>{
//     const {data} = await axios.get(`${SEARCH_URL_ONE}${hospitalName}`);
//     return data;
//   }

//   const handleSubmit = async ()=>{
//     console.log(searchTerm);
//     console.log(temp);

//     const queryToBe = temp || searchTerm;
//     const data = await fetchOne(queryToBe);
//     localStorage.setItem("hospital",JSON.stringify(data));
//     navigate("/body");
//   }

//   const handleKeyDown = async (e)=>{
//       if(e.key=="Enter")
//       {
//         await handleSubmit();
//       }
//   }

//   useEffect(()=>{
//     const GetdataInterval = setTimeout(() => fetchdata(searchTerm), 500);
//     return () => {
//       clearInterval(GetdataInterval)
//     };
//   },[searchTerm])
//   const [temp,settemp] = useState(null);
//   return (
//     <div className="w-screen h-screen flex justify-center items-center">
//       <div className="w-full max-w-xl flex mx-auto  text-xl border-2">

//         <input
//           onKeyDown={handleKeyDown}
//           type="text"
//           className="w-full focus:outline-0 placeholder-gray-400 text-gray-900 p-4"
//           placeholder="Search"
//           onChange={(e)=>{settemp(null), setSearchTerm(e.target.value)}}
//           value={temp || searchTerm}
//         />
//         <button onClick={handleSubmit} className="bg-white p-4 overflow-x-hidden ">🔍</button>
//       </div>
//       {data.length!=0 && <div className="absolute top-[426px] border-2 w-[550px] max-h-80 overflow-x-hidden overflow-y-scroll">
//       {data.map((ele)=>{
//         return <h1 key={ele._id} className="cursor-pointer p-1 text-lg font-semibold" onMouseEnter={(e)=>{
//           settemp(e.target.innerText);
//         }} onMouseLeave={() => settemp(null)} onClick={()=> handleSubmit()}>{ele.name}</h1>
//       })}
//     </div>}
//      </div>
//   );
// }

// export default Search;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { SEARCH_URL, SEARCH_URL_ONE } from "../util/constants";
// import { useNavigate } from "react-router-dom";

// function Search() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [data, setdata] = useState([]);
//   const [temp, settemp] = useState(null);

//   if (localStorage.getItem("hospital")) {
//     navigate("/body");
//   }

//   const fetchdata = async (x) => {
//     if (x.length > 0) {
//       const rawData = await axios.get(`${SEARCH_URL}${x}`);
//       setdata(rawData.data);
//     } else {
//       setdata([]);
//     }
//   };

//   const fetchOne = async (hospitalName) => {
//     const { data } = await axios.get(`${SEARCH_URL_ONE}${hospitalName}`);
//     return data;
//   };

//   const handleSubmit = async () => {
//     const queryToBe = temp || searchTerm;
//     const data = await fetchOne(queryToBe);
//     localStorage.setItem("hospital", JSON.stringify(data));
//     navigate("/body");
//   };

//   const handleKeyDown = async (e) => {
//     if (e.key === "Enter") {
//       await handleSubmit();
//     }
//   };

//   useEffect(() => {
//     const GetdataInterval = setTimeout(() => fetchdata(searchTerm), 500);
//     return () => clearTimeout(GetdataInterval);
//   }, [searchTerm]);

//   return (
//     <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center px-4">
//       <h1 className="w-[50%] mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
//       Find the right   <span className="text-rose-500">philanthropist </span><br></br>for you
//           </h1>
//       <div className="w-full max-w-xl relative">
      
      
//         <div className="flex border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//           <input
//             onKeyDown={handleKeyDown}
//             type="text"
//             className="w-full text-gray-800 px-5 py-3 focus:outline-none placeholder-gray-400 text-lg"
//             placeholder="Search hospital by name..."
//             onChange={(e) => {
//               settemp(null);
//               setSearchTerm(e.target.value);
//             }}
//             value={temp || searchTerm}
//           />
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-300 text-white group px-5 hover:bg-blue-600 transition-all"
//           >
//             <svg
//               className="group-hover:fill-white"
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               width="30"
//               height="30"
//               viewBox="0 0 50 50"
//             >
//               <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
//             </svg>
//           </button>
//         </div>

//         {data.length !== 0 && (
//           <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-h-80 overflow-y-auto">
//             {data.map((ele) => (
//               <h1
//                 key={ele._id}
//                 className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer transition-all font-medium"
//                 onMouseEnter={(e) => {
//                   settemp(e.target.innerText);
//                 }}
//                 onMouseLeave={() => settemp(null)}
//                 onClick={() => handleSubmit()}
//               >
//                 {ele.name}
//               </h1>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Search;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { SEARCH_URL, SEARCH_URL_ONE } from "../util/constants";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setdata] = useState([]);
  const [temp, settemp] = useState(null);


  const fetchdata = async (x) => {
    if (x.length > 0) {
      const rawData = await axios.get(`${SEARCH_URL}${x}`);
      setdata(rawData.data);
    } else {
      setdata([]);
    }
  };

  const fetchOne = async (hospitalName) => {
    const { data } = await axios.get(`${SEARCH_URL_ONE}${hospitalName}`);
    return data;
  };

  const handleSubmit = async () => {
    const queryToBe = temp || searchTerm;
    const data = await fetchOne(queryToBe);
    localStorage.setItem("hospital", JSON.stringify(data));
    navigate("/body");
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await handleSubmit();
    }
  };

  useEffect(() => {
    const GetdataInterval = setTimeout(() => fetchdata(searchTerm), 500);
    return () => clearTimeout(GetdataInterval);
  }, [searchTerm]);

  return (
<div className="w-screen h-screen bg-rose-50 flex flex-col  items-center px-4">
  {/* Heading */}
  <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mt-56 mb-5">
    Find the right <span className="text-rose-500">philanthropist</span><br />
    for your needs
  </h1>

  {/* Search Box */}
  <div className="w-full max-w-xl relative">
    <div className="flex border border-gray-300 rounded-xl shadow-md overflow-hidden bg-white">
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="w-full text-gray-800 px-5 py-3 focus:outline-none placeholder-gray-400 text-lg"
        placeholder="Search hospital by name..."
        onChange={(e) => {
          settemp(null);
          setSearchTerm(e.target.value);
        }}
        value={temp || searchTerm}
      />
      <button
        onClick={handleSubmit}
        className="bg-rose-500 hover:bg-rose-600 transition-all px-5 flex items-center justify-center"
      >
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
        </svg>
      </button>
    </div>

    {/* Suggestions Dropdown */}
    {data.length !== 0 && (
      <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg w-full max-h-80 overflow-y-auto">
        {data.map((ele) => (
          <h1
            key={ele._id}
            className="px-4 py-3 text-gray-700 hover:bg-rose-100 cursor-pointer transition-all font-medium"
            onMouseEnter={(e) => {
              settemp(e.target.innerText);
            }}
            onMouseLeave={() => settemp(null)}
            onClick={() => handleSubmit()}
          >
            {ele.name}
          </h1>
        ))}
      </div>
    )}
  </div>
</div>

  );
}

export default Search;

