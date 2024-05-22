import styles from "../Workspace/workspace.module.css"
import "/src/App.css"
import {MockupNodes} from "../../Data/MockupNodes.js";
import Tree from "../NodeTree/Tree.jsx";
import {useState} from "react";
import {useSelectedNode} from "../Providers/SelectedNodeProvider.jsx";
import {DeleteSelectedNode} from "../../Helpers/DeleteSelectedNode.js";
import AddNodeModal from "../Modals/AddNodeModal/AddNodeModal.jsx";
import EditNodeModal from "../Modals/EditNodeModal/EditNodeModal.jsx";
import Guide from "../Guide/Guide.jsx";
import {useModal} from "../Providers/ModalProvider.jsx";

function Workspace() {
    const [nodes, setNodes] = useState(MockupNodes)
    const {selectedNode, selectNode} = useSelectedNode();
    const { setModalOpen} = useModal();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleReset = () => {
        setNodes({children: []})
    }

    const handleAdd = (nodeName) => {
        closeAddModal();
        const newNode = {
            name: nodeName,
            children: []
        };
        if (selectedNode) {
            if (!selectedNode.children) {
                selectedNode.children = [];
            }
            selectedNode.children.push(newNode);
        } else {
            if (!nodes.children) {
                nodes.children = [];
            }
            nodes.children.push(newNode);
        }
        selectNode(null);
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
        setModalOpen(isAddModalOpen)
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
        setModalOpen(isAddModalOpen)
    };

    const openEditModal = () => {
        setIsEditModalOpen(true);
        setModalOpen(isEditModalOpen)
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setModalOpen(isEditModalOpen)
    };

    const handleRemove = () => {
        if (selectedNode) {
            DeleteSelectedNode(nodes.children, selectedNode);
            selectNode(null)
        }
    }

    const handleEdit = (nodeName) => {
        closeEditModal();
        selectedNode.name = nodeName;
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.guideContainer}>
                    <Guide/>
                </div>
                <section className={styles.workspaceContainer}>
                    <div className={"container"}>
                        <p style={{fontSize: "15px"}}> Tree </p>
                    </div>
                    <section className={styles.workspace}>
                        {nodes && (<Tree nodes={nodes}/>)}
                    </section>
                    <section className={styles.footer}>
                        <div className={styles.btnContainer}>
                            <button onClick={openAddModal} className={"primary-button"}>Add</button>
                            <button onClick={handleRemove} className={"primary-button"} disabled={!selectedNode}>Remove
                            </button>
                            <button onClick={openEditModal} className={"primary-button"} disabled={!selectedNode}>Edit
                            </button>
                            <button onClick={handleReset} className={"primary-button"}>Reset</button>
                        </div>
                    </section>
                </section>
            </div>

            <AddNodeModal isOpen={isAddModalOpen} onSubmit={handleAdd} onClose={closeAddModal}/>
            <EditNodeModal isOpen={isEditModalOpen} onSubmit={handleEdit} onClose={closeEditModal}/>
        </>
    );
}

export default Workspace;
