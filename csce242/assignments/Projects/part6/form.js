const submitTrain = (e) => {
e.preventDefault();
console.log("submit");
alert("Item Submitted Successfully, We will review it shortly.");
const form=document.getElementById("surveyForm");
const userName=form.elements["userName"].value;
const userEmail=form.elements["userEmail"].value;
const trainName=form.elements["trainName"].value;
const trainCompany=form.elements["trainCompany"].value;
const trainBuildDate=form.elements["trainBuildDate"].value;
const placesList = form.elements["placesText"].value.split(",");
const imageFile=form.elements["imageFile"].value;
const notesText=form.elements["notesText"].value;
console.log("Name: "+userName);
console.log("Email: "+userEmail);
console.log("Train Name: "+trainName);
console.log("Train Company: "+trainCompany);
console.log("Build Date: "+trainBuildDate);
console.log("Locations Served: \n"+placesList);
console.log("Image Address:"+imageFile);
console.log("Notes: "+notesText);
let par = document.createElement("p");
par.textContent += "Name: "+userName + "\nEmail: "+userEmail+"\nTrain Name: "+trainName+"\nTrain Company: "+trainCompany+"\nBuild Date: "+trainBuildDate+"\nLocations Served: \n"+placesList+"\nImage Address:"+imageFile+"\nNotes: "+notesText;
let appendDiv=document.getElementById("appendInfo");
appendDiv.appendChild(par);
}



document.getElementById("surveyForm").onsubmit = submitTrain;