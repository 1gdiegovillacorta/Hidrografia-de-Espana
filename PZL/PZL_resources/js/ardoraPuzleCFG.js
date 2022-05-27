//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=20;
var successes=0; successesMax=25; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Arial, Helvetica, sans-serif";
var fActi="";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=2; messageOk="Felicidades!"; messageTime="Se ha Terminado el Tiempo"; messageError="Intente de Nuevo"; messageAttempts="Se han Terminado los Intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]]; var imaSel=0; texSel=0;
var original="PZL_resources/media/original.jpg";
var board=[["PZL_resources/media/cGllY2UxXzE=.jpg","PZL_resources/media/cGllY2UyXzE=.jpg","PZL_resources/media/cGllY2UzXzE=.jpg","PZL_resources/media/cGllY2U0XzE=.jpg","PZL_resources/media/cGllY2U1XzE=.jpg"],["PZL_resources/media/cGllY2UxXzI=.jpg","PZL_resources/media/cGllY2UyXzI=.jpg","PZL_resources/media/cGllY2UzXzI=.jpg","PZL_resources/media/cGllY2U0XzI=.jpg","PZL_resources/media/cGllY2U1XzI=.jpg"],["PZL_resources/media/cGllY2UxXzM=.jpg","PZL_resources/media/cGllY2UyXzM=.jpg","PZL_resources/media/cGllY2UzXzM=.jpg","PZL_resources/media/cGllY2U0XzM=.jpg","PZL_resources/media/cGllY2U1XzM=.jpg"],["PZL_resources/media/cGllY2UxXzQ=.jpg","PZL_resources/media/cGllY2UyXzQ=.jpg","PZL_resources/media/cGllY2UzXzQ=.jpg","PZL_resources/media/cGllY2U0XzQ=.jpg","PZL_resources/media/cGllY2U1XzQ=.jpg"],["PZL_resources/media/cGllY2UxXzU=.jpg","PZL_resources/media/cGllY2UyXzU=.jpg","PZL_resources/media/cGllY2UzXzU=.jpg","PZL_resources/media/cGllY2U0XzU=.jpg","PZL_resources/media/cGllY2U1XzU=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UFpM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="Arial, Helvetica, sans-serif";fActi="Arial, Helvetica, sans-serif";fEnun="Arial, Helvetica, sans-serif";
