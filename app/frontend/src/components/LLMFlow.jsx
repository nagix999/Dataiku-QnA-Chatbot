import React, { useCallback, useEffect, useState } from "react";
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    MiniMap,
    Controls,
    MarkerType,
} from "@xyflow/react";
import InputFilesNode from "./InputFilesNode";
import EmbeddingNode from "./EmbeddingNode";
import VectorStoreNode from "./VectorStoreNode";
import RetrievalNode from "./RetrievalNode";
import UserQueryNode from "./UserQueryNode";
import PromptNode from "./PromptNode";
import LLMNode from "./LLMNode";
import OutputNode from "./OutputNode";
import InputFilesDescription from "./InputFilesDescription";
import EmbeddingDescription from "./EmbeddingDescription";
import PromptDescription from "./PromptDescription";
import LLMDescription from "./LLMDescription";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import VectorStoreDescription from "./VectorStoreDescription";
import axios from "axios";
import PreRetrievalNode from "./PreRetrievalNode";
import PostRetrievalNode from "./PostRetrievalNode";

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

const initialNodes = [
    {
        id: "1",
        type: "InputFilesNode",
        data: {
            status: "IDLE",
            label: "Input Files",
            description: InputFilesDescription,
        },
        position: { x: 0, y: 100 },
    },
    {
        id: "2",
        type: "EmbeddingNode",
        data: {
            label: "Embedding1",
            description: EmbeddingDescription,
            params: {
                splitMethod: "Simple Splitter",
                chunkSize: 128,
                chunkOverlap: 0,
                embeddingModel: "text-embedding-ada-002",
                dimension: 1536,
            },
        },
        position: { x: 200, y: 0 },
    },
    {
        id: "3",
        type: "EmbeddingNode",
        data: {
            label: "Embedding2",
            description: EmbeddingDescription,
            params: {
                splitMethod: "Simple Splitter",
                chunkSize: 256,
                chunkOverlap: 0,
                embeddingModel: "text-embedding-ada-002",
                dimension: 1536,
            },
        },

        position: { x: 200, y: 100 },
    },
    {
        id: "4",
        type: "EmbeddingNode",
        data: {
            label: "Embedding3",
            description: EmbeddingDescription,
            params: {
                splitMethod: "Simple Splitter",
                chunkSize: 512,
                chunkOverlap: 0,
                embeddingModel: "text-embedding-ada-002",
                dimension: 1536,
            },
        },
        position: { x: 200, y: 200 },
    },
    {
        id: "5",
        type: "VectorStoreNode",
        data: {
            label: "Vector Store1",
            status: "IDLE",
            description: VectorStoreDescription,
            params: { id: "51908b02-fff6-4805-a7fa-ecfe3803c260" },
        },
        position: { x: 400, y: 0 },
    },
    {
        id: "6",
        type: "VectorStoreNode",
        data: {
            label: "Vector Store2",
            status: "IDLE",
            description: VectorStoreDescription,
            params: { id: "675e9320-1452-4252-9a87-68d484bb7b77" },
        },
        position: { x: 400, y: 100 },
    },
    {
        id: "7",
        type: "VectorStoreNode",
        data: {
            label: "Vector Store3",
            status: "IDLE",
            description: VectorStoreDescription,
            params: { id: "ca090869-399b-43a7-b6b8-21ec3edfe14d" },
        },
        position: { x: 400, y: 200 },
    },
    {
        id: "8",
        type: "RetrievalNode",
        data: { label: "Retrieval" },
        position: { x: 600, y: 300 },
    },
    {
        id: "9",
        type: "UserQueryNode",
        data: { label: "User Query" },
        position: { x: 200, y: 400 },
    },
    {
        id: "10",
        type: "PreRetrievalNode",
        data: { label: "Pre-Retrieval" },
        position: { x: 400, y: 300 },
    },
    {
        id: "11",
        type: "PromptNode",
        data: { label: "Prompt", description: PromptDescription },
        position: { x: 800, y: 400 },
    },
    {
        id: "12",
        type: "LLMNode",
        data: { label: "LLM", description: LLMDescription },
        position: { x: 1000, y: 400 },
    },
    {
        id: "13",
        type: "OutputNode",
        data: { label: "Ouput Response" },
        position: { x: 1200, y: 400 },
    },
    {
        id: "14",
        type: "PostRetrievalNode",
        data: { label: "Post-Retrieval" },
        position: { x: 800, y: 300 },
    },
];

const markerEnd = {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
};

const initialEdges = [
    {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        markerEnd: markerEnd,
    },
    {
        id: "e1-3",
        source: "1",
        target: "3",
        animated: true,
        markerEnd: markerEnd,
    },
    {
        id: "e1-4",
        source: "1",
        target: "4",
        animated: true,
        markerEnd: markerEnd,
    },
    {
        id: "e2-5",
        source: "2",
        target: "5",
        animated: true,
        markerEnd: markerEnd,
    },
    {
        id: "e3-6",
        source: "3",
        target: "6",
        animated: true,
        markerEnd: markerEnd,
    },
    {
        id: "e4-7",
        source: "4",
        target: "7",
        animated: true,
        markerEnd: markerEnd,
    },
    {
        id: "e5-8",
        source: "5",
        target: "8",
        animated: true,
        targetHandle: "top",
        markerEnd: markerEnd,
    },
    {
        id: "e6-8",
        source: "6",
        target: "8",
        animated: true,
        targetHandle: "top",
        markerEnd: markerEnd,
    },
    {
        id: "e7-8",
        source: "7",
        target: "8",
        animated: true,
        targetHandle: "top",
        markerEnd: markerEnd,
    },
    {
        id: "e9-10",
        source: "9",
        target: "10",
        animated: true,
        targetHandle: "left",
        markerEnd: markerEnd,
    },
    {
        id: "e9-11",
        source: "9",
        target: "11",
        animated: true,
        targetHandle: "left",
        markerEnd: markerEnd,
    },
    {
        id: "e12-13",
        source: "12",
        target: "13",
        animated: true,
        markerEnd: markerEnd,
    },
    {
        id: "e9-10",
        source: "9",
        target: "10",
        animated: true,
        targetHandle: "left",
        markerEnd: markerEnd,
    },
    {
        id: "e10-8",
        source: "10",
        target: "8",
        animated: true,
        targetHandle: "left",
        markerEnd: markerEnd,
    },
    {
        id: "e11-12",
        source: "11",
        target: "12",
        animated: true,
        markerEnd: markerEnd,
    },
    {
        id: "e8-14",
        source: "8",
        target: "14",
        animated: true,
        sourceHandle: "right",
        targetHandle: "left",
        markerEnd: markerEnd,
    },
    {
        id: "e14-11",
        source: "14",
        target: "11",
        animated: true,
        sourceHandle: "bottom",
        targetHandle: "top",
        markerEnd: markerEnd,
    },
];

export const LLMFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const [selectedNode, setSelectedNode] = useState({});
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const nodeClickHandler = useCallback((_, node) => {
        if (!isSheetOpen) {
            setIsSheetOpen(true);
        }
        setSelectedNode(node);
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
                        {/* <SheetDescription> */}
                        {selectedNode?.data?.description && (
                            <selectedNode.data.description
                                node={selectedNode}
                            />
                        )}
                        {/* </SheetDescription> */}
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
};
