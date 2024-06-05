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

const names = [
  "Conrad Adams",
  "Caiden Bolton",
  "Tomasz Acosta",
  "Logan Castillo",
  "Arjan Gomez",
  "Ruairi Fitzgerald",
  "Jacob Kirby",
  "Frances Flynn",
  "Mina Daniels",
  "Luisa Pineda",
  "Eloise Cook",
  "Camilla Huff",
  "Francesco Dotson",
  "Aryan Fry",
  "Leah Alvarado",
  "Florence Riggs",
  "Sydney Barlow",
  "Nannie Lara",
  "Suzanne Fleming",
  "Milton Cameron",
];

const occupations = [
  "Automobile Mechanic",
  "Automotive Body Repairer",
  "Automotive Engineer",
  "Automotive Glass Installer",
  "Avionics Technician",
  "Baggage Porters and Bellhops",
  "Baker (Commercial)",
  "Bank and Branch Managers",
  "Bank Examiner",
  "Bank Teller",
  "Benefits Manager",
  "Bicycle Mechanic",
  "Billing Specialist",
  "Bindery Machine Set-Up Operators",
  "Bindery Machine Tender",
  "Biological Technician",
  "Biology Professor",
  "Biomedical Engineer",
  "Biomedical Equipment Technician",
  "Boat Builder",
  "Book Editor",
  "Border Patrol Agent",
  "Brattice Builder",
  "Bridge and Lock Tenders",
  "Broadcast News Analyst",
  "Broadcast Technician",
  "Broker's Floor Representative",
  "Brokerage Clerk",
  "Budget Accountant",
  "Budget Analyst",
];
const start = document.querySelector("body");
start.style.backgroundColor = "lightblue";
start.style.height = "300px";
start.style.width = "100%";
const average = document.createElement("h2");

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
  parent.append(orderList);
};

const averagePrice = () => {
  return (
    Math.round(
      (freelancers.reduce((acc, curr) => acc + curr.price, 0) /
        freelancers.length) *
        100
    ) / 100
  );
};

const render = () => {
  const orderList = document.querySelector("ol");
  const freelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    price: Math.floor(Math.random() * 100),
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
  };
  freelancers.push(freelancer);
  addElement(
    "li",
    orderList,
    `${freelancer.name} with a price $${freelancer.price} and occupation ${freelancer.occupation}`
  );
  const avg = document.querySelector("#average");
  average.textContent = `Average price: $${averagePrice()}`;
};
const renderAverage = () => {
}

average.textContent = `Average price: $${averagePrice()}`;

setInterval(render, 2000);
average.setAttribute("id", "average");
start.append(average);

addOl(start);
