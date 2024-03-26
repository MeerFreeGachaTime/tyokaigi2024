function yuraraBattleStart(){
 document.documentElement.style.setProperty('--yuraraSet', "1");
 enemyHP=250*stageLevel;
 defaultEnemyHP=enemyHP;
 yuraraScreen.style.zIndex=0;
 yuraraAct1=1;
 enemyBack=0;
 granatScreen.style.zIndex=0;
 enemyFront.push(40,45,50,55);
}

yuraraSpan=0;
yuraraSpan1=0;
yuraraSpan2=0;
yuraraSpan3=0;

function yuraraAct(){console.log("yuraraSpan"+yuraraSpan);console.log("enemyBack"+enemyBack);
 if(yuraraSpan>=3){
  yuraraSpan=0;
  yuraraSpan1=0;
  yuraraSpan2=0;
  yuraraSpan3=0;
 }
 yuraraAct2=1;
 if(sidePosi==0||sidePosi==30||sidePosi==60||sidePosi==90){
  if(!yuraraSpan1){
   yuraraAttack1();
   yuraraSpan1=1;
   yuraraSpan=yuraraSpan+1;
  }
  else if(!yuraraSpan2){
   yuraraAttack2();
   yuraraSpan2=1;
   yuraraSpan=yuraraSpan+1;
  }
  else if(!yuraraSpan3){
   yuraraAttack3();
   yuraraSpan3=1;
   yuraraSpan=yuraraSpan+1;
  }
 }
 else if(sidePosi==15||sidePosi==45||sidePosi==75){
  if(!yuraraSpan2){
   yuraraAttack2();
   yuraraSpan2=1;
   yuraraSpan=yuraraSpan+1;
  }
  else if(!yuraraSpan1){
   yuraraAttack1();
   yuraraSpan1=1;
   yuraraSpan=yuraraSpan+1;
  }
  else if(!yuraraSpan3){
   yuraraAttack3();
   yuraraSpan3=1;
   yuraraSpan=yuraraSpan+1;
  }
 }
 else{
  if(!yuraraSpan3){
   yuraraAttack3();
   yuraraSpan3=1;
   yuraraSpan=yuraraSpan+1;
  }
  else if(!yuraraSpan2){
   yuraraAttack2();
   yuraraSpan2=1;
   yuraraSpan=yuraraSpan+1;
  }
  else if(!yuraraSpan1){
   yuraraAttack1();
   yuraraSpan1=1;
   yuraraSpan=yuraraSpan+1;
  }
 }
}

function yuraraAttack1(){
 const yurAt2 = document.getElementById("yuraraFlash");
 yurAt2.classList.add('libeluluFrashAni');
 setTimeout(function(){
  yuraraImg.style.opacity=0;
  enemyFront=[];
  setTimeout(function(){
   yurAt2.classList.remove('libeluluFrashAni');
   document.documentElement.style.setProperty('--yuraraTop', "65%");
   document.documentElement.style.setProperty('--yuraraLeft', "45%");
   enemyFront.push(40,45,50,55);
   enemyBack=0;
   setTimeout(function(){
    yurAt2.classList.add('libeluluFrashAni');
    setTimeout(function(){
     yuraraImg.style.opacity=1;
     setTimeout(function(){
      yurAt2.classList.remove('libeluluFrashAni');
     },250);
    },500);
   },250)
  },250);
 },250);
 setTimeout(function(){
  const yurAt1a = document.getElementById("yuraraAttack2");
  yurAt1a.classList.add('yuraraAttack2Ani');
  const yurAt1b = document.getElementById("yuraraAttack3");
  yurAt1b.classList.add('yuraraAttack3Ani');
  const yurAt1c = document.getElementById("yuraraAttack4");
  yurAt1c.classList.add('yuraraAttack4Ani');
  const yurAt1d = document.getElementById("yuraraAttack5");
  yurAt1d.classList.add('yuraraAttack5Ani');
  setTimeout(function(){
   if(sidePosi==5||sidePosi==10||sidePosi==25||sidePosi==30||sidePosi==60||sidePosi==65||sidePosi==80||sidePosi==85){getDamage(30);}
  },1000);
  setTimeout(function(){
   yurAt1a.classList.remove('yuraraAttack2Ani');
   yurAt1b.classList.remove('yuraraAttack3Ani');
   yurAt1c.classList.remove('yuraraAttack4Ani');
   yurAt1d.classList.remove('yuraraAttack5Ani');
   yuraraAct2=0;
  },3000);
 },1500);
}

