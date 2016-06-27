using UnityEngine;
using System.Collections;

public class _destroyExplotion : MonoBehaviour {


	private GameObject temp;
	private string name;
	public GameObject explotionPrefab;
	
	
	void OnTriggerEnter(Collider other) {
		/* if (other.CompareTag("Player"))
		{ Debug.Log(" hellow");
			//Destroy(other.gameObject);
		
			//float s=0f;
		}*/
		
		name=other.gameObject.tag; 
		Debug.Log(name);
		temp= GameObject.FindGameObjectWithTag(name);
		//Destroy(temp,3);
		Instantiate(explotionPrefab,new Vector3(temp.transform.position.x,temp.transform.position.y,temp.transform.position.z),temp.transform.rotation) ;
		Destroy(temp);
	}
}
