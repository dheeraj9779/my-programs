//Dummy Data
let allData = [
  {
    name: "Dheeraj",
    age: "23",
    city: "chandigarh",
    salary: "35000",
  },
  {
    name: "Vijay",
    age: "20",
    city: "Kanpur",
    salary: "23000",
  },
  {
    name: "Aman",
    age: "17",
    city: "jhansi",
    salary: "15000",
  },
  {
    name: "Akshay",
    age: "31",
    city: "Jalandhar",
    salary: "30000",
  },
  {
    name: "Raman",
    age: "21",
    city: "Mumbai",
    salary: "26000",
  },
];

//Showing Functionality
function display(data) {
  let newData = "";
  data.forEach((item, index) => {
    let rowItem = `<tr><td>${index + 1}</td>
      <td>${item.name}</td>
       <td>${item.age}</td>
       <td>${item.city}</td>
       <td>${item.salary}</td>
       <td><span onclick="deleteItem(${index})">x</span></td></tr>`;
    newData += rowItem;
  });

  document.getElementById("tdata").innerHTML = newData;
}

//Searching Functionality
function searchItem() {
  let searched = document.getElementById("search-box").value;
  let searchedData = allData.filter((item, i) => {
    return (
      item.name.toLowerCase().indexOf(searched) !== -1 ||
      item.city.toLowerCase().indexOf(searched) !== -1
    );
  });
  console.log(searchedData);
  display(searchedData);
}

//Deleting Functionality
function deleteItem(i) {
  data.splice(i, 1);
  display();
}

display(allData);
