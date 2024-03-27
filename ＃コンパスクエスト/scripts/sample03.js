


phase=0;
spSet=0;
rightOn=0;
leftOn=0;
attackerOn=0;
gunnerOn=0;
tankOn=0;
walk=0;
sidePosiN=0;
guard=0;
direction=1;
skillHold=0;
SkillCheck=0;
NowScreen="home";
levelBorder=-10;
stageLevel=1;
selectedStage="mekahan";
selectingRole="sprinter";
spSet="atari";
atSet="noho";
guSet="lyrica";
taSet="justice";

justiceSkill1Check=0;
aliceSkill1Check=0;

let heros={
   "atari"     :{usable:1,exp:0,level:1,name:"十文字アタリ"        ,lv1:"十文字アタリ"        ,lv3:"thirteen"},
   "justice"   :{usable:1,exp:0,level:1,name:"ジャスティス"        ,lv1:"多層型ヘキサバリア"  ,lv3:"pororotcho"},
   "lyrica"    :{usable:1,exp:0,level:1,name:"リリカ"              ,lv1:"ドリーム☆バキューン",lv3:"istaqa"},
   "noho"      :{usable:1,exp:0,level:1,name:"双挽乃保"            ,lv1:"ギャリギャリ"        ,lv3:"alice"},
   "tadaomi"   :{usable:1,exp:0,level:1,name:"桜華忠臣"            ,lv1:"遠慮なく死ぬがいい！",lv3:"gustaf"},
   "jeanne"    :{usable:1,exp:0,level:1,name:"ジャンヌ　ダルク"    ,lv1:"聖女の祝福"          ,lv3:"megmeg"},
   "marcos"    :{usable:1,exp:0,level:1,name:"マルコス55"          ,lv1:"スーパーニート"      ,lv3:"dragon"},
   "luciano"   :{usable:1,exp:0,level:1,name:"ルチアーノ"          ,lv1:"死神の舞踏"          ,lv3:"maria"},
   "voidoll"   :{usable:1,exp:0,level:1,name:"Voidoll"             ,lv1:"Voidoll"             ,lv3:"bugdoll"},
   "matoi"     :{usable:1,exp:0,level:1,name:"深川まとい"          ,lv1:"深川印の新型火筒"    ,lv3:"ignis"},
   "gustaf"    :{usable:0,exp:0,level:1,name:"グスタフ　ハイドリヒ",lv1:"禁忌の波動"          ,lv3:"null"},
   "nikola"    :{usable:0,exp:0,level:1,name:"二コラ　テスラ"      ,lv1:"二コラ　テスラ"      ,lv3:"null"},
   "violetta"  :{usable:0,exp:0,level:1,name:"ヴィオレッタ"        ,lv1:"ご声援に心より感謝を",lv3:"null"},
   "coclico"   :{usable:0,exp:0,level:1,name:"コクリコ"            ,lv1:"コクリコ"            ,lv3:"null"},
   "maria"     :{usable:0,exp:0,level:1,name:"マリア"              ,lv1:"セルピエンテ バイレ" ,lv3:"null"},
   "adam"      :{usable:0,exp:0,level:1,name:"アダム　ユーリエフ"  ,lv1:"カラドボルク"        ,lv3:"thorne"},
   "thirteen"  :{usable:0,exp:0,level:1,name:"13"                  ,lv1:"堕天変貌"            ,lv3:"null"},
   "yusha"     :{usable:0,exp:0,level:1,name:"かけだし勇者"        ,lv1:"ジャンプ"            ,lv3:"GBG"},
   "megmeg"    :{usable:0,exp:0,level:1,name:"メグメグ"            ,lv1:"ばっちーのショードク",lv3:"null"},
   "istaqa"    :{usable:0,exp:0,level:1,name:"イスタカ"            ,lv1:"塵滅の天撃"          ,lv3:"null"},
   "kirara"    :{usable:0,exp:0,level:1,name:"輝龍院きらら"        ,lv1:"火遁・戒天炎龍召喚"  ,lv3:"nikola"},
   "pororotcho":{usable:0,exp:0,level:1,name:"ポロロッチョ"        ,lv1:"ワテクシは美の化身！",lv3:"null"},
   "thorne"    :{usable:0,exp:0,level:1,name:"ソーン　ユーリエフ"  ,lv1:"リオート・メーチ"    ,lv3:"null"},
   "delmin"    :{usable:0,exp:0,level:1,name:"デルミン"            ,lv1:"デルミンしゅーと"    ,lv3:"null"},
   "thomas"    :{usable:0,exp:0,level:1,name:"トマス"              ,lv1:"レンタルトランク"    ,lv3:"null"},
   "layer"     :{usable:0,exp:0,level:1,name:"零夜"                ,lv1:"零夜"                ,lv3:"null"},
   "luluca"    :{usable:0,exp:0,level:1,name:"ルルカ"              ,lv1:"ドリーム☆ズキューン",lv3:"violetta"},
   "pierre"    :{usable:0,exp:0,level:1,name:"ピエール77世"        ,lv1:"ピエール77世"        ,lv3:"null"},
   "amairo"    :{usable:0,exp:0,level:1,name:"狐ヶ咲甘色"          ,lv1:"甘色一閃"            ,lv3:"coclico"},
   "nidhoggr"  :{usable:0,exp:0,level:1,name:"HM-WA100ニーズヘッグ",lv1:"ラグナロク"          ,lv3:"pierre"},
   "GBG"       :{usable:0,exp:0,level:1,name:"GBガール"            ,lv1:"超重力子砲"          ,lv3:"null"},
   "alice"     :{usable:0,exp:0,level:1,name:"青春アリス"          ,lv1:"不思議のトランプ"    ,lv3:"null"},
   "ignis"     :{usable:0,exp:0,level:1,name:"イグニス"            ,lv1:"ブチ切れたぜ"        ,lv3:"null"},
   "rinne"     :{usable:0,exp:0,level:1,name:"糸廻輪廻"            ,lv1:"操糸操術 Ж 八方画策",lv3:"null"},
   "bugdoll"   :{usable:0,exp:0,level:1,name:"Bugdoll"             ,lv1:"イレギュラーウィング",lv3:"null"},
   "stellea"   :{usable:0,exp:0,level:1,name:"ステリア"            ,lv1:"華槍ブリムラ"        ,lv3:"lovey"},
   "lovey"     :{usable:0,exp:0,level:1,name:"ラヴィ"              ,lv1:"チャーミング・キス♂",lv3:"null"},
   "al"        :{usable:0,exp:0,level:1,name:"アル"                ,lv1:"アル"                ,lv3:"null"},
   "dragon"    :{usable:0,exp:0,level:1,name:"ぶれいずどらごん"    ,lv1:"ほのおのいき"        ,lv3:"null"},
   "nanigashi" :{usable:0,exp:0,level:1,name:"某"                  ,lv1:"某"                  ,lv3:"thomas"},
   "cusith"    :{usable:0,exp:0,level:1,name:"クー・シー"          ,lv1:"ワープニャーク"      ,lv3:"null"},
   "amister"   :{usable:0,exp:0,level:1,name:"アミスター"          ,lv1:"聖王盾トルトゥーガ"  ,lv3:"null"}
  };

let items={
    "BM"        :{name:"BM"                ,num:5000,recipe:0,made:1,sentence:"ショップで利用可能"      ,value:0},
    "bravery"   :{name:"勇気の欠片"        ,num:0 ,recipe:0,made:1,sentence:"素材"                    ,value:100},
    "aloneness" :{name:"孤独の欠片"        ,num:0 ,recipe:0,made:1,sentence:"素材"                    ,value:100},
    "love"      :{name:"愛の欠片"          ,num:0 ,recipe:0,made:1,sentence:"素材"                    ,value:100},
    "justice"   :{name:"正義の欠片"        ,num:3 ,recipe:0,made:1,sentence:"素材"                    ,value:100},
    "junk"      :{name:"ジャンクパーツ"    ,num:0 ,recipe:0,made:1,sentence:"レア素材"                ,value:1000},
    "seed"      :{name:"不思議な種"        ,num:0 ,recipe:0,made:1,sentence:"レア素材"                ,value:1000},
    "wand"      :{name:"汎用魔法杖"        ,num:1 ,recipe:0,made:1,sentence:"レア素材"                ,value:1000},
    "blade"     :{name:"上質な刃"          ,num:0 ,recipe:0,made:1,sentence:"レア素材"                ,value:1000},
    "cloth"     :{name:"頑丈な布"        ,num:0 ,recipe:0,made:1,sentence:"レア素材"                ,value:500},
    "bento"     :{name:"美味しいお弁当"    ,num:0 ,recipe:0,made:1,sentence:"レア素材"                ,value:500},
    "shield"    :{name:"聖王盾トルトゥーガ",num:0 ,recipe:1,made:0,sentence:"クラフトでアミスター解放",value:0   ,materialA:"justice"  ,Anum:3,materialB:"wand"     ,Bnum:1},
    "nyark"     :{name:"≡NYARK≡"         ,num:0 ,recipe:1,made:0,sentence:"クラフトでクー・シー解放",value:0   ,materialA:"love"     ,Anum:3,materialB:"junk"     ,Bnum:1},
    "sword"     :{name:"呪われた宝剣"      ,num:0 ,recipe:1,made:0,sentence:"クラフトでアル解放"      ,value:0   ,materialA:"aloneness",Anum:3,materialB:"blade"    ,Bnum:1},
    "eiwaz"     :{name:"天馬エイワズ"      ,num:0 ,recipe:1,made:0,sentence:"クラフトで零夜解放"      ,value:0   ,materialA:"bravery"  ,Anum:3,materialB:"seed"     ,Bnum:1},
    "usataro"   :{name:"危険なあみぐるみ"  ,num:0 ,recipe:1,made:0,sentence:"クラフトで輪廻解放"      ,value:0   ,materialA:"aloneness",Anum:3,materialB:"cloth",Bnum:1},
    "onigiri"   :{name:"オニギリクママン"  ,num:0 ,recipe:1,made:0,sentence:"クラフトでデルミン解放"  ,value:0   ,materialA:"bravery"  ,Anum:3,materialB:"bento"    ,Bnum:1}
    };

/*if(!localStorage.getItem('atariUsable')){}//     保存
else{localLoad();}*/


stageArray=["mekahan","granat","libelulu","kuiro","yurara","cerberus","ankoku","heimdallr"];

enemyFront=[];
enemyBack=0;

attackBuff=1;
defendBuff=0;
tankKeep=0;

mekahanAct1=0;
mekahanAct2=0;

mekahanSpan1=0;
mekahanSpan2=0;
mekahanSpan3=0;
mekahanSpan4=0;
mekahanSpan5=0;
miniMekahanLife1=0;
miniMekahanLife2=0;

granatAct1=0;
granatAct2=0;

libeluluAct1=0;
libeluluAct2=0;

kuiroAct1=0;
kuiroAct2=0;
kuiroAct3=0;

yuraraAct1=0;
yuraraAct2=0;

cerberusAct1=0;
cerberusAct2=0;

ankokuAct1=0;
ankokuAct2=0;

heimdallrAct1=0;
heimdallrAct2=0;



window.addEventListener('load', (event) => {console.log("ver.2");


  // ブラウザのウインドウサイズを取得する
  var windowH = window.innerHeight*0.95;

  windowW=windowH*1.817;
  var windowL = String((window.innerWidth-windowW)/2)+"px";
  windowLN=(window.innerWidth-windowW)/2;
  document.documentElement.style.setProperty('--titleBaseLeft', windowL);
  windowW=String(windowW);
  windowWN=windowH*1.817;
  var px = 'px';
  windowW = windowW.concat(px);
  document.documentElement.style.setProperty('--baseWidth', windowW);
  windowH=String(windowH);
  windowH = windowH.concat(px);
  document.documentElement.style.setProperty('--baseHeight', windowH);
  console.log(windowW);
  console.log(windowH);
  sidePosi=0;
  skill=0;
  
  
  document.body.addEventListener( "touchstart", function( event ) {
	var touchObject = event.changedTouches[0] ;
	startSidePosi = touchObject.pageX- windowLN;console.log(startSidePosi);console.log("X"+windowLN);
  } ) ;
  document.body.addEventListener( "touchmove", function( event ) {console.log("Xccc");
   if(startSidePosi<=windowWN*0.5){
    rightOn=0;
    leftOn=0;
	var touchObject = event.changedTouches[0] ;
	var moveSidePosi = touchObject.pageX- windowLN;console.log("start"+startSidePosi+",move"+moveSidePosi);
	if(moveSidePosi>=windowWN*0.08){rightOn=1;console.log("Xaaa");}
    else{leftOn=1;console.log("Xbbb");}
   }
  } ) ;
  document.body.addEventListener( "touchend", function( event ) {
	var touchObject = event.changedTouches[0] ;
    rightOn=0;
    leftOn=0;
  } ) ;


  // この位置で、HTML要素に対するaddEventListenerを処理する。
  addListener();
});

