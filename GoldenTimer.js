var prevcheck=0;
function goldendraw(){
  var timecheck=Game.fps*60*1;
  if(Math.floor(Game.T/timecheck)!=prevcheck){
    BioUpdateCheck();
    prevcheck=Math.floor(Game.T/timecheck);
  }
  var versiontext='v.'+Game.version+(Game.beta?' <span style="color:#ff0;">beta</span>':'');
  var minseconds=(Math.floor((Game.goldenCookie.getMinTime()-Game.goldenCookie.time)/Game.fps)%60);
  var maxseconds=(Math.floor((Game.goldenCookie.getMaxTime()-Game.goldenCookie.time)/Game.fps)%60);
  var mintime=Math.floor((Game.goldenCookie.getMinTime()-Game.goldenCookie.time)/Game.fps/60);
  mintime+=":"+Math.floor(minseconds/10)+minseconds%10;
  if(Game.goldenCookie.getMinTime()-Game.goldenCookie.time<0)
    mintime="Past";
  var maxtime=Math.floor((Game.goldenCookie.getMaxTime()-Game.goldenCookie.time)/Game.fps/60);
  maxtime+=":"+Math.floor(maxseconds/10)+maxseconds%10;
  var timetext=mintime+" - "+maxtime;
  if(Game.goldenCookie.time==0){
    var title='Cookie Clicker';
    if(Game.season=='fools')
      title='Cookie Baker';
    title==Beautify(Game.cookies)+' '+(Game.cookies==1?'cookie':'cookies')+' - '+title;
    title="(G) "+title;
    document.title=title;
    timetext="<font color=\"DCAF00\">Spawned!</font>";
  }
  versiontext+="<br />";
  if(BioUpdate)
    versiontext+="<font color=\"FF0000\">";
  versiontext+="BioV."+BioVersion;
  if(BioUpdate){
    versiontext+="</font> ";
    versiontext+="<button onclick=\"javascript:(function(){Game.LoadMod('https://raw.githubusercontent.com/Bioniclegenius/BioClickerSuite/master/Import.js');}());\">Update</button>";
  }
  versiontext+="<br />"+timetext;
  l('versionNumber').innerHTML=versiontext;
  var offset=Game.goldenCookie.getMaxTime()-Game.goldenCookie.getMinTime();
  offset/=Game.goldenCookie.getMaxTime();
  offset*=100;
  Game.timersEl['goldenmax'].style.width=(100-(Game.goldenCookie.time/Game.goldenCookie.getMaxTime())*100)+'%';
  Game.timersEl['goldenmin'].style.width=(100-(Game.goldenCookie.time/Game.goldenCookie.getMaxTime())*100-offset)+'%';
  if(Game.goldenCookie.life>0){
    Game.timersEl['goldenmax'].style.display='none';
    Game.timersEl['goldenmin'].style.display='none';
  }
  else{
    Game.timersEl['goldenmax'].style.display='block';
    if(Game.goldenCookie.time>Game.goldenCookie.getMinTime())
      Game.timersEl['goldenmin'].style.display='none';
    else
      Game.timersEl['goldenmin'].style.display='block';
  }
}
if(Game.customDraw['goldendraw']==null)
  Game.customDraw.push(goldendraw);
else
  Game.customDraw['goldendraw']=goldendraw;