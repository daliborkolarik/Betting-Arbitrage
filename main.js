const Kurz1 = document.getElementById("kurz1");
const Kurz2 = document.getElementById("kurz2");
const Sazka1 = document.getElementById("sazka1");
const Sazka2 = document.getElementById("sazka2");
const Penez1 = document.getElementById("penez1");
const Penez2 = document.getElementById("penez2");
const Investice = document.getElementById("investice");
const Zisk = document.getElementById("zisk");
const Navratnost1 = document.getElementById("navratnost1");
const Navratnost2 = document.getElementById("navratnost2");

const SubmitButton = document.getElementById("submit");
const ResetButton = document.getElementById("reset");
const a = 5;

SubmitButton.addEventListener("click", function () {

  if (Kurz1.value != '' && Kurz2.value != '' && (Sazka1.value != '' || Sazka2.value != '')) { //pokud jsou vyplněné oba kurzy a alespoň jedna sázka

    if (Sazka1.value == '') {
      Sazka1.value = Number(Sazka2.value * Kurz2.value / Kurz1.value).toFixed(2)
    }
    if (Sazka2.value == '') {
      Sazka2.value = Number(Sazka1.value * Kurz1.value / Kurz2.value).toFixed(2)
    }
    Penez1.value = Number(Kurz1.value * Sazka1.value).toFixed(2)
    Penez2.value = Number(Kurz2.value * Sazka2.value).toFixed(2)
    Investice.value = (Number(Sazka1.value) + Number(Sazka2.value)).toFixed(2)
    Zisk.value = Number(Penez1.value).toFixed(2)
    Navratnost1.value = Number((Zisk.value - Investice.value)).toFixed(2)
    Navratnost2.value = Number((Zisk.value) / Number(Investice.value) * 100).toFixed(2)
  }
  else {
    alert("Vyplň oba kurzy a alespoň jednu sázku")
  }

})

ResetButton.addEventListener("click", function () {
  document.getElementById("kurzysazky").reset()
})
