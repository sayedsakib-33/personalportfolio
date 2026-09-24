import { education, experiences, impact, profile, projects, skillGroups } from "@/lib/data";

export default function ResumePage(){
 return <main className="resume-page">
  <div className="resume-toolbar"><a href="/">← Portfolio</a><button onClick={()=>window.print()}>Print / Save PDF</button></div>
  <article className="resume-paper">
   <header className="resume-header">
    <div><h1>{profile.name}</h1><p className="resume-title">{profile.title}</p><p>{profile.positioning}</p></div>
    <div className="resume-contact"><span>{profile.location}</span><span>{profile.phone}</span><span>{profile.email}</span><span>linkedin.com/in/sayed-shadman-sakib</span></div>
   </header>
   <ResumeSection title="Professional Summary"><p>{profile.summary} Experienced investigating operational issues, coordinating resolution across Operations, Risk, Compliance, Product, and Tech, and building internal tools and automation that improve accuracy, SLA performance, and scale. Hands-on with Python, TypeScript, SQL/data workflows, REST/API integrations, dashboards, access-controlled applications, and technical documentation.</p></ResumeSection>
   <ResumeSection title="Experience">{experiences.map(item=><div className="resume-role" key={item.company+"-"+item.role}><div className="resume-role-head"><strong>{item.role}</strong><span>{item.company} · {item.period}</span></div><ul>{item.bullets.map(b=><li key={b}>{b}</li>)}</ul></div>)}</ResumeSection>
   <ResumeSection title="Selected Technical Projects">{projects.map(p=><div className="resume-project" key={p.name}><strong>{p.name}</strong><span>{p.type}</span><p>{p.description}</p><p><b>Stack:</b> {p.stack.join(" · ")}</p></div>)}</ResumeSection>
   <ResumeSection title="Selected Impact & Recognition">{impact.map(i=><div className="resume-impact" key={i.title}><strong>{i.metric}</strong><span><b>{i.title}.</b> {i.detail}</span></div>)}</ResumeSection>
   <ResumeSection title="Core Skills">{skillGroups.map(g=><p key={g.label}><b>{g.label}:</b> {g.skills.join(" · ")}</p>)}</ResumeSection>
   <ResumeSection title="Education & Certifications"><p><b>{education.degree}</b> — {education.university} — {education.year}</p><p>{education.certifications.join(" · ")}</p></ResumeSection>
  </article>
 </main>;
}
function ResumeSection({title,children}:{title:string;children:React.ReactNode}){return <section className="resume-section"><h2>{title}</h2>{children}</section>;}