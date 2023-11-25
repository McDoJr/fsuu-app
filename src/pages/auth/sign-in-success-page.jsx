import styles from "./sign-in-success-page.module.css";
import Header from "../../components/header.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const SignInSuccessPage = ({profile}) => {

    const navigate = useNavigate();

    return (
        <>
            <Header profile={profile}/>
            <section className={styles.container}>
                <div className={styles.blur}>
                    <div className={styles.box}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                        <h3>SUCCESS!</h3>
                        <span>You are successfully signed in</span>
                        <span>to your account</span>
                        <button onClick={() => navigate("/")}>Continue</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignInSuccessPage;