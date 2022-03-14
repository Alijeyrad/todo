class Task {
  constructor(title, date=new Date(), status=false){
    this.title = title;
    this.date = date;
    this.status = status;
  }
  statusReport() {
    return this.status? 'the task is done':'task is not done';
  }
}
