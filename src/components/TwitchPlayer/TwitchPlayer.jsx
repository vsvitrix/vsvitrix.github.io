import styles from "./TwitchPlayer.module.scss";
import { TwitchChat, TwitchEmbed } from "react-twitch-embed";

const TwitchPlayer = () => {
    return (
        <div className={styles.TwitchPlayer}>
            <TwitchEmbed
                channel="channel47tv"
                darkMode={true}
                onAuthenticate={function noRefCheck() {}}
                onVideoPause={function noRefCheck() {}}
                onVideoPlay={function noRefCheck() {}}
                onVideoReady={function noRefCheck() {}}
                withChat={false}
                muted={true}
                autoplay={false}
            />
            <TwitchChat
                channel="channel47tv"
                darkMode
                height={480}
                width={300}
            />
        </div>
    );
};

export default TwitchPlayer;
