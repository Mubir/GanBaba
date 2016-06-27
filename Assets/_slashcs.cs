using UnityEngine;
using System.Collections;

public class _slashcs : MonoBehaviour {
	public GameObject slash;
	public GameObject ball;
	Vector3 touchPosition;
	Touch touch;
	void Update () {
		if (Input.touchCount > 0) {
			// The screen has been touched so store the touch
			touch = Input.GetTouch(0);
			
			if (touch.phase == TouchPhase.Stationary || touch.phase == TouchPhase.Moved) {
				touchPosition = Camera.main.ScreenToWorldPoint(new Vector3(touch.position.x, touch.position.y,10));                
				//slash.transform.position = Vector3.Lerp(transform.position, touchPosition, Time.deltaTime);
				/*slash.transform.position.x=touchPosition.x;
				slash.transform.position.y=touchPosition.y;
				slash.transform.position.z=touchPosition.z;*/
				slash.transform.position=touchPosition;
			}
			if (touch.phase == TouchPhase.Ended)
			    {
				slash.transform.position=new Vector3(touchPosition.x,touchPosition.y,-90f);
			}
		}

	/*	else if(Input.touchCount < 0)
		{
			touchPosition = Camera.main.ScreenToWorldPoint(new Vector3(touch.position.x, touch.position.y,-6.66f));                
			slash.transform.position = Vector3.Lerp(transform.position, touchPosition, Time.deltaTime);

		}*/
	}

}
