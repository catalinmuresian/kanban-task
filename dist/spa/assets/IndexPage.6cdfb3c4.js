import{c as g,h as d}from"./render.c010b597.js";import{e as c,f as t,c as i,h,j as f,C as m,g as y,_ as x,G as _,I as v,J as C,K as $,R as P}from"./index.d19ee5d8.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=y(),e=c(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=i(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),u=i(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},d(o.default))}}),F="/kanban-task/assets/quasar-logo-vertical.55e9c854.svg";const k=_({name:"IndexPage"}),q=P("img",{alt:"Quasar logo",src:F,style:{width:"200px",height:"200px"}},null,-1);function B(n,o,s,e,l,r){return v(),C(Q,{class:"flex flex-center"},{default:$(()=>[q]),_:1})}var H=x(k,[["render",B]]);export{H as default};
