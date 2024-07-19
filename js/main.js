let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})




const nav = document.querySelector(".nav-items")
const open = document.getElementById("open")
const close = document.getElementById("close")

open.addEventListener("click", () => {
    nav.style.display="flex";
    nav.style.top="0%"
})
close.addEventListener("click", () => {
    nav.style.top="-110%"
})






// popup


document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("standardbtn");
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


// popup

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("premiumbtn");
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// popup


// free btn

document.addEventListener('DOMContentLoaded', (event) => {
    
    const button = document.getElementById('freebtn');
    
   
    button.addEventListener('click', () => {
        
        Swal.fire({
            title: "Success!",
            text: "Thank you!",
            icon: "success"
          });
        
    });
});


// free btn