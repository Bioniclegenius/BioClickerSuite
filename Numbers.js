function Beautify2(value,floats){
  var str=Math.abs(value).toString();
  var formatter=numberFormatters[1];
  var str2=formatter(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
  str2=str2.substring(str2.indexOf(" ")+1);
  var counter=0;
  var start=str.length;
  if(str.indexOf(".")!=-1)
    start=str.indexOf(".");
  for(var x=start;x>0;x--){
    if(!(counter%3)&&counter>0)
      str=str.substring(0,x)+","+str.substring(x);
    counter++;
  }
  if(str.indexOf(".")!=-1){
    str=str.substr(0,str.indexOf(".")+4);
  }
  if(value<0)
    str="-"+str;
  if(value>1000000)
    str+=" ("+str2+")";
  return str;
}
Beautify=Beautify2;
BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;