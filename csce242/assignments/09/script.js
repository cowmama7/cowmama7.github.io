window.onload = () => {
    let moving = false;
    let firstClick = true;
    const ex1 = document.getElementById("ex1");
    const ex2 = document.getElementById("ex2");
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    const imgClick = document.getElementsByClassName("imgSlide");
    const startButton = document.getElementById("startButton");
    let nameChanger = document.getElementById("danceName");

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




    startButton.onclick = () => {
        const element = document.getElementById("ballImg");
        moving = !(moving);
        var x = 0;
        let id;
        var addAmount = 0;
        if (firstClick) {
            id = setInterval(frame, 10);
            firstClick = false;
        }
        if (moving) {
            startButton.textContent = "stop";
            addAmount = 1;

        } else {
            addAmount = 0;
            startButton.textContent = "start";
            
        }

        function frame() {
            if (x == 200 || x == -1) {
                addAmount *= -1;
            }
            if(moving) {
                x += addAmount;
            }
            
            element.style.paddingTop = x + 'px';
            element.style.paddingBottom = 200 - x + 'px';
        }

    }


    for (const element of imgClick) {
        element.addEventListener("click", e => {
            nameChanger.textContent = e.target.id + e.target.innerHTML;
        })
    }




};