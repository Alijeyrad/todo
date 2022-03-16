var idMaker = function() {
  let x = Date.now().toString(36);
  let y = Math.random().toString(36).substr(2);
  return x + y;
}


var taskManager = function() {
  let clickedID;
  const tasks = [
    {
      id: '1',
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
            <div class="buttons">
              <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
              <button id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-regular fa-star"></i>Important</button>
              <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
            </div>
            <div id="line">
              <hr style="width:75%;">
            </div>
          </div>`
          }
    }
  ];
  var myModal = new bootstrap.Modal(document.getElementById('deleteModal'));

  var startPage = function() {
    let innerHtml = '';
    for (item of tasks) {
      if (item.status) {
        innerHtml += item.element();
      }
    }
    document.getElementsByClassName('wrapper')[0].innerHTML = innerHtml;
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })
  }

  return {
    addTask: function(event) {
      event.preventDefault();
      let text = event.path[2][0].value;
      if (text) {
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
                <div class="buttons">
                  <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                  <button id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-regular fa-star"></i>Important</button>
                  <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
                </div>
                <div id="line">
                  <hr style="width:75%;">
                </div>
              </div>`
            }
          }
        )
        startPage();
        document.getElementsByClassName('form-control')[1].value = '';
      }
    },

    startApp: function() {
      return startPage();
    },

    selectedCard: function(event) {
      clickedID = event.path[2].children[0].children[0].id;
      myModal.toggle();
    },

    deleteTask: function(event) {
      let length = tasks.length;
      for (let i = 0; i < length; i++) {
        if (tasks[i].id === clickedID) {
          tasks.splice(i, 1);
          break;
        }
      }
      startPage();
      myModal.hide();
    },
  }
}

let x = taskManager();

