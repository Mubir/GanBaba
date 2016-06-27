#pragma strict

public var screenwidth:double;
public var screenheight:double;
var settingV:boolean;
var shareV:boolean;


//texture
public var GanBaba:Texture;
public var setting:Texture;
public var info:Texture;
public var question:Texture;
public var sound:Texture;
public var sound2:Texture;

public var share:Texture;
public var youtube:Texture;
public var twitter:Texture;
public var facebook:Texture;
public var facebook2:Texture;


//move
function Start () {
settingV=false;
shareV=false;
}

function Update () {

}

function OnGUI()
{


screenwidth=Screen.width;
screenheight=Screen.height;

if(GUI.Button(Rect((screenwidth*.3),(screenheight*.1),GanBaba.width,GanBaba.height),GanBaba,""))
{

Application.LoadLevel("slidingmenueF");
}

GUI.depth =-1000;
if(GUI.Button(Rect(screenwidth*.08,screenheight*.80,35,35),setting,""))
{
settingV=!settingV;
Debug.Log(settingV);
}

if(settingV==false)
{
Debug.Log("settingV is  false" );sound=setting;
GUI.Button(Rect(screenwidth*.08,screenheight*.80,35,35),info,"");
GUI.Button(Rect(screenwidth*.08,screenheight*.80,35,35),question,"");
GUI.Button(Rect(screenwidth*.08,screenheight*.80,35,35),sound,"");
}

if(settingV==true){
Debug.Log("settingV is  true" );
sound=sound2;
GUI.Button(Rect(screenwidth*.08,(screenheight*.80)-105,35,35),info,"");
GUI.Button(Rect(screenwidth*.08,(screenheight*.80)-70,35,35),question,"");
GUI.Button(Rect(screenwidth*.08,(screenheight*.80)-35,35,35),sound,"");
}



//********************<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>***********************

if(GUI.Button(Rect(screenwidth*.85,screenheight*.80,35,35),share,""))
{
shareV=!shareV;
Debug.Log(settingV);
}

if(shareV==false)
{
Debug.Log("settingV is  false" );facebook=share;
GUI.Button(Rect(screenwidth*.85,screenheight*.80,35,35),youtube,"");
GUI.Button(Rect(screenwidth*.85,screenheight*.80,35,35),twitter,"");
GUI.Button(Rect(screenwidth*.85,screenheight*.80,35,35),facebook,"");
}

if(shareV==true){
Debug.Log("settingV is  true" );
facebook=facebook2;
GUI.Button(Rect(screenwidth*.85,(screenheight*.80)-105,35,35),youtube,"");
GUI.Button(Rect(screenwidth*.85,(screenheight*.80)-70,35,35),twitter,"");
GUI.Button(Rect(screenwidth*.85,(screenheight*.80)-35,35,35),facebook,"");
}

}