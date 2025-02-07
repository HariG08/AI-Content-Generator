"use client";
import React, { useEffect, useState } from "react";
import FormSection from "../../_components/FormSection";
import OutputSection from "../../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplatesListSection";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment"

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const [loading, setLoading] = useState(false);
  const [promptResult, setPromptResult] = useState("");
  const {user} = useUser();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    try {
      setPromptResult(await result.response.text());
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
    await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
  };

  const SaveInDb = async(formData:any,slug:any,aiResp:string)=>{
    const result = await db.insert(AiOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/YYYY')
    })
    console.log("RESULT NIGGA: ",result);
  }

  

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection promptResult={promptResult} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
