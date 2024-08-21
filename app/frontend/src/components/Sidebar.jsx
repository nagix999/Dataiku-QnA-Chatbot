import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
    return (
        <div className="w-[30rem] h-full shadow-lg border-r-sky-500 border-2 p-4 fixed">
            <div className="my-4 ">
                <h2 className="font-bold text-3xl text-teal-500 text-center">
                    Dataiku Q&A Chatbot
                </h2>
            </div>
            <div className="pt-20 h-auto">
                <div className="relative">
                    <div className="flex flex-col">
                        <Label className="w-full text-lg mb-2">
                            OpenAI API Key
                        </Label>
                        <Input
                            className=""
                            type="password"
                            placeholder="sk-..."
                        ></Input>
                    </div>
                </div>
                <div className="w-full absolute bottom-0 left-0 p-4">
                    <Button className="w-full h-[5rem] bg-slate-500 text-2xl">
                        Run Chat
                    </Button>
                </div>
                <div></div>
            </div>
        </div>
    );
};
