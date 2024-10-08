import React, { useCallback, useState, useEffect, useRef } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const InputFilesDescription = ({ node }) => {
    const gridRef = useRef(null);
    const [inputFiles, setInputFiles] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { field: "filename", headerName: "파일명" },
        { field: "extension", headerName: "확장자" },
        { field: "size", headerName: "파일크기(KB)" },
        { field: "createdAt", headerName: "생성일자" },
        { field: "modifiedAt", headerName: "수정일자" },
    ]);
    const [fileContents, setFileContents] = useState("");

    const fetchInputFiles = useCallback(async () => {
        const response = await axios.get("http://localhost:8000/api/files");

        if (response.status === 200) {
            setInputFiles(response.data);
        }
    }, []);

    const rowSelectedHandler = useCallback(async (event) => {
        if (event.event) {
            const filename = event.data.filename;
            const response = await axios.get(
                `http://localhost:8000/api/files/contents?filename=${filename}`
            );

            if (response.status === 200) {
                setFileContents(response.data.contents);
            }
        }
    }, []);

    useEffect(() => {
        fetchInputFiles();
    }, []);

    return (
        <div className="h-full w-full flex flex-col my-4">
            <div className="mb-2 pt-4">
                <h3 className="font-semibold text-xl">File Table</h3>
            </div>
            <div className="ag-theme-quartz h-[400px]">
                <AgGridReact
                    ref={gridRef}
                    rowData={inputFiles}
                    columnDefs={columnDefs}
                    rowSelection="single"
                    onRowSelected={rowSelectedHandler}
                />
            </div>
            <div className="mt-4">
                <div className="mb-2 pt-4">
                    <h3 className="font-semibold text-xl">File Contents</h3>
                </div>
                <div className="h-[400px] w-full rounded-md border-[1px] border-gray-400 p-6 overflow-y-auto">
                    <Markdown remarkPlugins={[remarkGfm]}>
                        {fileContents}
                    </Markdown>
                    {/* <p className="whitespace-pre-wrap">{fileContents}</p> */}
                </div>
            </div>
        </div>
    );
};

export default InputFilesDescription;
