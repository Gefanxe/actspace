import{d as h,o as c,c as r,n as y,j as k,k as S,e,a as t,t as f,f as _,F as $,h as C,l as N,m as T,p as z,r as L,w as b,b as v}from"./index-17d26520.js";const g=h({__name:"UnoCSSIconButton",props:{icon:{default:"i-mdi-alert "},size:{default:"5"}},setup(u){return(a,s)=>(c(),r("svg",{class:y([`${a.icon} h-${a.size} w-${a.size}`,"inline-block stroke-current"])},null,2))}}),V=[{name:"🌝 light",id:"light"},{name:"🌚 dark",id:"dark"},{name:"🧁 cupcake",id:"cupcake"},{name:"🐝 bumblebee",id:"bumblebee"},{name:"✳️ Emerald",id:"emerald"},{name:"🏢 Corporate",id:"corporate"},{name:"🌃 synthwave",id:"synthwave"},{name:"👴 retro",id:"retro"},{name:"🤖 cyberpunk",id:"cyberpunk"},{name:"🌸 valentine",id:"valentine"},{name:"🎃 halloween",id:"halloween"},{name:"🌷 garden",id:"garden"},{name:"🌲 forest",id:"forest"},{name:"🐟 aqua",id:"aqua"},{name:"👓 lofi",id:"lofi"},{name:"🖍 pastel",id:"pastel"},{name:"🧚‍♀️ fantasy",id:"fantasy"},{name:"📝 Wireframe",id:"wireframe"},{name:"🏴 black",id:"black"},{name:"💎 luxury",id:"luxury"},{name:"🧛‍♂️ dracula",id:"dracula"},{name:"🖨 CMYK",id:"cmyk"},{name:"🍁 Autumn",id:"autumn"},{name:"💼 Business",id:"business"},{name:"💊 Acid",id:"acid"},{name:"🍋 Lemonade",id:"lemonade"},{name:"🌙 Night",id:"night"},{name:"☕️ Coffee",id:"coffee"},{name:"❄️ Winter",id:"winter"}],B={title:"Change Theme",class:"dropdown-end dropdown"},E={tabindex:"0",class:"btn-ghost btn gap-1 normal-case"},I={class:"hidden md:inline"},M={class:"scrollbar dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl"},R={class:"grid grid-cols-1 gap-3 p-3",tabindex:"0"},q=["onClick"],j=["data-theme"],F={class:"grid grid-cols-5 grid-rows-3"},A={class:"col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3"},U={class:"grow text-sm font-bold"},W=N('<div class="flex shrink-0 flex-wrap gap-1" data-v-fea358b2><div class="w-2 rounded bg-primary" data-v-fea358b2></div><div class="w-2 rounded bg-secondary" data-v-fea358b2></div><div class="w-2 rounded bg-accent" data-v-fea358b2></div><div class="w-2 rounded bg-neutral" data-v-fea358b2></div></div>',1),G=h({name:"ThemeChange",__name:"index",setup(u){const{t:a}=k(),s=S({attribute:"data-theme",modes:{cupcake:"cupcake",bumblebee:"bumblebee",emerald:"emerald",corporate:"corporate",synthwave:"synthwave",retro:"retro",cyberpunk:"cyberpunk",valentine:"valentine",halloween:"halloween",garden:"garden",forest:"forest",aqua:"aqua",lofi:"lofi",pastel:"pastel",fantasy:"fantasy",wireframe:"wireframe",black:"black",luxury:"luxury",dracula:"dracula",cmyk:"cmyk",autumn:"autumn",business:"business",acid:"acid",lemonade:"lemonade",night:"night",coffee:"coffee",winter:"winter"}}),o=(i,m)=>{const d=s.value===m;try{if(document.startViewTransition===void 0)throw new Error("document.startViewTransition is undefined, please update your browser to the latest version or use a modern browser.");const n=i.clientX,l=i.clientY,p=Math.hypot(Math.max(n,innerWidth-n),Math.max(l,innerHeight-l));document.startViewTransition().ready.then(()=>{const x=[`circle(0px at ${n}px ${l}px)`,`circle(${p}px at ${n}px ${l}px)`];document.documentElement.animate({clipPath:d?[...x].reverse():x},{duration:500,easing:"ease-in",pseudoElement:d?"::view-transition-old(root)":"::view-transition-new(root)"})})}catch(n){T.error(`Failed to change theme : ${n instanceof Error?n.message:""}`)}finally{s.value=m}};return(i,m)=>{const d=g;return c(),r("div",B,[e("div",E,[t(d,{icon:"i-tabler-color-swatch"}),e("span",I,f(_(a)("Themes")),1),t(d,{icon:"i-tabler-chevron-down"})]),e("div",M,[e("div",R,[(c(!0),r($,null,C(_(V),n=>(c(),r("div",{key:n.id,class:y(["overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content hover:outline",_(s)===n.id?"outline":""]),onClick:l=>o(l,n.id)},[e("div",{"data-theme":n.id,class:"w-full cursor-pointer bg-base-100 font-sans text-base-content"},[e("div",F,[e("div",A,[e("div",U,f(n.id),1),W])])],8,j)],10,q))),128))])])])}}});const H=(u,a)=>{const s=u.__vccOpts||u;for(const[o,i]of a)s[o]=i;return s},P=H(G,[["__scopeId","data-v-fea358b2"]]),w=[{code:"en-us",nativeName:"English",name:"English"},{code:"zh-tw",nativeName:"繁中",name:"Traditional Chinese"}],Y={title:"Change Locales",class:"dropdown-end dropdown"},D={tabindex:"0",class:"btn-ghost btn gap-1 normal-case"},K=e("span",{class:"hidden md:inline"},null,-1),O={class:"dropdown-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto bg-base-200 text-base-content shadow-2xl"},X={class:"menu menu-compact gap-1 p-3",tabindex:"0"},J=["onClick"],Q={class:"flex flex-1 justify-between"},Z=h({name:"LocalesChange",__name:"index",setup(u){const{availableLocales:a,locale:s}=k(),o=i=>{s.value=i;const m=z("locale","zh");m.value=i};return console.log("languagesNameList:",w),(i,m)=>{const d=g;return c(),r("div",Y,[e("div",D,[t(d,{icon:"i-tabler-language"}),K,t(d,{icon:"i-tabler-chevron-down"})]),e("div",O,[e("ul",X,[(c(!0),r($,null,C(_(a),n=>{var l;return c(),r("li",{key:n},[e("button",{class:"flex",onClick:p=>o(n)},[e("span",Q,f((l=_(w).find(p=>p.code===n))==null?void 0:l.nativeName)+" ",1)],8,J)])}),128))])])])}}}),ee={class:"sticky top-0 z-30 flex h-16 w-full justify-center text-base-content bg-accentFocus"},ne={class:"navbar w-full"},te={class:"navbar-start flex flex-1 md:gap-1 lg:gap-2"},ae={class:"dropdown"},se=e("label",{tabindex:"0",class:"btn btn-ghost lg:hidden"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1),oe={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},ie=e("li",null,[e("a",null,"小工具"),e("ul",{class:"p-2"},[e("li",null,[e("a",null,"timestamp轉換")]),e("li",null,[e("a",null,"Submenu 2")])])],-1),le=e("li",null,[e("a",null,"Item 3")],-1),ce=e("div",{class:"inline-flex text-lg text-primary transition-all duration-200 md:text-3xl"},[e("span",{class:"text-primary"},[v("A"),e("span",{class:"lowercase"},"ct")]),e("span",{class:"text-base-content"},[e("span",{class:"lowercase"},"space")])],-1),re={class:"navbar-center hidden lg:flex"},de={class:"menu menu-horizontal px-1"},ue=e("li",{tabindex:"0"},[e("details",null,[e("summary",null,"小工具"),e("ul",{class:"p-2"},[e("li",null,[e("a",null,"timestamp轉換")]),e("li",null,[e("a",null,"Submenu 2")])])])],-1),me=e("li",null,[e("a",null,"Item 3")],-1),_e={class:"navbar-end"},he={class:"tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]","data-tip":"原始碼"},pe={class:"flex-none items-center"},be={"aria-label":"Github",target:"_blank",href:"https://github.com/Gefanxe/actspace",class:"btn-ghost btn-square btn normal-case"},fe=h({name:"Navbar",__name:"index",setup(u){return(a,s)=>{const o=L("RouterLink");return c(),r("div",ee,[e("nav",ne,[e("div",te,[e("div",ae,[se,e("ul",oe,[e("li",null,[t(o,{to:"/reference","aria-current":"page","aria-label":"Reference"},{default:b(()=>[v(" 參考資料 ")]),_:1})]),ie,le])]),t(o,{to:"/","aria-current":"page","aria-label":"Homepage",class:"btn-ghost btn px-2"},{default:b(()=>[ce]),_:1})]),e("div",re,[e("ul",de,[e("li",null,[t(o,{to:"/reference","aria-current":"page","aria-label":"Reference"},{default:b(()=>[v(" 參考資料 ")]),_:1})]),ue,me])]),e("div",_e,[t(P),t(Z),e("span",he,[e("span",pe,[e("a",be,[t(g,{icon:"i-mdi-github"})])])])])])])}}}),ve={class:"font-chinese antialiased"},ge={class:"min-h-screen"},xe={class:"p6"},ke=h({name:"Layout",__name:"index",setup(u){return(a,s)=>{const o=L("RouterView");return c(),r("div",ve,[e("div",ge,[t(fe),e("div",xe,[t(o)])])])}}});export{ke as default};