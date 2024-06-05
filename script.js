const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const init = () => {
  const start = document.querySelector("body");
  start.style.backgroundColor = "lightblue";
  start.style.height = "300px";
  start.style.width = "100%";
  addOl(start);
  addElement("h1", start, `Average price: $${averagePrice()}`);
};

const addElement = (element, parent, str) => {
  const text = document.createElement(element);
  text.textContent = str;
  parent.append(text);
};

const addLi = (ol) => {
  freelancers.forEach((str) => {
    addElement(
      "li",
      ol,
      `${str.name} with a price $${str.price} and occupation ${str.occupation}`
    );
  });
};

const addOl = (parent) => {
  const orderList = document.createElement("ol");
  addLi(orderList);
  addFreelancer(orderList);
  parent.append(orderList);
};

const averagePrice = () => {
  return (
    Math.round(freelancers.reduce((acc, curr) => acc + curr.price, 0) / freelancers.length * 100)/ 100
  );
};

const addFreelancer = (parent) => {
  const freelancer = {
    name: "New freelancer",
    price: Math.floor(Math.random() * 100),
    occupation: "New",
  };
  addElement(
    "li",
    parent,
    `${freelancer.name} with a price $${freelancer.price} and occupation ${freelancer.occupation}`
  );
  freelancers.push(freelancer)
};

init();
