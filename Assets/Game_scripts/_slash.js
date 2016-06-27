#pragma strict
var ball:GameObject;
//private var hits:RaycastHit[];
var hit:RaycastHit;
var mouseposition:Vector3;
var mousex:float;
var mousey:float;
var bubble:GameObject;
var touchDeltaPosition:Vector2;
//private var ray:Ray;
function Start () {

}

function Update () {
/*
touchDeltaPosition = Input.GetTouch(0).deltaPosition;
mousex = (touchDeltaPosition.x);
        mousey = (touchDeltaPosition.y);
			 mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (mousex,mousey,0));
			 
			 
			 
			/* ball.transform.position.x=mouseposition.x;
				ball.transform.position.y=mouseposition.y;
		ball.transform.position.z=6.377257f;*/
/*
if (Input.touchCount > 0 && 
		  Input.GetTouch(0).phase == TouchPhase.Moved) 
{
			
			/*mousex = (Input.mousePosition.x);
        mousey = (Input.mousePosition.y);
			 mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (mousex,mousey,0));
		//ball.GetComponent(ParticleEmitter).emit= true;*/
			/*	ball.transform.position.x=mouseposition.x;
				ball.transform.position.y=mouseposition.y;
				ball.transform.position.z=bubble.transform.position.z;*/
				
				/*
				ball.transform.position.x=mousex;
				ball.transform.position.y=mousey;
				ball.transform.position.z=bubble.transform.position.z;
			
		}
		if (Input.touchCount<0)  
		
	//ball.GetComponent(ParticleEmitter).emit= false;
		{
		ball.transform.position.x=mouseposition.x;
				ball.transform.position.y=mouseposition.y;
		ball.transform.position.z=6.377257f;
		
		}
}
/*

function reset()
{
					ball.transform.position.x=-50000;
				ball.transform.position.y=-50000;
				ball.transform.position.z=-50000;
}*/

/*
 if (Input.touchCount > 0) {
         // The screen has been touched so store the touch
         Touch touch = Input.GetTouch(0);
         
         if (touch.phase == TouchPhase.Stationary || touch.phase == TouchPhase.Moved) {
             // If the finger is on the screen, move the object smoothly to the touch position
             Vector3 touchPosition = Camera.main.ScreenToWorldPoint(new Vector3(touch.position.x, touch.position.y, bubble.transform.position.z));                
             ball.transform.position = Vector3.Lerp(transform.position, touchPosition, Time.deltaTime);
         }
     }
     
     
     if (Input.touchCount<0)  
		
	//ball.GetComponent(ParticleEmitter).emit= false;
		{
		ball.transform.position.x=touch.position.x;
				ball.transform.position.y=touch.position.y;
		ball.transform.position.z=6.377257f;
		
		}*/
		
		
		mousex = (Input.mousePosition.x);
        mousey = (Input.mousePosition.y);
			 mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (mousex,mousey,0));

if (Input.GetButton("Fire1")) 
{
			
			/*mousex = (Input.mousePosition.x);
        mousey = (Input.mousePosition.y);
			 mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (mousex,mousey,0));
		//ball.GetComponent(ParticleEmitter).emit= true;*/
				ball.transform.position.x=mouseposition.x;
				ball.transform.position.y=mouseposition.y;
				ball.transform.position.z=bubble.transform.position.z;
				
			
		}
		if (!Input.GetButton("Fire1")) 
		
	//ball.GetComponent(ParticleEmitter).emit= false;
		{
		ball.transform.position.x=mouseposition.x;
				ball.transform.position.y=mouseposition.y;
		ball.transform.position.z=-6.377257f;
		
		}

     }