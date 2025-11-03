console.log("loaded instructions...");
document.querySelector("#moon").addEventListener("click", stor);
function stor() {
  console.log("stor er in da house");
  document.querySelector("#maaneMedSkyer").classList.add("scale");
  document.querySelector(".info-text h2").textContent =
    "Månen vågner - pas på vampyerne!";
  document.querySelector(".placeholder").textContent =
    "Månen er vampyrernes sande allierede. Når dens lys glider over natten, vækkes de skabninger, som ikke tåler solens stråler. I mørket finder de ro, frihed og styrke langt fra dagens dødelige blik. Månen symboliserer alt det, de er skabt af: skygger, hemmeligheder og evigt liv. Den er både deres skjul og deres kald. For kun når verden sover, kan vampyrerne bevæge sig frit og mærke nattens kraft pulserende i sig.";
  document.querySelector("#efficiency").textContent =
    "Månen vækker dem. Vampyrer lever i mørket og følger månens rytme når natten falder på, vågner de til live.";
  document.querySelector("#requirement").textContent =
    "Sollys kan dræbe en vampyr, derfor er månen deres eneste lys i mørket.";
}

document.querySelector("#blod").addEventListener("click", stor2);
function stor2() {
  console.log("stor er in da house");
  document.querySelector("#mund").classList.add("scale");
  document.querySelector(".info-text h2").textContent =
    "Vampyrer lever af at drikke blod!";
  document.querySelector(".placeholder").textContent =
    "Blod er vampyrernes livseliksir, den kraft, der holder dem evigt unge og forbandet levende. Et eneste dråbe vækker deres sanser, styrker deres krop og stiller den evige tørst, der aldrig helt forsvinder. For vampyrer er blod ikke bare næring, men et bånd mellem jæger og offer, mellem liv og død. Det pulserer som en påmindelse om den pris, de betaler for udødelighed. Når mørket falder på, kalder tørsten – og intet kan dæmpe den.";
  document.querySelector("#efficiency").textContent =
    "Uden blod intet liv. Vampyrer kan ikke overleve uden at drikke frisk blod, som holder deres kroppe stærke og udødelige.";
  document.querySelector("#requirement").textContent =
    "Blod vækker sanserne. Når en vampyr smager blod, bliver deres sanser skærpet de ser, hører og bevæger sig hurtigere end noget menneske.";
}

document.querySelector("#forbehold").addEventListener("click", stor3);
function stor3() {
  console.log("stor er in da house");
  document.querySelector("#ansigt").classList.add("scale");
  document.querySelector(".info-text h2").textContent =
    "Her er hvilke forbehold du kan tag!";
  document.querySelector(".placeholder").textContent =
    "Møder du en vampyt er der flere måder du kan forsvare dig på. Jernurt er en kæmpe anbefaling, da de ikke kan tåle det. Det dræber ikke, men det giver dig et forspring. For at dræbe dem skal du bruge en dolk af træ. Dolken skal ind i vampyrens hjerte.";
  document.querySelector("#efficiency").textContent =
    "Jernurt svækker dem. Kontakt eller røg fra jernurt skærer gennem vampyrens naturlige forsvar og gør dem svækkede og sårbare.";
  document.querySelector("#requirement").textContent =
    "Trædolken er dødelig. En trædolk, stukket med præcision i hjerteområdet, kan dræbe en vampyr. Det kræver mod, viden og korrekt teknik.";
}
