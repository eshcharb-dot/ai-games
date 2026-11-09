// Random level generator: node tools/lh-gen.js <seed> <count> <minPar> <maxPar> <guards>
const {solve}=require('./lh-solve.js');
let seed=+process.argv[2]||1;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
const N=+process.argv[3]||5,lo=+process.argv[4]||14,hi=+process.argv[5]||24,NG=+process.argv[6]||2;
const ri=n=>Math.floor(rnd()*n);const out=[];let tries=0;
while(out.length<N&&tries++<200000){
  const m=[];for(let y=0;y<9;y++){m.push([]);for(let x=0;x<6;x++)m[y].push(y===0||y===8||x===0||x===5?'#':'.');}
  const np=ri(4);for(let i=0;i<np;i++){const x=1+ri(4),y=2+ri(5);m[y][x]='P';}
  const nw=ri(3);for(let i=0;i<nw;i++){const x=1+ri(4),y=2+ri(5);if(m[y][x]==='.')m[y][x]='#';}
  const cells=[];for(let y=1;y<8;y++)for(let x=1;x<5;x++)if(m[y][x]==='.')cells.push([x,y]);
  const take=f=>{const c=cells.filter(f);if(!c.length)return null;const p=c[ri(c.length)];return p;};
  const t=take(c=>c[1]<=2),g=take(c=>c[1]>=5),e=take(c=>c[1]<=3&&(!t||c[0]!==t[0]||c[1]!==t[1]));
  if(!t||!g||!e)continue;m[t[1]][t[0]]='T';m[g[1]][g[0]]='G';m[e[1]][e[0]]='E';
  const guards=[];
  for(let k=0;k<NG;k++){
    const loop=rnd()<0.35;let path;
    if(loop){const x=1+ri(3),y=3+ri(3);path=[[x,y],[x+1,y],[x+1,y+1],[x,y+1]];}
    else if(rnd()<.5){const y=2+ri(5),x=1+ri(2),l=2+ri(3);path=[];for(let i=0;i<l&&x+i<5;i++)path.push([x+i,y]);}
    else{const x=1+ri(4),y=2+ri(3),l=2+ri(3);path=[];for(let i=0;i<l&&y+i<8;i++)path.push([x,y+i]);}
    if(path.some(([x,y])=>m[y][x]!=='.')){continue;}
    guards.push({path,mode:loop?'loop':'pp'});
  }
  if(guards.length<NG)continue;
  const L={map:m.map(r=>r.join('')),guards};const par=solve(L);
  if(par>=lo&&par<=hi){L.par=par;out.push(L);}
}
console.log(JSON.stringify(out));