function disableScroll(event) {
  event.preventDefault();
}


function toStageSelect(){
 NowScreen="stageSelect";
 homeScreen.style.zIndex=-10;
 heroScreen.style.zIndex=-60;
 stageSelectScreen.style.zIndex=0;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;

 stageSelect(selectedStage);
}

function toHome(){
 NowScreen="home";
 localSave();
 homeScreen.style.zIndex=0;
 heroScreen.style.zIndex=-60;
 itemListScreen.style.zIndex=-60;
 craftScreen.style.zIndex=-60;
 shopScreen.style.zIndex=-60;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;
 gameOverScreen.style.zIndex=-60;
 var myh = document.getElementById("itemList");
 myh.innerHTML = " ";
 var myh = document.getElementById("craftList");
 myh.innerHTML = " ";
}

function toHero(){
 NowScreen="hero";
 homeScreen.style.zIndex=-10;
 heroScreen.style.zIndex=0;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;

 for(var elem in heros){
 
  if(heros[elem].usable==1){
   let node=document.createElement('span');
   node.setAttribute('id',elem+'StatusButton');
   var parentDiv = document.getElementById("heroList");
   parentDiv.appendChild(node);
   
   var myh = document.getElementById(elem+"StatusButton");
   myh.innerHTML = "<img src=item/"+elem+".png class=heroStatusIcon onclick=heroDetailCheck('"+elem+"') id="+elem+"StatusOpaButton>";
   
   let nodeStaOpa=document.createElement('style');
   nodeStaOpa.setAttribute('id',elem+'StatusStyle');
   var parentDiv = document.getElementById("heroList");
   parentDiv.appendChild(nodeStaOpa);
   
   var myh = document.getElementById(elem+'StatusStyle');
   myh.innerHTML = ":root{--"+elem+"StatusOpaButton:1;}#"+elem+"StatusOpaButton{opacity:var(--"+elem+"StatusOpaButton);}";
   
   
  var tag=elem+"StatusOpaButton";
  var dv=document.getElementById(tag);console.log();
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
 
   heroDetailCheck(elem);
  }
 }
}

function toItem(){
 NowScreen="item";
 homeScreen.style.zIndex=-10;
 heroScreen.style.zIndex=-60;
 itemListScreen.style.zIndex=0;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;
 for(var elem in items){
 
  if(items[elem].num>=1){
   let node=document.createElement('span');
   node.setAttribute('id',elem+'StatusItemButton');
   var parentDiv = document.getElementById("itemList");
   parentDiv.appendChild(node);
   
   var myh = document.getElementById(elem+"StatusItemButton");
   myh.innerHTML = "<img src=item/"+items[elem].name+".png class=itemStatusIcon onclick=itemDetailCheck('"+elem+"') id="+elem+"StatusOpaButton>";
   
   let nodeStaOpa=document.createElement('style');
   nodeStaOpa.setAttribute('id',elem+'StatusItemStyle');
   var parentDiv = document.getElementById("itemList");
   parentDiv.appendChild(nodeStaOpa);
   
   var myh = document.getElementById(elem+'StatusItemStyle');
   myh.innerHTML = ":root{--"+elem+"StatusOpaButton:1;}#"+elem+"StatusOpaButton{opacity:var(--"+elem+"StatusOpaButton);}";
   
   
  var tag=elem+"StatusOpaButton";
  var dv=document.getElementById(tag);console.log();
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
 
 
   itemDetailCheck(elem);
  }
 }
}

function heroDetailCheck(checkHero){
   var myh = document.getElementById("heroStatusDetail");
   myh.innerHTML = "<img src=item/"+checkHero+".png id=heroStatusDetailImg><div id=heroStatusDetailName>"+heros[checkHero].name+"</div><div id=heroStatusDetailLv>Level</div><div id=heroStatusDetailLvN>"+heros[checkHero].level+"</div><div id=heroStatusDetailSkill1>skill</div><div id=heroStatusDetailSkill1Name>"+heros[checkHero].lv1+"</div>";
}

function itemDetailCheck(checkItem){
   var myh = document.getElementById("itemStatusDetail");
   myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=itemStatusDetailImg><div id=itemStatusDetailName>"+items[checkItem].name+"</div><div id=itemStatusDetailLv>所持数</div><div id=itemStatusDetailLvN>"+items[checkItem].num+"</div><div id=itemStatusDetailSkill1>"+items[checkItem].sentence+"</div>";
}

function toCraft(){
 craftCheckSet.style.zIndex=-60;
 craftErrorSet.style.zIndex=-60;
 itemCraftSet.style.zIndex=-60;
 homeScreen.style.zIndex=-10;
 craftScreen.style.zIndex=0;
 for(var elem in items){
 
  if(items[elem].recipe>=1){
   let node=document.createElement('span');
   node.setAttribute('id',elem+'StatusCraftButton');
   var parentDiv = document.getElementById("craftList");
   parentDiv.appendChild(node);
   
   if(items[elem].made==0){
    var myh = document.getElementById(elem+"StatusCraftButton");
    myh.innerHTML = "<img src=item/はてな.png class=itemStatusIcon onclick=craftDetailCheck('"+elem+"') id="+elem+"StatusOpaCraftButton>";
   }
   else{
    var myh = document.getElementById(elem+"StatusCraftButton");
    myh.innerHTML = "<img src=item/"+items[elem].name+".png class=itemStatusIcon onclick=craftDetailCheck('"+elem+"') id="+elem+"StatusOpaCraftButton>";
   }
   
   let nodeStaOpa=document.createElement('style');
   nodeStaOpa.setAttribute('id',elem+'StatusItemStyle');
   var parentDiv = document.getElementById("craftList");
   parentDiv.appendChild(nodeStaOpa);
   
   var myh = document.getElementById(elem+'StatusItemStyle');
   myh.innerHTML = ":root{--"+elem+"StatusOpaCraftButton:1;--synthesisButton:0;}#"+elem+"StatusOpaCraftButton{opacity:var(--"+elem+"StatusOpaCraftButton);}#synthesisButton{opacity:var(--synthesisButton);position:absolute;top:88%;left:20%;width:60%;height:10%;backGround:#ffffff;}";
   
   
  var tag=elem+"StatusOpaCraftButton";
  var dv=document.getElementById(tag);console.log();
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
 
  craftDetailCheck(elem);
  }
 }
}

function f_synthesisCheck(item){
 if(items[items[item].materialA].num>=items[item].Anum&&items[items[item].materialB].num>=items[item].Bnum){
  craftCheckSet.style.zIndex=0;
  craftedItem=item;
 }
 else{
  craftErrorSet.style.zIndex=0;
 }
}

