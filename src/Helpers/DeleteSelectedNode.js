export function DeleteSelectedNode(nodes, selectedNode) {

    for (let node of nodes) {
        if (node === selectedNode) {
            const index = nodes.indexOf(selectedNode);
            console.log(nodes)
            nodes.splice(index, 1)
            console.log(`${selectedNode.name} deleted` )
            console.log(nodes)
            return;
        }
        if (node.children && node.children.length > 0) {
            DeleteSelectedNode(node.children, selectedNode);
        }
    }
}