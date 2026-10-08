import{j as k}from"./vendor-motion-cNmfiwpP.js";import{r}from"./vendor-react-BzXqRi8k.js";const w=({content:c,title:p="Content",className:f=""})=>{const t=r.useRef(null),[u,h]=r.useState("100px"),[s,g]=r.useState(()=>document.documentElement.classList.contains("dark"));return r.useEffect(()=>{const e=()=>{const a=document.documentElement.classList.contains("dark");g(a)};e();const i=new MutationObserver(a=>{a.forEach(n=>{n.type==="attributes"&&n.attributeName==="class"&&e()})});return i.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>i.disconnect()},[]),r.useEffect(()=>{const e=t.current?.contentDocument;if(e){const n=`
        <!DOCTYPE html>
        <html lang="en" class="${s?"dark":""}">
          <head>
            <meta charset="utf-8">
            <style>${`
        ${s?`
        :root {
          color-scheme: dark;
          --text-primary: #cbd5e1; /* slate-300 */
          --text-headings: #f8fafc; /* slate-50 */
          --bg-code: #1e293b; /* slate-800 */
          --text-code: #e2e8f0; /* slate-200 */
          --link: #818cf8; /* accent-400 */
          --border: #334155; /* slate-700 */
          --blockquote-border: #6366f1; /* accent-500 */
        }
      `:`
        :root {
          color-scheme: light;
          --text-primary: #334155; /* slate-700 */
          --text-headings: #0f172a; /* slate-900 */
          --bg-code: #f1f5f9; /* slate-100 */
          --text-code: #1e293b; /* slate-800 */
          --link: #4f46e5; /* accent-600 */
          --border: #e2e8f0; /* slate-200 */
           --blockquote-border: #4f46e5; /* accent-600 */
        }
      `}
        
        html {
          background-color: transparent !important;
        }
        
        body { 
          background-color: transparent !important;
          font-family: 'Inter', system-ui, -apple-system, sans-serif; 
          color: var(--text-primary);
          line-height: 1.6; 
          margin: 0; 
          padding: 8px; 
          overflow-wrap: break-word;
          overflow-y: hidden;
          transition: color 0.3s ease;
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 { 
          color: var(--text-headings);
          margin-top: 1.5em; 
          margin-bottom: 0.75em; 
          font-weight: 700; 
          line-height: 1.3;
        }
        h1 { font-size: 1.8em; }
        h2 { font-size: 1.5em; }
        h3 { font-size: 1.25em; }

        p { margin-bottom: 1em; }
        
        a { 
          color: var(--link); 
          text-decoration: none; 
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        a:hover { border-bottom-color: var(--link); }

        ul, ol { margin-left: 20px; margin-bottom: 1em; padding-left: 0; }
        li { margin-bottom: 0.5em; }

        /* Media */
        img { 
          max-width: 100%; 
          height: auto; 
          border-radius: 8px; 
          display: block; 
          margin: 1.5em 0;
        }

        /* Code & Pre */
        pre { 
          background: var(--bg-code); 
          color: var(--text-code); 
          padding: 16px; 
          border-radius: 8px; 
          overflow-x: auto; 
          margin: 1.5em 0;
          font-size: 0.9em;
          border: 1px solid var(--border);
        }
        
        code { 
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          background: var(--bg-code); 
          padding: 2px 5px; 
          border-radius: 4px; 
          font-size: 0.9em;
          color: var(--text-code);
        }
        
        pre code { 
          background: transparent; 
          padding: 0; 
          color: inherit;
        }

        /* Quotes */
        blockquote { 
          border-left: 4px solid var(--blockquote-border); 
          padding-left: 16px; 
          margin: 1.5em 0; 
          font-style: italic; 
          opacity: 0.9;
        }
        
        /* Tables */
        table { width: 100%; border-collapse: collapse; margin: 1.5em 0; }
        th, td { border: 1px solid var(--border); padding: 8px 12px; }
        th { font-weight: 600; text-align: left; }

        /* Scrollbar for pre tags */
        ::-webkit-scrollbar { height: 8px; width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
      `}</style>
          </head>
          <body>${c||'<p style="font-style:italic; opacity: 0.6;">No content available.</p>'}</body>
        </html>
      `;e.open(),e.write(n),e.close();let o;const l=new ResizeObserver(()=>{o&&cancelAnimationFrame(o),o=requestAnimationFrame(()=>{if(!t.current||!t.current.contentDocument)return;const d=t.current.contentDocument.body;if(d){const m=d.scrollHeight+20;h(b=>{const x=parseInt(b,10);return Math.abs(m-x)>10?`${m}px`:b})}})});return e.body&&l.observe(e.body),()=>{l.disconnect(),o&&cancelAnimationFrame(o)}}},[c,s]),k.jsx("iframe",{ref:t,title:p,className:`w-full block border-none ${f}`,style:{height:u,transition:"height 0.2s ease"},sandbox:"allow-same-origin allow-scripts allow-popups"})};export{w as S};
//# sourceMappingURL=SafeContentRenderer-CZ8pPnBN.js.map
