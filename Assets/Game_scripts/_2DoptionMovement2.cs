using UnityEngine;
using System.Collections;

public class _2DoptionMovement2 : MonoBehaviour {



	public GameObject _bubbleOne;
	public GameObject _bubbleThree;
	public GameObject _bubbleTow;
	public GameObject _bubbleFour;

	private float PresentTime;
	private float PasttTime;
	//private GameObject o=GameObject.Find("sphere");
	public static float speedY;
	public  static float speedX;
	private Vector2 g=new Vector2(5.5f,0);
	private Vector2 f=new Vector2(0,5.5f);
	void Start () 
	{
		speedY=100f;
		speedX=150f;
		_bubbleOne.rigidbody2D.velocity = new Vector2(2.5f,2f);
		_bubbleTow.rigidbody2D.velocity = new Vector2(-2.5f,2f);
		_bubbleThree.rigidbody2D.velocity = new Vector2(-3f,2f);
		_bubbleFour.rigidbody2D.velocity = new Vector2(2.5f,2f);
		//Vector3 temp = new Vector3(7.0f,0,0);
		//transform.position = temp;
		PasttTime = (Time.time);

	}




	void Update () {

		PresentTime=(Time.time) - PasttTime;
		//Debug.Log ("present  "+PresentTime/4+ " &   div"+(int)PresentTime/4);-((int)PresentTime/1)<.005f

		if((PresentTime/3)-((int)PresentTime/3)<.008f)
		{
			int[] dir=new int[]{-1,1,-1,1,-1,1,1,-1,1};
			int ran=Random.Range(0,dir.Length);
			_bubbleOne.rigidbody2D.velocity = new Vector2(dir[ran]*3.5f,dir[ran]*4f);
			_bubbleTow.rigidbody2D.velocity = new Vector2(dir[ran]*-3.5f,dir[ran]*-4f);
			_bubbleThree.rigidbody2D.velocity = new Vector2(dir[ran]*-3.5f,dir[ran]*4f);
			_bubbleFour.rigidbody2D.velocity = new Vector2(dir[ran]*3.5f,dir[ran]*-4f);
	}



	}

	void OnCollisionEnter(Collision collision) {
		ContactPoint contact;
		//contact.otherCollider.rigidbody.AddForce(-contact.otherCollider.rigidbody.velocity.x*Time.deltaTime*15f,-contact.otherCollider.rigidbody.velocity.y*Time.deltaTime*15f,0f);
	}


	public void initiate()
	{
		speedY=100f;
		speedX=150f;
		_bubbleOne.rigidbody.velocity = new Vector3(0,2.5f, 0);
		_bubbleThree.rigidbody.velocity = new Vector3(0,2.5f, 0);
	}
}
