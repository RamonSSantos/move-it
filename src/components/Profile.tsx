import { useContext } from "react";

import { ChallengeContext } from "../contexts/ChallengeContext";

import styles from "../styles/components/Profile.module.css";

export default function () {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/53453790?v=4"
        alt="Ramon Santos"
      />
      <div>
        <strong>Ramon Santos</strong>
        <p>
          <img src="/icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
