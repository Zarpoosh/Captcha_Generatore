const $ = document;
const captchaTextBox = $.querySelector(".captcha_box input");
const captchaInputBox = $.querySelector(".captcha_input input");
const refresh = $.querySelector(".refresh_button");
const message = $.querySelector(".message");
const submitBtn = $.querySelector(".button");

// variable to store generate captcha
let captchaText = null;

// function to generate captcha
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char
  );
  captchaText = changeString.join("    ");

  console.log(randomStringArray, changeString);
  captchaTextBox.value = captchaText;
};

const refreshBtnClick = () => {
  generateCaptcha();
  captchaInputBox.value=""
  captchaKeyUpValidation();

};

const captchaKeyUpValidation = () => {
  submitBtn.classList.toggle("disabled", !captchaInputBox.value);
  if (captchaInputBox.value==="") message.classList.remove("active")
};

// function to validate the generate captcha
const submitBtnClick=()=>{
    captchaText=captchaText.split("")
    .filter((char) => char !==" ")
    .join("")
    
    console.log(captchaText)

    message.classList.add("active")
    if (captchaInputBox.value=== captchaText) {
        message.innerHTML = "Emtered captcha is correct :))"
        message.style.color="green"
    }else{
        message.innerHTML = "Emtered captcha is incorrect :(("
        message.style.color="red"
    }

}

// add eventlistener for the refresh button, captchaInputBox, submitBtn
refresh.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidation);
submitBtn.addEventListener("click", submitBtnClick);


//generate a captcha when the page load
generateCaptcha();
