bioautobuy=function(){
  if(Game.prefs['BioAutoBuy']!=null)
    if(Game.prefs['BioAutoBuy']==1){
      for(var y in Game.Objects){
        var i=Game.Objects[y];
        if((Game.cookies>=i.price&&(i.amount<10*(11-i.id)||i.amount<Math.pow(2,10-i.id))&&i.amount<128)||i.displayName=="Prism")
          i.buy();
      }
      var nobuy=["One mind","Revoke Elder Covenant","Heavenly chip secret","Lovesick biscuit","Festive biscuit","Ghostly biscuit","Fool's biscuit","Bunny biscuit"];
      for(var y in Game.UpgradesInStore){
        var x=Game.UpgradesInStore[y];
        var canbuy=true;
        for(var t=0;t<nobuy.length;t++)
          if(x.name==nobuy[t])
            canbuy=false;
        if(Game.cookies>x.basePrice&&canbuy)
          x.buy();
      }
      if(Game.goldenCookie.time==0&&Game.goldenCookie.life>0){
        Game.goldenCookie.click();
        Game.CollectWrinklers();
      }
      if(Game.clickFrenzy>0)
        Game.ClickCookie();
    }
  if(Game.prefs['BioAutoClick']!=null)
    if(Game.prefs['BioAutoClick']==1)
      Game.ClickCookie();
}
autobuymenubutton=function(){
  if(Game.prefs['BioAutoBuy']==null)
    Game.prefs['BioAutoBuy']=0;
  if(Game.prefs['BioAutoClick']==null)
    Game.prefs['BioAutoClick']=0;
  var i=l('menu');
  var autobuyon=(Game.prefs['BioAutoBuy']==1)?'ON':'OFF';
  var autoclickon=(Game.prefs['BioAutoClick']==1)?'ON':'OFF';
  var button="<div class=\"listing\"><a class=\"option\" id=\"BioAutoBuy\" onclick=\"Game.Toggle('BioAutoBuy','BioAutoBuy','Autobuy ON','Autobuy OFF');\">Autobuy "+autobuyon+"</a><label>Automatically purchases stuff and autoclicks golden cookies if enabled. NOTE: WILL NOT BUY 'ONE MIND'.</label></div>";
  var button2="<div class=\"listing\"><a class=\"option\" id=\"BioAutoClick\" onclick=\"Game.Toggle('BioAutoClick','BioAutoClick','Autoclick ON','Autoclick OFF');\">Autoclick "+autoclickon+"</a><label>Automatically clicks the big cookie.</label></div>";
  button+=button2;
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