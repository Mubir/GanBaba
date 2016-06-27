using UnityEngine;
using System.Collections;


public class Game : MonoBehaviour 
{
	//for destroing
	public GameObject tempobjS ;
	public GameObject tempobjT ;
	int temp;
	public Texture[] image_star;
	public int stars;
	public float screenwidth;
	public float screenheight;
	//Time.........................................................................................................................
	public double PresentTime;
	public int PasttTime;
	public int minute;
	public int seconds;
	public GameObject TimeFeature ;
	public GUISkin SkinTime;
	int questioncount;
	//******************************************************************************************************************************************


	//scores........................................................................................................................
	public int scores = 0;

	//******************************************************************************************************************************

	public string ans;


	//question pirts.............................................
	public int questionid;
	public string question ="Q.QUESTION ?";
	public string  optionA ="A";
	public string  optionB ="B";
	public string  optionC ="C";
	public string  optionD ="D";
	public string  hint ="hint";
	//public int correctanswer=0;
	public string correctanswer="";
	public int total_question=5;
	public int question_finished=0;	
	public  int answercorrect ;

	public Texture Texture_answercorrect;
	public Texture Texture_answeruncorrect;

	Questions Questions;
	GUISkin skin_Tab_Question ;
	//*******************************************************************************************************************************
	

	public Texture fb;
	public Texture gan;

	public double form_position_y=-0.01;
	public double form_speed=0.1;
	public Texture Texture_form_background;
	public Texture Texture_form_reload;
	public Texture Texture_form_next_level;
	public Texture Texture_form_details;
	public Texture[] TextureList;

	public Texture backButton;
	int number;

	string loadedLevel;
	public GameObject[] GameObject_option;
	public GameObject GameObject_Slash;
	public GameObject GameObject_Question;

	
	public int selected_option;
	public double selected_option_time;
	public int selected_option_on;

	//for bangala timing
	public CommonFunctions CF;


	// Use this for initialization
	void Start () 
	{
		CF = new CommonFunctions();
		selected_option = 0;
		selected_option_on = 0;
		selected_option_time =0;

		PasttTime = (int)(Time.time);
	//	checkQuestion();
		questioncount=0;
		number=0;
		//question pirts.............................................
		Questions = new Questions();
		total_question = 5;
		
		answercorrect =-9;
		question_finished=0;
		Questions.setQuestions();
		NextQuestion(0);
		//******************************************************************************************************************************

		form_position_y=-0.01;
	 	form_speed=0.01;

		loadedLevel=Application.loadedLevelName;
		//Debug.Log(loadedLevel);

	}
	
