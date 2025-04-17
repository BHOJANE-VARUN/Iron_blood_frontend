import React, { useRef } from "react";
import HospitalCard from "./HospitalCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../util/constants";


function HosMain({end,setend,queryData}) {
  const divRef = useRef(null);
  const handleScroll = ()=>{
    const { scrollTop, scrollHeight, clientHeight } = divRef.current;
  //  console.log(scrollTop,clientHeight,scrollHeight);
    if(scrollTop+clientHeight >= scrollHeight-1 && hasNextPage)
    {
      fetchNextPage();
    }
  }
  const fetchHospitals = async ({pageParam})=>{
    const {data} = await axios.get(BASE_URL + `/getbank?hos_id=${queryData.hos_id}&range=${queryData.Range}&blood_type=${queryData.Blood}&page=${pageParam-1}`);
    return data;
  }

  const {data,fetchNextPage,isFetchingNextPage,hasNextPage,isLoading} = useInfiniteQuery({
    queryFn:fetchHospitals,
    queryKey:["gethospital",queryData],
    getNextPageParam:(lastPage,allPages)=>{
      return lastPage.length===5?allPages.length+1:undefined;
    },
  });
  if(isLoading)
    {
      return <div className="w-[20%] h-full flex justify-center text-center items-center ">Loading..</div>
    }
  if(data?.pages[0].length==0)
  {
      return <div className="border-2 w-[20%] h-full flex justify-center text-center items-center ">Sorry,this blood group is not available in this range.please try to increase</div>
  }
  
  return (
    <div ref={divRef} onScroll={handleScroll} className="h-full w-[20%] flex flex-col items-center gap-5 p-2 overflow-y-scroll">
      {/* {console.log(data)} */}
      
      {data?.pages?.map((ele) => (
        <>
          {ele?.map((e) => (
            <HospitalCard end={end} setend={setend} myid={e?._id} data={e}/>
          ))}
        </>
      ))}
      {isFetchingNextPage && <p>Loading...</p>}
    </div>
  );
}

export default HosMain;
