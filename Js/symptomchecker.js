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
<<<<<<< HEAD
  });
=======
  });
  
>>>>>>> eacb5689a5c98f3b2e11f7eed92a9cfce2b41d5a
