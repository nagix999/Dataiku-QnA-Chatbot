import React, { forwardRef, useCallback, useEffect, useState } from "react";

const MAX_LINE_HEIGHT = 112;

// export const UserQueryLayout = forwardRef(({ onQuery }, ref) => {
export const UserQueryLayout = forwardRef((props, ref) => {
    const { onQuery } = props;
    const [lineHeight, setLineHeight] = useState(40);

    const InputHandler = useCallback((event) => {
        const inputValue = event.target.value;
        const lineCount = inputValue.split("\n").length;
        const height = 40 + 24 * (lineCount - 1);
        setLineHeight(height > MAX_LINE_HEIGHT ? MAX_LINE_HEIGHT : height);
    }, []);

    return (
        <div className="flex items-center self-center bg-[#f4f4f4] px-4 rounded-3xl left-1/2 transform min-w-[40em] w-3/5">
            <div className="flex items-center w-full h-full justify-between">
                <div className="flex justify-between flex-1 h-full items-center">
                    <textarea
                        ref={ref}
                        rows={1}
                        spellCheck={false}
                        style={{ height: lineHeight + "px" }}
                        className="w-full bg-[#f4f4f4] outline-none h-full resize-none max-h-52 py-2"
                        placeholder="메세지를 입력해주세요"
                        onKeyDown={async (event) => {
                            if (event.key === "Enter" && !event.shiftKey) {
                                event.preventDefault();
                                // setSpinnerShow(true);
                                onQuery();
                                InputHandler(event);
                            }
                        }}
                        onInput={InputHandler}
                    />
                </div>
                <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    onClick={onQuery}
                >
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
                </svg>
            </div>
        </div>
    );
});
