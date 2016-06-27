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

function Start () 
{
bol=1;
dif= Screen.width*.2;
rightinc=0;
leftinc=0;
	first_level =1;
	 moveSpeed=4.5f;
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
	Debug.Log("left "+leftinc+" right "+rightinc);
}


function OnGUI()
{
	screenwidth	= Screen.width;
	screenheight = Screen.height;
	
	
	     
	     
	    
	     
	     //////////******************************rightinc==0 **************************
	     
	     
	if(rightinc==0 && leftinc==0){
	
//level button start
	   GUI.skin =Button;	
	if( GUI.Button(Rect(screenwidth*.1,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{
	Application.LoadLevel("Sublevel");
	}	 	
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
	{Application.LoadLevel("Sublevel");}	
	if( GUI.Button(Rect(screenwidth*1.3,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}		
	if( GUI.Button(Rect(screenwidth*1.7,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	
	 //level button end
	 
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.13,screenwidth*0.15,screenheight*0.55),image_side_right);	
	GUI.skin = BoxSkin;
	
	
	GUI.DrawTexture(Rect(screenwidth*.1,screenheight*0.2,screenwidth*0.15,screenheight*0.135),image_level[first_level]);
	GUI.DrawTexture(Rect(screenwidth*.3,screenheight*0.2,screenwidth*0.15,screenheight*0.135),image_level[first_level+1]);
	GUI.DrawTexture(Rect(screenwidth*.5,screenheight*0.2,screenwidth*0.15,screenheight*0.135),image_level[first_level+2]);
   GUI.DrawTexture(Rect(screenwidth*.7,screenheight*0.2,screenwidth*0.15,screenheight*0.135),image_level[first_level+3]);
   GUI.skin = BoxSkin;
	GUI.DrawTexture(Rect(screenwidth*.9,screenheight*0.2,screenwidth*0.15,screenheight*0.135),image_level[first_level]);
	GUI.DrawTexture(Rect(screenwidth*1.3,screenheight*0.2,screenwidth*0.15,screenheight*0.135),image_level[first_level+1]);
	GUI.DrawTexture(Rect(screenwidth*1.5,screenheight*0.2,screenwidth*0.15,screenheight*0.135),image_level[first_level+2]);
	GUI.DrawTexture(Rect(screenwidth*1.7,screenheight*0.2,screenwidth*0.15,screenheight*0.135),image_level[first_level+3]);
	
   GUI.skin = BoxSkin;
	GUI.TextArea(Rect(screenwidth*.1,screenheight*0.11,screenwidth*0.15,screenheight*0.13),level_name[first_level]);
	GUI.TextArea(Rect(screenwidth*.3,screenheight*0.11,screenwidth*0.15,screenheight*0.13),level_name[first_level+1]);
	GUI.TextArea(Rect(screenwidth*.5,screenheight*0.11,screenwidth*0.15,screenheight*0.13),level_name[first_level+2]);
	GUI.TextArea(Rect(screenwidth*.7,screenheight*0.11,screenwidth*0.15,screenheight*0.13),level_name[first_level+3]);
	
	GUI.TextArea(Rect(screenwidth*.9,screenheight*0.11,screenwidth*0.15,screenheight*0.13),level_name[first_level]);
	GUI.TextArea(Rect(screenwidth*1.3,screenheight*0.11,screenwidth*0.15,screenheight*0.13),level_name[first_level+1]);
	GUI.TextArea(Rect(screenwidth*1.5,screenheight*0.11,screenwidth*0.15,screenheight*0.13),level_name[first_level+2]);
	GUI.TextArea(Rect(screenwidth*1.7,screenheight*0.11,screenwidth*0.15,screenheight*0.13),level_name[first_level+3]);
	//leader board button start
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
	
	if(GUI.Button(Rect(screenwidth*.7,screenheight*.7,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(screenwidth*.9,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}

	if(GUI.Button(Rect(screenwidth*1.3,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(screenwidth*1.5,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}

	if(GUI.Button(Rect(screenwidth*1.7,screenheight*.85,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	//leader board button end
	//†¯‹vi
	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(screenwidth*.11,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*.31,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*.51,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*.71,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.skin = ScoreSkin;
	
	
	GUI.TextArea(Rect(screenwidth*.91,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(screenwidth*1.31,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(screenwidth*1.51,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(screenwidth*1.71,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	
	//new begin
	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.15,screenheight*0.60),image_side_right);	
	
	
	
	
	
	
	
	}
	
	
	
	
	
	
	/////////**********************************rightinc==1*************
	

	if(rightinc<=6 && rightMovebool==1){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	 	
    {Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))		
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{
	Application.LoadLevel("Sublevel");
	}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))		
{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.15,screenheight*0.60),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"4");
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"10");
	
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1)))-move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1)))-move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1)))-move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1)))-move,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1)))-move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1)))-move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1)))-move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1)))-move,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1)))-move,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1)))-move,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(((screenwidth*.11)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.31)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.51)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.71)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	

	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(((screenwidth*.91)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.11)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.31)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.51)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.71)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.91)-(dif*(rightinc-1)))-move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	//new end
	}
	
	
	

	if((leftinc<=6 && leftinc>0)&& leftMovebool==1){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	 	
    {Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))		
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{
	Application.LoadLevel("Sublevel");
	}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))		
{}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.15,screenheight*0.60),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"4");
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"10");
	
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(leftinc)))+move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(leftinc)))+move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(leftinc)))+move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(leftinc)))+move,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(leftinc)))+move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(leftinc)))+move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(leftinc)))+move,screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(leftinc)))+move,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(leftinc)))+move,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(leftinc)))+move,screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(((screenwidth*.11)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.31)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.51)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.71)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	

	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(((screenwidth*.91)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.11)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.31)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.51)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.71)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.91)-(dif*(leftinc)))+move,screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	
	
	}
	
	
	
	
	

	
	
	
	
