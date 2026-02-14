const checks = document.getElementsByClassName("check");
const email = document.getElementById("email");
const emailValue = email.value;

function checkEmail() {
  let pass = false;
  const Atquery = /@/;
  let m = emailValue.match(Atquery);
  if (m == null) {
    return new Error("Invalid email, its missing the @");
  } else {
    pass = true;
  }

  let beforeAt = /[a-zA-Z\d_]{2,}(?=@)/;
  let match = emailValue.match(beforeAt);
  if (match == null) {
    return new Error(
      "Missing one of the following: Lower case, upper case, number or underscore.",
    );
  } else {
    pass = true;
  }

  let afterAt = /(?<=@)[a-zA-Z]{2,}/;
  let matcher = emailValue.match(afterAt);
  if (matcher == null) {
    return new Error(
      "Missing one of the following: Lower case, upper case, number or underscore.",
    );
  } else {
    pass = true;
  }

  let afterDot = /(?<=\.)[a-z]{2,}/;
  let queryMatch = emailValue.match(afterDot);
  if (queryMatch == null) {
    return new Error("Invalid email.");
  } else {
    pass = true;
  }

    let special = /(?<=@)[a-zA-Z\d\w\#_*()+-]{2,}(?=\.)/;
  let specialMatch = emailValue.match(special);
  if (specialMatch == null) {
    return new Error("Missing a special character.");
  } else {
    pass = true;
  }

   let space = /[^\S]/;
  let spaceMatch = emailValue.match(space);
  if (spaceMatch != null) {
    return new Error(
      "Invalid email, emails cannot have a SPACE between in it.",
    );
  } else {
    pass = true;
  }
}

function checkPassword(){
  let upperQuery =  /[A-Z]{1,}/g;
  let lowerQuery = /[a-z]{1,}/g;
  let numQuery = /[\d]{1,}/g;
  let specialQuery = /[^a-zA-Z\d]{1,}/g;
  let lenghtQuery = /[\S]{8,}/;

  
}