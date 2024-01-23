var form = document.getElementById("form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  
  var frock =document.getElementById("frock").value;
  var shirt =document.getElementById("shirt").value;
  var saree =document.getElementById("saree").value;
  var jeans =document.getElementById("jeans").value;
  var size = document.getElementById("size").value;
  var pattern = document.getElementById("pattern").value;
  var customFile = document.getElementById("customFile").value;
  var details = document.getElementById("details").value;
  var fullName = document.getElementById("fullName").value;
  var Dd = document.getElementById("Dd").value;
  var adds1 = document.getElementById("adds1").value;
  var adds2 = document.getElementById("adds2").value;
  var city = document.getElementById("city").value;
  var phno1 = document.getElementById("phno1").value;
  var phno2 = document.getElementById("phno2").value;
  var mail = document.getElementById("mail").value;
  
// var filterList = '<p><b>Choose Categories: </b></p>';

// var filterCategories = "";


//     //add category list for filter popup menu
//     for(var i = 0; i < categories.length; i++){
//         var filterBodyStr = 
//             '<div class="form-check">' +
//                 '<input class="form-check-input" type="checkbox" value="' + categories[i] + '">' +
//                 '<label for="' + categories[i] + '">' + categories[i] + '</label>' +
//             '</div>';
        
//         filterList += filterBodyStr;
//     }

//             //evaluate which checkboxes are checked
//             $(".form-check-input").each(function(){
//                 if($(this).prop('checked')){
    
//                     count++;
//                     var selectedCategory = $(this).val();
    
//                     if(count == 1){
//                         filterCategories = selectedCategory;
//                     }
    
//                     else{
//                         filterCategories = filterCategories + "," + selectedCategory;
//                     }
//                 }
//             });


  fetch("http://localhost:5000/orders", {
    method: "post",
    body: JSON.stringify({
    frock:frock,
    shirt:shirt,
    saree:saree,
    jeans:jeans,
    size: size,
    pattern: pattern,
    customFile: customFile,
    details: details,
    fullName:fullName,
    Dd: Dd,
    adds1: adds1,
    adds2: adds2,
    city: city,
    phno1:phno1,
    phno2:phno2,
    mail:mail
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

