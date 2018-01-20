(function () {
    var app = angular.module("demo", []);
    app.controller("ContactController", function ($http) {
        var pb = this;
        this.contacts = [];
        this.delete = function (loc, id) {
            $http.delete("http://172.16.73.81:3000/contacts/" + id).then(function (res) {
                pb.contacts.splice(loc, 1)
            }, function (res) {
                console.log("Error Deleting");
            });
        };
        this.toggleEdit = function (c) {
            if (c.editable) {
                $http.put("http://172.16.73.81:3000/contacts/" + c.id, c).then(function (res) {
                    console.log("Success Updated")
                }, function (res) {});
            }
            c.editable = !c.editable ? true : false;
        };
        $http.get("http://172.16.73.81:3000/contacts").then(function (res) {
            pb.contacts = res.data
        }, function (res) {
            console.log("Error")
        })
    });
})();