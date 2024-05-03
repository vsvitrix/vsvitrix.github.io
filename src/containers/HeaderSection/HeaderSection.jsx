import TwitchPlayer from "../../components/TwitchPlayer/TwitchPlayer";
import styles from "./HeaderSection.module.scss";

const HeaderSection = () => {
    return (
        <div className={styles.HeaderSection}>
            <h1>Channel 47</h1>
            <h2>goobers</h2>
            <TwitchPlayer />
        </div>
    );
};

export default HeaderSection;
