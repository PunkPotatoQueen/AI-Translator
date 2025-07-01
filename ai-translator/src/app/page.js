"use client";
import Image from "next/image";
import { Dropdown } from "@/app/components/dropdown";
import { useState } from "react";

const languageOptions=[
  {
    value: 'pt',
    label: 'Português'
  },
  {
    value: 'en',
    label: 'Inglês'
  },
  {
    value: 'es',
    label: 'Espanhol'
  },
  {
    value: 'fr',
    label: 'Francês'
  }
  
]

export default function Home() {

  const [languageFrom, setLanguageFrom] = useState ('pt');
  const [languageTo, setLanguageTo] = useState ('en');

  const handleLanguageFromChange = (value) =>{
    setLanguageFrom (value);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-4 items-center sm:items-start">
          <div className="container flex flex-col gap-4 row-start-2 items-center sm:items-start">
            <Dropdown
              name="languageFrom"
              value = {languageFrom} 
              options = {languageOptions}
              onChange = {handleLanguageFromChange}
            />
            <textarea placeholder="Insira texto..."
              className="border border-slate-800 rounded-md text-black p-4 md:w-[500px]" 
            />
          </div>

          <div className="container flex flex-col gap-4 row-start-2 items-center sm:items-start">
            <Dropdown
              name="languageTo"
              value={languageTo}
              options={languageOptions}
              onChange={setLanguageTo}
            />
            <textarea className="border border-slate-800 rounded-md text-black p-4" />
          </div>

        </div>
        <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
          Translate
        </button>
      </main>
    </div>
  );
}
