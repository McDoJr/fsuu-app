import styles from "./contact-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import ScrollTop from "../../components/scroll-top.jsx";
import {notNull} from "../../utils/utils.js";

const ContactPage = ({profile}) => {
    return (
        <>
            <Header profile={profile}/>
            <section className={styles.container}>
                <form className={styles.form}>
                    <h1>Contact Us</h1>
                    <span>We’re happy to answer any questions you have or provide you with an estimate,Just <br/>send us a message in the form below with any question you may have</span>
                    {notNull(profile) && (
                        <>
                            <label>YOUR NAME (required)</label>
                            <input type="text" name="name" placeholder="enter your name"/>
                            <label>YOUR E-MAIL</label>
                            <input type="email" name="email" placeholder="enter your e-mail"/>
                        </>
                    )}
                    <label>SUBJECT</label>
                    <input type="text" name="subject" placeholder="enter subject"/>
                    <label>YOUR MESSAGE</label>
                    <textarea name="message" placeholder="enter your message"/>
                    <button>SEND</button>
                </form>
            </section>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default ContactPage;