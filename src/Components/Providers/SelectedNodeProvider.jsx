import { createContext, useContext, useState } from "react";

const SelectedNodeContext = createContext();

export const useSelectedNode = () => useContext(SelectedNodeContext);

// eslint-disable-next-line react/prop-types
export const SelectedNodeProvider = ({ children }) => {
    const [selectedNode, setSelectedNode] = useState(null);

    const selectNode = (node) => {
        setSelectedNode(node);
        if(node) console.log(`selected ${node.name}`)
    };

    return (
        <SelectedNodeContext.Provider value={{ selectedNode, selectNode }}>
            {children}
        </SelectedNodeContext.Provider>
    );
};