const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".grid article");
filterButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    cards.forEach(
      (c) =>
        (c.style.display = f === "all" || c.dataset.cat === f ? "" : "none"),
    );
  }),
);
document.querySelectorAll(".order").forEach((btn) =>
  btn.addEventListener("click", () => {
    const name = btn.dataset.product;
    const msg = encodeURIComponent(
      `Halo Sedjiwa.ku, saya mau pesan ${name}. Boleh info detail dan cara pesan?`,
    );
    window.open(`https://wa.me/6285218809321?text=${msg}`, "_blank");
  }),
);
document.getElementById("wa").href =
  "https://wa.me/6285218809321?text=" +
  encodeURIComponent("Halo Sedjiwa.ku, saya mau custom bouquet. Bisa dibantu?");
document.querySelectorAll(".heart").forEach((h) =>
  h.addEventListener("click", () => {
    h.textContent = h.textContent === "♡" ? "♥" : "♡";
  }),
);
