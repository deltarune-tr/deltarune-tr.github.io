var storage = "<h3>Deltarune-TR \"<font color='yellow'>Don't Forget-Unutma</font>\" Türkçe</h3> </br> <a class='underButton' href='assets/media/audio/dontforget_tr.mp3' download='Deltarune-TR_Dont Forget-Unutma_Türkçe.mp3'>indir</a>"
var wrong = "<h3><font color='red'>Yanlıs Sifre</font></h3>"
var password = "winofblue"

function openStorage() {
	input = document.getElementById("pswinput").value;
	if (input == password) {
		document.getElementById("form").innerHTML = "</br>";
		document.getElementById("storage").innerHTML = storage;
	} else {
		  document.getElementById("storage").innerHTML = wrong;
	  }
}