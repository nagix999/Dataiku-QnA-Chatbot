import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const PostRetrievalNode = ({ data }) => {
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
                id="bottom"
                position={Position.Bottom}
                isConnectable={true}
            />
        </>
    );
};

export default memo(PostRetrievalNode);
