import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { CircleCheck } from "lucide-react";

const VectorStoreNode = ({ data }) => {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable={true}
            />
            <div className="react-flow__node-default cursor-pointer">
                {data.status === "READY" && (
                    <CircleCheck className="absolute text-green-500 top-2" />
                )}
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

export default memo(VectorStoreNode);
