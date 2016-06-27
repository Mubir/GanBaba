using UnityEngine;
using System.Collections;


public class RapidFire : MonoBehaviour 
{
	
	public GameObject tempobjS ;
	public GameObject tempobjT ;
	int temp;
	public Texture[] image_star;
	public string ans;
	int questioncount;
	public float screenwidth;
	public float screenheight;
	//Time.........................................................................................................................
	public int PresentTime;
	public int PasttTime;
	public int minute;
	public int seconds;
	public GameObject TimeFeature ;
	public GUISkin SkinTime;
	//******************************************************************************************************************************************

	//Game details.........................................................................
	public int current_level ;
	public int current_sublevel ;
	public int highScoreAchieved=0;
	public int TotalScores ;
	public int life ;
	public int[] sublevel_scores;
	public Texture image_GB;
	public Texture[] image_GB_bani;
	public string[] level_name;
	public GUISkin levelnameSkin ;
	//Game details***********************************
	
	//scores........................................................................................................................
	public int scores = 0;
	
	//******************************************************************************************************************************
	
	
	
	
	//question pirts.............................................
	public int questionid;
	public string question ="Q.QUESTION ?";
	public string  optionA ="A";
	public string  optionB ="B";
	public string  optionC ="C";
	public string  optionD ="D";
	public string  hint ="hint";
	public string correctanswer="";
	
	public int total_question=25;
	public int question_finished=0;	
	public int answercorrect ;
	
	public Texture Texture_answercorrect;
	public Texture Texture_answeruncorrect;
	
	Questions_Rapidfire Questions_Rapidfire;
	GUISkin skin_Tab_Question ;
	//*******************************************************************************************************************************
	
	
	
	
	
	public double form_position_y=-0.01;
	public double form_speed=0.1;
	public Texture[] Texture_form_background;
	public Texture Texture_form_reload;
	public Texture Texture_form_next_level;
	public Texture Texture_form_details;
	
	
	
	public GameObject[] GameObject_option;
	public GameObject GameObject_Slash;
	public GameObject GameObject_Question;
	
	
	public int selected_option;
	public int selected_option_time;
	public int selected_option_on;

	public ScoresPrily ScoresPrily ;
	public CommonFunctions CF;
	// Use this for initialization
	void Start () 
	{

		CF = new CommonFunctions();
		ScoresPrily = new ScoresPrily();
		//Game details.................................................................
		
		current_level =ScoresPrily.getLevel();
		current_sublevel= ScoresPrily.getSubLevel();
		life =1;
		level_name = new string[]{"¸nv ¯—i" ,"গুহা স্তর", "জঙ্গল স্তর" , "কৃষি স্তর" , "মিশর সভ্যতা স্তর" , "মধ্য যুগ স্তর" , "রোমান সভ্যতা স্তর" , "আধুনিক সভ্যতা স্তর" , "এক-বিংশ শতাব্দী স্তর" , "মহাশূন্য স্তর" , "চন্দ্র স্তর"};
		sublevel_scores= ScoresPrily.getSubLevelscores(current_level);
		TotalScores = ScoresPrily.getTotalScores();
		//Game details...............................................................
		

		selected_option = 0;
		selected_option_on = 0;
		selected_option_time =0;
		
		PasttTime = (int)(Time.time);
		
		
		
		//question pirts.............................................
		Questions_Rapidfire = new Questions_Rapidfire();
		total_question = 25;
		
		answercorrect = 0;
		question_finished=0;
		Questions_Rapidfire.setQuestions();
		NextQuestion(0);
		//******************************************************************************************************************************
		
		form_position_y=-0.01;
		form_speed=0.01;
		
		
	}
	
	// Update is called once per frame
	void Update () 
	{
		if (Input.GetKeyDown(KeyCode.Escape)) 
		{
			Application.LoadLevel("Sublevel");
		}
		if(question_finished == 1)
		{
			GameObject_Slash.SetActive(false);
			return;
		}
		PresentTime=(int)(Time.time) - PasttTime;
		minute=PresentTime/60;
		seconds=PresentTime%60;
		if(PresentTime==60)
		{
			question_finished =1;
			scores_update();
			return;
		}
		if(selected_option_on==0)
		{
			_destroyFire destroyFire =GameObject_Slash.GetComponent<_destroyFire>(); 
			selected_option = destroyFire.option;
		}
		if(selected_option>0 && selected_option_on==0)
		{
			//Slash.SetActive(false);
			temp=selected_option_on;
			selected_option_on = 1;
			selected_option_time = PresentTime + 1 ;
			_destroyFire destroyFire1 =GameObject_Slash.GetComponent<_destroyFire>(); 
			destroyFire1.option = 0;
			
			
			checkQuestion();
			
			
			for(int i=1;i<=4;i++)
			{
				//GameObject_option[i].rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY;
				
				GameObject_option[i].rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY|RigidbodyConstraints.FreezeRotationZ|RigidbodyConstraints.FreezeRotationY|RigidbodyConstraints.FreezeRotationX|RigidbodyConstraints.FreezePositionZ;
				//GameObject_option[i].SetActive(false);
			}
			
			
		}

		if(selected_option>0 && temp==0)
		{
			
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

			if(selected_option_time  < PresentTime)
			{
				tempobjT.GetComponent<TextMesh>().renderer.enabled = true;
				tempobjS.GetComponent<SpriteRenderer>().enabled = true;
				
				checkQuestion();
				temp=1;
			}
		}



		if(selected_option_on ==1 && selected_option_time  < PresentTime)
		{
			//Slash.SetActive(true);
			selected_option_on = 0;
			answercorrect=-9;
			for(int i=1;i<=4;i++)
			{

				GameObject_option[i].rigidbody.constraints &=~ RigidbodyConstraints.FreezePositionX ;
				GameObject_option[i].rigidbody.constraints &=~ RigidbodyConstraints.FreezePositionY ;
				
				GameObject_option[i].rigidbody.constraints = RigidbodyConstraints.FreezeRotationZ|RigidbodyConstraints.FreezeRotationY|RigidbodyConstraints.FreezeRotationX|RigidbodyConstraints.FreezePositionZ;


				/*GameObject_option[i].rigidbody. constraints = RigidbodyConstraints.None;
				GameObject_option[i].rigidbody.freezeRotation =true;
				_optionMovement optionMovement=GameObject_option[i].GetComponent<_optionMovement>();
				optionMovement.initiate();

				GameObject_option[i].SetActive(true);
				
				//GameObject_option[i].rigidbody.constraints &=~ RigidbodyConstraints.FreezePositionZ ;*/
			}
			
		}
		
	}
	
	
	
	void OnGUI()
	{
		
		screenwidth	= Screen.width;
		screenheight = Screen.height;
		/*
		GUI.skin = levelnameSkin;	
		GUI.TextArea(new Rect((float)(screenwidth*.45),(float)(screenheight*0.14),(float)(screenwidth*0.4),(float)(screenheight*0.1)),level_name[current_level]);

		GUI.DrawTexture(new Rect((float)(screenwidth*.42),(float)(0),(float)(screenwidth*.15),(float)(screenheight*.15)),image_GB);
*/
		GUI.skin = SkinTime;
		
	//	GUI.Box(new Rect((float)(screenwidth*.00),(float)(screenheight*.85),(float)(screenwidth*0.1),(float)(screenheight*0.1)),"");
		GUI.Label (new Rect ((float)(screenwidth*0.01), (float)(screenheight*0.85), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+CF.INT_TO_BANGLA_STRING(minute)+" : " +CF.INT_TO_BANGLA_STRING( seconds));
		
	//	GUI.Box(new Rect((float)(screenwidth*.00),(float)(screenheight*.01),(float)(screenwidth*0.1),(float)(screenheight*0.1)),"");
	//	GUI.Label (new Rect ((float)(screenwidth*.88), (float)(screenheight*0.01), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+CF.INT_TO_BANGLA_STRING(scores));

		if(question_finished == 1)
		{
			//form_position_y =.25;
			
			GUI.Label (new Rect ((float)(screenwidth*0.4), (float)(screenheight*0.41), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+CF.INT_TO_BANGLA_STRING(scores));
			GUI.Label (new Rect ((float)(screenwidth*0.4), (float)(screenheight*0.41), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+CF.INT_TO_BANGLA_STRING(scores));
			if(highScoreAchieved==0)
				GUI.Label (new Rect ((float)(screenwidth*0.6), (float)(screenheight*0.66), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+CF.INT_TO_BANGLA_STRING( sublevel_scores[current_sublevel]));

			form_position_y+=form_speed;
			if(form_position_y>=.25)
				form_speed =0.0;
			GUI.DrawTexture(new Rect((float)(screenwidth*.3),(float)(screenheight*form_position_y),(float)(screenwidth*0.4),(float)(screenheight*0.6)),Texture_form_background[highScoreAchieved]);
			
			
			
			GUI.Label (new Rect ((float)(screenwidth*0.45), (float)(screenheight*0.51), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+scores);
			GUI.DrawTexture(new Rect((float)(screenwidth*.58),(float)(0),(float)(screenwidth*.15),(float)(screenheight*.20)),image_GB_bani[highScoreAchieved]);

			if(highScoreAchieved==0)
				GUI.Label (new Rect ((float)(screenwidth*0.6), (float)(screenheight*0.66), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+CF.INT_TO_BANGLA_STRING( sublevel_scores[current_sublevel]));

			if(GUI.Button(new Rect((float)(screenwidth*.38),(float)(screenheight*(form_position_y+0.48)),(float)(screenwidth*0.1),(float)(screenheight*0.1)),Texture_form_details,""))
			{
				//Application.LoadLevel(0);
			}
			
			if(GUI.Button(new Rect((float)(screenwidth*.45),(float)(screenheight*(form_position_y+.48)),(float)(screenwidth*0.1),(float)(screenheight*0.1)),Texture_form_reload,""))
			{
				Application.LoadLevel("RapidFire");
			}
			
			if(GUI.Button(new Rect((float)(screenwidth*.52),(float)(screenheight*(form_position_y+.48)),(float)(screenwidth*0.1),(float)(screenheight*0.1)),Texture_form_next_level,""))
			{
				Application.LoadLevel("sublevel");
			}
			return;
		}
		
		
		
		
		
		if(selected_option_on == 1 && answercorrect == 1)
		{
			GUI.DrawTexture(new Rect((float)(screenwidth*.4),(float)(screenheight*0.4),(float)(screenwidth*0.2),(float)(screenheight*0.2)),Texture_answercorrect);
			//GUI.Box(new Rect((float)(screenwidth*.0),(float)(screenheight*0.0),(float)(screenwidth*1.0),(float)(screenheight*1.0)),"");
			
		}
		
		if(selected_option_on == 1 && answercorrect == 0)
		{
			GUI.DrawTexture(new Rect((float)(screenwidth*.4),(float)(screenheight*0.4),(float)(screenwidth*0.2),(float)(screenheight*0.2)),Texture_answeruncorrect);
			
		}
		
	}
	
	
	
	
	
	void NextQuestion(int position)
	{
		questionid=Questions_Rapidfire.next[position];
		if(Questions_Rapidfire.attemp[questionid]==1)
		{
			NextQuestion(questionid);
			return;
		}
		question=Questions_Rapidfire.question[questionid];
		optionA=Questions_Rapidfire.optionA[questionid];
		optionB=Questions_Rapidfire.optionB[questionid];
		optionC=Questions_Rapidfire.optionC[questionid];
		optionD=Questions_Rapidfire.optionD[questionid];
		hint=Questions_Rapidfire.hints[questionid];
		correctanswer=Questions_Rapidfire.ca[questionid];
		
		
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
		
		
		
		Questions_Rapidfire.attemp[questionid]=1;
		Questions_Rapidfire.answered++;
		
		if(Questions_Rapidfire.answered==total_question)
			question_finished=1;
		else 
			NextQuestion(questionid);
	}

	void scores_update()
	{
		int high=0;
		if(sublevel_scores[6]<scores)high=1;
		if(highScoreAchieved==0)
			GUI.Label (new Rect ((float)(screenwidth*0.6), (float)(screenheight*0.66), (float)(screenwidth*0.1), (float)(screenheight*0.1)),""+CF.INT_TO_BANGLA_STRING( sublevel_scores[current_sublevel]));
		highScoreAchieved=high;
		ScoresPrily.Rapid_fire_Score_Update(current_level,scores,high);
	}
}
