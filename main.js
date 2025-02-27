import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup2();
warmup2b();
warmup2c();
warmup3();

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
}

function warmup5() {}
