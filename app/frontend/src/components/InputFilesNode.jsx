import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const InputFilesNode = ({ data }) => {
    return (
        <>
            <div className="react-flow__node-default cursor-pointer">
                <span>{data.label}</span>
            </div>
            <Handle type="source" position={Position.Right} />
        </>
    );
};

export default memo(InputFilesNode);
