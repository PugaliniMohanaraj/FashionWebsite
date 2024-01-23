
//post api

var form = document.getElementById('form');
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var items1 = document.getElementById('items1').value
            var qty1 = document.getElementById('qty1').value
            var price1 = document.getElementById('price1').value
            var img1 = document.getElementById('img1').value
            var des1 = document.getElementById('des1').value

                fetch("http://localhost:5000/newClothes",{
                    method:'post',
                    body:JSON.stringify({
                        items1:items1,
                        qty1: qty1,
                        price1:price1,
                        img1:img1,
                        des1:des1



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

        const promise = fetch("http://localhost:5000/getClothes")

.then(function (res) {
    if (res.status === 200)
        return res.json();
        else throw new Error("Something Failed..");
        

}).then(function (data) {
    let tableData ="";

    data.map((values)=>{
        tableData +=`<tr>
        <td>${values.items1}</td>
        <td>${values.qty1}</td>
        <td>${values.price1}</td>
        <td>${values.img1}</td>
        <td>${values.des1}</td>
        <td>
        
        <button class="btn1" onclick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></button> <button class="btn2" onClick='onDelete(this)'><i class="fa-solid fa-trash"></i></button>
               
      </td>
      </tr>`;
  });
  document.getElementById("table_T").innerHTML=tableData;
})
.catch(function(err){
  console.log(err.message);
})
