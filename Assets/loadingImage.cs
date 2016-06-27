using UnityEngine;
using System.Collections;

public class loadingImage : MonoBehaviour {

	public GUITexture clickButton;
	public Texture2D[] images;
	//public Texture2D textureToDisplay;

	public Texture back;
	private int startTime;
	private bool finish=false;
	private int presentTime;



	public float screenWidth;
	public float screenHeight;



	void Start () {
		startTime=(int)(Time.time);
		clickButton.guiTexture.texture=images[0];
		finish=false;
	}
	

	void Update () {


		screenHeight=Screen.height;
		screenWidth=Screen.width;
		presentTime=(int)(Time.time)-startTime;
		if(presentTime>10f)
		{
			finish=true;

		}
		if(!finish)
		clickButton.guiTexture.texture=images[presentTime]; 
		if(finish==true)
			clickButton.guiTexture.texture=images[9];

	}

	void OnGUI() {
		Debug.Log (finish);

	}
}