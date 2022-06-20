import { StudySessionsService } from './../../services/study-sessions.service';
import { Sessions } from './../../models/sessions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sessionList: Sessions[] = [];
  newSession: Sessions = new Sessions();


  constructor(
    private studyServ: StudySessionsService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.studyServ.index().subscribe({
      next: (session)=>{this.sessionList = session},
      error: (boom) => {
        console.error('HomeComponent.reload: error loading list');
        console.error(boom);
      }
    })
  }

  addSession(session: Sessions) {
    this.studyServ.create(session).subscribe({
    next: (newSession) => {
      this.reload();
      this.newSession = new Sessions();
      alert('Study Session Details: ' +
      '\n Subject: ' + newSession.subject
      + '\n Sub-Section: ' + newSession.subSection
      + '\n Duration: ' + newSession.studyDuration
      + '\n Location: ' + newSession.location
      + '\n Date: ' + newSession.date)
    },
    error: (fail) => {
      console.error('StudyListComponent.addSession: error adding session');
      console.error(fail);
    }
  });
  }

}
