import React from "react";
import { useParams,Link, Outlet, NavLink } from "react-router-dom";
  const HostvansDetail =()=>{
    const {id}= useParams();
    const [currentVan,setcurrentVan]=React.useState(null);
    React.useEffect(() =>{
      fetch(`/api/host/vans/${id}`)
      .then(res=>res.json())
      .then(data=>setcurrentVan(data.vans))
    },[])
    if (!currentVan){
        return <h1>loading.....</h1>
    }
    return(
        <section>
     <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav ">
                  <NavLink
                   to='.'
                   end
                   className={({isActive})=> isActive?'activeNav-link':null}
                  >Details</NavLink>

                  <NavLink
                  to= 'pricing'
                  className={({isActive})=> isActive?'activeNav-link':null}

                  >
                    Pricing</NavLink>
                  <NavLink
                  to='photos'
                  className={({isActive})=> isActive?'activeNav-link':null}

                  >Photos</NavLink>
                </nav>
                <Outlet context={{currentVan}}/>
            </div>
        </section>
    )
  }
  export default HostvansDetail;
  ////////*/

/*
/* 
//
here  i am trying to dislay data as collection of objects later 
changing them 
into arreys rather than assuming them null which will be eaiser
 using map function fetching data from server.js which has data 
 as arrays of objects.  //

  import React from "react";
import { useParams } from "react-router";
  const HostvansDetail = ()=>{
      const {id}= useParams();
      const [currentVan,setcurrentVan]= React.useState([]assumig data as objects);
      React.useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await  fetch(`/api/host/vans/${id}`);
        const data = await response.json()
        setcurrentVan(Object.values(data));
      } catch (error) {
         console.log('error');
      }
    };
    fetchData();
      },[id]);
      console.log("Current vans:", currentVan);
      return (
        <div>
        
        {  
          currentVan.map((van)=>{
            const {imageUrl,price,name,type}= van;
            return(
              <div key={id}>
                <img src={imageUrl} width={150} alt={name}/>
                <p>name:{name}</p>
                <p>type:{type}</p>
                <p>price:{price}</p>
              </div>
            )
          })
        }        
        </div>
      )
  }
  export default HostvansDetail;
  */
 


  /*
import React from "react";
import { useParams } from "react-router";
const HostvansDetail = ()=>{
  const {id}= useParams();
  const [currentVan,setcurrentVan]= React.useState(null////assuming data is null not objects);
  React.useEffect(()=>{
       const fetchData = async()=>{
        try {
           const response= await fetch (`/api/host/vans/${id}`);
           const data = await response.json();
           setcurrentVan(data.vans);
        } catch (error) {
           console.log('error')
        }
       }
       fetchData();
  },[id]);
  return (
    <>
        {currentVan?(
         <div>
             <img src={currentVan.imageUrl} alt={currentVan.name} width={150}/>
             <p>{currentVan.type}</p>
             <p>{currentVan.price}</p>

         </div>
        ):(
          <h1>Loading......</h1>
        )

        }
</>
  )
}

export default HostvansDetail;
*/
