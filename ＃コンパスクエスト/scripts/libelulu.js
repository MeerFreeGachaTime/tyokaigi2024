function libeluluBattleStart(){
 document.documentElement.style.setProperty('--libeluluSet', "1");
 enemyHP=350*stageLevel;
 defaultEnemyHP=enemyHP;
 libeluluScreen.style.zIndex=0;
 libeluluAct1=1;
 enemyBack=0;
 granatScreen.style.zIndex=0;
 enemyFront.push(40,45,50,55);
}

libeluluSpan=0;
libeluluSpan1=0;
libeluluSpan2=0;
libeluluSpan3=0;

function libeluluAct(){console.log("libeluluSpan"+libeluluSpan);console.log("enemyBack"+enemyBack);
 if(libeluluSpan>=3){
  libeluluSpan=0;
  libeluluSpan1=0;
  libeluluSpan2=0;
  libeluluSpan3=0;
 }
 libeluluAct2=1;
 if(sidePosi==0||sidePosi==30||sidePosi==60||sidePosi==90){
  if(!libeluluSpan1){
   libeluluAttack1();
   libeluluSpan1=1;
   libeluluSpan=libeluluSpan+1;
  }
  else if(!libeluluSpan2){
   libeluluAttack2();
   libeluluSpan2=1;
   libeluluSpan=libeluluSpan+1;
  }
  else if(!libeluluSpan3){
   libeluluAttack3();
   libeluluSpan3=1;
   libeluluSpan=libeluluSpan+1;
  }
 }
 else if(sidePosi==15||sidePosi==45||sidePosi==75){
  if(!libeluluSpan2){
   libeluluAttack2();
   libeluluSpan2=1;
   libeluluSpan=libeluluSpan+1;
  }
  else if(!libeluluSpan1){
   libeluluAttack1();
   libeluluSpan1=1;
   libeluluSpan=libeluluSpan+1;
  }
  else if(!libeluluSpan3){
   libeluluAttack3();
   libeluluSpan3=1;
   libeluluSpan=libeluluSpan+1;
  }
 }
 else{
  if(!libeluluSpan3){
   libeluluAttack3();
   libeluluSpan3=1;
   libeluluSpan=libeluluSpan+1;
  }
  else if(!libeluluSpan2){
   libeluluAttack2();
   libeluluSpan2=1;
   libeluluSpan=libeluluSpan+1;
  }
  else if(!libeluluSpan1){
   libeluluAttack1();
   libeluluSpan1=1;
   libeluluSpan=libeluluSpan+1;
  }
 }
}

function libeluluAttack1(){
 const libAt2 = document.getElementById("libeluluFlash");
 libAt2.classList.add('libeluluFrashAni');
 setTimeout(function(){
  libeluluImg.style.opacity=0;
  enemyFront=[];
  setTimeout(function(){
   libAt2.classList.remove('libeluluFrashAni');
   document.documentElement.style.setProperty('--libeluluTop', "65%");
   document.documentElement.style.setProperty('--libeluluLeft', "45%");
   enemyFront.push(40,45,50,55);
   enemyBack=0;
   setTimeout(function(){
    libAt2.classList.add('libeluluFrashAni');
    setTimeout(function(){
     libeluluImg.style.opacity=1;
     setTimeout(function(){
      libAt2.classList.remove('libeluluFrashAni');
     },250);
    },500);
   },250)
  },250);
 },250);
 setTimeout(function(){
  const libAt1a = document.getElementById("libeluluAttackEffect1");
  libAt1a.classList.add('libeluluAttackEffect1Ani');
  setTimeout(function(){
   if(5<=sidePosi&&sidePosi<=85){getDamage(50);}
  },3000);
  setTimeout(function(){
   libAt1a.classList.remove('libeluluAttackEffect1Ani');
   libeluluAct2=0;
  },5000);
 },1500);
}

