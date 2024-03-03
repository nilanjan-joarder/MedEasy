const bodyParts = [
  { id: "headSvg", divId: "headDiv" },
  { id: "neckSvg", divId: "neckDiv"},
  { id: "leftarmSvg", divId: "armDiv"},
  { id: "rightarmSvg", divId: "armDiv" },
  { id: "leftlegSvg", divId: "legDiv"},
  { id: "rightlegSvg", divId: "legDiv"},
  { id: "chestSvg", divId: "chestDiv"},
  { id: "AbdomenSvg", divId: "AbdomenDiv"},
  { id: "pelvisSvg", divId: "pelvisDiv"}
];

bodyParts.forEach(bodyPart => {
  const svg = document.getElementById(bodyPart.id);

  svg.addEventListener("mouseenter", () => showBodyPart(svg));
  svg.addEventListener("mouseleave", () => hideBodyPart(svg));
});

function showBodyPart(svg) {
  svg.style.opacity = "1";
}

function hideBodyPart(svg) {
  svg.style.opacity = "0";

}



document.getElementById("rotateBtn").addEventListener("click", function () {
  let frontImage = document.getElementById("frontImage");
  let backImage = document.getElementById("backImage");

    if (frontImage.style.display === 'none') {
      frontImage.style.display = 'block';
      backImage.style.display = 'none';
    } else {
      frontImage.style.display = 'none';
      backImage.style.display = 'block';
    }
  });