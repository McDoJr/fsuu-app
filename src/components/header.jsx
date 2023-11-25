import styles from "./header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight, faChevronUp, faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {currentDate, loggedIn} from "../utils/utils.js";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Header = ({profile}) => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    window.addEventListener('click', (e) => {
       if(show && e.target.id !== "dropdown") {
           setShow(false);
       }
    });

    return (
        <section className={styles.container}>
            <img src={require("../images/logo.png")} alt="logo.png" onClick={() => navigate("/")}/>
            <span>{currentDate()}</span>
            <ul className={styles.ul}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li className={styles.li} id="dropdown" onClick={() => setShow(!show)}>
                    <a id="dropdown">Program Offers {
                        show ? <FontAwesomeIcon id="dropdown" icon={faChevronUp} className={styles.icon}/> : <FontAwesomeIcon id="dropdown" icon={faChevronDown} className={styles.icon}/>
                    }</a>
                    <ul id="dropdown" style={{display: show ? 'flex' : 'none'}}>
                        <li onClick={() => navigate("/department", {state:{programId: 'AP'}})}><span>Accountancy Program</span></li>
                        <li onClick={() => navigate("/department", {state:{programId: 'ASP'}})}><span>Arts and Sciences Program</span></li>
                        <li onClick={() => navigate("/department", {state:{programId: 'BAP'}})}><span>Business Administration Program</span></li>
                        <li onClick={() => navigate("/department", {state:{programId: 'CSP'}})}><span>Computer Studies Program</span></li>
                        <li onClick={() => navigate("/department", {state:{programId: 'CJEP'}})}><span>Criminal Justice Education Program</span></li>
                        <li onClick={() => navigate("/department", {state:{programId: 'ETP'}})}><span>Engineering Program</span></li>
                        <li onClick={() => navigate("/department", {state:{programId: 'NP'}})}><span>Nursing Program</span></li>
                        <li onClick={() => navigate("/department", {state:{programId: 'TEP'}})}><span>Teachers Education Program</span></li>
                    </ul>
                </li>
            </ul>
            <button onClick={() => navigate("/contact-us")}>Contact us <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/></button>
            {loggedIn(profile) && <FontAwesomeIcon onClick={() => navigate("/account")} icon={faCircleUser} title="Account" className={styles.profile}/>}
        </section>
    )
}

export default Header;