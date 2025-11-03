console.log("loaded instructions...");
document.querySelector("#moon").addEventListener("click", stor);
function stor() {
  console.log("stor er in da house");
  document.querySelector("#maaneMedSkyer").classList.add("scale");
  document.querySelector(".info-text").textContent =
    "Månen vågner - pas på vampyerne!";
}

document.querySelector("#blod").addEventListener("click", stor2);
function stor2() {
  console.log("stor er in da house");
  document.querySelector("#mund").classList.add("scale");
  document.querySelector(".info-text").textContent =
    "Vampyrer lever af at drikke blod!";
}

document.querySelector("#forbehold").addEventListener("click", stor3);
function stor3() {
  console.log("stor er in da house");
  document.querySelector("#ansigt").classList.add("scale");
  document.querySelector(".info-text").textContent =
    "Her er hvilke forbehold du kan tag!";
}
