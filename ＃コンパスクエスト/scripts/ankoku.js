function ankokuBattleStart(){
 document.documentElement.style.setProperty('--ankokuSet', "1");
 enemyHP=300*stageLevel;
 defaultEnemyHP=enemyHP;
 ankokuScreen.style.zIndex=0;
 ankokuAct1=1;
 enemyBack=1;
 granatScreen.style.zIndex=0;
 enemyFront.push=[];
 document.documentElement.style.setProperty('--ankokuTop', "38%");
 document.documentElement.style.setProperty('--ankokuLeft',"45%");
 ankokuAttackBuff=1;
}

ankokuSpan=0;
ankokuSpan1=0;
ankokuSpan2=0;
ankokuSpan3=0;

function ankokuAct(){console.log("ankokuSpan"+ankokuSpan);console.log("enemyBack"+enemyBack);
 if(ankokuSpan>=10){
  ankokuSpan=0;
 }
 ankokuAct2=1;
 if(ankokuSpan==0){
  ankokuAttack1();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==1){
  ankokuAttack2();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==2){
  ankokuAttack3();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==3){
  ankokuAttack4();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==4){
  ankokuAttack5();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==5){
  ankokuAttack1();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==6){
  ankokuAttack2();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==7){
  ankokuAttack3();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==8){
  ankokuAttack6();
  ankokuSpan=ankokuSpan+1;
 }
 else if(ankokuSpan==9){
  ankokuAttack5();
  ankokuSpan=ankokuSpan+1;
 }
}

function ankokuAttack1(){
 var myh1 = document.getElementById("ankokuImgBase");
 myh1.innerHTML = "<img src=item/暗黒騎士しゃがみ.png id=ankokuImg>";
 setTimeout(function(){
  var myh1 = document.getElementById("ankokuImgBase");
  myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
  ataPoiA=sidePosi;
  document.documentElement.style.setProperty('--ankokuAttackAAni', ataPoiA+"%");
  const ankokuAt1 = document.getElementById("ankokuImgBase");
  ankokuAt1.classList.add('ankokuAttackAAni');
  const ankokuAt2 = document.getElementById("ankokuBuff");
  ankokuAt2.classList.add('ankokuAttackAAni');
  setTimeout(function(){enemyBack=0;},500);
  setTimeout(function(){
   ankokuAt1.classList.remove('ankokuAttackAAni');
   document.documentElement.style.setProperty('--ankokuWidth', "30%");
   document.documentElement.style.setProperty('--ankokuTop', "65%");
   document.documentElement.style.setProperty('--ankokuLeft', String(Number(ataPoiA)-10)+"%");
   var myh1 = document.getElementById("ankokuImgBase");
   myh1.innerHTML = "<img src=item/暗黒騎士着地.png id=ankokuImg>";
   enemyFront=[Number(ataPoiA)-5,ataPoiA,Number(ataPoiA)+5];
   if(Number(ataPoiA)-10<=Number(sidePosi)&&Number(ataPoiA)+10>=Number(sidePosi)){getDamage(30*ankokuAttackBuff);}
   setTimeout(function(){
    var myh1 = document.getElementById("ankokuImgBase");
    myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
    ankokuAt2.classList.remove('ankokuAttackAAni');
    document.documentElement.style.setProperty('--ankokuWidth', "10%");
    document.documentElement.style.setProperty('--ankokuLeft', ataPoiA+"%");
    ankokuAct2=0;
   },1000);
  },1500);
 },500);
}

function ankokuAttack2(){
 var myh1 = document.getElementById("ankokuImgBase");
 myh1.innerHTML = "<img src=item/暗黒騎士しゃがみ.png id=ankokuImg>";
 setTimeout(function(){
  var myh1 = document.getElementById("ankokuImgBase");
  myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
  ataPoiB=sidePosi;
  document.documentElement.style.setProperty('--ankokuAttackBAni', ataPoiB+"%");
  const ankokuAt1 = document.getElementById("ankokuImgBase");
  ankokuAt1.classList.add('ankokuAttackBAni');
  const ankokuAt2 = document.getElementById("ankokuBuff");
  ankokuAt2.classList.add('ankokuAttackBAni');
  enemyFront=[];
  setTimeout(function(){
   ankokuAt1.classList.remove('ankokuAttackBAni');
   document.documentElement.style.setProperty('--ankokuWidth', "30%");
   document.documentElement.style.setProperty('--ankokuTop', "65%");
   document.documentElement.style.setProperty('--ankokuLeft', String(Number(ataPoiB)-10)+"%");
   var myh1 = document.getElementById("ankokuImgBase");
   myh1.innerHTML = "<img src=item/暗黒騎士着地.png id=ankokuImg>";
   enemyFront=[Number(ataPoiB)-5,ataPoiB,Number(ataPoiB)+5];
   if(Number(ataPoiB)-10<=Number(sidePosi)&&Number(ataPoiB)+10>=Number(sidePosi)){getDamage(30*ankokuAttackBuff);}
   setTimeout(function(){
    var myh1 = document.getElementById("ankokuImgBase");
    myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
    ankokuAt2.classList.remove('ankokuAttackBAni');
    document.documentElement.style.setProperty('--ankokuWidth', "10%");
    document.documentElement.style.setProperty('--ankokuLeft', ataPoiB+"%");
    ankokuAct2=0;
   },1000);
  },1500);
 },500);
}

