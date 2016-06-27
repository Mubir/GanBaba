using UnityEngine;
using System.Collections;

public class CommonFunctions : MonoBehaviour 
{
	public string INT_TO_BANGLA_STRING(int num)
	{
		string number="";
		string number1=""+num;
		for(int i=0;i<number1.Length;i++)
		{
			switch(number1[i])
			{
			case '0':number +='0';break;
			case '1':number +='1';break;
			case '2':number +='2';break;
			case '3':number +='3';break;
			case '4':number +='4';break;
			case '5':number +='5';break;
			case '6':number +='6';break;
			case '7':number +='7';break;
			case '8':number +='8';break;
			case '9':number +='9';break;
			}
		}
		return number;
	}

}
