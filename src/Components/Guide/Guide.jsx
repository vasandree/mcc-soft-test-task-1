import styles from "../Guide/Guide.module.css"
const Guide = () => {
    return (
        <div className={styles.guide}>
            <h2>Guide</h2>
            <p>To <b>select node</b> you have to doubleclick on node's name.</p>
            <p>To see sub-nodes (if they exist) click on ▶️</p>
            <p></p>
            <p>Use the buttons to manage the tree structure:</p>
            <ul>
                <li><b>Add:</b> Add a new node to the selected node or the root if none is selected.</li>
                <li><b>Remove:</b> Remove the selected node.</li>
                <li><b>Edit:</b> Edit the name of the selected node.</li>
                <li><b>Reset:</b> Reset the tree to an empty state.</li>
            </ul>
        </div>
    );
};

export default Guide;