	// Update is called once per frame
	void FixedUpdate () 
	{

		if (Input.GetKeyDown(KeyCode.Escape)) 
		{
			Application.LoadLevel("Sublevel");
		}

		number=(int)Time.time;
		if(number>19)
		{
			number=19;
		}

		if(question_finished == 1)
		{
			GameObject_Slash.SetActive(false);
			return;
		}
		PresentTime=(int)(Time.time) - PasttTime;
		minute=(int)PresentTime/60;
		seconds=(int)PresentTime%60;
		if(selected_option_on==0)
		{
			_destroyFire destroyFire =GameObject_Slash.GetComponent<_destroyFire>(); 
			selected_option = destroyFire.option;
		}
		if(selected_option>0 && selected_option_on==0)
		{

			temp=selected_option_on;

			selected_option_on = 1;
			Debug.Log ("selected_option_on =="+selected_option_on);
			selected_option_time = (int)PresentTime+.6 ;
			_destroyFire destroyFire1 =GameObject_Slash.GetComponent<_destroyFire>(); 
			destroyFire1.option = 0;




			for(int i=1;i<=4;i++)
			{
				GameObject_option[i].rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY|RigidbodyConstraints.FreezeRotationZ|RigidbodyConstraints.FreezeRotationY|RigidbodyConstraints.FreezeRotationX|RigidbodyConstraints.FreezePositionZ;

			}


		}
		if(selected_option>0 && temp==0)
		{GameObject_Slash.transform.position=new Vector3(0f,0f,-90f);
			GameObject_Slash.SetActive(false);

			//for vanishing sprite & text begin
			if(selected_option==1)
			{
				tempobjT=GameObject.FindGameObjectWithTag("text1");
				tempobjT.GetComponent<TextMesh>().renderer.enabled = false;
				tempobjS=GameObject.FindGameObjectWithTag("Option1");
				tempobjS.GetComponent<SpriteRenderer>().enabled = false;
				
			}
			
			else if(selected_option==2)
			{tempobjT=GameObject.FindGameObjectWithTag("text2");
				tempobjT.GetComponent<TextMesh>().renderer.enabled = false;
				tempobjS=GameObject.FindGameObjectWithTag("Option2");
				tempobjS.GetComponent<SpriteRenderer>().enabled = false;}
			else if(selected_option==3)
			{
				tempobjT=GameObject.FindGameObjectWithTag("text3");
				tempobjT.GetComponent<TextMesh>().renderer.enabled = false;
				tempobjS=GameObject.FindGameObjectWithTag("Option3");
				tempobjS.GetComponent<SpriteRenderer>().enabled = false;
			}
			else if(selected_option==4)
			{
				tempobjT=GameObject.FindGameObjectWithTag("text4");
				tempobjT.GetComponent<TextMesh>().renderer.enabled = false;
				tempobjS=GameObject.FindGameObjectWithTag("Option4");
				tempobjS.GetComponent<SpriteRenderer>().enabled = false;
			}
			//for vanishing sprite & text end

			if((selected_option_time+.35) < PresentTime)
			{
				tempobjT.GetComponent<TextMesh>().renderer.enabled = true;
				tempobjS.GetComponent<SpriteRenderer>().enabled = true;

				checkQuestion();
				temp=1;
			}
		}
		if(selected_option_on ==1 && (selected_option_time-.3)< (PresentTime))
		{

			for(int i=1;i<=4;i++)
			{
				
				
				//GameObject_option[i].SetActive(true);
				
				GameObject_option[i].rigidbody.constraints &=~ RigidbodyConstraints.FreezePositionX ;
				GameObject_option[i].rigidbody.constraints &=~ RigidbodyConstraints.FreezePositionY ;
				
				GameObject_option[i].rigidbody.constraints = RigidbodyConstraints.FreezeRotationZ|RigidbodyConstraints.FreezeRotationY|RigidbodyConstraints.FreezeRotationX|RigidbodyConstraints.FreezePositionZ;
			}


		}
		if(selected_option_on ==1 && (selected_option_time+.5)< (PresentTime))
		{
			selected_option_on = 0;
			answercorrect=-9;
			GameObject_Slash.SetActive(true);

		}
		if(question_finished==1)
		{
			for(int i=1;i<=4;i++)
			{
				GameObject_option[i].rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY|RigidbodyConstraints.FreezeRotationZ|RigidbodyConstraints.FreezeRotationY|RigidbodyConstraints.FreezeRotationX|RigidbodyConstraints.FreezePositionZ;
			}
	 
		Debug.Log("Score in "+loadedLevel+" is "+PlayerPrefs.GetInt(loadedLevel));

		}

	//	Debug.Log ("selected_option_time  :"+selected_option_time+"PresentTime  :"+PresentTime );
	}



