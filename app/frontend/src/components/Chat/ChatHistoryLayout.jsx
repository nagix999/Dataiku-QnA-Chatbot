import React from "react";
import { NewChatButton } from "./NewChatButton";

export const ChatHistoryLayout = () => {
    return (
        <div className="flex flex-row justify-center w-[300px] h-full bg-white shadow-md">
            <div className="w-full">
                <NewChatButton />
            </div>
        </div>
    );
};
