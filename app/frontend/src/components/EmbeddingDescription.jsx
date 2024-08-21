import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EmbeddingDescription = ({ node }) => {
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
                            value={node.data.params.splitMethod}
                            readOnly
                        ></Input>
                    </div>
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">
                            Chunk Size
                        </Label>
                        <Input
                            className="text-base"
                            value={node.data.params.chunkSize}
                            readOnly
                        ></Input>
                    </div>
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">
                            Chunk Overlap
                        </Label>
                        <Input
                            className="text-base"
                            value={node.data.params.chunkOverlap}
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
                            value={node.data.params.embeddingModel}
                            readOnly
                        ></Input>
                    </div>
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">Dimension</Label>
                        <Input
                            className="text-base"
                            value={node.data.params.dimension}
                            readOnly
                        ></Input>
                    </div>
                </div>
            </div>
            <Button variant="outline" className="w-full" disabled>
                Run
            </Button>
        </>
    );
};

export default EmbeddingDescription;