	void OnGUI()
	{







		screenwidth	= Screen.width;
		screenheight = Screen.height;

		GUI.skin = SkinTime;

		//GUI.Box(new Rect((float)(screenwidth*.00),(float)(screenheight*.85),(float)(screenwidth*0.1),(float)(screenheight*0.1)),"");
		GUI.Label (new Rect ((float)(screenwidth*0.015), (float)(screenheight*0.85), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+CF.INT_TO_BANGLA_STRING(minute)+" : " +CF.INT_TO_BANGLA_STRING( seconds));
		/*
		GUI.Box(new Rect((float)(screenwidth*.00),(float)(screenheight*.01),(float)(screenwidth*0.1),(float)(screenheight*0.1)),"");
		GUI.Label (new Rect ((float)(screenwidth*0.01), (float)(screenheight*0.01), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+scores);

*/
		GUI.Button(new Rect((float)(screenwidth*.00),(float)(screenheight*.07),(float)(screenwidth*0.1),(float)(screenheight*0.1)),fb,"");
		GUI.Button(new Rect((float)(screenwidth*.87),(float)(screenheight*.01),(float)(screenwidth*0.1),(float)(screenheight*0.1)),gan,"");
		//healthbar

		GUI.DrawTexture(new Rect((float)(screenwidth*.00),(float)(screenheight*.01),(float)(screenwidth*0.12),(float)(screenheight*0.05)),TextureList[number],ScaleMode.StretchToFill);
		GUI.DrawTexture(new Rect((float)(screenwidth*.87),(float)(screenheight*.1),(float)(screenwidth*0.1),(float)(screenheight*0.05)),TextureList[number],ScaleMode.StretchToFill);



		if(question_finished == 1)
		{


			//for stars in loading screen
			if(PlayerPrefs.GetInt(loadedLevel)>200 && PlayerPrefs.GetInt(loadedLevel)<280)
			{
				Debug.Log(PlayerPrefs.GetInt("explotion"));
				stars=1;

			}
			else if(PlayerPrefs.GetInt(loadedLevel)>300 && PlayerPrefs.GetInt(loadedLevel)<380)
			{
				stars=2;
			}
			else if(PlayerPrefs.GetInt(loadedLevel)>400 && PlayerPrefs.GetInt(loadedLevel)<480)
			{
				stars=3;
			}
			else
			{
				stars=0;
			}
			//for stars in loading screen ends


			//form_position_y =.25;
			PlayerPrefs.SetInt(loadedLevel,scores);
		//GUI.Label (new Rect ((float)(screenwidth*0.4), (float)(screenheight*0.41), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+scores);

			form_position_y+=form_speed;
			if(form_position_y>=.25)
				form_speed =0.0;
			GUI.DrawTexture(new Rect((float)(screenwidth*.3),(float)(screenheight*form_position_y),(float)(screenwidth*0.4),(float)(screenheight*0.6)),Texture_form_background);

			//for stars
			GUI.DrawTexture(new Rect((float)(screenwidth*0.45),(float)(screenheight*(form_position_y+0.38)),(float)(screenwidth*0.1),(float)(screenheight*0.1)),image_star[stars]);
			//end

			GUI.Label (new Rect ((float)(screenwidth*0.45), (float)(screenheight*0.51), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+scores);


			if(GUI.Button(new Rect((float)(screenwidth*.36),(float)(screenheight*(form_position_y+0.48)),(float)(screenwidth*0.1),(float)(screenheight*0.1)),Texture_form_details,""))
			{
				Application.LoadLevel("Sublevel");
				//Debug.Log("clicked" + "go");
			}

			if(GUI.Button(new Rect((float)(screenwidth*.45),(float)(screenheight*(form_position_y+.48)),(float)(screenwidth*0.1),(float)(screenheight*0.1)),Texture_form_reload,""))
			{  
			//	Debug.Log("clicked" +"go");
				Application.LoadLevel(loadedLevel);
			}

			if(GUI.Button(new Rect((float)(screenwidth*.54),(float)(screenheight*(form_position_y+.48)),(float)(screenwidth*0.1),(float)(screenheight*0.1)),Texture_form_next_level,""))
			{
				//Application.LoadLevel(0);
				if(loadedLevel=="busteffect")
				{
					Application.LoadLevel("explotion");
				}
				if(loadedLevel=="explotion")
				{
					Application.LoadLevel("fireburn");
				}

			}
			return;
		}





		if(selected_option_on == 1 && answercorrect == 1 )
		{
			GUI.DrawTexture(new Rect((float)(screenwidth*.4),(float)(screenheight*0.4),(float)(screenwidth*0.2),(float)(screenheight*0.2)),Texture_answercorrect);
			//GUI.Box(new Rect((float)(screenwidth*.0),(float)(screenheight*0.0),(float)(screenwidth*1.0),(float)(screenheight*1.0)),"");

		}

		if(selected_option_on == 1 && answercorrect == 0 )
		{
			GUI.DrawTexture(new Rect((float)(screenwidth*.4),(float)(screenheight*0.4),(float)(screenwidth*0.2),(float)(screenheight*0.2)),Texture_answeruncorrect);

		}
	


	}



	void NextQuestion(int position)
	{
		questionid=Questions.next[position];
		if(Questions.attemp[questionid]==1)
		{
			NextQuestion(questionid);
			return;
		}
		question=Questions.question[questionid];
		optionA=Questions.optionA[questionid];
		optionB=Questions.optionB[questionid];
		optionC=Questions.optionC[questionid];
		optionD=Questions.optionD[questionid];
		hint=Questions.hints[questionid];
		correctanswer=Questions.ca[questionid];


		TextMesh ques = (TextMesh)GameObject_Question.GetComponent(typeof(TextMesh));
		ques.text = question;

		GameObject go_optA= GameObject.FindGameObjectWithTag("text1");
		TextMesh optA = (TextMesh)go_optA.GetComponent(typeof(TextMesh));
		optA.text = optionA;

		GameObject go_optB= GameObject.FindGameObjectWithTag("text2");
		TextMesh optB = (TextMesh)go_optB.GetComponent(typeof(TextMesh));
		optB.text = optionB;

		GameObject go_optC= GameObject.FindGameObjectWithTag("text3");
		TextMesh optC = (TextMesh)go_optC.GetComponent(typeof(TextMesh));
		optC.text = optionC;

		GameObject go_optD= GameObject.FindGameObjectWithTag("text4");
		TextMesh optD = (TextMesh)go_optD.GetComponent(typeof(TextMesh));
		optD.text = optionD;
	}






	void checkQuestion()
	{
		if(selected_option==1)
		{
			ans=optionA;
		}
		else if(selected_option==2)
		{ans=optionB;}
		else if(selected_option==3)
		{ans=optionC;}
		else if(selected_option==4)
		{ans=optionD;}
		
		

		
		if(correctanswer==ans)
		{
			answercorrect=1;
			questioncount++;
			scores=((100*questioncount))-(int)PresentTime;

		}
		else
		{
			answercorrect=0;

		}



		Questions.attemp[questionid]=1;
		Questions.answered++;
		
		if(Questions.answered==total_question)
			question_finished=1;
		else 
			NextQuestion(questionid);
	}
	}
