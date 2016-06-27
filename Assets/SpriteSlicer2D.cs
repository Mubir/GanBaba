//#define TK2D_SLICING_ENABLED

using UnityEngine;
using System.Collections;
using System.Collections.Generic;

#if UNITY_EDITOR
using UnityEditor;
#endif

/// <summary>
/// Helper class to pass information about sliced sprites to the calling method 
/// </summary>
public class SpriteSlicer2DSliceInfo
{
	public GameObject SlicedObject 				{ get; set; }
	public Vector2 SliceEnterWorldPosition 		{ get; set; }
	public Vector2 SliceExitWorldPosition 		{ get; set; }
	public List<GameObject> ChildObjects 		{ get { return m_ChildObjects; } set { m_ChildObjects = value; } }

	List<GameObject> m_ChildObjects = new List<GameObject>();
}

/// <summary>
/// Main sprite slicer class, provides static functions to slice sprites
/// </summary>
public static class SpriteSlicer2D 
{
	public static bool DebugLoggingEnabled { get { return s_DebugLoggingEnabled; } set { s_DebugLoggingEnabled = value; } }

	// Enable or disable debug logging
	static bool s_DebugLoggingEnabled = true;

	// Use at your own risk! Likely to produce odd results, depending on the shape
	static bool s_AllowConvexSlicing = false;

	// Helper to allow ExplodeSprite to slice sub parts that violate the same sprite id or game object rules
	static List<SpriteSlicer2DSliceInfo> s_SubSlicesCont = new List<SpriteSlicer2DSliceInfo>();

#region SLICING_METHODS
	/// <summary>
	/// Slices any sprites that are intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	public static void SliceAllSprites(Vector3 worldStartPoint, Vector3 worldEndPoint)
	{
		LayerMask layerMask = -1;
		List<SpriteSlicer2DSliceInfo> slicedObjectInfo = null;
		SliceSpritesInternal(worldStartPoint, worldEndPoint, null, 0, true, -1, ref slicedObjectInfo, layerMask, null);
	}
	
	/// <summary>
	/// Slices any sprites that are intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="layerMask">Layermask to use in raycast operations.</param>
	public static void SliceAllSprites(Vector3 worldStartPoint, Vector3 worldEndPoint, LayerMask layerMask)
	{
		List<SpriteSlicer2DSliceInfo> slicedObjectInfo = null;
		SliceSpritesInternal(worldStartPoint, worldEndPoint, null, 0, true, -1, ref slicedObjectInfo, layerMask, null);
	}

	/// <summary>
	/// Slices any sprites that are intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="layerMask">Layermask to use in raycast operations.</param>
	/// <param name="tag">Only sprites with the given tag can be cut.</param>
	public static void SliceAllSprites(Vector3 worldStartPoint, Vector3 worldEndPoint, string tag)
	{
		LayerMask layerMask = -1;
		List<SpriteSlicer2DSliceInfo> slicedObjectInfo = null;
		SliceSpritesInternal(worldStartPoint, worldEndPoint, null, 0, true, -1, ref slicedObjectInfo, layerMask, tag);
	}
	
	/// <summary>
	/// Slices any sprites that are intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	public static void SliceAllSprites(Vector3 worldStartPoint, Vector3 worldEndPoint, bool destroySlicedObjects, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo)
	{
		LayerMask layerMask = -1;
		SliceSpritesInternal(worldStartPoint, worldEndPoint, null, 0, destroySlicedObjects, -1, ref slicedObjectInfo, layerMask, null);
	}

	/// <summary>
	/// Slices any sprites that are intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	/// <param name="tag">Only sprites with the given tag can be cut.</param>
	public static void SliceAllSprites(Vector3 worldStartPoint, Vector3 worldEndPoint, bool destroySlicedObjects, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo, string tag)
	{
		LayerMask layerMask = -1;
		SliceSpritesInternal(worldStartPoint, worldEndPoint, null, 0, destroySlicedObjects, -1, ref slicedObjectInfo, layerMask, tag);
	}
	
	/// <summary>
	/// Slices any sprites that are intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	/// <param name="layerMask">Layermask to use in raycast operations.</param>
	public static void SliceAllSprites(Vector3 worldStartPoint, Vector3 worldEndPoint, bool destroySlicedObjects, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo, LayerMask layerMask)
	{
		SliceSpritesInternal(worldStartPoint, worldEndPoint, null, 0, destroySlicedObjects, -1, ref slicedObjectInfo, layerMask, null);
	}
	
	/// <summary>
	/// Slices any sprites that are intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="maxCutDepth">The maximum number of times that any sprite can be subdivided</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	public static void SliceAllSprites(Vector3 worldStartPoint, Vector3 worldEndPoint, bool destroySlicedObjects, int maxCutDepth, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo)
	{
		LayerMask layerMask = -1;
		SliceSpritesInternal(worldStartPoint, worldEndPoint, null, 0, destroySlicedObjects, maxCutDepth, ref slicedObjectInfo, layerMask, null);
	}
	
	/// <summary>
	/// Slices any sprites that are intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="maxCutDepth">The maximum number of times that any sprite can be subdivided</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	/// <param name="layerMask">Layermask to use in raycast operations.</param>
	public static void SliceAllSprites(Vector3 worldStartPoint, Vector3 worldEndPoint, bool destroySlicedObjects, int maxCutDepth, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo, LayerMask layerMask)
	{
		SliceSpritesInternal(worldStartPoint, worldEndPoint, null, 0, destroySlicedObjects, maxCutDepth, ref slicedObjectInfo, layerMask, null);
	}

	/// <summary>
	/// Slices a specific sprite if it is intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="sprite">The sprite to cut</param>
	public static void SliceSprite(Vector3 worldStartPoint, Vector3 worldEndPoint, GameObject sprite)
	{
		if(sprite)
		{
			LayerMask layerMask = -1;
			List<SpriteSlicer2DSliceInfo> slicedObjectInfo = null;
			SliceSpritesInternal(worldStartPoint, worldEndPoint, sprite, 0, true, -1, ref slicedObjectInfo, layerMask, null);
		}
	}

	/// <summary>
	/// Slices a specific sprite if it is intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="sprite">The sprite to cut</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	public static void SliceSprite(Vector3 worldStartPoint, Vector3 worldEndPoint, GameObject sprite, bool destroySlicedObjects, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo)
	{
		if(sprite)
		{
			LayerMask layerMask = -1;
			SliceSpritesInternal(worldStartPoint, worldEndPoint, sprite, 0, destroySlicedObjects, -1, ref slicedObjectInfo, layerMask, null);
		}
	}

