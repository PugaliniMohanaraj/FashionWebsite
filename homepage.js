let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

// User Form 
const formWrapper = document.querySelector(".form-wrapper");
const inputs = document.querySelectorAll(".form-box input[type = 'password']");
const icons = [...document.querySelectorAll(".form-icon")];
const spans = [...document.querySelectorAll(".form-box .top span")];
const userForm = document.querySelector(".user-form");

[".user-icon", ".user-link"].forEach((p) => {
  document.querySelector(p).onclick = () => {
    userForm.classList.add("show");
    navList.classList.remove("show");
  };
});

document.querySelector(".close-form").onclick = () => {
  userForm.classList.remove("show");
};

spans.map((span) => {
  span.addEventListener("click", (e) => {
    const color = e.target.dataset.id;
    formWrapper.classList.toggle("active");
    userForm.classList.toggle("active");
    document.querySelector(":root").style.setProperty("--custom", color);
  });
});

Array.from(inputs).map((input) => {
  icons.map((icon) => {
    icon.innerHTML = `<img src="./home/ukistudent/Desktop/fashion_website/navbar/images/eye.svg" alt="" />`;

    icon.addEventListener("click", () => {
      const type = input.getAttribute("type");
      if (type === "password") {
        input.setAttribute("type", "text");
        icon.innerHTML = `<img src="./home/ukistudent/Desktop/fashion_website/navbar/images/hide.svg" alt="" />`;
      } else if (type === "text") {
        input.setAttribute("type", "password");
        icon.innerHTML = `<img src="./home/ukistudent/Desktop/fashion_website/navbar/images/eye.svg" alt="" />`;
      }
    });
  });
});

// register backend connect

// var form = document.getElementById('form');
//         form.addEventListener('submit', async function (e) {
//             e.preventDefault();
//             var name= document.getElementById('name').value
//             var email= document.getElementById('email').value
//             var password = document.getElementById('password').value
            

//                 fetch("http://localhost:8080/newregister",{
//                     method:'post',
//                     body:JSON.stringify({
                       
//                         email:email,
//                         password:password,
                        



//                     }),
//                     headers:{
//                         "Content-Type": "application/json; charset=UTF-8"
//                     }
//                 })
//                 .then(function(response){
//                     return response.json()
//                 })
//                 .then(function(data){
//                     console.log(data);
//                 })


//         })


// leatest updates
var swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  loop:true,
  spaceBetween: 10,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
          slidesPerView: 3,
      },
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  loop:true,
  spaceBetween: 10,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
          slidesPerView: 3,
      },
  },
});


// cart
(function ($) {
  "use strict";
  
  $('.quantity button').on('click', function () {
      var button = $(this);
      var oldValue = button.parent().parent().find('input').val();
      if (button.hasClass('btn-plus')) {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 0;
          }
      }
      button.parent().parent().find('input').val(newVal);
  });
  
})(jQuery);

// popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}
