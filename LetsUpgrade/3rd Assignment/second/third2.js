
window.onload = () => {
    let BusData = [];
    
    
    if (localStorage.getItem("Bus") == null) {
        localStorage.setItem("Bus", JSON.stringify(BusData));
      }
}

//Showing Functionality
function display(data = undefined) 
{
    let newData = "";
    let BusNewData ;
       if(data == undefined){
            BusNewData = JSON.parse(localStorage.getItem("Bus"));
            console.log(BusNewData); 
       }
       else{
        BusNewData = data;
       } 
       if(BusNewData?.length == 0){
            let rowData = `<tr><div>Sorry No data</div></tr>`
            document.getElementById("no-data").innerHTML = rowData;
       }
       else{
        document.getElementById("no-data").innerHTML = '';
       BusNewData.forEach((item, index) => 
        {
            let rowItem =
            `<tr><td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.source}</td>
            <td>${item.destination}</td>
            <td>${item.bus_no}</td>
            <td>${item.capacity}</td>
            <td><button onclick=deleteBus(${index})>X</button></tr>`;
            newData += rowItem;
        })
    }
    document.getElementById("tdata").innerHTML = newData;
}

//Adding New Bus Data
function addBus(e){
    e.preventDefault();
    let formData={} 
    let name = document.getElementById("name").value;
    let source = document.getElementById("src").value;
    let destination = document.getElementById("dest").value;
    let bus_no = document.getElementById("num").value;
    let capacity = document.getElementById("cap").value;

    formData.name = name;
    formData.source = source;
    formData.destination = destination;
    formData.bus_no = bus_no;
    formData.capacity = capacity;

    let NewBus = JSON.parse(localStorage.getItem("Bus"));
    NewBus.push(formData)
    console.log(NewBus);
    localStorage.setItem("Bus",JSON.stringify(NewBus))
    
    display()

    document.getElementById("name").value = '';
    document.getElementById("src").value = '';
    document.getElementById("dest").value = '';
    document.getElementById("num").value = '';
    document.getElementById("cap").value = '';
}

function deleteBus(i){
    let Bus =JSON.parse(localStorage.getItem("Bus"));
    Bus.splice(i,1);
    localStorage.setItem("Bus",JSON.stringify(Bus));
    display()
}

function searchItem(){
    let Bus =JSON.parse(localStorage.getItem("Bus"));
    let searched = document.getElementById("search-box").value;
    let searchedData = Bus.filter((item, i) => {
        return (
          item.source.toLowerCase().indexOf(searched) !== -1 ||
          item.destination.toLowerCase().indexOf(searched) !== -1
        );
      });
      console.log(searchedData);
      display(searchedData);
}

   display()
