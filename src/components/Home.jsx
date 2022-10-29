import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarAfterLogin from './pages/navbar/NavBarAfterLogin'
import InfiniteScroll from "react-infinite-scroll-component";
import "./Home.css"

const Home = () => {
  var a=0,b=10;
  const [data,setData]=useState([]);
  const [temp,setTemp]=useState([])
  const navigate=useNavigate()

 

  useEffect(()=>{
   let x=JSON.parse(localStorage.getItem("auth"))
    if(x===false)
   {
     console.log("check")
     navigate("/")  
   }

 })
  

 useEffect(()=>{
  getData()
 },[])


 const getData = async( ) =>{
   const res = await fetch("https://randomuser.me/api/?results=100")
   const apiResponse = await res.json()
   setData(apiResponse.results)

  
}



useEffect(() => {
   if (data.length > 0) {
    setTemp(data.slice(0,10))
  }
}, [data]);
 


const fetchMoreData = () => {
  // a fake async api call like which sends
  // 10 more records in 1.5 secs
    a=a+10;
    b=b+10;
  console.log(a,b)
  setTimeout(() =>
   {
    var arr1 =temp;
    var arr2 =data.slice(a,b) ;
    var children = arr1.concat(arr2);
     setTemp(children)
  }, 2000);

  
};
 
  return (
    <div>
      <div>
       <NavBarAfterLogin/>
      </div>
       
        <div>
          <h1>Contact Book</h1>
          <hr />
          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {
              temp.map((e) => (
              <div className='card'>
                 <h5>{e.name.first+" "+e.name.last}</h5>
                 <img src={e.picture.medium} alt="" />
              </div>
            ))
            
            }
          </InfiniteScroll>
        </div>
        
    </div>
  )
}

export default Home


 
 