using UnityEngine;
using System.Collections;

public class _levelButton : MonoBehaviour {

	/*private GUITexture myGUITexture;
	// Use this for initialization
	void Awake()
	{
		myGUITexture = this.gameObject.GetComponent("button1") as GUITexture;
	}*/
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	 

	/*	int textureHeight = guiTexture.texture.height;
		int textureWidth = guiTexture.texture.width;
		int screenHeight = Screen.height;
		int screenWidth = Screen.width;
		
		int screenAspectRatio = (screenWidth / screenHeight);
		int textureAspectRatio = (textureWidth / textureHeight);
		
		int scaledHeight;
		int scaledWidth;
		if (textureAspectRatio <= screenAspectRatio)
		{
			// The scaled size is based on the height
			scaledHeight = screenHeight;
			scaledWidth = (screenHeight * textureAspectRatio);
		}
		else
		{
			// The scaled size is based on the width
			scaledWidth = screenWidth;
			scaledHeight = (scaledWidth / textureAspectRatio);
		}
		myGUITexture.pixelInset = 
			new Rect(screenWidth*.2f,screenHeight*.5f , 
			         scaledWidth, scaledHeight);*/

	}

	void OnMouseDown()
	{
		//Application.LoadLevel(int.Parse(name));
		Debug.Log(" Button pressed");
		Application.LoadLevel("2.2");
	}
}