	/// <summary>
	/// Slices a specific sprite if it is intersected by the given vector
	/// </summary>
	/// <param name="worldStartPoint">Slice start point in world coordinates.</param>
	/// <param name="worldEndPoint">Slice end point in world coordinates.</param>
	/// <param name="sprite">The sprite to cut</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="maxCutDepth">The maximum number of times that any sprite can be subdivided</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	public static void SliceSprite(Vector3 worldStartPoint, Vector3 worldEndPoint, GameObject sprite, bool destroySlicedObjects, int maxCutDepth, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo)
	{
		if(sprite)
		{
			LayerMask layerMask = -1;
			SliceSpritesInternal(worldStartPoint, worldEndPoint, sprite, 0, destroySlicedObjects, maxCutDepth, ref slicedObjectInfo, layerMask, null);
		}
	}

	/// <summary>
	/// Explode a sprite by cutting it multiple times through the centre and then applying a force away from the center
	/// </summary>
	/// <param name="sprite">The sprite to cut</param>
	/// <param name="numCuts">How many random cuts to create.</param>
	/// <param name="explosionForce">The explosive force that will be applied to the newly created objects.</param>
	public static void ExplodeSprite(GameObject sprite, int numCuts, float explosionForce)
	{
		if(sprite)
		{
			List<SpriteSlicer2DSliceInfo> slicedObjectInfo = null;

			// Need to remember our objects if we're applying forces to them
			if(explosionForce != 0.0f)
			{
				slicedObjectInfo = new List<SpriteSlicer2DSliceInfo>();
			}

			ExplodeSprite(sprite, numCuts, explosionForce, true, ref slicedObjectInfo);
		}
	}

	/// <summary>
	/// Explode a sprite by cutting it multiple times and then applying a force away from the center
	/// </summary>
	/// <param name="sprite">The sprite to cut</param>
	/// <param name="numCuts">How many random cuts to create.</param>
	/// <param name="explosionForce">The explosive force that will be applied to the newly created objects.</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	public static void ExplodeSprite(GameObject sprite, int numCuts, float explosionForce, bool destroySlicedObjects, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo)
	{
		if(!sprite)
		{
			return;
		}

		Bounds spriteBounds;
		
		if(GetSpriteBounds(sprite, out spriteBounds))
		{
			LayerMask layerMask = -1;
			int parentSpriteID = sprite.GetInstanceID();
			Vector3 centre = sprite.transform.position;
			float maxRadius = spriteBounds.size.x + spriteBounds.size.y;
			float actualRad = spriteBounds.size.magnitude;
			
			for(int loop = 0; loop < numCuts; loop++)
			{
				float randomAngle = UnityEngine.Random.Range(0, Mathf.PI * 2); 
				Vector3 angleOffset = new Vector3(Mathf.Sin(randomAngle), Mathf.Cos(randomAngle), 0.0f) * maxRadius;

				randomAngle = UnityEngine.Random.Range(0, Mathf.PI * 2); 

				// Randomly apply jitter to ensure that every slice doesn't go through the centre
				Vector3 jitterOffset = new Vector3(Mathf.Sin(randomAngle), Mathf.Cos(randomAngle), 0.0f) * actualRad * 0.65f;
				angleOffset += centre;
				
				Vector3 worldStartPoint = centre + angleOffset + jitterOffset;
				Vector3 worldEndPoint = centre - angleOffset + jitterOffset;
				SliceSpritesInternal(worldStartPoint, worldEndPoint, null, parentSpriteID, destroySlicedObjects, -1, ref slicedObjectInfo, layerMask, null);
				
				s_SubSlicesCont.Clear();
				
				// Without this we only end up slicing the original object twice regardless of the slices requested
				for(int i = 0; i < slicedObjectInfo.Count; i++)
				{
					for(int j = 0; j < slicedObjectInfo[i].ChildObjects.Count; j++)
					{
						SliceSpritesInternal(worldStartPoint, worldEndPoint, slicedObjectInfo[i].ChildObjects[j], 0, destroySlicedObjects, -1, ref s_SubSlicesCont, layerMask, null);
					}
				}
				
				slicedObjectInfo.AddRange(s_SubSlicesCont);
			}
			
			if(slicedObjectInfo != null)
			{
				for(int slice = 0; slice < slicedObjectInfo.Count; slice++)
				{
					for(int child = 0; child < slicedObjectInfo[slice].ChildObjects.Count; child++)
					{
						Rigidbody2D childRigidBody = slicedObjectInfo[slice].ChildObjects[child].GetComponent<Rigidbody2D>();
						
						if(childRigidBody)
						{
							childRigidBody.AddForceAtPosition(new Vector2(0.0f, 1.0f) * explosionForce, centre);
						}
					}
				}
			}
		}
	}

	/// <summary>
	/// Shatters a sprite into its constituent polygons and applies an optional force
	/// </summary>
	/// <param name="sprite">The sprite to cut</param>
	/// <param name="explosionForce">The explosive force that will be applied to the newly created objects.</param>
	public static void ShatterSprite(GameObject spriteObject, float explosionForce)
	{
		List<SpriteSlicer2DSliceInfo> slicedObjectInfo = null;
		ShatterSprite(spriteObject, explosionForce, true, ref slicedObjectInfo);
	}

