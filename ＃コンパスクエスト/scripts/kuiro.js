function kuiroBattleStart(){
 document.documentElement.style.setProperty('--kuiroSet', "1");
 enemyHP=300*stageLevel;
 defaultEnemyHP=enemyHP;
 kuiroScreen.style.zIndex=0;
 kuiroAct1=1;
 enemyBack=1;
 granatScreen.style.zIndex=0;
 enemyFront=[65,70,75];
 document.documentElement.style.setProperty('--kuiroTanukiSet', "24%");
}

kuiroSpan=0;
kuiroSpan1=0;
kuiroSpan2=0;
kuiroSpan3=0;

function kuiroActA(){
 if(kuiroSpan>=3){
  kuiroSpan=0;
  kuiroSpan1=0;
  kuiroSpan2=0;
  kuiroSpan3=0;
 }
 kuiroAct2=1;
 if(sidePosi==0||sidePosi==30||sidePosi==60||sidePosi==90){
  if(!kuiroSpan1){
   kuiroAttack1();
   kuiroSpan1=1;
   kuiroSpan=kuiroSpan+1;
  }
  else if(!kuiroSpan2){
   kuiroAttack2();
   kuiroSpan2=1;
   kuiroSpan=kuiroSpan+1;
  }
  else if(!kuiroSpan3){
   kuiroAttack3();
   kuiroSpan3=1;
   kuiroSpan=kuiroSpan+1;
  }
 }
 else if(sidePosi==15||sidePosi==45||sidePosi==75){
  if(!kuiroSpan2){
   kuiroAttack2();
   kuiroSpan2=1;
   kuiroSpan=kuiroSpan+1;
  }
  else if(!kuiroSpan1){
   kuiroAttack1();
   kuiroSpan1=1;
   kuiroSpan=kuiroSpan+1;
  }
  else if(!kuiroSpan3){
   kuiroAttack3();
   kuiroSpan3=1;
   kuiroSpan=kuiroSpan+1;
  }
 }
 else{
  if(!kuiroSpan3){
   kuiroAttack3();
   kuiroSpan3=1;
   kuiroSpan=kuiroSpan+1;
  }
  else if(!kuiroSpan2){
   kuiroAttack2();
   kuiroSpan2=1;
   kuiroSpan=kuiroSpan+1;
  }
  else if(!kuiroSpan1){
   kuiroAttack1();
   kuiroSpan1=1;
   kuiroSpan=kuiroSpan+1;
  }
 }
}

function kuiroAttack1(){
 const kuiAt1a = document.getElementById("kuiroTanukiSet");
 kuiAt1a.classList.add('kuiroAttack1aAni');
 setTimeout(function(){
  document.documentElement.style.setProperty('--kuiroTanukiSet', "24%");
  kuiAt1a.classList.remove('kuiroAttack1aAni');
  const kuiAt1b = document.getElementById("kuiroBeam");
  kuiAt1b.classList.add('kuiroBeamaAni');
  setTimeout(function(){
   if(30<=sidePosi&&sidePosi<=60){getDamage(35);}
  },2000);
  setTimeout(function(){
  kuiAt1b.classList.remove('kuiroBeamaAni');
   kuiroAct2=0;
  },5000);
 },2000);
}

function kuiroAttack2(){
 const kuiAt1a = document.getElementById("kuiroTanukiSet");
 kuiAt1a.classList.add('kuiroAttack2aAni');
 setTimeout(function(){
  document.documentElement.style.setProperty('--kuiroTanukiSet', "-9%");
  kuiAt1a.classList.remove('kuiroAttack2aAni');
  const kuiAt1b = document.getElementById("kuiroBeam");
  kuiAt1b.classList.add('kuiroBeamaAni');
  setTimeout(function(){
   if(0<=sidePosi&&sidePosi<=25){getDamage(35);}
  },2000);
  setTimeout(function(){
  kuiAt1b.classList.remove('kuiroBeamaAni');
   kuiroAct2=0;
  },5000);
 },2000);
}

function kuiroAttack3(){
 const kuiAt1a = document.getElementById("kuiroTanukiSet");
 kuiAt1a.classList.add('kuiroAttack3aAni');
 setTimeout(function(){
   document.documentElement.style.setProperty('--kuiroTanukiSet', "57%");
  kuiAt1a.classList.remove('kuiroAttack3aAni');
  const kuiAt1b = document.getElementById("kuiroBeam");
  kuiAt1b.classList.add('kuiroBeamaAni');
  setTimeout(function(){
   if(65<=sidePosi&&sidePosi<=90){getDamage(35);}
  },2000);
  setTimeout(function(){
   kuiAt1b.classList.remove('kuiroBeamaAni');
   kuiroAct2=0;
  },5000);
 },2000);
}

kuiAt3d=String(70);

function kuiroActB(){
 kuiroAct3=1;
 if(Number(kuiAt3d)-Number(sidePosi)>=0){document.documentElement.style.setProperty('--kuiroDirection', 1);}
 else{document.documentElement.style.setProperty('--kuiroDirection', -1);}
 const kuiAt3e = document.getElementById("kuiroHitoSet");
 kuiAt3e.classList.add('kuiroHitoMoveAni');
 kuiAt3d=sidePosi;
 document.documentElement.style.setProperty('--kuiroHitoMoveAni', kuiAt3d+"%");
 setTimeout(function(){
  document.documentElement.style.setProperty('--kuiroHitoSet', kuiAt3d+"%");
  kuiAt3e.classList.remove('kuiroHitoMoveAni');
  enemyFront=[Number(kuiAt3d)-5,Number(kuiAt3d),Number(kuiAt3d)+5];
  
 if(Number(kuiAt3d)-Number(sidePosi)>=0){
  document.documentElement.style.setProperty('--kuiroDirection', 1);
  kuiAt3d=String(Number(kuiAt3d)-15);
 }
 else{
  document.documentElement.style.setProperty('--kuiroDirection', -1);
  kuiAt3d=String(Number(kuiAt3d)+15);
 }
  const kuiAt3a = document.getElementById("kuiroAta1");
  kuiAt3a.classList.add('kuiroAttack4aAni');
  const kuiAt3b = document.getElementById("kuiroAta2");
  kuiAt3b.classList.add('kuiroAttack4bAni');
  const kuiAt3c = document.getElementById("kuiroAta3");
  kuiAt3c.classList.add('kuiroAttack4cAni');
  setTimeout(function(){
   if(Number(kuiAt3d)-20<=Number(sidePosi)&&Number(sidePosi)<=Number(kuiAt3d)+15){getDamage(25);}
  },1000);
  setTimeout(function(){
   kuiAt3a.classList.remove('kuiroAttack4aAni');
   kuiAt3b.classList.remove('kuiroAttack4bAni');
   kuiAt3c.classList.remove('kuiroAttack4cAni');
   if(enemyHP>=defaultEnemyHP-(stageLevel*20)){kuiroAct3=0;}
   else{
    const kuiAt3a = document.getElementById("kuiroHeal");
    kuiAt3a.classList.add('kuiroFrashAni');
    setTimeout(function(){
     kuiAt3a.classList.remove('kuiroFrashAni');
     enemyHP=enemyHP+(stageLevel*20);
     enemyHPchangeHeal=enemyHP*46.5/defaultEnemyHP;
     enemyHPchangeHeal=String(enemyHPchangeHeal);
     const rootEnemyHPHeal = document.querySelector(':root');
     rootEnemyHPHeal.style.setProperty("--enemyHPbar", enemyHPchangeHeal+"%");
     kuiroAct3=0;
    },500);
   }
   
  },2500);
 },1000);
}

