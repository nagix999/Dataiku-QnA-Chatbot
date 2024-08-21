import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const PreRetrievalNode = ({ data }) => {
    return (
        <>
            <Handle
                type="target"
                id="left"
                position={Position.Left}
                isConnectable={true}
            />
            <div className="react-flow__node-default cursor-pointer">
                <span>{data.label}</span>
            </div>
            <Handle
                type="source"
                id="right"
                position={Position.Right}
                isConnectable={true}
            />
        </>
    );
};

export default memo(PreRetrievalNode);
