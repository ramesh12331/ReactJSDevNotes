import { CDN_URL } from "../utils/constants";


const RestarentCard = (props) =>{
    const styleCard = {
    backgroundColor:"#f0f0f0"
}
    // console.log(props)
    const {resData} = props;
    // Extract restaurant info
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData?.info;
    return(
        <div className="res-card" style={styleCard}>
            <img width={200} src={ CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ") || "Not available"}</h4>
            <div className="flex justify-between text-sm text-gray-700 mt-1">
                <span>⭐ {avgRating || "--"}</span> <br/>
                <span>{sla?.slaString || "N/A"}</span>
            </div>
        </div>
    )
}

export default RestarentCard;