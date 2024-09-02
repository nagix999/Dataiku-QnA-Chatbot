import React from "react";

export const NewChatButton = () => {
    return (
        <div className="w-full h-min p-4 pt-8 ">
            <div className="flex bg-slate-300 rounded-lg text-center shadow-md">
                <a className="w-full p-3 cursor-pointer ">
                    <span className="font-medium">새 채팅</span>
                </a>
            </div>
        </div>
    );
};
