import styles from "./building-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import BuildingSection from "./building-section.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";
import ScrollTop from "../../components/scroll-top.jsx";

const CbBuildingPage = ({profile}) => {

    const location = useLocation();

    useEffect(() => {
        setPageTitle("CB Building");
        scrollToTop();
    }, []);

    const buildingId = location.state.buildingId;

    return (
        <>
            <Header profile={profile}/>
            <BuildingSection buildingId={buildingId} width="calc((100% / 4) - 5px)" path="/building/cb"/>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default CbBuildingPage;