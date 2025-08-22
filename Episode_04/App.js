import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav items
 * 
 * Body
 *  -search
 *  -RestarentContainer
 *  -RestarentCard
 * Footer
 *  -CopyRight
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.favpng.com/7/6/9/swiggy-office-business-chief-executive-online-food-ordering-logo-png-favpng-5ZFVHPf67xaRcyrS3768ZP2YA.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor:"#f0f0f0"
}

const RestarentCard = (props) =>{
    // console.log(props)
    const {resData} = props;
    // Extract restaurant info
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData?.info;
    return(
        <div className="res-card" style={styleCard}>
            <img width={200} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ") || "Not available"}</h4>
            <div className="flex justify-between text-sm text-gray-700 mt-1">
                <span>⭐ {avgRating || "--"}</span> <br/>
                <span>{sla?.slaString || "N/A"}</span>
            </div>
        </div>
    )
}

const resObj =  [
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "624472",
"name": "Leon's - Burgers & Wings (Leon Grill)",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/4fe24ecc-ac3a-4ed6-a3ec-b0e5fc09d016_624472.jpg",
"locality": "Himayat Nagar",
"areaName": "Himayath Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Burgers",
"American",
"Turkish",
"Portuguese",
"Continental",
"Snacks"
],
"avgRating": 4.3,
"parentId": "371281",
"avgRatingString": "4.3",
"totalRatingsString": "13K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 7.3,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "7.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-22 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.6",
"ratingCount": "3.2K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/leons-burgers-and-wings-leon-grill-himayat-nagar-himayath-nagar-rest624472",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "518650",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b93955b1-55d2-44d8-a641-66a2e10cbe4d_518650.jpg",
"locality": "Praga Mall",
"areaName": "Nallakunta & Vidyanagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.2,
"parentId": "166",
"avgRatingString": "4.2",
"totalRatingsString": "15K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 5.7,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-22 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/burger-king-praga-mall-nallakunta-and-vidyanagar-rest518650",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "13620",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/08b171fe-dcf6-4569-9719-fc6f83b9504c_13620.jpg",
"locality": "Raj Bhavan Road",
"areaName": "Raj Bhavan Road ",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.2,
"parentId": "2",
"avgRatingString": "4.2",
"totalRatingsString": "8.4K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-22 07:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.5",
"ratingCount": "44"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/subway-raj-bhavan-road-rest13620",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "23710",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/a05653e5-ec4f-4384-b62d-0ab0cbcc21ae_23710.jpg",
"locality": "SD Road",
"areaName": "SD Road",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "62K+",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 2.9,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-22 01:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "11K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/mcdonalds-sd-road-rest23710",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "711834",
"name": "Rollsking",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/28/e4e2451d-c401-4c32-9ed5-6c9d9d3e9123_711834.jpg",
"locality": "Banjara Hills",
"areaName": "Banjara Hills",
"costForTwo": "₹500 for two",
"cuisines": [
"Fast Food",
"Rolls & Wraps",
"North Indian",
"Snacks"
],
"avgRating": 4.3,
"parentId": "4697",
"avgRatingString": "4.3",
"totalRatingsString": "1.5K+",
"sla": {
"deliveryTime": 42,
"lastMileTravel": 8.8,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "8.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-22 07:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/rollsking-banjara-hills-rest711834",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "28775",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/1e75ebc5-b6e6-4912-acf8-29a70b026933_28775.JPG",
"locality": "SD Road",
"areaName": "Shivaji Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.4,
"parentId": "2456",
"avgRatingString": "4.4",
"totalRatingsString": "28K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 3.9,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-22 02:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/dominos-pizza-sd-road-shivaji-nagar-rest28775",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "832534",
"name": "The Bhadrachalam Cafe",
"cloudinaryImageId": "efb8f1bf23d8163ce6cac8dee4734314",
"locality": "Sri Krishna Nagar",
"areaName": "Jubilee Hills",
"costForTwo": "₹150 for two",
"cuisines": [
"South Indian",
"Juices",
"Tea",
"Coffee",
"Andhra"
],
"avgRating": 4.4,
"veg": true,
"parentId": "494795",
"avgRatingString": "4.4",
"totalRatingsString": "7.2K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 7.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "7.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-28 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹29"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/the-bhadrachalam-cafe-sri-krishna-nagar-jubilee-hills-rest832534",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "699984",
"name": "Blue Sea Restaurant",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/12/f16d7555-32d7-4437-8b68-0dfb6c530173_699984 (1).jpg",
"locality": "Basheerbagh",
"areaName": "Abids",
"costForTwo": "₹450 for two",
"cuisines": [
"Hyderabadi",
"Seafood",
"Mughlai",
"Chinese",
"Haleem",
"Tandoor"
],
"avgRating": 4.3,
"parentId": "20855",
"avgRatingString": "4.3",
"totalRatingsString": "9.2K+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 7.7,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "7.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-22 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹39"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "6.5K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-228bebf4-6c0a-46b0-ac99-3b2a3ab4765e"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/blue-sea-restaurant-basheerbagh-abids-rest699984",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
]

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestarentCard resName="Bavarchi" cuisines="Birani, North Indian, Asian"/>
                <RestarentCard resName="KFC" cuisines="Chiken, Noodles, Asian"/> */}
                
                {resObj.map((restaurant) => (
                    <RestarentCard key={restaurant.info.id} resData={restaurant} />
                ))}
                {/* <RestarentCard resData={resObj[0]}/> */}
            </div>
            
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)