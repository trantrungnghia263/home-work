const persons = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Joe",
    age: 20,
  },
  {
    id: 3,
    name: "Tom",
    age: 18,
  },
  {
    id: 4,
    name: "Jerry",
    age: 20,
  },
];

const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Premier League",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Champions League",
  },
];

function personComponent(person) {
  return `
    <tr class="table-person-tr">
      <td scope="row">${person.id}</td>
      <td>${person.name}</td>
      <td>${person.age}</td>
      <td class="icon-del">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M10.3337 15.1693C10.5105 15.1693 10.68 15.099 10.8051 14.974C10.9301 14.849 11.0003 14.6794 11.0003 14.5026V7.83594C11.0003 7.65913 10.9301 7.48956 10.8051 7.36453C10.68 7.23951 10.5105 7.16927 10.3337 7.16927C10.1568 7.16927 9.98728 7.23951 9.86225 7.36453C9.73723 7.48956 9.66699 7.65913 9.66699 7.83594V14.5026C9.66699 14.6794 9.73723 14.849 9.86225 14.974C9.98728 15.099 10.1568 15.1693 10.3337 15.1693ZM5.66699 15.1693C5.8438 15.1693 6.01337 15.099 6.1384 14.974C6.26342 14.849 6.33366 14.6794 6.33366 14.5026V7.83594C6.33366 7.65913 6.26342 7.48956 6.1384 7.36453C6.01337 7.23951 5.8438 7.16927 5.66699 7.16927C5.49018 7.16927 5.32061 7.23951 5.19559 7.36453C5.07056 7.48956 5.00033 7.65913 5.00033 7.83594V14.5026C5.00033 14.6794 5.07056 14.849 5.19559 14.974C5.32061 15.099 5.49018 15.1693 5.66699 15.1693ZM10.667 2.16927C10.8438 2.16927 11.0134 2.09903 11.1384 1.97401C11.2634 1.84898 11.3337 1.67942 11.3337 1.5026C11.3337 1.32579 11.2634 1.15622 11.1384 1.0312C11.0134 0.906175 10.8438 0.835938 10.667 0.835938H5.33366C5.15685 0.835938 4.98728 0.906175 4.86225 1.0312C4.73723 1.15622 4.66699 1.32579 4.66699 1.5026C4.66699 1.67942 4.73723 1.84898 4.86225 1.97401C4.98728 2.09903 5.15685 2.16927 5.33366 2.16927H10.667Z" fill="#1E1E1E"/>
          <path d="M0.666667 2.83594C0.489856 2.83594 0.320287 2.90618 0.195262 3.0312C0.070238 3.15622 0 3.32579 0 3.5026C0 3.67942 0.070238 3.84898 0.195262 3.97401C0.320287 4.09903 0.489856 4.16927 0.666667 4.16927H1.33333V16.4359C1.33333 17.9426 2.56 19.1693 4.06667 19.1693H11.9333C13.44 19.1693 14.6667 17.9426 14.6667 16.4359V4.16927H15.3333C15.5101 4.16927 15.6797 4.09903 15.8047 3.97401C15.9298 3.84898 16 3.67942 16 3.5026C16 3.32579 15.9298 3.15622 15.8047 3.0312C15.6797 2.90618 15.5101 2.83594 15.3333 2.83594H2H0.666667ZM13.3333 4.16927V16.4359C13.3333 16.8072 13.1858 17.1633 12.9233 17.4259C12.6607 17.6884 12.3046 17.8359 11.9333 17.8359H4.06667C3.69536 17.8359 3.33927 17.6884 3.07672 17.4259C2.81417 17.1633 2.66667 16.8072 2.66667 16.4359V4.16927H13.3333Z" fill="#1E1E1E"/>
        </svg>
      </td>
    </tr>
  `;
}

