#pragma strict


public var screenwidth:double;
public var screenheight:double;

public var first_level :int;
public var level_scores:int[];

public var level_name:String[];


public var image_back  : Texture;
public var image_side_left  : Texture;
public var image_side_right  : Texture;
public var image_level:Texture[];
public var back  : Texture;



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

function Start () 
{
dif= Screen.width*.2;
rightinc=0;
leftinc=0;
	first_level =1;
	 moveSpeed=3.5f;
	 onMove=3;
	move=0;
	leftMove=0;
	
	leftMovebool=0;
	rightMovebool=0;
	
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
	if (Input.touchCount > 0) 
		{

		var touch : Touch = Input.touches[0];

		switch (touch.phase) 

			{

			case TouchPhase.Began:

			startPos = touch.position;

			break;


			case TouchPhase.Ended:
			var swipeDistVertical : float;
			swipeDistVertical = (new Vector3(0, touch.position.y, 0) - new Vector3(0, startPos.y, 0)).magnitude;

				if (swipeDistVertical > minSwipeDistY) 
				{
					var swipeValue : float;
					swipeValue = Mathf.Sign(touch.position.y - startPos.y);

					if (swipeValue > 0)//up
					{	
						//Jump ();

						//Swipe.text = "Up Swipe";
					}
					else if (swipeValue < 0)//down
					{	
						//Shrink ();
						//Swipe.text = "Down Swipe";
					}
				}
				var swipeDistHorizontal : float;

				swipeDistHorizontal = (new Vector3(touch.position.x,0, 0) - new Vector3(startPos.x, 0, 0)).magnitude;

				if (swipeDistHorizontal > minSwipeDistX) 
				{
					swipeValue = Mathf.Sign(touch.position.x - startPos.x);

					if (swipeValue > 0)//right
					{
						//MoveRight ();
leftinc--;
	rightinc--;
	if(leftinc<1 && rightinc<1)
	{
	
	leftinc=0;
	rightinc=0;
	}
     else
     {leftMovebool=1;}
	move=0f;
	rightMovebool=0;
	
	Debug.Log("leftinc =="+ leftinc +"right inc  "+rightinc);
						//Swipe.text = "Right Swipe";
						
						
						
					}
					else if (swipeValue < 0)//left
					{	
						//MoveLeft ();
rightinc++;
	leftinc++;
	if(leftinc>6 || rightinc>6)
	{
	rightinc=7;
	leftinc=7;
	}
	else
	{
	rightMovebool=1;
	}
	Debug.Log("leftinc =="+ leftinc +"right inc  "+rightinc);
	move=0f;
	
	leftMovebool=0;
						//Swipe.text = "Left Swipe";
						
						
						
					}
				}
				break;
			}
		}	
	
}


