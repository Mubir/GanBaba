using UnityEngine;
using System.Collections;


public class _destroyFire : MonoBehaviour 
{


	private GameObject temp;
	public string name;
	public string[] Objectname;
	public GameObject firePrefab;
	
	public  int option ; 

	void Start () 
	{
		option = 0;

		Objectname = new string[]  {"2","Option1","Option2","Option3","Option4"};
	}
	void OnTriggerEnter(Collider other) 
	{
	
		Debug.Log ("COlolsio  happend");
		name=other.gameObject.tag; 
		temp= GameObject.FindGameObjectWithTag(name);
		if(name == "Option1") 
			option =1;
		if(name == "Option2") 
			option =2;
		if(name == "Option3") 
			option =3;
		if(name == "Option4") 
			option =4;


	if(option != 0)
		{
		//	Destroy(GameObject.FindGameObjectWithTag(name));
			GameObject expl=Instantiate(firePrefab,new Vector3(temp.transform.position.x,temp.transform.position.y,temp.transform.position.z-1f),temp.transform.rotation) as GameObject;
			Destroy(expl,(float)0.7);

		}
		//SendMessage("reset",0);
	}

}
