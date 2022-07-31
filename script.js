
"use strict"

let content = document.querySelector("section");

function bmiCalculator()
{
	content.innerHTML = "";
	
	//ask user to fill in width and height	
	let weight_div = document.createElement("div");	
	let height_div = document.createElement("div");	
	let submit_button_div = document.createElement("div");
	
	let height_label = document.createElement("label");
	height_label.setAttribute("for","heightInput");
	height_label.innerHTML = "Height (cm)";
	let height_input = document.createElement("input");
	height_input.setAttribute("id","heightInput");
	height_input.setAttribute("name","heightInput");
	height_input.setAttribute("type","number");
	height_input.setAttribute("min","100");
	height_input.setAttribute("value","100");
	height_input.addEventListener("focusout",() => {
		let height = document.getElementById("heightInput");
		if (height.value < height.min)
			height.value = height.min;
	});
	
	let weight_label = document.createElement("label");
	weight_label.setAttribute("for","weightInput");
	weight_label.innerHTML = "Weight (kg)";
	let weight_input = document.createElement("input");
	weight_input.setAttribute("id","weightInput");
	weight_input.setAttribute("name","weightInput");
	weight_input.setAttribute("type","number");
	weight_input.setAttribute("min","20");
	weight_input.setAttribute("value","20");
	weight_input.addEventListener("focusout",() => {
		let weight = document.getElementById("weightInput");
		if (weight.value < weight.min)
			weight.value = weight.min;
	});
	
	let submit_button = document.createElement("button");
	submit_button.innerHTML = "Calculate";
	submit_button.onclick = () => 
	{
		
		let weight = document.getElementById("weightInput").value;
		let height = document.getElementById("heightInput").value;
		
		content.innerHTML = "";
		
		let BMI = (weight/(height*height/10000)).toFixed(2);
		
		let bmi_div = document.createElement("div");
		let result_div = document.createElement("div");
		bmi_div.innerHTML = "BMI = " + BMI;
		
		result_div.innerHTML = "Result = "
		if (BMI < 18.5)
			result_div.innerHTML += "UNDERWEIGHT";
		else if (BMI < 24.9)
			result_div.innerHTML += "NORMAL";
		else if (BMI < 29.9)
			result_div.innerHTML += "OVERWEIGHT";
		else if (BMI < 34.9)
			result_div.innerHTML += "OBESE";
		else
			result_div.innerHTML += "EXTREMELY OBESE";
		
		content.appendChild(bmi_div);
		content.appendChild(result_div);
	};
	
	weight_div.appendChild(weight_label);
	weight_div.appendChild(weight_input);
	height_div.appendChild(height_label);
	height_div.appendChild(height_input);
	
	content.appendChild(height_div);
	content.appendChild(weight_div);
	content.appendChild(submit_button);
}

function generalWorkout()
{
	content.innerHTML = "";
	
	//let the user choose the body parts
	let body_parts_div = document.createElement("div");
	let body_parts_label = document.createElement("label");
	body_parts_label.innerHTML = "Parts";
	body_parts_label.setAttribute("for","bodyParts");
	let body_parts_dropdown = document.createElement("select");
	body_parts_dropdown.setAttribute("id","bodyParts");
	body_parts_dropdown.setAttribute("name","bodyParts");
	
	//all the parts
	body_parts_dropdown.appendChild(new Option("Chest","chest"));
	body_parts_dropdown.appendChild(new Option("Shoulder","shoulder"));
	body_parts_dropdown.appendChild(new Option("Back","back"));
	body_parts_dropdown.appendChild(new Option("Core","core"));
	body_parts_dropdown.appendChild(new Option("Arms","arms"));
	body_parts_dropdown.appendChild(new Option("Legs","legs"));
	
	body_parts_div.appendChild(body_parts_label);
	
	body_parts_div.appendChild(body_parts_label);
	body_parts_div.appendChild(body_parts_dropdown);
	
	content.appendChild(body_parts_div);
}