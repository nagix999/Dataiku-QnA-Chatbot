import React from "react";

export const ChatLayout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between self-center w-full h-[60rem]">
            {children}
        </div>
    );
};