function itemCraft(){
 craftCheckSet.style.zIndex=-60;
 itemCraftSet.style.zIndex=0;
 if(craftedItem=="shield"&&heros["amister"].usable==0){
  liberateHero("amister","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 if(craftedItem=="nyark"&&heros["cusith"].usable==0){
  liberateHero("cusith","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 if(craftedItem=="sword"&&heros["al"].usable==0){
  liberateHero("al","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 if(craftedItem=="usataro"&&heros["rinne"].usable==0){
  liberateHero("rinne","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 if(craftedItem=="eiwaz"&&heros["layer"].usable==0){
  liberateHero("layer","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 if(craftedItem=="onigiri"&&heros["delmin"].usable==0){
  liberateHero("delmin","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 items[craftedItem].made=1;
 items[craftedItem].num=items[craftedItem].num+1;
 items[items[craftedItem].materialA].num=items[items[craftedItem].materialA].num-items[craftedItem].Anum;
 items[items[craftedItem].materialB].num=items[items[craftedItem].materialB].num-items[craftedItem].Bnum;
 var myh = document.getElementById("craftedItemBase");
 myh.innerHTML = "<img id=craftedItem src=item/"+items[craftedItem].name+".png>";
}

function craftDetailCheck(checkItem){
   var myh = document.getElementById("craftStatusDetail");
   if(items[checkItem].made==0){
    myh.innerHTML = "<img src=item/はてな.png id=craftStatusDetailImg><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum>"+items[checkItem].Anum+"個</div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum>"+items[checkItem].Bnum+"個</div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
   }
   else{
    myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=craftStatusDetailImg><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum>"+items[checkItem].Anum+"個</div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum>"+items[checkItem].Bnum+"個</div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
   }
  var tag="synthesisButton";
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',f_chgOpacity1(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity1(tag,0),false);
}

function toShop(){
 shopCheckSet.style.zIndex=-60;
 shopErrorSet.style.zIndex=-60;
 itemShopSet.style.zIndex=-60;
 homeScreen.style.zIndex=-10;
 shopScreen.style.zIndex=0;
 for(var elem in items){
 
  if(items[elem].value>=1){
   let node=document.createElement('span');
   node.setAttribute('id',elem+'StatusShopButton');
   var parentDiv = document.getElementById("shopList");
   parentDiv.appendChild(node);
   
   if(items[elem].made==0){
    var myh = document.getElementById(elem+"StatusShopButton");
    myh.innerHTML = "<img src=item/はてな.png class=itemStatusIcon onclick=shopDetailCheck('"+elem+"') id="+elem+"StatusOpaShopButton>";
   }
   else{
    var myh = document.getElementById(elem+"StatusShopButton");
    myh.innerHTML = "<img src=item/"+items[elem].name+".png class=itemStatusIcon onclick=shopDetailCheck('"+elem+"') id="+elem+"StatusOpaShopButton>";
   }
   
   let nodeStaOpa=document.createElement('style');
   nodeStaOpa.setAttribute('id',elem+'StatusItemStyle');
   var parentDiv = document.getElementById("shopList");
   parentDiv.appendChild(nodeStaOpa);
   
   var myh = document.getElementById(elem+'StatusItemStyle');
   myh.innerHTML = ":root{--"+elem+"StatusOpaShopButton:1;--buyingButton:0;}#"+elem+"StatusOpaShopButton{opacity:var(--"+elem+"StatusOpaShopButton);}#buyingButton{opacity:var(--buyingButton);position:absolute;top:88%;left:20%;width:60%;height:10%;backGround:#ffffff;}";
   
   
  var tag=elem+"StatusOpaShopButton";
  var dv=document.getElementById(tag);console.log();
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
 
  shopDetailCheck(elem);
  }
 }
}

function f_buyingCheck(item){
 if(items["BM"].num>=items[item].value){
  shopCheckSet.style.zIndex=0;
  boughtItem=item;
 }
 else{
  shopErrorSet.style.zIndex=0;
 }
}

function itemShop(){
 shopCheckSet.style.zIndex=-60;
 itemShopSet.style.zIndex=0;
 items["BM"].num=items["BM"].num-items[boughtItem].value;
 items[boughtItem].num=items[boughtItem].num+1;
 var myh = document.getElementById("boughtItemBase");
 myh.innerHTML = "<img id=boughtItem src=item/"+items[boughtItem].name+".png>";
}

function shopDetailCheck(checkItem){
  var myh = document.getElementById("shopStatusDetail");
  myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=shopStatusDetailImg><div id=shopStatusDetailName>"+items[checkItem].name+"</div><div id=shopNeedItemBack>価格</div><div id=shopStatusDetailValue>"+items[checkItem].value+"BM</div><div id=buying><div class=buttonA><div class=buttonB>購入</div></div></div><div id=buyingButton onclick=f_buyingCheck('"+checkItem+"')></div>";
  var tag="buyingButton";
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',f_chgOpacity1(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity1(tag,0),false);
}

function selectingRoleFunction(nowRole){
 selectingRole=nowRole;
 if(nowRole=="sprinter"){
  document.documentElement.style.setProperty('--sprinterSelectBack', "80%");
  document.documentElement.style.setProperty('--attackerSelectBack', "0%");
  document.documentElement.style.setProperty('--gunnerSelectBack', "0%");
  document.documentElement.style.setProperty('--tankSelectBack', "0%");
 }
 else if(nowRole=="attacker"){
  document.documentElement.style.setProperty('--sprinterSelectBack', "0%");
  document.documentElement.style.setProperty('--attackerSelectBack', "80%");
  document.documentElement.style.setProperty('--gunnerSelectBack', "0%");
  document.documentElement.style.setProperty('--tankSelectBack', "0%");
 }
 else if(nowRole=="gunner"){
  document.documentElement.style.setProperty('--sprinterSelectBack', "0%");
  document.documentElement.style.setProperty('--attackerSelectBack', "0%");
  document.documentElement.style.setProperty('--gunnerSelectBack', "80%");
  document.documentElement.style.setProperty('--tankSelectBack', "0%");
 }
 else if(nowRole=="tank"){
  document.documentElement.style.setProperty('--sprinterSelectBack', "0%");
  document.documentElement.style.setProperty('--attackerSelectBack', "0%");
  document.documentElement.style.setProperty('--gunnerSelectBack', "0%");
  document.documentElement.style.setProperty('--tankSelectBack', "80%");
 }
}

function levelSelect(selectedLevel){
 stageLevel=selectedLevel;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=0;
 checkBeforeBattle(-60);
 heroSkillStatus();
 partySelectSet(spSet,atSet,guSet,taSet);
}

function stageSelect(chosenStage){
 selectedStage=chosenStage;
 if(chosenStage=="mekahan"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面とある家庭用メカの反乱.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>とある家庭用メカの反乱</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/勇気の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/勇気の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/ジャンクパーツ.png><div class=itemNum>×1</div>";
 }
 else if(chosenStage=="granat"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面終焉禁獣グラナート.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>終焉禁獣グラナート</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/孤独の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/孤独の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/不思議な種.png><div class=itemNum>×1</div>";
 }
 else if(chosenStage=="libelulu"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面絶夢の魔女リベレーションルルカ.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>リベレーションルルカ</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/愛の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/愛の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/汎用魔法杖.png><div class=itemNum>×1</div>";
 }
 else if(chosenStage=="kuiro"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面破戒怨士_狸ヶ原喰色.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>破戒怨士 狸ヶ原喰色</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/正義の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/正義の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/上質な刃.png><div class=itemNum>×1</div>";
 }
 else if(chosenStage=="yurara"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面狂刃忍者幽々院ゆらら.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>狂刃忍者 幽々院ゆらら</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/愛の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/愛の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/上質な刃.png><div class=itemNum>×1</div>";
 }
 else if(chosenStage=="cerberus"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面地獄の番犬ケルベロス.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>地獄の番犬 ケルベロス</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/正義の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/正義の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/不思議な種.png><div class=itemNum>×1</div>";
 }
 else if(chosenStage=="ankoku"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面ぼうけんのおわり_かけだし暗黒騎士.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>かけだし暗黒騎士</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/勇気の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/勇気の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/汎用魔法杖.png><div class=itemNum>×1</div>";
 }
 else if(chosenStage=="heimdallr"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面戦慄の灯_ヘイムダル.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>戦慄の灯 ヘイムダル</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/孤独の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/孤独の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/ジャンクパーツ.png><div class=itemNum>×1</div>";
 }
}

function f_nextStage(){
 if(stageArray[stageArray.indexOf(selectedStage)+1]==null){
  selectedStage=stageArray[0];
 }
 else{
  selectedStage=stageArray[stageArray.indexOf(selectedStage)+1];
 }
 stageSelect(selectedStage);
}

function f_previousStage(){
 if(stageArray[stageArray.indexOf(selectedStage)-1]==null){
  selectedStage=stageArray[stageArray.length-1];
 }
 else{
  selectedStage=stageArray[stageArray.indexOf(selectedStage)-1];
 }
 stageSelect(selectedStage);
}


function roleSet(role,heroOrSkill){
 if(role=="sprinter"){
  spSet=heroOrSkill;
 }
 else if(role=="attacker"){
  atSet=heroOrSkill;
 }
 else if(role=="gunner"){
  guSet=heroOrSkill;
 }
 else if(role=="tank"){
  taSet=heroOrSkill;
 }
 partySelectSet(spSet,atSet,guSet,taSet);
}

function checkBeforeBattle(checkBeforeBattleBoxNum){
 checkBeforeBattleBox.style.zIndex=checkBeforeBattleBoxNum;
}

function heroSkillStatus(){

  atariheroHP=100+(10*(heros["atari"].level-1));
  var elem = document.getElementById("atariHP");
  elem.innerHTML = atariheroHP;
  atariAttackStatus=1+(0.1*(heros["atari"].level-1));
  var elem = document.getElementById("atariAttackStatus");
  elem.innerHTML = atariAttackStatus;

  voidollheroHP=120+(10*(heros["voidoll"].level-1));
  var elem = document.getElementById("voidollHP");
  elem.innerHTML = voidollheroHP;
  voidollAttackStatus=0.8+(0.1*(heros["voidoll"].level-1));
  var elem = document.getElementById("voidollAttackStatus");
  elem.innerHTML = voidollAttackStatus;

  nohoSkill1status=5+(1*(heros["noho"].level-1));
  var elem = document.getElementById("nohoSkill1status");
  elem.innerHTML = nohoSkill1status;

  tadaomiSkill1status=30+(5*(heros["tadaomi"].level-1));
  var elem = document.getElementById("tadaomiSkill1status");
  elem.innerHTML = tadaomiSkill1status;

  lucianoSkill1status=20+(5*(heros["luciano"].level-1));
  var elem = document.getElementById("lucianoSkill1status");
  elem.innerHTML = lucianoSkill1status;


  lyricaSkill1status=10+(2*(heros["lyrica"].level-1));
  var elem = document.getElementById("lyricaSkill1status");
  elem.innerHTML = lyricaSkill1status;

  matoiSkill1status=30+(6*(heros["matoi"].level-1));
  var elem = document.getElementById("matoiSkill1status");
  elem.innerHTML = matoiSkill1status;

  jeanneSkill1status=30+(6*(heros["jeanne"].level-1));
  var elem = document.getElementById("jeanneSkill1status");
  elem.innerHTML = jeanneSkill1status;

  marcosSkill1status=1.5+(0.1*(heros["marcos"].level-1));
  var elem = document.getElementById("marcosSkill1status");
  elem.innerHTML = marcosSkill1status;

  if(heros["nikola"].usable==1){
  
   addHero("nikola","sprinter","二コラ　テスラ","体力:<font id=nikolaHP></font>　攻撃倍率:<font id=nikolaAttackStatus></font>");
   
   nikolaheroHP=120+(10*(heros["nikola"].level-1));
   var elem = document.getElementById("nikolaHP");
   elem.innerHTML = nikolaheroHP;
   nikolaAttackStatus=0.8+(0.1*(heros["nikola"].level-1));
   var elem = document.getElementById("nikolaAttackStatus");
   elem.innerHTML = nikolaAttackStatus;
  }
  if(heros["adam"].usable==1){
  
   addHero("adam","attacker","カラドボルク","威力:<font id='adamSkill1status'></font>　硬直:0.8s　射程:2");
   
   adamSkill1status=26+(4*(heros["adam"].level-1));
   var elem = document.getElementById("adamSkill1status");
   elem.innerHTML = adamSkill1status;
  }
  if(heros["luluca"].usable==1){
  
   addHero("luluca","attacker","ドリーム☆ズキューン","威力:<font id='lulucaSkill1status'></font>　硬直:0.6s　射程:5");
   
   lulucaSkill1status=20+(5*(heros["luluca"].level-1));
   var elem = document.getElementById("lulucaSkill1status");
   elem.innerHTML = lulucaSkill1status;
  }
  if(heros["amairo"].usable==1){
  
   addHero("amairo","tank","甘色一閃","被ダメージ無効化＋近距離攻撃<br>威力:<font id='amairoSkill1status'></font>　硬直:1s");
   
   amairoSkill1status=20+(5*(heros["amairo"].level-1));
   var elem = document.getElementById("amairoSkill1status");
   elem.innerHTML = amairoSkill1status;
  }
  if(heros["GBG"].usable==1){
  
   addHero("GBG","attacker","超重力子砲","威力:<font id='GBGSkill1status'></font>　硬直:1.2s　射程:4");
   
   GBGSkill1status=20+(5*(heros["GBG"].level-1));
   var elem = document.getElementById("GBGSkill1status");
   elem.innerHTML = GBGSkill1status;
  }
  if(heros["pororotcho"].usable==1){
  
   addHero("pororotcho","attacker","ワテクシは美の化身！","威力:<font id='pororotchoSkill1status'></font>×3　硬直:3s　射程:3");
   
   pororotchoSkill1status=20+(4*(heros["pororotcho"].level-1));
   var elem = document.getElementById("pororotchoSkill1status");
   elem.innerHTML = pororotchoSkill1status;
  }
  if(heros["istaqa"].usable==1){
  
   addHero("istaqa","gunner","塵滅の天撃","威力:<font id='istaqaSkill1status'></font>　硬直:2s");
   
   istaqaSkill1status=30+(6*(heros["istaqa"].level-1));
   var elem = document.getElementById("istaqaSkill1status");
   elem.innerHTML = istaqaSkill1status;
  }
  if(heros["alice"].usable==1){
  
   addHero("alice","tank","不思議のトランプ","被ダメージ無効化");
  }
  if(heros["gustaf"].usable==1){
  
   addHero("gustaf","tank","禁忌の波動","威力:<font id='gustafSkill1status'></font>　硬直:2s　射程:2<br>長押し対応");
   
   gustafSkill1status=5+(1*(heros["gustaf"].level-1));
   var elem = document.getElementById("gustafSkill1status");
   elem.innerHTML = gustafSkill1status;
  }
  if(heros["thirteen"].usable==1){
  
   addHero("thirteen","tank","堕天変貌","攻撃力を8秒間<font id=thirteenSkill1status></font>倍　HPを<font id=thirteenHealSkill1status></font>回復");
   
   thirteenSkill1status=1.2+(0.05*(heros["thirteen"].level-1));
   var elem = document.getElementById("thirteenSkill1status");
   elem.innerHTML = thirteenSkill1status;
   thirteenHealSkill1status=5+(1*(heros["thirteen"].level-1));
   var elem = document.getElementById("thirteenHealSkill1status");
   elem.innerHTML = thirteenHealSkill1status;
  }
  if(heros["dragon"].usable==1){
  
   addHero("dragon","gunner","ほのおのいき","威力:<font id='dragonSkill1status'></font>　硬直:0.5s<br>長押し対応");
   
   dragonSkill1status=5+(1*(heros["dragon"].level-1));
   var elem = document.getElementById("dragonSkill1status");
   elem.innerHTML = dragonSkill1status;
  }
  if(heros["megmeg"].usable==1){
  
   addHero("megmeg","attacker","ばっちーのショードク","最低威力:<font id='megmegSkill1status'></font>　硬直:0.5s<br>長押し対応　近距離で威力UP");
   
   megmegSkill1status=5+(1*(heros["megmeg"].level-1));
   var elem = document.getElementById("megmegSkill1status");
   elem.innerHTML = megmegSkill1status;
  }
  if(heros["bugdoll"].usable==1){
  
   addHero("bugdoll","gunner","イレギュラーウイング","威力:<font id='bugdollSkill1status'></font>×6　硬直:3s");
   
   bugdollSkill1status=8+(4*(heros["bugdoll"].level-1));
   var elem = document.getElementById("bugdollSkill1status");
   elem.innerHTML = bugdollSkill1status;
  }
  if(heros["ignis"].usable==1){
  
   addHero("ignis","attacker","ブチ切れたぜ","威力:<font id='ignisSkill1status'></font>×3　硬直:2s　射程:2");
   
   ignisSkill1status=15+(3*(heros["ignis"].level-1));
   var elem = document.getElementById("ignisSkill1status");
   elem.innerHTML = ignisSkill1status;
  }
  if(heros["kirara"].usable==1){
  
   addHero("kirara","gunner","火遁・戒天炎龍召喚","威力:<font id='kiraraSkill1status'></font>×3　硬直:3s");
   
   kiraraSkill1status=16+(2*(heros["kirara"].level-1));
   var elem = document.getElementById("kiraraSkill1status");
   elem.innerHTML = kiraraSkill1status;
  }
  if(heros["maria"].usable==1){
  
   addHero("maria","attacker","セルピエンテ バイレ","威力:<font id='mariaSkill1status'></font>×3　硬直:3s　射程:3");
   
   mariaSkill1status=20+(4*(heros["maria"].level-1));
   var elem = document.getElementById("mariaSkill1status");
   elem.innerHTML = mariaSkill1status;
  }
  if(heros["violetta"].usable==1){
  
   addHero("violetta","tank","ご声援に心より感謝を","被ダメージを8秒間<font id='violettaSkill1status'></font>倍");
   
   violettaSkill1status=0.5+(0.05*(heros["violetta"].level-1));
   if(violettaSkill1status>1){violettaSkill1status=1;}
   var elem = document.getElementById("violettaSkill1status");
   elem.innerHTML = violettaSkill1status;
  }
  if(heros["coclico"].usable==1){
  
   addHero("coclico","sprinter","コクリコ","体力:<font id=coclicoHP></font>　攻撃倍率:<font id=coclicoAttackStatus></font>");
   
   coclicoheroHP=80+(10*(heros["coclico"].level-1));
   var elem = document.getElementById("coclicoHP");
   elem.innerHTML = coclicoheroHP;
   coclicoAttackStatus=1.2+(0.1*(heros["coclico"].level-1));
   var elem = document.getElementById("coclicoAttackStatus");
   elem.innerHTML = coclicoAttackStatus;
  }
  if(heros["stellea"].usable==1){
  
   addHero("stellea","attacker","華槍ブリムラ","威力:<font id='stelleaSkill1status'></font>×3　硬直:1.2s　射程:2");
   
   stelleaSkill1status=10+(2*(heros["stellea"].level-1));
   var elem = document.getElementById("stelleaSkill1status");
   elem.innerHTML = stelleaSkill1status;
  }
  if(heros["lovey"].usable==1){
  
   addHero("lovey","tank","チャーミング・キス♂","回復:<font id='loveySkill1status'></font>　威力:<font id='loveySkill2status'></font>　硬直:1.2s　<br>射程:3");
   
   loveySkill1status=15+(3*(heros["lovey"].level-1));
   var elem = document.getElementById("loveySkill1status");
   elem.innerHTML = loveySkill1status;
   var elem = document.getElementById("loveySkill2status");
   elem.innerHTML = loveySkill1status;
  }
  if(heros["yusha"].usable==1){
  
   addHero("yusha","tank","ジャンプ","被ダメージ無効化＋近距離攻撃<br>威力:<font id='yushaSkill1status'></font>　硬直:1s");
   
   yushaSkill1status=20+(5*(heros["yusha"].level-1));
   var elem = document.getElementById("yushaSkill1status");
   elem.innerHTML = yushaSkill1status;
  }
  if(heros["nidhoggr"].usable==1){
  
   addHero("nidhoggr","attacker","ラグナロク","威力:<font id='nidhoggrSkill1status'></font>　硬直:0.5s　射程:20<br>長押し対応");
   
   nidhoggrSkill1status=5+(1*(heros["nidhoggr"].level-1));
   var elem = document.getElementById("nidhoggrSkill1status");
   elem.innerHTML = nidhoggrSkill1status;
  }
  if(heros["pierre"].usable==1){
  
   addHero("pierre","sprinter","ピエール77世","体力:<font id=pierreHP></font>　攻撃倍率:<font id=pierreAttackStatus></font>");
   
   pierreheroHP=120+(10*(heros["pierre"].level-1));
   var elem = document.getElementById("pierreHP");
   elem.innerHTML = pierreheroHP;
   pierreAttackStatus=0.8+(0.1*(heros["pierre"].level-1));
   var elem = document.getElementById("pierreAttackStatus");
   elem.innerHTML = pierreAttackStatus;
  }
  if(heros["nanigashi"].usable==1){
  
   addHero("nanigashi","sprinter","某","体力:<font id=nanigashiHP></font>　攻撃倍率:<font id=nanigashiAttackStatus></font>");
   
   nanigashiheroHP=100+(10*(heros["nanigashi"].level-1));
   var elem = document.getElementById("nanigashiHP");
   elem.innerHTML = nanigashiheroHP;
   nanigashiAttackStatus=1+(0.1*(heros["nanigashi"].level-1));
   var elem = document.getElementById("nanigashiAttackStatus");
   elem.innerHTML = nanigashiAttackStatus;
  }
  if(heros["thomas"].usable==1){
  
   addHero("thomas","tank","レンタルトランク","被ダメージを8秒間<font id='thomasSkill1status'></font>倍");
   
   thomasSkill1status=0.5+(0.05*(heros["thomas"].level-1));
   if(thomasSkill1status>1){thomasSkill1status=1;}
   var elem = document.getElementById("thomasSkill1status");
   elem.innerHTML = thomasSkill1status;
  }
  if(heros["amister"].usable==1){
  
   addHero("amister","tank","紅薔薇の誓い","被ダメージを8秒間<font id='amisterSkill1status'></font>倍");
   
   amisterSkill1status=0.5+(0.05*(heros["amister"].level-1));
   if(amisterSkill1status>1){amisterSkill1status=1;}
   var elem = document.getElementById("amisterSkill1status");
   elem.innerHTML = amisterSkill1status;
  }
  if(heros["cusith"].usable==1){
  
   addHero("cusith","gunner","ワープニャーク","威力:<font id='cusithSkill1status'></font>　硬直:1s");
   
   cusithSkill1status=10+(2*(heros["cusith"].level-1));
   var elem = document.getElementById("cusithSkill1status");
   elem.innerHTML = cusithSkill1status;
  }
  if(heros["al"].usable==1){
  
   addHero("al","sprinter","アル","体力:<font id=alHP></font>　攻撃倍率:<font id=alAttackStatus></font>");
   
   alheroHP=100+(10*(heros["al"].level-1));
   var elem = document.getElementById("alHP");
   elem.innerHTML = alheroHP;
   alAttackStatus=1+(0.1*(heros["al"].level-1));
   var elem = document.getElementById("alAttackStatus");
   elem.innerHTML = alAttackStatus;
  }
  if(heros["rinne"].usable==1){
  
   addHero("rinne","gunner","操糸操術 Ж 八方画策","威力:<font id='rinneSkill1status'></font>　硬直:2s");
   
   rinneSkill1status=30+(6*(heros["rinne"].level-1));
   var elem = document.getElementById("rinneSkill1status");
   elem.innerHTML = rinneSkill1status;
  }
  if(heros["layer"].usable==1){
  
   addHero("layer","sprinter","零夜","体力:<font id=layerHP></font>　攻撃倍率:<font id=layerAttackStatus></font>");
   
   layerheroHP=80+(10*(heros["layer"].level-1));
   var elem = document.getElementById("layerHP");
   elem.innerHTML = layerheroHP;
   layerAttackStatus=1.2+(0.1*(heros["layer"].level-1));
   var elem = document.getElementById("layerAttackStatus");
   elem.innerHTML = layerAttackStatus;
  }
  if(heros["thorne"].usable==1){
  
   addHero("thorne","gunner","リオート・メーチ","威力:<font id='thorneSkill1status'></font>　硬直:1s");
   
   thorneSkill1status=10+(2*(heros["thorne"].level-1));
   var elem = document.getElementById("thorneSkill1status");
   elem.innerHTML = thorneSkill1status;
  }
  if(heros["delmin"].usable==1){
  
   addHero("delmin","attacker","デルミンしゅーと","威力:<font id='delminSkill1status'></font>×3＋最終段高火力<br>硬直:2s　射程:2");
   
   delminSkill1status=10+(2*(heros["delmin"].level-1));
   var elem = document.getElementById("delminSkill1status");
   elem.innerHTML = delminSkill1status;
  }
}

function addHero(addHeroName,role,skillName,heroSentence){

   switch(role){
    case "sprinter":roleShort="Sp";break;
    case "attacker":roleShort="At";break;
    case "gunner":roleShort="Gu";break;
    case "tank":roleShort="Ta";break;
   }

   let node1=document.createElement('div');
   node1.setAttribute('id',addHeroName+roleShort+'SelectButton');
   node1.setAttribute('onclick',"roleSet('"+role+"','"+addHeroName+"')");
   var parentDiv = document.getElementById(role+"SecletBack4");
   parentDiv.appendChild(node1);

   let node2=document.createElement('div');
   node2.setAttribute('class','partySelectHero');
   node2.setAttribute('id',addHeroName+'Part');
   node1.appendChild(node2);

   var myh1 = document.getElementById(addHeroName+"Part");
   myh1.innerHTML = "<img class=partySelectHeroImg src=item/"+addHeroName+".png><span class=partySelectHeroName>"+skillName+"</span><br><div class=partySelectHeroSentence>"+heroSentence+"</div>";

  var elem = document.getElementById(addHeroName+roleShort+"SelectButton");
  elem.addEventListener("mouseover", function (event) {
  document.documentElement.style.setProperty("--"+addHeroName+roleShort+"SelectButton", "0.2");
  }, false);
  var elem = document.getElementById(addHeroName+roleShort+"SelectButton");
  elem.addEventListener("mouseout", function (event) {
  document.documentElement.style.setProperty("--"+addHeroName+roleShort+"SelectButton", "1");
  }, false);

  let nodeAddHeroStyle=document.createElement('style');
  nodeAddHeroStyle.setAttribute('id',addHeroName+'addHeroStyle');
  var parentDiv = document.getElementById("partySelectScreen");
  parentDiv.appendChild(nodeAddHeroStyle);
   
  var myh = document.getElementById(addHeroName+'addHeroStyle');
  myh.innerHTML = ":root{--"+addHeroName+roleShort+"SelectButton:1;}#"+addHeroName+roleShort+"SelectButton{opacity:var(--"+addHeroName+roleShort+"SelectButton);width:100%;height:auto;margin-bottom:5%;backGround:#ffffff;}";

  var tag=addHeroName+roleShort+"SelectButton";
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
}

function partySelectSet(sprinter,attacker,gunner,tank){

  var myh = document.getElementById("sprinterSelectBackBase");
  switch(sprinter){
  case "atari"  :defaultHeroHP=atariheroHP;  heroAttackStatus=atariAttackStatus;  break;
  case "voidoll":defaultHeroHP=voidollheroHP;heroAttackStatus=voidollAttackStatus;break;
  case "nikola" :defaultHeroHP=nikolaheroHP; heroAttackStatus=nikolaAttackStatus; break;
  case "coclico" :defaultHeroHP=coclicoheroHP; heroAttackStatus=coclicoAttackStatus; break;
  case "pierre" :defaultHeroHP=pierreheroHP; heroAttackStatus=pierreAttackStatus; break;
  case "nanigashi" :defaultHeroHP=nanigashiheroHP; heroAttackStatus=nanigashiAttackStatus; break;
  case "al" :defaultHeroHP=alheroHP; heroAttackStatus=alAttackStatus; break;
  case "layer" :defaultHeroHP=layerheroHP; heroAttackStatus=layerAttackStatus; break;
  }
  myh.innerHTML = "<img id=sprinterSelectBack src=item/"+sprinter+".png>";
  heroHP=defaultHeroHP;
 
  const rootHeroHP = document.querySelector(':root');
  rootHeroHP.style.setProperty("--heroHPbar", "31%");
  
  var myh = document.getElementById("attackerSelectBackBase");
  myh.innerHTML = "<img id=attackerSelectBack src=item/"+attacker+".png>";
  
  var myh = document.getElementById("gunnerSelectBackBase");
  myh.innerHTML = "<img id=gunnerSelectBack src=item/"+gunner+".png>";
  
  var myh = document.getElementById("tankSelectBackBase");
  myh.innerHTML = "<img id=tankSelectBack src=item/"+tank+".png>";
}

function stageClick(){
 setTimeout(function(){
  setTimeout(function(){
   stageSelectScreen.style.zIndex=-60;
   partySelectScreen.style.zIndex=0;
  },2000); 
 },1000); 
}


function partyClick(){
 document.documentElement.style.setProperty('--gameClearScreen', "0");
 homeScreen.style.zIndex=-60;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=0;
 actionGameScreen.style.zIndex=0;
 clearResultScreen.style.zIndex=-60;
 mekahanScreen.style.zIndex=-60;
 granatScreen.style.zIndex=-60;
 libeluluScreen.style.zIndex=-60;
 kuiroScreen.style.zIndex=-60;
 yuraraScreen.style.zIndex=-60;
 cerberusScreen.style.zIndex=-60;
 ankokuScreen.style.zIndex=-60;
 heimdallrScreen.style.zIndex=-60;
 partySet(spSet,atSet,guSet,taSet);
 document.documentElement.style.setProperty('--gameStartCount3', "0.5");
 gameClearCheck=0;
 enemyBack=1;
 const rootEnemyHP = document.querySelector(':root');
 rootEnemyHP.style.setProperty("--enemyHPbar", "46.5%");
 enemyFront=[];
 if(selectedStage=="mekahan"){ mekahanBattleStart();}
 else if(selectedStage=="granat"){ granatBattleStart();}
 else if(selectedStage=="libelulu"){ libeluluBattleStart();}
 else if(selectedStage=="kuiro"){ kuiroBattleStart();}
 else if(selectedStage=="yurara"){ yuraraBattleStart();}
 else if(selectedStage=="cerberus"){ cerberusBattleStart();}
 else if(selectedStage=="ankoku"){ ankokuBattleStart();}
 else if(selectedStage=="heimdallr"){ heimdallrBattleStart();}
 setTimeout(function(){
  document.documentElement.style.setProperty('--gameStartCount3', "0");
  document.documentElement.style.setProperty('--gameStartCount2', "0.5");
  setTimeout(function(){
   document.documentElement.style.setProperty('--gameStartCount2', "0");
   document.documentElement.style.setProperty('--gameStartCount1', "0.5");
    setTimeout(function(){
     document.documentElement.style.setProperty('--gameStartCount1', "0");
     document.documentElement.style.setProperty('--gameStartCount0', "0.5");
     phase=1;
     setTimeout(function(){
      document.documentElement.style.setProperty('--gameStartCount0', "0");
     },1000);
    },1000);
   },1000);
  },1000);
}


function partySet(){
 const sprSet = document.getElementById(partySet);
 var myh1 = document.getElementById("selectedSp");
 myh1.innerHTML = "<img id=spDef src=item/"+spSet+".png>";
 var myh1 = document.getElementById("selectedAt");
 myh1.innerHTML = "<img id=spDef src=item/"+atSet+".png>";
 var myh1 = document.getElementById("selectedGu");
 myh1.innerHTML = "<img id=spDef src=item/"+guSet+".png>";
 var myh1 = document.getElementById("selectedTa");
 myh1.innerHTML = "<img id=spDef src=item/"+taSet+".png>";
}




//PC用
window.addEventListener("keydown",keydown);
window.addEventListener("keyup",keyup);

function keydown(event){
 if(event.keyCode==39){rightOn=1;}
 if(event.keyCode==37){leftOn=1;}
 if(event.keyCode==65){attackerOn=1;attackerSkill();}
 if(event.keyCode==83){gunnerOn=1;gunnerSkill();}
 if(event.keyCode==68){tankOn=1;tankSkill();}
}

function keyup(event){
 if(event.keyCode==39){rightOn=0;}
 if(event.keyCode==37){leftOn=0;}
 if(event.keyCode==65){attackerOn=0;if(skillHold==1){skillOut();}}
 if(event.keyCode==83){gunnerOn=0;if(skillHold==1){skillOut();}}
 if(event.keyCode==68){tankOn=0;if(skillHold==1){skillOut();guard=0;skillHold=0;}}
}

function addListener(){

var info=[
  ['toRight'                   ,f_toRight],
  ['toLeft'                    ,f_toLeft],
  ['ataBut'                    ,f_ataBut],
  ['gunBut'                    ,f_gunBut],
  ['tanBut'                    ,f_tanBut],
  ['homeMenuButton'            ,f_chgOpacity1],
  ['homeFeedBackButton'        ,f_chgOpacity1],
  ['homeHeroButton'            ,f_chgOpacity1],
  ['homeItemButton'            ,f_chgOpacity1],
  ['homeBattleButton'          ,f_chgOpacity1],
  ['homeCraftButton'           ,f_chgOpacity1],
  ['homeShopButton'            ,f_chgOpacity1],
  ['stageSelectReturnButton'   ,f_chgOpacity1],
  ['level1SelectButton'        ,f_chgOpacity1],
  ['level2SelectButton'        ,f_chgOpacity1],
  ['level3SelectButton'        ,f_chgOpacity1],
  ['toNextStageButton'         ,f_chgOpacity1],
  ['toPreviousStageButton'     ,f_chgOpacity1],
  ['partySelectReturnButton'   ,f_chgOpacity1],
  ['herotReturnButton'         ,f_chgOpacity1],
  ['heroLiberateOKButton'      ,f_chgOpacity1],
  ['itemReturnButton'          ,f_chgOpacity1],
  ['craftReturnButton'         ,f_chgOpacity1],
  ['craftCheckYesButton'       ,f_chgOpacity1],
  ['craftCheckNoButton'        ,f_chgOpacity1],
  ['craftErrorOKButton'        ,f_chgOpacity1],
  ['itemCraftOKButton'         ,f_chgOpacity1],
  ['shopReturnButton'          ,f_chgOpacity1],
  ['shopCheckYesButton'        ,f_chgOpacity1],
  ['shopCheckNoButton'         ,f_chgOpacity1],
  ['shopErrorOKButton'         ,f_chgOpacity1],
  ['itemShopOKButton'          ,f_chgOpacity1],

  ['sprinterSelectBackButton'  ,f_sprinterSelectBackButton],
  ['attackerSelectBackButton'  ,f_attackerSelectBackButton],
  ['gunnerSelectBackButton'    ,f_gunnerSelectBackButton],
  ['tankSelectBackButton'      ,f_tankSelectBackButton],

  ['atariSpSelectButton'       ,f_chgOpacity2],
  ['voidollSpSelectButton'     ,f_chgOpacity2],
  ['nohoAtSelectButton'        ,f_chgOpacity2],
  ['tadaomiAtSelectButton'     ,f_chgOpacity2],
  ['lucianoAtSelectButton'     ,f_chgOpacity2],
  ['lyricaGuSelectButton'      ,f_chgOpacity2],
  ['matoiGuSelectButton'       ,f_chgOpacity2],
  ['justiceTaSelectButton'     ,f_chgOpacity2],
  ['jeanneTaSelectButton'      ,f_chgOpacity2],
  ['marcosTaSelectButton'      ,f_chgOpacity2],

  ['partySelectDecisionButton' ,f_chgOpacity1],
  ['checkBeforeBattleYesButton',f_chgOpacity1],
  ['checkBeforeBattleNoButton' ,f_chgOpacity1],
  ['clearResultToHomeButton'   ,f_chgOpacity1]
];

for(inf of info){
  var tag=inf[0];
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',inf[1](tag,1),false);
  dv.addEventListener('pointerout' ,inf[1](tag,0),false);
}

//スマホ用
window.oncontextmenu = function(event) {//画像長押しによるポップアップ無効化
 event.preventDefault();
 event.stopPropagation();
 return false;
};

}


function f_toRight(tag,sw){return function(evt){rightOn=sw;};}
function f_toLeft (tag,sw){return function(evt){leftOn =sw;};}

function f_chgOpacity1(tag,sw){
  return function(evt){
    document.documentElement.style.setProperty('--'+tag, sw*0.8);
  };
}

function f_chgOpacity2(tag,sw){
  return function(evt){
    document.documentElement.style.setProperty('--'+tag, 1-sw*0.8);
  };
}

function f_ataBut (tag,sw){
  if(sw==1) return function(evt){
    attackerOn=1;attackerSkill();
  };
  if(sw==0) return function(evt){
    attackerOn=0;if(skillHold==1){skillOut();}
  };
}

function f_gunBut (tag,sw){
  if(sw==1) return function(evt){
    gunnerOn  =1;gunnerSkill();
  };
  if(sw==0) return function(evt){
    gunnerOn  =0;if(skillHold==1){skillOut();}
  };
}

function f_tanBut (tag,sw){
  if(sw==1) return function(evt){
    tankOn    =1;tankSkill();
  };
  if(sw==0) return function(evt){
    tankOn    =0;if(skillHold==1){skillOut();}
  };
}

function f_sprinterSelectBackButton(tag,sw){
  if(sw==1) return function(evt){
    if(selectingRole!="sprinter"){document.documentElement.style.setProperty('--sprinterSelectBackButton', "0.8");}
  };
  if(sw==0) return function(evt){
     document.documentElement.style.setProperty('--sprinterSelectBackButton', "0");
  };
}

function f_attackerSelectBackButton(tag,sw){
  if(sw==1) return function(evt){
    if(selectingRole!="attacker"){document.documentElement.style.setProperty('--attackerSelectBackButton', "0.8");}
  };
  if(sw==0) return function(evt){
    document.documentElement.style.setProperty('--attackerSelectBackButton', "0");
  };
}

function f_gunnerSelectBackButton(tag,sw){
  if(sw==1) return function(evt){
    if(selectingRole!="gunner")  {document.documentElement.style.setProperty('--gunnerSelectBackButton', "0.8");}
  };
  if(sw==0) return function(evt){
    document.documentElement.style.setProperty('--gunnerSelectBackButton', "0");
  };
}

function f_tankSelectBackButton(tag,sw){
  if(sw==1) return function(evt){
    if(selectingRole!="tank")    {document.documentElement.style.setProperty('--tankSelectBackButton', "0.8");}
  };
  if(sw==0) return function(evt){
    document.documentElement.style.setProperty('--tankSelectBackButton', "0");
  };
}


const log = function(){
 if(phase){

  if(skill==0){
   if(rightOn){
    document.documentElement.style.setProperty('--pushToRight', "0.8");

    if(walk==0){
     walk=1;
    }
    if(spSet=="atari"){
     atariWalk();
    }
    else if(spSet=="voidoll"){
     voidollWalk();
    }
    else if(spSet=="nikola"){
     nikolaWalk();
    }
    else if(spSet=="coclico"){
     coclicoWalk();
    }
    else if(spSet=="pierre"){
     pierreWalk();
    }
    else if(spSet=="nanigashi"){
     nanigashiWalk();
    }
    else if(spSet=="al"){
     alWalk();
    }
    else if(spSet=="layer"){
     layerWalk();
    }
   
    if(sidePosi<90){
     sidePosi=Number(sidePosi);
     sidePosi=sidePosi+5;
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);console.log(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     direction=1;
     root.style.setProperty("--direction", direction);
     document.getElementById("selectedSp").classList.add("shift");
    }
   }

   else{
     var myh1 = document.getElementById("selectedSp");
     myh1.innerHTML = "<img id=spDef src=item/"+spSet+".png>";
   }

  
   if(leftOn){
    document.documentElement.style.setProperty('--pushToLeft', "0.8");

    if(walk==0){
     walk=1;
    }
    if(spSet=="atari"){
     atariWalk();
    }
    else if(spSet=="voidoll"){
     voidollWalk();
    }
    else if(spSet=="nikola"){
     nikolaWalk();
    }
    else if(spSet=="coclico"){
     coclicoWalk();
    }
    else if(spSet=="pierre"){
     pierreWalk();
    }
    else if(spSet=="nanigashi"){
     nanigashiWalk();
    }
    else if(spSet=="al"){
     alWalk();
    }
    else if(spSet=="layer"){
     layerWalk();
    }
   
    if(sidePosi>0){
     sidePosi=Number(sidePosi);
     sidePosi=sidePosi-5;
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);console.log(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     direction=-1;
     root.style.setProperty("--direction", direction);
     document.getElementById("selectedSp").classList.add("shift");
    }
   }
  }

  if(attackerOn){document.documentElement.style.setProperty('--pushAtaBut', "0.8");if(skill==0){attackerSkill();}}
  if(gunnerOn){document.documentElement.style.setProperty('--pushGunBut', "0.8");if(skill==0){gunnerSkill();}}
  if(tankOn){document.documentElement.style.setProperty('--pushTanBut', "0.8");if(skill==0){tankSkill();}}
  if(!rightOn){document.documentElement.style.setProperty('--pushToRight', "0");}
  if(!leftOn){document.documentElement.style.setProperty('--pushToLeft', "0");}
  if(!attackerOn){document.documentElement.style.setProperty('--pushAtaBut', "0");}
  if(!gunnerOn){document.documentElement.style.setProperty('--pushGunBut', "0");}
  if(!tankOn){document.documentElement.style.setProperty('--pushTanBut', "0");}

  if(mekahanAct1==1&&mekahanAct2==0){
   mekahanAct();
  }
  if(granatAct1==1&&granatAct2==0){
   granatAct();
  }
  if(libeluluAct1==1&&libeluluAct2==0){
   libeluluAct();
  }
  if(kuiroAct1==1&&kuiroAct2==0){
   kuiroActA();
  }
  if(kuiroAct1==1&&kuiroAct3==0){
   kuiroActB();
  }
  if(yuraraAct1==1&&yuraraAct2==0){
   yuraraAct();
  }
  if(cerberusAct1==1&&cerberusAct2==0){
   cerberusAct();
  }
  if(ankokuAct1==1&&ankokuAct2==0){
   ankokuAct();
  }
  if(heimdallrAct1==1&&heimdallrAct2==0){
   heimdallrAct();
  }
 }
}

setInterval(log, 100);

function atariWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/atari_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/atari_walk2.png>";
  walk=1;
 }
}

function voidollWalk(){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/voidoll_walk1.png>";
}

function nikolaWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nikola_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nikola_walk1.png>";
  walk=3;
 }
 else if(walk==3){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nikola_walk1.png>";
  walk=4;
 }
 else if(walk==4){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nikola_walk1.png>";
  walk=5;
 }
 else if(walk==5){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nikola_walk2.png>";
  walk=1;
 }
}

function coclicoWalk(){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/coclico_walk1.png>";
}

function pierreWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/pierre_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/pierre_walk2.png>";
  walk=1;
 }
}

function nanigashiWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nanigashi_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nanigashi_walk2.png>";
  walk=1;
 }
}

function alWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/al_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/al_walk2.png>";
  walk=1;
 }
}

function layerWalk(){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/layer_walk1.png>";
}

function attackerSkill(){
 if(phase==1&&skill==0){
  skill=1;
  if(atSet=="noho"){
   nohoSkill1();
  }
  else if(atSet=="tadaomi"){
   tadaomiSkill1();
  }
  else if(atSet=="luciano"){
   lucianoSkill1();
  }
  else if(atSet=="adam"){
   adamSkill1();
  }
  else if(atSet=="luluca"){
   lulucaSkill1();
  }
  else if(atSet=="GBG"){
   GBGSkill1();
  }
  else if(atSet=="pororotcho"){
   pororotchoSkill1();
  }
  else if(atSet=="megmeg"){
   megmegSkill1();
  }
  else if(atSet=="ignis"){
   ignisSkill1();
  }
  else if(atSet=="maria"){
   mariaSkill1();
  }
  else if(atSet=="stellea"){
   stelleaSkill1();
  }
  else if(atSet=="nidhoggr"){
   nidhoggrSkill1();
  }
  else if(atSet=="delmin"){
   delminSkill1();
  }
 }
}

function gunnerSkill(){
 if(phase==1&&skill==0){
  skill=1;
  if(guSet=="lyrica"){
   lyricaSkill1();
  }
  else if(guSet=="matoi"){
   matoiSkill1();
  }
  else if(guSet=="istaqa"){
   istaqaSkill1();
  }
  else if(guSet=="dragon"){
   dragonSkill1();
  }
  else if(guSet=="bugdoll"){
   bugdollSkill1();
  }
  else if(guSet=="kirara"){
   kiraraSkill1();
  }
  else if(guSet=="cusith"){
   cusithSkill1();
  }
  else if(guSet=="rinne"){
   rinneSkill1();
  }
  else if(guSet=="thorne"){
   thorneSkill1();
  }
 }
}

