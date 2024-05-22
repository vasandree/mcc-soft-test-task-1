import styles from "./Modal.module.css"
import "/src/App.css"
import {useEffect, useState} from "react";
// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, onSubmit, children, nodeName }) => {
    const [newNodeName, setNodeName] = useState(nodeName);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setNodeName(nodeName);
        }
    }, [isOpen, nodeName]);

    useEffect(() => {
        setDisabled(newNodeName.trim() === "");
    }, [newNodeName]);

    const handleClose = () => {
        onClose();
        setNodeName(nodeName);
    };

    const handleSubmit = () => {
        onSubmit(newNodeName);
        setNodeName("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && isOpen && newNodeName.trim() !== "") {
            handleSubmit();
        }else if(e.key ==="Escape"){
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, newNodeName]);

    const handleChange = (e) => {
        setNodeName(e.target.value);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
                <input
                    value={newNodeName}
                    onChange={handleChange}
                    className={styles.input}
                />
                <div className={styles.btnContainer}>
                    <button
                        className="primary-button"
                        onClick={handleSubmit}
                        disabled={disabled}
                    >
                        Submit
                    </button>
                    <button className="secondary-button" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;