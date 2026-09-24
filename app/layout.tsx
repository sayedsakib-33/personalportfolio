import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const spaceGrotesk=Space_Grotesk({subsets:["latin"],variable:"--font-space",display:"swap"});

export const metadata:Metadata={
 title:"Sayed Shadman Sakib | Technical Operations Analyst",
 description:"Technical Operations Analyst focused on fintech operations, production support, data quality, automation, and internal systems.",
 keywords:["Sayed Shadman Sakib","Technical Operations Analyst","FinTech","Production Support","Automation","Data Quality","Python","TypeScript","SQL"],
 alternates:{canonical:"https://personalportfolio.vercel.app"},
 openGraph:{title:"Sayed Shadman Sakib | Technical Operations Analyst",description:"FinTech operations, automation, data quality, and internal systems.",type:"website"}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body className={inter.variable+" "+spaceGrotesk.variable}>{children}</body></html>;
}