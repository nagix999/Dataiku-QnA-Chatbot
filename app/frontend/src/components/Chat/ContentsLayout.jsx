import React from "react";

export const ContentsLayout = ({ children }) => {
    return (
        <div className="flex flex-row w-full justify-center pt-8 space-x-8 h-max max-h-full px-8">
            {Array.isArray(children) ? (
                children.map((child) => (
                    <div className="w-full p-8 pt-6 bg-white shadow-md rounded-xl flex flex-col">
                        {child}
                    </div>
                ))
            ) : (
                <div className="w-full p-8 pt-6 bg-white shadow-md rounded-xl flex flex-col">
                    {children}
                </div>
            )}
        </div>
    );
};
