(function () {
    var app = angular.module("demo", []);
    app.controller("StoreController", function () {
        this.contact = phoneBook;
        var pb = this.contact;
        this.showContact = function() {
            console.log(pb);
            //send ajax request here
        };
    });
    var phoneBook = {
        firstName: "Steve",
        lastName: "Jobs",
        email: "steve@apple.com",
        phone: "+91-9876543210",
        gender: "Male"
    };
})();

