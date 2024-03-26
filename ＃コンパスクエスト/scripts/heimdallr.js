function heimdallrBattleStart(){
 document.documentElement.style.setProperty('--heimdallrSet', "1");
 enemyHP=350*stageLevel;
 defaultEnemyHP=enemyHP;
 heimdallrScreen.style.zIndex=0;
 heimdallrAct1=1;
 enemyBack=0;
 granatScreen.style.zIndex=0;
 enemyFront=[55,60,65];
 document.documentElement.style.setProperty('--heimdallrBottom', "17.5%");
 document.documentElement.style.setProperty('--heimdallrLeft', "60%");
 document.documentElement.style.setProperty('--heimdallrDirection', "1");
 heiPosi=60;
}

heimdallrSpan=0;
heimdallrSpan1=0;
heimdallrSpan2=0;
heimdallrSpan3=0;

function heimdallrAct(){console.log("heimdallrSpan"+heimdallrSpan);console.log("enemyBack"+enemyBack);
 if(heimdallrSpan>=3){
  heimdallrSpan=0;
  heimdallrSpan1=0;
  heimdallrSpan2=0;
  heimdallrSpan3=0;
 }
 heimdallrAct2=1;
 if(sidePosi==0||sidePosi==30||sidePosi==60||sidePosi==90){
  if(!heimdallrSpan1){
   heimdallrAttack1();
   heimdallrSpan1=1;
   heimdallrSpan=heimdallrSpan+1;
  }
  else if(!heimdallrSpan2){
   heimdallrAttack2();
   heimdallrSpan2=1;
   heimdallrSpan=heimdallrSpan+1;
  }
  else if(!heimdallrSpan3){
   heimdallrAttack3();
   heimdallrSpan3=1;
   heimdallrSpan=heimdallrSpan+1;
  }
 }
 else if(sidePosi==15||sidePosi==45||sidePosi==75){
  if(!heimdallrSpan2){
   heimdallrAttack2();
   heimdallrSpan2=1;
   heimdallrSpan=heimdallrSpan+1;
  }
  else if(!heimdallrSpan1){
   heimdallrAttack1();
   heimdallrSpan1=1;
   heimdallrSpan=heimdallrSpan+1;
  }
  else if(!heimdallrSpan3){
   heimdallrAttack3();
   heimdallrSpan3=1;
   heimdallrSpan=heimdallrSpan+1;
  }
 }
 else{
  if(!heimdallrSpan3){
   heimdallrAttack3();
   heimdallrSpan3=1;
   heimdallrSpan=heimdallrSpan+1;
  }
  else if(!heimdallrSpan2){
   heimdallrAttack2();
   heimdallrSpan2=1;
   heimdallrSpan=heimdallrSpan+1;
  }
  else if(!heimdallrSpan1){
   heimdallrAttack1();
   heimdallrSpan1=1;
   heimdallrSpan=heimdallrSpan+1;
  }
 }
}

function heimdallrAttack1(){
 var myh1 = document.getElementById("heimdallrImgBase");
 myh1.innerHTML = "<img src=item/ヘイムダルスキル1.png id=heimdallrImg>";
 beforeHeiPosi=heiPosi;
 ataPoi=sidePosi;
 if(heiPosi>=ataPoi){
  document.documentElement.style.setProperty('--heimdallrDirection', "1");
  heiDire=1;
  ataPoi=Number(ataPoi)-5;
  if(ataPoi<=0){
   ataPoi=0;
  }
  heiAtaAw=heiPosi-Number(ataPoi);
  heiPosi=ataPoi+5;
 }
 else{
  document.documentElement.style.setProperty('--heimdallrDirection', "-1");
  heiDire=-1;
  ataPoi=Number(ataPoi)+5;
  if(ataPoi>=90){
   ataPoi=90;
  }
  heiAtaAw=Number(ataPoi)-heiPosi;
 }
 setTimeout(function(){
  document.documentElement.style.setProperty('--heimdallrAttackAleft', heiPosi+"%");
  document.documentElement.style.setProperty('--heimdallrAttackAwidth', heiAtaAw+"%");
  document.documentElement.style.setProperty('--heimdallrLeft', ataPoi+"%");
  enemyFront=[Number(ataPoi)-5,Number(ataPoi),Number(ataPoi)+5];
  if(heiDire==1){
   if(Number(ataPoi)<=Number(sidePosi)&&Number(beforeHeiPosi)>=Number(sidePosi)){getDamage(30);}
  }
  else{
   if(Number(ataPoi)>=Number(sidePosi)&&Number(beforeHeiPosi)<=Number(sidePosi)){getDamage(30);}
  }
  setTimeout(function(){
   document.documentElement.style.setProperty('--heimdallrAttackAwidth', "0%");
   var myh1 = document.getElementById("heimdallrImgBase");
   myh1.innerHTML = "<img src=item/ヘイムダル.png id=heimdallrImg>";
   heiPosi=ataPoi;
   heimdallrAct2=0;
  },500);
 },1000);
}

