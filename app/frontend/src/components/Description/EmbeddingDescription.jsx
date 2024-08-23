import React, { useCallback, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

const EmbeddingDescription = ({ node }) => {
    const [settingProps, setSettingProps] = useState({});

    const fetchSettings = useCallback(async () => {
        const response = await axios.get(
            `http://localhost:8000/api/embeddings/${node.id}/settings`
        );

        if (response.status === 200) {
            setSettingProps(response.data);
        }
    }, [node]);

    const runEmbeddingHandler = useCallback(async () => {
        console.log(node);
        // const response = await axios.post("http://localhost:8000/vector_stores/{}")
    }, [node]);

    useEffect(() => {
        fetchSettings();
    }, [node]);

    return (
        <>
            <div className="my-4">
                <div className="mb-2 pt-4">
                    <h3 className="font-semibold text-xl">Splitter Settings</h3>
                </div>
                <div className="p-4 border-[1px] rounded-md">
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">
                            Split Method
                        </Label>
                        <Input
                            className="text-base"
                            // value={node.data.params.splitMethod}
                            readOnly
                        ></Input>
                    </div>
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">
                            Chunk Size
                        </Label>
                        <Input
                            className="text-base"
                            // value={node.data.params.chunkSize}
                            readOnly
                        ></Input>
                    </div>
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">
                            Chunk Overlap
                        </Label>
                        <Input
                            className="text-base"
                            // value={node.data.params.chunkOverlap}
                            readOnly
                        ></Input>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="mb-2 pt-4">
                    <h3 className="font-semibold text-xl">
                        Embedding Settings
                    </h3>
                </div>
                <div className="p-4 border-[1px] rounded-md">
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">
                            Embedding Model
                        </Label>
                        <Input
                            className="text-base"
                            // value={node.data.params.embeddingModel}
                            readOnly
                        ></Input>
                    </div>
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">Dimension</Label>
                        <Input
                            className="text-base"
                            // value={node.data.params.dimension}
                            readOnly
                        ></Input>
                    </div>
                </div>
            </div>
            <Button
                variant="outline"
                className="w-full"
                onClick={runEmbeddingHandler}
            >
                Run
            </Button>
        </>
    );
};

export default EmbeddingDescription;
