function Dog(name,breed,legs) {
  this.name = name;
this.breek = breed;
this.legs = 4;
this.isAGoodDog = true;
}
};
Dog.prototype.says = function(bark) {
  console.log(Dog.says);
}
var dog1 = new Dog('Parker', 'English Shepherd',legs) {
console.log(this.says);
}
