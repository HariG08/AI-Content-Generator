"use client";
import React, { useRef, useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

function OutputSection({ promptResult }: any) {
  const editorRef: any = useRef(null);

  useEffect(() => {
    // Set the editor content whenever promptResult changes
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(promptResult || "");
    }
  }, [promptResult]);

  const handleCopy = () => {
    const markdownContent = editorRef.current
      ? editorRef.current.getInstance().getMarkdown()
      : "";
    navigator.clipboard.writeText(markdownContent).then(() => {
      alert("Content copied to clipboard!");
    });
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue={promptResult}
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
