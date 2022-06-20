import { Sessions } from './../models/sessions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StudySessionsService {

    private url = environment.baseUrl + 'api/studies';

  constructor(
    private http: HttpClient, private datePipe: DatePipe
  ) { }

  index(): Observable<Sessions[]> {
    return this.http.get<Sessions[]>(this.url).pipe(
      catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('StudySessionsService.index(): error retrieving sessions: ' + err)
      );
      })
    );
  }

  create(session: Sessions): Observable<Sessions> {
    // session.completed = false;
    // session.description = '';
    return this.http.post<Sessions>(this.url, session).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('SessionService.create(): error creating session: ' + err)
        );
      })
    );
  }

  update(session: Sessions): Observable<Sessions> {

    return this.http.put<Sessions>(`${this.url}/${session.id}`, session).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('SessionService.index(): error updating session: ' + err)
        );
      })
    );
  }

  destroy(session: Sessions): Observable<void> {
    return this.http.delete<void>(`${this.url}/${session.id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
              'SessionService.delete(): error deleting session: ' + err
              )
          );
  })
    );
  }

  show(id: number): Observable<Sessions> {
    return this.http.get<Sessions>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('SessionService.show(): error retrieving session: ' + err)
      );
      })
    );
  }

}
