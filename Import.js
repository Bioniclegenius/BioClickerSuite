javascript:(function() {
  Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/Include.js');
}());
BioUpdateInit=null;
checkForLoad=function(){
  if(BioUpdateInit!=null){
    BioUpdateInit();
    Game.customLogic.splice(Game.customLogic.indexOf(checkForLoad),1);
  }
}
if(Game.customLogic['checkForLoad']==null)
  Game.customLogic.push(checkForLoad);
else
  Game.customLogic['checkForLoad']=checkForLoad;