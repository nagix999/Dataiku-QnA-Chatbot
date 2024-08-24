import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

const EmbeddingDescription = ({ node }) => {
    const [embeddingSettings, setEmbeddingSettings] = useState({});
    const [splitterSettings, setSplitterSettings] = useState({});

    const fetchSettings = useCallback(async () => {
        const response = await axios.get(
            `http://localhost:8000/api/embeddings/${node.id}/settings`
        );

        if (response.status === 200) {
            setEmbeddingSettings(response.data.embeddingSettings);
            setSplitterSettings(response.data.splitterSettings);
        }
    }, [node]);

    const runEmbeddingHandler = useCallback(async () => {
        const response = await axios.post(
            `http://localhost:8000/api/embeddings/run`,
            {
                nodeId: node.id,
                embeddingSettings,
                splitterSettings,
            }
        );
    }, [node, embeddingSettings, splitterSettings]);

    const EmbeddingSettings = memo(({ settings }) => {
        return (
            <div className="p-4 border-[1px] rounded-md">
                <div className="flex flex-col my-4">
                    <Label className="w-full text-lg mb-2">Provider</Label>
                    <Input
                        className="text-base"
                        value={settings.provider}
                        readOnly
                    ></Input>
                </div>
                <div className="flex flex-col my-4">
                    <Label className="w-full text-lg mb-2">
                        Embedding Model
                    </Label>
                    <Input
                        className="text-base"
                        value={settings.embeddingModel}
                        readOnly
                    ></Input>
                </div>
                <div className="flex flex-col my-4">
                    <Label className="w-full text-lg mb-2">Dimension</Label>
                    <Input
                        className="text-base"
                        value={settings.dimension}
                        readOnly
                    ></Input>
                </div>
            </div>
        );
    });

    const SplitterSettings = memo(({ settings }) => {
        return (
            <div className="p-4 border-[1px] rounded-md">
                <div className="flex flex-col my-4">
                    <Label className="w-full text-lg mb-2">Split Method</Label>
                    <Input
                        className="text-base"
                        value={settings.splitterName}
                        readOnly
                    ></Input>
                </div>
                {settings?.params?.map((param) => (
                    <div className="flex flex-col my-4">
                        <Label className="w-full text-lg mb-2">
                            {param.display}
                        </Label>
                        <Input
                            className="text-base"
                            value={param.value}
                            readOnly
                        ></Input>
                    </div>
                ))}
            </div>
        );
    });

    useEffect(() => {
        fetchSettings();
    }, [node]);

    return (
        <>
            <div className="my-4">
                <div className="mb-2 pt-4">
                    <h3 className="font-semibold text-xl">Splitter Settings</h3>
                </div>
                <SplitterSettings settings={splitterSettings} />
            </div>
            <div className="my-4">
                <div className="mb-2 pt-4">
                    <h3 className="font-semibold text-xl">
                        Embedding Settings
                    </h3>
                </div>
                <EmbeddingSettings settings={embeddingSettings} />
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
