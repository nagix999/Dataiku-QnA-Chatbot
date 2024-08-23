import React, { useCallback, useEffect, useState } from "react";
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    MiniMap,
    Controls,
    MarkerType,
} from "@xyflow/react";
import InputFilesNode from "./Node/InputFilesNode";
import EmbeddingNode from "./Node/EmbeddingNode";
import VectorStoreNode from "./Node/VectorStoreNode";
import RetrievalNode from "./Node/RetrievalNode";
import UserQueryNode from "./Node/UserQueryNode";
import PromptNode from "./Node/PromptNode";
import LLMNode from "./Node/LLMNode";
import OutputNode from "./Node/OutputNode";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import axios from "axios";
import PreRetrievalNode from "./Node/PreRetrievalNode";
import PostRetrievalNode from "./Node/PostRetrievalNode";
import { Description } from "./Description/Description";

const nodeTypes = {
    InputFilesNode,
    EmbeddingNode,
    VectorStoreNode,
    RetrievalNode,
    UserQueryNode,
    PromptNode,
    LLMNode,
    OutputNode,
    PreRetrievalNode,
    PostRetrievalNode,
};

const markerEnd = {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
};

export const LLMFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const [selectedNode, setSelectedNode] = useState({});
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const nodeClickHandler = useCallback(
        (_, node) => {
            if (!isSheetOpen) {
                setIsSheetOpen(true);
            }

            setSelectedNode(node);
        },
        [isSheetOpen]
    );

    const fectchFlow = useCallback(async () => {
        const response = await axios.get("http://localhost:8000/api/flows");

        if (response.status === 200) {
            const nodes = response.data.nodes;
            setNodes(
                nodes.map((node) => ({
                    id: node.nodeId,
                    type: node.nodeType,
                    data: {
                        label: node.label,
                    },
                    position: {
                        x: node.positionX,
                        y: node.positionY,
                    },
                }))
            );

            const edges = response.data.edges;
            setEdges(
                edges.map((edge) => ({
                    id: edge.edgeId,
                    source: edge.sourceId,
                    target: edge.targetId,
                    sourceHandle: edge.sourceHandle,
                    targetHandle: edge.targetHandle,
                    animated: true,
                    markerEnd: markerEnd,
                }))
            );
        }
    }, []);

    useEffect(() => {
        fectchFlow();
    }, []);

    return (
        <>
            <ReactFlow
                className="bg-sky-50"
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                onNodeClick={nodeClickHandler}
                fitView
            >
                <MiniMap />
                <Controls />
            </ReactFlow>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>{selectedNode?.data?.label}</SheetTitle>
                        <Description node={selectedNode} />
                        {/* {selectedNode?.data?.description && (
                            <selectedNode.data.description
                                node={selectedNode}
                            />
                        )} */}
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
};
