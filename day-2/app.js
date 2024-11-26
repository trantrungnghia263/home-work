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

const icons = {
  iconDelete: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
      <path d="M10.3337 15.1693C10.5105 15.1693 10.68 15.099 10.8051 14.974C10.9301 14.849 11.0003 14.6794 11.0003 14.5026V7.83594C11.0003 7.65913 10.9301 7.48956 10.8051 7.36453C10.68 7.23951 10.5105 7.16927 10.3337 7.16927C10.1568 7.16927 9.98728 7.23951 9.86225 7.36453C9.73723 7.48956 9.66699 7.65913 9.66699 7.83594V14.5026C9.66699 14.6794 9.73723 14.849 9.86225 14.974C9.98728 15.099 10.1568 15.1693 10.3337 15.1693ZM5.66699 15.1693C5.8438 15.1693 6.01337 15.099 6.1384 14.974C6.26342 14.849 6.33366 14.6794 6.33366 14.5026V7.83594C6.33366 7.65913 6.26342 7.48956 6.1384 7.36453C6.01337 7.23951 5.8438 7.16927 5.66699 7.16927C5.49018 7.16927 5.32061 7.23951 5.19559 7.36453C5.07056 7.48956 5.00033 7.65913 5.00033 7.83594V14.5026C5.00033 14.6794 5.07056 14.849 5.19559 14.974C5.32061 15.099 5.49018 15.1693 5.66699 15.1693ZM10.667 2.16927C10.8438 2.16927 11.0134 2.09903 11.1384 1.97401C11.2634 1.84898 11.3337 1.67942 11.3337 1.5026C11.3337 1.32579 11.2634 1.15622 11.1384 1.0312C11.0134 0.906175 10.8438 0.835938 10.667 0.835938H5.33366C5.15685 0.835938 4.98728 0.906175 4.86225 1.0312C4.73723 1.15622 4.66699 1.32579 4.66699 1.5026C4.66699 1.67942 4.73723 1.84898 4.86225 1.97401C4.98728 2.09903 5.15685 2.16927 5.33366 2.16927H10.667Z" fill="#1E1E1E"/>
      <path d="M0.666667 2.83594C0.489856 2.83594 0.320287 2.90618 0.195262 3.0312C0.070238 3.15622 0 3.32579 0 3.5026C0 3.67942 0.070238 3.84898 0.195262 3.97401C0.320287 4.09903 0.489856 4.16927 0.666667 4.16927H1.33333V16.4359C1.33333 17.9426 2.56 19.1693 4.06667 19.1693H11.9333C13.44 19.1693 14.6667 17.9426 14.6667 16.4359V4.16927H15.3333C15.5101 4.16927 15.6797 4.09903 15.8047 3.97401C15.9298 3.84898 16 3.67942 16 3.5026C16 3.32579 15.9298 3.15622 15.8047 3.0312C15.6797 2.90618 15.5101 2.83594 15.3333 2.83594H2H0.666667ZM13.3333 4.16927V16.4359C13.3333 16.8072 13.1858 17.1633 12.9233 17.4259C12.6607 17.6884 12.3046 17.8359 11.9333 17.8359H4.06667C3.69536 17.8359 3.33927 17.6884 3.07672 17.4259C2.81417 17.1633 2.66667 16.8072 2.66667 16.4359V4.16927H13.3333Z" fill="#1E1E1E"/>
    </svg>
  `,
  iconUpdate: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9687 11.5733L20.324 9.21801C20.5383 9.00386 20.7083 8.74958 20.8243 8.46971C20.9403 8.18984 21 7.88986 21 7.5869C21 7.28395 20.9403 6.98397 20.8243 6.7041C20.7083 6.42422 20.5383 6.16995 20.324 5.9558L18.5448 4.17665C18.3308 3.96215 18.0765 3.79198 17.7966 3.67587C17.5167 3.55977 17.2167 3.5 16.9136 3.5C16.6106 3.5 16.3106 3.55977 16.0307 3.67587C15.7508 3.79198 15.4965 3.96215 15.2825 4.17665L12.9279 6.53101C12.9216 6.53683 12.9153 6.54278 12.9093 6.54888C12.9032 6.55497 12.8972 6.56117 12.8914 6.56747L3.64165 15.8162C3.38999 16.0679 3.239 16.4017 3.21467 16.7566L3.00328 19.934C2.98931 20.1428 3.02013 20.3521 3.09367 20.548C3.16721 20.7439 3.28178 20.9218 3.42969 21.0698C3.5776 21.2178 3.75544 21.3324 3.95128 21.4061C4.14713 21.4797 4.35645 21.5106 4.56523 21.4968L7.74283 21.2846C8.09754 21.261 8.43167 21.1096 8.68319 20.8584L17.9338 11.6081C17.9399 11.6026 17.9458 11.5969 17.9516 11.5911C17.9574 11.5852 17.9631 11.5793 17.9687 11.5733ZM17.5063 10.2558L19.434 8.32801C19.5317 8.23088 19.6092 8.1154 19.6621 7.98822C19.715 7.86103 19.7422 7.72465 19.7422 7.5869C19.7422 7.44916 19.715 7.31277 19.6621 7.18559C19.6092 7.0584 19.5317 6.94293 19.434 6.8458L17.6548 5.06581C17.5574 4.96841 17.4418 4.89115 17.3146 4.83844C17.1873 4.78573 17.051 4.7586 16.9132 4.7586C16.7755 4.7586 16.6391 4.78573 16.5119 4.83844C16.3847 4.89115 16.269 4.96841 16.1717 5.06581L14.244 6.99357L17.5063 10.2558ZM16.6163 11.1458L13.354 7.8836L4.53168 16.7062C4.49568 16.7421 4.47392 16.7898 4.47044 16.8404L4.25905 20.0179C4.25707 20.0477 4.26149 20.0776 4.272 20.1056C4.28251 20.1336 4.29888 20.159 4.32001 20.1801C4.34114 20.2012 4.36654 20.2176 4.39451 20.2281C4.42248 20.2386 4.45237 20.243 4.48218 20.2411L7.65978 20.0297C7.71046 20.0262 7.75815 20.0044 7.794 19.9684L16.6163 11.1458Z" fill="#1E1E1E"/>
  </svg>
    `,
};

