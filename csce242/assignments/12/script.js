const getHouses = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const showHouses = async () => {
    let houses = await getHouses();
    console.log(houses);
    let a = document.getElementsByClassName("houseName")
    for (let i = 0; i < a.length; i++) a[i].textContent = houses[i].name;
    let b = document.getElementsByClassName("mainImg")
    for (let i = 0; i < b.length; i++) b[i].src = "https://portiaportia.github.io/json/images/house-plans/" + houses[i].main_image;
    let c = document.getElementsByClassName("sizeTxt")
    for (let i = 0; i < c.length; i++) c[i].textContent = houses[i].size;
    let d = document.getElementsByClassName("bedroomsTxt")
    for (let i = 0; i < d.length; i++) d[i].textContent = houses[i].bedrooms;
    let g = document.getElementsByClassName("bathroomsTxt");
    for (let i = 0; i < g.length; i++) g[i].textContent = houses[i].bathrooms;
    let e = document.getElementsByClassName("featuresTxt");
    for (let i = 0; i < e.length; i++) {
        for (let j = 0; j < houses[i].features.length; j++) {
            e[i].textContent += " *" + houses[i].features[j];
        }
    }

    let k = [];
    for (let i = 0; i < houses.length; i++)
        for (let j = 0; j < houses[i].floor_plans.length; j++)
            k.push(houses[i].floor_plans[j]);
    console.log(k);

    let h = document.getElementsByClassName("floorPlanName")
    for (let i = 0; i < h.length; i++) {
        h[i].textContent = k[i].name;
    }
    let l = document.getElementsByClassName("floorPlanImg")
    for (let i = 0; i < l.length; i++) {
        l[i].src = "https://portiaportia.github.io/json/images/house-plans/" + k[i].image;
    }


    document.getElementsByClassName("floorPlanImg01").src = "https://portiaportia.github.io/json/images/house-plans/" + houses[0].floor_plans[0].image;
    document.getElementsByClassName("floorPlanName02").textContent = houses[0].floor_plans[1].name;
    document.getElementsByClassName("floorPlanImg02").src = "https://portiaportia.github.io/json/images/house-plans/" + houses[0].floor_plans[1].image;

};

window.onload = () => showHouses();

