class Activity {
  constructor({ id, title, description, imgUrl }) {
      console.log(id);
      this.id = id;
      this.title = title;
      this.description = description;
      this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
      this.activities = [];
      this.id = 0;
  }

  getAllActivities() {
      return this.activities;
  }

  createActivity(act) {
      this.id++;
      const activity = new Activity({ ...act, id: this.id });
      this.activities.push(activity);
  }

  deleteActivity(id) {
      const filtered = this.activities.filter(act => act.id !== id);
      this.activities = filtered;
  }
}

const repository = new Repository();

function buildActivity(activity) {
  const { id, title, description, imgUrl } = activity;

  const h3 = document.createElement("h3");
  h3.innerText = title;

  const p = document.createElement("p");
  p.innerText = description;

  const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = title;

  const card = document.createElement("div");
  card.className = "card";
  card.id = id;
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(img);

  return card;
}

function buildActivities() {
  const container = document.getElementById("activities-container");
  container.innerHTML = "";
  const activities = repository.getAllActivities();
  const activitiesHTML = activities.map((act) => buildActivity(act));
  activitiesHTML.forEach((actHTML) => container.appendChild(actHTML));
}

const buttonSubmit = document.querySelector("#add");

function handleClick() {
  const title = document.getElementById("text");
  const description = document.getElementById("descripcion");
  const imgUrl = document.getElementById("imgurl");

  const valueTitle = title.value;
  const valueDesciption = description.value;
  const valueImgUrl = imgUrl.value;

  if (!valueTitle || !valueDesciption || !valueImgUrl) {
      alert("Debes llenar todos los campos");
      return;
  }

  const activity = {
      title: valueTitle,
      description: valueDesciption,
      imgUrl: valueImgUrl
  };

  repository.createActivity(activity);
  buildActivities();

  title.value = "";
  description.value = "";
  imgUrl.value = "";
}

const form = document.getElementById("actividades");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  handleClick();
});
