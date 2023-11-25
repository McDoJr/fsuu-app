import Header from "../../components/header.jsx";
import styles from "./home-page.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import HeroSection from "./hero-section.jsx";
import IntroSection from "./intro-section.jsx";
import VideoSection from "./video-section.jsx";
import Footer from "../../components/footer.jsx";
import ScrollTop from "../../components/scroll-top.jsx";
import {useEffect} from "react";
import {loggedIn, scrollToTop, setPageTitle} from "../../utils/utils.js";
import RoomLocator from "./room-locator.jsx";

const HomePage = ({profile}) => {

    useEffect(() => {
        setPageTitle("Home");
        scrollToTop();
    }, []);

    return (
        <>
            <Header profile={profile}/>
            <HeroSection profile={profile}/>
            {loggedIn(profile) ? <RoomLocator/> : (
                <>
                    <IntroSection/>
                    <VideoSection/>
                </>
            )}
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default HomePage;