export class Sessions {

  id: number | null;
  subject: string | null;
  subSection: string | null;
  studyDuration: number | null;
  location: string | null;
  date: string | null;






  constructor(id: number | null = 0,
    subject: string | null = '',
    subSection: string | null = '',
    studyDuration: number | null = 0,
    location: string | null = '',
    date: string | null = '') {

      this.id = id;
      this.subject = subject;
      this.subSection = subSection;
      this.studyDuration = studyDuration;
      this.location = location;
      this.date = date;

    }
}
