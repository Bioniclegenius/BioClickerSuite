BioUpdateResponse=function(response){
  var BioNewVersion=response;
  if(BioNewVersion!=BioVersion)
    BioUpdate=true;
}
BioUpdateInit=null;
checkForLoadVersion=function(){
  if(BioVersionNumberAssign!=null){
    BioUpdateResponse(BioVersionNumberAssign());
    Game.customLogic.splice(Game.customLogic.indexOf(checkForLoadVersion),1);
  }
}
BioUpdateCheck=function(){
  javascript:(function() {
    Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/BioVersionNumber.js');
  }());
  BioVersionNumberAssign=null;
  if(Game.customLogic['checkForLoadVersion']==null)
    Game.customLogic.push(checkForLoadVersion);
  else
    Game.customLogic['checkForLoadVersion']=checkForLoadVersion;
}