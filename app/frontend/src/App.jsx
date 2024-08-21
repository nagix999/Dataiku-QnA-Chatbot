import { useCallback, useEffect, useState } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import { LLMFlow } from "./components/LLMFlow";
import "@xyflow/react/dist/style.css";
import { Sidebar } from "./components/Sidebar";

function App() {
    return (
        <div className="w-full h-full flex ">
            <Sidebar />
            <div className="ml-[30rem] w-full h-full">
                <ReactFlowProvider>
                    <LLMFlow />
                </ReactFlowProvider>
            </div>
        </div>
    );
}

export default App;
