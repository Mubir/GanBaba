using UnityEngine;
using System.Collections;

public class _destroy : MonoBehaviour {

	public float s=0f;
	private GameObject temp;
	private string name;
	public GameObject bustPrefab;


	 void OnTriggerEnter(Collider other) {
      /* if (other.CompareTag("Player"))
		{ Debug.Log(" hellow");
			//Destroy(other.gameObject);
		
			//float s=0f;
		}*/

	name=other.gameObject.tag; 
		Debug.Log(name);
		temp= GameObject.FindGameObjectWithTag(name);
		Destroy(temp,3);
        
    }
}