	/// <summary>
	/// Shatters a sprite into its constituent polygons and applies an optional force
	/// </summary>
	/// <param name="sprite">The sprite to cut</param>
	/// <param name="explosionForce">The explosive force that will be applied to the newly created objects.</param>
	/// <param name="destroySlicedObjects">Controls whether the parent objects are automatically destroyed. Set to false if you need to perform additional processing on them after slicing</param>
	/// <param name="slicedObjectInfo">A list of SpriteSlicer2DSliceInfo that will be fill out with details about slice locations, slcied objects, and created child objects.</param>
	public static void ShatterSprite(GameObject spriteObject, float explosionForce, bool destroySlicedObjects, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo)
	{
		Rigidbody2D parentRigidBody = spriteObject.GetComponent<Rigidbody2D>();

		if(!parentRigidBody)
		{
			Debug.LogWarning("Could not shatter sprite - no attached rigidbody");
			return;
		}

#if TK2D_SLICING_ENABLED
		tk2dSprite parenttk2dSprite = parentRigidBody.GetComponent<tk2dSprite>();
#endif
		
		SlicedSprite parentSlicedSprite = null;
		SpriteRenderer parentUnitySprite = null;
		
		// The object we're cutting must either be a unity sprite, a tk2D sprite, or a previously sliced sprite
#if TK2D_SLICING_ENABLED
		if(parenttk2dSprite == null)
#endif
		{
			parentUnitySprite = spriteObject.GetComponent<SpriteRenderer>();
			
			if(parentUnitySprite == null)
			{
				parentSlicedSprite = spriteObject.GetComponent<SlicedSprite>();
				
				if(parentSlicedSprite == null)
				{
					return;	
				}
			}
		}

		Vector2[] polygonPoints = null;
		PolygonCollider2D polygonCollider = spriteObject.GetComponent<PolygonCollider2D>();
		PhysicsMaterial2D physicsMaterial = null;
		
		if(polygonCollider)
		{
			polygonPoints = polygonCollider.points;
			physicsMaterial = polygonCollider.sharedMaterial;
		}
		else
		{
			BoxCollider2D boxCollider = spriteObject.GetComponent<BoxCollider2D>();
			
			if(boxCollider)
			{
				polygonPoints = new Vector2[4];
				polygonPoints[0] = new Vector2(-boxCollider.size.x * 0.5f, -boxCollider.size.y * 0.5f);
				polygonPoints[1] = new Vector2(boxCollider.size.x * 0.5f, -boxCollider.size.y * 0.5f);
				polygonPoints[2] = new Vector2(boxCollider.size.x * 0.5f, boxCollider.size.y * 0.5f);
				polygonPoints[3] = new Vector2(-boxCollider.size.x * 0.5f, boxCollider.size.y * 0.5f);
				physicsMaterial = boxCollider.sharedMaterial;
			}
			else
			{
				CircleCollider2D circleCollider = spriteObject.GetComponent<CircleCollider2D>();
				
				if(circleCollider)
				{
					int numSteps = 32;
					float angleStepRate = (Mathf.PI * 2)/numSteps;
					polygonPoints = new Vector2[32];
					
					for(int loop = 0; loop < numSteps; loop++)
					{
						float angle = angleStepRate * loop;
						polygonPoints[loop] = new Vector2(Mathf.Sin(angle), Mathf.Cos(angle)) * circleCollider.radius;
					}
					
					physicsMaterial = circleCollider.sharedMaterial;
				}
			}
		}
		
		if(polygonPoints != null && polygonPoints.Length > 3)
		{
			SpriteSlicer2DSliceInfo sliceInfo = null;

			if(slicedObjectInfo != null)
			{
				sliceInfo = new SpriteSlicer2DSliceInfo();
				slicedObjectInfo.Add(sliceInfo);
				
				if(!destroySlicedObjects)
				{
					sliceInfo.SlicedObject = spriteObject;
				}
			}

			Vector2 parentCentre = spriteObject.transform.position;
			int[] triangles = Triangulate(polygonPoints);
			List<Vector2> points = new List<Vector2>(3);
			points.Add(Vector2.zero);
			points.Add(Vector2.zero);
			points.Add(Vector2.zero);

			float parentArea = Mathf.Abs(Area(polygonPoints));

			for(int loop = 0; loop < triangles.Length; loop += 3)
			{
				points[0] = polygonPoints[triangles[loop]];
				points[1] = polygonPoints[triangles[loop + 1]];
				points[2] = polygonPoints[triangles[loop + 2]];

				SlicedSprite childSprite;
				PolygonCollider2D childCollider;

				CreateChildSprite(parentRigidBody, physicsMaterial, points, parentArea, out childSprite, out childCollider);
				childSprite.gameObject.name = spriteObject.name + "_child";
				
#if TK2D_SLICING_ENABLED
				if(parenttk2dSprite)
				{
					childSprite.InitFromTK2DSprite(parenttk2dSprite, childCollider);
				}
				else
#endif
				if(parentSlicedSprite)
				{
					childSprite.InitFromSlicedSprite(parentSlicedSprite, childCollider);
				}
				else if(parentUnitySprite)
				{
					childSprite.InitFromUnitySprite(parentUnitySprite, childCollider);
				}

				Vector2 centrePosition = parentCentre + ((points[0] + points[1] + points[2]) * 0.33f);
				Vector2 forceDirection = centrePosition - parentCentre;
				forceDirection.Normalize();
				childSprite.rigidbody2D.AddForceAtPosition(forceDirection * explosionForce, parentCentre);

				if(sliceInfo != null)
				{
					sliceInfo.ChildObjects.Add(childSprite.gameObject);
				}
			}

			if(destroySlicedObjects)
			{
				GameObject.Destroy(parentRigidBody.gameObject);
			}
			else
			{
				parentRigidBody.gameObject.SetActive(false);
			}
		}
	}
#endregion

	/// <summary>
	/// Get the sprite bounds from the given game object
	/// </summary>
	static bool GetSpriteBounds(GameObject sprite, out Bounds spriteBounds)
	{
		spriteBounds = new Bounds();
		bool boundsValid = false;
		
#if TK2D_SLICING_ENABLED
		tk2dSprite parenttk2dSprite = sprite.GetComponent<tk2dSprite>();
		
		if(parenttk2dSprite)
		{
			spriteBounds = parenttk2dSprite.GetBounds();
			boundsValid = true;
		}
		else
#endif
		{
			SpriteRenderer parentUnitySprite = sprite.GetComponent<SpriteRenderer>();
			
			if(parentUnitySprite)
			{
				spriteBounds = parentUnitySprite.sprite.bounds;
				boundsValid = true;
			}
			else
			{
				SlicedSprite parentSlicedSprite = sprite.GetComponent<SlicedSprite>();
				
				if(parentSlicedSprite != null)
				{
					spriteBounds = parentSlicedSprite.SpriteBounds;
					boundsValid = true;
				}
			}
		}

		return boundsValid;
	}
	
