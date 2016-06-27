using UnityEngine;
using System.Collections;

public class _wallForce : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnCollisionEnter(Collision collision) {
		ContactPoint contact;
	//	contact.otherCollider.rigidbody.AddForce(-contact.otherCollider.rigidbody.velocity.x*Time.deltaTime*30f,-contact.otherCollider.rigidbody.velocity.y*Time.deltaTime*12f,0f);
	}
}
