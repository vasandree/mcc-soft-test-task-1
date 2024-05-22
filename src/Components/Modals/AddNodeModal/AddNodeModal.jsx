import Modal from "../GenericModal/Modal.jsx";

// eslint-disable-next-line react/prop-types
const AddNodeModal = ({isOpen, onClose, onSubmit}) =>{
    return(
        <Modal onSubmit={onSubmit} isOpen={isOpen} onClose={onClose} nodeName={""}>
            <p>Enter the name of new Node: </p>
        </Modal>
    )
}

export default AddNodeModal;