
//get

const promise = fetch("http://localhost:5000/getRegisters")

.then(function (res) {
    if (res.status === 200)
        return res.json();
        else throw new Error("Something Failed..");
        

}).then(function (data) {
    let tableData ="";

    data.map((values)=>{
tableData +=`<tr>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.password}</td>
        <td>
        
        <button class="btn1" onclick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></button> <button class="btn2" onClick='onDelete(this)'><i class="fa-solid fa-trash"></i></button>
               
      </td>
      </tr>`;
  });
  document.getElementById("tablee1").innerHTML=tableData;
})
.catch(function(err){
  console.log(err.message);
})
