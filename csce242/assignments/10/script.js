window.onload = () => {
    let ads = ["Wow so pretty", "Our staff must have great taste", "Perhaps you should join them", "Come work with us", "We won't let you leave"];

    let imgs = [
        {
            id: "garden.jpg",
            pageSrc: "https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4",
            author: "wirestock"
        },
        {
            id: "golden.jpg",
            pageSrc: "https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4",
            author: "wirestock"
        },
        {
            id: "mountain-lake.jpg",
            pageSrc: "https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7",
            author: "vecstock"
        },
        {
            id: "small-house.jpg",
            pageSrc: "https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4",
            author: "wirestock"
        },
        {
            id: "snow.jpg",
            pageSrc: "https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4",
            author: "wirestock"
        },
    ]

    let id = setInterval(frame, 2000);

    let addIndex = 1;
    const element = document.getElementById("adText");
    function frame() {
        element.textContent = ads[addIndex % 5];
        addIndex++;
    }

    const container = document.getElementById('image-container');
    imgs.forEach(image => {
        const img = document.createElement('img');
        img.src = "./images/" + image.id;
        container.appendChild(img);
        const link = document.createElement('a');
        link.href=image.pageSrc;
        link.textContent="image by "+image.author + " on Freepik";
        container.appendChild(link);
    })

}