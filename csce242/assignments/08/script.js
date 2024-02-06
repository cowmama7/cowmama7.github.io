window.onload = () => {
    const textInput = document.getElementById("textInput1");
    let textVal = "";
    let image = document.getElementById("imgSwap");

    const SwapImg = () => {
        console.log(textVal);
        if(textVal=="b") {
            image.src="./images/read.jpg"
        } else if(textVal=="c") {
            image.src="./images/clown.jpg";
        } else if(textVal=="p") {
            image.src="./images/birthday.jpg";
        } else if(textVal=="r") {
            image.src="./images/rain.jpg";
        } else if(textVal=="s") {
            image.src="./images/shovel.jpg";
        } else if(textVal=="w") {
            image.src="./images/work.jpg";
        } else {
            image.src="./images/original.jpg";
        }

    }

    textInput.oninput = () => {
      textVal = textInput.value.slice(-1);
      SwapImg();
    };

    const slider = document.getElementById("slider1");
    let slideVal;
    const rot = () => {
        let slideImage = document.getElementById("imgSlide");
        slideImage.src = `./images/yoga${slideVal}.jpg`;
    }
    slider.oninput = () => {
        slideVal = slider.value;
        rot();
      };



      const ex1 = document.getElementById("ex1");
      const ex2 = document.getElementById("ex2");
      let box1 = document.getElementById("box1");
      let box2 = document.getElementById("box2");
      box1.style.display = "block";
      box2.style.display = "none";
      ex1.onclick = () => {
        box2.style.display = 'none';
        box1.style.display = 'block';
      }
      ex2.onclick = () => {
        box1.style.display = 'none';
        box2.style.display = 'block';
      }

      
};