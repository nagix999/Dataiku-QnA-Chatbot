import React, { useCallback, useState } from "react";
import { ReactFlow, useNodesState, useEdgesState } from "@xyflow/react";
import InputFilesNode from "./InputFilesNode";
import EmbeddingNode from "./EmbeddingNode";
import VectorStoreNode from "./VectorStoreNode";
import RetrievalNode from "./RetrievalNode";
import UserQueryNode from "./UserQueryNode";
import PromptNode from "./PromptNode";
import LLMNode from "./LLMNode";
import OutputNode from "./OutputNode";
import InputFilesDescription from "./InputFilesDescription";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

const nodeTypes = {
    InputFilesNode,
    EmbeddingNode,
    VectorStoreNode,
    RetrievalNode,
    UserQueryNode,
    PromptNode,
    LLMNode,
    OutputNode,
};

const initialNodes = [
    {
        id: "1",
        type: "InputFilesNode",
        data: { label: "Input Files", description: InputFilesDescription },
        position: { x: 0, y: 100 },
    },
    {
        id: "2",
        type: "EmbeddingNode",
        data: { label: "Embedding1", description: InputFilesDescription },
        position: { x: 200, y: 0 },
    },
    {
        id: "3",
        type: "EmbeddingNode",
        data: { label: "Embedding2" },
        position: { x: 200, y: 100 },
    },
    {
        id: "4",
        type: "EmbeddingNode",
        data: { label: "Embedding3" },
        position: { x: 200, y: 200 },
    },
    {
        id: "5",
        type: "VectorStoreNode",
        data: { label: "Vector Store1" },
        position: { x: 400, y: 0 },
    },
    {
        id: "6",
        type: "VectorStoreNode",
        data: { label: "Vector Store2" },
        position: { x: 400, y: 100 },
    },
    {
        id: "7",
        type: "VectorStoreNode",
        data: { label: "Vector Store3" },
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
        position: { x: 400, y: 400 },
    },
    {
        id: "10",
        type: "PromptNode",
        data: { label: "Prompt" },
        position: { x: 600, y: 400 },
    },
    {
        id: "11",
        type: "LLMNode",
        data: { label: "LLM" },
        position: { x: 800, y: 400 },
    },
    {
        id: "12",
        type: "OutputNode",
        data: { label: "Ouput Response" },
        position: { x: 1000, y: 400 },
    },
];

const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-3", source: "1", target: "3", animated: true },
    { id: "e1-4", source: "1", target: "4", animated: true },
    { id: "e2-5", source: "2", target: "5", animated: true },
    { id: "e3-6", source: "3", target: "6", animated: true },
    { id: "e4-7", source: "4", target: "7", animated: true },
    {
        id: "e5-8",
        source: "5",
        target: "8",
        animated: true,
        targetHandle: "top",
    },
    {
        id: "e6-8",
        source: "6",
        target: "8",
        animated: true,
        targetHandle: "top",
    },
    {
        id: "e7-8",
        source: "7",
        target: "8",
        animated: true,
        targetHandle: "top",
    },
    {
        id: "e9-8",
        source: "9",
        target: "8",
        animated: true,
        targetHandle: "left",
    },
    {
        id: "e8-10",
        source: "8",
        target: "10",
        animated: true,
        targetHandle: "top",
    },
    {
        id: "e9-10",
        source: "9",
        target: "10",
        animated: true,
        targetHandle: "left",
    },
    {
        id: "e10-11",
        source: "10",
        target: "11",
        animated: true,
    },
    {
        id: "e11-12",
        source: "11",
        target: "12",
        animated: true,
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
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                onNodeClick={nodeClickHandler}
            />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>{selectedNode?.data?.label}</SheetTitle>
                        <SheetDescription>
                            {selectedNode?.data?.description && (
                                <selectedNode.data.description />
                            )}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
};
