//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=16; attempts=0; attemptsMax=5;
var score=0; scoreMax=16; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#008080"; colorText="#000000"; colorSele="#008080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=2; messageOk="Felicidades!"; messageTime="Se ha Acabado el Tiempo"; messageError="Intente de Nuevo"; messageAttempts="Se han Acabado los Intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[28,-19,156,118,150,171,15,123,300,192,93,418,383,299,286,309]; var posY=[104,47,121,176,236,293,307,353,15,68,1,61,125,214,266,174];
var coorx=["NjA=", "MzY=", "MTM3", "ODU=", "MTM4", "MTM2", "ODc=", "MTE1", "MjY0", "MjIw", "ODU=", "NDA2", "Mzg1", "Mjk0", "Mjgx", "Mjky"]; var coory=["NzA=", "NDI=", "MTE0", "MTg5", "MjIy", "Mjgy", "Mjk4", "MzMy", "Mzc=", "Mzg=", "MjM=", "ODU=", "MTA0", "MjE0", "MjY2", "MTkw"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Miño", "Tambre", "Duero", "Tajo", "Guadiana", "Guadalquivir", "Río Tinto", "Guadalete", "Bidasoa", "Nervión", "Eo", "Ter", "Llobregat", "Jύcar", "Segura", "Turia"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="TUhF"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="Arial, Helvetica, sans-serif";fActi="Arial, Helvetica, sans-serif";fEnun="Arial, Helvetica, sans-serif";