function ankokuAttack3(){
 var myh1 = document.getElementById("ankokuImgBase");
 myh1.innerHTML = "<img src=item/暗黒騎士しゃがみ.png id=ankokuImg>";
 setTimeout(function(){
  var myh1 = document.getElementById("ankokuImgBase");
  myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
  const ankokuAt1 = document.getElementById("ankokuImgBase");
  ankokuAt1.classList.add('ankokuAttackCAni');
  const ankokuAt2 = document.getElementById("ankokuBuff");
  ankokuAt2.classList.add('ankokuAttackCAni');
  enemyFront=[];
  setTimeout(function(){
   ankokuAt1.classList.remove('ankokuAttackCAni');
   document.documentElement.style.setProperty('--ankokuWidth', "30%");
   document.documentElement.style.setProperty('--ankokuTop', "38%");
   document.documentElement.style.setProperty('--ankokuLeft',"35%");
   var myh1 = document.getElementById("ankokuImgBase");
   myh1.innerHTML = "<img src=item/暗黒騎士着地.png id=ankokuImg>";
   enemyBack=1;
   setTimeout(function(){
    var myh1 = document.getElementById("ankokuImgBase");
    myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
    ankokuAt2.classList.remove('ankokuAttackCAni');
    document.documentElement.style.setProperty('--ankokuWidth', "10%");
    document.documentElement.style.setProperty('--ankokuLeft', "45%");
    setTimeout(function(){
     ankokuAct2=0;
    },1000);
   },1000);
  },1500);
 },500);
}

function ankokuAttack4(){
 var myh1 = document.getElementById("ankokuImgBase");
 myh1.innerHTML = "<img src=item/暗黒騎士スキル.png id=ankokuImg>";
 setTimeout(function(){
  ankokuEffect.style.opacity=0.3;
  setTimeout(function(){
   ankokuEffect.style.opacity=0;
   ankokuBuff.style.opacity=0.8;
   ankokuAttackBuff=2*stageLevel;
   setTimeout(function(){
    var myh1 = document.getElementById("ankokuImgBase");
    myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
    setTimeout(function(){
     ankokuAct2=0;
    },1000);
    setTimeout(function(){
     ankokuAttackBuff=1;
     ankokuBuff.style.opacity=0;
    },15000);
   },500);
  },500);
 },1000);
}

function ankokuAttack5(){
 var myh1 = document.getElementById("ankokuImgBase");
 myh1.innerHTML = "<img src=item/暗黒騎士スキル.png id=ankokuImg>";
 setTimeout(function(){
  const ankokuAt1 = document.getElementById("ankokuCloudSet");
  ankokuAt1.classList.add('ankokuAttackDAni');
  setTimeout(function(){
   ankokuThunderSet.style.opacity=1;
   if(sidePosi==0||sidePosi==5||sidePosi==15||sidePosi==20||sidePosi==25||sidePosi==40||sidePosi==45||sidePosi==50||sidePosi==65||sidePosi==70||sidePosi==75||sidePosi==85||sidePosi==90){getDamage(30*ankokuAttackBuff);}
   setTimeout(function(){
    var myh1 = document.getElementById("ankokuImgBase");
    myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
    ankokuAt1.classList.remove('ankokuAttackDAni');
    ankokuThunderSet.style.opacity=0;
    setTimeout(function(){
     ankokuAct2=0;
    },1000);
   },1000);
  },1500);
 },1000);
}

function ankokuAttack6(){
 if(enemyHP>=defaultEnemyHP-(stageLevel*40)){ankokuAct2=0;}
 else{
  var myh1 = document.getElementById("ankokuImgBase");
  myh1.innerHTML = "<img src=item/暗黒騎士スキル.png id=ankokuImg>";
  setTimeout(function(){
   ankokuEffect.style.opacity=0.3;
   setTimeout(function(){
    ankokuEffect.style.opacity=0;
    ankokuHeal.style.opacity=0.5;
    setTimeout(function(){
     enemyHP=enemyHP+(stageLevel*40);
     enemyHPchangeHeal=enemyHP*46.5/defaultEnemyHP;
     enemyHPchangeHeal=String(enemyHPchangeHeal);
     const rootEnemyHPHeal = document.querySelector(':root');
     rootEnemyHPHeal.style.setProperty("--enemyHPbar", enemyHPchangeHeal+"%");
     setTimeout(function(){
      ankokuHeal.style.opacity=0;
      var myh1 = document.getElementById("ankokuImgBase");
      myh1.innerHTML = "<img src=item/暗黒騎士.png id=ankokuImg>";
      setTimeout(function(){
       ankokuAct2=0;
      },1000);
     },500);
    },500);
   },1000);
  },1000);
 }
}
