import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup2();
warmup2b();
warmup2c();
warmup3();
warmup4();

function warmup1() {
	console.log("Exercise week 1");
	document.querySelector("#button-1a").addEventListener("click", function () {
		console.log("click Ok");

		const p = "<p>Hallo, dit is de oefening van Amina<p/>";

		document.querySelector("#content-1").innerHTML = p;
	});
}

function warmup2() {
	console.log("Exercise week 2");
	const scores = getRandomScores(10);

	document.querySelector("#button-2a").addEventListener("click", function () {
		console.log("click Ok");
		let html = "<ul>";
		scores.forEach(function (score) {
			console.log(score);
			html += `<li>${score}</li>`;
		});
		html += "</ul>";
		document.querySelector("#content-2").innerHTML = html;
	});
}
function warmup2b() {
	console.log("Exercise week 2");
	const scores = getRandomScores(10);

	document.querySelector("#button-2b").addEventListener("click", function () {
		console.log("click Ok");
		let html = "<ul>";
		scores.forEach(function (score) {
			console.log(score);
			html += `<li>${score}</li>`;
			scores.sort(function (a, b) {
				if (a > b) {
					return 1;
				} else {
					return -1;
				}
			});
		});
		html += "</ul>";
		document.querySelector("#content-2").innerHTML = html;
	});
}

function warmup2c() {
	const scores = getRandomScores(10);
	document.querySelector("#button-2c").addEventListener("click", function () {
		console.log("click Ok");
		let html = "<ul>";

		scores.forEach(function (score) {
			console.log(score);
			html += `<li>${score}</li>`;
		});
		html += "</ul>";
		document.querySelector("#content-2").innerHTML = html;

		const sum = scores.reduce(function (total, current) {
			return total + current;
		});
		document
			.querySelector("#content-2")
			.insertAdjacentHTML("beforeEnd", `<h1>Totaal:${sum}</h1>`);
	});
}

function warmup3() {
	//log JSON
	let student = getStudentJSON();
	console.log(student);
	/*console.log(JSON); doet niks*/

	//zet JSON om in een JavaScript object
	const studentObject = JSON.parse(student);
	console.log(studentObject);

	document.querySelector("#button-3b").addEventListener("click", function () {
		//html leeg maken
		let html = "";

		//html aanmaken
		html += `<h2>Naam: ${studentObject.firstname} ${studentObject.name}</h2>
		<h2>Leeftijd:${studentObject.age}</h2>`;

		//print html op scherm
		document.querySelector("#content-3").innerHTML = html;
	});
}

function warmup4() {
	let main, min, max;
	const url =
		"https://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric";

	document.querySelector("#button-4a").addEventListener("click", function () {
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);

				document
					.querySelector("#button-4b")
					.addEventListener("click", function (event) {
						let html = "";
						html += `<h2>Temp: ${data.main.temp}</h2>
						<h2>Min: ${data.main.temp_min}</h2>
						<h2>Max: ${data.main.temp_max}</h2>`;
						document.querySelector("#content-4").innerHTML = html;
					});
			});
	});
}

function warmup5() {}