function personComponent(person) {
  return `
    <tr class="table-person-tr">
      <td scope="row">${person.id}</td>
      <td>${person.name}</td>
      <td>${person.age}</td>
      <td class="icon-update">
        ${icons.iconUpdate}
      </td>
      <td class="icon-del">
        ${icons.iconDelete}
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
      <td class="icon-update">
        ${icons.iconUpdate}
      </td>
      <td class="icon-del">
        ${icons.iconDelete}
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

// Update person by id
function updatePerson(id) {
  const person = persons.find((person) => person.id === id);
  if (person) {
    const nameInput = document.querySelector(".name");
    const ageInput = document.querySelector(".age");
    nameInput.value = person.name;
    ageInput.value = person.age;

    // Change the add button to update button
    const buttonEl = document.querySelector(".btn");
    buttonEl.textContent = "Update";

    // Update event listener for the button
    buttonEl.removeEventListener("click", addPersonHandler);
    buttonEl.addEventListener("click", () => {
      const updatedName = document.querySelector(".name").value;
      const updatedAge = document.querySelector(".age").value;
      updatePersonData(id, updatedName, updatedAge);
    });
  }
}

// Update person data in the array
function updatePersonData(id, name, age) {
  const index = persons.findIndex((person) => person.id === id);
  if (index !== -1) {
    persons[index].name = name;
    persons[index].age = age;
    render(app(), appEl);
    createElement();
    updateEventListeners();
  }
}

function updateEventListeners() {
  const updateIcons = document.querySelectorAll(
    ".table-person-tr .icon-update"
  );
  const deleteIcons = document.querySelectorAll(".table-person-tr .icon-del");
  const buttonEl = document.querySelector(".btn");

  buttonEl.addEventListener("click", addPersonHandler);

  updateIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const personId = parseInt(
        this.closest("tr").querySelector("td").innerText
      );
      updatePerson(personId);
    });
  });

  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", deletePersonHandler);
  });
}

updateEventListeners();
