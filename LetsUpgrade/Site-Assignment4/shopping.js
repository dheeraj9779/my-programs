// ------------- Dummy Array of Objects -------------

let sites = [
  {
    id: 1,
    name: "Greater Wing",
    size: "100sq",
    price: 2500000,
    image: "prop1.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 2,
    name: "Swing",
    size: "120sq",
    price: 2000000,
    image: "prop2.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 3,
    name: "Desify",
    size: "210sq",
    price: 3300000,
    image: "prop3.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 4,
    name: "Winger",
    size: "112sq",
    price: 4300000,
    image: "prop4.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 5,
    name: "Crompton",
    size: "178sq",
    price: 2570000,
    image: "prop5.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 6,
    name: "Sectional",
    size: "165sq",
    price: 2570000,
    image: "prop6.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 7,
    name: "Greater Noida",
    size: "170sq",
    price: 4500000,
    image: "prop7.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 8,
    name: "Super High",
    size: "160sq",
    price: 2800000,
    image: "prop8.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 9,
    name: "Laatty",
    size: "200sq",
    price: 3400000,
    image: "prop9.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 10,
    name: "Zapppppp",
    size: "190sq",
    price: 5400000,
    image: "prop10.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 11,
    name: "Zoom",
    size: "185sq",
    price: 4700000,
    image: "prop11.jpg",
    description: "Beautiful section with garden and pool",
  },
  {
    id: 12,
    name: "Creation Villa",
    size: "390sq",
    price: 1400000,
    image: "prop12.jpg",
    description: "Beautiful section with garden and pool",
  },
];

store = [];

// ------------- Displaying -------------
function displayProperty(propertData, who = "productWrapper") {
  let propertyString = "";

  if (who == "productWrapper") {
    propertData.forEach((site, index) => {
      let { id, name, size, price, image, description } = site;
      propertyString += `<div class="property">
        <div class="prop-img"><img src="assets/${image}" /></div>
        <h3>Name: ${name}</h3>
        <p>Size: ${size}</p>
        <p>Price: ${price}</p>
        <p>${description}</p>
        <p><button onclick="addToStore(${index})">Add to store</button></p>
    </div>`;
    });
  } else {
    propertData.forEach((site, index) => {
      let { name, size, price, image, description } = site;
      propertyString += `<div class="property">
        <div class="prop-img"><img src="assets/${image}" /></div>
        <h3>Name: ${name}</h3>
        <p>Size: ${size}</p>
        <p>Price: ${price}</p>
        <p>${description}</p>
        <p><button onclick="removeFromStore(${index})">Remove from store</button></p>
    </div>`;
    });
  }
  document.getElementById(who).innerHTML = propertyString;
}

// ------------- Searching -------------
function searchProperty(inpVal) {
  let searchedValue = sites.filter((site) => {
    let searchFilter = site.name + " " + site.description;
    return searchFilter.toUpperCase().indexOf(inpVal.toUpperCase()) != -1;
  });
  displayProperty(searchedValue);
}

let count = 0;

// ------------- Adding to the card | if item already in store show a message it already exists -------------
function addToStore(i) {
  if (store.length == 0) {
    store.push(sites[i]);
    count++;
  } else {
    let cartNotEmpty = store.filter((site) => {
      if (site.id == sites[i].id) {
        return site.id == sites[i].id;
      }
    });
    if(cartNotEmpty.length > 0 ){
            alert("Item already in Store")
    }
    else{
        store.push(sites[i]);
        count++;
    }
  }
  
  document.getElementById("cart-count").innerHTML = count;
  displayProperty(store, "store");
}

// ------------- Remove item from Store -------------
function removeFromStore(i) {
  store.splice(i, 1);
  count--;
  document.getElementById("cart-count").innerHTML = count;
  displayProperty(store, "store");
}

// ------------- Maximum Minimum Filter -------------
function range(selectValue) {
  if (selectValue == "maximum") {
    let searchedValue1 = sites.filter((site) => {
      return site.price > 4700000;
    });
    displayProperty(searchedValue1);
  } else if (selectValue == "minimum") {
    let searchedValue1 = sites.filter((site) => {
      return site.price < 2000000;
    });
    displayProperty(searchedValue1);
  } else {
    displayProperty(sites);
  }
}

displayProperty(sites);
