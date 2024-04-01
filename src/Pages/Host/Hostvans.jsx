import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Hostvans =()=>{
    const [vans,setVans]= React.useState([]);
    React.useEffect(()=>{
          fetch("/api/host/vans")
          .then(res=>res.json())
          .then(data=>setVans(data.vans));
    },[]);
    const hostVansEls=vans.map((van)=>{
        const{id,name,price,imageUrl}= van;
       return (
        <Link
        to ={`/host/vans/${vans.id}`}
        key={id}
        className="host-van-link-wrapper"
        >
        <div className="host-van-single" key={id}>
            <img src={imageUrl} alt={`photo of ${name}`}/>
            <div className="host-van-info">
                <h3>{name}</h3>
                <p>${price}/day</p>
            </div>
        </div>
        </Link>
       )
    })
        return(
<section>
    <h1 className="host-vans-title">Your listed vans</h1>
    <div className="host-vans-list">
   {
    vans.length>0?(
   <section>
    {hostVansEls}
   </section>
    ):(
        <h2>......Loading</h2>
    )
   }
    </div>
</section>        )
}
export default Hostvans;