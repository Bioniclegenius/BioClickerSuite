bioautobuy=function(){
  if(Game.prefs['BioAutoBuy']!=null)
    if(Game.prefs['BioAutoBuy']==1){
      for(var y in Game.Objects){
        var i=Game.Objects[y];
        if((Game.cookies>=i.price&&(i.amount<10*(11-i.id)||i.amount<Math.pow(2,10-i.id))&&i.amount<128)||i.displayName=="Prism")
          i.buy();
      }
      for(var y in Game.UpgradesInStore){
        var x=Game.UpgradesInStore[y];
        if(Game.cookies>x.basePrice&&x.name!="One mind"&&x.name!="Revoke Elder Covenant")
          x.buy();
      }
      if(Game.goldenCookie.time==0&&Game.goldenCookie.life>0){
        Game.goldenCookie.click();
        Game.CollectWrinklers();
      }
    }
}
autobuymenubutton=function(){
  if(Game.prefs['BioAutoBuy']==null)
    Game.prefs['BioAutoBuy']=0;
  var i=l('menu');
  var autobuyon=(Game.prefs['BioAutoBuy']==1)?'ON':'OFF';
  var button="<div class=\"listing\"><a class=\"option\" id=\"BioAutoBuy\" onclick=\"Game.Toggle('BioAutoBuy','BioAutoBuy','Autobuy ON','Autobuy OFF');\">Autobuy "+autobuyon+"</a><label>Automatically purchases stuff and autoclicks golden cookies if enabled. NOTE: WILL NOT BUY 'ONE MIND'.</label></div>";
  if(Game.onMenu=="prefs"&&i.childNodes.length>0){
    var inmenu=false;
    for(var k=0;k<i.childNodes[2].childNodes.length;k++)
      if(i.childNodes[2].childNodes[k].childNodes.length>0)
        if(i.childNodes[2].childNodes[k].childNodes[0].id=="BioAutoBuy")
          inmenu=true;
    if(inmenu==false){
      var str2=i.childNodes[2].innerHTML;
      var str1='';
      var found=0;
      for(var k=0;k<str2.length;k++)
        if(str2.substring(k,k+4)=="<div")
          found=k;
      str1=str2.substring(0,found)+button+str2.substring(found);
      i.childNodes[2].innerHTML=str1;
    }
  }
}
if(Game.customLogic['autobuymenubutton']==null)
  Game.customLogic.push(autobuymenubutton);
else
  Game.customLogic['autobuymenubutton']=autobuymenubutton;
if(Game.customLogic['bioautobuy']==null)
  Game.customLogic.push(bioautobuy);
else
  Game.customLogic['bioautobuy']=bioautobuy;