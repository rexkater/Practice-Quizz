function contestacion1()
{

	var qs = document.getElementsByName("e1");
	var numberofradios= qs.length;

	for(var i= 0; i < numberofradios; i++)
	{

		if(qs [i].checked)
		{

			if(qs[i].value=="cierto")
			{
			document.getElementById("text1").innerHTML="Correcto";
			break;
			}
			else{

			document.getElementById("text1").innerHTML="Incorrecto";

			}

		}

	}
}


function contestacion3()
{

	var qs = document.getElementsByName("e3");
	var numberofradios= qs.length;



		if(qs [0].value==0)
		{

			
			document.getElementById("text3").innerHTML="Correcto";
		}
			else{

			document.getElementById("text3").innerHTML="Incorrecto";

			}
}


function contestacion4()
{

	var qs = document.getElementsByName("e4");
	var numberofradios= qs.length;

	for(var i= 0; i < numberofradios; i++)
	{

		if(qs [i].checked)
		{

			if(qs[i].value=="cierto")
			{
			document.getElementById("text4").innerHTML="Correcto";
			break;
			}
			else{

			document.getElementById("text4").innerHTML="Incorrecto";

			}

		}

	}
}

function contestacion5()
{

	var qs = document.getElementsByName("e5");
	var numberofradios= qs.length;

	for(var i= 0; i < numberofradios; i++)
	{

		if(qs [i].checked)
		{

			if(qs[i].value=="cierto")
			{
			document.getElementById("text5").innerHTML="Correcto";
			break;
			}
			else{

			document.getElementById("text5").innerHTML="Incorrecto";

			}

		}

	}
}

