
import { useEffect, useState } from "react"
import RestarentCard from "./RestarentCard"
import resObj from "../utils/mockData"


const Body = () =>{
   

const [listofRestaurants,setListofRestaurants] = useState([]);

useEffect(()=>{
    fetchData()
},[])

const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4447068&lng=78.4663812&carousel=true&third_party_vendor=1");
    const json = await data.json();
    console.log(json.data)
    // console.log(json.data.cards[1]);
    setListofRestaurants(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

// const fetchData = async () => {
//         const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4447068&lng=78.4663812&carousel=true&third_party_vendor=1");
//         const json = await data.json();
//         const restaurants = json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//         setListofRestaurants(restaurants);
//         setOriginalList(restaurants); // Store the original list for resetting
//     };

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listofRestaurants.filter(
                        (res)=>res.info.avgRating>4.3
                    );
                    setListofRestaurants(filteredList)
                    
                    }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                
                
                {listofRestaurants.map((restaurant) => (
                    <RestarentCard key={restaurant.info.id} resData={restaurant} />
                ))}
               
            </div>
            
        </div>
    )
}

export default Body