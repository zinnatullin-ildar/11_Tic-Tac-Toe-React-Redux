import PropTypes from "prop-types";
import { Info, Field } from "../components";
import styles from "./game.module.css";

const GameLayout = ({ handleRestart }) => {
    return (
        <div className={styles.game}>
            <Info />
            <Field />
            <button
                className={styles.restartButton}
                onClick={handleRestart}
            >
                Начать заново
            </button>
        </div>
    );
};

export default GameLayout;

GameLayout.propTypes = {
    handleRestart: PropTypes.func,
};
