window.onload = () => {
    const slider = document.getElementById("slider1");
    let slideVal;
    var swapVal = false;
    const rot = () => {
        let imgRot = document.getElementById("dragRotate");
        imgRot.style.transform = "rotate(" + slideVal + "deg)";
    }

    const SwapImg = () => {
        if(swapVal)
            imgSwap.src="./images/placeHolder1.png"
        else {
            imgSwap.src="./images/200x200.png";
        }
        swapVal = !(swapVal)

    }

    slider.oninput = () => {
      rot();
      slideVal = slider.value;
    };

    const imgSwap = document.getElementById("clickChange");
    imgSwap.onclick = () => {
        SwapImg();
    }
    
    document.getElementById("box3").onclick = () => {
        let image = document.querySelector('img[alt="star"]');
        let cln = image.cloneNode(true);
        document.getElementById('image-section').appendChild(cln);
    };
      

};
