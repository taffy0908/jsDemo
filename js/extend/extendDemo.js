function Animal(name) {
	this.name = name;
	this.type = 'animal';
}

Animal.prototype = {
	say: function() {
		alert('I am a(an) ' + this.type + ', my name is ' + this.name);
	}
}


function Bird(name) {
	Animal.call(this, name);
}

Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function() {
	alert('I am flying');
};

var bird = new Bird('cuicui');
alert(bird.type);
bird.say();
bird.fly();

var myDog = new Animal('huahua');
myDog.say();
try {
	myDog.fly();
} catch (e) {
	console.log('something is wrong and ', e.message);
}


