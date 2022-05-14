//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=10; scoreDec=5;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#C0C0C0"; colorButton="#408080"; colorText="#FFFFFF"; colorSele="#8080FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=10; messageOk="FELICIDADES LO HAS HECHO MIUY BIEN"; messageTime=""; messageError="NO TE PREOCUPES, VUELE A INTENTARLO"; messageErrorG="NO TE PREOCUPES, VUELE A INTENTARLO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#00FF00"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1JVQ0lHUkFNQQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Ug==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","SQ==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Tw==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Ug==","Og==","RA==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Ug==","SQ==","Tw==","RQ==","Tw==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Tw==","Og==","Vg==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Uw==","Og==","QQ==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Ug==","SQ==","Tw==","Qg==","RQ==","Uw==","QQ==","WQ==","QQ==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","TA==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","TA==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Ug==","SQ==","Tw==","Tg==","QQ==","Vg==","SQ==","QQ==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="]];
var x1=[6,3,3,9,7];
var y1=[6,9,12,2,5];
var x2=[10,11,10,9,7];
var y2=[6,9,12,9,12];
var imaCW=["","","","",""];
var audioCW=["","","","",""];
var defCW=["Se encuentra al norte de la peninsula iberica que discurre en su mayor parte por tierras de galicia","Es un río situado al norte de España, en la vertiente cantabrica este nace en la comarca de campoo-los valles","Es uno de los ríos más importantes de la vertiene cantabrica. Nace en pedrafita do cebreiro","Es un rio que discurre por asturias y desemboca en el mar cantabrico en la ria de Tina Mayor","fformado por un estrecho desfiladero entre rocas calizas y desemboca en el concejo de oseja de sajambre"];
var altCW=["","","","",""];
var colNum=15;
var rowNum=15;
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="Arial, Helvetica, sans-serif";fActi="Arial, Helvetica, sans-serif";fEnun="Arial, Helvetica, sans-serif";
