function addToList() {
		let userInput=document.getElementById("input").value; 
		if (userInput === "") {
			alert("Please provide the valid input");
			return;
		}
		let ul=document.getElementById("list"); 
		let li=document.createElement("li"); 
		li.innerHTML=userInput; 
		ul.appendChild(li); 

		document.getElementById("input").value = "";
		
		let listItems = document.getElementsByTagName('li');
		for (let i = 2; i < listItems.length; i += 3) {
			listItems[i].style.color = 'red';
		}
	} 
	
	