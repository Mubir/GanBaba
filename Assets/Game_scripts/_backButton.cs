using UnityEngine;
using System.Collections;

public class _backButton : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnMouseDown()
	{
		//Application.LoadLevel(int.Parse(name));
		Debug.Log("back Button pressed");
		Application.LoadLevel("1");
	}
}
