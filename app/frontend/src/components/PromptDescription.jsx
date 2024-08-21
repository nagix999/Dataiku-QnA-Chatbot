import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PromptDescription = ({ node }) => {
    return (
        <div className="h-full w-full flex flex-col my-4">
            <div className="mt-4">
                <div className="mb-2 pt-4">
                    <h3 className="font-semibold text-xl">Template</h3>
                </div>
                <div className="h-[400px] w-full rounded-md border-[1px] border-gray-400 p-6 overflow-y-auto">
                    <p className="whitespace-pre-wrap">{`#Task\n너는 친절하고 전문적인 데이터이쿠 챗봇이야. 데이터이쿠에 대한 사용자 질문을 친절하고 전문적으로 답변해줘.\n\n#답변 방식\n- 모든 답변은 **한국어**로 답변해라.\n- [Dataiku Information]에 제공된 정보만을 바탕으로 질문에 답변해라.\n- [Dataiku Information]에 사용자 질문에 완전히 답변하기에 충분한 정보가 포함되어 있지 않은 경우 **검색 결과의 사실만 사용하고 **자체적으로 정보를 추가하지 말아라.\n- 제공된 정보 외에 다른 정보를 엄격하게 추측하지 말아라.\n\n#Dataiku Information\n{context_str}\n\n===================================================================\n질문: {query_str}\n답변: `}</p>
                </div>
            </div>
            <div className="mt-4">
                <div className="mb-2 pt-4">
                    <h3 className="font-semibold text-xl">Format Settings</h3>
                </div>
                <div className="p-4 border-[1px] rounded-md">
                    <div className="flex flex-col">
                        <Label className="w-full text-lg mb-2">
                            Context String
                        </Label>
                        <Input
                            className="text-base"
                            value={"context_str"}
                            readOnly
                        ></Input>
                    </div>
                    <div className="flex flex-col">
                        <Label className="w-full text-lg mb-2">
                            Query String
                        </Label>
                        <Input
                            className="text-base"
                            value={"query_str"}
                            readOnly
                        ></Input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromptDescription;
