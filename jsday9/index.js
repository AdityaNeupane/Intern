 fetch("./index.json")

 .then((res) => {
    return res.json();
 })

 .then((data) => {
    console.log(data);
    const cars = data.cars;

    let rows= "";
    cars.forEach((car) => {
        
          rows += `
          <div class="card">

       <img style="height:250px; width:100%;" src="${car.image}">
    
        <div class="box">
        <h5 style="font-family:'lobster', cursive; font-size: 1.5rem;"><b> <u> ${car.name}</u></b></h5><br>
        <p><strong>Brand: </strong>${car.brand}</p>
        <p><strong>Model-year: </strong>${car.modelYear} A.D</p>
        <p><strong>Price: </strong>$${car.price} USD</p>
        <p><strong>Range: </strong>${car.range}</p>
        <p><strong>Fueltype: </strong>${car.fuelType}</p>
        <p><strong>Seat-Capacity: </strong>${car.seatCapacity} Persons</p>
        <p><strong>Features: </strong>${car.features.join(' , ')}</p>
        <p><strong>Dealer-Name: </strong>${car.dealer.name}</p>
        <p><strong>Dealer-Address: </strong>${car.dealer.address}</p>
        <p><strong>Dealer-phoneNumber: </strong>${car.dealer.phoneNumber}</p>
        
        
        </div>  
        
        </div> `;
    });

document.getElementById("container").innerHTML = rows;


 });