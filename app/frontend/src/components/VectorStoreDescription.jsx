import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";

const VectorStoreDescription = ({ node }) => {
    const gridRef = useRef(null);
    const [embeddingVectors, setEmbeddingVectors] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { field: "id_", headerName: "ID" },
        { field: "text", headerName: "텍스트" },
        {
            field: "metadata",
            headerName: "메타데이터",
            cellRenderer: (params) => {
                return JSON.stringify(params.data.metadata);
            },
        },
    ]);

    const fetchEmbeddingVectors = useCallback(async () => {
        const response = await axios.get(
            `http://localhost:8000/api/vector-stores/${node.data.params.id}`
        );

        if (response.status === 200) {
            setEmbeddingVectors(response.data.embedding_vectors);
        }
    }, []);

    useEffect(() => {
        fetchEmbeddingVectors();
    }, []);

    return (
        <div className="h-full w-full flex flex-col my-4">
            <div className="mb-2 pt-4">
                <h3 className="font-semibold text-xl">Embedding Vectors</h3>
            </div>
            <div className="ag-theme-quartz h-[400px]">
                <AgGridReact
                    ref={gridRef}
                    rowData={embeddingVectors}
                    columnDefs={columnDefs}
                    rowSelection="single"
                    // onRowSelected={rowSelectedHandler}
                />
            </div>
        </div>
    );
};

export default VectorStoreDescription;
