fetch("https://fakestoreapi.com/products/category/jewelery")

.then((res) => {
    return res.json();
})

.then((data) => {
console.log(data);
const newdata = data;

let rows = "";
newdata.forEach((hello) => {
 
    rows += `<div class="card" style="width : 50%; height : 50%">
    
     <img style="width : 200px; height : 200px;" src="${hello.image}">

    <div class="card-body">

    <h5  > Title: ${hello.title}</h5>
     <p  >Price: ${hello.price}</p>
     <p  >Description: ${hello.description}</p>
     <p  >Category: ${hello.category}</p>
     <p  >Rating: ${hello.rating.rate}</p>
     <p  >Count: ${hello.rating.count}</p>
      
     </div>
    </div> `

});

document.getElementById("container").innerHTML = rows;

})