"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { TEMPLATE } from "../_components/TemplatesListSection";
import Templates from "@/app/(data)/Templates";
import Image from "next/image";

export interface HISTORY{
  id:Number,
  formData:string,
  aiResponse:string,
  templateSlug:string,
  createdBy:string,
  createdAt:string
}

function History() {
  const [historyData, setHistoryData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { user } = useUser();

  useEffect(() => {
    user && GetData();
  }, [user]);

  const GetData = async () => {
    const result = await db.select().from(AiOutput);
    
    // Map template names to history data
    const dataWithTemplateNames = result.map((row: any) => {
      const template = Templates.find((t) => t.slug === row.templateSlug);
      return {
        ...row,
        templateName: template ? template.name : "Unknown Template", // Add template name
        templateIcon: template ? template.icon : "Icon not found"
      };
    });

    setHistoryData(dataWithTemplateNames);
  };

  // Handle copy with feedback animation
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    // Reset feedback after 2 seconds
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="border shadow-lg rounded-lg bg-white w-[97%] mx-5 mt-5 p-3">
      <h1 className="font-bold text-3xl">History</h1>
      <p className="text-sm text-gray-500">
        Search your previously generated AI Content
      </p>
      <div>
        <div className="flex bg-slate-200 mt-5 font-semibold gap-4 p-2">
          <h1 className="w-1/5">TEMPLATE</h1>
          <h1 className="w-1/5">AI RESPONSE</h1>
          <h1 className="w-1/5">DATE</h1>
          <h1 className="w-1/5">WORDS</h1>
          <h1 className="w-1/5">COPY</h1>
        </div>
        <div className="flex flex-col gap-4 p-2">
          {historyData ? (
            historyData.map((row: any) => (
              <div key={row.id} className="flex gap-4 p-2 bg-gray-100 rounded hover:bg-gray-50 transition-colors">
                <Image src={row.templateIcon} alt="Icon" width={30} height={30} objectFit="contain"/>
                <p className="w-1/5 truncate">{row.templateName}</p>
                <p className="w-1/5 truncate">{row.aiResponse}</p>
                <p className="w-1/5">
                  {new Date(row.createdAt).toLocaleDateString()}
                </p>
                <p className="w-1/5">{row.aiResponse.split(" ").length}</p>
                <button
                  className={`w-1/5 text-white px-3 py-1 rounded transition-colors duration-200 ${
                    copiedId === row.id 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                  onClick={() => handleCopy(row.aiResponse, row.id)}
                >
                  {copiedId === row.id ? (
                    <span className="flex items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Copied!
                    </span>
                  ) : 'Copy'}
                </button>
              </div>
            ))
          ) : (
            <p className="p-4 text-gray-500">No history found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default History;