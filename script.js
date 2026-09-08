const WA_NUMBER = "6281334748004"; // Ganti dengan nomor WhatsApp bisnis Anda

function sendWhatsApp(){
  const city = document.getElementById("city").value || "-";
  const service = document.getElementById("service").value || "-";
  const address = document.getElementById("address").value || "-";
  const schedule = document.getElementById("schedule").value || "-";
  const text = `Halo Anto AC, saya ingin konsultasi/service AC.%0A%0AKota: ${encodeURIComponent(city)}%0ALayanan: ${encodeURIComponent(service)}%0AAlamat: ${encodeURIComponent(address)}%0AJadwal: ${encodeURIComponent(schedule)}`;
  window.open(`https://wa.me/${6281334748004}?text=${text}`, "_blank");
}

document.querySelector(".menu-toggle").addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.toggle("mobile-open");
});

document.querySelectorAll(".nav-links a").forEach(a=>{
  a.addEventListener("click",()=>document.querySelector(".nav-links").classList.remove("mobile-open"));
});
