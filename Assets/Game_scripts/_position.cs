using UnityEngine;
using System.Collections;

public class _position : MonoBehaviour {

	public GUITexture myGUITexture;
	public GUITexture myGUITexture1;
	public float xpos;
	public float ypos;
	private float addx=200f;
	private float addy;
	
	void Awake()
	{
		//myGUITexture = this.gameObject.GetComponent("GUITexture") as GUITexture;
	}
	
	// Use this for initialization
	void Start()
	{
		// Position the billboard in the center, 
		// but respect the picture aspect ratio
		int textureHeight = myGUITexture.texture.height;
		int textureWidth = myGUITexture.texture.width;
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
		float xPosition = screenWidth / 2 - (scaledWidth / 2);
		myGUITexture.pixelInset = 
			new Rect(screenWidth*xpos*.01f,screenHeight*ypos*.01f, 
			         scaledWidth*.15f, scaledHeight*.15f);
		myGUITexture1.pixelInset = 
			new Rect(screenWidth*xpos*.01f+addx,screenHeight*ypos*.01f, 
			         scaledWidth*.15f, scaledHeight*.15f);




	}
}
