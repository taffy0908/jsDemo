function extend(subClass, superClass) {
	var F = function() {};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
	subClass.superClass = superClass.prototype;
	if(superClass.prototype.constructor == Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
}

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
	this.constructor.superClass.constructor.apply(this, arguments);
	this.type = 'bird';
}

extend(Bird, Animal);

Bird.prototype.fly = function() {
	alert('I am flying');
};

var canary = new Bird('duduni');
canary.say();
canary.fly();
