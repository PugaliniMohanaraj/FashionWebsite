let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}


const promise = fetch("http://localhost:5000/getClothes")

.then(function (res) {
    if (res.status === 200)
        return res.json();
        else throw new Error("Something Failed..");
        

}).then(function (data) {
    let tableData ="";

    data.map((values)=>{
        tableData +=` <div class="card">
        <div class="card-image">
            <img src="${values.img1}" alt="...">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="card-content">
        <br>
            <span class"item" style="color: #0f3761;font-size:2rem; font-weight:800;">${values.items1}</span><br><br>
            <span style="font-size:2rem;">RS.${values.price1}</span>
            <br> <br>
            <a href="orderform.html"><button class="add-to-cart">
                Shop Now
            </button></a> 
        </div>
    </div> 
`;
  });
  document.getElementById("Table1").innerHTML=tableData;
})
.catch(function(err){
  console.log(err.message);
})
