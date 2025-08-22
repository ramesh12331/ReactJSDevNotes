
import { useState } from "react"
import RestarentCard from "./RestarentCard"
import resObj from "../utils/mockData"


const Body = () =>{
    //Local State Variables - Super powerfull variable
// const [listofRestaurants,setListofRestaurants] = useState([
//         {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "624472",
// "name": "Leon's - Burgers & Wings (Leon Grill)",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/4fe24ecc-ac3a-4ed6-a3ec-b0e5fc09d016_624472.jpg",
// "locality": "Himayat Nagar",
// "areaName": "Himayath Nagar",
// "costForTwo": "₹300 for two",
// "cuisines": [
// "Burgers",
// "American",
// "Turkish",
// "Portuguese",
// "Continental",
// "Snacks"
// ],
// "avgRating": 3,
// "parentId": "371281",
// "avgRatingString": "4.3",
// "totalRatingsString": "13K+",
// "sla": {
// "deliveryTime": 36,
// "lastMileTravel": 7.3,
// "serviceability": "SERVICEABLE",
// "slaString": "35-40 mins",
// "lastMileTravelString": "7.3 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-08-22 03:00:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "imageBased": {},
// "textBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "40% OFF",
// "subHeader": "UPTO ₹80"
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "4.6",
// "ratingCount": "3.2K+"
// },
// "source": "GOOGLE",
// "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {
// "context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
// },
// "cta": {
// "link": "https://www.swiggy.com/city/hyderabad/leons-burgers-and-wings-leon-grill-himayat-nagar-himayath-nagar-rest624472",
// "text": "RESTAURANT_MENU",
// "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "518650",
// "name": "Burger King",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b93955b1-55d2-44d8-a641-66a2e10cbe4d_518650.jpg",
// "locality": "Praga Mall",
// "areaName": "Nallakunta & Vidyanagar",
// "costForTwo": "₹350 for two",
// "cuisines": [
// "Burgers",
// "American"
// ],
// "avgRating": 4.2,
// "parentId": "166",
// "avgRatingString": "4.2",
// "totalRatingsString": "15K+",
// "sla": {
// "deliveryTime": 31,
// "lastMileTravel": 5.7,
// "serviceability": "SERVICEABLE",
// "slaString": "30-35 mins",
// "lastMileTravelString": "5.7 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-08-22 03:00:00",
// "opened": true
// },
// "badges": {
// "imageBadges": [
// {
// "imageId": "Rxawards/_CATEGORY-Burger.png",
// "description": "Delivery!"
// }
// ]
// },
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "imageBased": {
// "badgeObject": [
// {
// "attributes": {
// "description": "Delivery!",
// "imageId": "Rxawards/_CATEGORY-Burger.png"
// }
// }
// ]
// },
// "textBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹59"
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {
// "context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
// },
// "cta": {
// "link": "https://www.swiggy.com/city/hyderabad/burger-king-praga-mall-nallakunta-and-vidyanagar-rest518650",
// "text": "RESTAURANT_MENU",
// "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "13620",
// "name": "Subway",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/08b171fe-dcf6-4569-9719-fc6f83b9504c_13620.jpg",
// "locality": "Raj Bhavan Road",
// "areaName": "Raj Bhavan Road ",
// "costForTwo": "₹350 for two",
// "cuisines": [
// "sandwich",
// "Salads",
// "wrap",
// "Healthy Food"
// ],
// "avgRating": 4.2,
// "parentId": "2",
// "avgRatingString": "4.2",
// "totalRatingsString": "8.4K+",
// "sla": {
// "deliveryTime": 34,
// "lastMileTravel": 4.1,
// "serviceability": "SERVICEABLE",
// "slaString": "30-35 mins",
// "lastMileTravelString": "4.1 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-08-22 07:59:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "imageBased": {},
// "textBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹119"
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "3.5",
// "ratingCount": "44"
// },
// "source": "GOOGLE",
// "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {
// "context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
// },
// "cta": {
// "link": "https://www.swiggy.com/city/hyderabad/subway-raj-bhavan-road-rest13620",
// "text": "RESTAURANT_MENU",
// "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// ])

const [listofRestaurants,setListofRestaurants] = useState(resObj);

// const [listofRestaurants,setListofRestaurants] = arr;
//  const listofRestaurants = arr[0];
//  const setListofRestaurants = arr[1];

    //Normal JS Variables
//     let listofRestaurants = [
//         {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "624472",
// "name": "Leon's - Burgers & Wings (Leon Grill)",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/4fe24ecc-ac3a-4ed6-a3ec-b0e5fc09d016_624472.jpg",
// "locality": "Himayat Nagar",
// "areaName": "Himayath Nagar",
// "costForTwo": "₹300 for two",
// "cuisines": [
// "Burgers",
// "American",
// "Turkish",
// "Portuguese",
// "Continental",
// "Snacks"
// ],
// "avgRating": 4.3,
// "parentId": "371281",
// "avgRatingString": "4.3",
// "totalRatingsString": "13K+",
// "sla": {
// "deliveryTime": 36,
// "lastMileTravel": 7.3,
// "serviceability": "SERVICEABLE",
// "slaString": "35-40 mins",
// "lastMileTravelString": "7.3 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-08-22 03:00:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "imageBased": {},
// "textBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "40% OFF",
// "subHeader": "UPTO ₹80"
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "4.6",
// "ratingCount": "3.2K+"
// },
// "source": "GOOGLE",
// "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {
// "context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
// },
// "cta": {
// "link": "https://www.swiggy.com/city/hyderabad/leons-burgers-and-wings-leon-grill-himayat-nagar-himayath-nagar-rest624472",
// "text": "RESTAURANT_MENU",
// "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "518650",
// "name": "Burger King",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b93955b1-55d2-44d8-a641-66a2e10cbe4d_518650.jpg",
// "locality": "Praga Mall",
// "areaName": "Nallakunta & Vidyanagar",
// "costForTwo": "₹350 for two",
// "cuisines": [
// "Burgers",
// "American"
// ],
// "avgRating": 4.2,
// "parentId": "166",
// "avgRatingString": "4.2",
// "totalRatingsString": "15K+",
// "sla": {
// "deliveryTime": 31,
// "lastMileTravel": 5.7,
// "serviceability": "SERVICEABLE",
// "slaString": "30-35 mins",
// "lastMileTravelString": "5.7 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-08-22 03:00:00",
// "opened": true
// },
// "badges": {
// "imageBadges": [
// {
// "imageId": "Rxawards/_CATEGORY-Burger.png",
// "description": "Delivery!"
// }
// ]
// },
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "imageBased": {
// "badgeObject": [
// {
// "attributes": {
// "description": "Delivery!",
// "imageId": "Rxawards/_CATEGORY-Burger.png"
// }
// }
// ]
// },
// "textBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹59"
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {
// "context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
// },
// "cta": {
// "link": "https://www.swiggy.com/city/hyderabad/burger-king-praga-mall-nallakunta-and-vidyanagar-rest518650",
// "text": "RESTAURANT_MENU",
// "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "13620",
// "name": "Subway",
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/08b171fe-dcf6-4569-9719-fc6f83b9504c_13620.jpg",
// "locality": "Raj Bhavan Road",
// "areaName": "Raj Bhavan Road ",
// "costForTwo": "₹350 for two",
// "cuisines": [
// "sandwich",
// "Salads",
// "wrap",
// "Healthy Food"
// ],
// "avgRating": 4.2,
// "parentId": "2",
// "avgRatingString": "4.2",
// "totalRatingsString": "8.4K+",
// "sla": {
// "deliveryTime": 34,
// "lastMileTravel": 4.1,
// "serviceability": "SERVICEABLE",
// "slaString": "30-35 mins",
// "lastMileTravelString": "4.1 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "nextCloseTime": "2025-08-22 07:59:00",
// "opened": true
// },
// "badges": {},
// "isOpen": true,
// "type": "F",
// "badgesV2": {
// "entityBadges": {
// "imageBased": {},
// "textBased": {},
// "textExtendedBadges": {}
// }
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹119"
// },
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {}
// },
// "differentiatedUi": {
// "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// "differentiatedUiMediaDetails": {
// "mediaType": "ADS_MEDIA_ENUM_IMAGE",
// "lottie": {},
// "video": {}
// }
// },
// "reviewsSummary": {},
// "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// "restaurantOfferPresentationInfo": {},
// "externalRatings": {
// "aggregatedRating": {
// "rating": "3.5",
// "ratingCount": "44"
// },
// "source": "GOOGLE",
// "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// "analytics": {
// "context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
// },
// "cta": {
// "link": "https://www.swiggy.com/city/hyderabad/subway-raj-bhavan-road-rest13620",
// "text": "RESTAURANT_MENU",
// "type": "WEBLINK"
// },
// "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
// },
// ]
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listofRestaurants.filter(
                        (res)=>res.info.avgRating>4.3
                    );
                    setListofRestaurants(filteredList)
                    // console.log(listofRestaurants)
                    }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* <RestarentCard resName="Bavarchi" cuisines="Birani, North Indian, Asian"/>
                <RestarentCard resName="KFC" cuisines="Chiken, Noodles, Asian"/> */}
                
                {listofRestaurants.map((restaurant) => (
                    <RestarentCard key={restaurant.info.id} resData={restaurant} />
                ))}
                {/* <RestarentCard resData={resObj[0]}/> */}
            </div>
            
        </div>
    )
}

export default Body