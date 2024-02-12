import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

//Props validation
Modal.propTypes = {
  onClose: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
