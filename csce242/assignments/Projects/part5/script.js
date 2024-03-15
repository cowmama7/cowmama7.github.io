
function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const getTrains = async () => {
  console.log("cow");
  try {
    return fetch("trainData.json").then((response) => response.json());
  } catch (error) {
      console.log(error);
  }
}
const showTrains = async () => {
  let json = await getTrains();
  console.log(json);
  convert(json);
};

function convert(jsonData) {
  // Get the container element where the table will be inserted
  let container = document.getElementById("container");
  
  // Create the table element
  let table = document.createElement("table");
  
  // Get the keys (column names) of the first object in the JSON data
  let cols = Object.keys(jsonData[0]);
  
  // Create the header element
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  
  // Loop through the column names and create header cells
  cols.forEach((item) => {
     let th = document.createElement("th");
     th.innerText = item; // Set the column name as the text of the header cell
     tr.appendChild(th); // Append the header cell to the header row
  });
  thead.appendChild(tr); // Append the header row to the header
  table.append(tr) // Append the header to the table
  
  // Loop through the JSON data and create table rows
  jsonData.forEach((item) => {
     let tr = document.createElement("tr");
     
     // Get the values of the current object in the JSON data
     let vals = Object.values(item);
     
     // Loop through the values and create table cells
     for(let i = 0; i < vals.length;i++) {
        let td = document.createElement("td");
        if(i==3) {
          let img = document.createElement('img');
          img.src="./images/"+vals[i];
          img.width=200;
          td.appendChild(img);
        } else if(i==6) {
          td.className="wraplessRow";
          for(let j=0; j<vals[i].length;j++) {
            let listItem = document.createElement('li');
            listItem.textContent=vals[i][j];
            td.appendChild(listItem);
          }
        } else {
        td.innerText = vals[i]; // Set the value as the text of the table cell
        }
        tr.appendChild(td); // Append the table cell to the table row
     }
     table.appendChild(tr); // Append the table row to the table
  });
  container.appendChild(table) // Append the table to the container element
}


window.onload = () => showTrains();