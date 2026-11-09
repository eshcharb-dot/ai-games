// BFS solver for Lantern Heist levels. Usage: node tools/lh-solve.js [file-with-LEVELS=index.html]
const fs=require('fs');
const f=process.argv[2]||'games/lantern-heist/index.html';
const src=fs.readFileSync(f,'utf8');
const m=src.match(/var LEVELS=(\[[\s\S]*?\n\]);/);
const LEVELS=eval(m[1]);
const COLS=6,ROWS=9;
const sgn=v=>v>0?1:v<0?-1:0;
function solve(L){
  const map=L.map.map(r=>r.split(''));let sx=0,sy=0;
  for(let y=0;y<ROWS;y++)for(let x=0;x<COLS;x++)if(map[y][x]==='T'){sx=x;sy=y;map[y][x]='.';}
  const opaque=(x,y)=>x<0||y<0||x>=COLS||y>=ROWS||map[y][x]==='#'||map[y][x]==='P';
  const G=L.guards||[];
  const los=(x0,y0,x1,y1)=>{let dx=Math.abs(x1-x0),dy=Math.abs(y1-y0),sx=x0<x1?1:-1,sy=y0<y1?1:-1,e=dx-dy,x=x0,y=y0;
    while(x!==x1||y!==y1){const e2=2*e;if(e2>-dy){e-=dy;x+=sx;}if(e2<dx){e+=dx;y+=sy;}if((x!==x1||y!==y1)&&opaque(x,y))return false;}return true;};
  const gs0=G.map(g=>{const n=g.path.length;return{i:0,d:1,fx:n>1?sgn(g.path[1][0]-g.path[0][0]):0,fy:n>1?sgn(g.path[1][1]-g.path[0][1]):1};});
  const mv=gs=>gs.map((g,k)=>{const P=G[k].path,n=P.length;g={...g};if(n<2)return g;let ni;
    if(G[k].mode==='loop')ni=(g.i+1)%n;else{ni=g.i+g.d;if(ni<0||ni>=n){g.d=-g.d;ni=g.i+g.d;}}
    g.fx=sgn(P[ni][0]-P[g.i][0]);g.fy=sgn(P[ni][1]-P[g.i][1]);g.i=ni;return g;});
  const seen=(x,y,gs)=>gs.some((g,k)=>{const p=G[k].path[g.i];if(p[0]===x&&p[1]===y)return true;
    const px=-g.fy,py=g.fx;for(let d=1;d<=3;d++){const w=d===1?0:1;for(let l=-w;l<=w;l++){
      const cx=p[0]+g.fx*d+px*l,cy=p[1]+g.fy*d+py*l;if(!opaque(cx,cy)&&los(p[0],p[1],cx,cy)&&cx===x&&cy===y)return true;}}return false;});
  const key=(x,y,gem,gs)=>x+','+y+','+gem+','+gs.map(g=>g.i+':'+g.d).join('|');
  const q=[{x:sx,y:sy,gem:false,gs:gs0,n:0}];const vis=new Set([key(sx,sy,false,gs0)]);
  for(let h=0;h<q.length;h++){const s=q[h];
    for(const [dx,dy] of [[0,0],[1,0],[-1,0],[0,1],[0,-1]]){
      const nx=s.x+dx,ny=s.y+dy;if((dx||dy)&&opaque(nx,ny))continue;
      const c=map[ny][nx];let gem=s.gem||c==='G';
      if(c==='E'&&gem)return s.n+1;
      const gs=mv(s.gs);if(seen(nx,ny,gs))continue;
      const k=key(nx,ny,gem,gs);if(vis.has(k))continue;vis.add(k);q.push({x:nx,y:ny,gem,gs,n:s.n+1});}}
  return -1;}
LEVELS.forEach((L,i)=>{const s=solve(L);console.log((i+1)+' '+L.name+' par='+L.par+' optimal='+s+(s<0?'  UNSOLVABLE':s!==L.par?'  (par mismatch)':'')); });
