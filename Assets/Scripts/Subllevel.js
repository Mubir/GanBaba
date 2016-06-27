#pragma strict


public var screenwidth:double;
public var screenheight:double;

public var current_level :int;
public var life :int;
public var sublevel_stars:int[];

public var level_name:String[];
public var selected_sublevel: int;
public var play_on : int;



public var form_speed : double;
public var form_position_y : double;

public var image_facebook  : Texture;
public var image_sublevel_background : Texture;
public var image_level_background : Texture;
public var image_scores  : Texture;
public var image_level:Texture[];
public var image_lifebar:Texture[];
public var image_star:Texture[];
public var rapidFire : Texture;

public var TextureList:Texture[] ;
	var number:int;

public var image_play_background:Texture;
public var image_play:Texture;
public var image_play_cross:Texture;


public var BoxSkin : GUISkin;
public var ScoreSkin : GUISkin;
public var levelnameSkin : GUISkin;
public var sublevel : GUISkin;

public var backButton:Texture;


function Start () 
{
number=0;

	current_level =1;
	life =1;
	level_name = ["¸nv ¯—i" ,"¸nv ¯—i", "R½j ¯—i" , "K…wl ¯—i" , "wgki mf¨Zv ¯—i" , "5" , "6" , "7" , "8" , "9" , 
"10"];
	sublevel_stars= [0,1,2,3,0,2];
	
	//for busteffect start 
	
	if(PlayerPrefs.GetInt("busteffect")>200 && PlayerPrefs.GetInt("busteffect")<280)
	{
	Debug.Log(PlayerPrefs.GetInt("busteffect"));
	sublevel_stars[1]=1;
	Debug.Log(sublevel_stars[1]);
	}
	else if(PlayerPrefs.GetInt("busteffect")>300 && PlayerPrefs.GetInt("busteffect")<380)
	{
	sublevel_stars[1]=2;
	}
	else if(PlayerPrefs.GetInt("busteffect")>400 && PlayerPrefs.GetInt("busteffect")<480)
	{
	sublevel_stars[1]=3;
	}
	else
	{
	sublevel_stars[1]=0;
	}
	
	//for bust effect end 
	//for explotion start 
	
	if(PlayerPrefs.GetInt("explotion")>200 && PlayerPrefs.GetInt("explotion")<280)
	{
	Debug.Log(PlayerPrefs.GetInt("explotion"));
	sublevel_stars[2]=1;
	Debug.Log(sublevel_stars[1]);
	}
	else if(PlayerPrefs.GetInt("explotion")>300 && PlayerPrefs.GetInt("explotion")<380)
	{
	sublevel_stars[2]=2;
	}
	else if(PlayerPrefs.GetInt("explotion")>400 && PlayerPrefs.GetInt("explotion")<480)
	{
	sublevel_stars[2]=3;
	}
	else
	{
	sublevel_stars[2]=0;
	}
	
	//for bust effect end 
	
	//for fireburn start 
	
	if(PlayerPrefs.GetInt("fireburn")>200 && PlayerPrefs.GetInt("fireburn")<280)
	{
	Debug.Log(PlayerPrefs.GetInt("explotion"));
	sublevel_stars[3]=1;
	Debug.Log(sublevel_stars[1]);
	}
	else if(PlayerPrefs.GetInt("fireburn")>300 && PlayerPrefs.GetInt("fireburn")<380)
	{
	sublevel_stars[3]=2;
	}
	else if(PlayerPrefs.GetInt("fireburn")>400 && PlayerPrefs.GetInt("fireburn")<480)
	{
	sublevel_stars[3]=3;
	}
	else
	{
	sublevel_stars[3]=0;
	}
	
	//for fireburn end 
	
	selected_sublevel = 0;
	play_on =0;
	
	form_speed = 0.01;
	form_position_y = -0.4;
	
}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.Escape)) 
 {
 Application.LoadLevel("slidingmenueF");
 }
	number=parseInt(Time.time);
	if(number>19)
	{
	number=15;
	}
	
	
	//Debug.Log("Score in busteffect is "+PlayerPrefs.GetInt("busteffect"));
}


function OnGUI()
{
	screenwidth	= Screen.width;
	screenheight = Screen.height;
	
	
	//GUI.Button(Rect(screenwidth*.45,screenheight*.85,screenwidth*.15,screenheight*.10),rapidFire,"");
	
	
	GUI.DrawTexture(Rect(0,0,screenwidth,screenheight),image_level_background);
	
	GUI.DrawTexture(Rect(screenwidth*0.2,screenheight*0.25,screenwidth*.6,screenheight*.65),image_sublevel_background);
	
	GUI.DrawTexture(Rect(screenwidth*0.9,screenheight*0.01,screenwidth*.1,screenheight*.1),image_scores);
	
	//GUI.DrawTexture(Rect(screenwidth*.01,screenheight*0.01,screenwidth*0.07,screenheight*0.07),image_lifebar[life]);
	
	GUI.DrawTexture( Rect((screenwidth*.00),(screenheight*.01),(screenwidth*0.12),(screenheight*0.05)),TextureList[number],ScaleMode.StretchToFill);
		GUI.DrawTexture( Rect((screenwidth*.87),(screenheight*.1),(screenwidth*0.1),(screenheight*0.05)),TextureList[number],ScaleMode.StretchToFill);
	GUI.skin = levelnameSkin;	
	GUI.TextArea(Rect(screenwidth*.45,screenheight*0.17,screenwidth*0.4,screenheight*0.1),level_name[current_level]);
	
	
	
	GUI.DrawTexture(Rect(screenwidth*.24,screenheight*0.45,screenwidth*0.1,screenheight*0.1),image_star[sublevel_stars[1]]);
	GUI.DrawTexture(Rect(screenwidth*.44,screenheight*0.45,screenwidth*0.1,screenheight*0.1),image_star[sublevel_stars[2]]);
	GUI.DrawTexture(Rect(screenwidth*.64,screenheight*0.45,screenwidth*0.1,screenheight*0.1),image_star[sublevel_stars[3]]);
	GUI.DrawTexture(Rect(screenwidth*.34,screenheight*0.75,screenwidth*0.1,screenheight*0.1),image_star[sublevel_stars[4]]);
	GUI.DrawTexture(Rect(screenwidth*.54,screenheight*0.75,screenwidth*0.1,screenheight*0.1),image_star[sublevel_stars[5]]);
	
	
	
	if(GUI.Button(Rect(screenwidth*.45,screenheight*.85,screenwidth*.12,screenheight*.11),rapidFire,""))
	{
	Application.LoadLevel("rapidfirefinal");
	}
	
	
	if(GUI.Button(Rect(0,screenheight*0.1,screenwidth*0.1,screenheight*0.1),image_facebook,""))
	{
			//selected_sublevel = 1;
			//play_on =1;
			
	}
	
	
	if(GUI.Button(Rect(screenwidth*.24,screenheight*0.34,screenwidth*0.1,screenheight*0.1),image_level[current_level],""))
	{
			selected_sublevel = 1;
			play_on =1;
			form_position_y=-0.4;
			form_speed = 0.01;
			Application.LoadLevel("busteffect");
	}
	
	if(GUI.Button(Rect(screenwidth*.44,screenheight*0.34,screenwidth*0.1,screenheight*0.1),image_level[current_level],""))
	{
			selected_sublevel = 2;
			play_on =1;
			form_position_y=-0.4;
			form_speed = 0.01;
			Application.LoadLevel("explotion");
	}
	
	if(GUI.Button(Rect(screenwidth*.64,screenheight*0.34,screenwidth*0.1,screenheight*0.1),image_level[current_level],""))
	{
			selected_sublevel = 3;
			play_on =1;
			form_position_y=-0.4;
			form_speed = 0.01;
			Application.LoadLevel("fireburn");
	}
	
	if(GUI.Button(Rect(screenwidth*.34,screenheight*0.64,screenwidth*0.1,screenheight*0.1),image_level[current_level],""))
	{
			selected_sublevel = 4;
			play_on =1;
			form_position_y=-0.4;
			form_speed = 0.01;
	}
	//GUI.skin=sublevel;
	if(GUI.Button(Rect(screenwidth*.54,screenheight*0.64,screenwidth*0.1,screenheight*0.1),image_level[current_level],""))
	{
			selected_sublevel = 5;
			play_on =1;
			form_position_y=-0.4;
			form_speed = 0.01;
	}
	
	
	
	if(play_on==1)
	{
		form_position_y+=form_speed;
		if(form_position_y>=.25)
			form_speed =0.0;
		GUI.DrawTexture(Rect(screenwidth*.3,screenheight*form_position_y,screenwidth*0.4,screenheight*0.6),image_play_background);
	
		if(GUI.Button(Rect(screenwidth*.47,screenheight*(form_position_y+0.5),screenwidth*0.1,screenheight*0.1),image_play,""))
		{
			play_on =0;
			form_position_y=-0.4;
			form_speed = 0.01;
		}
	
		if(GUI.Button(Rect(screenwidth*.65,screenheight*(form_position_y),screenwidth*0.1,screenheight*0.1),image_play_cross,""))
		{
			play_on =0;
			form_position_y=-0.4;
			form_speed = 0.01;
		}
	}
	
	if(GUI.Button(Rect(screenwidth*.08,screenheight*.85,screenwidth*0.07,screenheight*0.09),backButton,"")){
	
	Application.LoadLevel("scene1");
	}
	
	
}