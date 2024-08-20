import { useCallback, useEffect, useState } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import { LLMFlow } from "./components/LLMFlow";
import "@xyflow/react/dist/style.css";

function App() {
    return (
        <div className="w-full h-full">
            <ReactFlowProvider>
                <LLMFlow />
            </ReactFlowProvider>
        </div>
    );
}

export default App;
