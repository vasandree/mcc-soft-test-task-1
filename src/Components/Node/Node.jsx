import PropTypes from "prop-types";
import "../Node/Node.css"
import {useEffect, useState} from "react";
import {useSelectedNode} from "../Providers/SelectedNodeProvider.jsx";
import {useModal} from "../Providers/ModalProvider.jsx";

const Node = ({node}) => {
    const [isOpened, setIsOpened] = useState(false);
    const {selectedNode, selectNode} = useSelectedNode();
    const {isModalOpen} = useModal();

    const handleSingleClick = () => {
        node.children && setIsOpened(!isOpened);
    };

    const handleDoubleClick = () => {
        if(!isSelected)
            selectNode(node)
        else
            selectNode(null)
    };

    const isSelected = selectedNode === node;

    const handleKeyDown = (event) => {
        if (event.key === 'Escape' && selectedNode) {
            selectNode(null);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedNode, isModalOpen]);

    return (
        <div>
            <div className={`nodeItemContainer  ${(isSelected) ? 'selected' : ''}`}  onDoubleClick={handleDoubleClick}>
                <button
                    className={`node-item`}
                    onClick={handleSingleClick}>

                    {node.children.length > 0 && (isOpened ? "🔽 " : "▶️ ")}

                </button>
                <button className={`node-item`}>
                    {node.name}
                </button>
            </div>

            {node.children && (
                <div className={isOpened ? "sub-node" : "sub-node--shrunk"}>
                    {node.children.map((subNode, index) => (
                        <Node key={index} node={subNode}/>
                    ))}
                </div>
            )}
        </div>
    )
}

Node.propTypes = {
    node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        children: PropTypes.array
    }).isRequired
}

export default Node;