	/// <summary>
	/// Slice any sprite with an attached PolygonCollider2D that intersects the given ray
	/// </summary>
	/// <param name="worldStartPoint">Cut world start point.</param>
	/// <param name="worldEndPoint">Cut world end point.</param>
	/// <param name="spriteObject">The specific sprite to cut - pass null to cut any sprite</param>
	/// <param name="spriteInstanceID">The specific sprite unique ID to cut - pass 0 to cut any sprite</param>
	/// <param name="destroySlicedObjects">Whether to automatically destroy the parent object - if false, the calling code must be responsible</param>
	/// <param name="maxCutDepth">Max cut depth - prevents a sprite from being subdivided too many times. Pass -1 to divide infinitely.</param>
	/// <param name="slicedObjectInfo">A list of information regarding the sliced objects, cut locations etc.</param>
	static void SliceSpritesInternal(Vector3 worldStartPoint, Vector3 worldEndPoint, GameObject spriteObject, int spriteInstanceID, bool destroySlicedObjects, int maxCutDepth, ref List<SpriteSlicer2DSliceInfo> slicedObjectInfo, LayerMask layerMask, string tag)
	{
		Vector3 direction = Vector3.Normalize(worldEndPoint - worldStartPoint);
		float length = Vector3.Distance(worldStartPoint, worldEndPoint);
		RaycastHit2D[] cutStartResults = Physics2D.RaycastAll(worldStartPoint, direction, length, layerMask.value);
		RaycastHit2D[] cutEndResults = Physics2D.RaycastAll(worldEndPoint, -direction, length, layerMask.value);

		if(cutStartResults.Length == cutEndResults.Length)
		{
			for(int cutResultIndex = 0; cutResultIndex < cutStartResults.Length && cutResultIndex < cutEndResults.Length; cutResultIndex++)
			{
				RaycastHit2D cutEnter = cutStartResults[cutResultIndex];

				int cutExitIndex = -1;
				
				// Find the matching cut end point in the cut end results
				for(int endResultIndex = 0; endResultIndex < cutEndResults.Length; endResultIndex++)
				{
					if(cutEndResults[endResultIndex].collider == cutEnter.collider)
					{
						cutExitIndex = endResultIndex;
						break;
					}
				}
				
				if(cutExitIndex == -1)
				{
					continue;
				}
				
				RaycastHit2D cutExit = cutEndResults[cutExitIndex];

				if(cutEnter.rigidbody == cutExit.rigidbody)
				{
					Rigidbody2D parentRigidBody = cutEnter.rigidbody;

					if(!parentRigidBody)
					{
						continue;
					}

					if(parentRigidBody.gameObject.isStatic || parentRigidBody.isKinematic)
					{
						continue;
					}

					if(spriteObject != null && cutEnter.rigidbody.gameObject != spriteObject)
					{
						continue;
					}

					if(tag != null && parentRigidBody.tag != tag)
					{
						continue;
					}

#if TK2D_SLICING_ENABLED
					tk2dSprite parenttk2dSprite = parentRigidBody.GetComponent<tk2dSprite>();
#endif

					SlicedSprite parentSlicedSprite = null;
					SpriteRenderer parentUnitySprite = null;

					// The object we're cutting must either be a unity sprite, a tk2D sprite, or a previously sliced sprite
#if TK2D_SLICING_ENABLED
					if(parenttk2dSprite == null)
#endif
					{
						parentUnitySprite = parentRigidBody.GetComponent<SpriteRenderer>();
						
						if(parentUnitySprite == null)
						{
							parentSlicedSprite = parentRigidBody.GetComponent<SlicedSprite>();
							
							if(parentSlicedSprite == null || (maxCutDepth >= 0 && parentSlicedSprite.CutsSinceParentObject >= maxCutDepth))
							{
								continue;	
							}
						}
					}

					// If we've passed in a specific spriteInstanceID, then only that specific object or sliced
					// objects derived from it can be cut
					if(spriteInstanceID != 0 && parentRigidBody.gameObject.GetInstanceID() != spriteInstanceID)
					{
						if(parentSlicedSprite == null || parentSlicedSprite.ParentInstanceID != spriteInstanceID)
						{
							continue;
						}
					}

					Vector3 cutStartLocalPoint = parentRigidBody.gameObject.transform.InverseTransformPoint(worldStartPoint);
					Vector3 cutEndLocalPoint = parentRigidBody.gameObject.transform.InverseTransformPoint(worldEndPoint);

					Vector3 cutEnterLocalPoint = parentRigidBody.gameObject.transform.InverseTransformPoint(cutEnter.point);
					Vector3 cutExitLocalPoint = parentRigidBody.gameObject.transform.InverseTransformPoint(cutExit.point);

					Vector2[] polygonPoints = null;
					PolygonCollider2D polygonCollider = parentRigidBody.GetComponent<PolygonCollider2D>();
					PhysicsMaterial2D physicsMaterial = null;

					if(polygonCollider)
					{
						polygonPoints = polygonCollider.points;
						physicsMaterial = polygonCollider.sharedMaterial;
					}
					else
					{
						BoxCollider2D boxCollider = parentRigidBody.GetComponent<BoxCollider2D>();

						if(boxCollider)
						{
							polygonPoints = new Vector2[4];
							polygonPoints[0] = new Vector2(-boxCollider.size.x * 0.5f, -boxCollider.size.y * 0.5f);
							polygonPoints[1] = new Vector2(boxCollider.size.x * 0.5f, -boxCollider.size.y * 0.5f);
							polygonPoints[2] = new Vector2(boxCollider.size.x * 0.5f, boxCollider.size.y * 0.5f);
							polygonPoints[3] = new Vector2(-boxCollider.size.x * 0.5f, boxCollider.size.y * 0.5f);
							physicsMaterial = boxCollider.sharedMaterial;
						}
						else
						{
							CircleCollider2D circleCollider = parentRigidBody.GetComponent<CircleCollider2D>();

							if(circleCollider)
							{
								int numSteps = 32;
								float angleStepRate = (Mathf.PI * 2)/numSteps;
								polygonPoints = new Vector2[32];

								for(int loop = 0; loop < numSteps; loop++)
								{
									float angle = angleStepRate * loop;
									polygonPoints[loop] = new Vector2(Mathf.Sin(angle), Mathf.Cos(angle)) * circleCollider.radius;
								}

								physicsMaterial = circleCollider.sharedMaterial;
							}
						}
					}

					if(polygonPoints != null)
					{
						// Collision rays must travel through the whole object - if the ray either starts or
						// ends inside the object then it is considered invalid
						if(IsPointInsidePolygon(cutStartLocalPoint, polygonPoints) ||
						   IsPointInsidePolygon(cutEndLocalPoint, polygonPoints))
						{
							if(s_DebugLoggingEnabled && spriteObject != null)
							{
								Debug.LogWarning("Failed to slice " + parentRigidBody.gameObject.name + " - start or end cut point is inside the collision mesh");
							}

							continue;
						}


						if(!s_AllowConvexSlicing && !IsConvex(new List<Vector2>(polygonPoints)))
						{
							if(s_DebugLoggingEnabled)
							{
								Debug.LogWarning("Failed to slice " + parentRigidBody.gameObject.name + " - original shape is not convex");
							}
						
							continue;
						}

						List<Vector2> childSprite1Vertices = new List<Vector2>();
						List<Vector2> childSprite2Vertices = new List<Vector2>();
						
						childSprite1Vertices.Add(cutEnterLocalPoint);
						childSprite1Vertices.Add(cutExitLocalPoint);
						
						childSprite2Vertices.Add(cutEnterLocalPoint);
						childSprite2Vertices.Add(cutExitLocalPoint);
						
						for(int vertex = 0; vertex < polygonPoints.Length; vertex++)
						{
							Vector2 point = polygonPoints[vertex];
							float determinant = CalculateDeterminant2x3(cutStartLocalPoint, cutEndLocalPoint, point);
								
							if (determinant > 0)
							{
								childSprite1Vertices.Add(point);
							}
							else
							{
								childSprite2Vertices.Add(point);
							}
						}

						childSprite1Vertices = new List<Vector2>(ArrangeVertices(childSprite1Vertices));
						childSprite2Vertices = new List<Vector2>(ArrangeVertices(childSprite2Vertices));

						if(!AreVerticesAcceptable(childSprite1Vertices) || !AreVerticesAcceptable(childSprite2Vertices))
						{
							continue;
						}
						else
						{
							SlicedSprite childSprite1, childSprite2;
							PolygonCollider2D child1Collider, child2Collider;

							float parentArea = Mathf.Abs(Area(polygonPoints));
							CreateChildSprite(parentRigidBody, physicsMaterial, childSprite1Vertices, parentArea, out childSprite1, out child1Collider);
							childSprite1.gameObject.name = parentRigidBody.gameObject.name + "_child1";

							CreateChildSprite(parentRigidBody, physicsMaterial, childSprite2Vertices, parentArea,  out childSprite2, out child2Collider);
							childSprite2.gameObject.name = parentRigidBody.gameObject.name + "_child2";

#if TK2D_SLICING_ENABLED
							if(parenttk2dSprite)
							{
								childSprite1.InitFromTK2DSprite(parenttk2dSprite, child1Collider);
								childSprite2.InitFromTK2DSprite(parenttk2dSprite, child2Collider);
							}
							else
#endif
							if(parentSlicedSprite)
							{
								childSprite1.InitFromSlicedSprite(parentSlicedSprite, child1Collider);
								childSprite2.InitFromSlicedSprite(parentSlicedSprite, child2Collider);
							}
							else if(parentUnitySprite)
							{
								childSprite1.InitFromUnitySprite(parentUnitySprite, child1Collider);
								childSprite2.InitFromUnitySprite(parentUnitySprite, child2Collider);
							}

							SpriteSlicer2DSliceInfo sliceInfo = new SpriteSlicer2DSliceInfo();
							sliceInfo.SlicedObject = parentRigidBody.gameObject;
							sliceInfo.ChildObjects.Add(childSprite1.gameObject);
							sliceInfo.ChildObjects.Add(childSprite2.gameObject);
							sliceInfo.SliceEnterWorldPosition = cutEnter.point;
							sliceInfo.SliceExitWorldPosition = cutExit.point;

							// Send an OnSpriteSliced message to the sliced object
							parentRigidBody.gameObject.SendMessage("OnSpriteSliced", sliceInfo, SendMessageOptions.DontRequireReceiver);

							if(slicedObjectInfo != null)
							{
								// Need to null the parent object as we're about to destroy it
								if(destroySlicedObjects)
								{
									sliceInfo.SlicedObject = null;
								}

								slicedObjectInfo.Add(sliceInfo);
							}

							if(destroySlicedObjects)
							{
								GameObject.Destroy(parentRigidBody.gameObject);
							}
							else
							{
								parentRigidBody.gameObject.SetActive(false);
							}
						}
					}
				}
			}
		}
	}

