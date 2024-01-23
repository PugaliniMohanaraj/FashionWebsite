
// get

const promise = fetch("http://localhost:5000/ordergetdata").then(function (res) {
    if (res.status === 200)
        return res.json();
        else throw new Error("Something Failed..");
        

}).then(function (data) {
    // console.log(data);
    // console.log(data[1]);
    let tableData ="";

    data.map((Ovalue)=>{
        tableData +=` 
<tr>
        <th style="  padding: 10px 10px 10px 10px; background-color:#fff;color:#000;" >${Ovalue.email_1}</th>
        <th style="  padding: 10px 10px 10px 10px;background-color:#fff;color:#000;"  >${Ovalue. phone_1}</th>
        <th style="  padding: 10px 10px 10px 10px;background-color:#fff;color:#000;" >${Ovalue.city_1}</th>
        <th style="  padding: 10px 10px 10px 10px;background-color:#fff;color:#000;" >${Ovalue.address_1}</th>
        <th style="  padding: 10px 10px 10px 10px;background-color:#fff;color:#000;" >${JSON.stringify(Ovalue.products)}</th>
        <th  style="  padding: 10px 10px 10px 10px;background-color:#fff;color:#000;"  >
       <button class="btn1" onclick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></button> <button class="btn2" onClick='onDelete(this)'><i class="fa-solid fa-trash"></i></button>
       </th>
      </tr> `;
  });
  document.getElementById("table_body").innerHTML=tableData;
})
.catch(function(err){
  console.log(err.message);
})


  