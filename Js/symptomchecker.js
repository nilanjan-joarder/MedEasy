document.getElementById('rotateBtn').addEventListener('click', function() {
    let frontImage = document.getElementById('frontImage');
    let backImage = document.getElementById('backImage');

    if (frontImage.style.display === 'none') {
      frontImage.style.display = 'block';
      backImage.style.display = 'none';
    } else {
      frontImage.style.display = 'none';
      backImage.style.display = 'block';
    }
  });