function postComponent(post) {
  return `
    <tr class="table-post-tr">
      <td scope="row">${post.id}</td>
      <td>${post.title}</td>
      <td>${post.content}</td>
      <td class="icon-del">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M10.3337 15.1693C10.5105 15.1693 10.68 15.099 10.8051 14.974C10.9301 14.849 11.0003 14.6794 11.0003 14.5026V7.83594C11.0003 7.65913 10.9301 7.48956 10.8051 7.36453C10.68 7.23951 10.5105 7.16927 10.3337 7.16927C10.1568 7.16927 9.98728 7.23951 9.86225 7.36453C9.73723 7.48956 9.66699 7.65913 9.66699 7.83594V14.5026C9.66699 14.6794 9.73723 14.849 9.86225 14.974C9.98728 15.099 10.1568 15.1693 10.3337 15.1693ZM5.66699 15.1693C5.8438 15.1693 6.01337 15.099 6.1384 14.974C6.26342 14.849 6.33366 14.6794 6.33366 14.5026V7.83594C6.33366 7.65913 6.26342 7.48956 6.1384 7.36453C6.01337 7.23951 5.8438 7.16927 5.66699 7.16927C5.49018 7.16927 5.32061 7.23951 5.19559 7.36453C5.07056 7.48956 5.00033 7.65913 5.00033 7.83594V14.5026C5.00033 14.6794 5.07056 14.849 5.19559 14.974C5.32061 15.099 5.49018 15.1693 5.66699 15.1693ZM10.667 2.16927C10.8438 2.16927 11.0134 2.09903 11.1384 1.97401C11.2634 1.84898 11.3337 1.67942 11.3337 1.5026C11.3337 1.32579 11.2634 1.15622 11.1384 1.0312C11.0134 0.906175 10.8438 0.835938 10.667 0.835938H5.33366C5.15685 0.835938 4.98728 0.906175 4.86225 1.0312C4.73723 1.15622 4.66699 1.32579 4.66699 1.5026C4.66699 1.67942 4.73723 1.84898 4.86225 1.97401C4.98728 2.09903 5.15685 2.16927 5.33366 2.16927H10.667Z" fill="#1E1E1E"/>
          <path d="M0.666667 2.83594C0.489856 2.83594 0.320287 2.90618 0.195262 3.0312C0.070238 3.15622 0 3.32579 0 3.5026C0 3.67942 0.070238 3.84898 0.195262 3.97401C0.320287 4.09903 0.489856 4.16927 0.666667 4.16927H1.33333V16.4359C1.33333 17.9426 2.56 19.1693 4.06667 19.1693H11.9333C13.44 19.1693 14.6667 17.9426 14.6667 16.4359V4.16927H15.3333C15.5101 4.16927 15.6797 4.09903 15.8047 3.97401C15.9298 3.84898 16 3.67942 16 3.5026C16 3.32579 15.9298 3.15622 15.8047 3.0312C15.6797 2.90618 15.5101 2.83594 15.3333 2.83594H2H0.666667ZM13.3333 4.16927V16.4359C13.3333 16.8072 13.1858 17.1633 12.9233 17.4259C12.6607 17.6884 12.3046 17.8359 11.9333 17.8359H4.06667C3.69536 17.8359 3.33927 17.6884 3.07672 17.4259C2.81417 17.1633 2.66667 16.8072 2.66667 16.4359V4.16927H13.3333Z" fill="#1E1E1E"/>
        </svg>
      </td>
    </tr>
  `;
}

function tableComponent(data, component) {
  return `
    ${data.map(component).join("")}
  `;
}

function app() {
  return `
    <div class="container">
      <table class="table table-striped">
        <tr>
          <thead>
            <tr>
              <th scope="col">Person</th>
            </tr>
          </thead>
          <tbody>
            ${tableComponent(persons, personComponent)}
          </tbody>
        </tr>
        <tr>
          <thead>
            <tr>
              <th scope="col">Post</th>
            </tr>
          </thead>    
          <tbody>
            ${tableComponent(posts, postComponent)}
          </tbody>
        </tr>
      </table>
    </div>
  `;
}

function render(html, root, debug) {
  if (debug) {
    root.innerText = html;
  } else {
    root.innerHTML = html;
  }
}

const appEl = document.querySelector("#app");
render(app(), appEl);

function createElement() {
  const containerEl = document.querySelector(".container");
  //createElement
  const control = document.createElement("div");
  const buttonEl = document.createElement("button");
  const inputName = document.createElement("input");
  const inputAge = document.createElement("input");
  //button
  buttonEl.className = "btn btn-primary";
  buttonEl.type = "button";
  buttonEl.textContent = "Add new";
  //input
  inputName.className = "form-control name";
  inputName.type = "text";
  inputName.placeholder = "Name";

  inputAge.className = "form-control age";
  inputAge.type = "text";
  inputAge.placeholder = "Age";

  control.className = "container__control";
  control.appendChild(inputName);
  control.appendChild(inputAge);
  control.appendChild(buttonEl);

  containerEl.appendChild(control);
}
createElement();

//add item into persons
function addPerson(name, age) {
  const newPerson = {
    id: persons.length + 1,
    name: name,
    age: age,
  };
  persons.push(newPerson);
  render(app(), appEl);
  createElement();
  updateEventListeners();
}

function addPersonHandler() {
  const nameInput = document.querySelector(".name").value;
  const ageInput = document.querySelector(".age").value;
  if (nameInput && ageInput) {
    addPerson(nameInput, ageInput);
  } else {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
  //clear input
  // nameInput.value = "";
  // ageInput.value = "";
}

//delete persons by id
function deletePerson(id) {
  const index = persons.findIndex((person) => person.id === id);
  if (index !== -1) {
    persons.splice(index, 1);
    render(app(), appEl);
    createElement();
    updateEventListeners();
  }
}

function deletePersonHandler() {
  const personId = parseInt(this.closest("tr").querySelector("td").innerText);
  deletePerson(personId);
  console.log(`Xoá person có id là : ${personId}`);
}

function updateEventListeners() {
  const deleteIcons = document.querySelectorAll(".table-person-tr .icon-del");
  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", deletePersonHandler);
  });

  const buttonEl = document.querySelector(".btn");
  buttonEl.addEventListener("click", addPersonHandler);
}

updateEventListeners();
