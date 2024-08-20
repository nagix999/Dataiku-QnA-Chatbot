import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const EmbeddingNode = ({ data }) => {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable={true}
            />
            <div className="react-flow__node-default cursor-pointer">
                <span>{data.label}</span>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={true}
            />
        </>
    );
};

export default memo(EmbeddingNode);
