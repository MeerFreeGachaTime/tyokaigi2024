function localSave(){
 for(var elem in heros){
  localStorage.setItem(elem+"Usable", heros[elem].usable);
  localStorage.setItem(elem+"Exp"   , heros[elem].exp);
  localStorage.setItem(elem+"Level" , heros[elem].level);
 }
 for(var elem in items){
  localStorage.setItem(elem+"Num", items[elem].num);
  localStorage.setItem(elem+"Made"   , items[elem].made);
 }
}

function localLoad(){
 for(var elem in heros){
  heros[elem].usable=localStorage.getItem(elem+'Usable');
  heros[elem].exp   =localStorage.getItem(elem+'Exp'   );
  heros[elem].level =localStorage.getItem(elem+'Level' );
 }
 for(var elem in items){
  items[elem].num =localStorage.getItem(elem+'Num' );
  items[elem].made=localStorage.getItem(elem+'Made');
 }
}
