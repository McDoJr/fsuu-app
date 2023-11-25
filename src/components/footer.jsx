import styles from "./footer.module.css";

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.left}>
                    <img src={require("../images/logo1.png")}/>
                    <p>FSUU Room Locator simplifies room finding at Father Saturnino Urios University. It offers instant access to accurate room locations, enhancing efficiency for students and staff navigating the campus.</p>
                </div>
                <div className={styles.right}>
                    <h1>Contact us</h1>
                    <div>
                        <img src={require("../images/location_dot.png")}/>
                        <p>San Francisco Street corner JC Aquino Avenue, Butuan City, Caraga, Pilippines</p>
                    </div>
                    <div>
                        <img src={require("../images/email.png")}/>
                        <p>fsuuroomlocator@urios.edu.ph</p>
                    </div>
                    <div>
                        <img src={require("../images/call.png")}/>
                        <p>01712345678</p>
                    </div>
                    <div>
                        <img src={require("../images/call.png")}/>
                        <p>01987654321</p>
                    </div>
                </div>
            </div>
            <span>copyright@fsuuroomlocator all rights reserve</span>
        </section>
    )
}

export default Footer;