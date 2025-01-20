import React, { useState } from "react";
import { TEMPLATE } from "./TemplatesListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput:any;
}
function FormSection({ selectedTemplate,userFormInput }: PROPS) {

  const [formData,setFormData]= useState<any>();

  const onSubmit = (e:any) =>{
    e.preventDefault();
    userFormInput(formData)
    
  }

  const handleInputChange=(e:any)=>{
  const {name,value} = e.target;
  setFormData({...formData,[name]:value})
  }

  return (
    <div className="p-5 shadow-md border rounded-lg">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-col mb-7 gap-2">
            <label className="font-semibold">{item.label}</label>
            {item.field == "input" ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange}/>
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange}/>
            ) : null}
          </div>
        ))}
        <Button className="w-full py-6" type="submit">Generate Content</Button>
      </form>
    </div>
  );
}

export default FormSection;
