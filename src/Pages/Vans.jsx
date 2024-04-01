import React, { useEffect, useState } from 'react';
import '../server';
import '../App.css';
import { Link } from 'react-router-dom';
const Vans = () => {
    const [vans,setVans]= useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
             const response =await fetch(`/api/vans`);
             const data = await response.json();
             setVans(data.vans);
            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    },[]);
    console.log(vans);
  return (
    <section className='van-list-container'>
       <div className='van-list'>
           {vans.map((van)=>{
            const{id,name,price,imageUrl,type}= van;
               return (
                <Link key={id}  to={`/vans/${van.id}`}>
                   <div className='van-tile'>
                    <img src={imageUrl} alt={imageUrl} style={{height:'200px'}}/>
                    <div className='van-info'>
                  <h3>{name}</h3>
                  <p>${price}<span>/day</span></p>
                    </div>
                  <i className={`van-type ${type} selected`}>{type}</i>
                    </div>
                    </Link>
               );
           })}
              </div>
</section>
  )
}

export default Vans;
