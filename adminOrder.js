const promise = fetch("http://localhost:5000/getOrders")

.then(function (res) {
    if (res.status === 200)
        return res.json();
        else throw new Error("Something Failed..");
        

}).then(function (data) {
    let tableData ="";

    data.map((values)=>{
        tableData +=` <tr>
        <th scope="row">${values.frock}</th>
        <th >${values.frock}</th>
        <th >${values.shirt}</th>
        <th >${values.saree}</th>
        <th >${values.jeans}</th>
        <th >${values.size}</th>
        <th >${values.pattern}</th>
        <th >${values.customFile}</th>
        <th >${values.details}</th>
        <th >${values.fullName}</th>
        <th >${values.Dd}</th>
        <th >${values.adds1}</th>
        <th >${values.adds2}</th>
        <th >${values.city}</th>
        <th >${values.phno1}</th>
        <th >${values.phno2}</th>
        <th >${values.mail}</th>
      </tr>`;
  });
  document.getElementById("tableee").innerHTML=tableData;
})
.catch(function(err){
  console.log(err.message);
})
