// CDP playtest: node tools/lh-cdp.js  (drives lantern-heist at 375x667: BFS win, caught path, unlock)
const {spawn}=require('child_process'),path=require('path'),fs=require('fs');
const {solve}=require('./lh-solve.js');
const file=path.resolve(__dirname,'../games/lantern-heist/index.html');
const src=fs.readFileSync(file,'utf8');const L=eval(src.match(/var LEVELS=(\[[\s\S]*?\n\]);/)[1]);
const ch=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--remote-debugging-port=9333','--user-data-dir='+require('os').tmpdir()+'/lhprof'+Date.now(),'--window-size=375,667','about:blank'],{stdio:'ignore'});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 let tabs;for(let i=0;i<40;i++){try{tabs=await (await fetch('http://127.0.0.1:9333/json')).json();if(tabs.length)break;}catch(e){}await sleep(250);}
 const ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);
 let id=0;const pend={},errs=[];
 ws.onmessage=m=>{const d=JSON.parse(m.data);if(d.id&&pend[d.id]){pend[d.id](d);delete pend[d.id];}
  if(d.method==='Runtime.exceptionThrown')errs.push(d.params.exceptionDetails.text+' '+(d.params.exceptionDetails.exception&&d.params.exceptionDetails.exception.description));};
 const send=(method,params={})=>new Promise(r=>{pend[++id]=r;ws.send(JSON.stringify({id,method,params}));});
 const ev=async e=>(await send('Runtime.evaluate',{expression:e,returnByValue:true})).result.result.value;
 await send('Runtime.enable');await send('Page.enable');
 await send('Emulation.setDeviceMetricsOverride',{width:375,height:667,deviceScaleFactor:2,mobile:true});
await send('Page.navigate',{url:'file:///'+file.split(path.sep).join('/')});await sleep(1200);
 const key=async k=>{const m={R:['ArrowRight',39],L:['ArrowLeft',37],U:['ArrowUp',38],D:['ArrowDown',40],W:['z',90]}[k];
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:m[0]==='z'?'z':m[0],windowsVirtualKeyCode:m[1]});await send('Input.dispatchKeyEvent',{type:'keyUp',key:m[0],windowsVirtualKeyCode:m[1]});await sleep(40);};
 const shot=async n=>fs.writeFileSync(path.join(__dirname,n),Buffer.from((await send('Page.captureScreenshot',{format:'png'})).result.data,'base64'));
 const out={};
 out.hintShown=await ev("document.getElementById('hint').classList.contains('on')");out.hintOverflow=await ev("document.documentElement.scrollWidth>innerWidth||document.documentElement.scrollHeight>innerHeight");await shot('hint.png');
 await ev("document.getElementById('hintok').click()");out.hintGone=await ev("!document.getElementById('hint').classList.contains('on')&&localStorage.getItem('lh_hint')");
 // win level 1
 await ev("document.getElementById('menu')&&0");
 solve(L[0]);const p=solve.path;out.path=p;
 for(const k of p)await key(k);await sleep(800);
 out.winHead=await ev("document.getElementById('mh').textContent");out.winSub=await ev("document.getElementById('mp').textContent");
 out.prog=await ev("localStorage.getItem('lh_progress')");await shot('win.png');
 // next level -> level 2, then walk into guard sight: try every first move until caught
 await ev("document.getElementById('mb').click()");await sleep(300);
 out.lvlAfterNext=await ev("document.getElementById('info').textContent");
 let caught=false;const seq='DDDDDDDD';
 for(const k of seq){await key(k);if(await ev("document.getElementById('mh').textContent")==='SPOTTED'){caught=true;break;}}
 await sleep(700);out.caught=caught;out.caughtHead=await ev("document.getElementById('mh').textContent");if(caught)await shot('caught.png');
 // undo clears
 await key('W');await sleep(200);out.undoOverlayOn=await ev("document.getElementById('msg').classList.contains('on')");
 // level select unlock
 await ev("document.getElementById('menu').click()");await sleep(300);
 out.enabled=await ev("[...document.querySelectorAll('#grid button')].filter(b=>!b.disabled).length");
 out.sel2=await ev("document.querySelectorAll('#grid button')[0].innerText");
 out.scroll=await ev("document.documentElement.scrollWidth+'x'+document.documentElement.scrollHeight");
 await shot('sel2.png');out.errs=errs;
 console.log(JSON.stringify(out,null,1));ch.kill();process.exit(0);
})().catch(e=>{console.error(e);ch.kill();process.exit(1);});
