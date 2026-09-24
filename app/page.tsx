import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Code2, Database, ExternalLink, Mail, MapPin, ShieldCheck, Workflow } from "lucide-react";
import { education, experiences, impact, metrics, profile, projects, skillGroups } from "@/lib/data";

const nav=[["Experience","experience"],["Systems","systems"],["Impact","impact"],["Skills","skills"]] as const;

export default function Home(){
 return <main>
  <div className="grain" aria-hidden="true"/>
  <header className="nav"><div className="shell nav-inner">
   <a className="brand" href="#top" aria-label="Sayed Shadman Sakib">SAKIB<span>/</span>OPS</a>
   <nav className="desktop-nav" aria-label="Primary">{nav.map(([label,id])=><a key={id} href={"#"+id}>{label}</a>)}</nav>
   <a className="mini-cta" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a>
  </div></header>

  <section id="top" className="hero shell">
   <div className="hero-copy">
    <div className="eyebrow"><span className="pulse"/>{profile.positioning}</div>
    <h1>Building <span>fintech systems</span> that make operations clearer, faster, and more reliable.</h1>
    <p className="lead">{profile.summary} Hands-on with Python, TypeScript, SQL/data workflows, REST/API integrations, dashboards, access-controlled applications, and technical documentation.</p>
    <div className="hero-links">
     <a className="primary-btn" href="#systems"><span>Explore systems</span><ArrowDown size={16}/></a>
     <a className="ghost-btn" href="/resume"><span>View resume</span><ArrowUpRight size={16}/></a>
    </div>
    <div className="hero-meta"><span><MapPin size={14}/> {profile.location}</span><span>4+ years</span><span>FinTech operations</span></div>
   </div>

   <div className="hero-visual">
    <div className="portrait-frame">
     <Image src="/profile-standing.webp" alt="Sayed Shadman Sakib in a navy suit" fill priority sizes="(max-width: 900px) 80vw, 38vw" className="portrait"/>
     <div className="portrait-gradient"/>
     <div className="portrait-label"><span>TECHNICAL OPERATIONS</span><strong>Systems × Data × Resolution</strong></div>
     <div className="portrait-caption"><span>SAYED SHADMAN SAKIB</span><strong>Technical Operations Analyst</strong></div>
    </div>
    <div className="floating-card floating-top"><span>QUALITY CONTROL</span><strong>≈1,000 conversations/day</strong></div>
    <div className="floating-card floating-bottom"><span>ERROR REDUCTION</span><strong>60%</strong><small>database + manual verification</small></div>
   </div>
  </section>

  <section className="shell metric-strip" aria-label="Selected metrics">{metrics.map(item=><div key={item.label} className="metric"><strong>{item.value}</strong><span>{item.label}</span></div>)}</section>

  <section id="experience" className="shell section">
   <SectionHeader eyebrow="01 / EXPERIENCE" title="Operations work, translated into systems." text="The common thread across my roles is turning ambiguous cases and recurring operational friction into repeatable workflows, better visibility, and measurable outcomes."/>
   <div className="timeline">{experiences.map((item,index)=><article className="timeline-item" key={item.company+"-"+item.role}>
    <div className="timeline-marker"><span>{"0"+(index+1)}</span></div>
    <div className="timeline-body">
     <div className="timeline-heading"><div><div className="date">{item.period}</div><h3>{item.role}</h3><p>{item.company}</p></div></div>
     <p className="timeline-intro">{item.intro}</p>
     <div className="bullet-list">{item.bullets.map(bullet=><div key={bullet} className="bullet"><Check size={15}/><span>{bullet}</span></div>)}</div>
    </div>
   </article>)}</div>
  </section>

  <section id="systems" className="section dark-section"><div className="shell">
   <SectionHeader eyebrow="02 / SYSTEMS" title="I build tools around the work." text="The most useful technical projects are the ones that remove context switching, surface exceptions early, and give teams a reliable operational workflow." dark/>
   <div className="project-grid">{projects.map((project,index)=><article className="project-card" key={project.name}>
    <div className="project-number">{"0"+(index+1)}</div>
    <div className="project-icon">{index===0?<Database size={22}/>:<ShieldCheck size={22}/>}</div>
    <div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p>
    <div className="stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div>
    <div className="project-proof"><span>Workflow proof</span><strong>{project.proof}</strong><ChevronRight size={15}/></div>
   </article>)}</div>
  </div></section>

  <section id="impact" className="shell section">
   <SectionHeader eyebrow="03 / IMPACT" title="Measured outcomes matter more than activity." text="Selected outcomes from production operations, data quality, customer experience, and internal tooling."/>
   <div className="impact-grid">{impact.map(item=><article className="impact-card" key={item.title}><div className="impact-metric">{item.metric}</div><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
  </section>

  <section id="skills" className="section skill-section"><div className="shell">
   <SectionHeader eyebrow="04 / TOOLKIT" title="Technical depth with an operations bias." text={profile.githubBio} dark/>
   <div className="skills-grid">{skillGroups.map(group=><article className="skill-card" key={group.label}><div className="skill-topline"><h3>{group.label}</h3><Workflow size={17}/></div><div className="chip-wrap">{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></article>)}</div>
  </div></section>

  <section className="shell section education"><div className="education-card">
   <div><div className="eyebrow soft">EDUCATION & CERTIFICATIONS</div><h2>{education.degree}</h2><p>{education.university} · {education.year}</p></div>
   <div className="certs">{education.certifications.map(cert=><span key={cert}><Check size={14}/>{cert}</span>)}</div>
  </div></section>

  <section className="shell contact"><div className="contact-card">
   <div><div className="eyebrow soft">LET&apos;S CONNECT</div><h2>For teams solving difficult operational problems.</h2><p>I work best where technical investigation, process design, data quality, and stakeholder coordination need to come together.</p></div>
   <div className="contact-actions">
    <a className="primary-btn" href={"mailto:"+profile.email}><Mail size={16}/>{profile.email}</a>
    <a className="ghost-btn" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16}/>LinkedIn</a>
    <a className="ghost-btn" href={profile.github} target="_blank" rel="noreferrer"><Code2 size={16}/>GitHub</a>
   </div>
  </div></section>

  <footer className="shell footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>Technical Operations · FinTech · Automation</span></footer>
 </main>;
}

function SectionHeader({eyebrow,title,text,dark=false}:{eyebrow:string;title:string;text:string;dark?:boolean}){
 return <div className={"section-header "+(dark?"section-header-dark":"")}><div className="section-eyebrow">{eyebrow}</div><div><h2>{title}</h2><p>{text}</p></div></div>;
}