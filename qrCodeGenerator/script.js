let btn = document.querySelector("button");
let data = document.querySelector("input");
let qrimage = document.querySelector("img");
let qrimage1 = document.querySelector(".imgContainer");
let container = document.querySelector(".container");
let downloadBtn = document.getElementById("downloadBtn");

btn.addEventListener("click", function () {
  if (data.value.length > 0) {
    let qrURL =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      data.value;

    qrimage.src = qrURL;
    qrimage1.style.display = "flex";
    container.style.height = "280px";
    qrimage.style.height = "80px";

    // Show download button and set its attributes
    downloadBtn.style.display = "block";
    downloadBtn.onclick = function () {
      const link = document.createElement("a");
      link.href = qrURL;
      link.download = "qr_code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  } else {
    qrimage.src = "";
    qrimage1.style.display = "none";
    downloadBtn.style.display = "none";
  }
});
