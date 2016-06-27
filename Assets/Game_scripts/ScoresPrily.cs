using UnityEngine;
using System.Collections;

public class ScoresPrily : MonoBehaviour {


	public int Level,Sublevel;
	// Use this for initialization
	public void setInit()
	{
		PlayerPrefs.SetInt("Initial",1);
		PlayerPrefs.SetInt("HighestLevel",2);
		PlayerPrefs.SetInt("TotalScores",0);
		for(int i=1;i<=50;i++)
		{
			PlayerPrefs.SetInt("Sub_Level_stars"+i,0);
			PlayerPrefs.SetInt("Sub_Level_points"+i,0);
		}
		
		for(int i=1;i<=10;i++)
		{
			PlayerPrefs.SetInt("Level_stars"+i,0);
			PlayerPrefs.SetInt("Level_scores"+i,0);
			PlayerPrefs.SetInt("Rapid_fire_scores"+i,0);
		}
	}
	
	public int getInit()
	{
		return PlayerPrefs.GetInt("Initial");
		
	}

	public void setLevel(int Level)
	{
		PlayerPrefs.SetInt("Level",Level);
	}
	
	public void setSubLevel(int SubLevel)
	{
		PlayerPrefs.SetInt("Sublevel",SubLevel);
	}

	public int getLevel()
	{
		Level = PlayerPrefs.GetInt("Level");
		return Level;
	}
	
	public int getSubLevel()
	{
		Sublevel = PlayerPrefs.GetInt("Sublevel");
		return Sublevel;
	}


	public int getHighestLevel()
	{
		return PlayerPrefs.GetInt("HighestLevel");
		
	}

	public void setTotalScores(int TotalScores)
	{
		PlayerPrefs.SetInt("TotalScores",TotalScores);
	}
	
	public int getTotalScores()
	{
		return PlayerPrefs.GetInt("TotalScores");
	}
	public int[] getLevelscores()
	{
		int[] Levelscores = new int[11];
		for(int i=1;i<=10;i++)
		{
			//PlayerPrefs.SetInt("Level_stars"+i,0);
			Levelscores[i]=PlayerPrefs.GetInt("Level_scores"+i);

		}
		
		return Levelscores;
		
	}


	public int[] getLevelstars()
	{
		int[] Level_stars = new int[11];
		for(int i=1;i<=10;i++)
		{

			Level_stars[i]=PlayerPrefs.GetInt("Level_stars"+i);
		}
		
		return Level_stars;
		
	}

	public int[] getSubLevelscores(int Level)
	{
		int[] SubLevelscores = new int[7];
		int z = (Level-1)*5;
		for(int i=1;i<=5;i++)
		{
			z++;
			SubLevelscores[i]=PlayerPrefs.GetInt("Sub_Level_points"+z);
		}
		SubLevelscores[6]=PlayerPrefs.GetInt("Rapid_fire_scores"+Level);
		return SubLevelscores;
		
	}


	public int[] getSubLevelStars(int Level)
	{
		int[] SubLevelStars = new int[6];
		int z = (Level-1)*5;
		for(int i=1;i<=5;i++)
		{
			z++;
			SubLevelStars[i]=PlayerPrefs.GetInt("Level_stars"+z);
		}
		return SubLevelStars;
		
	}

	public void Score_Update(int Level,int Sub_level,int score,int sub_level_score,int stars,int highestLevel)
	{
		int z= (Level-1)*5+Sublevel;
		int p=PlayerPrefs.GetInt("HighestLevel");
		
		PlayerPrefs.SetInt("HighestLevel",p+highestLevel);
		
		p=PlayerPrefs.GetInt("TotalScores");
		PlayerPrefs.SetInt("TotalScores",p+score);
		
		p=PlayerPrefs.GetInt("Sub_Level_stars"+z);
		PlayerPrefs.SetInt("Sub_Level_stars"+z,p+stars);
		
		PlayerPrefs.SetInt("Sub_Level_points"+z,sub_level_score);
		
		p=PlayerPrefs.GetInt("Level_stars"+Level);
		PlayerPrefs.SetInt("Level_stars"+Level,p+stars);
		p=PlayerPrefs.GetInt("Level_scores"+Level);
		
		PlayerPrefs.SetInt("Level_scores"+Level,p+score);
		
		
	}

	public void Rapid_fire_Score_Update(int Level,int score,int high)
	{
		int p=PlayerPrefs.GetInt("TotalScores");
		PlayerPrefs.SetInt("TotalScores",p+score);

		p=PlayerPrefs.GetInt("Level_scores"+Level);
		PlayerPrefs.SetInt("Level_scores"+Level,p+score);

		if(high==1)
			PlayerPrefs.SetInt("Rapid_fire_scores"+Level,score);
		
	}
}
