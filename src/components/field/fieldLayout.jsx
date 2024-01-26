import PropTypes from "prop-types";
import styles from "./field.module.css";
import { PLAYER, PLAYER_SIGN } from "../../constants";

const FieldLayout = ({ field, handleCellClick }) => (
    <div className={styles.field}>
        {field.map((cellPlayer, index) => (
            <button
                key={index}
                className={styles.cell}
                onClick={() => handleCellClick(index)}
            >
                {PLAYER_SIGN[cellPlayer]}
                {/* вывод в разметку символов крестика или нолика */}
            </button>
        ))}
        {/* применение index в качестве key обусловлено тем, что ячейки менятся и сортироваться не будут */}
    </div>
);

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(
        PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY]),
    ),
    handleCellClick: PropTypes.func,
};

export default FieldLayout;
