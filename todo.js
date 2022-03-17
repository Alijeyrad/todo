var taskManager = function() {
  let clickedID;
  let date = new Date();
  let dateString = `Created on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
  var myModal = new bootstrap.Modal(document.getElementById('deleteModal'));
  const tasks = [
    {
      id: '1',
      title: 'Demo Task',
      date: dateString,
      important: false,
      status: true,
      element: function(){
        return `<div id="task">
          <div class="form-check">
            <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}">
            <label class="form-check-label" for="${this.id}">
              ${this.title}
            </label>
          </div>
            <div class="buttons">
              <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
              <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-regular fa-star"></i>Important</button>
              <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
            </div>
            <div id="line">
              <hr style="width:75%;">
            </div>
          </div>`
      },
      elementDone: function() {
        let doneAndNotImp = `<div id="task">
        <div class="form-check">
          <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
          <label class="form-check-label" for="${this.id}">
            ${this.title}
          </label>
        </div>
        <div class="buttons">
          <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
          <button disabled onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-regular fa-star"></i>Important</button>
          <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
        </div>
        <div id="line">
          <hr style="width:75%;">
        </div>
      </div>`;
        let doneAndImp = `<div id="task">
        <div class="form-check">
          <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
          <label class="form-check-label" for="${this.id}">
            ${this.title}
          </label>
        </div>
        <div class="buttons">
          <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
          <button disabled onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
          <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
        </div>
        <div id="line">
          <hr style="width:75%;">
        </div>
      </div>`
      if (item.important) {
        return doneAndImp;
      } else if (item.important == false) {
        return doneAndNotImp;
      }
      },
      elementImportant: function() {
        let undone = `<div id="task" style="background-color: #fff3e6;border-radius: 6px;padding-left: 5px;margin-top: 5px;">
          <div class="form-check">
            <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}">
            <label class="form-check-label" for="${this.id}">
              ${this.title}
            </label>
          </div>
            <div class="buttons">
              <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
              <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
              <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
            </div>
            <div id="line">
              <hr style="width:75%;">
            </div>
          </div>`;
        let done = `<div id="task">
        <div class="form-check">
          <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
          <label class="form-check-label" for="${this.id}">
            ${this.title}
          </label>
        </div>
          <div class="buttons">
            <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
            <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
            <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
          </div>
          <div id="line">
            <hr style="width:75%;">
          </div>
        </div>`;
        if (this.status == true) {
          return undone;
        } else if (this.status == false) {
          return done;
        }
      }
    }
  ];

  var startPage = function() {
    let undoneElement = '';
    let importantElement = '';
    let doneElement = '<div id="line2"><hr style="width:100%;opacity:0.8;height:2px;border-radius:2px">\
    <p id="completed">Completed <i class="fa-solid fa-check-double"></i></p><hr style="width:100%;opacity:0.8;height:2px;border-radius:2px"></div>';
    let undoneTasks = [];
    let doneTasks = [];
    let importantTasks = [];
    // divide the tasks into done and undone > status:true means undone
    for (item of tasks){
      if (item.status == true){
        undoneTasks.push(item);
      } else if (item.status == false){
        doneTasks.push(item);
      }
    }
    // check for important tasks
    for (item of tasks) {
      if (item.important && item.status == true) {
        importantTasks.push(item);
      }
    }
    
    // check if there are any tasks, if not show message
    if (undoneTasks.length == 0) {
      undoneElement = '<br><div style="display:flex;justify-content:center;width:100%;"><h3>Add Tasks to see them here.</h3></div>';
      document.getElementsByClassName('wrapper')[0].innerHTML = undoneElement;
    }
    // create important tasks element
    for (item of importantTasks) {
        importantElement += item.elementImportant();
    }
    // create page elements
    for (item of tasks) {
      if (item.status && item.important == false) {
        undoneElement += item.element();
      } else if (item.status == false) {
        doneElement += item.elementDone();
      }
    }
    // update the page
    if (doneTasks.length == 0 && importantTasks.length != 0) {
      document.getElementsByClassName('wrapper')[0].innerHTML = importantElement + undoneElement;
    } else if (doneTasks.length != 0 && importantTasks.length != 0) {
      document.getElementsByClassName('wrapper')[0].innerHTML = importantElement + undoneElement + doneElement;
    } else if (doneTasks.length == 0 && importantTasks.length == 0) {
      document.getElementsByClassName('wrapper')[0].innerHTML = undoneElement;
    } else if (doneTasks.length != 0 && importantTasks.length == 0) {
      document.getElementsByClassName('wrapper')[0].innerHTML = undoneElement + doneElement;
    }
    // for the popovers by Bootstrap
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
        let dateString = `Created on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
        let id = idMaker();
        tasks.push(
          {
            id: id,
            title: text,
            date: dateString,
            status: true,
            important: false,
            element: function(){
              return `<div id="task">
                <div class="form-check">
                  <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}">
                  <label class="form-check-label" for="${this.id}">
                    ${this.title}
                  </label>
                </div>
                <div class="buttons">
                  <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                  <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-regular fa-star"></i>Important</button>
                  <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
                </div>
                <div id="line">
                  <hr style="width:75%;">
                </div>
              </div>`
            },
            elementDone: function() {
              let doneAndNotImp = `<div id="task">
              <div class="form-check">
                <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
                <label class="form-check-label" for="${this.id}">
                  ${this.title}
                </label>
              </div>
              <div class="buttons">
                <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                <button disabled onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-regular fa-star"></i>Important</button>
                <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
              </div>
              <div id="line">
                <hr style="width:75%;">
              </div>
            </div>`;
              let doneAndImp = `<div id="task">
              <div class="form-check">
                <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
                <label class="form-check-label" for="${this.id}">
                  ${this.title}
                </label>
              </div>
              <div class="buttons">
                <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                <button disabled onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
                <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
              </div>
              <div id="line">
                <hr style="width:75%;">
              </div>
            </div>`
            if (item.important) {
              return doneAndImp;
            } else if (item.important == false) {
              return doneAndNotImp;
            }
            },
            elementImportant: function() {
              let undone = `<div id="task" style="background-color: #fff3e6;border-radius: 6px;padding-left: 5px;margin-top: 5px;">
                <div class="form-check">
                  <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}">
                  <label class="form-check-label" for="${this.id}">
                    ${this.title}
                  </label>
                </div>
                  <div class="buttons">
                    <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                    <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
                    <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
                  </div>
                  <div id="line">
                    <hr style="width:75%;">
                  </div>
                </div>`;
              let done = `<div id="task">
              <div class="form-check">
                <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
                <label class="form-check-label" for="${this.id}">
                  ${this.title}
                </label>
              </div>
                <div class="buttons">
                  <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                  <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
                  <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
                </div>
                <div id="line">
                  <hr style="width:75%;">
                </div>
              </div>`;
              if (this.status == true) {
                return undone;
              } else if (this.status == false) {
                return done;
              }
            }
          }
        )
        localStorage.setItem("theArray", JSON.stringify(tasks));
        startPage();
        document.getElementsByClassName('form-control')[1].value = '';
      }
    },

    startApp: function() {
      let a = JSON.parse(localStorage.getItem("theArray"));
      if (a) {
        tasks.splice(0, tasks.length);
        for (item of a) {
          tasks.push(item);
        }
        for (item of tasks) {
          item.element = function(){
            return `<div id="task">
              <div class="form-check">
                <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}">
                <label class="form-check-label" for="${this.id}">
                  ${this.title}
                </label>
              </div>
                <div class="buttons">
                  <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                  <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-regular fa-star"></i>Important</button>
                  <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
                </div>
                <div id="line">
                  <hr style="width:75%;">
                </div>
              </div>`
          };
          item.elementDone = function() {
            let doneAndNotImp = `<div id="task">
            <div class="form-check">
              <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
              <label class="form-check-label" for="${this.id}">
                ${this.title}
              </label>
            </div>
            <div class="buttons">
              <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
              <button disabled onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-regular fa-star"></i>Important</button>
              <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
            </div>
            <div id="line">
              <hr style="width:75%;">
            </div>
          </div>`;
            let doneAndImp = `<div id="task">
            <div class="form-check">
              <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
              <label class="form-check-label" for="${this.id}">
                ${this.title}
              </label>
            </div>
            <div class="buttons">
              <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
              <button disabled onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
              <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
            </div>
            <div id="line">
              <hr style="width:75%;">
            </div>
          </div>`
          if (item.important) {
            return doneAndImp;
          } else if (item.important == false) {
            return doneAndNotImp;
          }
          };
          item.elementImportant = function() {
            let undone = `<div id="task" style="background-color: #fff3e6;border-radius: 6px;padding-left: 5px;margin-top: 5px;">
              <div class="form-check">
                <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}">
                <label class="form-check-label" for="${this.id}">
                  ${this.title}
                </label>
              </div>
                <div class="buttons">
                  <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                  <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
                  <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
                </div>
                <div id="line">
                  <hr style="width:75%;">
                </div>
              </div>`;
            let done = `<div id="task">
            <div class="form-check">
              <input onclick="x.taskDone(event)" class="form-check-input shadow-none" type="checkbox" id="${this.id}" checked>
              <label class="form-check-label" for="${this.id}">
                ${this.title}
              </label>
            </div>
              <div class="buttons">
                <button onclick="x.selectedCard(event)" id="btn" type="button" class="btn btn-outline-danger btn-sm shadow-none">Delete</button>
                <button onclick="x.makeImportant(event)" name="${this.id}" id="btn" type="button" class="btn btn-outline-warning btn-sm shadow-none"><i style="padding-right:3px" class="fa-solid fa-star"></i>Important</button>
                <button id="btn" type="button" class="btn btn-outline-info btn-sm shadow-none" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="${this.date}">Info</button>
              </div>
              <div id="line">
                <hr style="width:75%;">
              </div>
            </div>`;
            if (this.status == true) {
              return undone;
            } else if (this.status == false) {
              return done;
            }
          };
        }
      }
      return startPage();
    },

    selectedCard: function(event) {
      clickedID = event.path[2].children[0].children[0].id;
      myModal.toggle();
    },

    deleteTask: function() {
      let length = tasks.length;
      for (let i = 0; i < length; i++) {
        if (tasks[i].id === clickedID) {
          tasks.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("theArray", JSON.stringify(tasks));
      startPage();
      myModal.hide();
    },

    taskDone: function(event) {
      let ticID = event.path[0].id;
      for (item of tasks) {
        if (item.id == ticID) {
          if (item.status) {
            item.status = false;
            break;
          } else if (item.status == false) {
            item.status = true;
            break;
          }
        }
      }
      localStorage.setItem("theArray", JSON.stringify(tasks));
      startPage();
    },

    makeImportant: function(event) {
      let btnID = event.path[0].name;
      for (item of tasks) {
        if (item.id == btnID) {
          if (item.important == false) {
            item.important = true;
            break;
          } else if (item.important == true) {
            item.important = false;
            break;
          }
        }
      }
      localStorage.setItem("theArray", JSON.stringify(tasks));
      startPage();
    },
    
    clearAll: function() {
      tasks.splice(0, tasks.length);
      localStorage.setItem("theArray", JSON.stringify(tasks));
      startPage();
    },

    clearCompleted: function() {
      const a = [];
      for (item of tasks) {
        if (item.status == true) {
          a.push(item);
        }
      }
      tasks.splice(0, tasks.length);
      for (task of a) {
        tasks.push(task);
      }
      localStorage.setItem("theArray", JSON.stringify(tasks));
      startPage();
    },

    markAllCompleted: function() {
      for (item of tasks) {
        item.status = false;
      }
      localStorage.setItem("theArray", JSON.stringify(tasks));
      startPage();
    },

    tasks: function() {
      return tasks;
    }
  }
}

var idMaker = function() {
  let x = Date.now().toString(36);
  let y = Math.random().toString(36).substr(2);
  return x + y;
}

let x = taskManager();