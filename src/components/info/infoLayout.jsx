import PropTypes from "prop-types";
import styles from "./info.module.css";

const InfoLayout = ({ information }) => (
    <div className={styles.info}>{information}</div>
);

InfoLayout.propTypes = {
    information: PropTypes.string,
};

export default InfoLayout;
