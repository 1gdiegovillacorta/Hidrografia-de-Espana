//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Felicidades"; messageTime="Se ha acabado el Tiempo"; messageError="Intente de Nuevo"; messageErrorG="Intente de Nuevo"; messageAttempts="Se han acabado los Intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q0dS"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["SA==","SQ==","RA==","Ug==","Tw==","Rw==","Ug==","QQ==","Rg==","SQ==","QQ==","","","",""],["","","","","","","SQ==","","","","","","","",""],["","","","","","","Tw==","","","","","","","",""],["","","","","","","","","","","Qw==","","","",""],["Vg==","RQ==","Ug==","VA==","SQ==","RQ==","Tg==","VA==","RQ==","","QQ==","","","",""],["","","","QQ==","","","","","Qg==","","Tg==","","","",""],["","","","Sg==","","","","","Ug==","","VA==","","","",""],["","","","Tw==","","","","","Tw==","","QQ==","","","",""],["","","","","","","","","","","Qg==","","","",""],["","","","TQ==","RQ==","RA==","SQ==","VA==","RQ==","Ug==","Ug==","QQ==","Tg==","RQ==","QQ=="],["","","","","QQ==","VA==","TA==","QQ==","Tg==","VA==","SQ==","Qw==","QQ==","",""],["","","","","","","","","","","Qw==","","","",""],["","","","","","","","","","","QQ==","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""]];
var x1=[1,1,5,7,11,4,9,4,5,6,7,8,9,10,12];
var y1=[1,5,11,1,4,5,5,10,10,10,10,10,10,10,10];
var x2=[11,9,13,7,11,4,9,15,5,6,7,8,9,10,12];
var y2=[1,5,11,3,13,8,8,10,11,11,11,11,11,11,11];
var imaCW=["","","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","","",""];
var defCW=["Estudio de las masas de agua de la tierra y en un sentido mas estricto, recopilacion y representacion de datos relativos al fondo del oceano, las costas, las mareas, las corrientes de agua, etc.","Un conjunto de cuencas hidrograficas cuyos rios con sus afluentes desembocan en un mismo mar","Vertiente cuyos rios desembocan en el oceano Atlantico","Corrinte de agua que fluye con continuidad por un cauce en la superficie terrestre o bien puede ser subterraneo","Vertiente cuyos rios son cortos, caudalosos, y tienen un regimen fluvial","Nombre del rio mas largo de la Peninsula Iberica","El rio mas caudaloso de Espana","En esta Vertiente se encuentran rios tales como: El Ebro, El Jucar, El Lobregat, etc","","","","","","",""];
var altCW=["","","","","","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="Arial, Helvetica, sans-serif";fActi="Arial, Helvetica, sans-serif";fEnun="Arial, Helvetica, sans-serif";
