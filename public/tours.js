document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggleBtn').forEach(btn => {
    const plus = btn.querySelector('.icon.plus');
    const minus = btn.querySelector('.icon.minus');
    const content = btn.closest('.bbb')?.querySelector('.toggle-content');

    plus.classList.add('active');
    minus.classList.remove('active');
    content.style.display = 'none';

    btn.addEventListener('click', () => {
      const isOpen = minus.classList.contains('active');
      if (isOpen) {
        plus.classList.add('active');
        minus.classList.remove('active');
        content.style.display = 'none';
      } else {
        plus.classList.remove('active');
        minus.classList.add('active');
        content.style.display = 'block';
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const four = document.querySelector('.four');  
  const five = document.querySelector('.five'); 
  const content4 = document.querySelector('.toggle-p');  
  const content5 = document.querySelector('.toggle-p-five'); 

  // პირველადი კონფიგურაცია: 4*-ის აქტიური და ლურჯი ფერი
  content4.style.display = 'block';
  content5.style.display = 'none';
  four.classList.add('active'); // 4*-ი აქტიური და ლურჯი
  five.classList.remove('active'); // 5*-ის აქტიურობა წაშლილი

  // 4*-ზე დაჭერისას
  four.addEventListener('click', () => {
    content4.style.display = 'block';  
    content5.style.display = 'none'; 

    four.classList.add('active'); // 4*-ი ხდება აქტიური
    five.classList.remove('active'); // 5*-ი ხდება პასიური
  });

  // 5*-ზე დაჭერისას
  five.addEventListener('click', () => {
    content4.style.display = 'none'; 
    content5.style.display = 'block';  

    five.classList.add('active'); // 5*-ი ხდება აქტიური
    four.classList.remove('active'); // 4*-ი ხდება პასიური
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
  });

  // დამატებით: დაჭერა გარეთ გამოსასვლელად
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });
});
