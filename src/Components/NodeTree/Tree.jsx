import Node from "../Node/Node.jsx";
import PropTypes from "prop-types";

const Tree = ({nodes}) => {

    if (!nodes.children) return null;

    return (
        <div className={"wrapper"} style={{marginTop : 5}}>
            {nodes.children.map((node, index) => (
                <Node key={index} node={node}/>
            ))}
        </div>
    );
};



Tree.propTypes = {
    nodes: PropTypes.shape({
        children: PropTypes.array
    })
}.isRequired


export default Tree;