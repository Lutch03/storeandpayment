
function startAudio() {
  document.getElementById("bgmusic").play();
}

async function kirimData() {
  const produk = document.getElementById("produk").value;
  const nomor = document.getElementById("nomor").value;
  if (!nomor) {
    alert("Nomor wajib diisi!");
    return;
  }
  document.getElementById("qrisSection").classList.remove("hidden");
  const message = `🔔 ORDER BARU\n📦 Produk: ${produk}\n📱 Nomor: ${nomor}\n💰 Status: Menunggu Pembayaran`;
  const token = "7774296908:AAFpmj_UWfvG2bmyyYAKZ69f8vGGNXjwYo8";
  const chatId = "7314763128";
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });
  document.getElementById("notifTransfer").play();
  alert("✅ Data terkirim! Silakan lanjutkan pembayaran.");
}

function openTestimoniModal() {
  document.getElementById("testimoniModal").classList.remove("hidden");
  document.getElementById("testimoniModal").classList.add("flex");
  document.getElementById("testimoniImg").classList.add("hidden");
}

function showImage(num) {
  const imgLinks = {
    1: "https://files.catbox.moe/cqzwh3.jpg",
    2: "https://files.catbox.moe/dgaqjs.jpg",
    3: "https://files.catbox.moe/j7wz1l.jpg"
  };
  const img = document.getElementById("testimoniImg");
  img.src = imgLinks[num];
  img.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("testimoniModal").classList.add("hidden");
  document.getElementById("testimoniModal").classList.remove("flex");
}
