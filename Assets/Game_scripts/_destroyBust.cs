using UnityEngine;
using System.Collections;

public class _destroyBust : MonoBehaviour {


	private GameObject temp;
	private string name;
	public GameObject bustPrefab;
	public GameObject[] gObj;
	
	
	void OnTriggerEnter(Collider other) {
		/* if (other.CompareTag("Player"))
		{ Debug.Log(" hellow");
			//Destroy(other.gameObject);
		
			//float s=0f;
		}*/
		
		//name=other.gameObject.tag; 
		Debug.Log(name);

		if(gameObject.tag!=name)
		temp= GameObject.FindGameObjectWithTag(name);
		//Destroy(temp,3);
		Instantiate(bustPrefab,new Vector3(temp.transform.position.x,temp.transform.position.y,temp.transform.position.z),temp.transform.rotation) ;
		Destroy(temp);
	}
}
