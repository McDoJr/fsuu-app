import styles from "./department-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {useLocation} from "react-router-dom";
import {programs} from "../../utils/programs_data.js";
import {useEffect} from "react";
import {setPageTitle} from "../../utils/utils.js";
import ScrollTop from "../../components/scroll-top.jsx";

const DepartmentPage = ({profile}) => {

    const location = useLocation();

    const {logo, name, department, details, images, courses} = programs[location.state.programId];

    useEffect(() => {
        setPageTitle(`Department ${name}`);
    }, []);

    return (
        <>
            <Header profile={profile}/>
            <section className={styles.container}>
                <div className={styles.top}>
                    <img src={logo} alt="logo.png"/>
                    <h1>{department}</h1>
                </div>
                <div className={styles.middle}>
                    <p>{details}</p>
                    <h2>Courses Offered:</h2>
                    <ul>
                        {courses.map((course, index) => {
                            return (
                                <li key={index}>{course.key}
                                    {course.list.length > 0 &&
                                        <ul>
                                            {course.list.map((list, i) => {
                                                return <li key={i}>{list}</li>
                                            })}
                                        </ul>}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.bottom}>
                    {images.map((image, index) => {
                        return <img src={image} alt="image.png" key={index}/>
                    })}
                </div>
            </section>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default DepartmentPage;