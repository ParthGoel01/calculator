document.addEventListener('DOMContentLoaded', function () {
    let string = "";
    let inputField = document.querySelector('.input');

    document.querySelectorAll(".button").forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML === "=") {
                try {
                    string = eval(string);
                    inputField.value = string;
                } catch (error) {
                    inputField.value = 'Error';
                }
            } else if (e.target.innerHTML === "AC") {
                string = "";
                inputField.value = "";
            } else if (e.target.innerHTML === "DEL") {
                string = string.slice(0, -1);
                inputField.value = string;
            } else {
                string = string + e.target.innerHTML;
                inputField.value = string;
            }
        });
    });
    var Mode = ["Dark Mode","Light Mode"];
    var i=1;
    var change = document.getElementById("button1");
    change.addEventListener('click', function() {
        document.body.classList.toggle("dark-theme");
        if(i==1){
            document.body.style.background="url('https://wallpapercave.com/wp/wp2757874.gif')";
        }
        else{
            document.body.style.background="url('https://coolbackgrounds.io/images/backgrounds/white/white-triangle-369b8d2d.jpg') no-repeat";
            document.body.style.backgroundSize="cover";
        }
        change.innerHTML= Mode[i];
        i=(i+1)%2;
    });
});
