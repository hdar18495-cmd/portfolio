/* ===== EDIT ME: all content lives here ===== */
const CONFIG={
 github:"https://github.com/hdar18495-cmd",
 linkedin:"https://www.linkedin.com/in/your-handle", // placeholder
 email:"your.email@example.com", // placeholder
 cvUrl:"", // add a real CV file path, e.g. "cv.pdf"
 photo:"", // image URL for profile photo
 about:"I’m Hasnain Abbas Dar, a Data Science student at The Islamia University of Bahawalpur. I’m interested in exploring how data, algorithms, and artificial intelligence can solve real-world problems. My goal is to continuously learn, experiment, and develop practical skills in the evolving world of technology.",
 aboutCards:[["My Education","BS Data Science, The Islamia University of Bahawalpur (IUB)."],["My Interests","AI, machine learning, data science, and emerging technologies."],["My Learning Journey","Building skills step by step. Edit this card with your own story."],["My Career Goals","Aspiring AI/ML Engineer. Edit with your specific goals."]],
 education:[{t:"Bachelor of Science in Data Science",w:"The Islamia University of Bahawalpur · 20XX to 20XX (edit)",d:"Add your CGPA, key courses, or society roles here."}],
 skills:{"Programming":["Python","SQL","R (if applicable)"],"Data Science":["Data Analysis","Data Cleaning","Exploratory Data Analysis","Statistical Analysis","Data Visualization"],"AI & Machine Learning":["Machine Learning","Deep Learning","Artificial Intelligence","Predictive Modeling"],"Tools & Technologies":["Jupyter Notebook","Google Colab","Pandas","NumPy","Matplotlib","Seaborn","Scikit-learn","Git & GitHub"]},
 projects:[
  {t:"Sample Data Analysis Project",c:"Data Analysis",d:"Placeholder: describe the dataset, question, and findings.",tags:["Python","Pandas"],repo:"",demo:"",img:""},
  {t:"Sample ML Model",c:"Machine Learning",d:"Placeholder: describe the model, metric, and result you actually measured.",tags:["Scikit-learn"],repo:"",demo:"",img:""},
  {t:"Sample AI Project",c:"Artificial Intelligence",d:"Placeholder: what problem does it solve?",tags:["Python"],repo:"",demo:"",img:""},
  {t:"Sample Dashboard",c:"Data Visualization",d:"Placeholder: charts and insights.",tags:["Matplotlib","Seaborn"],repo:"",demo:"",img:""},
  {t:"Sample Python Tool",c:"Python Development",d:"Placeholder: a script or app you built.",tags:["Python","Git"],repo:"",demo:"",img:""}],
 journey:[["20XX","Started BS Data Science","Edit date and details."],["20XX","Began learning Python and data analysis","Edit date and details."],["20XX","First personal project","Edit date and details."],["Future","Aspiring AI/ML Engineer","Edit with your goals."]],
 interests:[["🧠","Artificial Intelligence"],["⚙️","Machine Learning"],["📊","Data Science"],["🗄️","Big Data Analytics"],["🕸️","Deep Learning"],["📈","Data Visualization"],["🧩","Problem Solving"],["🚀","Emerging Technologies"]],
 repos:[] // e.g. [{name:"repo-name",desc:"what it is",url:"https://github.com/hdar18495-cmd/repo-name"}]
};
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ph=v=>!v||/example\.com|your-handle/.test(v);
/* render */
$("#aboutTxt").textContent=CONFIG.about;
if(CONFIG.photo)$("#avatar").innerHTML='<img alt="Hasnain Abbas Dar" src="'+esc(CONFIG.photo)+'">';
$("#aboutCards").innerHTML=CONFIG.aboutCards.map(c=>`<div class="card"><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></div>`).join("");
const tl=a=>a.map(x=>`<div class="it"><div class="when">${esc(x[0]||x.w)}</div><h3>${esc(x[1]||x.t)}</h3><p class="mut">${esc(x[2]||x.d)}</p></div>`).join("");
$("#edu").innerHTML=CONFIG.education.map(x=>`<div class="it"><h3>${esc(x.t)}</h3><div class="when">${esc(x.w)}</div><p class="mut">${esc(x.d)}</p></div>`).join("");
$("#jr").innerHTML=tl(CONFIG.journey);
$("#intGrid").innerHTML=CONFIG.interests.map(i=>`<div class="card rv"><div class="ico" aria-hidden="true">${i[0]}</div><h3>${esc(i[1])}</h3></div>`).join("");
$("#ghBtn").href=CONFIG.github;
$("#repos").innerHTML=CONFIG.repos.length?CONFIG.repos.map(r=>`<a class="card" href="${esc(r.url)}" target="_blank" rel="noopener"><h3>${esc(r.name)}</h3><p>${esc(r.desc)}</p></a>`).join(""):'<div class="card"><h3>Featured repositories</h3><p>None listed yet. Add real repositories to CONFIG.repos.</p></div>';
$("#contactLinks").innerHTML=[["Email",ph(CONFIG.email)?"":"mailto:"+CONFIG.email],["LinkedIn",ph(CONFIG.linkedin)?"":CONFIG.linkedin],["GitHub",CONFIG.github]].map(l=>l[1]?`<a class="chip" href="${esc(l[1])}" target="_blank" rel="noopener">${l[0]}</a>`:`<span class="chip" title="Placeholder: set in CONFIG">${l[0]} (placeholder)</span>`).join("");
$("#yr").textContent=new Date().getFullYear();
/* CV */
$("#cv").addEventListener("click",e=>{if(CONFIG.cvUrl){$("#cv").href=CONFIG.cvUrl;$("#cv").download="";}else{e.preventDefault();alert("CV placeholder: add your file path to CONFIG.cvUrl.");}});
/* skills (editable, kept in memory, optionally localStorage) */
let sk=JSON.parse(JSON.stringify(CONFIG.skills));
try{const s=localStorage.getItem("sk");if(s)sk=JSON.parse(s)}catch(e){}
const save=()=>{try{localStorage.setItem("sk",JSON.stringify(sk))}catch(e){}};
function drawSk(){$("#skillGrid").innerHTML=Object.keys(sk).map(k=>`<div class="card"><h3>${esc(k)}</h3><div class="chips">${sk[k].map((x,i)=>`<span class="chip">${esc(x)}<button data-k="${esc(k)}" data-i="${i}" aria-label="Remove ${esc(x)}">×</button></span>`).join("")}</div><div class="add"><input aria-label="New skill in ${esc(k)}" placeholder="Add skill" data-add="${esc(k)}"><button class="btn" data-addb="${esc(k)}">Add</button></div></div>`).join("")}
drawSk();
$("#editSk").onclick=()=>{const g=$("#skillGrid");g.classList.toggle("edit");$("#editSk").textContent=g.classList.contains("edit")?"Done editing":"Edit skills"};
$("#skillGrid").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.k){sk[b.dataset.k].splice(+b.dataset.i,1)}else if(b.dataset.addb){const i=document.querySelector(`[data-add="${CSS.escape(b.dataset.addb)}"]`),v=i.value.trim();if(!v)return;sk[b.dataset.addb].push(v)}else return;save();const ed=$("#skillGrid").classList.contains("edit");drawSk();if(ed)$("#skillGrid").classList.add("edit")});
/* projects + filter */
const cats=["All",...new Set(CONFIG.projects.map(p=>p.c))];let cur="All";
function drawP(){$("#filters").innerHTML=cats.map(c=>`<button class="btn${c===cur?" on":""}" aria-pressed="${c===cur}">${esc(c)}</button>`).join("");
$("#projGrid").innerHTML=CONFIG.projects.filter(p=>cur==="All"||p.c===cur).map(p=>`<article class="card proj"><div class="box"><div class="img">${p.img?`<img alt="" src="${esc(p.img)}" style="width:100%;height:100%;object-fit:cover">`:esc(p.c)}</div></div><div class="body"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><div class="chips">${p.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div><p style="margin-top:.9rem">${p.repo?`<a href="${esc(p.repo)}" target="_blank" rel="noopener">GitHub</a>`:'<span class="mut" style="font-size:.85rem">Repo link: add in CONFIG</span> '}${p.demo?`<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo</a>`:""}</p></div></article>`).join("")}
$("#filters").addEventListener("click",e=>{const b=e.target.closest("button");if(b){cur=b.textContent;drawP()}});drawP();
/* contact form: validates, opens the visitor's mail app; no fake sending */
$("#form").addEventListener("submit",e=>{e.preventDefault();const v={n:$("#n").value.trim(),e:$("#e").value.trim(),s:$("#s").value.trim(),m:$("#m").value.trim()};let ok=true;
const chk=(k,bad,msg)=>{$("#e"+k).textContent=bad?msg:"";if(bad)ok=false};
chk("n",!v.n,"Enter your name.");chk("e",!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.e),"Enter a valid email address.");chk("s",!v.s,"Enter a subject.");chk("m",v.m.length<10,"Write at least 10 characters.");
const st=$("#status");st.className="";if(!ok){st.className="bad";st.textContent="Fix the highlighted fields and try again.";return}
if(ph(CONFIG.email)){st.className="bad";st.textContent="Not sent: the site owner hasn’t set a contact email or backend yet.";return}
location.href="mailto:"+CONFIG.email+"?subject="+encodeURIComponent(v.s)+"&body="+encodeURIComponent(v.m+"\n\nFrom: "+v.n+" ("+v.e+")");
st.className="ok";st.textContent="Your email app should open with the message ready. Press send there to deliver it.";});
/* nav, theme, progress, reveal */
$("#burger").onclick=()=>{const o=$("#links").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};
$("#links").addEventListener("click",e=>{if(e.target.tagName==="A")$("#links").classList.remove("open")});
$("#theme").onclick=()=>{const r=document.documentElement,d=getComputedStyle(r).colorScheme==="dark";r.dataset.theme=d?"light":"dark";try{localStorage.setItem("th",r.dataset.theme)}catch(e){}};
try{const t=localStorage.getItem("th");if(t)document.documentElement.dataset.theme=t}catch(e){}
addEventListener("scroll",()=>{const h=document.documentElement,p=scrollY/(h.scrollHeight-innerHeight);$("#prog").style.width=(p*100)+"%";$("#top").classList.toggle("show",scrollY>700)},{passive:true});
$("#top").onclick=()=>scrollTo({top:0,behavior:"smooth"});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll(".rv").forEach(n=>io.observe(n));
const links=[...document.querySelectorAll(".links a")],so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-45% 0px -50% 0px"});document.querySelectorAll("main section").forEach(s=>so.observe(s));
addEventListener("load",()=>setTimeout(()=>$("#pre").classList.add("off"),500));
/* cursor + magnetic buttons (fine pointers only) */
if(matchMedia("(hover:hover) and (pointer:fine)").matches){document.body.classList.add("cur-on");const c=$("#cur");
addEventListener("mousemove",e=>{c.style.left=e.clientX+"px";c.style.top=e.clientY+"px";c.classList.toggle("big",!!e.target.closest("a,button"))});
document.querySelectorAll(".mag").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.25}px)`});b.addEventListener("mouseleave",()=>b.style.transform="")})}
/* hero network: nodes drift, link when close, and react to the pointer */
(()=>{const cv=$("#net"),x=cv.getContext("2d");let W,H,P=[],m={x:-999,y:-999};const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const rs=()=>{const d=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;x.setTransform(d,0,0,d,0,0);const n=Math.round(Math.min(90,W*H/14000));P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))};
addEventListener("resize",rs);rs();$("#hero").addEventListener("mousemove",e=>{const r=cv.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});$("#hero").addEventListener("mouseleave",()=>m={x:-999,y:-999});
const col=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
function f(){x.clearRect(0,0,W,H);const c=col("--cyan"),b=col("--blue");
for(const p of P){if(!rm){p.x+=p.vx;p.y+=p.vy}if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const dm=Math.hypot(p.x-m.x,p.y-m.y);if(dm<140&&dm>0){p.x+=(p.x-m.x)/dm*1.2;p.y+=(p.y-m.y)/dm*1.2}}
for(let i=0;i<P.length;i++){const a=P[i];x.fillStyle=c;x.globalAlpha=.8;x.beginPath();x.arc(a.x,a.y,1.8,0,7);x.fill();
for(let j=i+1;j<P.length;j++){const d=Math.hypot(a.x-P[j].x,a.y-P[j].y);if(d<120){x.globalAlpha=(1-d/120)*.35;x.strokeStyle=b;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
const dm=Math.hypot(a.x-m.x,a.y-m.y);if(dm<170){x.globalAlpha=(1-dm/170)*.7;x.strokeStyle=c;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(m.x,m.y);x.stroke()}}
x.globalAlpha=1;if(!rm)requestAnimationFrame(f)}
f();if(rm)addEventListener("resize",f)})();
