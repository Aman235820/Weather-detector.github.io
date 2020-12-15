$(document).ready(function(){
		$("#button-addon2").click(function(){

			$(".box2").slideDown("fast");


			$("#ani").animate({
                width:"500px",
                height:"100px",
                fontSize:"2em",
        	},2000);




      });


	});
var dy=new Date();
		document.getElementById('day').innerHTML=dy.toDateString();
	document.getElementById('button-addon2').addEventListener("click",temp);
	function temp(){
		var cities=document.getElementById('city').value;
		xhr=new XMLHttpRequest();
		xhr.open("GET","http://api.openweathermap.org/data/2.5/weather?q=" + cities + "&appid=4083bee51c67644102036ec9263a1031",true);
		xhr.send();
		xhr.onload=function(){
			if(this.status==200 && this.readyState==4){
				var t=JSON.parse(this.responseText);
				var x=t.main.temp;
				var f=t.main.feels_like;
				var h=t.main.humidity;
				var wem=t.weather[0].main;
				if(wem=="Clouds" || wem=="Drizzle"){
					document.getElementById('icon').innerHTML='<i class="fas fa-clouds-sun" style="color:lightskyblue"></i>';
				}
				else if(wem=="Rain" || wem=="Thunderstorm"){
					document.getElementById('icon').innerHTML='<i class="fas fa-cloud-rain" style="color:deepskyblue"></i>';
				}
				else if(wem=="Clear"){
					document.getElementById('icon').innerHTML='<i class="fas fa-sun" style="color:gold"></i>';
				}
				else if(wem=="Haze"){
					document.getElementById('icon').innerHTML='<i class="fas fa-sun-haze" style="color:white"></i>';
				}
				else if(wem=="Snow"){
					document.getElementById('icon').innerHTML='<i class="fas fa-snowflake" style="color:white"></i>';
				}
				else
					{document.getElementById('icon').innerHTML='<i class="fas fa-sun" style="color:gold"></i>';}


				document.getElementById('city1').innerHTML=t.name+","+t.sys.country;

			}
			else if(this.status==404){
				document.getElementById('error').innerHTML="Enter a valid city name**";
			}
			var a=x-273;
			document.getElementById('demo').innerHTML=a.toFixed(3)+"&#176;C";
			document.getElementById('feel').innerHTML="Feels like : "+((f-273).toFixed(3))+"&#176;C";+","+"Humidity="+h+"%";
			document.getElementById('hum').innerHTML="Humidity="+h+"%";
			document.getElementById('des').innerHTML=t.weather[0].description.toUpperCase();
		}
 	
}