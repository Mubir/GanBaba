using UnityEngine;
using System.Collections;

public class _loadLevel : MonoBehaviour {

	public GameObject level1;
	public GameObject level2;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnMouseDown()
	{
		//Application.LoadLevel(int.Parse(name));
		//Application.LoadLevel("3");
		if(level1)
			Application.LoadLevel("3");
		else if(level2)
			Application.LoadLevel("2");
	}
	
}
