import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const OutputNode = ({ data }) => {
    return (
        <>
            <Handle type="target" position={Position.Left} />
            <div className="react-flow__node-default cursor-pointer">
                <span>{data.label}</span>
            </div>
        </>
    );
};

export default memo(OutputNode);