function libeluluAttack2(){
 const libAt2 = document.getElementById("libeluluFlash");
 libAt2.classList.add('libeluluFrashAni');
 setTimeout(function(){
  libeluluImg.style.opacity=0;
  enemyFront=[];
  setTimeout(function(){
   libAt2.classList.remove('libeluluFrashAni');
   document.documentElement.style.setProperty('--libeluluTop', "40%");
   document.documentElement.style.setProperty('--libeluluLeft', "45%");
   enemyBack=1;
   setTimeout(function(){
    libAt2.classList.add('libeluluFrashAni');
    setTimeout(function(){
     libeluluImg.style.opacity=1;
     setTimeout(function(){
      libAt2.classList.remove('libeluluFrashAni');
     },250);
    },500);
   },250)
  },250);
 },250);
 setTimeout(function(){
  const libAt2a = document.getElementById("libeluluAttackEffect2a");
  libAt2a.classList.add('libeluluAttackEffect2aAni');
  const libAt2b = document.getElementById("libeluluAttackEffect2b");
  libAt2b.classList.add('libeluluAttackEffect2bAni');
  const libAt2c = document.getElementById("libeluluAttackEffect2c");
  libAt2c.classList.add('libeluluAttackEffect2cAni');
  const libAt2d = document.getElementById("libeluluAttackEffect2d");
  libAt2d.classList.add('libeluluAttackEffect2dAni');
  const libAt2e = document.getElementById("libeluluAttackEffect2e");
  libAt2e.classList.add('libeluluAttackEffect2eAni');
  const libAt2f = document.getElementById("libeluluAttackEffect2f");
  libAt2f.classList.add('libeluluAttackEffect2fAni');
  setTimeout(function(){
   var attackPoint1=sidePosi;var ataPoiN1=Number(attackPoint1);
   document.documentElement.style.setProperty('--libeluluAttackEffect2aAni', attackPoint1+"%");
   setTimeout(function(){
    if(sidePosi==String(ataPoiN1-5)||sidePosi==String(ataPoiN1)||sidePosi==String(ataPoiN1+5)){getDamage(20);}
   },250);
  },1500);
   setTimeout(function(){
   var attackPoint2=String(Number(sidePosi)+10);var ataPoiN2=Number(attackPoint2);
   document.documentElement.style.setProperty('--libeluluAttackEffect2bAni', attackPoint2+"%");
   setTimeout(function(){
    if(sidePosi==String(ataPoiN2-5)||sidePosi==String(ataPoiN2)||sidePosi==String(ataPoiN2+5)){getDamage(20);}
   },250);
  },1750);
    setTimeout(function(){
   var attackPoint3=String(Number(sidePosi)-10);var ataPoiN3=Number(attackPoint3);
   document.documentElement.style.setProperty('--libeluluAttackEffect2cAni', attackPoint3+"%");
   setTimeout(function(){
    if(sidePosi==String(ataPoiN3-5)||sidePosi==String(ataPoiN3)||sidePosi==String(ataPoiN3+5)){getDamage(20);}
   },250);
  },2000);
  setTimeout(function(){
   var attackPoint4=sidePosi;var ataPoiN4=Number(attackPoint4);
   document.documentElement.style.setProperty('--libeluluAttackEffect2dAni', attackPoint4+"%");
   setTimeout(function(){
    if(sidePosi==String(ataPoiN4-5)||sidePosi==String(ataPoiN4)||sidePosi==String(ataPoiN4+5)){getDamage(20);}
   },250);
  },2250);
  setTimeout(function(){
   var attackPoint5=String(Number(sidePosi)-10);var ataPoiN5=Number(attackPoint5);
   document.documentElement.style.setProperty('--libeluluAttackEffect2eAni', attackPoint5+"%");
   setTimeout(function(){
    if(sidePosi==String(ataPoiN5-5)||sidePosi==String(ataPoiN5)||sidePosi==String(ataPoiN5+5)){getDamage(20);}
   },250);
  },2500);
  setTimeout(function(){
   var attackPoint6=String(Number(sidePosi)+10);var ataPoiN6=Number(attackPoint6);
   document.documentElement.style.setProperty('--libeluluAttackEffect2fAni', attackPoint6+"%");
   setTimeout(function(){
    if(sidePosi==String(ataPoiN6-5)||sidePosi==String(ataPoiN6)||sidePosi==String(ataPoiN6+5)){getDamage(20);}
   },250);
  },2500);
  setTimeout(function(){
   libAt2a.classList.remove('libeluluAttackEffect2aAni');
   libAt2b.classList.remove('libeluluAttackEffect2bAni');
   libAt2c.classList.remove('libeluluAttackEffect2cAni');
   libAt2d.classList.remove('libeluluAttackEffect2dAni');
   libAt2e.classList.remove('libeluluAttackEffect2eAni');
   libAt2f.classList.remove('libeluluAttackEffect2fAni');
   libeluluAct2=0;
  },4000);
 },1500);
}

function libeluluAttack3(){
var libeluluDirection=-1;

 const libAt2 = document.getElementById("libeluluFlash");
 libAt2.classList.add('libeluluFrashAni');
 setTimeout(function(){
  libeluluImg.style.opacity=0;
  enemyFront=[];
  setTimeout(function(){
   libAt2.classList.remove('libeluluFrashAni');
   document.documentElement.style.setProperty('--libeluluTop', "65%");
   if(sidePosi<=45){document.documentElement.style.setProperty('--libeluluLeft', "80%");enemyFront.push(75,80,85,90);libeluluDirection=0;}
   else            {document.documentElement.style.setProperty('--libeluluLeft', "10%");enemyFront.push( 5,10,15,20);libeluluDirection=1;}
   enemyBack=0;
   setTimeout(function(){
    libAt2.classList.add('libeluluFrashAni');
    setTimeout(function(){
     libeluluImg.style.opacity=1;
     setTimeout(function(){
      libAt2.classList.remove('libeluluFrashAni');
     },250);
    },500);
   },250)
  },250);
 },250);
 setTimeout(function(){
  if(libeluluDirection==0){
   document.documentElement.style.setProperty('--libeluluDirection', "-1");
   document.documentElement.style.setProperty('--libeluluAttackEffect3', "0%");
  }
  else{
   document.documentElement.style.setProperty('--libeluluDirection', "1");
   document.documentElement.style.setProperty('--libeluluAttackEffect3', "20%");
  }
  var myh1 = document.getElementById("libeluluImgBase");
  myh1.innerHTML = "<img src=item/リベルル横.png id=libeluluImg>";
  const libAt3 = document.getElementById("libeluluAttackEffect3");
  libAt3.classList.add('libeluluAttackEffect3Ani');
  setTimeout(function(){
   if(libeluluDirection==0){
    if(sidePosi>=0&&sidePosi<=75){getDamage(50);}
   }
   else{
    if(sidePosi>=15&&sidePosi<=90){getDamage(50);}
   }
  },1000);
  setTimeout(function(){
   libAt3.classList.remove('libeluluAttackEffect3Ani');
   setTimeout(function(){
    myh1.innerHTML = "<img src=item/リベルル.png id=libeluluImg><div id=libeluluFlash></div>";
    libeluluAct2=0;
   },500);
  },3000);
 },2500);
}

