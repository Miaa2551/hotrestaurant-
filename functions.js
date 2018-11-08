$(".btn-primary").on("click", function(event){

event.preventDefault();

var newReservation = {
    name: $("#nameInput").val().trim(),
    phone: $("#phoneInput").val().trim(),
    email: $("#emailInput").val().trim(),
    unique: $("#idInput").val().trim()
};

$.post("/api/tables", newReservation)
.then(function(data){
    console.log("reserve.html", data);
});

});