function OnGUI()
{
	screenwidth	= Screen.width;
	screenheight = Screen.height;
	if(GUI.Button(Rect(0,screenheight*0.01,screenwidth*0.1,screenheight*0.1),back,""))
	{
	Application.LoadLevel("startscreen");
	}
	/*
	if(GUI.Button(Rect(0,screenheight*0.01,screenwidth*0.1,screenheight*0.1),image_side_left,""))
	{
	
	leftinc--;
	rightinc--;
	if(leftinc<1 && rightinc<1)
	{
	
	leftinc=0;
	rightinc=0;
	}
     else
     {leftMovebool=1;}
	move=0f;
	rightMovebool=0;
	
	Debug.Log("leftinc =="+ leftinc +"right inc  "+rightinc);
	
	}
	if(GUI.Button(Rect(screenwidth*.9,screenheight*0.01,screenwidth*0.1,screenheight*0.1),image_side_right,""))
	{
	
	rightinc++;
	leftinc++;
	if(leftinc>6 || rightinc>6)
	{
	rightinc=7;
	leftinc=7;
	}
	else
	{
	rightMovebool=1;
	}
	Debug.Log("leftinc =="+ leftinc +"right inc  "+rightinc);
	move=0f;
	
	leftMovebool=0;
	
	
	}*/
	     
	     
	     
	     
	     //////////******************************rightinc==0 **************************
	     
	     
	if(rightinc==0 && leftinc==0){
	 GUI.skin =Button;	
	if( GUI.Button(Rect(screenwidth*.1,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	
	{}	 	
	if( GUI.Button(Rect(screenwidth*.3,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}	
	if( GUI.Button(Rect(screenwidth*.5,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))	
	{}	
	if( GUI.Button(Rect(screenwidth*.7,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))
	{}	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	
	
	GUI.DrawTexture(Rect(screenwidth*.1,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	
	GUI.DrawTexture(Rect(screenwidth*.3,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(screenwidth*.5,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	
	GUI.DrawTexture(Rect(screenwidth*.7,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.TextArea(Rect(screenwidth*.1,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]);
	GUI.TextArea(Rect(screenwidth*.3,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]);
	GUI.TextArea(Rect(screenwidth*.5,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]);
	GUI.TextArea(Rect(screenwidth*.7,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]);
	GUI.skin = BoxSkin;
	

	if(GUI.Button(Rect(screenwidth*.1,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(screenwidth*.3,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(screenwidth*.5,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(screenwidth*.7,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	//†¯‹vi
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(screenwidth*.12,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*.32,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*.52,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*.72,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(screenwidth*.12,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*.32,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*.52,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*.72,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(screenwidth*.12,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*.32,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*.52,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*.72,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;	
	if( GUI.Button(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))
	{}		 	
	if( GUI.Button(Rect(screenwidth*1.1,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}	
	if( GUI.Button(Rect(screenwidth*1.3,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))	
	{}		
	if( GUI.Button(Rect(screenwidth*1.7,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]);
	GUI.TextArea(Rect(screenwidth*1.3,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]);
	GUI.TextArea(Rect(screenwidth*1.5,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]);
	GUI.TextArea(Rect(screenwidth*1.7,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]);
	
	GUI.DrawTexture(Rect(screenwidth*.9,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(screenwidth*1.3,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(screenwidth*1.5,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(screenwidth*1.7,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(screenwidth*.9,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	GUI.skin = BoxSkin;
	if(GUI.Button(Rect(screenwidth*1.3,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	GUI.skin = BoxSkin;
	if(GUI.Button(Rect(screenwidth*1.5,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	GUI.skin = BoxSkin;
	if(GUI.Button(Rect(screenwidth*1.7,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(screenwidth*.92,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*1.32,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*1.52,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*1.72,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(screenwidth*.92,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*1.32,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*1.52,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*1.72,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(screenwidth*.92,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*1.32,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*1.52,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*1.72,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//new end
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/////////**********************************rightinc==1*************
	
	
	if(rightinc==1 && rightMovebool==1){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"5"))	 	
	{
	Application.LoadLevel("Sublevel");
	}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"6"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"7"))		
	{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"8"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//new end
	}
	
	
	
	
	
	//////***************************<<<<<<<<<<<<<<<<<> rightinc == 2>>>>>>>>>>>>>>>>>>>>>>>>
	
	if(rightinc==2 && rightMovebool==1){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
    {}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"5"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"6"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"7"))		
   {}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"8"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//new end
	
	}
	
	
	
	
	///********************>>>>>>>>>>>>>>>>>>>>>>> ringtinc ==3 >>>>>>>>>>>>>>>>>>>>
	
	
	if(rightinc==3 && rightMovebool==1){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
    {}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//new end
	}
	
	
	
	
	
	if(rightinc==4 && rightMovebool==1){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
    {}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
		//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"10");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	//new end
	}
	
	if(rightinc==6 && rightMovebool==1){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
    {}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"10");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	//new end
	}
	
		if(rightinc==5 && rightMovebool==1){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
    {}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"10");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1)))-move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	//new end
	}
	
	
	
	/*.........>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>MMMMMMMMMMMMMMMMM<<<<<<<<<<<<<<<<<<
	////////////////////////////?????????????????????????????????>>>>>>>>>>>>>>>>>>>>>>
	
	*/
	
	if(leftinc==1 && leftMovebool==1){
	//Debug.Log("leftinc =="+ leftinc);
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"5"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"6"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"7"))		
	{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"8"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//new end
	
	}
	
	
	
	
	
	
	
	
	
	
	if(leftinc==2 && leftMovebool==1){
	
GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"5"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"6"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"7"))		
	{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"8"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//new end
	}
	
	
	if(leftinc==3 && leftMovebool==1)
	{
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"5"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"6"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"7"))		
	{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"8"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//new end
	}
	
	
	
	if(leftinc==4 && leftMovebool==1)
	{
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"10");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	//new end
	
	}
	if(leftinc==5 && leftMovebool==1)
	{
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"10");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	//new end
	}
	if(leftinc==6 &leftMovebool==1)
	{
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	
		
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"10");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(leftinc)))+move,screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	//new end
}

if(rightinc==7 && leftinc==7){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
    {}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
	{}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"4");
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1))),screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1))),screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1))),screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1))),screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.12)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.32)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.52)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.72)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	//old end
	
	
	//new begin
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"1"))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"2"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"3"))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.75),"4"))	
	{}
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.19,screenheight*0.75),image_side_right);	
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(rightinc-1))),screenheight*0.1,screenwidth*0.19,screenheight*0.1),level_name[first_level+3]+"10");
	
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.19,screenheight*0.15),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1))),screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1))),screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1))),screenheight*0.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1))),screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1))),screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1))),screenheight*.85,screenwidth*0.19,screenheight*0.10),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1))),screenheight*0.4,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1))),screenheight*0.55,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	GUI.TextArea(Rect(((screenwidth*.92)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.12)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.32)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.52)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.72)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.92)-(dif*(rightinc-1))),screenheight*0.7,screenwidth*0.15,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	//new end
	}
}