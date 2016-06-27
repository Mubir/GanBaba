using UnityEngine;
using System.Collections;

public class _popUpmenu : MonoBehaviour {

	public GameObject popMenu;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnMouseDown()
	{
		StartCoroutine(MoveMenu(popMenu.transform, 0,-1.2f, 1.0f, false));
	}


	IEnumerator MoveMenu(Transform menuTransform, float endPosX, float endPosY, float time, bool hide)
	{
		//canClick = false;
		
		//Move the menu to the designated position under time
		float i = 0.0f;
		float rate = 1.0f / time;
		
		Vector3 startPos = menuTransform.localPosition;
		Vector3 endPos = new Vector3(endPosX, endPosY, menuTransform.localPosition.z);	
		
		while (i < 1.0) 
		{
			i += Time.deltaTime * rate;
			menuTransform.localPosition = Vector3.Lerp(startPos, endPos, i);
			yield return 0;
		}
		
		//If it is marked to hide, hide it
		/*  if (hide)
            EnableDisable(menuTransform.gameObject, false);
		
		canClick = true;*/
	}
}
