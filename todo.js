var idMaker = function() {
  let x = Date.now().toString(36);
  let y = Math.random().toString(36).substr(2);
  return x + y;
}


var taskManager = function() {
  const tasks = [
    {
      id: 1,
      title: 'Demo Task',
      date: new Date(),
      status: true,
      element: function(){
        return `<div id="task">
          <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" id="${this.id}">
            <label class="form-check-label" for="${this.id}">
              ${this.title}
            </label>
          </div>
        </div>`
          }
    }
  ];
  
  var startPage = function() {
    let innerHtml = '';
    for (item of tasks) {
      if (item.status) {
        innerHtml += item.element();
      }
    }
    document.getElementsByClassName('wrapper')[0].innerHTML = innerHtml;
  }

  return {
    addTask: function(event) {
      event.preventDefault();
      let text = event.path[2][0].value;
      let date = new Date();
      let status = true;
      let id = idMaker();
      tasks.push(
        {
          id: id,
          title: text,
          date: date,
          status: status,
          element: function(){
            return `<div id="task">
              <div class="form-check">
                <input class="form-check-input shadow-none" type="checkbox" id="${this.id}">
                <label class="form-check-label" for="${this.id}">
                  ${this.title}
                </label>
              </div>
            </div>`
          }
        }
      )
      console.log(tasks)
      startPage();
    },

    startApp: function() {
      return startPage();
    }
  }
}

let x = taskManager();
