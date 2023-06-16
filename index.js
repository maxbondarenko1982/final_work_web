document.querySelector(".header__btn").onclick = function () {
  const userPass = document.querySelector("#password").value;
  const userPassConfirm = document.querySelector("#confirmpassword").value;

  if (userPass == "") {
    document.getElementById("password").style = "border: 1px solid red";
    document.getElementById("confirmpassword").style = "border: 1px solid red";
  } else if (userPass != userPassConfirm) {
    document.getElementById("password").style = "border: 1px solid red";
    document.getElementById("confirmpassword").style = "border: 1px solid red";
    return false;
  } else if (userPass == userPassConfirm) {
    document.getElementById("password").style = "border: 1px solid green";
    document.getElementById("confirmpassword").style = "border: 1px solid green";
  }
  return true;
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const slider = document.querySelector('.price__cards');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offset;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offset;
  const scrollSpeed = 3;
  const walk = (x - startX) * scrollSpeed;
  slider.scrollLeft = scrollLeft - walk;
});
