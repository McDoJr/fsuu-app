import styles from "./room-details-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";
import {notNull, scrollToTop, setPageTitle} from "../../utils/utils.js";
import {useEffect} from "react";
import ScrollTop from "../../components/scroll-top.jsx";

const RoomDetailsPage = ({profile}) => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle("Room Details");
        scrollToTop();
    }, []);

    const {heading, sub_heading, details, images} = location.state.room;
    const {buildingId, width, path} = location.state;

    return (
        <>
            <Header profile={profile}/>
            <section className={styles.container}>
                <FontAwesomeIcon onClick={() => navigate(path, {state:{buildingId, width}})} icon={faArrowLeft} className={styles.icon}/>
                <div className={styles.top}>
                    <h1>{heading}</h1>
                    {notNull(sub_heading) && <h2>{sub_heading}</h2>}
                </div>
                <div className={styles.bottom}>
                    <h3>{details}</h3>
                    {images.map((image, index) => <img src={image} key={index}/> )}
                </div>
            </section>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default RoomDetailsPage;