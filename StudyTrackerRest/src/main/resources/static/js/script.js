window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();
});

function init() {
	console.log('In init()');
	loadStudySessions()
	document.newSessionForm.addSessionButton.addEventListener('click', createSession);
}

function loadStudySessions() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/studies/');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let sessions = JSON.parse(xhr.responseText);
				displayStudySessions(sessions);
			}
			else {
				alert('Error finding session.')
			}
		}
	};
	xhr.send();
}


function displayStudySessions(sessions) {
	let table = document.createElement('table');
	table.textContent = '';

	let head = document.createElement('thead');
	table.appendChild(head);

	let rowHead = document.createElement('tr');
	head.appendChild(rowHead);

	let title = document.createElement('th')
	rowHead.appendChild(title)
	title.textContent = 'Subject';
	let title2 = document.createElement('th')
	rowHead.appendChild(title2)
	title2.textContent = 'Sub-Section';
	let title3 = document.createElement('th')
	rowHead.appendChild(title3)
	title3.textContent = 'Duration';
	let title4 = document.createElement('th')
	rowHead.appendChild(title4)
	title4.textContent = 'Location';
	let title5 = document.createElement('th')
	rowHead.appendChild(title5)
	title5.textContent = 'Date';

	let tBody = document.createElement('tbody');
	table.appendChild(tBody);

	sessions.forEach(function(value, index, array) {
		let rowHead2 = document.createElement('tr');
		let td = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');
		let td5 = document.createElement('td');
		td.textContent = value.subject;
		td2.textContent = value.subSection;
		td3.textContent = value.studyDuration;
		td4.textContent = value.location;
		td5.textContent = value.date;
		rowHead2.appendChild(td);
		rowHead2.appendChild(td2);
		rowHead2.appendChild(td3);
		rowHead2.appendChild(td4);
		rowHead2.appendChild(td5);
		tBody.appendChild(rowHead2);
	})
	let tableDiv = document.getElementById('studyList');
	tableDiv.appendChild(table);
}

function displayNewSession(session) {

	let sub = session.subject;
	let sec = session.subSection;
	let dur = session.studyDuration;
	let loc = session.location;
	let date = session.date;
	//Alert popup that displays created session entry info
	if(alert('Successfully created a new session!' + '\n Subject: '+sub + '\n Sub-Section: '+sec + '\n Duration: '+dur + '\n Location: '+loc + '\n Date: '+date)){}
	//Reloads page after alert is closed to add new session to list.
	else window.location.reload();
}


function createSession() {
	event.preventDefault();
	let form = document.newSessionForm;
	let newSession = {
		subject: form.subject.value,
		subSection: form.subSection.value,
		studyDuration: form.studyDuration.value,
		location: form.location.value,
		date: form.date.value
	};
	if (!form.studyDuration.value <= 0 && form.subject.value !== '') {
		sendNewSession(newSession);
	} else {
		alert('Error creating session. \n Please complete all fields.')
	}
	function sendNewSession(newSession) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/studies/');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 201) {
					// * On success, if a response was received parse the film data
					//   and pass the film object to displayFilm().
					let session = JSON.parse(xhr.responseText);
					displayNewSession(session);
				}
				else {
					alert('Error creating session.')
					// * On failure, or if no response text was received, put "Film not found" 
					//   in the filmData div.
				}
			}
		};
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(JSON.stringify(newSession));
	}
}

