window.onload = () => {
    class train {
        constructor(id, trainName, manufacturer, topSpeed, route, notes, imgId) {
            this.id = id;
            this.trainName = trainName;
            this.manufacturer = manufacturer;
            this.topSpeed = topSpeed;
            this.route = route;
            this.notes = notes;
            this.imgId = imgId;
        }
    }

    let arr = [new train("charger", "Charger", "Siemens", "125 Mph", "Amtrak Long Range routes, and select commuter routes", "The Charger is one of the newest trains to enter service on Amtrak's lines. Manufactured by Siemens and painted in the new phase VI livery, these trains mark the beginning of the phase VI overhaul of Amtrak's rolling stock. These trains have an upgraded 125 Mph top speed, with goals to bring higher-speed rail service to existing Amtrak routes.", "charger3.jpg"),
    new train("acelaExpress", "Acela Express", "Alstom", "150 Mph", "Amtrac NEC from DC to Boston", "The Acela Express is the first high-speed rail line in the United States, entering service in 2000, connecting the DC, Baltimore, Philadelphia, New York, New Haven, and Boston, as well as select cities in between. With an operating top speed of 150 Mph, regular service every day, and unrivaled comfort, this train has become a very attractive option for business travelers on the East Coast.", "acelaExpress.jpg"),
    new train("geGenesis", "Genesis", "GE Transportation", "110 Mph", "Ran on All Amtrak routes, as well as several commuter routes, is being gradually phased out.", "The GE Genesis family of locomotives have become iconic to the Amtrak name, as the most heavily used locomotives on their system over the past 30 years. With over 400 ordered and constructed, the P42 model in this family was in use over nearly every single Amtrak route for quite some time. These locomotives are gradually being retired and replaced with Chargers.", "geGenesis.jpg"),
    new train("aveliaLiberty", "Avelia Liberty", "Alstom", "160 Mph (service)", "Amtrac NEC from DC to Boston", "The Avelia Liberty trainsets are set to replace the current Acela Express trains across the Northeast Corridor. Unfortuantely, they have faced countless delays due to recalls, and issues in their system, and currently sit in a yard in Philadelphia. These trains are expected to enter service in 2024.", "avelia-liberty.png")
    ];
    const imgClick = document.getElementsByClassName("assignment");

    for (const element of imgClick) {
        element.addEventListener("click", e => {
            document.getElementById('id01').style.display = 'block'
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == element.id) {
                    console.log("success");
                    document.getElementById("title").textContent = arr[i].trainName;
                    document.getElementById("manufacturer").textContent = arr[i].manufacturer;
                    document.getElementById("topSpeed").textContent = arr[i].topSpeed;
                    document.getElementById("route").textContent = arr[i].route;
                    document.getElementById("notes").textContent = arr[i].notes;
                    document.getElementById("popupTrainImg").src = "./images/" + arr[i].imgId;
                }
            }
        })
    }
};