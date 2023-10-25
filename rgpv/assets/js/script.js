// JavaScript rotation
const boxes = document.querySelectorAll('.fixed-left-right');

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('rotateForward');
    });
});

// 

const flipboxElements = document.querySelectorAll('.stu-ser');

        flipboxElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.querySelector('.flip').style.transform = 'rotateY(180deg)';
            });

            element.addEventListener('mouseleave', () => {
                element.querySelector('.flip').style.transform = 'rotateY(0deg)';
            });
        });
// 
function toggleDiv() {
    var div = document.getElementById("myDiv");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}


//date
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();

const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
document.getElementById("toDayDate").innerText=formattedDate

