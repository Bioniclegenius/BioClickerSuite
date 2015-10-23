var BioVersion="Unset";
var BioUpdate=false;
BioInitialVersionSet=function(response){
  BioVersion=response;
  BioUpdate=false;
}
BioVersionNumberAssign=null;
javascript:(function() {
  Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/BioVersionNumber.js');
}());
BioUpdateInit=function(){
  javascript:(function() {
    Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/UpdateChecker.js');
  }());
  javascript:(function() {
    Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/Numbers.js');
  }());
  javascript:(function() {
    Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/GoldenTimer.js');
  }());
  javascript:(function() {
    Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/ThirdParty.js');
  }());
  javascript:(function() {
    Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/autobuy.js');
  }());
  var timers=['frenzy','elderFrenzy','clot','clickFrenzy','goldenmax','goldenmin'];
  var str='';
  for(var i in timers)
    str+='<div id="timer-'+timers[i]+'"></div>';
  l('timers').innerHTML=str;
  Game.timersEl=[];
  for(var i in timers)
    Game.timersEl[timers[i]]=l('timer-'+timers[i]);
  Game.timersEl['goldenmin'].style.margin="-8px 0px 0px 0px";
  if(Game.customLogic['BioCheckForUpdateLoad']==null)
    Game.customLogic.push(BioCheckforUpdateLoad);
  else
    Game.customLogic['BioCheckForUpdateLoad']=BioCheckForUpdateLoad;
}
BioCheckforUpdateLoad=function(){
  if(BioVersionNumberAssign!=null){
    Game.customLogic.splice(Game.customLogic.indexOf(BioCheckforUpdateLoad),1);
    BioInitialVersionSet(BioVersionNumberAssign());
  }
}