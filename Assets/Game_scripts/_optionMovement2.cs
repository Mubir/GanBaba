﻿using UnityEngine;
using System.Collections;

public class _optionMovement2 : MonoBehaviour {



	public GameObject _bubbleOne;
	public GameObject _bubbleThree;
	public GameObject _bubbleTow;
	public GameObject _bubbleFour;

	private float PresentTime;
	private float PasttTime;
	//private GameObject o=GameObject.Find("sphere");
	public static float speedY;
	public  static float speedX;
	private Vector3 g=new Vector3(5.5f,0,0);
	private Vector3 f=new Vector3(0,5.5f,0);
	void Start () 
	{
		speedY=100f;
		speedX=150f;
		_bubbleOne.rigidbody.velocity = new Vector3(2.5f,2f, 0);
		_bubbleTow.rigidbody.velocity = new Vector3(-2.5f,2f, 0);
		_bubbleThree.rigidbody.velocity = new Vector3(-3f,2f, 0);
		_bubbleFour.rigidbody.velocity = new Vector3(2.5f,2f, 0);
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
			_bubbleOne.rigidbody.velocity = new Vector3(dir[ran]*3.5f,dir[ran]*4f, 0);
			_bubbleTow.rigidbody.velocity = new Vector3(dir[ran]*-3.5f,dir[ran]*-4f, 0);
			_bubbleThree.rigidbody.velocity = new Vector3(dir[ran]*-3.5f,dir[ran]*4f, 0);
			_bubbleFour.rigidbody.velocity = new Vector3(dir[ran]*3.5f,dir[ran]*-4f, 0);
	}


		/*if(PasttTime-PresentTime>=4.10f && PasttTime-PresentTime<=4.2f)
		{
		_bubbleOne.rigidbody.velocity = new Vector3(3f,2.5f, 0);
		_bubbleTow.rigidbody.velocity = new Vector3(-3f,2.5f, 0);
		_bubbleThree.rigidbody.velocity = new Vector3(-3.5f,2.5f, 0);
		_bubbleFour.rigidbody.velocity = new Vector3(3f,2.5f, 0);

		}*/
		/*
		//bubble one movement control
		if(_bubbleOne){
			int[] dir=new int[]{-2,2,-2,2};
			
			int ran=Random.Range(0,dir.Length);
			if(Mathf.Abs(_bubbleOne.rigidbody.velocity.x)>5.5f)
				_bubbleOne.rigidbody.velocity=new Vector3(5.5f,_bubbleOne.rigidbody.velocity.y,0f);
			if(_bubbleOne.rigidbody.velocity.y>5.5f)
				_bubbleOne.rigidbody.velocity=new Vector3(_bubbleOne.rigidbody.velocity.x,5.5f,0);
			
			_bubbleOne.rigidbody.AddForce(speedX*Time.deltaTime*dir[ran],-speedY*Time.deltaTime*dir[ran], 0);}
		
		
		
		//bubble two movement control
		
		if(_bubbleTow){
			int[] dir=new int[]{-2,2,-2,2};
			
			int ran=Random.Range(0,dir.Length);
			if(Mathf.Abs(_bubbleTow.rigidbody.velocity.x)>5.5f)
				_bubbleTow.rigidbody.velocity=new Vector3(5.5f,_bubbleTow.rigidbody.velocity.y,0f);
			if(_bubbleTow.rigidbody.velocity.y>5.5f)
				_bubbleTow.rigidbody.velocity=new Vector3(_bubbleTow.rigidbody.velocity.x,5.5f,0);
			
			_bubbleTow.rigidbody.AddForce(speedX*Time.deltaTime*dir[ran],-(speedY+50f)*Time.deltaTime*dir[ran], 0);}
		
		
		//bubble three movement control
		if(_bubbleThree){
			
			int[] dir=new int[]{-2,2,-2,2};
			int ran=Random.Range(0,dir.Length);
			if(Mathf.Abs(_bubbleThree.rigidbody.velocity.x)>5.5f)
				_bubbleThree.rigidbody.velocity=new Vector3(5.5f,_bubbleThree.rigidbody.velocity.y,0f);
			if(_bubbleThree.rigidbody.velocity.y>5.5f)
				_bubbleThree.rigidbody.velocity=new Vector3(_bubbleThree.rigidbody.velocity.x,5.5f,0);
			
			_bubbleThree.rigidbody.AddForce(speedX*Time.deltaTime*dir[ran],-(speedY+50f)*Time.deltaTime*dir[ran], 0f);}
		
		
		//bubble four movement control
		if(_bubbleFour){
			int[] dir=new int[]{-2,2,-2,2};
			
			int ran=Random.Range(0,dir.Length);
			
			if(Mathf.Abs(_bubbleFour.rigidbody.velocity.x)>5.5f)
				_bubbleFour.rigidbody.velocity=new Vector3(5.5f,_bubbleFour.rigidbody.velocity.y,0f);
			if(_bubbleFour.rigidbody.velocity.y>5.5f)
				_bubbleFour.rigidbody.velocity=new Vector3(_bubbleFour.rigidbody.velocity.x,5.5f,0);
			
			_bubbleFour.rigidbody.AddForce(speedX*Time.deltaTime*dir[ran],-(speedY+50f)*Time.deltaTime*dir[ran], 0);}*/
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
