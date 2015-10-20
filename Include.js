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
  var i=l('timers').innerHTML;
  if(Game.timersEl['goldenmax']==null)
    i+="<div style=\"display: block; width: 100%;\" id=\"timer-goldenmax\"></div>";
  if(Game.timersEl['goldenmin']==null)
    i+="<div style=\"display: block; width: 100%; margin-top: -8px;\" id=\"timer-goldenmin\"></div>";
  l('timers').innerHTML=i;
  var timers=['goldenmax','goldenmin'];
  for(var t in timers)
    Game.timersEl[timers[t]]=l('timer-'+timers[t]);
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