import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sessions } from 'src/app/models/sessions';
import { StudySessionsService } from 'src/app/services/study-sessions.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit {

  sessionList: Sessions[] = [];
  newSession: Sessions = new Sessions();
  selected: null | Sessions = null;
  editSession: null | Sessions = null;
  display: boolean = false;
  display2: boolean = false;
  display3: boolean = false;


  constructor(
    private studyServ: StudySessionsService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  averageStudyTime(){
    let sessions = this.sessionList;
    let sum = 0;
    for(let i = 0; i < sessions.length; i++) {
      let dur = sessions[i].studyDuration!;
    sum = sum + dur;
    }
    let avg = sum / sessions.length;
    return avg;
  }

  totalStudyTime(){
    let sessions = this.sessionList;
    let sum = 0;
    for(let i = 0; i < sessions.length; i++) {
      let dur = sessions[i].studyDuration!;
    sum = sum + dur;
    }
    return sum;
  }

  updateSession(session: Sessions, setSelected: boolean = true): void {
    this.studyServ.update(session).subscribe({
      next: (updated) =>{
        this.reload();

        if(setSelected){
        this.selected = updated;
        }
        this.editSession = null;
      },
      error: (nojoy) => {
        console.error('StudyListComponent.updateSession: error on update');
        console.error(nojoy);
      }
    })
  }

  deleteSession(session: Sessions){
    let confirmation = confirm("Are you sure you want to delete this study session entry?");
    if(confirmation){
    this.studyServ.destroy(session).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (zap) =>{
        console.error('StudyListComponent.deleteSession: error on destroy');
        console.error(zap);
      }
    });
  }
  }

  setEditTSession() {
    this.editSession = Object.assign({}, this.selected);
  }

  addSession(session: Sessions) {
    this.studyServ.create(session).subscribe({
    next: (newSession) => {
      this.reload();
      this.newSession = new Sessions();
    },
    error: (fail) => {
      console.error('StudyListComponent.addSession: error adding session');
      console.error(fail);
    }
  });
  }

  displaySession(session: Sessions) {
    this.selected = session;
  }

  displayTable() {
    this.selected = null;
  }

  getSessionCount(){
     return this.sessionList.length
  }

  checkSessionLevel(){
    let studyMore = 'You need to study more!'
    let greateJob = 'Great Job!'
    let goodJob = 'Good Job, but you can do better!'
    let numOfstudy = this.getSessionCount();
    if(numOfstudy >= 10) {
      return greateJob;
    }else if (numOfstudy >= 5){
        return goodJob;
    }else{
      return studyMore;
    }
      }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.studyServ.index().subscribe({
      next: (session)=>{this.sessionList = session},
      error: (boom) => {
        console.error('StudyListComponent.reload: error loading list');
        console.error(boom);
      }
    })
  }
}