	/// <summary>
	/// Create a child sprite from the given parent sprite, using the provided vertices
	/// </summary>
	static void CreateChildSprite(Rigidbody2D parentRigidBody, PhysicsMaterial2D physicsMaterial, List<Vector2> spriteVertices, float parentArea, out SlicedSprite slicedSprite, out PolygonCollider2D polygonCollider)
	{
		float childArea = GetArea(spriteVertices);

		GameObject childObject = new GameObject();
		childObject.transform.parent = parentRigidBody.transform.parent;
		childObject.transform.position = parentRigidBody.transform.position;
		childObject.transform.rotation = parentRigidBody.transform.rotation;
		childObject.transform.localScale = parentRigidBody.transform.localScale;

		// Child sprites should inherit the rigid body behaviour of their parents
		Rigidbody2D childRigidBody = childObject.AddComponent<Rigidbody2D>();
		childRigidBody.mass = parentRigidBody.mass * (childArea/parentArea);
		childRigidBody.drag = parentRigidBody.drag;
		childRigidBody.angularDrag = parentRigidBody.angularDrag;
		childRigidBody.gravityScale = parentRigidBody.gravityScale;
		childRigidBody.fixedAngle = parentRigidBody.fixedAngle;
		childRigidBody.isKinematic = parentRigidBody.isKinematic;
		childRigidBody.interpolation = parentRigidBody.interpolation;
		childRigidBody.sleepMode = parentRigidBody.sleepMode;
		childRigidBody.collisionDetectionMode = parentRigidBody.collisionDetectionMode;
		childRigidBody.velocity = parentRigidBody.velocity;
		childRigidBody.angularVelocity = parentRigidBody.angularVelocity;

		polygonCollider = childObject.AddComponent<PolygonCollider2D>();
		polygonCollider.points = spriteVertices.ToArray();
		polygonCollider.sharedMaterial = physicsMaterial;
		slicedSprite = childObject.AddComponent<SlicedSprite>();
	}

	#region "HELPER_FUNCTIONS"
	static float CalculateDeterminant2x3(Vector2 start, Vector2 end, Vector2 point) 
	{
		return start.x * end.y + end.x * point.y + point.x * start.y - start.y * end.x - end.y * point.x - point.y * start.x;
	}
	
