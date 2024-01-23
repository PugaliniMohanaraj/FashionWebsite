
//post api

var form = document.getElementById('form');
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var items = document.getElementById('items').value
            var qty = document.getElementById('qty').value
            var price = document.getElementById('price').value
            var img = document.getElementById('img').value
            var des = document.getElementById('des').value

                fetch("http://localhost:5000/new",{
                    method:'post',
                    body:JSON.stringify({
                        items:items,
                        qty: qty,
                        price:price,
                        img:img,
                        des:des



                    }),
                    headers:{
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                .then(function(response){
                    return response.json()
                })
                .then(function(data){
                    console.log(data);
                })


        })


        //get

        const promise = fetch("http://localhost:5000/getData")

.then(function (res) {
    if (res.status === 200)
        return res.json();
        else throw new Error("Something Failed..");
        

}).then(function (data) {
    let tableData ="";

    data.map((values)=>{
        tableData +=`<tr>
        <td >${values.items}</td>
        <td>${values.qty}</td>
        <td>${values.price}</td>
        <td>${values.img}</td>
        <td>${values.des}</td>
        <td>
        
        <button class="btn1" onclick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></button> <button class="btn2" onClick='onDelete(this)'><i class="fa-solid fa-trash"></i></button>
               
      </td>
      </tr>`;
  });
  document.getElementById("table").innerHTML=tableData;
})
.catch(function(err){
  console.log(err.message);
})
