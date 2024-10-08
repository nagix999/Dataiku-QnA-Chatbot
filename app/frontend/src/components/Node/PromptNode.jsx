import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const PromptNode = ({ data }) => {
    return (
        <>
            <Handle
                type="target"
                id="left"
                position={Position.Left}
                isConnectable={true}
            />
            <Handle
                type="target"
                id="top"
                position={Position.Top}
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

export default memo(PromptNode);
