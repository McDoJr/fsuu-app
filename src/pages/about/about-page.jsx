import styles from "./about-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";
import ScrollTop from "../../components/scroll-top.jsx";

const AboutPage = ({profile}) => {

    useEffect(() => {
        setPageTitle("About Us");
        scrollToTop();
    }, []);

    return (
        <>
            <Header profile={profile}/>
            <section className={styles.container}>
                <h1>The Objectives</h1>
                <h1>Behind FSUU Room Locator</h1>
                <div className={styles.box}>
                    <div>
                        <p>To enhance user experience and engagement, it is essential to provide clear and concise information, especially when it comes to accessing specific locations or guiding new enrollees and staff members. By offering detailed directions and information, users can save time and navigate their way effectively. Clear communication not only ensures seamless access to desired locations but also contributes significantly to improving user satisfaction and engagement.</p>
                    </div>
                    <img src={require("../../images/about1.png")}/>
                    <img src={require("../../images/about2.png")}/>
                    <div>
                        <h2>FSUU VISION</h2>
                        <p>Father Saturnino Urios University, a lay empowered, Filipino, Catholic, diocesan, educational institution envisions a community of men and women committed to pursue the work of Christ for the wholeness of society.</p>
                    </div>
                    <div>
                        <h2>FSUU MISSION</h2>
                        <p>As such, Father Saturnino Urios University commits itself to:</p>
                        <p>1. Provide a balanced program of spiritual formation, educational development, research undertakings, and community involvement for all;</p>
                        <p>2. Form self-determined Filipinos who uphold the integrity of creation, as crusaders of truth and justice, proud of their identity and heritage and in dialogue with different cultures;</p>
                        <p>3. Empower all as catalysts for social transformation and development.</p>
                    </div>
                    <img src={require("../../images/about3.png")}/>
                </div>
            </section>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default AboutPage;