	public static float CalculateDeterminant2x2(Vector2 vectorA, Vector2 vectorB)
	{
		return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
	}

	// Trianglulate the given polygon
	static int[] Triangulate(Vector2[] points) 
	{
		List<int> indices = new List<int>();
		
		int n = points.Length;
		if (n < 3)
			return indices.ToArray();
		
		int[] V = new int[n];
		
		if (Area(points) > 0)
		{
			for (int v = 0; v < n; v++)
				V[v] = v;
		}
		else 
		{
			for (int v = 0; v < n; v++)
				V[v] = (n - 1) - v;
		}
		
		int nv = n;
		int count = 2 * nv;
		for (int m = 0, v = nv - 1; nv > 2; ) {
			if ((count--) <= 0)
				return indices.ToArray();
			
			int u = v;
			if (nv <= u)
				u = 0;
			v = u + 1;
			if (nv <= v)
				v = 0;
			int w = v + 1;
			if (nv <= w)
				w = 0;
			
			if (Snip(points, u, v, w, nv, V)) 
			{
				int a, b, c, s, t;
				a = V[u];
				b = V[v];
				c = V[w];
				indices.Add(a);
				indices.Add(b);
				indices.Add(c);
				m++;
				for (s = v, t = v + 1; t < nv; s++, t++)
					V[s] = V[t];
				nv--;
				count = 2 * nv;
			}
		}
		
		indices.Reverse();
		return indices.ToArray();
	}

	// Get the area of the given polygon
	static float Area (Vector2[] points) 
	{
		int n = points.Length;
		float A = 0.0f;
		
		for (int p = n - 1, q = 0; q < n; p = q++) 
		{
			Vector2 pval = points[p];
			Vector2 qval = points[q];
			A += pval.x * qval.y - qval.x * pval.y;
		}
		
		return (A * 0.5f);
	}
	
	static bool Snip (Vector2[] points, int u, int v, int w, int n, int[] V) 
	{
		int p;
		Vector2 A = points[V[u]];
		Vector2 B = points[V[v]];
		Vector2 C = points[V[w]];
		
		if (Mathf.Epsilon > (((B.x - A.x) * (C.y - A.y)) - ((B.y - A.y) * (C.x - A.x))))
		{
			return false;
		}
		
		for (p = 0; p < n; p++) 
		{
			if ((p == u) || (p == v) || (p == w))
			{
				continue;
			}
			
			Vector2 P = points[V[p]];
			
			if (InsideTriangle(A, B, C, P))
			{
				return false;
			}
		}
		
		return true;
	}

	// Check if a point is inside a given triangle
	static bool InsideTriangle (Vector2 A, Vector2 B, Vector2 C, Vector2 P) 
	{
		float ax, ay, bx, by, cx, cy, apx, apy, bpx, bpy, cpx, cpy;
		float cCROSSap, bCROSScp, aCROSSbp;
		
		ax = C.x - B.x; ay = C.y - B.y;
		bx = A.x - C.x; by = A.y - C.y;
		cx = B.x - A.x; cy = B.y - A.y;
		apx = P.x - A.x; apy = P.y - A.y;
		bpx = P.x - B.x; bpy = P.y - B.y;
		cpx = P.x - C.x; cpy = P.y - C.y;
		
		aCROSSbp = ax * bpy - ay * bpx;
		cCROSSap = cx * apy - cy * apx;
		bCROSScp = bx * cpy - by * cpx;
		
		return ((aCROSSbp >= 0.0f) && (bCROSScp >= 0.0f) && (cCROSSap >= 0.0f));
	}
	
	// Helper class to sort vertices in ascending X coordinate order
	public class VectorComparer : IComparer<Vector2>
	{
		public int Compare(Vector2 vectorA, Vector2 vectorB)
		{
			if (vectorA.x > vectorB.x) 
			{
				return 1;
			} 
			else if (vectorA.x < vectorB.x) 
			{
				return -1;
			}
			
			return 0; 
		}
	}
	
	/// <summary>
	/// Sort the vertices into a counter clockwise order
	/// </summary>
	static Vector2[] ArrangeVertices(List<Vector2> vertices)
	{
		float determinant;
		int counterClockWiseIndex = 1;
		int clockWiseIndex = vertices.Count - 1;
		
		Vector2[] sortedVertices = new Vector2[vertices.Count];
		vertices.Sort(new VectorComparer());

		Vector2 startPoint = vertices[0];
		Vector2 endPoint = vertices[vertices.Count - 1];
		sortedVertices[0] = startPoint;
		
		for(int vertex = 1; vertex < vertices.Count - 1; vertex++)
		{
			determinant = CalculateDeterminant2x3(startPoint, endPoint, vertices[vertex]);
			
			if (determinant < 0)
			{
				sortedVertices[counterClockWiseIndex++] = vertices[vertex];
			}
			else 
			{
				sortedVertices[clockWiseIndex--] = vertices[vertex];
			}
		}
		
		sortedVertices[counterClockWiseIndex] = endPoint;
		return sortedVertices;
	}
	
	/// <summary>
	/// Work out the area defined by the vertices
	/// </summary>
	static float GetArea(List<Vector2> vertices)
	{
		// Check that the total area isn't stupidly small
		float area = vertices[0].y * (vertices[vertices.Count-1].x- vertices[1].x);
		
		for(int i = 1; i < vertices.Count; i++)
		{
			area += vertices[i].y * (vertices[i-1].x - vertices[(i+1)% vertices.Count].x);
		}
		
		return Mathf.Abs(area * 0.5f);
	}
	
	/// <summary>
	/// Check if this list of points defines a convex shape
	/// </summary>
	public static bool IsConvex(List<Vector2> vertices)
	{
		float determinant;
		Vector3 v1 = vertices[0] - vertices[vertices.Count-1];
		Vector3 v2 = vertices[1] - vertices[0];
		float referenceDeterminant = CalculateDeterminant2x2(v1, v2);
		
		for (int i=1; i< vertices.Count - 1; i++)
		{
			v1 = v2;
			v2 = vertices[i+1] - vertices[i];
			determinant = CalculateDeterminant2x2(v1, v2);
			
			if (referenceDeterminant * determinant < 0.0f)
			{
				return false;
			}
		}
		
		v1 = v2;
		v2 = vertices[0] - vertices[vertices.Count-1];
		determinant = CalculateDeterminant2x2(v1, v2);
		
		if (referenceDeterminant * determinant < 0.0f)
		{
			return false;
		}
		
		return true;
	}
	
