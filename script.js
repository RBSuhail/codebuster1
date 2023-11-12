const form = document.querySelector("form");
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}



const wrapper = document.querySelector(".wrapper");

let mouseX, mouseY;

wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    mouseX = e.clientX - rect.left; // Mouse X position relative to the element
    mouseY = e.clientY - rect.top; // Mouse Y position relative to the element

    updateRotation();
});

function updateRotation() {
    const centerX = wrapper.clientWidth / 2;
    const centerY = wrapper.clientHeight / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const angleX = (deltaY / centerY) * 10; // Adjust the rotation angle based on Y position
    const angleY = -(deltaX / centerX) * 10; // Adjust the rotation angle based on X position

    wrapper.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}
