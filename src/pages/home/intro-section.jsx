import styles from "./intro-section.module.css";

const IntroSection = () => {
    return (
        <>
            <section className={styles.container}>
                <img src={require("../../images/hat.png")} className={styles.hat}/>
                <div className={styles.left}>
                    <h1>We are a University since 1901</h1>
                    <p>FSUU is a private Roman Catholic coeducational basic and higher education institution run by the Diocese of Butuan. The University itself is composed of 3 buildings that connect to the FSUU Main Campus, starting from College Building (CB) Main next to College Building South (CBS), which also has an extension to College Building East (CBE). </p>
                    <p>Each Building is comprised of numerous rooms, faculties, and offices of the University.</p>
                </div>
                <div className={styles.right}>
                    <img src={require("../../images/urios1.png")} alt="urios1.png"/>
                    <img src={require("../../images/urios2.png")} alt="urios2.png"/>
                    <img src={require("../../images/urios3.png")} alt="urios3.png"/>
                </div>
            </section>
            <div className={styles.line}></div>
        </>
    )
}

export default IntroSection;