function tankSkill(){
 if(phase==1&&skill==0){
  skill=1;
  if(taSet=="justice"){
   justiceSkill1();
  }
  else if(taSet=="jeanne"){
   jeanneSkill1();
  }
  else if(taSet=="marcos"){
   marcosSkill1();
  }
  else if(taSet=="amairo"){
   amairoSkill1();
  }
  else if(taSet=="alice"){
   aliceSkill1();
  }
  else if(taSet=="thirteen"){
   thirteenSkill1();
  }
  else if(taSet=="violetta"){
   violettaSkill1();
  }
  else if(taSet=="gustaf"){
   gustafSkill1();
  }
  else if(taSet=="lovey"){
   loveySkill1();
  }
  else if(taSet=="yusha"){
   yushaSkill1();
  }
  else if(taSet=="thomas"){
   thomasSkill1();
  }
  else if(taSet=="amister"){
   amisterSkill1();
  }
 }
}

function nohoSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/noho_skill1.png>";
  heroAttack(nohoSkill1status*heroAttackStatus,direction,2);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    nohoSkill1();
   },200);
  }
  else{
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
   },200);
  }
 }
}

function tadaomiSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/tadaomi.png>";
  setTimeout(function(){
   heroAttack(tadaomiSkill1status*heroAttackStatus,direction,2);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/tadaomi_skill1.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/tadaomi.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },500);
   },500);
  },200); 
 }
}

function lucianoSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/luciano_skill1.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/luciano_skill1.png>";
   heroAttack(lucianoSkill1status*heroAttackStatus,direction,6);
     sidePosi=Number(sidePosi);
     if(direction==1){sidePosi=sidePosi-15;}else{sidePosi=sidePosi+15;}
     if(sidePosi<0){sidePosi=0;}else if(sidePosi>90){sidePosi=90;}
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);console.log(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     document.getElementById("selectedSp").classList.add("shift");
    
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/luciano_skill1.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },100);
   },300);
  },100); 
 }
}

function adamSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/adam.png>";
  setTimeout(function(){
   heroAttack(adamSkill1status*heroAttackStatus,direction,2);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/adam_skill1.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/adam.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },500);
   },500);
  },200); 
 }
}

function lulucaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/luluca.png>";
  setTimeout(function(){
   heroAttack(lulucaSkill1status*heroAttackStatus,direction,5);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/luluca.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = " ";
    var myh1 = document.getElementById("lulucaSkillBulletBase");
    if(direction==1){myh1.innerHTML = "<img class=lulucaSkillBulletRight src=item/luluca_skill1.png>";}
    else{var lulucaSkill1Left=Number(sidePosi)-20;document.documentElement.style.setProperty('--lulucaSkillBulletLeft', lulucaSkill1Left+"%");myh1.innerHTML = "<img class=lulucaSkillBulletLeft src=item/luluca_skill1.png>";}
    setTimeout(function(){
     var myh1 = document.getElementById("lulucaSkillBulletBase");
     myh1.innerHTML = " ";
     skillOut();
     SkillCheck=0;
    },200);
   },200);
  },200); 
 }
}

function GBGSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/GBG.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("GBGSkillBulletBase");
   myh1.innerHTML = "<div id=GBGSkillBullet></div>";
   var myh1 = document.getElementById("GBGSkillBullet");
   myh1.classList.add('GBGSkill1');
   setTimeout(function(){
    heroAttack(GBGSkill1status*heroAttackStatus,direction,5);
    var myh1 = document.getElementById("GBGSkillBullet");
    myh1.classList.remove('GBGSkill1');
    var myh1 = document.getElementById("GBGSkillBulletBase");
    myh1.innerHTML = " ";
    skillOut();
    SkillCheck=0;
   },1000);
  },200); 
 }
}

function pororotchoSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  skillBlackBack.style.opacity=0.5;
  setTimeout(function(){
   heroAttack(pororotchoSkill1status*heroAttackStatus,direction,3);
   heroAttack(pororotchoSkill1status*heroAttackStatus,-direction,3);
  },500);
  setTimeout(function(){
   heroAttack(pororotchoSkill1status*heroAttackStatus,direction,3);
   heroAttack(pororotchoSkill1status*heroAttackStatus,-direction,3);
  },1500);
  setTimeout(function(){
   heroAttack(pororotchoSkill1status*heroAttackStatus,direction,3);
   heroAttack(pororotchoSkill1status*heroAttackStatus,-direction,3);
  },2500);
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = " ";
  var myh1 = document.getElementById("pororotchoSkillBulletBase");
  myh1.innerHTML = "<img id=pororotchoSkillBullet src=item/pororotcho_skill1.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("pororotchoSkillBulletBase");
   myh1.innerHTML = " ";
   skillBlackBack.style.opacity=0;
   skillOut();
   SkillCheck=0;
  },3000); 
 }
}

function gustafSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = " ";
  var myh1 = document.getElementById("gustafSkillBulletBase");
  myh1.innerHTML = "<img id=gustafSkillBullet src=item/gustaf_skill1.png>";
  heroAttack(gustafSkill1status*heroAttackStatus,direction,3);
  heroAttack(gustafSkill1status*heroAttackStatus,-direction,3);
  var gustafHeal = document.getElementById("healBuffEffect");
  gustafHeal.innerHTML = "<img src=item/回復エフェクト.png>";
  if(heroHP<=defaultHeroHP-gustafSkill1status){
   heroHP=heroHP+gustafSkill1status;
   heroHPchange=heroHP*31/defaultHeroHP;
   heroHPchange=String(heroHPchange);
   const rootHeroHP = document.querySelector(':root');
   rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
  }
  else if(heroHP>defaultHeroHP-gustafSkill1status){
   heroHP=defaultHeroHP;
   heroHPchange=heroHP*31/defaultHeroHP;
   heroHPchange=String(heroHPchange);
   const rootHeroHP = document.querySelector(':root');
   rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
  }
  setTimeout(function(){
   var gustafHeal = document.getElementById("healBuffEffect");
   gustafHeal.innerHTML = " ";
  },200);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    gustafSkill1();
   },500);
  }
  else{
   setTimeout(function(){
    var myh1 = document.getElementById("gustafSkillBulletBase");
    myh1.innerHTML = " ";
    skillOut();
    SkillCheck=0;
   },500);
  }
 }
}

function megmegSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/megmeg.png>";
  heroAttack(megmegSkill1status*heroAttackStatus,direction,2);
  heroAttack(megmegSkill1status*heroAttackStatus,direction,3);
  heroAttack(megmegSkill1status*heroAttackStatus,direction,4);
  heroAttack(megmegSkill1status*heroAttackStatus,direction,5);
  heroAttack(megmegSkill1status*heroAttackStatus,direction,6);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    megmegSkill1();
   },500);
  }
  else{
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
   },500);
  }
 }
}

function ignisSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/ignis_skill1.png>";
  setTimeout(function(){
   skillBlackBack.style.opacity=0.5;
   heroAttack(ignisSkill1status*heroAttackStatus,direction,2);
   heroAttack(ignisSkill1status*heroAttackStatus,-direction,2);
   setTimeout(function(){
    heroAttack(ignisSkill1status*heroAttackStatus,direction,2);
    heroAttack(ignisSkill1status*heroAttackStatus,-direction,2);
   },500);
   setTimeout(function(){
    heroAttack(ignisSkill1status*heroAttackStatus,direction,2);
    heroAttack(ignisSkill1status*heroAttackStatus,-direction,2);
   },1000);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/ignis_skill1Effect.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/ignis.png>";
    setTimeout(function(){
     skillBlackBack.style.opacity=0;
     skillOut();
     SkillCheck=0;
    },200);
   },1500);
  },300); 
 }
}

function mariaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  skillBlackBack.style.opacity=0.5;
  setTimeout(function(){
   heroAttack(mariaSkill1status*heroAttackStatus,direction,3);
   heroAttack(mariaSkill1status*heroAttackStatus,-direction,3);
  },500);
  setTimeout(function(){
   heroAttack(mariaSkill1status*heroAttackStatus,direction,3);
   heroAttack(mariaSkill1status*heroAttackStatus,-direction,3);
  },1500);
  setTimeout(function(){
   heroAttack(mariaSkill1status*heroAttackStatus,direction,3);
   heroAttack(mariaSkill1status*heroAttackStatus,-direction,3);
  },2500);
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = " ";
  var myh1 = document.getElementById("mariaSkillBulletBase");
  myh1.innerHTML = "<img id=mariaSkillBullet src=item/maria_skill1.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("mariaSkillBulletBase");
   myh1.innerHTML = " ";
   skillBlackBack.style.opacity=0;
   skillOut();
   SkillCheck=0;
  },3000); 
 }
}

function stelleaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=stelleaSkill1 src=item/stellea_skill2.png><img id=spDef src=item/stellea_skill1.png>";
  var myh1 = document.getElementById("stelleaSkill1");
  myh1.classList.add('stelleaSkill1');
  heroAttack(stelleaSkill1status*heroAttackStatus,direction,2);
  setTimeout(function(){
   heroAttack(stelleaSkill1status*heroAttackStatus,direction,2);
  },400);
  setTimeout(function(){
   heroAttack(stelleaSkill1status*heroAttackStatus,direction,2);
  },800);
  setTimeout(function(){
   var myh1 = document.getElementById("stelleaSkill1");
   myh1.classList.remove('stelleaSkill1');
   skillOut();
   SkillCheck=0;
  },1200); 
 }
}

function nidhoggrSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  if(direction==1){
   nidhoggrSkill1Width=(90-Number(sidePosi))*10;
  }
  else{
   nidhoggrSkill1Width=Number(sidePosi)*10;
  }console.log("width"+nidhoggrSkill1Width);
  document.documentElement.style.setProperty('--nidhoggrSkill1', nidhoggrSkill1Width+"%");
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nidhoggr_skill1.png><div id=nidhoggrSkill1><div id=nidhoggrSkill1Core></div></div>";
  heroAttack(nidhoggrSkill1status*heroAttackStatus,direction,20);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    nidhoggrSkill1();
   },200);
  }
  else{
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
   },200);
  }
 }
}

function delminSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/delmin.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/delmin_skill1.png>";
   heroAttack(delminSkill1status*heroAttackStatus,direction,2);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/delmin_skill2.png>";
    heroAttack(delminSkill1status*heroAttackStatus,direction,2);
     setTimeout(function(){
      var myh1 = document.getElementById("selectedSp");
      myh1.innerHTML = "<img id=spDef src=item/delmin_skill1.png>";
      heroAttack(delminSkill1status*heroAttackStatus,direction,2);
      setTimeout(function(){
       skillBlackBack.style.opacity=0.5;
       var myh1 = document.getElementById("selectedSp");
       myh1.innerHTML = "<img id=spDef src=item/delmin_skill2.png>";
       heroAttack(3*delminSkill1status*heroAttackStatus,direction,2);
       setTimeout(function(){
        skillBlackBack.style.opacity=0;
        skillOut();
        SkillCheck=0;
       },400);
     },700);
    },300);
   },300);
  },300);
 }
}

function lyricaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/lyrica.png>";
  setTimeout(function(){
   var skill1 = document.getElementById("lyricaSkillBulletBase");
   skill1.innerHTML = "<div id=lyricaSkillBullet class=lyricaSkill1></div>";
   lyricaSkillBulletBase.style.zIndex = 0;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/lyrica_skill1.png>";
   setTimeout(function(){
    heroShooting(lyricaSkill1status*heroAttackStatus,500);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/lyrica.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },300);
   },500);
  },200); 
 }
}

function matoiSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/matoi.png>";
  setTimeout(function(){
   var skill1 = document.getElementById("matoiSkillBulletBase");
   skill1.innerHTML = "<div id=matoiSkillBullet class=matoiSkill1></div>";
   matoiSkillBulletBase.style.zIndex = 0;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/matoi_skill1.png>";
   setTimeout(function(){
    heroShooting(matoiSkill1status*heroAttackStatus,500);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/matoi.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },500);
   },1000);
  },500); 
 }
}

function istaqaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/istaqa_skill1.png>";
  setTimeout(function(){
   skillBlackBack.style.opacity=0.5;
   var skill1 = document.getElementById("istaqaBulletBase");
   skill1.innerHTML = "<img src=item/istaqa_skill1Effect.png id=istaqaBullet>";
   heroShooting(istaqaSkill1status*heroAttackStatus,0);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/istaqa.png>";
    var skill1 = document.getElementById("istaqaBulletBase");
    skill1.innerHTML = " ";
    skillBlackBack.style.opacity=0;
    skillOut();
    SkillCheck=0;
   },500);
  },500); 
 }
}

function dragonSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/dragon.png>";
  heroShooting(dragonSkill1status*heroAttackStatus,0);
  dragonSkillBullet.style.opacity=1;
  if(gunnerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    dragonSkill1();
   },500);
  }
  else{
   setTimeout(function(){
    dragonSkillBullet.style.opacity=0;
    skillOut();
    SkillCheck=0;
   },500);
  }
 }
}

function bugdollSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/bugdoll_skill1.png>";
  var skill1 = document.getElementById("bugdollSkillBulletBase1");
  skill1.innerHTML = "<div id=bugdollSkillBullet1 class=lyricaSkill1></div>";
  heroShooting(bugdollSkill1status*heroAttackStatus,500);
  setTimeout(function(){
   var skill1 = document.getElementById("bugdollSkillBulletBase2");
   skill1.innerHTML = "<div id=bugdollSkillBullet1 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },500);
  setTimeout(function(){
   var skill1 = document.getElementById("bugdollSkillBulletBase3");
   skill1.innerHTML = "<div id=bugdollSkillBullet3 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },1000);
  setTimeout(function(){
   var skill1 = document.getElementById("bugdollSkillBulletBase4");
   skill1.innerHTML = "<div id=bugdollSkillBullet4 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },1500);
  setTimeout(function(){
   var skill1 = document.getElementById("bugdollSkillBulletBase5");
   skill1.innerHTML = "<div id=bugdollSkillBullet5 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },2000);
  setTimeout(function(){
   var skill1 = document.getElementById("bugdollSkillBulletBase6");
   skill1.innerHTML = "<div id=bugdollSkillBullet6 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },2500);
  setTimeout(function(){
   skillOut();
   SkillCheck=0;
  },3000);
 }
}

function kiraraSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/kirara_skill1.png>";
  const skill1 = document.getElementById("kiraraSkillBullet");
  skill1.classList.add('kiraraSkill1');
  kiraraSkillBullet.style.opacity=1;
  heroShooting(kiraraSkill1status*heroAttackStatus,600);
  heroShooting(kiraraSkill1status*heroAttackStatus,800);
  heroShooting(kiraraSkill1status*heroAttackStatus,1000);
  setTimeout(function(){
   kiraraSkillBullet.style.opacity=0;
   skill1.classList.remove('kiraraSkill1');
   skillOut();
   SkillCheck=0;
  },3000); 
 }
}

function cusithSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/cusith_skill1.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = " ";
   heroShooting(cusithSkill1status*heroAttackStatus,0);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/cusith.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },300);
   },200);
  },500); 
 }
}

function rinneSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/rinne.png>";
  setTimeout(function(){
   var skill1 = document.getElementById("rinneSkillBulletBase");
   skill1.innerHTML = "<div id=rinneSkillBullet class=rinneSkill1></div>";
   rinneSkillBulletBase.style.zIndex = 0;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/rinne_skill1.png>";
   setTimeout(function(){
    heroShooting(rinneSkill1status*heroAttackStatus,500);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/rinne.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },500);
   },1000);
  },500); 
 }
}

function thorneSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/thorne_skill1.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/thorne_skill2.png>";
   thorneSkillBullet.style.opacity=1;
   heroShooting(thorneSkill1status*heroAttackStatus,0);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/thorne.png>";
    thorneSkillBullet.style.opacity=0;
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },300);
   },200);
  },500); 
 }
}

function justiceSkill1(){
 if(!justiceSkill1Check){
  justiceSkill1Check=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/justice_skill1.png>";
  setTimeout(function(){
   guard=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/justice_skill2.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     justiceSkill1();}
    ,200);
   }
   else{
    justiceSkill1Check=0;
    guard=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
 else{
  setTimeout(function(){
   guard=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/justice_skill2.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     justiceSkill1();
    },200);
   }
   else{
    justiceSkill1Check=0;
    guard=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
}


function jeanneSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/jeanne.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/jeanne.png>";
   setTimeout(function(){
    var jeanneHeal = document.getElementById("healBuffEffect");
    jeanneHeal.innerHTML = "<img src=item/回復エフェクト.png>";
    if(heroHP<=defaultHeroHP-jeanneSkill1status){
     heroHP=heroHP+jeanneSkill1status;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    else if(heroHP>defaultHeroHP-jeanneSkill1status){
     heroHP=defaultHeroHP;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    setTimeout(function(){
     var jeanneHeal = document.getElementById("healBuffEffect");
     jeanneHeal.innerHTML = " ";
     skillOut();
     SkillCheck=0;
    },500);
   },500);
  },500); 
 }
}

function marcosSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/marcos_skill1.png>";
   var marcosBuff = document.getElementById("attackBuffEffect");
   marcosBuff.innerHTML = "<img  src=item/強化エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/marcos_skill1.png>";
    skillOut();
    SkillCheck=0;
    attackBuff=attackBuff+(marcosSkill1status-1);
    setTimeout(function(){
     attackBuff=attackBuff-(marcosSkill1status-1);
     var marcosBuff = document.getElementById("attackBuffEffect");
     marcosBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function amairoSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  guard=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/amairo_skill1.png>";
  setTimeout(function(){
   heroAttack(amairoSkill1status*heroAttackStatus,direction,2);
   heroAttack(amairoSkill1status*heroAttackStatus,-direction,2);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/amairo_skill1Effect.png>";
   skillBlackBack.style.opacity=0.5;
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amairo.png>";
    guard=0;
    skillBlackBack.style.opacity=0;
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },250);
   },250);
  },500); 
 }
}

function aliceSkill1(){
 if(!aliceSkill1Check){
  aliceSkill1Check=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/alice.png>";
  setTimeout(function(){
   guard=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/alice_skill1.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     aliceSkill1();}
    ,200);
   }
   else{
    aliceSkill1Check=0;
    guard=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
 else{
  setTimeout(function(){
   guard=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/alice_skill1.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     aliceSkill1();
    },200);
   }
   else{
    aliceSkill1Check=0;
    guard=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
}

function thirteenSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   thirteenSkillBack1.style.opacity=0.8;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/thirteen.png>";
   var thirteenBuff = document.getElementById("attackBuffEffect");
   thirteenBuff.innerHTML = "<img  src=item/強化エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/thirteen.png>";
    
    var thirteenHeal = document.getElementById("healBuffEffect");
    thirteenHeal.innerHTML = "<img src=item/回復エフェクト.png>";
    if(heroHP<=defaultHeroHP-thirteenHealSkill1status){
     heroHP=heroHP+thirteenHealSkill1status;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    else if(heroHP>defaultHeroHP-thirteenHealSkill1status){
     heroHP=defaultHeroHP;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    setTimeout(function(){
     var thirteenHeal = document.getElementById("healBuffEffect");
     thirteenHeal.innerHTML = " ";
    },200);
    
    skillOut();
    SkillCheck=0;
    thirteenSkillBack1.style.opacity=0;
    attackBuff=attackBuff+(thirteenSkill1status-1);
    setTimeout(function(){
     attackBuff=attackBuff-(thirteenSkill1status-1);
     var thirteenBuff = document.getElementById("attackBuffEffect");
     thirteenBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function violettaSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/violetta.png>";
   var violettaBuff = document.getElementById("defendBuffEffect");
   violettaBuff.innerHTML = "<img  src=item/防御エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/violetta_skill1.png>";
    skillOut();
    SkillCheck=0;
    defendBuff=violettaSkill1status;
    setTimeout(function(){
     defendBuff=0;
     var violettaBuff = document.getElementById("defendBuffEffect");
     violettaBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function loveySkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/lovey.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = " ";
   var myh1 = document.getElementById("gustafSkillBulletBase");
   myh1.innerHTML = "<img id=gustafSkillBullet src=item/lovey_skill1.png>";
   heroAttack(loveySkill1status*heroAttackStatus,direction,3);
   heroAttack(loveySkill1status*heroAttackStatus,-direction,3);
   var gustafHeal = document.getElementById("healBuffEffect");
   gustafHeal.innerHTML = "<img src=item/回復エフェクト.png>";
   if(heroHP<=defaultHeroHP-loveySkill1status){
    heroHP=heroHP+loveySkill1status;
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
   }
   else if(heroHP>defaultHeroHP-loveySkill1status){
    heroHP=defaultHeroHP;
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
   }
   setTimeout(function(){
    var gustafHeal = document.getElementById("healBuffEffect");
    gustafHeal.innerHTML = " ";
   },200);
   setTimeout(function(){
    var myh1 = document.getElementById("gustafSkillBulletBase");
    myh1.innerHTML = " ";
    skillOut();
    SkillCheck=0;
   },700);
  },500);
 }
}

function yushaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  guard=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/yusha_skill1.png>";
  var myh1 = document.getElementById("spDef");
  myh1.classList.add('yushaSkill1');
  setTimeout(function(){
   setTimeout(function(){
    var myh1 = document.getElementById("spDef");
    myh1.classList.remove('yushaSkill1');
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/yusha.png>";
    heroAttack(yushaSkill1status*heroAttackStatus,direction,2);
    heroAttack(yushaSkill1status*heroAttackStatus,-direction,2);
    guard=0;
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },250);
   },250);
  },500); 
 }
}

function thomasSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/thomas_skill1.png>";
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
    defendBuff=thomasSkill1status;
    thomasBuffEffect.style.opacity=1;
    setTimeout(function(){
     defendBuff=0;
     tankKeep=0;
     thomasBuffEffect.style.opacity=1;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function amisterSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/amister.png>";
   var amisterBuff = document.getElementById("defendBuffEffect");
   amisterBuff.innerHTML = "<img  src=item/防御エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amister_skill1.png>";
    skillOut();
    SkillCheck=0;
    defendBuff=amisterSkill1status;
    setTimeout(function(){
     defendBuff=0;
     var amisterBuff = document.getElementById("defendBuffEffect");
     amisterBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function skillOut(){
 skill=0;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/"+spSet+".png>";
}

function getDamage(damageN){
 if(!gameClearCheck){
  if(guard==0){
   guard=1;
   heroHP=heroHP-(damageN*stageLevel*(1-defendBuff));
   if(heroHP<=0){
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar","0%");
    gameOver();
   }
   else{
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    var hitMyh = document.getElementById("damageHitBase");
    hitMyh.innerHTML = "<div id=damageHit></div>";
    damageHitBase.style.zIndex = 10;
    setTimeout(function(){
     hitMyh.innerHTML = " ";
     setTimeout(function(){
      hitMyh.innerHTML = "<div id=damageHit></div>";
      setTimeout(function(){
       hitMyh.innerHTML = " ";
       setTimeout(function(){
        hitMyh.innerHTML = "<div id=damageHit></div>";
        setTimeout(function(){
         hitMyh.innerHTML = " ";
         guard=0;
        },100);
       },100);
      },100);
     },100);
    },100);
   }
  }
 }
}

function heroAttack(heroAttack,heroAttackDirection,heroAttackRange){
 attackSuccess=0;
 var damageEffect = document.getElementById("damageEffectBase");
 damageEffect.innerHTML = " ";
 for(makeArray=0;makeArray<heroAttackRange;makeArray++){
  if(heroAttackDirection==1){
   sidePosiN=Number(sidePosi);
   attackSuccessMark=5*makeArray+sidePosiN;
   if(enemyFront.includes(attackSuccessMark)){
    attackSuccess=1;
    const rootDamageEffect = document.querySelector(':root');
    damagrEffectPosi=attackSuccessMark-2.5;
    damagrEffectPosi=String(damagrEffectPosi)+"%";
    rootDamageEffect.style.setProperty("--damageEffect", damagrEffectPosi);console.log(damagrEffectPosi);
    var damageEffect = document.getElementById("damageEffectBase");
    damageEffect.innerHTML = "<img id=damageEffect src=item/爆発.png>";
    damageEffect.style.zIndex = 10;
    setTimeout(function(){
     var damageEffect = document.getElementById("damageEffectBase");
     damageEffect.innerHTML = " ";
    },200);
   }
  }
  else{
   sidePosiN=Number(sidePosi);
   attackSuccessMark=-5*makeArray+sidePosiN;console.log(makeArray);
   if(enemyFront.includes(attackSuccessMark)){
    attackSuccess=1;
    const rootDamageEffect = document.querySelector(':root');
    damagrEffectPosi=attackSuccessMark-2.5;
    damagrEffectPosi=String(damagrEffectPosi)+"%";
    rootDamageEffect.style.setProperty("--damageEffect", damagrEffectPosi);console.log(damagrEffectPosi);
    var damageEffect = document.getElementById("damageEffectBase");
    damageEffect.innerHTML = "<img id=damageEffect src=item/爆発.png>";
    damageEffect.style.zIndex = 10;
    setTimeout(function(){
     var damageEffect = document.getElementById("damageEffectBase");
     damageEffect.innerHTML = " ";
    },200);
   }
  }
 }
 if(attackSuccess==1){
  enemyHP=enemyHP-(heroAttack*heroAttackStatus*attackBuff);
  if(enemyHP<=0){
   const rootEnemyHP = document.querySelector(':root');
   rootEnemyHP.style.setProperty("--enemyHPbar", "0%");
   if(!gameClearCheck){
    clearRoot();
   }
  }
  else{
   enemyHPchange=enemyHP*46.5/defaultEnemyHP;
   enemyHPchange=String(enemyHPchange);
   const rootEnemyHP = document.querySelector(':root');
   rootEnemyHP.style.setProperty("--enemyHPbar", enemyHPchange+"%");
  }
 }
}

function heroShooting(heroAttack,arriveTime){
 
  setTimeout(function(){
   if(enemyBack==1){
    enemyHP=enemyHP-(heroAttack*heroAttackStatus*attackBuff);
    if(enemyHP<=0){
     const rootEnemyHP = document.querySelector(':root');
     rootEnemyHP.style.setProperty("--enemyHPbar", "0%");
    if(!gameClearCheck){
     clearRoot();
    }
   }
   else{
    enemyHPchange=enemyHP*46.5/defaultEnemyHP;
    enemyHPchange=String(enemyHPchange);
    const rootEnemyHP = document.querySelector(':root');
    rootEnemyHP.style.setProperty("--enemyHPbar", enemyHPchange+"%");
   }
   document.documentElement.style.setProperty('--backDamageEffect', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--backDamageEffect', "0");
   },500);
  }
 },arriveTime); 
}

function gameOver(){
 skill=1;
 phase=0;
 skillOut();
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/ナタデココ化1.png>";
    setTimeout(function(){
     var myh1 = document.getElementById("selectedSp");
     myh1.innerHTML = "<img id=spDef src=item/ナタデココ化2.png>";
     setTimeout(function(){
      var myh1 = document.getElementById("selectedSp");
      myh1.innerHTML = "<img id=spDef src=item/ナタデココ化3.png>";
      setTimeout(function(){
       heroHP=defaultHeroHP;
       gameClearCheck=1;
       sidePosi=0;
       guard=0;
       mekahanAct1=0;
       granatAct1=0;
       libeluluAct1=0;
       kuiroAct1=0;
       yuraraAct1=0;
       cerberusAct1=0;
       ankokuAct1=0;
       heimdallrAct1=0;
       const root = document.querySelector(':root');
       root.style.setProperty("--shift", "0%");
       direction=1;
       document.documentElement.style.setProperty('--direction', direction);
       gameOverScreen.style.zIndex=60;
      },1000);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function clearRoot(){
 switch(selectedStage){
  case "mekahan":
   mekahanGameClear();
  break;
  case "granat":
   granatGameClear();
  break;
  case "libelulu":
   libeluluGameClear();
  break;
  case "kuiro":
   kuiroGameClear();
  break;
  case "yurara":
  yuraraGameClear();
  break;
  case "cerberus":
  cerberusGameClear();
  break;
  case "ankoku":
  ankokuGameClear();
  break;
  case "heimdallr":
  heimdallrGameClear();
  break;
 }
}

function mekahanGameClear(){
 mekahanAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--mekahanSet', "0");
   document.documentElement.style.setProperty('--miniMekahanField', "0");
   document.documentElement.style.setProperty('--mekahanOpacity4', "0");
   document.documentElement.style.setProperty('--mekahanEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--mekahanEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function granatGameClear(){
 granatAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--granatSet', "0");
   document.documentElement.style.setProperty('--granatEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--granatEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function libeluluGameClear(){
 libeluluAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--libeluluSet', "0");
   document.documentElement.style.setProperty('--libeluluEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--libeluluEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function kuiroGameClear(){
 kuiroAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--kuiroSet', "0");
   document.documentElement.style.setProperty('--kuiroEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--kuiroEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function yuraraGameClear(){
 yuraraAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--yuraraSet', "0");
   document.documentElement.style.setProperty('--yuraraEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--yuraraEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function cerberusGameClear(){
 cerberusAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--cerberusSet', "0");
   document.documentElement.style.setProperty('--cerberusEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--cerberusEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function ankokuGameClear(){
 ankokuAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--ankokuSet', "0");
   document.documentElement.style.setProperty('--ankokuEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--ankokuEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function heimdallrGameClear(){
 heimdallrAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--heimdallrSet', "0");
   document.documentElement.style.setProperty('--heimdallrEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--heimdallrEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function toClearResult(){
 heroHP=defaultHeroHP;
 gameClearScreen.style.zIndex=0;
 phase=0;
 sidePosi=0;
 const root = document.querySelector(':root');
 root.style.setProperty("--shift", "0%");
 document.documentElement.style.setProperty('--gameClearScreen', "1");
 direction=1;
 document.documentElement.style.setProperty('--direction', direction);

  setTimeout(function(){
   var beforeSpLv=heros[spSet].level;
   var beforeAtLv=heros[atSet].level;
   var beforeGuLv=heros[guSet].level;
   var beforeTaLv=heros[taSet].level;
   getExperience(spSet,50*stageLevel);
   getExperience(atSet,50*stageLevel);
   getExperience(guSet,50*stageLevel);
   getExperience(taSet,50*stageLevel);
   experienceResultFunction("sprinter",spSet);
   experienceResultFunction("attacker",atSet);
   experienceResultFunction("gunner",guSet);
   experienceResultFunction("tank",taSet);
   if(heros[spSet].level-beforeSpLv>0&&heros[spSet].level>=3&&heros[spSet].lv3!="null"&&beforeSpLv<=2){liberateHero(heros[spSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
   if(heros[atSet].level-beforeAtLv>0&&heros[atSet].level>=3&&heros[atSet].lv3!="null"&&beforeAtLv<=2){liberateHero(heros[atSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
   if(heros[guSet].level-beforeGuLv>0&&heros[guSet].level>=3&&heros[guSet].lv3!="null"&&beforeGuLv<=2){liberateHero(heros[guSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
   if(heros[taSet].level-beforeTaLv>0&&heros[taSet].level>=3&&heros[taSet].lv3!="null"&&beforeTaLv<=2){liberateHero(heros[taSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
   var getBMelem = document.getElementById("clearGetBM");
   getBMelem.innerHTML = 50*stageLevel;
   items["BM"].num=items["BM"].num+(50*stageLevel);
   if(selectedStage=="mekahan"){

    if(heros["stellea"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/stellea.png></div></div></div>";
     heros["stellea"].usable=1;
    }
    else if(heros["stellea"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["bravery"].num=items["bravery"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/勇気の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["bravery"].num=items["bravery"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/勇気の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["junk"].num=items["junk"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/ジャンクパーツ.png><div class=itemNum>×1</div>";
    }
   }
   
   else if(selectedStage=="granat"){
    if(heros["adam"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/adam.png></div></div></div>";
     heros["adam"].usable=1;
    }
    else if(heros["adam"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["aloneness"].num=items["aloneness"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/孤独の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["aloneness"].num=items["aloneness"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/孤独の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["seed"].num=items["seed"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/不思議な種.png><div class=itemNum>×1</div>";
    }
   }
   
   else if(selectedStage=="libelulu"){
    if(heros["luluca"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/luluca.png></div></div></div>";
     heros["luluca"].usable=1;
    }
    else if(heros["luluca"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["love"].num=items["love"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/愛の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["love"].num=items["love"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/愛の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["wand"].num=items["wand"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/汎用魔法杖.png><div class=itemNum>×1</div>";
    }
   }
   
   else if(selectedStage=="kuiro"){
    if(heros["amairo"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/amairo.png></div></div></div>";
     heros["amairo"].usable=1;
    }
    else if(heros["amairo"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["justice"].num=items["justice"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/正義の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["justice"].num=items["justice"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/正義の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["blade"].num=items["blade"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/上質な刃.png><div class=itemNum>×1</div>";
    }
   }
   else if(selectedStage=="yurara"){
    if(heros["kirara"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/kirara.png></div></div></div>";
     heros["kirara"].usable=1;
    }
    else if(heros["kirara"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     var myh = document.getElementById("getItemBase");
     items["love"].num=items["love"].num+1;
     myh.innerHTML = "<img style=height:100%; src=item/愛の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     var myh = document.getElementById("getItemBase");
     items["love"].num=items["love"].num+2;
     myh.innerHTML = "<img style=height:100%; src=item/愛の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["blade"].num=items["blade"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/上質な刃.png><div class=itemNum>×1</div>";
    }
   }
   
   else if(selectedStage=="cerberus"){
    if(heros["nanigashi"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/nanigashi.png></div></div></div>";
     heros["nanigashi"].usable=1;
    }
    else if(heros["nanigashi"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["justice"].num=items["justice"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/正義の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["justice"].num=items["justice"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/正義の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["seed"].num=items["seed"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/不思議な種.png><div class=itemNum>×1</div>";
    }
   }
   
   else if(selectedStage=="ankoku"){
    if(heros["yusha"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/yusha.png></div></div></div>";
     heros["yusha"].usable=1;
    }
    else if(heros["yusha"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["bravery"].num=items["bravery"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/勇気の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["bravery"].num=items["bravery"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/勇気の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["wand"].num=items["wand"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/汎用魔法杖.png><div class=itemNum>×1</div>";
    }
   }
   
   else if(selectedStage=="heimdallr"){
    if(heros["nidhoggr"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/nidhoggr.png></div></div></div>";
     heros["nidhoggr"].usable=1;
    }
    else if(heros["nidhoggr"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["aloneness"].num=items["aloneness"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/孤独の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["aloneness"].num=items["aloneness"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/孤独の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["junk"].num=items["junk"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/ジャンクパーツ.png><div class=itemNum>×1</div>";
    }
   }
   
   clearResultScreen.style.zIndex=0;
  },2000);
}

function getExperience(heroName,experienceNum){
  let exp=heros[heroName].exp+experienceNum;
  heros[heroName].exp  =exp;
  heros[heroName].level=levelCheck(exp);
  
  console.log(heroName+"level"+heros[heroName].level);

 
}

function levelCheck(heroExperience){
 levelBorder=50;
 for(n=0;levelBorder<=heroExperience;n++){
  levelBorder=(levelBorder*1.2)+levelBorder;
 }
 return n+1;
}

function experienceResultFunction(roleExperienceResult,heroName){
 switch(roleExperienceResult){
  case "sprinter":
   var myhExperience = document.getElementById("spExperienceBase");
  break;
  case "attacker":
   var myhExperience = document.getElementById("atExperienceBase");
  break;
  case "gunner":
   var myhExperience = document.getElementById("guExperienceBase");
  break;
  case "tank":
   var myhExperience = document.getElementById("taExperienceBase");
  break;
 }
  myhExperience.innerHTML=
  "<img class=experienceResult1 src=item/"+heroName+".png><div class=experienceResult2>Level<font id="+heroName+"ResultExperience></font></div>";  
  var elem = document.getElementById(heroName+"ResultExperience");
  elem.innerHTML = heros[heroName].level;
}

function liberateHero(heroName,sentence){
 heroLiberateScreen.style.zIndex=40;
 heros[heroName].usable=1;
 var myh = document.getElementById("liberateCondition");
 myh.innerHTML = sentence;
 
 let nodeheroLiberateImgBase=document.createElement('span');
 nodeheroLiberateImgBase.setAttribute('id',heroName+"liberateBase");
 var parentDiv = document.getElementById("heroLiberateImgBase");
 parentDiv.appendChild(nodeheroLiberateImgBase);
   
 var myh = document.getElementById(heroName+"liberateBase");
 myh.innerHTML = "<img src=item/"+heroName+".png class=heroLiberateImg>";
} 

function heroLiberateBack(){
 heroLiberateScreen.style.zIndex=-60;
 var myh = document.getElementById("heroLiberateImgBase");
 myh.innerHTML = " ";
}