	/// <summary>
	/// Verify if the list of vertices are suitable to create a new 2D collider shape
	/// 
	static bool AreVerticesAcceptable(List<Vector2> vertices)
	{
		// Polygons need to at least have 3 vertices, not be convex, and have a vaguely sensible total area
		if (vertices.Count < 3)
		{
			if(s_DebugLoggingEnabled)
			{
				Debug.LogWarning("Vertices rejected - insufficient vertices");
			}

			return false;
		}
		    
		if(GetArea(vertices) < 0.0001f)
		{
			if(s_DebugLoggingEnabled)
			{
				Debug.LogWarning("Vertices rejected - below minimum area");
			}

			return false;
		}

		if(!s_AllowConvexSlicing && !IsConvex(vertices))
		{
			if(s_DebugLoggingEnabled)
			{
				Debug.LogWarning("Vertices rejected - shape is not convex");
			}

			return false;
		}
		
		return true;
	}

	/// <summary>
	/// Use the polygon winding algorithm to check whether a point is inside the given polygon
	/// </summary>
	static bool IsPointInsidePolygon(Vector2 pos, Vector2[] polygonPoints)
	{
		int winding = 0;
		
		for(int vertexIndex = 0; vertexIndex < polygonPoints.Length; vertexIndex++)
		{
			int nextIndex = vertexIndex + 1;
			
			if(nextIndex >= polygonPoints.Length)
			{
				nextIndex = 0;
			}
			
			Vector2 thisPoint = polygonPoints[vertexIndex];
			Vector2 nextPoint = polygonPoints[nextIndex];
			
			if(thisPoint.y <= pos.y)
			{
				if(nextPoint.y > pos.y)
				{
					float isLeft = ((nextPoint.x - thisPoint.x) * (pos.y - thisPoint.y) - (pos.x - thisPoint.x) * (nextPoint.y - thisPoint.y));
					
					if(isLeft > 0)
					{
						winding++;
					}
				}
			}
			else
			{
				if(nextPoint.y <= pos.y)
				{
					float isLeft = ((nextPoint.x - thisPoint.x) * (pos.y - thisPoint.y) - (pos.x - thisPoint.x) * (nextPoint.y - thisPoint.y));
					
					if(isLeft < 0)
					{
						winding--;
					}
				}
			}
		}
		
		return winding != 0;
	}
	#endregion
}

#if UNITY_EDITOR
public static class SpriteSlicerConvexHelper
{
	[MenuItem("Tools/Sprite Slicer 2D/Make Convex")]
	static void MakeConvex()
	{
		for(int loop = 0; loop < Selection.gameObjects.Length; loop++)
		{
			PolygonCollider2D polyCollider = Selection.gameObjects[loop].GetComponent<PolygonCollider2D>();

			if(polyCollider)
			{
				List<Vector2> vertices = new List<Vector2>(polyCollider.points);
				int originalNumVertices = vertices.Count;
				int iterations = 0;

				if(SpriteSlicer2D.IsConvex(vertices))
				{
					Debug.Log(Selection.gameObjects[loop].name + " is already convex - no work to do");
				}
				else
				{
					do
					{
						float determinant;
						Vector3 v1 = vertices[0] - vertices[vertices.Count-1];
						Vector3 v2 = vertices[1] - vertices[0];
						float referenceDeterminant = SpriteSlicer2D.CalculateDeterminant2x2(v1, v2);
						
						for (int i=1; i< vertices.Count - 1;)
						{
							v1 = v2;
							v2 = vertices[i+1] - vertices[i];
							determinant = SpriteSlicer2D.CalculateDeterminant2x2(v1, v2);
							
							if (referenceDeterminant * determinant < 0.0f)
							{
								vertices.RemoveAt(i);
							}
							else
							{
								i++;
							}
						}
						
						v1 = v2;
						v2 = vertices[0] - vertices[vertices.Count-1];
						determinant = SpriteSlicer2D.CalculateDeterminant2x2(v1, v2);
						
						if (referenceDeterminant * determinant < 0.0f)
						{
							vertices.RemoveAt(vertices.Count - 1);
						}

						iterations++;
					} while(!SpriteSlicer2D.IsConvex(vertices) && iterations < 25);
				}
				
				if(SpriteSlicer2D.IsConvex(vertices))
				{
					polyCollider.points = vertices.ToArray();
					Debug.Log(Selection.gameObjects[loop].name + " points reduced to " + vertices.Count.ToString() + " from " + originalNumVertices.ToString() );
				}
				else
				{
					Debug.Log(Selection.gameObjects[loop].name + " could not be made convex, please adjust shape manually");
				}
			}
		}
	}
}
#endif

