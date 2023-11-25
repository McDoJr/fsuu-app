import styles from "./room-locator.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const RoomLocator = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    window.addEventListener('click', (e) => {
        if(show && e.target.id !== "drop") {
            setShow(false);
        }
    });

    return (
        <section className={styles.container}>
            <img src={require("../../images/urios_upper.png")}/>
            <img src={require("../../images/urios_lower.png")}/>
            <img src={require("../../images/urios.png")}/>
            <div>
                <label>FIND BUILDING</label>
                <button id="drop" onClick={() => setShow(!show)}>Select a building <FontAwesomeIcon id="drop" icon={show ? faChevronUp : faChevronDown} className={styles.icon}/>
                    <ul style={{display: show ? 'flex' : 'none'}}>
                        <li onClick={() => navigate("/building/cb", {state:{buildingId: 'CB'}})}><span>College Building - Main (CB)</span></li>
                        <li onClick={() => navigate("/building/cbs", {state:{buildingId: 'CBS'}})}><span>College Building - South (CBS)</span></li>
                        <li onClick={() => navigate("/building/cbe", {state:{buildingId: 'CBE'}})}><span>College Building - East (CBE)</span></li>
                    </ul>
                </button>
            </div>
        </section>
    )
}

export default RoomLocator;