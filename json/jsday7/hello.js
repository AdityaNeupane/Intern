fetch("https://dummyjson.com/products")
.then(res=>{
    return res.json();
})

.then(data=>{
    console.log(data);
    const newdata = data;
     
    let rows = "";

    newdata.forEach(product => {

     rows+=`<tr> <td>${product.id}</td> <td>${product.title}</td> <td>${product.description}</td> <td>${product.price}</td> <td>${product.rating}</td> <td>${product.stock}</td> <td>${product.brand}</td> <td>${product.category}</td> <td><img style"width:100px ; height:100px;" src=${product.images}</td> </tr>`;

    });

    document.getElementById("dynamicdata").innerHTML = rows;

})
.catch((err) => console.log(err));
