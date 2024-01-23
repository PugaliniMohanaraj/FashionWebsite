let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}


// get

const promise = fetch("http://localhost:5000/getData")

.then(function (res) {
    if (res.status === 200)
        return res.json();
        else throw new Error("Something Failed..");
        

}).then(function (data) {
    // console.log(data);
    // console.log(data[1]);
    let tableData ="";

    data.map((values)=>{
        tableData +=`
        <div class="card">
        <div class="card-image">
            <img src="${values.img}" alt="...">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="card-content">
        <br>
            <span class"item" style="color: #0f3761;font-size:2rem; font-weight:800;">${values.items}</span><br><br>
            <span style="font-size:2rem;">RS.${values.price}</span>
            <br> <br>
            <button data-kajeevan='${JSON.stringify(values)}' class="js-card card__icon btn__icon">Add to cart</button>
        </div>
    </div> `;
  });
  document.getElementById("tablee").innerHTML=tableData;

  Array.from(document.querySelectorAll('.js-card')).forEach(registerAddToCardEventListener)

  function registerAddToCardEventListener(btn) {

    btn.addEventListener('click', (event) => {
        const data = btn.getAttribute('data-kajeevan')
        const products = JSON.parse(localStorage.getItem('products')) || []
        localStorage.setItem('products', JSON.stringify([...products, JSON.parse(data)]))

        updateAddedItemsCount()
       
    })

    function updateAddedItemsCount() {
        const countElement = document.getElementById('js-added-item-count')

        countElement.innerText = +countElement.innerText + 0
    }

    window.addEventListener('load', initializeAddedProducts)
    function initializeAddedProducts() {
        console.log('loaded ..............')
        // get items from the local storage

        // set added items count

        // initialize added items
    }

  }
})
.catch(function(err){
  console.log(err.message);
})