function yuraraAttack2(){
 const yurAt2 = document.getElementById("yuraraFlash");
 yurAt2.classList.add('libeluluFrashAni');
 setTimeout(function(){
  yuraraImg.style.opacity=0;
  enemyFront=[];
  setTimeout(function(){
   yurAt2.classList.remove('libeluluFrashAni');
   document.documentElement.style.setProperty('--yuraraTop', "40%");
   document.documentElement.style.setProperty('--yuraraLeft', "45%");
   enemyBack=1;
   setTimeout(function(){
    yurAt2.classList.add('libeluluFrashAni');
    setTimeout(function(){
     yuraraImg.style.opacity=1;
     setTimeout(function(){
      yurAt2.classList.remove('libeluluFrashAni');
     },250);
    },500);
   },250)
  },250);
 },250);
 setTimeout(function(){
  setTimeout(function(){
   const yurAt2a = document.getElementById("yuraraParturitionFlash1");
   yurAt2a.classList.add('libeluluFrashAni');
   const yurAt2b = document.getElementById("yuraraParturitionFlash2");
   yurAt2b.classList.add('libeluluFrashAni');
   setTimeout(function(){
    yuraraParturition1.style.opacity=1;
    yuraraParturition2.style.opacity=1;
    setTimeout(function(){
     yurAt2a.classList.remove('libeluluFrashAni');
     yurAt2b.classList.remove('libeluluFrashAni');
     setTimeout(function(){
      if(sidePosi<=25){document.documentElement.style.setProperty('--yuraraParturitionBase1', "-1");}
      else{document.documentElement.style.setProperty('--yuraraParturitionBase1', "1");}
      if(sidePosi>=65){document.documentElement.style.setProperty('--yuraraParturitionBase1', "1");}
      else{document.documentElement.style.setProperty('--yuraraParturitionBase2', "-1");}
      var myh1 = document.getElementById("yuraraParturitionBase1");
      myh1.innerHTML = "<img src=item/ゆらら分身.png id=yuraraParturition1>";
      var myh1 = document.getElementById("yuraraParturitionBase2");
      myh1.innerHTML = "<img src=item/ゆらら分身.png id=yuraraParturition2>";
      yuraraParturition1.style.opacity=1;
      yuraraParturition2.style.opacity=1;
      ataPoi=sidePosi;
      document.documentElement.style.setProperty('--yuraraParturition1Ani', ataPoi+"%");
      const yurAt2c = document.getElementById("yuraraParturitionBase1");
      yurAt2c.classList.add('yuraraParturition1Ani');
      const yurAt2d = document.getElementById("yuraraParturitionBase2");
      yurAt2d.classList.add('yuraraParturition2Ani');
      setTimeout(function(){
       if(sidePosi==ataPoi||sidePosi==String(Number(ataPoi)-5)||sidePosi==String(Number(ataPoi)+5)){getDamage(40);}
       yurAt2c.classList.remove('yuraraParturition1Ani');
       yurAt2d.classList.remove('yuraraParturition2Ani');
       yuraraParturition1.style.opacity=0;
       yuraraParturition2.style.opacity=0;
       var myh1 = document.getElementById("yuraraParturitionBase1");
       myh1.innerHTML = "<img src=item/ゆらら.png id=yuraraParturition1><img src=item/ゆらら煙幕.png id=yuraraParturitionFlash1>";
       var myh1 = document.getElementById("yuraraParturitionBase2");
       myh1.innerHTML = "<img src=item/ゆらら.png id=yuraraParturition2><img src=item/ゆらら煙幕.png id=yuraraParturitionFlash2>";
       yuraraAct2=0;
      },1000);
     },1000);
    },250);
   },250);
  },500);
 },1500);
}

function yuraraAttack3(){
var yuraraDirection=-1;

 const yurAt2 = document.getElementById("yuraraFlash");
 yurAt2.classList.add('libeluluFrashAni');
 setTimeout(function(){
  yuraraImg.style.opacity=0;
  enemyFront=[];
  setTimeout(function(){
   ataPoi=sidePosi;
   yurAt2.classList.remove('libeluluFrashAni');
   document.documentElement.style.setProperty('--yuraraTop', "65%");
   document.documentElement.style.setProperty('--yuraraLeft', ataPoi+"%");
   enemyFront.push(Number(ataPoi)-5,ataPoi,Number(ataPoi)+5,Number(ataPoi)+10);
   enemyBack=0;
   setTimeout(function(){
    yurAt2.classList.add('libeluluFrashAni');
    setTimeout(function(){
     yuraraImg.style.opacity=1;
     setTimeout(function(){
      yurAt2.classList.remove('libeluluFrashAni');
     },250);
    },500);
   },250)
  },250);
 },250);
 setTimeout(function(){
  if(ataPoi>=sidePosi){document.documentElement.style.setProperty('--yuraraDirection', "-1");ataPoi=String(Number(ataPoi)-10);}
  else{document.documentElement.style.setProperty('--yuraraDirection', "1");ataPoi=String(Number(ataPoi)+10);}
  var myh1 = document.getElementById("yuraraImgBase");
  myh1.innerHTML = "<img src=item/ゆらら横.png id=yuraraImg><img src=item/ゆららエフェクト1.png id=yuraraAttack1>";
  if(sidePosi==String(Number(ataPoi)-5)||sidePosi==String(Number(ataPoi)+5)||sidePosi==ataPoi){getDamage(30);}
   setTimeout(function(){
    myh1.innerHTML = "<img src=item/ゆらら.png id=yuraraImg><img src=item/ゆらら煙幕.png id=yuraraFlash>";
    setTimeout(function(){
     yuraraAct2=0;
    },500);
   },500);
 },2500);
}

