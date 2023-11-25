import styles from "./sign-in-page.module.css";
import Header from "../../components/header.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {checkAdmin} from "../../utils/utils.js";

const SignUpPage = ({profile, addProfile}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({firstname: "", lastname: "", email: "", password: "", confirm_password: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {firstname, lastname, email, password, confirm_password} = formData;
        if(firstname && lastname && email && password && confirm_password && password === confirm_password) {
            addProfile({firstname, lastname, email, password});
            navigate("/signin/success");
        }else{
            navigate("/signin/failed", {state:{url: "/signup"}});
        }
        setFormData({firstname: "", lastname: "", email: "", password: "", confirm_password: ""});
    }

    return (
        <>
            <Header profile={profile}/>
            <section className={styles.container}>
                <div className={styles.blur}>
                    <form className={styles.box} onSubmit={handleSubmit}>
                        <h3>Sign up</h3>
                        <h4>Create your account</h4>
                        <input type="text" placeholder="enter your first name" name="firstname" onChange={handleChange}/>
                        <input type="text" placeholder="enter your last name" name="lastname" onChange={handleChange}/>
                        <input type="text" placeholder="enter your email" name="email" onChange={handleChange}/>
                        <input type="password" placeholder="enter your password" name="password" onChange={handleChange}/>
                        <input type="password" placeholder="enter your password" name="confirm_password" onChange={handleChange}/>
                        <button>SIGN UP</button>
                        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                        <span>By registering, You agree to the</span>
                        <span>Terms, Conditions and Policies of FSUU </span>
                        <span>ROOM LOCATOR & Privacy Policy.</span>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUpPage;