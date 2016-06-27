using UnityEngine;
using System.Collections;
/*
public class Questions : MonoBehaviour 
{
	public  int[] questionid ;
	public  int[] hintId ;
	public  string[] question ;
	public  string[] optionA ;
	public  string[] optionB ;
	public  string[] optionC ;
	public  string[] optionD ;
	public  string[] hints ;
	public int[] ca ;
	public int[] next ;
	public int[] attemp ;
	
	public int answered ;

	// Use this for initialization
	void Start () 
	{
		questionid = new int[6];
		hintId = new int[26];
		question = new string[6];
		optionA = new string[6];
		optionB = new string[6];
		optionC = new string[6];
		optionD = new string[6];
		hints = new string[6];
		ca = new int[6];
		attemp = new int[6];
		next =new int[6]; 
		
		answered=0;

	}
	
	// Update is called once per frame
	void Update () 
	{
	
	}



	public void setQuestions()
	{
		questionid = new int[6];
		hintId = new int[26];
		question = new string[6];
		optionA = new string[6];
		optionB = new string[6];
		optionC = new string[6];
		optionD = new string[6];
		hints = new string[6];
		ca = new int[6];
		attemp = new int[6];
		next =new int[6]; 
		
		answered=0;
		
		LoadQuestions();
	}
	
	public void LoadQuestions()
	{
		
		hintId[1] =  1;
		hintId[2] =  2;
		hintId[3] =   2;
		hintId[4] =  1;
		hintId[5] =  1  ;
		hintId[6] =  2;
		hintId[7] =  1;
		hintId[8] =  1;
		hintId[9] =  2;
		hintId[10] = 2 ;
		hintId[11] = 2;
		hintId[12] = 1;
		hintId[13] = 2;
		hintId[14] = 1;
		hintId[15] = 2;
		hintId[16] = 1;
		hintId[17] = 2;
		hintId[18] = 1;
		hintId[19] = 2;
		hintId[20] = 2;
		hintId[21] = 2;
		hintId[22] = 1;
		hintId[23] = 1;
		hintId[24] = 1;
		hintId[25] = 2;
		for (var i = 1; i <= 5 ; i++)
		{
			
			questionid[i]= nextques(i);
			
			question[i] ="Question"+questionid[i]+"";// "question"+i;
			
			
			optionA[i] = "optionA"+questionid[i];
			optionB[i] = "optionB"+questionid[i];
			optionC[i] = "optionC"+questionid[i];
			optionD[i] = "optionD"+questionid[i];
		//"hints"+i;


			ca[i] = hintId[questionid[i]];

			hints[i] = "";
			attemp[i]=0;
			next[i]=i+1;
		}
		next[5]=1;
		next[0]=1;
	}
	
	
	public int  nextques(int id)
	{
		
		while(true)
		{
			int nxt = Random.Range(1,25);
			int z = 0;
			
			for (var i = 1; i < id ; i++)
			{
				if(questionid[i]==nxt)z=1;
			}
			if(z==0)
				return nxt;
		}
		return 0;
		
	}
}
*/



public class Questions : MonoBehaviour 
{
	public  int[] questionid ;
	public  string[] hintId ;
	public  string[] question ;
	public  string[] questionQ ;
	public  string[] optionA ;
	public  string[] optionB ;
	public  string[] optionC ;
	public  string[] optionD ;
	public  string[] hints ;
	public string[] ca ;
	public int[] next ;
	public int[] attemp ;
	
	public string[,] answer;
	
	public string[] temp;
	
	public int answered ;
	
	// Use this for initialization
	void Start () 
	{
		questionid = new int[26];
		answer=new string[26,4];
		hintId = new string[26];
		question = new string[26];
		questionQ = new string[26];
		temp=new string[26];
		
		//question[1]="where do we live ?";
		optionA = new string[6];
		optionB = new string[6];
		optionC = new string[6];
		optionD = new string[6];
		hints = new string[6];
		//ca = new int[6];
		ca =new string[6];
		attemp = new int[6];
		next =new int[6]; 
		
		answered=0;
		
	}
	
	// Update is called once per frame
	void Update () 
	{
		//Debug.Log (question[1]);
		
	}
	
	
	
	public void setQuestions()
	{
		questionid = new int[26];
		hintId = new string[26];
		question= new string[26];
		temp=new string[26];
		questionQ= new string[26];
		
		questionQ[1]="Which planet do we live in ?";
		questionQ[2]="2+6/2=?";
		questionQ[3]=" Which one is not a Vowel ?";
		questionQ[4]="How many letters in Bangla Language ?";
		questionQ[5]="Independence day of bangladesh ?";
		questionQ[6]="Which is the northest district of Bangladesh ?";
		questionQ[7]="What are U doing rightnow  ?";
		questionQ[8]="What is the capital of Bangladesh ?";
		questionQ[9]="Which one is a Prime number ?";
		questionQ[10]="Which one is  a Browser ?";
		questionQ[11]="International mother language day ?";
		questionQ[12]="what is the name of ur country?  ";
		questionQ[13]="Which one is Basic color ?";
		questionQ[14]="By which digit 193 is divisible ?";
		
		questionQ[15]="What is the rimender of '' 529/7 '' ?";
		questionQ[16]="Who is the founder of MicroSoft ?";
		questionQ[17]="Which one isn't a Operating system ?";
		questionQ[18]="Which one of isn't part of computer?";
		questionQ[19]="nineteen";
		questionQ[20]="twenty";
		questionQ[21]="twentyone";
		
		question[22]="twenty two";
		
		question[23]="twenenty three";
		question[24]="twenty four";
		question[25]="twenty five";
		
		optionA = new string[26];
		optionB = new string[26];
		optionC = new string[26];
		optionD = new string[26];
		hints = new string[26];
		//	ca = new int[26];
		
		ca = new string[26];
		attemp = new int[26];
		next =new int[26]; 
		
		/// answer
		answer=new string[26,4];
		//answer  1
		answer[1,0]="Mars";
		answer[1,1]="earth";
		answer[1,2]="Moon";
		answer[1,3]=" Sun";
		//answer 2
		answer[2,0]="  2";
		answer[2,1]="  6";
		answer[2,2]="  5";
		answer[2,3]="  4";
		//3
		answer[3,0]="    A";
		answer[3,1]="    U";
		answer[3,2]="    Q";
		answer[3,3]="    O";
		//4
		answer[4,0]="     48";
		answer[4,1]="     49";
		answer[4,2]="     45";
		answer[4,3]="     51";
		//5
		answer[5,0]="26,March";
		answer[5,1]="16,December";
		answer[5,2]="21,February";
		answer[5,3]="11,January";
		//6
		answer[6,0]=" Ponchogar";
		answer[6,1]=" Dinajpur";
		answer[6,2]=" Kurigram";
		answer[6,3]=" Bogra";
		//7
		answer[7,0]="Nothing";
		answer[7,1]="Eating";
		answer[7,2]="Sleeping";
		answer[7,3]="Gaming";
		//8
		answer[8,0]="Jamalpur";
		answer[8,1]="Chittagong";
		answer[8,2]="Barisal";
		answer[8,3]="Dhaka";
		//9
		answer[9,0]="   81";
		answer[9,1]="   23";
		answer[9,2]="   111";
		answer[9,3]="   123";
		//10
		answer[10,0]="  ALL ";
		answer[10,1]=" Firefox";
		answer[10,2]=" Chrome";
		answer[10,3]=" Explorer";
		//11
		answer[11,0]="16,December";
		answer[11,1]="26,March";
		answer[11,2]="16,April";
		answer[11,3]="21,February";
		//12
		answer[12,1]="Russia";
		answer[12,0]="USA";
		answer[12,2]="UK";
		answer[12,3]="Bangladesh";
		//13
		
		answer[13,0]="Green";
		answer[13,1]="Yellow";
		answer[13,2]="Violet";
		answer[13,3]="None";
		//14
		answer[14,0]="   3";
		answer[14,1]="   7";
		answer[14,2]="   13";
		answer[14,3]=" None";
		//15
		answer[15,0]="   1";
		answer[15,1]="   9";
		answer[15,2]="   4";
		answer[15,3]="   2";
		
		//16
		answer[16,0]="Gates";
		answer[16,1]="JObs";
		answer[16,2]="mark";
		answer[16,3]="none";
		//17
		answer[17,0]="Ubuntu";
		answer[17,1]="Windows";
		answer[17,2]="Karnel";
		answer[17,3]="Android";
		//18
		answer[18,0]="  RAM";
		answer[18,1]=" Mouse";
		answer[18,2]=" Lock";
		answer[18,3]=" Hard disk";
		
		
		answered=0;
		
		LoadQuestions();
	}
	
	public void LoadQuestions()
	{
		/*
		hintId[1] =  1;
		hintId[2] =  2;
		hintId[3] =   2;
		hintId[4] =  3;
		hintId[5] =  4  ;
		hintId[6] =  2;
		hintId[7] =  3;
		hintId[8] =  1;
		hintId[9] =  2;
		hintId[10] = 2 ;
		hintId[11] = 2;
		hintId[12] = 4;
		hintId[13] = 2;
		hintId[14] = 1;
		hintId[15] = 2;
		hintId[16] = 3;
		hintId[17] = 2;
		hintId[18] = 3;
		hintId[19] = 4;
		hintId[20] = 2;
		hintId[21] = 2;
		hintId[22] = 1;
		hintId[23] = 1;
		hintId[24] = 1;
		hintId[25] = 2;*/
		
		hintId[1]=answer[1,1];
		hintId[2]=answer[2,2];
		hintId[3]=answer[3,2];
		hintId[4]=answer[4,1];
		hintId[5]=answer[5,0];
		hintId[6]=answer[6,0];
		hintId[7]=answer[7,3];
		hintId[8]=answer[8,3];
		hintId[9]=answer[9,1];
		hintId[10]=answer[10,0];
		hintId[11]=answer[11,3];
		hintId[12]=answer[12,3];
		hintId[13]=answer[13,0];
		hintId[14]=answer[14,3];
		hintId[15]=answer[15,2];
		hintId[16]=answer[16,0];
		hintId[17]=answer[17,2];
		hintId[18]=answer[18,2];
		for (var i = 1; i <= 5 ; i++)
		{
			
			questionid[i]= nextques(i);
			//questionid[i]=17;
			
			//question[i] ="Question "+question[questionid[i]]+"";// "question"+i;
			
			
			question[i] =""+questionQ[questionid[i]]+"";
			
			optionA[i] = ""+answer[questionid[i],0];
			optionB[i] = ""+answer[questionid[i],1];
			optionC[i] = ""+answer[questionid[i],2];
			optionD[i] = ""+answer[questionid[i],3];
			/*

optionA[i] = "optionA"+questionid[i];
			optionB[i] = "optionB"+questionid[i];
			optionC[i] = "optionC"+questionid[i];
			optionD[i] = "optionD"+questionid[i];

			 */
			//"hints"+i;*/
			ca[i] = hintId[questionid[i]];
			hints[i] = "";
			attemp[i]=0;
			next[i]=i+1;
		}
		next[5]=1;
		next[0]=1;
	}
	
	
	public int  nextques(int id)
	{
		
		while(true)
		{
			int nxt = Random.Range(1,19);
			int z = 0;
			
			for (var i = 1; i < id ; i++)
			{
				if(questionid[i]==nxt)z=1;
			}
			if(z==0)
				return nxt;
		}
		//return 0;
		
	}
}
