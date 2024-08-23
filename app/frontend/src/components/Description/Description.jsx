import React, { useState } from "react";
import InputFilesDescription from "./InputFilesDescription";
import EmbeddingDescription from "./EmbeddingDescription";
import PromptDescription from "./PromptDescription";
import LLMDescription from "./LLMDescription";

export const Description = ({ node }) => {
    const mapping = {
        InputFilesNode: InputFilesDescription,
        EmbeddingNode: EmbeddingDescription,
        PromptNode: PromptDescription,
        LLMNode: LLMDescription,
    };

    const NodeComponent = mapping[node.type];

    return NodeComponent ? <NodeComponent node={node} /> : null;
};