/// <summary>
/// Simple class that takes a sprite and a polygon collider, and creates
/// a render mesh that exactly fits the collider.
/// </summary>
[RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
public class SlicedSprite : MonoBehaviour 
{
	public MeshRenderer MeshRenderer 				{ get { return m_MeshRenderer; } }
	public Vector2 MinCoords						{ get { return m_MinCoords; } }
	public Vector2 MaxCoords						{ get { return m_MaxCoords; } }
	public Bounds SpriteBounds						{ get { return m_SpriteBounds; } }
	public int ParentInstanceID						{ get { return m_ParentInstanceID; } }
	public int CutsSinceParentObject				{ get { return m_CutsSinceParentObject; } }
	public bool Rotated								{ get { return m_Rotated; } }
	public bool HFlipped							{ get { return m_HFlipped; } }
	public bool VFlipped							{ get { return m_VFlipped; } }
	
	MeshRenderer m_MeshRenderer;
	MeshFilter m_MeshFilter;
	
	Vector2 m_MinCoords;
	Vector2 m_MaxCoords;
	Bounds m_SpriteBounds;
	int m_ParentInstanceID;
	int m_CutsSinceParentObject;
	bool m_Rotated;
	bool m_VFlipped;
	bool m_HFlipped;

	static List<Material> s_MaterialList = new List<Material>();

	/// <summary>
	/// Sliced sprites share materials wherever possible in order to ensure that dynamic batching is maintained when
	/// eg. slicing lots of sprites that share the same sprite sheet. If you want to clear out this list 
	/// (eg. on transitioning to a new scene) then simply call this function
	/// </summary>
	public static void ClearMaterials()
	{
		s_MaterialList.Clear();
	}

#if TK2D_SLICING_ENABLED
	/// <summary>
	/// Initialise the sliced sprite using an existing tk2dsprite
	/// </summary>
	public void InitFromTK2DSprite(tk2dSprite sprite, PolygonCollider2D polygon)
	{
		tk2dSpriteDefinition spriteDefinition = sprite.GetCurrentSpriteDef();
		bool isRotated = spriteDefinition.flipped != tk2dSpriteDefinition.FlipMode.None;
		bool isHFlipped = sprite.FlipX;
		bool isVFlipped = sprite.FlipY;
		InitSprite(sprite.gameObject, polygon, spriteDefinition.uvs[0], spriteDefinition.uvs[spriteDefinition.uvs.Length - 1], spriteDefinition.GetBounds(), spriteDefinition.material, isRotated, isHFlipped, isVFlipped);
		m_ParentInstanceID = sprite.gameObject.GetInstanceID();
	}
#endif
	
	/// <summary>
	/// Initialise this sliced sprite using an existing SlicedSprite
	/// </summary>
	public void InitFromSlicedSprite(SlicedSprite slicedSprite, PolygonCollider2D polygon)
	{
		InitSprite(slicedSprite.gameObject, polygon, slicedSprite.MinCoords, slicedSprite.MaxCoords, slicedSprite.SpriteBounds, slicedSprite.m_MeshRenderer.sharedMaterial, slicedSprite.Rotated, slicedSprite.HFlipped, slicedSprite.VFlipped);
		m_ParentInstanceID = slicedSprite.GetInstanceID();
		m_CutsSinceParentObject = slicedSprite.CutsSinceParentObject + 1;
	}
	
	/// <summary>
	/// Initialise using a unity sprite
	/// </summary>
	public void InitFromUnitySprite(SpriteRenderer unitySprite, PolygonCollider2D polygon)
	{
		Material material = null;

		for(int loop = 0; loop < s_MaterialList.Count; loop++)
		{
			if(s_MaterialList[loop].mainTexture.GetInstanceID() == unitySprite.sprite.texture.GetInstanceID())
			{
				material = s_MaterialList[loop];
			}
		}

		if(material == null)
		{
			material = new Material(unitySprite.material.shader);
			material.mainTexture = unitySprite.sprite.texture;
			material.name = unitySprite.name + "_sliced";
			s_MaterialList.Add(material);
		}

		Rect textureRect = unitySprite.sprite.textureRect;
		Vector2 minTextureCoords = new Vector2(textureRect.xMin/(float)unitySprite.sprite.texture.width, textureRect.yMin/(float)unitySprite.sprite.texture.height);
		Vector2 maxTextureCoords = new Vector2(textureRect.xMax/(float)unitySprite.sprite.texture.width, textureRect.yMax/(float)unitySprite.sprite.texture.height);

		InitSprite(unitySprite.gameObject, polygon, minTextureCoords, maxTextureCoords, unitySprite.sprite.bounds, material, false, false, false);
		m_ParentInstanceID = unitySprite.gameObject.GetInstanceID();
	}
	
	/// <summary>
	/// Initialise this sprite using the given polygon definition
	/// </summary>
	void InitSprite(GameObject parentObject, PolygonCollider2D polygon, Vector3 minCoords, Vector3 maxCoords, Bounds spriteBounds, Material material, bool rotated, bool hFlipped, bool vFlipped)
	{
		m_MinCoords = minCoords;
		m_MaxCoords = maxCoords;
		m_SpriteBounds = spriteBounds;		
		m_VFlipped = vFlipped;
		m_HFlipped = hFlipped;
		m_Rotated = rotated;
		m_SpriteBounds = spriteBounds;

		gameObject.tag = parentObject.tag;
		gameObject.layer = parentObject.layer;
		
		Mesh spriteMesh = new Mesh();
		spriteMesh.name = "SlicedSpriteMesh";
		
		m_MeshFilter = GetComponent<MeshFilter>();
		m_MeshFilter.mesh = spriteMesh;
		
		int numVertices = polygon.points.Length;
		Vector3[] vertices = new Vector3[numVertices];
		Color[] colors = new Color[numVertices]; 
		Vector2[] uvs = new Vector2[numVertices];
		int[] triangles = new int[numVertices * 3];
		
		// Convert vector2 -> vector3
		for(int loop = 0; loop < vertices.Length; loop++)
		{
			vertices[loop] = polygon.points[loop];
			colors[loop] = Color.white;
		}
		
		Vector2 uvWidth = maxCoords - minCoords;
		
		for(int vertexIndex = 0; vertexIndex < numVertices; vertexIndex++)
		{
			float widthFraction = 0.5f + (polygon.points[vertexIndex].x / spriteBounds.size.x);
			float heightFraction = 0.5f + (polygon.points[vertexIndex].y / spriteBounds.size.y);

			if(hFlipped)
			{
				widthFraction = 1.0f - widthFraction;
			}
			
			if(vFlipped)
			{
				heightFraction = 1.0f - heightFraction;
			}
			
			Vector2 texCoords = new Vector2();

			if(rotated)
			{			
				texCoords.y = maxCoords.y - (uvWidth.y * (1.0f - widthFraction));
				texCoords.x = minCoords.x + (uvWidth.x * heightFraction);
			}
			else
			{
				texCoords.x = minCoords.x + (uvWidth.x * widthFraction);
				texCoords.y = minCoords.y + (uvWidth.y * heightFraction);
			}
			
			uvs[vertexIndex] = texCoords;
		}
		
		int triangleIndex = 0;
		
		for(int vertexIndex = 1; vertexIndex < numVertices - 1; vertexIndex++)
		{
			triangles[triangleIndex++] = 0;
			triangles[triangleIndex++] = vertexIndex + 1;
			triangles[triangleIndex++] = vertexIndex;
		}	
		
		spriteMesh.Clear();
		spriteMesh.vertices = vertices;
		spriteMesh.uv = uvs;
		spriteMesh.triangles = triangles;
		spriteMesh.colors = colors;
		spriteMesh.RecalculateBounds();
		spriteMesh.RecalculateNormals();
		spriteMesh.Optimize(); 
		
		m_MeshRenderer = GetComponent<MeshRenderer>();
		m_MeshRenderer.material = material;
		m_MeshRenderer.sortingLayerID = parentObject.renderer.sortingLayerID;
		m_MeshRenderer.sortingOrder = parentObject.renderer.sortingOrder;
	}
}