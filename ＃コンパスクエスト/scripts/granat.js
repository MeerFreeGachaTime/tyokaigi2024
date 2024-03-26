function granatBattleStart(){
 document.documentElement.style.setProperty('--granatSet', "1");
 enemyHP=250*stageLevel;
 defaultEnemyHP=enemyHP;
 granatScreen.style.zIndex=0;
 granatAct1=1;
 enemyBack=1;
 enemyFront=[];
}

granatSpan=0;
granatSpan1=0;
granatSpan2=0;
granatSpan3=0;
granatSpan4=0;

function granatAct(){
 if(granatSpan>=4){
  granatSpan=0;
  granatSpan1=0;
  granatSpan2=0;
  granatSpan3=0;
  granatSpan4=0;
 }
 granatAct2=1;
 if(sidePosi==0||sidePosi==30||sidePosi==60||sidePosi==90){console.log("granatSpan"+granatSpan);
  if(!granatSpan1){
   granatAttack1();
   granatSpan1=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan2){
   granatAttack2();
   granatSpan2=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan3){
   granatAttack3();
   granatSpan3=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan4){
   granatAttack4();
   granatSpan4=1;
   granatSpan=granatSpan+1;
  }
 }
 else if(sidePosi==15||sidePosi==45||sidePosi==75){
  if(!granatSpan2){
   granatAttack2();
   granatSpan2=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan1){
   granatAttack1();
   granatSpan1=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan3){
   granatAttack3();
   granatSpan3=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan4){
   granatAttack4();
   granatSpan4=1;
   granatSpan=granatSpan+1;
  }
 }
 else if(sidePosi==5||sidePosi==20||sidePosi==70||sidePosi==85){
  if(!granatSpan3){
   granatAttack3();
   granatSpan3=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan2){
   granatAttack2();
   granatSpan2=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan1){
   granatAttack1();
   granatSpan1=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan4){
   granatAttack4();
   granatSpan4=1;
   granatSpan=granatSpan+1;
  }
}
 else{
  if(!granatSpan4){
   granatAttack4();
   granatSpan4=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan2){
   granatAttack2();
   granatSpan2=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan3){
   granatAttack3();
   granatSpan3=1;
   granatSpan=granatSpan+1;
  }
  else if(!granatSpan1){
   granatAttack1();
   granatSpan1=1;
   granatSpan=granatSpan+1;
  }
 }
}

function granatAttack1(){
 const graAt1a = document.getElementById("granatIcicle1");
 graAt1a.classList.add('granatIcicleAni');
 const graAt1b = document.getElementById("granatIcicle2");
 graAt1b.classList.add('granatIcicleAni');
 const graAt1c = document.getElementById("granatIcicle3");
 graAt1c.classList.add('granatIcicleAni');
 const graAt1d = document.getElementById("granatIcicle4");
 graAt1d.classList.add('granatIcicleAni');
 const graAt1e = document.getElementById("granatIcicle5");
 graAt1e.classList.add('granatIcicleAni');
 const graAt1f = document.getElementById("granatA");
 graAt1f.classList.add('granatAta1aAni');
 const graAt1g = document.getElementById("granatB");
 graAt1g.classList.add('granatAta1bAni');
 setTimeout(function(){
  if(sidePosi==10||sidePosi==30||sidePosi==50||sidePosi==70||sidePosi==90){}
  else{getDamage(20);}
 },1500);
 setTimeout(function(){
  graAt1a.classList.remove("granatIcicleAni");
  graAt1b.classList.remove("granatIcicleAni");
  graAt1c.classList.remove("granatIcicleAni");
  graAt1d.classList.remove("granatIcicleAni");
  graAt1e.classList.remove("granatIcicleAni");
  graAt1f.classList.remove('granatAta1aAni');
  graAt1g.classList.remove('granatAta1bAni');
  granatAct2=0;
 },4000);
}

