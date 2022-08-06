import ExperienceBar from "./components/ExperienceBar";
import Profile from "./components/Profile";
import CompletedChallenges from "./components/CompletedChallenges";
import Countdown from "./components/Countdown";
import ChallengeBox from "./components/ChallengeBox";

import { ChallengeProvider } from "./contexts/ChallengeContext";
import { CountdownProvider } from "./contexts/CountdownContext";

import "./styles/globals.css";
import styles from "./styles/index.module.css";

/*interface AppProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}*/

/*function App(props: AppProps) {*/
function App() {
  return (
    <>
      {/*<ChallengeProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>*/}
      <ChallengeProvider>
        <div className={styles.container}>
          <ExperienceBar />
          <CountdownProvider>
            <section style={{ marginTop: "3rem" }}>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengeProvider>
    </>
  );
}

export default App;
