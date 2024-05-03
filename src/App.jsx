import styles from "./App.module.scss";
import TwitchPlayer from "./components/TwitchPlayer/TwitchPlayer";
import HeaderSection from "./containers/HeaderSection/HeaderSection";

function App() {
    return (
        <div className={styles.App}>
            <HeaderSection />
        </div>
    );
}

export default App;