if(rightinc==7 && leftinc==7){
	GUI.skin = BoxSkin;	
	if(move<=dif)
	{move=moveSpeed+move;
	
	}
	GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	 	
    {Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))		
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	 GUI.skin =Button;
	if( GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	 	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{
	Application.LoadLevel("Sublevel");
	}
	if( GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))		
{}{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	if( GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1))),screenheight*0.13,screenwidth*0.15,screenheight*0.55),""))	
	{Application.LoadLevel("Sublevel");}
	
	 //GUI.Box(Rect(screenwidth*.9,screenheight*0.1,screenwidth*0.15,screenheight*0.60),image_side_right);	
	 
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.1)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level]+"1");
	GUI.TextArea(Rect(((screenwidth*.3)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+1]+"2");
	GUI.TextArea(Rect(((screenwidth*.5)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+2]+"3");
	GUI.TextArea(Rect(((screenwidth*.7)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"4");
	GUI.skin = BoxSkin;
	GUI.TextArea(Rect(((screenwidth*.9)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level]+"5");
	GUI.TextArea(Rect(((screenwidth*1.1)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+1]+"6");
	GUI.TextArea(Rect(((screenwidth*1.3)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+2]+"7");
	GUI.TextArea(Rect(((screenwidth*1.5)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"8");
	GUI.TextArea(Rect(((screenwidth*1.7)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"9");
	GUI.TextArea(Rect(((screenwidth*1.9)-(dif*(rightinc-1))),screenheight*0.11,screenwidth*0.15,screenheight*0.1),level_name[first_level+3]+"10");
	
	
	GUI.DrawTexture(Rect(((screenwidth*.1)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*.3)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*.5)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*.7)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*.9)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level]);
	GUI.DrawTexture(Rect(((screenwidth*1.1)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+1]);
	GUI.DrawTexture(Rect(((screenwidth*1.3)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+2]);
	GUI.DrawTexture(Rect(((screenwidth*1.5)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.7)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	GUI.DrawTexture(Rect(((screenwidth*1.9)-(dif*(rightinc-1))),screenheight*0.2,screenwidth*0.15,screenheight*0.13),image_level[first_level+3]);
	
GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.1)-(dif*(rightinc-1))),screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*.3)-(dif*(rightinc-1))),screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.5)-(dif*(rightinc-1))),screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*.7)-(dif*(rightinc-1))),screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	GUI.skin = BoxSkin;
	if(GUI.Button(Rect(((screenwidth*.9)-(dif*(rightinc-1))),screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			Debug.Log("oh my god  it's clicled");
	}
	
	if(GUI.Button(Rect(((screenwidth*1.1)-(dif*(rightinc-1))),screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.3)-(dif*(rightinc-1))),screenheight*0.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	if(GUI.Button(Rect(((screenwidth*1.5)-(dif*(rightinc-1))),screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.7)-(dif*(rightinc-1))),screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	if(GUI.Button(Rect(((screenwidth*1.9)-(dif*(rightinc-1))),screenheight*.70,screenwidth*0.15,screenheight*0.130),""))
	{
			
	}
	
	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(((screenwidth*.11)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*.31)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*.51)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*.71)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	
	

	
	GUI.skin = ScoreSkin;
	
	
	
	GUI.TextArea(Rect(((screenwidth*.91)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level]);
	GUI.TextArea(Rect(((screenwidth*1.11)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+1]);
	GUI.TextArea(Rect(((screenwidth*1.31)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+2]);
	GUI.TextArea(Rect(((screenwidth*1.51)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
	GUI.TextArea(Rect(((screenwidth*1.71)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);
		GUI.TextArea(Rect(((screenwidth*1.91)-(dif*(rightinc-1))),screenheight*0.45,screenwidth*0.13,screenheight*0.1),"†¯‹vi\n"+level_scores[first_level+3]);

	//new end
	}
}