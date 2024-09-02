import React, { useEffect, useRef } from "react";
import { AssistantAnswer } from "./AssistantAnswer";
import { UserQueryBallon } from "./UserQueryBallon";

export const ChatContentsLayout = ({ chatHistory }) => {
    const bottomDivRef = useRef(null);

    useEffect(() => {
        if (bottomDivRef.current) {
            bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chatHistory]);

    return (
        <div
            className="w-full h-[50rem] max-h-[75vh] overflow-hidden overflow-y-auto mx-auto flex justify-center text-base juice:gap-4 juice:md:gap-6 p-8 m-3 bg-white"
            id="chat-contents-layout"
        >
            <div className=" flex flex-col w-3/5 gap-7">
                {chatHistory.map((chat, index) => {
                    if (chat.role === "assistant") {
                        return (
                            <AssistantAnswer
                                content={chat.content}
                                index={index}
                            />
                        );
                    }

                    if (chat.role === "user") {
                        return (
                            <UserQueryBallon
                                content={chat.content}
                                index={index}
                            />
                        );
                    }
                })}
                <div ref={bottomDivRef} />
            </div>
        </div>
    );
};
