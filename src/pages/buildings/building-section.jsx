import styles from "./building-section.module.css";
import {getBuildingData, notNull} from "../../utils/utils.js";
import {useLocation, useNavigate} from "react-router-dom";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BuildingSection = ({buildingId, width, path}) => {

    const location = useLocation();
    const navigate = useNavigate();

    if(!notNull(buildingId) && !notNull(width)){
        buildingId = location.state.buildingId;
        width = location.state.width;
    }

    const {heading, details, images, rooms} = getBuildingData(buildingId);

    const roomKeys = Object.keys(rooms);

    const getFloor = (floor) => {
        return roomKeys.map(key =>{
            return {name: key.replace("_", " "), id: key, room: rooms[key]}
        }).filter(data => data.room.floor === floor);
    }
    const firstFloor = getFloor(1);
    const secondFloor = getFloor(2);
    const thirdFloor = getFloor(3);
    const fourthFloor = getFloor(4);

    return (
        <section className={styles.container}>
            <FontAwesomeIcon onClick={() => navigate("/")} icon={faArrowLeft} className={styles.icon}/>
            <div className={styles.left}>
                <div className={styles.top}>
                    <h1>{heading}</h1>
                    {details.map((detail, index) => <p key={index}>{detail}</p>)}
                </div>
                <h2>ROOMS</h2>
                <div className={styles.bottom}>
                    {notNull(firstFloor) && (
                        <div className={styles.column} style={{width: width}}>
                            <h3>1st Floor</h3>
                            {firstFloor.map(({name, id, room}, index) => {
                                return <h5 key={index} onClick={() => navigate("/building/room-details", {state:{room, buildingId, width, path}})}>{name}</h5>
                            })}
                        </div>
                    )}
                    {notNull(secondFloor) && (
                        <div className={styles.column} style={{width: width}}>
                            <h3>2nd Floor</h3>
                            {secondFloor.map(({name, id, room}, index) => {
                                return <h5 key={index} onClick={() => navigate("/building/room-details", {state:{room, buildingId, width, path}})}>{name}</h5>
                            })}
                        </div>
                    )}
                    {notNull(thirdFloor) && (
                        <div className={styles.column} style={{width: width}}>
                            <h3>3rd Floor</h3>
                            {thirdFloor.map(({name, id, room}, index) => {
                                return <h5 key={index} onClick={() => navigate("/building/room-details", {state:{room, buildingId, width, path}})}>{name}</h5>
                            })}
                        </div>
                    )}
                    {notNull(fourthFloor) && (
                        <div className={styles.column} style={{width: width}}>
                            <h3>4th Floor</h3>
                            {fourthFloor.map(({name, id, room}, index) => {
                                return <h5 key={index} onClick={() => navigate("/building/room-details", {state:{room, buildingId, width}})}>{name}</h5>
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.right}>
                {images.map((image, index) => <img src={image} key={index}/>)}
            </div>
        </section>
    )
}

export default BuildingSection;