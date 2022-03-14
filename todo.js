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

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

