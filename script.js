//your JS code here. If required.
document.addEventListener('DOMContentLoaded' ,function () {
	const form = document.getElementById('formData');


	form.addEventListener('submit',function (event){
		event.preventDefault();
		const age = document.getElementById("age").value;
		const name = document.getElementById("name").value;
		console.log(age);
		console.log(name);
		const promise = new Promise((resolve,reject) => {
			setTimeout (() => {
				if(age>= 18){
					resolve(`Welcome, ${name}. You can vote.`);
				}
				else{
					reject(`Oh sorry ${name}. You aren't old enough.`);
				}
			},4000)
		})
		promise.then((message) => {
			alert(message);
		})
		.catch((error) => {
			alert(error);
		})
		
	})
	
})
// 