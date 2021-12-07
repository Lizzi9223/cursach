(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Озвученная_карта — копия_HTML5 Canvas_atlas_", frames: [[0,0,1279,771]]}
];


// symbols:



(lib.setup = function() {
	this.initialize(ss["Озвученная_карта — копия_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Соленоид_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Соленоид");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AphmUIhsOkQg2gog2A3QATJNJBAAQKsgfhnn8IECp3IC/kCQBnmhk8jQQpHmknsGkQjSCQBYF1g");
	this.shape.setTransform(1.491,0.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.4)").s().p("As5IfQA2g3A2AoIBsukQhYl1DSiQQHsmkJHGkQE8DQhnGhIi/ECIkCJ3QBnH8qsAfIgBAAQpAAAgTpNg");
	this.shape_1.setTransform(1.491,0.0125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("As5IfQA2g3A2AoIBsukQhYl1DSiQQHsmkJHGkQE8DQhnGhIi/ECIkCJ3QBnH8qsAfIgBAAQpAAAgTpNg");
	this.shape_2.setTransform(0.491,0.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:1.491}}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape,p:{x:0.491}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.1,-114.2,168.2,228.4);


(lib.Реостат_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Реостат");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APZaGQBJgVBMgXIAArHMgNXgs2QtgkmokJqMALHA1AQgWEnS4lEQBqgdBzghgAL8bEIBJEQQBXBcDAhcIiDlO");
	this.shape.setTransform(1.5,0.0112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.4)").s().p("ANFfUIhJkQQBqgdBzghQhzAhhqAdQy4FEAWknMgLHg1AQIkpqNgEmMANXAs2IAALHIiVAsICDFOQhgAuhGAAQhGAAgrgug");
	this.shape_1.setTransform(1.5,0.0112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("APZaGQBJgVBMgXIAArHMgNXgs2QtgkmokJqMALHA1AQgWEnS4lEQBqgdBzghgAL8bEIBJEQQBXBcDAhcIiDlO");
	this.shape_2.setTransform(0.5,0.0112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("ANFfUIhJkQQBqgdBzghQhzAhhqAdQy3FEAVknMgLHg1AQIkpqNgEmMANXAs2IAALHIiVAsICDFOQhgAuhGAAQhFAAgsgug");
	this.shape_3.setTransform(0.5,0.0112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-206,229.8,412.1);


(lib.Монтажный_кадр_1_Фон = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Фон
	this.instance = new lib.setup();
	this.instance.parent = this;
	this.instance.setTransform(-7,0,0.6296,0.6582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Монтажный_кадр_1_Фон, null, null);


(lib.Миллиамперметр_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Миллиамперметр");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AyWU0MAC0gmPICQlfId0BjIAACZMAB1AiTIg/EFIkyDhI8IAAg");
	this.shape.setTransform(1.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.4)").s().p("AvhW7Ii0iHMAC0gmPICQlfIdzBjIAACZMAB1AiTIg/EFIkyDhg");
	this.shape_1.setTransform(1.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AyWU0MAC0gmPICQlfId0BjIAACZMAB1AiTIg/EFIkyDhI8IAAg");
	this.shape_2.setTransform(0.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AvhW7Ii0iHMAC0gmPICQlfIdzBjIAACZMAB1AiTIg/EFIkyDhg");
	this.shape_3.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.9,-147.7,237.9,295.4);


(lib.ЛАТР_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("ЛАТР");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AWjpdIBcNvIg8H/IhBBcIgqD+IknDPIksglIhXCsIlrhFIhFCWIjVAAIhEibIhWAAIAAC4QieAjgagjIhiiQIAAiQIqck3IBEkSInvtWQi0q8ImmdQIsl5KbAmQSPAoCtO3g");
	this.shape.setTransform(1.5043,0.0383);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.4)").s().p("AkpYvIhiiQIAAiQIqck3IBEkSInvtWQi0q8ImmdQIsl5KbAmQSPAoCtO3IBcNvIg8H/IhBBcIgqD+IknDPIksglIhXCsIlrhFIhFCWIjVAAIhEibIhWAAIAAC4QhPARguAAQguAAgNgRg");
	this.shape_1.setTransform(1.5043,0.0383);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AWjpdIBcNvIg8H/IhBBcIgqD+IknDPIksglIhXCsIlrhFIhFCWIjVAAIhEibIhWAAIAAC4QieAjgagjIhiiQIAAiQIqck3IBEkSInvtWQi0q8ImmdQIsl5KbAmQSPAoCtO3g");
	this.shape_2.setTransform(0.5043,0.0383);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AkpYvIhiiQIAAiQIqck3IBEkSInvtWQi0q8ImmdQIsl5KbAmQSPAoCtO3IBcNvIg8H/IhBBcIgqD+IknDPIksglIhXCsIlrhFIhFCWIjVAAIhEibIhWAAIAAC4QhPARguAAQguAAgNgRg");
	this.shape_3.setTransform(0.5043,0.0383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-161,310,322.1);


(lib.ИсточникПитания_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("ИсточникПитания");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AR3UdIKvoeQCKhehAiQIhunoIhkmWIhuoDQgbh7iohCMgnNgDvQipgKg3BoIk+JgIifAAIAACYIBlArIAABXIheAAIAABBIhQAAIAACtIC8gHIAABXIiCAAIAABdIhXAAIAACuIDLAHIAAIBQAWBEAYA3QADAIAEAHQBfDRB/AWg");
	this.shape.setTransform(1.4997,0.0061);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.4)").s().p("A2mR+Qh+gWhfjRIgHgPQgYg3gWhEIAAoBIjLgHIAAiuIBXAAIAAhdICCAAIAAhXIi8AHIAAitIBPAAIAAhBIBfAAIAAhXIhlgrIAAiYICeAAIE/pgQA3hoCpAKMAnMADvQCpBCAbB7IBuIDIBjGWIBvHoQBACQiLBeIquIeg");
	this.shape_1.setTransform(1.4997,0.0061);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AR3UdIKvoeQCKhehAiQIhunoIhkmWIhuoDQgbh7iohCMgnNgDvQipgKg3BoIk+JgIifAAIAACYIBlArIAABXIheAAIAABBIhQAAIAACtIC8gHIAABXIiCAAIAABdIhXAAIAACuIDLAHIAAIBQAWBEAYA3QADAIAEAHQBfDRB/AWg");
	this.shape_2.setTransform(0.4997,0.0061);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("A2mR+Qh+gWhfjRIgHgPQgYg3gWhEIAAoBIjLgHIAAiuIBXAAIAAhdICCAAIAAhXIi8AHIAAitIBPAAIAAhBIBfAAIAAhXIhlgrIAAiYICfAAIE+pgQA3hoCpAKMAnNADvQCoBCAbB7IBuIDIBkGWIBuHoQBACQiLBeIquIeg");
	this.shape_3.setTransform(0.4997,0.0061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.9,-131.9,387.8,263.9);


(lib.Выпрямитель_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Выпрямитель");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlLF1IKyAAQC/gCA+iDIAAoWQgqg1h0A6QgegjhKACIqAgdQhPgHgrAmIhhg0Qg3AAgHARQhRA2BWBQIAAHGQBoBnCDAlg");
	this.shape.setTransform(1.4922,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.4)").s().p("AlLF1QiDglhohnIAAnGQhWhQBRg2QAHgRA3AAIBhA0QArgmBPAHIKAAdQBKgCAeAjQB0g6AqA1IAAIWQg+CDi/ACg");
	this.shape_1.setTransform(1.4922,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AlLF1QiDglhohnIAAnGQhWhQBRg2QAHgRA3AAIBhA0QArgmBPAHIKAAdQBKgCAeAjQB0g6AqA1IAAIWQg+CDi/ACg");
	this.shape_2.setTransform(0.4922,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:1.4922}}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape,p:{x:0.4922}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.6,-38.2,125.30000000000001,76.5);


(lib.Выключатель_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Выключатель");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmWhnQgmHdGuAdQGmgiAClxQgXlnmBgrQlnAxgxD6g");
	this.shape.setTransform(1.4956,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.4)").s().p("AmWhnQAxj6FngwQGBAqAXFnQgCFxmmAhQmugcAmndg");
	this.shape_1.setTransform(1.4956,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AmWhnQAxj6FngwQGBAqAXFnQgCFxmmAhQmugcAmndg");
	this.shape_2.setTransform(0.4956,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:1.4956}}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape,p:{x:0.4956}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.2,85,82.5);


(lib.Вольтметр_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Вольтметр");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A1lxOMADzAlsICiB+IacAAIJbiHIA/kOIlN5CIh1hsIh+pkI6BiQIiHBag");
	this.shape.setTransform(1.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.4)").s().p("AvPWcIiih/MgDzglrIGDjzICHhaIaACQIB+JkIB1BsIFNZBIg/EPIpbCHg");
	this.shape_1.setTransform(1.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("A1lxOMADzAlsICiB+IacAAIJbiHIA/kOIlN5CIh1hsIh+pkI6BiQIiHBag");
	this.shape_2.setTransform(0.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AvPWcIiih/MgDzglrIGDjzICHhaIaACQIB+JkIB1BsIFNZBIg/EPIpbCHg");
	this.shape_3.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.6,-144.5,279.29999999999995,289.1);


(lib.Амперметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Амперметрonlineaudioconvertercom");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Asa4kMgMhAp/QABFDCPAkIFfCZIe5AAQEMAtATirMAGwgndIiimvMggugC0g");
	this.shape.setTransform(1.525,-0.0062);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(95,95,95,0.4)").s().p("ANtZbI+5AAIlfiZQiPgkgBlDMAMhgp/ICGg/MAguAC0ICiGvMgGwAndQgPCHirAAQgtAAg4gJg");
	this.shape_1.setTransform(1.525,-0.0062);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Asa4kMgMhAp/QABFDCPAkIFfCZIe5AAQEMAtATirMAGwgndIiimvMggugC0g");
	this.shape_2.setTransform(0.525,-0.0062);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("ANtZbI+5AAIlfiZQiPgkgBlDMAMhgp/ICGg/MAguAC0ICiGvMgGwAndQgPCHirAAQgtAAg4gJg");
	this.shape_3.setTransform(0.525,-0.0062);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-164.6,322.1,329.29999999999995);


(lib.Монтажный_кадр_1_Кнопки = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Кнопки
	this.instance = new lib.ЛАТР_1();
	this.instance.parent = this;
	this.instance.setTransform(116.95,116.7,0.6296,0.7109,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.ЛАТР_1(), 3);

	this.instance_1 = new lib.Выпрямитель_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(252.25,120.4,0.6296,0.7109,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Выпрямитель_1(), 3);

	this.instance_2 = new lib.Выключатель_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(248.65,191.1,0.6296,0.7109,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Выключатель_1(), 3);

	this.instance_3 = new lib.Соленоид_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(359,129.1,0.6296,0.7109,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Соленоид_1(), 3);

	this.instance_4 = new lib.ИсточникПитания_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(543.35,156.05,0.6296,0.7109,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.ИсточникПитания_1(), 3);

	this.instance_5 = new lib.Реостат_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(725.8,243,0.6296,0.7109,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Реостат_1(), 3);

	this.voltmetr = new lib.Вольтметр_1();
	this.voltmetr.name = "voltmetr";
	this.voltmetr.parent = this;
	this.voltmetr.setTransform(602,370.05,0.6296,0.7109,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.voltmetr, 0, 1, 2, false, new lib.Вольтметр_1(), 3);

	this.instance_6 = new lib.Миллиамперметр_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(361.7,323.65,0.6296,0.7109,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.Миллиамперметр_1(), 3);

	this.ampermetr = new lib.Амперметр();
	this.ampermetr.name = "ampermetr";
	this.ampermetr.parent = this;
	this.ampermetr.setTransform(102.6,357.15,0.6296,0.7109,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.ampermetr, 0, 1, 2, false, new lib.Амперметр(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ampermetr},{t:this.instance_6},{t:this.voltmetr},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Монтажный_кадр_1_Кнопки, null, null);


// stage content:
(lib.Озвученная_картакопия_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.ampermetr = this.Кнопки.ampermetr;
		this.voltmetr = this.Кнопки.voltmetr;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Кнопки_obj_
	this.Кнопки = new lib.Монтажный_кадр_1_Кнопки();
	this.Кнопки.name = "Кнопки";
	this.Кнопки.parent = this;
	this.Кнопки.setTransform(400.1,238.1,1,1,0,0,0,400.1,238.1);
	this.Кнопки.depth = 0;
	this.Кнопки.isAttachedToCamera = 0
	this.Кнопки.isAttachedToMask = 0
	this.Кнопки.layerDepth = 0
	this.Кнопки.layerIndex = 0
	this.Кнопки.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Кнопки).wait(1));

	// Фон_obj_
	this.Фон = new lib.Монтажный_кадр_1_Фон();
	this.Фон.name = "Фон";
	this.Фон.parent = this;
	this.Фон.setTransform(395.6,253.7,1,1,0,0,0,395.6,253.7);
	this.Фон.depth = 0;
	this.Фон.isAttachedToCamera = 0
	this.Фон.isAttachedToMask = 0
	this.Фон.layerDepth = 0
	this.Фон.layerIndex = 1
	this.Фон.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Фон).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(393,250,406,257.5);
// library properties:
lib.properties = {
	id: 'A9E6451E63302B48BD2A25404233EE3A',
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Озвученная_карта — копия_HTML5 Canvas_atlas_.png?1638886125648", id:"Озвученная_карта — копия_HTML5 Canvas_atlas_"},
		{src:"sounds/Амперметрonlineaudioconvertercom.mp3?1638886125712", id:"Амперметрonlineaudioconvertercom"},
		{src:"sounds/Вольтметр_.mp3?1638886125712", id:"Вольтметр"},
		{src:"sounds/Выключатель_.mp3?1638886125712", id:"Выключатель"},
		{src:"sounds/Выпрямитель_.mp3?1638886125712", id:"Выпрямитель"},
		{src:"sounds/ИсточникПитания_.mp3?1638886125712", id:"ИсточникПитания"},
		{src:"sounds/ЛАТР_.mp3?1638886125712", id:"ЛАТР"},
		{src:"sounds/Миллиамперметр_.mp3?1638886125712", id:"Миллиамперметр"},
		{src:"sounds/Реостат_.mp3?1638886125712", id:"Реостат"},
		{src:"sounds/Соленоид_.mp3?1638886125712", id:"Соленоид"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A9E6451E63302B48BD2A25404233EE3A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;