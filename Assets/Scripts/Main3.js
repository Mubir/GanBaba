#pragma strict


public var screenwidth:double;
public var screenheight:double;

public var first_level :int;
public var level_scores:int[];

public var level_name:String[];



public var image_level:Texture[];

public var bol:int;



var BoxSkin : GUISkin;
var ScoreSkin : GUISkin;
var Button: GUISkin;

var move:float;
var moveSpeed:float;
var onMove:int;

var leftMove:int;
var leftMoveT:float;

var rightinc:int;
var leftinc:int;

var dif:double;


var leftMovebool:int ;
var rightMovebool:int;

//for slide start

var minSwipeDistY : float;

var minSwipeDistX : float;

var Swipe: GUIText;

private var startPos :Vector2; 
//for slide end

var scrollPosition:Vector2;

function Start () 
{
scrollPosition=Vector2.zero;

	
	//level_name = ["¸nv ¯—i" ,"গুহা স্তর", "জঙ্গল স্তর" , "কৃষি স্তর" , "মিশর সভ্যতা স্তর" , "৫" , "৬" , "৭" , "৮" , "৯" , "১০"];
	level_name = ["¸nv ¯—i" ,"¸nv ¯—i", "R½j ¯—i" , "K…wl ¯—i" , "wgki mf¨Zv ¯—i" , "5" , "6" , "7" , "8" , "9" , "10"];
	level_scores = [0,100,200,300,400,500,600,700,800,900,1000];
}

function Update () 
{
 if (Input.GetKeyDown(KeyCode.Escape)) 
 {
 Application.LoadLevel("startscreen");
 }
	


for (var touch : Touch in Input.touches) 
{
        if (touch.phase == TouchPhase.Moved)
        {
                 scrollPosition.x +=-touch.deltaPosition.x*3;       // dragging
        }
       // Debug.Log(touch.deltaPosition.y);
}
}

function OnGUI()
{
	screenwidth	= Screen.width;
	screenheight = Screen.height;
	
	
	     
	     
	    
	     
	     scrollPosition = GUI.BeginScrollView(new Rect(0,20,screenwidth, screenheight), scrollPosition,Rect(0, 0,screenwidth*2.2 , screenheight-20),false,false);
	
	GUI.skin =Button;
	if( GUI.Button(Rect(screenwidth*.1,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	 	
    {Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(screenwidth*.3,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(screenwidth*.5,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))		
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(screenwidth*.7,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	 GUI.skin =Button;
	if( GUI.Button(Rect(screenwidth*.9,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(screenwidth*1.1,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{
	Application.LoadLevel("Sublevel");
	}
	if( GUI.Button(Rect(screenwidth*1.3,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))		
{}
	if( GUI.Button(Rect(screenwidth*1.5,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(screenwidth*1.7,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(screenwidth*1.9,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.15,screenheight*0.60),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(screenwidth*.1,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(screenwidth*.3,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(screenwidth*.5,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(screenwidth*.7,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"4");
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(screenwidth*.9,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(screenwidth*1.1,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(screenwidth*1.3,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(screenwidth*1.5,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(screenwidth*1.7,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(screenwidth*1.9,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"10");
	
	
	GUI.DrawTexture(Rect(screenwidth*.1,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level]);
	GUI.DrawTexture(Rect(screenwidth*.3,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+1]);
	GUI.DrawTexture(Rect(screenwidth*.5,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+2]);
	GUI.DrawTexture(Rect(screenwidth*.7,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(screenwidth*.9,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level]);
	GUI.DrawTexture(Rect(screenwidth*1.1,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+1]);
	GUI.DrawTexture(Rect(screenwidth*1.3,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+2]);
	GUI.DrawTexture(Rect(screenwidth*1.5,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(screenwidth*1.7,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(screenwidth*1.9,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(screenwidth*.1,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(screenwidth*.3,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(screenwidth*.5,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(screenwidth*.7,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	GUI.skin = BoxSkin;
	if(GUI.Button(Rect(screenwidth*.9,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(screenwidth*1.1,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(screenwidth*1.3,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(screenwidth*1.5,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	if(GUI.Button(Rect(screenwidth*1.7,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	if(GUI.Button(Rect(screenwidth*1.9,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(screenwidth*.11,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*.31,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*.51,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*.71,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	

	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(screenwidth*.91,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*1.11,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*1.31,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*1.51,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(screenwidth*1.71,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(screenwidth*1.91,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	GUI.EndScrollView();
}