function heimdallrAttack2(){
 enemyFront=[Number(heiPosi)-5,Number(heiPosi),Number(heiPosi)+5];
 var myh1 = document.getElementById("heimdallrImgBase");
 myh1.innerHTML = "<img src=item/ヘイムダルスキル3.png id=heimdallrImg>";
 if(sidePosi<=heiPosi){
  document.documentElement.style.setProperty('--heimdallrDirection', "1");
  heiDire=1;
 }
 else{
  document.documentElement.style.setProperty('--heimdallrDirection', "-1");
  heiDire=-1;
 }
 setTimeout(function(){
  var myh1 = document.getElementById("heimdallrImgBase");
  myh1.innerHTML = "<img src=item/ヘイムダルスキル4.png id=heimdallrImg>";
  if(heiDire==1){
   document.documentElement.style.setProperty('--heimdallrWidth', "30%");
   document.documentElement.style.setProperty('--heimdallrLeft', String(Number(heiPosi)-20)+"%");
   if(Number(heiPosi)-20<=sidePosi&&Number(heiPosi)-5>=sidePosi){getDamage(20);}
  }
  else{
   document.documentElement.style.setProperty('--heimdallrWidth', "30%");
   if(Number(heiPosi)+20>=sidePosi&&Number(heiPosi)+5<=sidePosi){getDamage(20);}
  }
  setTimeout(function(){
   document.documentElement.style.setProperty('--heimdallrWidth', "10%");
   document.documentElement.style.setProperty('--heimdallrLeft', heiPosi+"%");
   var myh1 = document.getElementById("heimdallrImgBase");
   myh1.innerHTML = "<img src=item/ヘイムダル.png id=heimdallrImg>";
   setTimeout(function(){
    heimdallrAct2=0;
   },500);
  },1000);
 },500);
}

function heimdallrAttack3(){
 var myh1 = document.getElementById("heimdallrImgBase");
 myh1.innerHTML = "<img src=item/ヘイムダルスキル5.png id=heimdallrImg>";
 var hei1 = document.getElementById("heimdallrImgBase");
 hei1.classList.add("heimdallrAttackAAni");
 setTimeout(function(){
  enemyFront=[];
  enemyBack=1;
  heimdallrBeamSet.style.opacity=1;
  var hei2 = document.getElementById("heimdallrFanA");
  hei2.classList.add("heimdallrAttackBAni");
  var hei3 = document.getElementById("heimdallrFanB");
  hei3.classList.add("heimdallrAttackCAni");
  var hei4 = document.getElementById("heimdallrFanC");
  hei4.classList.add("heimdallrAttackDAni");
  var hei5 = document.getElementById("heimdallrFanD");
  hei5.classList.add("heimdallrAttackEAni");
  setTimeout(function(){
   document.documentElement.style.setProperty('--heimdallrBeam', "1%");
   if(sidePosi==10||sidePosi==15||sidePosi==25||sidePosi==30||sidePosi==35||sidePosi==55||sidePosi==60||sidePosi==75||sidePosi==80||sidePosi==85||sidePosi==90){getDamage(20);}
   setTimeout(function(){
    document.documentElement.style.setProperty('--heimdallrBeam', "0%");
    setTimeout(function(){
     hei2.classList.remove("heimdallrAttackBAni");
     hei3.classList.remove("heimdallrAttackCAni");
     hei4.classList.remove("heimdallrAttackDAni");
     hei5.classList.remove("heimdallrAttackEAni");
     heimdallrBeamSet.style.opacity=0;
     setTimeout(function(){
      enemyFront=[Number(heiPosi)-5,Number(heiPosi),Number(heiPosi)+5];
      enemyBack=0;
      hei1.classList.remove("heimdallrAttackAAni");
      heimdallrAct2=0;
     },1000);
    },1000);
   },1000);
  },2000);
 },1000);
}

