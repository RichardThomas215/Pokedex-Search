
var fullname = "John Doe";
var obj = {
     fullname: "Colin Ihrig",
     prop: {
          fullname: "Aurelio De Rosa",
          getFullName: function() {
               return this.fullname;
          }
     }
};

console.log(obj.prop.getFullName());

var test = obj.prop.getFullName;

console.log(test());
