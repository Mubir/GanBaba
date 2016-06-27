using UnityEngine;
using System.Collections;

public class butoton : MonoBehaviour {
	float screenwidth;
	float screenheight;
	public static float  move;
	// Use this for initialization
	void Start () {
	
	}
	Vector3 ron;
	Vector3 touchposition;
	//Vector3 ron;

	void Update () {
		foreach (Touch touch in Input.touches) 
		{

			Ray ray = Camera.main.ScreenPointToRay(touch.position);

			if (touch.phase == TouchPhase.Began) 
			{
				//Debug.Log("Touch phase began at: " + touch.position);
				
				RaycastHit hit = new RaycastHit();

			} 
			else if (touch.phase == TouchPhase.Moved) 
			{

				Vector2 screenDelta = touch.deltaPosition;
				
				float halfScreenWidth = 0.5f * Screen.width;
				float halfScreenHeight = 0.5f * Screen.height;
				
				float dx = screenDelta.x / halfScreenWidth;
				float dy = screenDelta.y / halfScreenHeight;
				
			//	Vector3 objectToCamera = transform.position - Camera.main.transform.position;
				Vector3 objectToCamera = touch.deltaPosition;
				Debug.Log(touch.deltaPosition.x);
				float distance = objectToCamera.magnitude;
				
				float fovRad = Camera.main.fieldOfView * Mathf.Deg2Rad;
				float motionScale = distance * Mathf.Tan(fovRad/2);
				
				Vector3 translationInCameraRef = 
					new Vector3(motionScale * dx, motionScale * dy, 0);
				
				Vector3 translationInWorldRef =
					Camera.main.transform.TransformDirection(translationInCameraRef);
				//Debug.Log(translationInWorldRef.x);
				ron.x=translationInWorldRef.x;
				transform.position += ron;
				move+=translationInWorldRef.x;
				//Debug.Log(move);
			} 
			else if (touch.phase == TouchPhase.Ended) 
			{
				//Debug.Log("Touch phase Ended");
				

			}
		}
	}
	void OnGUI()
	{
		screenwidth	= Screen.width;
		screenheight = Screen.height;
		GUI.Button(new Rect(((screenwidth*.9f)-move),screenheight*0.13f,screenwidth*0.15f,screenheight*0.55f),"hjdfhjdfhj");
	}
}
