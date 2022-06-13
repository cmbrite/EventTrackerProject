window.addEventListener('load', function(e) {
	e.preventDefault();
	console.log('script.js loaded');
	init();
});

function init() {
	console.log('In init()');
	document.getElementById('editSessionForm').style.display = "none";
	lookUp();
	loadStudySessions();
	createSession();
}

//Check that form input is a number > 0 and listens for click event on button
function lookUp() {
	console.log('in lookUp');
	document.sessionForm.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		let sessionId = document.sessionForm.studyId.value;
		if (!isNaN(sessionId) && sessionId > 0) {
			getStudySession(sessionId);
		} else {
			alert('Please enter a whole number greater than 0.')
		}
	})
}
//Takes id from lookup() and forwards Study session entry to displayStudySession()
function getStudySession(sessionId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/studies/' + sessionId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayFilm().
				let session = JSON.parse(xhr.responseText);
				displayStudySession(session);
			}
			else {
				alert('Error finding study session.')
			}
		}
	};
	xhr.send();
}
//Takes session and organizes info into table and displays using JS
function displayStudySession(session) {
	document.getElementById('studyList').style.display = "none";
	document.getElementById('createSession').style.display = "none";
	document.getElementById('editSessionForm').style.display = "block";
	document.getElementById('subject').value = session.subject;
	document.getElementById('subSection').value = session.subSection;
	document.getElementById('studyDuration').value = session.studyDuration;
	document.getElementById('location').value = session.location;
	document.getElementById('date').value = session.date;
	console.log('Session displayed');
	let btn = document.getElementById('delete');
	btn.onclick = function(e) {
		e.preventDefault();
		let sessionId = session.id;
		let confirmation = confirm("Remove this entry?");
		if (confirmation == true) {
			removeSession(sessionId)
		} else {
			return false;
		}
	}
	let btn2 = document.getElementById('edit');
	btn2.onclick = function(e) {
		e.preventDefault();
		console.log('button click');
		let sessionId = session.id;
		let confirmation = confirm("Edit this entry?");
		if (confirmation) {
			let form = document.editSessionForm;
			session = {
				id: sessionId,
				subject: form.subject.value,
				subSection: form.subSection.value,
				studyDuration: form.studyDuration.value,
				location: form.location.value,
				date: form.date.value
			};
			console.log('form updated');
			if (confirmation == true) {
				if (!form.studyDuration.value <= 0 && form.subject.value !== '') {
					console.log(session);
					sendEditSession(session);
				}
			} else {
				alert('Error study creating session. \n Please complete all fields.')
			}
		};
	}
}


function sendEditSession(session) {
	console.log('in sendEditSession')
	let sessionId = session.id;
	let xhr = new XMLHttpRequest();
	xhr.open('PATCH', 'api/studies/' + sessionId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayNewSession().
				session = JSON.parse(xhr.responseText);
				displayNewSession(session);
			}
			else {
				alert('Error editing study session.')
				// * On failure, or if no response text was received, put "Film not found" 
				//   in the filmData div.
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(session));
}

function removeSession(sessionId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/studies/' + sessionId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				// * On success, reload the page
				window.location.reload();
			}
			else {
				alert('Error removing session.')
			}
		}
	};
	xhr.send();
}

//Finds all study session entries and forwards to displayStudySessions()
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
				alert('Error finding study sessions.')
			}
		}
	};
	xhr.send();
}

//Takes all sessions and organizes info into table and displays using JS
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

		rowHead2.onclick = function() {
			getStudySession(value.id);
			document.getElementById('studyList').textContent = '';
			document.getElementById('createSession').textContent = '';
		}

	});
	let tableDiv = document.getElementById('studyList');
	tableDiv.appendChild(table);
}



function displayNewSession(session) {
	console.log('displayNewSession');
	let sub = session.subject;
	let sec = session.subSection;
	let dur = session.studyDuration;
	let loc = session.location;
	let date = session.date;
	//Alert popup that displays created session entry info
	if (alert('Study Session Details: ' + '\n Subject: ' + sub + '\n Sub-Section: ' + sec + '\n Duration: ' + dur + '\n Location: ' + loc + '\n Date: ' + date)) { }
	//Reloads page after alert is closed to add new session to list.
	else {
		window.location.reload();
	}
}


function createSession() {
	//listener for add study session button click event
	document.newSessionForm.addSessionButton.addEventListener('click', function(e) {
		e.preventDefault();
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
			alert('Error study creating session. \n Please complete all fields.')
		}
	});
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
				alert('Error creating study session.')
				// * On failure, or if no response text was received, put "Film not found" 
				//   in the filmData div.
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newSession));
}




