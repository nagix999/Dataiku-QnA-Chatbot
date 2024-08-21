import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LLMDescription = ({ node }) => {
    return (
        <div className="h-full w-full flex flex-col my-4">
            <div className="mt-4">
                <div className="mb-2 pt-4">
                    <h3 className="font-semibold text-xl">Model</h3>
                </div>
                <Tabs defaultValue="Ollama">
                    <TabsList className="w-full flex">
                        <TabsTrigger className="flex-auto" value="Ollama">
                            Ollama
                        </TabsTrigger>
                        <TabsTrigger className="flex-auto" value="OpenAI">
                            OpenAI
                        </TabsTrigger>
                        <TabsTrigger className="flex-auto" value="Anthropic">
                            Anthropic
                        </TabsTrigger>
                    </TabsList>
                    <div className="h-[400px] mt-4 px-4 border-[1px] border-gray-400 rounded-md">
                        <TabsContent value="OpenAI">
                            <div className="flex flex-col my-4">
                                <Label className="w-full text-lg mb-2">
                                    Model Name
                                </Label>
                                <Input
                                    className="text-base"
                                    value={"gpt-4o"}
                                    readOnly
                                ></Input>
                            </div>
                            <div className="flex flex-col my-4">
                                <Label className="w-full text-lg mb-2">
                                    Temperature
                                </Label>
                                <Input
                                    className="text-base"
                                    value={"0.1"}
                                    readOnly
                                ></Input>
                            </div>
                        </TabsContent>
                        <TabsContent value="Ollama">
                            <div className="flex flex-col my-4">
                                <Label className="w-full text-lg mb-2">
                                    Model Name
                                </Label>
                                <Input
                                    className="text-base"
                                    value={"llama-3-Korean-Bllossom-8B:latest"}
                                    readOnly
                                ></Input>
                            </div>
                            <div className="flex flex-col my-4">
                                <Label className="w-full text-lg mb-2">
                                    Temperature
                                </Label>
                                <Input
                                    className="text-base"
                                    value={"0.1"}
                                    readOnly
                                ></Input>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default LLMDescription;
