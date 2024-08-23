import React, { memo, useState } from "react";
import {
    Handle,
    Position,
    useHandleConnections,
    useNodesData,
} from "@xyflow/react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

const EmbeddingNode = ({ data }) => {
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

export default memo(EmbeddingNode);
