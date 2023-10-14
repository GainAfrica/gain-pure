const form = document.querySelector(".form");
const inputs = form.querySelectorAll("input");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const dob = document.getElementById("dob");
const sex = document.getElementById("sex");
const school = document.getElementById("school");
const educationLevel = document.getElementById("educationLevel");
const submitBtn = document.querySelector(".submit-btn");

const errorArr = [];

const phoneInput = window.intlTelInput(phoneNumber, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validateInput(input.value, input);
  });
});

sex.addEventListener("change", (e) => {
  validateInput(sex.value, sex);
});
educationLevel.addEventListener("change", (e) => {
  validateInput(educationLevel.value, educationLevel);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const sexValue = sex.value;
  const dobValue = dob.value;
  const schoolValue = school.value;
  const educationLevelValue = educationLevel.value;

  if (phoneInput.isValidNumber()) {
  }
  inputs.forEach((input) => {
    validateInput(input.value, input);
  });
  validateInput(sexValue, sex);
  validateInput(educationLevelValue, educationLevel);

  if (errorArr.length === 0) {
    const data = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      phoneNumber: phoneInput.getNumber(),
      sex: sexValue,
      dob: dobValue,
      school: schoolValue,
      educationLevel: educationLevelValue,
    };
    console.log(data);
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
    const url = "http://localhost:5000/api/v1/members";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      })
      .catch((err) => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
        console.log(err);
      });
  }
});

function validateInput(inputValue, input) {
  if (inputValue === "") {
    setError(input, "Field cannot be blank");
    !errorArr.includes(input.id) && errorArr.push(input.id);
  } else {
    setSuccess(input);
    const index = errorArr.indexOf(input.id);
    if (index > -1) errorArr.splice(index, 1);
  }

  if (input.id === "sex" || input.id === "educationLevel") {
    if (inputValue === "") {
      setError(input, "Please select an option");
      !errorArr.includes(input.id) && errorArr.push(input.id);
    } else {
      setSuccess(input);
      const index = errorArr.indexOf(input.id);
      if (index > -1) errorArr.splice(index, 1);
    }
  }

  if (input.id === "phoneNumber") {
    if (!phoneInput.isValidNumber()) {
      setError(input, "Invalid phone number");
      !errorArr.includes(input.id) && errorArr.push(input.id);
    } else {
      setSuccess(input);
      const index = errorArr.indexOf(input.id);
      if (index > -1) errorArr.splice(index, 1);
    }
  }

  if (input.id === "email") {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)) {
      setError(input, "Invalid email address");
      !errorArr.includes(input.id) && errorArr.push(input.id);
    } else {
      setSuccess(input);
      const index = errorArr.indexOf(input.id);
      if (index > -1) errorArr.splice(index, 1);
    }
  }
}

function setError(input, errorMessage) {
  let spanEl = input.nextElementSibling;
  if (input.id === "phoneNumber") {
    spanEl = input.parentElement.nextElementSibling;
  }
  if (spanEl.style.display !== "block" || spanEl.textContent !== errorMessage) {
    spanEl.style.display = "block";
    spanEl.textContent = errorMessage;
  }
}

function setSuccess(input) {
  let spanEl = input.nextElementSibling;
  if (input.id === "phoneNumber") {
    spanEl = input.parentElement.nextElementSibling;
  }
  if (spanEl.style.display !== "none") {
    spanEl.style.display = "none";
  }
}
