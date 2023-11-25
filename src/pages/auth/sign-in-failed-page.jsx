import styles from "./sign-in-success-page.module.css";
import Header from "../../components/header.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";

const SignInFailedPage = ({profile}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const url = location.state.url;

    return (
        <>
            <Header profile={profile}/>
            <section className={styles.container}>
                <div className={styles.blur}>
                    <div className={styles.box} style={{color: '#B51919'}}>
                        <FontAwesomeIcon icon={faCircleXmark} className={styles.icon}/>
                        <h3>ERROR!</h3>
                        <span>We can't sign you in</span>
                        <button style={{backgroundColor: '#B51919'}} onClick={() => navigate(url)}>Try again</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignInFailedPage;