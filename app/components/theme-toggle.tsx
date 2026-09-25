"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const [dark,setDark]=useState(false);

  useEffect(()=>{
    const stored=localStorage.getItem("theme");
    const next=stored==="dark";
    document.documentElement.dataset.theme=next?"dark":"light";
    setDark(next);
  },[]);

  function toggle(){
    const next=!dark;
    document.documentElement.dataset.theme=next?"dark":"light";
    localStorage.setItem("theme",next?"dark":"light");
    setDark(next);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={dark?"Switch to light mode":"Switch to dark mode"} title={dark?"Light mode":"Dark mode"}>
      <span className={dark?"":"active"}><Sun size={14}/></span>
      <span className={dark?"active":""}><Moon size={14}/></span>
    </button>
  );
}
