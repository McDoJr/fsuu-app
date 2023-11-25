import styles from "./video-section.module.css";

const VideoSection = () => {
    return (
        <section className={styles.container}>
            <h1>University Video Tour</h1>
            <video controls>
                <source src={require("../../assets/fsuu_tour.mp4")} type="video/mp4"/>
            </video>
            <div className={styles.line}></div>
        </section>
    )
}

export default VideoSection;