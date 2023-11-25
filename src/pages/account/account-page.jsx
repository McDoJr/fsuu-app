import styles from "./account-page.module.css";
import Header from "../../components/header.jsx";
import {useNavigate} from "react-router-dom";

const AccountPage = ({profile, handleProfile}) => {

    const navigate = useNavigate();
    const {firstname, lastname} = profile;

    const handleClick = () => {
        handleProfile({});
        navigate("/");
    }

    return (
        <>
            <Header profile={profile}/>
            <section className={styles.container}>
                <div className={styles.top}>
                    <img src={require("../../images/profile.png")} alt="profile.png"/>
                    <div>
                        <h1>{`${firstname} ${lastname}`}</h1>
                    </div>
                    <div>
                        <h1>Father Saturnino Urios University</h1>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h2>Info</h2>
                    <span>Status: Enrolled</span>
                    <span>School Year: 2023-2024</span>
                    <span>Student ID: 212345678</span>
                    <span>Year Level: 3rd Year</span>
                </div>
                <button onClick={handleClick}>Sign Out</button>
            </section>
        </>
    )
}

export default AccountPage;