function granatAttack2(){
 const graAt2a = document.getElementById("granatIcicle6");
 graAt2a.classList.add('granatIcicleAni');
 const graAt2b = document.getElementById("granatIcicle7");
 graAt2b.classList.add('granatIcicleAni');
 const graAt2c = document.getElementById("granatIcicle8");
 graAt2c.classList.add('granatIcicleAni');
 const graAt2d = document.getElementById("granatIcicle9");
 graAt2d.classList.add('granatIcicleAni');
 const graAt2e = document.getElementById("granatIcicle10");
 graAt2e.classList.add('granatIcicleAni');
 const graAt2f = document.getElementById("granatA");
 graAt2f.classList.add('granatAta1aAni');
 const graAt2g = document.getElementById("granatB");
 graAt2g.classList.add('granatAta1bAni');
 setTimeout(function(){
  if(sidePosi==0||sidePosi==20||sidePosi==40||sidePosi==60||sidePosi==80){}
  else{getDamage(20);}
 },1500);
 setTimeout(function(){
  graAt2a.classList.remove("granatIcicleAni");
  graAt2b.classList.remove("granatIcicleAni");
  graAt2c.classList.remove("granatIcicleAni");
  graAt2d.classList.remove("granatIcicleAni");
  graAt2e.classList.remove("granatIcicleAni");
  graAt2f.classList.remove('granatAta1aAni');
  graAt2g.classList.remove('granatAta1bAni');
  granatAct2=0;
 },4000);
}

function granatAttack3(){
 var sidePosiN=Number(sidePosi);
 var attackPointN=16-5+(sidePosiN*0.68);
 var ataPoi=sidePosiN;
 document.documentElement.style.setProperty('--granatAta2Ani', attackPointN+"%");
 const graAt3a = document.getElementById("granatA");
 graAt3a.classList.add('granatAta2aAni');
 const graAt3b = document.getElementById("granatB");
 graAt3b.classList.add('granatAta2bAni');
 const graAt3c = document.getElementById("granatC");
 graAt3c.classList.add('granatAta2cAni');
 const graAt3d = document.getElementById("granatD");
 graAt3d.classList.add('granatAta2dAni');
 setTimeout(function(){enemyBack=0},2500);
 setTimeout(function(){enemyBack=1},4250);
 setTimeout(function(){
  enemyFront.push(ataPoi-5,ataPoi,ataPoi+5,ataPoi+10,ataPoi+15);
  setTimeout(function(){enemyFront=[];},2500);
  if(sidePosi==String(ataPoi-5)||sidePosi==String(ataPoi)||sidePosi==String(ataPoi+5)||sidePosi==String(ataPoi+10)||sidePosi==String(ataPoi+15)){getDamage(35);console.log("ataPoi"+ataPoi);}
 },2000);
 setTimeout(function(){
  graAt3a.classList.remove('granatAta2aAni');
  graAt3b.classList.remove('granatAta2bAni');
  graAt3c.classList.remove('granatAta2cAni');
  graAt3d.classList.remove('granatAta2dAni');
  granatAct2=0;
 },5000);
}

function granatAttack4(){
 var sidePosiN=Number(sidePosi);
 var attackPointN=16+2+(sidePosiN*0.68);
 var ataPoi=sidePosiN;
 document.documentElement.style.setProperty('--granatAta2Ani', attackPointN+"%");
 const graAt4a = document.getElementById("granatA");
 graAt4a.classList.add('granatAta4aAni');
 const graAt4b = document.getElementById("granatB");
 graAt4b.classList.add('granatAta4bAni');
 const graAt4c = document.getElementById("granatBullet");
 graAt4c.classList.add('granatAta4cAni');
 setTimeout(function(){
  if(sidePosi==String(ataPoi)||sidePosi==String(ataPoi+5)){getDamage(35);console.log("ataPoi"+ataPoi);}
 },1500);
 setTimeout(function(){
  graAt4a.classList.remove('granatAta4aAni');
  graAt4b.classList.remove('granatAta4bAni');
  graAt4c.classList.remove('granatAta4cAni');
  granatAct2=0;
 },2000);
}