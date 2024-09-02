import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const AssistantAnswer = ({ content, index }) => {
    return (
        <div key={index} className="flex gap-7 items-center">
            <div className="flex-shrink-0 flex flex-col relative items-end self-start">
                <img
                    class="inline-block size-12 rounded-full"
                    src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?t=st=1720765373~exp=1720768973~hmac=d7ce54eb1305f8f4a7366964b628e42fde527f357dc472746e859ebc4348920d&w=100"
                    alt="Image Description"
                />
            </div>
            <div className="w-full">
                <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
            </div>
        </div>
    );
};
