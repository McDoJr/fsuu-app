import styles from "./hero-section.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {loggedIn} from "../../utils/utils.js";

const HeroSection = ({profile}) => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <span>welcome to</span>
                <h1>FATHER SATURNINO URIOS UNIVERSITY</h1>
                <h1>ROOM LOCATOR</h1>
                {!loggedIn(profile) && <button onClick={() => navigate("/signin")}>GET STARTED <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/></button>}
            </div>
        </section>
    )
}

export default HeroSection;