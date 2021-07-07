



const male = document.getElementById('male');
const female = document.getElementById('female');
const other = document.getElementById('other');





male.addEventListener("click", function () {
    male.classList.add('active');
    female.classList.remove('active');
    other.classList.remove('active');
});

female.addEventListener("click", function () {
    female.classList.add('active');
    male.classList.remove('active');
    other.classList.remove('active');
});

other.addEventListener("click", function () {
    other.classList.add('active');
    male.classList.remove('active');
    female.classList.remove('active');
});