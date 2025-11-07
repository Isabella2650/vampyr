//*Form Input start*//
const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();

  form.querySelector("user-invalid").focus();
  form.querySelector("error-message").style.display = "block";
}

form.addEventListener("invalid", cancelPopup, true);

//*Form Input slut*//
//*Form output start*//

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const areaOutput = document.querySelector("#area_output");
const blodOutput = document.querySelector("#blod_output");
const tandOutput = document.querySelector("#tand_output");
const bidOutput = document.querySelector("#bid_output");
const jernurtOutput = document.querySelector("#jernurt_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const firstName = formData.get("first_name");

  const lastName = formData.get("last_name");

  const email = formData.get("email");

  const area = formData.get("area");

  const blod = formData.get("blod");

  const tand = formData.get("tand");

  const bid = formData.get("bid");

  const jernurt = formData.get("jernurt");

  //   let tegn = formData.get("blod");
  //   tegn +="," + formData.get("blod");

  //   if(let tegn = formData.get("blod");
  //   {
  //   tegn +="," + formData.get("blod");)

  //   }

  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  areaOutput.textContent = area;
  blodOutput.textContent = blod;
  tandOutput.textContent = tand;
  bidOutput.textContent = bid;
  jernurtOutput.textContent = jernurt;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

//*Form output slut*//
