function calculatePlastic() {
   const bottles = document.getElementById('bottles').value;
   const bags = document.getElementById('bags').value;
   const totalPlastic = (bottles * 0.025) + (bags * 0.01); // Contoh perhitungan
   document.getElementById('result').innerText = `Jejak plastik Anda adalah ${totalPlastic} kg per tahun.`;
 }

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;
valueDisplays.forEach((valueDisplays) => {
   let startValue = 0;
   let endValue = parseInt(valueDisplays.getAttribute("data-val"));
   let duration = Math.floor(interval / endValue);
   let counter = setInterval(function (){
      startValue += 1;
      valueDisplays.textContent = startValue;
      if(startValue == endValue){
         clearInterval(counter);
      }
   }, duration)
});

// ABOUT Sejarah dan pencapain
$(".step").click( function() {
   $(this).addClass("active").prevAll().addClass("active");
   $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});


// CONTACT US ABOUT US
document.getElementById("contact-form").addEventListener("submit", function(event) {
   event.preventDefault();
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const message = document.getElementById("message").value;

   console.log("Nama: ", name);
   console.log("Email: ", email);
   console.log("Pesan: ", message);

   alert("Pesan Anda telah dikirim!");
   this.reset();
});

