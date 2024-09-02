import React, { useRef, useState } from "react";
import { ContentsLayout } from "./ContentsLayout";
import { ChatLayout } from "./ChatLayout";
import { UserQueryLayout } from "./UserQueryLayout";
import { ChatContentsLayout } from "./ChatContentsLayout";
import { ChatHistoryLayout } from "./ChatHistoryLayout";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ChatDialog = () => {
    const { id } = useParams();

    const [chatHistory, setChatHistory] = useState([]);

    const userQueryRef = useRef(null);

    const onQuery = async () => {
        const userQuery = userQueryRef.current.value;

        if (userQuery.trim() === "") {
            return;
        }

        setChatHistory((prev) => [
            ...prev,
            { role: "user", content: userQuery },
        ]);

        userQueryRef.current.value = "";

        const response = await fetch("http://localhost:8000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: "test",
                llmopsSq: id,
                query: userQuery,
            }),
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let answer = "";

        setChatHistory((prev) => [
            ...prev,
            { role: "assistant", content: answer },
        ]);

        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            const decoded = decoder.decode(value, { stream: true });
            answer += decoded;

            setChatHistory((prev) => {
                return prev.map((entry, index) => {
                    if (index === prev.length - 1) {
                        return { ...entry, content: answer };
                    }
                    return entry;
                });
            });
        }
    };

    return (
        <div className="w-full h-full flex flex-row">
            <ChatHistoryLayout />
            <ContentsLayout>
                <ChatLayout>
                    <ChatContentsLayout chatHistory={chatHistory} />
                    <UserQueryLayout onQuery={onQuery} ref={userQueryRef} />
                </ChatLayout>
            </ContentsLayout>
        </div>
    );
};
