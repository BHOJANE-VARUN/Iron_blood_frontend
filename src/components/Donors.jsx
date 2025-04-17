import React, { useRef } from "react";
import Card from "./Card";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Donors({ end, setend ,queryData}) {
//  console.log(queryData);
  const fetchDonors = async ({ pageParam = 1 }) => {
    try {
      const { data } = await axios.get(
        `https://backend-iron-bloods.onrender.com/getdonor?hos_id=${queryData.hos_id}&range=${queryData.Range}&blood_type=${queryData.Blood}&page=${
          pageParam - 1
        }`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage,isLoading} =
    useInfiniteQuery({
      queryKey: ["donors",queryData],
      queryFn: fetchDonors,
      getNextPageParam: (lastPage, allPages) => {
        // console.log("last--",lastPage);
        // console.log("all --",allPages);
        if (lastPage.length == 5) {
          return allPages.length + 1;
        } else {
          return undefined;
        }
      },
    });
  const divRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = divRef.current;
   // console.log(scrollTop + clientHeight, scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight - 1 && hasNextPage) {
      fetchNextPage();
    }
  };
  if(data?.pages[0].length==0)
  {
    return <div className="border-2 w-[20%] h-full flex justify-center text-center items-center ">Sorry,No donor available</div>
  }
  if(isLoading)
  {
    return <div className="w-[20%] h-full flex justify-center text-center items-center ">Loading..</div>
  }
  return (
    <div
      ref={divRef}
      onScroll={handleScroll}
      className="w-[20%] h-full flex flex-col items-center gap-5 p-2 overflow-y-scroll"
    >
    
      {data?.pages?.map((ele) => (
        <>
          {ele?.map((e) => (
            <Card myid={e?._id} end={end} setend={setend} data={e} />
          ))}
        </>
      ))}
      {isFetchingNextPage && <h1>Loading..</h1>}
    </div>
  );
}


// a_negative
// :
// 4
// a_positive
// :
// 7
// ab_negative
// :
// 3
// ab_positive
// :
// 5
// address
// :
// "Church Street, Mumbai, India"
// b_negative
// :
// 6
// b_positive
// :
// 11
// location
// :
// {type: 'Point', coordinates: Array(2)}
// name
// :
// "Lifeline Blood Center"
// o_negative
// :
// 2
// o_positive
// :
// 15
// phone
// :
// "9823456789"
// __t
// :
// "Bank"
// _id
// :
// "67979383ef942cb7a9ee8876"
export default Donors;
