import Modal from "../GenericModal/Modal.jsx";
import {useSelectedNode} from "../../Providers/SelectedNodeProvider.jsx";

// eslint-disable-next-line react/prop-types
const EditNodeModal = ({isOpen, onClose, onSubmit}) => {
    const {selectedNode} = useSelectedNode();
    const nodeName = selectedNode ? selectedNode.name : "";

    return(
        <Modal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} nodeName={nodeName}>
            <p>Enter new name for Node: </p>
        </Modal>
    )
}

export default EditNodeModal