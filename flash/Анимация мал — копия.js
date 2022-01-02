(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.Play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("animation");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj3k8IK7EyIuHFHg");
	this.shape.setTransform(33.525,24.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("A2TCOICmqwQgGAdAAAeQAAD1FzCsQFyCsIMAAQILAAFzisQFyisAAj1QAAgkgIgiIAIALICmKwQrUGgrJAAQrKAArAmgg");
	this.shape_1.setTransform(25.775,78.82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FF00").s().p("At+GhQlyitAAj0QAAgdAGgdQAojPFEiYQFzisILAAQIMAAFyCsQE8CUAvDIQAIAiAAAjQAAD0lzCtQlyCtoMAAQoLAAlzitgAlyEFIOGlHIq7kyg");
	this.shape_2.setTransform(25.5,30.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339966").s().p("At+GhQlyitAAj0QAAgdAGgdQAnjPFFiYQFzisILAAQIMAAFyCsQE9CUAuDIQAIAiAAAjQAAD0lzCtQlyCtoMAAQoLAAlzitgAlyEFIOGlHIq7kyg");
	this.shape_3.setTransform(25.5,30.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Aj3k8IK7EyIuHFHg");
	this.shape_4.setTransform(33.525,24.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("At+GhQlyitAAj0QAAgdAGgdQAnjPFFiYQFzisILAAQIMAAFyCsQE9CUAuDIQAIAiAAAjQAAD0lzCtQlyCtoMAAQoLAAlzitgAlyEFIOGlHIq7kyg");
	this.shape_5.setTransform(19.65,30.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF33").s().p("A1YAmIBrm9QgGAdAAAeQAAD0FzCsQFyCtIMAAQILAAFzitQFyisAAj0QAAgkgIgjIAIAMIBrG8Qq2F/qsAAQqsAAqjl+g");
	this.shape_6.setTransform(19.925,64.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33FF00").s().p("At+GhQlyitAAj0QAAgdAGgdQAnjPFFiYQFzisILAAQIMAAFyCsQE9CUAuDIQAIAiAAAjQAAD0lzCtQlyCtoMAAQoLAAlzitgAlyEFIOGlHIq7kyg");
	this.shape_7.setTransform(25.5,30.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{y:78.82}},{t:this.shape,p:{x:33.525}}]}).to({state:[{t:this.shape_1,p:{y:78.825}},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape,p:{x:27.675}},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_1,p:{y:78.825}},{t:this.shape,p:{x:33.525}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-28.9,285.6,163.6);


(lib.латрРучка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(2,1,1).p("ABZgDIh/AFIgyAC");
	this.shape.setTransform(12.85,7.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBAAgDQAFgSAggOQAkgQAzAAQA0AAAlAQQAkAQAAAUg");
	this.shape_1.setTransform(21.4,8.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ADKAzIAHAUQgBAUg9ATAiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACIAlBZQgOAEgRAFQgiAIgyABQgKAAgKAAAALApQgFAAgGAAQgpAAgigJQgYgGgUgKQgIgEgHgEQgOgIgIgKQgMgPgBgQIgnBwQAJALAPAJABuAVQgrASg4ACIABBXQghgBgegEQgjgEgTgDQgGgBgEgBQgjgFgUgKQgIgEgGgEAiGAIIgyBTAhLAgIgeBUACUAAIA2AzACqgpIAgBc");
	this.shape_2.setTransform(20.9,12.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgCIABgDIAxgCIAAAFQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgkgPg0AAQgzAAglAPQggAPgEASIgxACQABgUATgRIBFgiQAkgKArAAQBGAAAyAZQApAVAHAcQACAGAAAEIAAACQgBAWgWASQgLAKgQAIIgKAFQgrASg5ACIgKAAgAhTAkQgkgQAAgUIAAgFIB/gGIh/AGQAEgSAggPQAlgPAzAAQA0AAAkAPQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAgAh3gFIAAAAg");
	this.shape_3.setTransform(20.925,8.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAMBVIgBhWIABBWQghgBgegEIg2gHIAdhTQAjAJApAAIALAAQA4gCArgSIAlBYIgfAJQgiAIgzABIgTAAgAhzBHQgjgFgUgKIgPgIIA0hSIAOAIQAUAKAXAGIgdBTIgKgCgABugVIAKgFQAQgIALgJQAWgTABgWIAgBcIg3gzIA3AzIAHAUQgBAUg9ATgAi5AwQgOgJgJgLIAohwQAAAQALAPQAJAKAPAJIg0BSIAAAAg");
	this.shape_4.setTransform(20.9,17.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ADKAzIAHAUQgBAUg9ATQgOAEgRAFQgiAIgyABQgKAAgKAAQghgBgegEQgjgEgTgDQgGgBgEgBQgjgFgUgKQgIgEgGgEAiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACIAlBZAALApQgFAAgGAAQgpAAgigJQgYgGgUgKQgIgEgHgEQgOgIgIgKQgMgPgBgQIgnBwQAJALAPAJABuAVQgrASg4ACIABBXAiGAIIgyBTAhLAgIgeBUACqgpIAgBcACUAAIA2Az");
	this.shape_5.setTransform(20.9,12.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAMBVIgBhWQA4gCArgSIAKgFQAQgIALgJQAWgTABgWIAgBcIAHAUQgBAUg9ATIglhYIAlBYIgfAJQgiAIgzABIgTAAgADKAIIg3gzgAgzBQIg2gHIAdhTIgdBTIgKgCQgjgFgUgKIgPgIIA0hSIAOAIQAUAKAXAGQAjAJApAAIALAAIABBWQghgBgegEgACTBDgAi5AwQgOgJgJgLIAohwQAAAQALAPQAJAKAPAJIg0BSIAAAAg");
	this.shape_6.setTransform(20.9,17.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0033").ss(2,1,1).p("ABJANIhsgSIglgH");
	this.shape_7.setTransform(14.475,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBAAgDQADgNARgKQAHgFAKgEQAkgQAzAAQA0AAAlAQQAkAQAAAUg");
	this.shape_8.setTransform(21.4,8.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgCIABgDQABgUATgRIBFgiQAkgKArAAQBGAAAyAZQApAVAHAcQACAGAAAEIAAACQgBAWgWASQgLAKgQAIIgKAFQgrASg5ACIgKAAgAh3AAQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgkgPg0AAQgzAAglAPIgRAJIglgGIAlAGQgQALgDANIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFQADgNAQgLIBtATIhtgTIARgJQAlgPAzAAQA0AAAkAPQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAgAhkgdg");
	this.shape_9.setTransform(20.925,8.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAMBVIgBhWQA4gCArgSIAlBYIgfAJQgiAIgzABIgTAAgAgzBQIg2gHIAdhTIgdBTIgKgCQgjgFgUgKIgPgIIA0hSIg0BSQgOgJgJgLIAohwQAAAQALAPQAJAKAPAJIAOAIQAUAKAXAGQAjAJApAAIALAAIABBWQghgBgegEgACTBDgABugVIAKgFQAQgIALgJIA3AzIAHAUQgBAUg9ATgACTgrQAWgTABgWIAgBcg");
	this.shape_10.setTransform(20.9,17.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0033").ss(2,1,1).p("AA2AXIhNggIgegN");
	this.shape_11.setTransform(16.275,5.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBAAgDQAFgSAggOQAGgDAHgCQAggLAqAAQA0AAAlAQQAkAQAAAUg");
	this.shape_12.setTransform(21.4,8.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("ACqgpQgBAPgJANQgFAHgHAGQgLAIgRAIQgFADgFACQgMAFgNAEQgYAHgaACQgMABgMABQgFAAgGAAQglAAgggHQgDgBgDgBQgYgGgUgKQgIgEgHgEQgJgGgGgFQgEgDgDgEQgMgPgBgQIgnBwQADAEAEAEAiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABIAnBwQAAAKgPAJQgOAJgcAJQgDABgCABQgOAEgRAFQgUAFgZACQgTACgUAAQgKAAgKAAQghgBgegEQgjgEgTgDQgGgBgEgBQgUgDgPgEQgLgEgJgEQgIgEgGgEQgKgGgHgGACggNIAiBnABVAeIBDBOAh3AVIgfBWAiVgDIg0BSAhFAiIACBTAAjAnIAkBX");
	this.shape_13.setTransform(20.9,12.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996633").s().p("AAABVQglAAgggIIgHgBQgXgGgUgKIgPgJQgJgFgGgGIgIgIQgLgOgBgQIAAgCIABgDQABgUATgRIBFgiQAkgKArAAQBGAAAyAZQApAVAHAcQACAGAAAEIAAACQgBAOgKAOQgFAGgHAGQgLAKgQAIIgKAFQgMAFgOAEQgXAGgbADIgYACIgKAAgAh3AAQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgkgPg0AAQgqAAghALIgegNIAeANIgNAEQggAPgEASIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFQAEgSAggPIANgEIBOAhIhOghQAhgLAqAAQA0AAAkAPQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAgAhGgqg");
	this.shape_14.setTransform(20.925,8.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAMBVQghgBgegEIg2gHIgKgCQgUgDgPgFIAfhUIgfBUQgLgDgJgEIgPgIQgJgGgHgGIA0hSIg0BSIgHgIIAohwQAAAQALAPIAIAHQAGAGAKAGIAOAIQAUAKAXAGIAHACQAgAHAlAAIALAAIAYgCQAagCAXgHQAOgEAMgFIAKgFQAQgIALgJQAIgGAEgHQAKgNABgPIAnBwQAAAKgPAJIgjhnIAjBnQgOAJgcAJIhEhNIBEBNIgFACIgfAJQgUAFgZACIgkhWIAkBWQgTACgVAAIgTAAgAhEBKIgBhSgADCAvg");
	this.shape_15.setTransform(20.9,17.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0033").ss(2,1,1).p("AAhAfIgsgpIgVgU");
	this.shape_16.setTransform(18.425,4.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBAAgDQAFgSAggOQAGgDAHgCQAPgFATgDQATgDAVAAQA0AAAlAQQAkAQAAAUg");
	this.shape_17.setTransform(21.4,8.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ADKAzIAHAUQgBAUg9ATAiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACIAlBZQgOAEgRAFQgiAIgyABQgKAAgKAAAALApQgFAAgGAAQgpAAgigJQgYgGgUgKQgIgEgHgEIgyBTABuAVQgrASg4ACIABBXQghgBgegEQgjgEgTgDQgGgBgEgBQgjgFgUgKQgIgEgGgEAiGAIQgOgIgIgKQgMgPgBgQIgnBwQAJALAPAJAhLAgIgeBUACUAAIA2AzACqgpIAgBc");
	this.shape_18.setTransform(20.9,12.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgCIABgDQABgUATgRIBFgiQAkgKArAAQBGAAAyAZQApAVAHAcQACAGAAAEIAAACQgBAWgWASQgLAKgQAIIgKAFQgrASg5ACIgKAAgAh3AAQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgkgPg0AAQgVAAgUADIgVgVIAVAVQgSADgQAFIgNAEQggAPgEASIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFQAEgSAggPIANgEQAQgFASgDIAsAqIgsgqQAUgDAVAAQA0AAAkAPQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAgAgkgyg");
	this.shape_19.setTransform(20.925,8.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0033").ss(2,1,1).p("AACAhIgCgsIgBgV");
	this.shape_20.setTransform(21.075,4.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBAAgDQAFgSAggOQAFgCAFgCQAggLAqgBQACAAABAAQA0AAAlAQQAkAQAAAUg");
	this.shape_21.setTransform(21.4,8.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACQgrASg4ACQgFAAgGAAQgBAAgBAAQgogBghgIQgYgGgUgKQgIgEgHgEQgOgIgIgKQgMgPgBgQIgnBwQAJALAPAJQAGAEAIAEQAUAKAjAFQAEABAGABQASADAiAEACcAEIAkBXQgQAKgdAJQgOAEgRAFQgiAIgyABQgKAAgKAAQghgBgegEQgBAAgBAAABNAjIBGBLAh4AWIABBYAiTAEIgeBTAgCApIgzBSACqgpIAnBwQgBAKgQAK");
	this.shape_22.setTransform(20.9,12.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#996633").s().p("AAABVIgDAAQgogBghgIQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgCIABgDQABgUATgRIBFgiQAkgKArAAQBGAAAyAZQApAVAHAcQACAGAAAEIAAACQgBAWgWASQgLAKgQAIIgKAFQgrASg5ACIgKAAgAh3AAQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgkgPg0AAIgEAAIgBgVIABAVQgpABggALIgLADQggAPgEASIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFQAEgSAggPIALgDQAggLApgBIADAsIgDgsIAEAAQA0AAAkAPQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAgAABg1IAAAAg");
	this.shape_23.setTransform(20.925,8.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAMBVQghgBgegEIgCgBIAyhQIgyBQIg0gGIgKgCQgjgFgUgKIgPgIQgOgJgJgLIAohwQAAAQALAPQAJAKAPAJIAOAIQAUAKAXAGQAiAIAnABIADAAIALAAQA4gCArgSIAKgFQAQgIALgJQAWgTABgWIAnBwQgBAKgQAKIgkhWIAkBWQgQAKgdAJIhHhKIBHBKIgfAJQgiAIgzABIgTAAgAh3BDIgChXgAixAsIAehSg");
	this.shape_24.setTransform(20.9,17.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0033").ss(2,1,1).p("AgTAhIAagsIANgV");
	this.shape_25.setTransform(23.3,4.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBAAgDQAFgSAggOQAFgCAFgCQAggLAqgBQACAAABAAQANAAANABQAjADAcAMQAkAQAAAUg");
	this.shape_26.setTransform(21.4,8.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgCIABgDQABgUATgRIBFgiQAkgKArAAQBGAAAyAZQApAVAHAcQACAGAAAEIAAACQgBAWgWASQgLAKgQAIIgKAFQgrASg5ACIgKAAgAh3AAQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgbgLgjgDIANgWIgNAWIgagBIgEAAQgpABggALIgLADQggAPgEASIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFQAEgSAggPIALgDQAggLApgBIAEAAIAaABIgbAsIAbgsQAjADAbALQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAgAAfg0IAAAAg");
	this.shape_27.setTransform(20.925,8.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAMBVIgBhWQA4gCArgSIAlBYIgfAJQgiAIgzABIgTAAgAgzBQIg2gHIAdhTQAjAJApAAIALAAIABBWQghgBgegEgAhpBJIgKgCQgjgFgUgKIgPgIIA0hSIAOAIQAUAKAXAGIgdBTIAAAAgACTBDgABugVIAKgFQAQgIALgJIA3AzIAHAUQgBAUg9ATgAi5AwQgOgJgJgLIAohwQAAAQALAPQAJAKAPAJIg0BSIAAAAgACTgrQAWgTABgWIAgBcg");
	this.shape_28.setTransform(20.9,17.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0033").ss(2,1,1).p("AgoAdIA5goIAYgQ");
	this.shape_29.setTransform(25.275,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBAAgDQAFgSAggOQAFgCAFgCQAggLAqgBQACAAABAAQAfAAAZAGQASADAPAHQAkAQAAAUg");
	this.shape_30.setTransform(21.4,8.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACQgiAOgqAEQgDABgCAAQgJABgJAAQgFAAgGAAQgpAAgigJQgYgGgUgKQgIgEgHgEQgIgFgGgFQgFgEgDgEQgMgPgBgQIgnBwQAJALAPAJQAGAEAIAEQAJAEANAEAC7AIIgdBdAC7AIIAWA/QgBAUg9ATQgOAEgRAFQgEABgEABQggAGgsABQgKAAgKAAQgLAAgKgBQAAAAgBAAQgWgBgTgDQgjgEgTgDQgGgBgEgBQgTgDgOgEACqgpIARAxAiUgCIAABtAhLAgIgeBUAAiAnIBKBSAguApIAkBW");
	this.shape_31.setTransform(20.9,12.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgJQgIgEgGgGIgJgJQgLgOgBgQIAAgCIABgDQABgUATgRIBFgiQAkgKArAAQBGAAAyAZQApAVAHAcQACAGAAAEIAAACQgBAWgWASQgLAKgQAIIgKAFQgiAOgqAEIgGABIgSABIgKAAgAh3AAQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgPgGgRgEIAXgQIgXAQQgagFgeAAIgEAAQgpABggALIgLADQggAPgEASIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFQAEgSAggPIALgDQAggLApgBIAEAAQAeAAAaAFIg6ApIA6gpQARAEAPAGQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAgAA9gwIAAAAg");
	this.shape_32.setTransform(20.925,8.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAMBVIgVgBIgBAAIgkhVIAkBVQgWgBgTgDIg2gHIAdhTQAjAJApAAIALAAIASgBIAFgBQAqgEAigOIAKgFQAQgIALgJQAWgTABgWIARAxIgdBdIAdhdIAWA/QgBAUg9ATIgfAJIgIACIhKhRIBKBRQggAGgtABIgTAAgAhzBHQgTgDgOgEIAAhtQAGAGAJAFIAOAIQAUAKAXAGIgdBTIgKgCgAiqA4IgPgIQgOgJgJgLIAohwQAAAQALAPIAJAIIAABtQgNgEgJgEgAiUgtIAAAAg");
	this.shape_33.setTransform(20.9,17.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0033").ss(2,1,1).p("AgoAdIBRg4");
	this.shape_34.setTransform(21.25,7.65,1.1038,1.1374,11.4828,0,0,-4,2.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("ADKAzIAHAUQgBAUg9ATQgOAEgRAFQgiAIgyABQgKAAgKAAQghgBgegEQgjgEgTgDQgGgBgEgBQgjgFgUgKQgIgEgGgEAiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACIAlBZAALApQgFAAgGAAQgpAAgigJQgYgGgUgKQgIgEgHgEIgyBTABuAVQgrASg4ACIABBXAiGAIQgOgIgIgKQgMgPgBgQIgnBwQAJALAPAJAhLAgIgeBUACqgpIAgBcACUAAIA2Az");
	this.shape_35.setTransform(20.9,12.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgCIABgDQABgUATgRIBFgiQAkgKArAAQBGAAAyAZQApAVAHAcQACAGAAAEIAAACQgBAWgWASQgLAKgQAIIgKAFQgrASg5ACIgKAAgAh3AAQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgPgGgRgEQgagFgeAAIgEAAQgpABggALIgLADQggAPgEASIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFQAEgSAggPIALgDQAggLApgBIAEAAQAeAAAaAFQARAEAPAGQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAg");
	this.shape_36.setTransform(20.925,8.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0033").ss(2,1,1).p("AhXgDIB+AFIAxAC");
	this.shape_37.setTransform(28.95,7.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAlAPQAkAQAzAAQA0AAAlgQQAkgPAAgWQAAgBAAgDQgEgSgggOQglgQg0AAQgzAAgkAQQglAQAAAUg");
	this.shape_38.setTransform(20.4,8.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("ACpgvQgBgUgTgRIhFghQgkgKgsAAQhFAAgyAYQgqAVgGAdQgCAFAAAGQAAAAAAABIggBcIgHAUQABAUA9ATQAOAEARAFQAjAIAyABQAKAAAJAAQAhgBAfgEQAjgEATgDQAFgBAEgBQAjgFAUgKQAIgEAHgEACHAIQAOgIAJgKQALgPABgQIAnBwQgJALgOAJAgJApQAFAAAEAAQAqAAAjgJQAXgGAUgKQAIgEAHgEIAzBTABNAgIAeBUAiSAAQAKAIARAIQAFADAFACIglBZAiSAAIg3AzAhtAVQArASA5ACIgCBXAipgpQABAWAWAT");
	this.shape_39.setTransform(20.9,12.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#996633").s().p("AgJBVQg5gCgrgSIgKgFQgQgIgLgKQgWgSgBgWIAAgCQAAgEACgGQAHgcApgVQAygZBFAAQAsAAAkAKIBFAiQATARABAUIABADIAAACQgBAQgLAOQgJALgOAIIgPAJQgUAKgXAGQgjAJgqAAIgJAAgAgEAzQAzAAAlgPQAkgQAAgUIAAgFIAxACIgxgCQgEgSgggPQglgPgzAAQg0AAgkAPQglAQAAAWQAAAUAlAQQAkAPA0AAIAAAAgAgEAzQg0AAgkgPQglgQAAgUQAAgWAlgQQAkgPA0AAQAzAAAlAPQAgAPAEASIh/gGIB/AGIAAAFQAAAUgkAQQglAPgzAAIAAAAgAiBAAIAAAAgAB4gFg");
	this.shape_40.setTransform(20.875,8.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgfBVQgxgBgjgIIgfgJIAlhYQArASA5ACIgCBWIgUAAgAgJgBIAJAAQAqAAAigJQAYgGAUgKIAPgIQAOgJAIgKQAMgPABgQIAnBwQgJALgPAJIgyhSIAyBSIgOAIQgUAKgjAFIgJACIgfhTIAfBTIg2AHQgfAEghABgAiSBDQg9gTgBgUIAHgUIA2gzQAMAJAQAIIAKAFIglBYIAAAAgAC5AwgAiphUQABAWAVATIg2Azg");
	this.shape_41.setTransform(20.9,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_5},{t:this.shape_1},{t:this.shape}]},271).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_5},{t:this.shape_8},{t:this.shape_7}]},4).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},4).to({state:[{t:this.shape_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},5).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},5).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_5},{t:this.shape_26},{t:this.shape_25}]},4).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},6).to({state:[{t:this.shape_10},{t:this.shape_36},{t:this.shape_35},{t:this.shape_30},{t:this.shape_34}]},5).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.8,27.7);


(lib.Электрон = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADLAAQAABUg8A7Qg7A8hUAAQhTAAg7g8Qg8g7AAhUQAAhTA8g8QA7g7BTAAQBUAAA7A7QA8A8AABTgAiOggIEYAAIAABZIkYAAg");
	this.shape.setTransform(-122.75,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiLAtIAAhZIEXAAIAABZg");
	this.shape_1.setTransform(-123,-1.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AiOCPQg8g7AAhUQAAhTA8g7QA7g8BTAAQBUAAA7A8QA7A7AABTQAABUg7A7Qg7A7hUAAQhTAAg7g7gAiNA6IEXAAIAAhZIkXAAg");
	this.shape_2.setTransform(-122.75,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Электрон, new cjs.Rectangle(-144,-23.9,42.5,42.5), null);


(lib.Стрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Ar8AFIH+ldIAADrIP7AAIAADbIv7AAIAADrg");
	this.shape.setTransform(68.5,46.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Стрелка, new cjs.Rectangle(-8,12.1,153,69), null);


(lib.Соленоид = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAmAAQAAABAAABQgCAFgJADQgLAEgQAAQgOAAgLgEQgKgDgBgFQgBgBAAgBQAAgFAMgEQALgEAOAAQAQAAALAEQALAEAAAFg");
	this.shape.setTransform(54.8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AGWvjQAABDh4AuQh4AwipAAQiqAAh4gwQh4guAAhDQAAhDB4gvQB4gvCqAAQCpAAB4AvQB4AvAABDgAIXupQgbBKh7A4QgBAAgCACQidBGjdAAQjfAAiehIQgEgCgEgBQhzg3gahIQgGgQgCgRQAAgDAAgEQAAgCAAgCQAAhmCdhJQCehIDfAAQDfAACeBIQCeBJAABmQAAABAAABQAAABAAACIgBBJQABAFAAAFQAAAFgBAGQgIBfiVBEQgBABgCAAIAAAFQidBHjdAAQjfAAiehIQgEgCgEgCIAAgFQiUhGgBhjIAAgBQAAgCAAAAIAAgCQAAgVAIgTAIfvQQgBAUgHATQAGARABARIAAAVAgRvvQgHgCgHgEIAAgQIAAguIAAgpIAAAAAArxcIAABnQgGAEgFACAoWvKIAABJAF+MDQCPBGAABhQAAABAAABQAAACAAABQAAABAAABQgBAKgCAKQABAKABALQAAABAAACQAAABAAABQAAACAAABQAAADgBACQgLBdiPBCQgCABgBAAQgBABgBABQicBEjZAAQjgAAiehJQgEgCgDgCQhsg0gdhCQgBgEgBgDQgBgBAAgCQgDgGgBgHIACgzQgCgCAAgCQAAgCAAgCQAAgDABgCQAAAEABAFQAAADABADQgBgBAAgBAINOxIgBApIgBANAF+MDIAACcQl/DdmAjdIAAiVAIKPFQgWBSiCA8QgBABgBAAQgCABgBABQicBEjZAAQjfAAiehJQgEgCgEgCQhsg0gchCQgCgEgBgDQAAgBgBgCQgCgGgBgHAodOzQAAgEAAgEQABgGABgFQAQhXCKg/IAA3YAF+rJIAAXM");
	this.shape_1.setTransform(54.275,122.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Al/MAIAAiWIAA3XIAIAEQCeBIDeAAQDeAACdhHIAAXMIAACcQjABujAAAQi/AAjAhug");
	this.shape_2.setTransform(54.1,138.7875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBFIAAgWIgPgGIAAgQIAAgtIAAgpIABAAIgBgCQABgGAKgEQAMgEAOAAQAQAAAKAEQAMAEAAAGIAAACQgCAFgKADQgKAFgQAAQgOAAgMgFQgJgDgBgFQABAFAJADQAMAFAOAAQAQAAAKgFQAKgDACgFIAABmIgMAGIAEAAIAAAWQgOAJgNAAQgNAAgMgJgAgShCQgHADgBADQABAEAHADQAJADAJAAQALAAAIgDQAJgDgBgEQABgDgJgDQgIgDgLAAQgJAAgJADg");
	this.shape_3.setTransform(54.8,17.3625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAVBiQgOgHAAgKQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADADAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAhuBhQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgAB3AwQgOgHAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAGQgOAIgUAAQgVAAgOgIgAi8AqQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgAAsAAQgOgHAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAGQgOAHgUAAQgVAAgOgHgAhugPQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQAKAAAIABIAAAuQgIACgKAAQgUAAgPgIgAgmhYQgIgDAAgEQAAgDAIgDQAIgDALAAQALAAAHADQAIADAAADQAAAEgIADQgHADgLAAQgLAAgIgDg");
	this.shape_4.setTransform(56.875,20.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("AkhBxQh4guAAhDQAAhCB4gvQB4gvCpAAQCqAAB4AvQB4AvAABCQAABDh4AuQh4AwiqAAQipAAh4gwgAAzAnQgJAFgCAFQgDADgBAFQAAAKAPAHQAOAHAVABQAUgBAOgHQAOgHAAgKQAAgFgCgDQgEgFgIgFIgDgBQgNgGgSAAQgVABgOAGgAhQAnQgIAEgDAFQgDAEAAAEQAAAKAOAIQAOAHAVAAQAUAAAOgHQAOgHAAgLQAAgEgDgEQgCgFgJgEIgCgBQgOgGgSAAQgVAAgOAHgACVgJQgJAEgCAFQgEADAAAFQAAAJAPAIQAOAHAVAAQAUAAAOgHQAOgHAAgKQABgFgDgDQgEgFgIgEIgDgBQgNgGgSAAQgVAAgOAHgAiegPQgIAEgDAFQgDAEAAADQAAAKAOAIQAPAHAUAAQAVAAANgHQAPgHAAgLQAAgDgCgEQgFgFgIgEIgDgBQgNgGgSAAQgUAAgPAHgAgcgQIAPAFIAAAVQAYATAcgTIAAgVIgEAAIAMgFIAAhoIAAgCQAAgGgMgEQgKgEgQAAQgOAAgMAEQgKAEgBAGIABACIgBAAIAAAqQgIgCgJAAQgVAAgOAHQgIAEgDAGQgDADAAAFQAAAJAOAHQAOAIAVAAQAJAAAIgCgABKg6QgIAEgEAFQgDAEAAAEQABALAOAGQAOAIAUAAQAVAAAOgIQAPgGAAgLQgBgEgCgEQgEgFgIgEIgDgCQgNgFgTAAQgUAAgOAHg");
	this.shape_5.setTransform(53.9,23.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AmHSEIgHgFQhsgzgdhDIgCgGIgBgDQgDgGgBgHIACgzQABAHACAGIABADIADAHQAcBCBsA0IAIAEQCeBIDfAAQDZAACchDIADgCIACgBQCCg8AWhSQgWBSiCA8IgCABIgDACQicBDjZAAQjfAAiehIIgIgEQhsg0gchCIgDgHIgBgDQgCgGgBgHIABABIgBgFIgBgJIAAgIIACgLQAQhXCKg/IAACVQGADcF/jcIAAicQCPBGAABhIAAACIAAADIAAACIgDAUIACAUIgBAOQgLBdiPBCIgDABIgCABQicBEjZAAQjgABiehJgAl5rKIgIgDIAAgGQiUhGgBhjIAAgBIAAgCIAAgCQAAgUAIgUQgGgQgCgRIAAgHIAAgEQAAhmCdhJQCehHDfgBQDfABCeBHQCeBJAABmIAAACIAAADQgBAUgHATQgbBKh7A4IgDACQidBGjdABQjfAAiehJIgIgEQhzg3gahHQAaBHBzA3IAIAEQCeBJDfAAQDdgBCdhGIADgCQB7g4AbhKQAGAQABASIAAAVQgIBfiVBEIgDACIAAAEQidBHjdAAQjfAAiehIgAklxVQh4AvAABDQAABDB4AuQB4AwCqAAQCpAAB4gwQB4guAAhDQAAhDh4gvQh4gvipAAQiqAAh4Avg");
	this.shape_6.setTransform(54.275,122.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Соленоид, new cjs.Rectangle(-1,-1,110.6,247.7), null);


(lib.РеостатПолзунок = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACLAtIjFArIg8kMIgUCLIA7EIAg5BdIgTCBICyglACLAtIgUCIAhri2IC6goIA8EL");
	this.shape.setTransform(13.925,22.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AiAhwIALgCIC6gpIA8EMIjFArg");
	this.shape_1.setTransform(14.925,15.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiKg+IAUiLIA8EMIDFgrIgUCIIgRADIiyAmIATiCIgTCCIgDABg");
	this.shape_2.setTransform(13.925,24.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.РеостатПолзунок, new cjs.Rectangle(-1,-1,29.9,46.7), null);


(lib.Реостат = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFCC").ss(5,1,1).p("AhIjOQArgUAigdQABgBARgOQAKgJAIgFQATgMAcgGAhXD8QAOAHAdAQQAgARAGACQAiANAjgF");
	this.shape.setTransform(225.25,278.6818);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006600").ss(2,1,1).p("AooDCQBVhpA5hFQBGhWAygpQBLg9BNgFQA2gDBDAZQAnAOBNAkQB4A1BQgYQAVgHATgLQAPgKAVgUIAFgFIAegdQAvgqAoADQAFABAFABQASAEAOAQQAKALADAMQACAKgDAK");
	this.shape_1.setTransform(160.6194,315.565);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Aw/IlQB2gwCDh9QBKhHCPiWQB+h3CKgwQCig5CAA+QAZALBwBSQBTA7A+AFQA/AEA9gkQA2ghArg6QAegpAjhGQATgoAmhPQAZgtAegqQAdgoAiglQBGhMBVg4QA3gkAygKQA+gLAnAiQAsAmgHBrQgBACAAACQgEA5AAAXQAAAEAAACQABAwASAf");
	this.shape_2.setTransform(108.8,278.9813);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABhgqQAYAAAaALIBADkQABAEACAEQAQA9ASA9QAAACABACIBzGdIAEANAAmgZQAbgSAgABIEJOZIAogBIgZhZQgEgOgEgOQAAgCgBgCAB8HrIACAHADFIxIg2i2IALgCIh0mSQgbARgWAhICHHSIACAHIB0GNQAdgHAegDIiTn8AqQymQgCgDAAgDAOWTfIgehpMgNHgoSQm+h/kqDrQh9BhhjChMAJLAgoIB5GtIAOAjAOXToIABgBIgCgHADMKHIABAFAFtLoIADANAgKRVIAJAh");
	this.shape_3.setTransform(203.4,148.1442);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AmwE/QgagWgVgZQAVgGASgMQAQgKAVgUIAFgEQAdAmAqAiQCKBxDBgBQDDABCKhxQCJhwAAigQAAieiJhxQhghOh7gYQgcgXgmAAQgcAAgWANQh/AAhnAxQg1AaguAlQgTAQgQAQQhnBnAACIQAABvBDBZIgFAEQgVAUgQAKQgSAMgVAGQgxg3gVhBQgZhGAJhSIACgOQAYinCZh5IAUgQQBDgxBMgfQA3gXA7gNQAdgGAegDQAegEAegCIAlgBIADAAQDpABCXCDQBCA6AhBEIADAFIAeBqIAAABIABAHQADAkgEAlQgUC7izCEQi0CEjpAAQjrAAiXiEgAjgmKQgEA6AAAWQAAgWAEg6IABgEIgBAEgAAKnBIAogBgAAPFAQgPgRgBgaIAAgBQAAgZAQgTQARgSAZAAQAYAAARASQAQARABAWIAAAFQAAAagRASQgRASgYAAQgZAAgRgSgAmODcIAAAAgAAQjlIgBgBQgQgSAAgaQAAgZAQgTQARgSAZAAQAYAAARASQARATAAAZQAAAagRASIgFAEQgPAOgVAAQgYAAgRgRg");
	this.shape_4.setTransform(238.5548,281.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AB/PJQgdgeAAgrIAAgFQABgoAcgdQAfgeArAAQArAAAeAeQAZAZAFAiIABAPQgBArgeAeQgeAegrAAQgrAAgfgegACkNSQgRATAAAZIAAACQABAZAQARQARASAZAAQAYAAAQgSQASgSAAgaIAAgEQgBgXgRgRQgQgSgYAAQgZAAgRASgAKtGvQAXAyAHA3gAB/GiQgLgMgHgNQgLgWAAgaQAAgrAdgfQALgKANgHQAWgNAcAAQAmAAAcAXIAHAHQAeAfABArQgBAfgQAYQgFAJgJAJQgeAegrAAQgrAAgfgegACkErQgRATAAAZQAAAaARASIABABQAQARAZAAQAVAAAPgNIAEgFQASgSAAgaQAAgZgSgTQgQgSgYAAQgZAAgRASgApPpTIgFgEQgEgFABgGIAAgDQADgIAIgHIAIgFIAAArQgGgBgFgEgApFupIABgGIAAAQQgBgFAAgFgArKvmIAgAAIgJACIgDABIgGAAQgIAAgGgDg");
	this.shape_5.setTransform(223.7,219.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgtgrIh0mTQAcgSAfABIEIOaQgfABgeAEg");
	this.shape_6.setTransform(223.35,190.1974);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUVkQgqgigdgmQhDhZAAhvQAAiJBnhnQAQgQATgPQAugmA0gZIAAAGQACAwASAfQgSgfgCgwIAAgGQBogyCAAAQgNAHgLAKQgeAfAAArQAAAaAMAWQhlANhNA5QhmBKAABpQAABIAvA5IgKgBIgFAAIAAAAIgCAAQgjAAgqAkIgCACIAAABIgeAdIAegdIAAgBIACgCQAqgkAjAAIACAAIAAAAIAFAAIAKABQASAXAbAVIAAAJIgBALIABgLIAAgJIAKAHQBIA1BeAQIAAAFQAAArAeAeQAfAeArAAQArAAAegeQAegeAAgrIgBgPQBDgTA3goQBmhKAAhqQAAhphmhKQg9gthMgSQAQgYAAgfQAAgrgegfIgIgHQB7AYBgBPQCKBwAACfQAACgiKBwQiKBxjCAAQjDAAiJhxgADZVYIARgBIACAAIAAAAIAAAAIACgBIgCABIAAAAIAAAAIgCAAIgRABIgBAAIAAAAQgZAAgXgJQgHgDgggQIgqgYIAqAYQAgAQAHADQAXAJAZAAIAAAAIABAAgAguOFIgJghgADXMMQgHAEgLAJIgSAQQgjAdgqATQAqgTAjgdIASgQQALgJAHgEQATgNAcgGQgcAGgTANgABQUFIAAAAgAAjTZIAAAAgABOMGIAAAAgABSEBIgCgGIiHnSQAXgiAagRIB0GSICSH8QgeADgdAHgACgGbIgBgFgABjCKIA2C2Ig2i2IALgCIgLACgAA0kbQAYAAAaALIBBDlIACAIIAiB5IABAEIB0GdIAEANIABAEIAIAcIAZBZIgDAAIgmABgAFEIEgAFAH3IAAAAIAEANgAkuEuIgGgEQgDgFABgGIAAgDQADgIAIgHQAJgHAMgCIACAAIADAAQAMgBAHAFQAKAGgBAKIAAABIgBACQgBAEgEAFIgFAFQgJAHgMACIgDABIgFAAQgLAAgGgFgABQD7IACAGIAAAAgABQD7gAjuCoQgFgDgDgFQgFgIABgKIABgGQADgNAMgLQAOgNAUgDIACAAIAFgBQARgBAMAIQAOAKgBARIAAACIgBAEQgCAIgFAHIgJAJQgNANgSADIgFABIgJABQgPAAgKgJgAlvBSIgGgFQgDgFABgFIAAgEQADgHAIgHQAJgIAMgBIACAAIADgBQAMAAAHAEQAKAGgBAKIAAABIgBACQgBAFgEAEIgFAGQgJAHgMACIgDAAIgFABQgLAAgGgFgAksgvQgFgDgDgFQgFgIABgKIABgGQADgNAMgLQAOgNAUgDIACAAIAFgBQARgBAMAIQAOAKgBARIAAACIgBAEQgCAIgFAHIgJAJQgNANgSADIgFABIgJABQgPAAgKgJgAmlh4IAAgrQAGgDAHgBIACAAIADAAQAMgBAHAFQAKAGgBAKIAAABIgBACQgBAEgEAFIgFAFQgJAHgMACIgDABIgGAAIgFAAgAlhjuQgFgDgDgFQgDgGgBgHIAAgFIABgGQADgJAHgJIAGgGQAOgNATgDIADAAIAEgBQASgBAMAIQAOAKgCARIAAACIAAAEQgCAIgGAHIgJAJQgNANgRADIgFABIgJABQgPAAgLgJgAntk8IgFgEQgDgFAAgGIABgDQACgIAIgHQAJgHANgCIACAAIADAAQALgBAIAFQAJAGgBAKIAAABIAAACQgBAEgEAFIgGAFQgJAHgLACIgDABIgGAAQgKAAgHgFgAmam5QgFgEgDgEIgCgFIgBgDIAAgQQADgNAMgMQAOgNAUgDIACAAIAFAAQARgCAMAIQAOALgBARIAAACIgBADQgCAIgFAIIgJAJQgGAGgIAEQgIAEgJACIgFAAIgJABQgPAAgKgIgAoroQIgDgCIgFgEQgDgFAAgGIABgDQACgIAIgHQAJgHANgCIACAAIADAAQALgBAIAFQAJAGgBAKIAAABIAAACQgBAEgEAFIgGAFQgFAEgGADgAnOp1QgFgDgDgFQgFgIABgKIABgGQADgNAMgLQAOgNAUgDIACAAIABAAIAEgBQARgBAMAIQAOAKgBARIAAACIgBAEQgCAIgFAHIgJAJQgNAMgQAEIgCAAIgFABIgJABQgPAAgKgJgAplrDIgFgEQgDgFAAgGIABgDQACgIAIgHQAJgHANgCIACAAIADAAQALgBAIAFQAJAGgBAKIAAABIAAACQgBAEgEAFIgGAFQgJAHgLACIgDABIgGAAQgKAAgHgFgAoGs0QgFgDgDgFQgFgIABgKIABgGQADgNAMgLQAOgNAUgDIACAAIAFgBQARgBAMAIQAOAKgBARIAAACIgBAEQgCAIgFAHIgJAJQgNANgSADIgFABIgJABQgPAAgKgJgAqmuZIgFgEQgDgFAAgGIABgDQACgIAIgHQAJgHANgCIACAAIADAAQALgBAIAFQAJAGgBAKIAAABIAAACQgBAEgEAFIgGAFQgJAHgLACIgDABIgGAAQgKAAgHgFgAo9wCQgFgDgDgFQgFgIABgKIABgGQADgNAMgLQAOgNAUgDIACAAIAFgBQARgBAMAIQAOAKgBARIAAACIgBAEQgCAIgFAHIgJAJQgNANgSADIgFABIgJABQgPAAgKgJgArcxFIgFgFQgDgFAAgFIABgEQACgHAIgHQAJgIANgBIACAAIADgBQALAAAIAEQAJAGgBAKIAAABIAAACQgBAFgEAEIgGAGQgJAHgLACIgDAAIgGABQgKAAgHgFgApxy3QgFgEgDgEQgFgIABgKIABgGQADgNAMgMQAOgNAUgDIACAAIAFAAQARgCAMAIQAOALgBARIAAACIgBADQgCAIgFAIIgJAJQgNAMgSAEIgFAAIgJABQgPAAgKgIgAsEzxIgGgFQgDgFABgFIAAgEQADgHAIgHQAJgIAMgBIACAAIADgBQAMAAAHAEQAKAGgBAKIAAABIgBACQgBAFgEAEIgFAGQgJAHgMACIgDAAIgFABQgLAAgGgFgAqz2LQgFgDgDgFIgCgEIgCgGIAAgIIABgGQADgNAMgLQAOgNAUgDIACAAIAFgBQARgBAMAIQAOAKgBARIAAACIgBAEQgCAIgFAHIgJAJQgNANgSADIgFABIgJABQgPAAgKgJg");
	this.shape_7.setTransform(207.8464,172.2132);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("ACWXBIgKgHQgbgVgSgXQgwg5ABhIQgBhpBnhKQBNg5BlgNQAHANALAMQAfAeArAAQArAAAegeQAJgJAFgJQBMASA9AtQBmBKAABpQAABqhmBKQg3AohCATQgFgigZgZQgegegrAAQgrAAgfAeQgcAdgBAoQhfgQhIg1gACAWjQAKALACAMQgCgMgKgLQgPgQgSgFQASAFAPAQgAjDVrIh5mtQAdgpAjglQBFhLBVg5QA2gkAygJQA+gMAnAjQAlAgAABTIAAAdQhMAfhDAxIgTAQQiZB6gYCmIgCAPQgJBSAYBHgAOFQ0QghhEhCg6QiXiDjpgBIgZhZIgIgcIgBgEIgEgNIAAAAIh0mdIgBgEIgih6IgCgIIhAjkQgagLgZAAQgfgBgbASQgbARgXAiICIHRIACAHIAAAAIBzGNQg6AMg3AXIAAgdQAAhTglggQgngjg+AMQgyAJg2AkQhVA5hFBLQgjAlgdApMgJLggoQBjihB8hhQErjrG+B/MANHAoSIgDgGgAjvHCQgIAHgCAIIgBADQgBAGADAFIAGAEQAJAGANgBIAEgBQALgCAJgHIAFgFQAFgFAAgEIABgCIAAgBQABgKgKgGQgHgFgMABIgCAAIgDAAQgMACgJAHgAiuElQgMALgDANIgBAGQAAAKAEAIQADAFAFADQANALAWgDIAEgBQASgDANgNIAJgJQAGgHABgIIABgEIAAgCQABgRgOgKQgLgIgSABIgFABIgCAAQgUADgOANgAkwDmQgIAHgCAHIgBAEQAAAFADAFIAFAFQAJAGANgCIADAAQAMgCAJgHIAFgGQAFgEABgFIAAgCIAAgBQABgKgJgGQgIgEgLAAIgEABIgCAAQgMABgJAIgAjsBNQgLALgEANIgBAGQgBAKAFAIQADAFAFADQANALAWgDIAEgBQASgDANgNIAJgJQAFgHADgIIAAgEIAAgCQABgRgOgKQgLgIgSABIgFABIgCAAQgUADgOANgAlpARIgIAFQgIAHgDAIIAAADQgBAGAEAFIAFAEQAFAEAGABIAMAAIACgBQAMgCAJgHIAFgFQAEgFACgEIAAgCIAAgBQABgKgJgGQgIgFgLABIgEAAIgCAAQgHABgGADgAkghxIgGAGQgHAJgCAJIgBAGIAAAFQAAAHADAGQADAFAFADQAOALAVgDIAFgBQARgDAOgNIAJgJQAFgHACgIIABgEIAAgCQABgRgOgKQgMgIgSABIgEABIgDAAQgTADgOANgAmtioQgJAHgCAIIAAADQgBAGADAFIAGAEQAIAGAOgBIADgBQAMgCAJgHIAFgFQAEgFABgEIABgCIAAgBQAAgKgJgGQgHgFgMABIgDAAIgCAAQgMACgJAHgAlak9QgMAMgDANIgBAGQAAAFABAFIABADIACAFQADAEAFAEQANAKAWgDIAEAAQAJgCAIgEQAIgEAGgGIAJgJQAFgIACgIIABgDIAAgCQABgRgOgLQgLgIgSACIgFAAIgCAAQgUADgOANgAnul+QgJAHgCAIIgBADQAAAGADAFIAFAEIADACQAIAEAMgBIADgBIAJgCQAGgDAFgEIAGgFQAEgFABgEIABgCIAAgBQABgKgKgGQgHgFgMABIgDAAIgCAAQgNACgIAHgAmOn4QgLALgEANIgBAGQgBAKAFAIQADAFAFADQANALAWgDIAEgBIACAAQAQgEANgMIAJgJQAFgHADgIIAAgEIAAgCQABgRgOgKQgLgIgSABIgEABIgBAAIgCAAQgUADgOANgAolovQgJAHgCAIIgBADQAAAGADAFIAFAEQAJAGAOgBIADgBQALgCAJgHIAGgFQAEgFABgEIABgCIAAgBQABgKgKgGQgHgFgMABIgDAAIgCAAQgMACgJAHgAnGq3QgMALgDANIgBAGQAAAKAEAIQADAFAFADQANALAWgDIAEgBQASgDANgNIAJgJQAFgHACgIIABgEIAAgCQABgRgOgKQgLgIgSABIgFABIgCAAQgUADgOANgApnsFQgHAHgDAIIgBADQAAAGADAFIAFAEQAJAGAOgBIADgBQALgCAJgHIAGgFQAEgFABgEIAAgCIAAgBQACgKgKgGQgIgFgLABIgDAAIgCAAQgNACgJAHgAn9uFQgMALgDANIgBAGQAAAKAEAIQADAFAFADQAOALAUgDIAFgBQASgDANgNIAJgJQAFgHACgIIABgEIAAgCQACgRgOgKQgNgIgRABIgFABIgCAAQgTADgPANgAqduxQgHAHgDAHIgBAEQAAAFADAFIAGAFQAIAGAOgCIADAAQALgCAJgHIAGgGQAEgEABgFIAAgCIAAgBQACgKgKgGQgIgEgLAAIgDABIgCAAQgNABgJAIgAoxw7QgMAMgDANIgBAGQAAAKAEAIQADAEAFAEQANAKAWgDIAEAAQASgEANgMIAJgJQAGgIABgIIABgDIAAgCQABgRgOgLQgLgIgSACIgFAAIgCAAQgUADgOANgArFxdQgIAHgCAHIgBAEQAAAFADAFIAFAFQAJAGANgCIADAAQAMgCAJgHIAFgGQAFgEABgFIAAgCIAAgBQABgKgJgGQgIgEgLAAIgEABIgCAAQgMABgJAIgApy0OQgNALgDANIgBAGIAAAIIACAGIACAEQADAFAFADQAOALAUgDIAGgBQARgDANgNIAJgJQAFgHACgIIABgEIAAgCQACgRgOgKQgNgIgRABIgFABIgCAAQgTADgOANgACQNmIAAAAg");
	this.shape_8.setTransform(201.8,154.1442);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Реостат, new cjs.Rectangle(-1,-1,297.4,337), null);


(lib.Монтажный_кадр_1_латрРучка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// латрРучка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(2,1,1).p("AA4gCIhPADIgfAC");
	this.shape.setTransform(129.1,48.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(1,1,1).p("ABOAAQAAAPgWAKQgXALghAAQggAAgWgLQgXgKAAgPQAAAAAAgDQADgMAUgKQAWgKAgAAQAhAAAXAKQAWALAAAOg");
	this.shape_1.setTransform(134.475,48.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhpggQABgOAMgMIArgXQAWgGAbAAQAsAAAfAQQAbAPAEATQABAEAAAEQAAAAAAABIAUA/ABdAAIAiAjIAEAOQgBANglANQgKADgKADQgVAGggABQgHAAgFAAQgUgBgUgDQgWgDgMgCQgDgBgDAAQgWgEgMgGQgFgDgEgDABdAAQgIAFgKAGQgDACgDABQgbANgjABQgEAAgDAAQgZAAgWgGQgPgEgMgHQgFgDgEgDQgJgFgGgHQgHgKAAgLIgZBNQAGAHAJAGAAHAcIABA8AgvAWIgTA5AhTAFIggA5ABFAOIAYA9ABrgcQgBAPgNAN");
	this.shape_2.setTransform(134.15,51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("AAAA6QgZAAgWgGQgPgEgMgHIgJgGQgJgFgGgIQgHgKAAgLIAAgBIAAgCIAfgCIAAAEQAAAOAXAKQAWALAgAAQAhAAAXgLQAWgKAAgOQAAgPgWgKQgXgLghAAQggAAgWALQgUAJgDAMIgfACQABgOAMgMIArgWQAWgHAbAAQAsAAAfAQQAaAPAFAUIAAAGIAAABQAAAPgOANQgHAGgKAGIgGADQgbANgkABIgGAAgAgzAYQgXgKAAgOIAAgEIBPgDIhPADQADgMAUgJQAWgLAgAAQAhAAAXALQAWAKAAAPQAAAOgWAKQgXALghAAQggAAgWgLgABRAAIAAAAg");
	this.shape_3.setTransform(134.175,48.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAIA6IgBg6IABA6QgVgBgTgCIghgFIASg4IgSA4IgGgBQgXgEgMgHIgJgGIAgg3IggA3QgJgGgGgGIAZhOQAAAMAHAKQAGAHAJAGIAJAGQAMAHAPAEQAWAFAZABIAHAAQAjgCAbgNIAGgCQALgHAGgGIAjAjIAEAPQgBANgmANIgXg9IAXA9IgTAGQgWAFgfABIgMAAgAB/AFgABcgeQAOgMABgQIAUA/g");
	this.shape_4.setTransform(134.15,54.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0033").ss(2,1,1).p("AAxAIIhEgLIgdgE");
	this.shape_5.setTransform(129.825,47.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AhpggQABgJAEgIQADgEAFgFIArgXQAWgGAbAAQAsAAAfAQQAbAPAEATQABAEAAAEQAAAAAAABIAUA/ABdAAIAiAjIAEAOQgBANglANQgKADgKADQgVAGggABQgHAAgFAAQgUgBgUgDQgWgDgMgCQgDgBgDAAQgWgEgMgGQgFgDgEgDABFAOQgbANgjABQgEAAgDAAQgZAAgWgGQgPgEgMgHQgFgDgEgDQgJgFgGgHQgHgKAAgLIgZBNQAGAHAJAGABdAAQgIAFgKAGQgDACgDABIAYA9AAHAcIABA8AgvAWIgTA5AhTAFIggA5ABrgcQgBAPgNAN");
	this.shape_6.setTransform(134.15,51.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#663300").ss(1,1,1).p("ABOAAQAAAPgWAKQgXALghAAQggAAgWgLQgXgKAAgPQAAAAAAgDQABgGAGgFQACgCACgCQAFgDAHgEQAWgKAgAAQAhAAAXAKQAWALAAAOg");
	this.shape_7.setTransform(134.475,48.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996633").s().p("AAAA6QgZAAgWgGQgPgEgMgHIgJgGQgJgFgGgIQgHgKAAgLIAAgBIAAgCQAAgJAFgIIAIgJIArgWQAWgHAbAAQAsAAAfAQQAaAPAFAUIAAAGIAAABQAAAPgOANQgHAGgKAGIgGADQgbANgkABIgGAAgAhKAAQAAAOAXAKQAWALAgAAQAhAAAXgLQAWgKAAgOQAAgPgWgKQgXgLghAAQggAAgWALIgMAGIgdgEIAdAEIgEAEQgGAFgBAGIAAAEIAAAAgAgzAYQgXgKAAgOIAAgEQABgGAGgFIAEgEIBFAMIhFgMIAMgGQAWgLAgAAQAhAAAXALQAWAKAAAPQAAAOgWAKQgXALghAAQggAAgWgLgABRAAIAAAAgAg/gTg");
	this.shape_8.setTransform(134.175,48.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0033").ss(2,1,1).p("AAjAPIgygVIgTgI");
	this.shape_9.setTransform(131.725,46.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#663300").ss(1,1,1).p("ABRAAQAAAPgXAKQgYAKgiAAQghAAgXgKQgYgKAAgPQAAAAAAgCQADgMAVgKQAEgBAEgCQAVgHAbAAQAiAAAYAKQAXALAAANg");
	this.shape_10.setTransform(135.025,48.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AhtgfQABgOAMgLIAtgWQAXgHAcAAQAtAAAhARQAbAOAEATQABADAAAEQAAAAAAABIAaBKQgBAHgJAGQgJAGgTAGQgBABgCAAQgJADgLADQgNADgQACQgMABgOAAQgGAAgGAAQgVAAgUgDQgGgBgFAAQgPgCgJgCQgEgBgCAAQgNgCgKgDQgIgCgFgDQgFgDgFgDQgFgDgFgEABogIIAWBEABogIQgEAEgEAEQgHAFgLAGQgDABgEACQgHADgJADQgPAEgRACQgIABgIAAQgEAAgDAAQgYAAgVgFQgCAAgCgBQgPgEgNgGQgFgDgEgDQgGgEgFgDQgCgCgCgDQgIgJAAgLIgaBKQACADADADAAXAaIAXA6AhhgCIghA3AhNAOIgUA5AgtAWIABA7AA3AUIArA0ABugbQAAAKgGAJ");
	this.shape_11.setTransform(134.725,51.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996633").s().p("AAAA4QgYAAgVgEIgEgBQgPgFgNgGIgJgGIgLgIIgEgEQgIgKAAgLIAAgBIAAgCQABgOAMgLIAtgWQAXgGAcAAQAtAAAhAQQAbAOAEATIABAGIAAABQAAAKgGAJIgIAIQgHAGgLAGIgHADIgQAHQgPADgRACIgQABIgHAAgAhNAAQAAAOAYAKQAXAKAhAAQAiAAAYgKQAXgKAAgOQAAgOgXgLQgYgKgiAAQgbAAgVAHIgTgJIATAJIgIADQgVAJgDANIAAADIAAAAgAg1AYQgYgKAAgOIAAgDQADgNAVgJIAIgDIAyAWIgygWQAVgHAbAAQAiAAAYAKQAXALAAAOQAAAOgXAKQgYAKgiAAQghAAgXgKgABUAAIAAAAgAgtgcg");
	this.shape_12.setTransform(134.725,48.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAIA5QgVgBgUgDIgLgBIgYgDIgGgBQgNgCgKgDIgNgGIgKgFIgKgIIgFgFIAahLQAAALAIAKIAEAFIghA2IAhg2IALAHIAJAGQANAHAPAEIAEABIABA5IgBg5QAVAFAYAAIAHAAIAQgBQARgCAPgEIArAzIgDABIgUAGQgNADgQACIgXg5IAXA5IgaABIgMAAgAhhArIAUg5gABiAsIgrgzIAQgHIAHgDQALgGAHgGIAIgIIAWBFIgWhFQAGgJAAgKIAaBLQgBAGgJAHQgJAGgTAGgAgtgFIAAAAgAA3gHgAhhgeIAAAAg");
	this.shape_13.setTransform(134.725,54.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0033").ss(2,1,1).p("AAUAUIgagaIgNgN");
	this.shape_14.setTransform(132.3,45.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#663300").ss(1,1,1).p("ABLAAQAAAOgWAJQgWAKgfAAQgeAAgWgKQgWgJAAgOQAAgBAAgBQACgMAUgJQADgCAEgBQAKgDALgCQAMgCAMAAQAfAAAWAKQAWAKAAANg");
	this.shape_15.setTransform(134.125,48.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AhlgeQABgNALgKIAqgVQAVgHAaAAQArAAAeAQQAZANADASQACAEAAADIAAABIATA7IAEAMQgBANglAMQgIADgKADQgVAFgeABQgGAAgFAAQgUgBgTgDQgVgCgLgCQgEgBgCAAQgVgEgMgGQgFgDgEgCABZAAIAhAhAAGAaQgDAAgDAAQgYAAgVgGQgOgDgMgHQgFgCgEgDQgJgFgFgGQgHgKAAgKIgYBHQAFAHAJAGABZAAQgGAFgKAFQgEACgDABQgaAMgiABIACA4AgtAUIgSA2AhQAFIgfA1ABCANIAWA5ABngaQgBAOgNAM");
	this.shape_16.setTransform(133.8,51.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996633").s().p("AAAA2QgYAAgVgGQgOgDgMgHIgJgFQgJgGgFgGQgHgKAAgKIAAgBIAAgCQABgNALgKIAqgVQAVgHAaAAQAqAAAeAQQAZANAEASIABAGIAAABQAAAOgNAMQgHAGgKAFIgGADQgaAMgiABIgGAAgAhHAAQAAANAWAKQAWAKAeAAQAfAAAWgKQAWgKAAgNQAAgNgWgLQgWgJgfAAQgMAAgMABIgNgNIANANQgLACgKAEIgHACQgUAJgCAMIAAADIAAAAgAgxAXQgWgKAAgNIAAgDQACgMAUgJIAHgCQAKgEALgCIAaAbIgagbQAMgBAMAAQAfAAAWAJQAWALAAANQAAANgWAKQgWAKgfAAQgeAAgWgKgABOAAIAAAAgAgVggg");
	this.shape_17.setTransform(133.825,48.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAIA2IgBg2QAhgBAbgMIAFgDQAKgGAHgFQANgMABgPIATA8IghghIAhAhIAEAMQAAAMgmANIgVg4IAVA4IgSAFQgVAGgeAAIgLAAgAgeAzIghgFIASg0IgSA0IgGgBQgVgDgMgHIgIgFIAegzIgeAzQgKgFgFgHIAYhIQAAALAHAJQAGAHAIAGIAJAFQAMAHAOADQAVAFAYABIAHAAIABA2QgUAAgSgDg");
	this.shape_18.setTransform(133.8,54.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0033").ss(2,1,1).p("AAUAVIgagbIgNgO");
	this.shape_19.setTransform(132.125,45.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AhmggQABgNALgMIArgWQAVgIAaAAQArAAAeASQAZAOAFATQAAADAAAFIAAAAIAUA/IAFAOQgBANgmANQgIADgKADQgWAFgeACQgGAAgFAAQgUgCgTgCQgVgDgMgCQgEgBgCAAQgVgEgNgGQgEgDgEgDABaAAIAhAjAAHAcQgEAAgDAAQgZAAgVgGQgOgEgMgHQgFgCgEgDQgJgGgFgHQgHgKgBgLIgYBNQAGAHAJAGABaAAQgHAGgKAFQgDACgDABQgaANgiABIABA8AguAWIgSA5AhRAGIgfA4ABDAOIAWA9ABngcQAAAPgNAN");
	this.shape_20.setTransform(133.65,50.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#663300").ss(1,1,1).p("ABMAAQAAAOgWALQgWALggAAQgfAAgWgLQgWgLAAgOQAAAAAAgDQACgMAUgKQADgCAFgBQAKgEAKgBQAMgCANAAQAgAAAWAKQAWALAAAOg");
	this.shape_21.setTransform(133.975,47.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAHA6IgBg6QAjgBAagNIAGgDQALgGAGgGQANgNAAgPIAUA/IghgjIAhAjIAFANQgBAOgmANIgWg8IAWA8IgSAGQgWAFgeABIgMAAgAgfA2IghgEIASg4IgSA4IgGgBQgVgEgMgHIgJgFIAfg4IgfA4QgJgHgGgHIAYhMQABALAHAKQAFAHAJAGIAJAGQAMAHAOAEQAWAGAYAAIAGAAIABA6QgTgBgTgDg");
	this.shape_22.setTransform(133.65,53.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#996633").s().p("AAAA6QgYAAgWgGQgOgEgMgHIgJgGQgJgGgFgHQgHgKgBgLIAAgBIABgCQABgOALgLIAqgXQAWgHAaAAQArAAAeARQAaAOAEAUIAAAGIAAABQAAAPgNANQgGAGgLAGIgGADQgaANgjABIgGAAgAhIAAQAAAOAWAKQAXALAeAAQAgAAAWgLQAWgKAAgOQAAgOgWgLQgWgLggAAQgNAAgMACIgMgOIAMAOQgKACgKAEIgIADQgTAJgDANIAAADIAAAAgAgyAYQgWgKAAgOIAAgDQADgNATgJIAIgDQAKgEAKgCIAbAdIgbgdQAMgCANAAQAgAAAWALQAWALAAAOQAAAOgWAKQgWALggAAQgeAAgXgLgABPAAIAAAAgAgWgig");
	this.shape_23.setTransform(133.65,47.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0033").ss(2,1,1).p("AgMAWIARgdIAIgO");
	this.shape_24.setTransform(135.875,46.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#663300").ss(1,1,1).p("ABQAAQAAAPgXAKQgYALghAAQghAAgXgLQgXgKAAgPQAAgBAAgBQADgNAUgJQADgCAEgBQAUgIAbAAQACAAAAAAQAJAAAIABQAWACASAIQAXAKAAAOg");
	this.shape_25.setTransform(134.675,48.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AhrgfQABgOALgLIAtgXQAXgHAbAAQAtAAAgARQAbAOAEAUQABADAAAEIAAABIAVA+IAEAOQAAANgnANQgJADgLADQgWAGghAAQgGAAgGAAQgVAAgUgDQgWgDgMgCQgEgBgCAAQgXgEgNgHQgFgCgEgDABfAAQgHAGgLAFQgDACgDABQgcANgkABIABA7ABfAAIAjAjAAHAcQgDAAgEAAQgaAAgWgGQgPgEgNgHQgFgCgEgDQgKgGgFgGQgHgKgBgLIgZBMQAGAHAJAGAgwAWIgTA5AhVAGIghA4ABHAOIAYA9ABtgbQAAAPgOAM");
	this.shape_26.setTransform(134.325,51.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#996633").s().p("AAAA5QgaAAgWgFQgQgEgMgHIgJgGQgKgGgFgHQgHgKgBgLIAAAAIAAgDQABgNAMgMIAtgWQAXgHAbAAQAtAAAgAQQAaAPAFATIABAHIAAAAQAAAPgOANQgIAGgKAGIgHADQgbAMgkABIgHAAgAhMAAQAAAOAXALQAYAKAgAAQAiAAAXgKQAYgLAAgOQAAgOgYgLQgRgIgXgCIAIgOIgIAOIgRAAIgDAAQgaAAgUAHIgHADQgUAKgDAMIAAADIAAAAgAg1AZQgXgLAAgOIAAgDQADgMAUgKIAHgDQAUgHAaAAIADAAIARAAIgRAeIARgeQAXACARAIQAYALAAAOQAAAOgYALQgXAKgiAAQggAAgYgKgABUAAIAAAAgAAUgjIAAAAg");
	this.shape_27.setTransform(134.35,48.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAIA6IgBg7QAkgBAcgMIAYA7IgUAGQgWAGghABIgMAAgAghA2IgigFIATg3QAWAFAaAAIAHAAIABA7QgVgBgUgDgAhJAwQgXgDgNgHIgJgGIAhg3IghA3QgJgGgGgHIAZhMQABALAHAKQAFAHAKAGIAJAGQANAHAPAEIgTA3IgGgBgABfAtgABHgOIAGgDQALgGAHgGIAjAjIAEANQAAANgnANgABfgdQAOgNAAgPIAVA/g");
	this.shape_28.setTransform(134.325,54.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0033").ss(2,1,1).p("AgZATIAkgaIAPgL");
	this.shape_29.setTransform(137.975,45.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#663300").ss(1,1,1).p("ABRAAQAAAPgYAKQgXAKgiAAQghAAgXgKQgYgKAAgPQAAAAABgCQACgMAVgKQADgBAEgCQAUgHAbAAQACAAAAAAQAUAAAQADQAMACAJAFQAYAKAAAOg");
	this.shape_30.setTransform(135.475,48);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AhtgfQABgOAMgLIAtgXQAXgGAcAAQAtAAAgAQQAbAOAEAUQABADAAAEQAAAAAAABQAAAPgOAMQgHAFgLAGQgDACgDABQgWAKgbACQgCABgCAAQgGAAgFAAQgEAAgDAAQgPAAgOgBIAXA8QgOgBgNgCQgXgDgMgCQgEgBgCAAQgNgCgJgDAB5AFIAOArQgBANgnANQgJADgLADQgDABgDAAQgUAFgdAAQgHAAgFAAQgIAAgFAAQgBAAAAAAAB5AFIgTA/AgxAWQgPgEgNgHQgFgDgFgDQgFgDgEgDQgDgDgCgDQgIgJAAgLIgZBLQAFAHAKAGQAEADAFACQAGADAIADAgxAWIgTA4AhggBIAABJAgdAaQgLgCgJgCAAWAaIAvA3ABtgbIAMAg");
	this.shape_31.setTransform(135.175,51.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#996633").s().p("AAAA5QgPAAgOgCIgTgEQgPgEgNgHIgLgFIgJgHQgDgDgBgDQgJgKAAgLIAAgBIAAgCQACgNALgLIAtgXQAYgHAbAAQAtAAAhARQAbAOADATIABAGIAAABQAAAPgOANQgGAGgLAFIgHADQgVAKgbADIgFAAIgLABIgHAAgAhMAAQAAAOAXAKQAXALAhAAQAiAAAYgLQAXgKAAgOQAAgOgXgLQgKgEgMgDIAPgLIgPALQgQgDgUAAIgDAAQgZAAgVAIIgHACQgVAKgCAMIAAADIAAAAgAg1AYQgXgKAAgOIAAgDQACgMAVgKIAHgCQAVgIAZAAIADAAQAUAAAQADIglAcIAlgcQAMADAKAEQAXALAAAOQAAAOgXAKQgYALgiAAQghAAgXgLgABUAAIAAAAgAAnggIAAAAg");
	this.shape_32.setTransform(135.15,48.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAIA5IgNAAIgBAAIgXg7QAOABAPAAIAHAAIALAAIAEgBQAbgCAWgKIAGgDQALgGAHgGQAOgMAAgPIAMAhIgTA+IATg+IAOAqQgBANgnANIgUAGIgGABIgvg2IAvA2QgUAFgdAAIgMAAgAghA2IgjgFIATg3IgTA3IgGgBIgWgFIAAhJIAABJIgOgGIgJgFQgKgGgFgHIAZhLQAAALAIAJQACADADADIAJAHIAKAGQANAHAPAEIAUAEIAXA7IgbgDg");
	this.shape_33.setTransform(135.175,53.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0033").ss(2,1,1).p("AgfAPIAxgXIAOgH");
	this.shape_34.setTransform(138.375,46.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#663300").ss(1,1,1).p("ABPAAQAAAPgXALQgXAKghAAQggAAgXgKQgXgLAAgPQAAAAABgDQACgMAUgJQADgBAEgCQAUgHAbgBQABAAAAAAQATAAAQAEQAHABAHACQADACAEACQAXALAAANg");
	this.shape_35.setTransform(135.325,48.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AhqggQABgOAMgLIAsgXQAWgGAbAAQAsAAAgAQQAaAPAEATQABADAAAEQAAABAAAAIAUA/IAFANQgBAOgmAMQgJAEgLADQgWAFgfABQgHAAgFAAQgVgBgTgDQgWgCgMgCQgEgBgCAAQgWgEgNgHQgFgDgEgCABdAAIAiAjABFAOIAYA8ABdAAQgHAFgKAGQgEACgDABQgbANgjABIABA7AAHAcQgEAAgDAAQgaAAgVgGQgPgEgNgHQgFgDgEgDQgJgFgFgHQgIgKAAgLIgZBMQAGAHAJAHAgvAWIgTA5AhUAFIggA5ABrgcQgBAPgNAN");
	this.shape_36.setTransform(135.025,51.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#996633").s().p("AAAA6QgaAAgVgHQgPgEgNgGIgJgGQgJgGgGgHQgHgKAAgLIAAgBIAAgCQABgOAMgLIArgXQAXgGAbgBQAsAAAfARQAaAOAFAUIABAGIAAABQgBAPgOANQgGAGgLAGIgGACQgbAOgjABIgHAAgAhLAAQAAAOAXAKQAXALAgAAQAgAAAYgLQAWgKAAgOQAAgOgWgMIgHgDIANgGIgNAGQgHgCgHgBQgQgEgTAAIgDAAQgZAAgUAIIgHACQgUAKgCANIgBADIAAAAgAg0AYQgXgKAAgOIABgDQACgNAUgKIAHgCQAUgIAZAAIADAAQATAAAQAEQAHABAHACIgzAZIAzgZIAHADQAWAMAAAOQAAAOgWAKQgYALggAAQggAAgXgLgABRAAIAAAAgAA0gdIAAAAg");
	this.shape_37.setTransform(135.05,48.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAIA6IgBg6QAjgBAbgOIAHgCQAKgGAHgGIAiAjIAFANQgBAOgmAMIgYg8IAYA8IgUAHQgWAFgfABIgMAAgAggA2IgigFIATg4IgTA4IgGgBQgWgDgNgIIgJgEIAgg4IggA4QgJgHgGgHIAZhMQAAALAIAKQAFAHAJAGIAJAGQANAGAPAEQAVAHAaAAIAHAAIABA6QgVgBgTgDgABdAtgABdgdQANgNABgPIAUA/g");
	this.shape_38.setTransform(135.025,54.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0033").ss(2,1,1).p("AgNAAIATABIAIAA");
	this.shape_39.setTransform(29.95,15.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#663300").ss(1,1,1).p("AgTAAQAAAEAGADQAGADAIAAQAHAAAGgDQAGgDAAgEIAAAAQgBgDgFgDQgGgDgHAAQgIAAgGADQgGADAAADg");
	this.shape_40.setTransform(28.55,15.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AAbgIQAAgDgDgDIgLgGQgGgCgHAAQgKAAgIAEQgHAEgBAFQAAABAAABIgFAQIgBAEQAAAEAKADQACABADABQAFABAIABQACAAABAAQAFgBAFAAQAFgBADgBQABAAABAAQAGgBADgCQABgBABAAAgWAAIgJAJAgagHQAAAFAEACQABACADABQABABAAAAIgFAQAANAGIAEAPAAAAIQAAAAAAAAQAHAAAGgCQADgBADgCQACgBABAAQACgCACgBQABgDAAgDIAHAUQgCACgCACAgRAEQAIADAJABIgBAQAAWACIAIAP");
	this.shape_41.setTransform(28.65,16.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#996633").s().p("AAAAQQgKgBgGgEIgCAAIgFgDQgDgEAAgEIAAgBQABgGAHgDQAIgEAKgBQAHAAAGACIALAGQADADAAAEIgIAAQAAgDgGgDQgGgDgHAAQgIAAgGADQgGADAAADQAAADAGAEQAGADAIAAQAHAAAGgDQAGgEAAgDIAAAAIAIAAIAAAAIgBAGIgFAEIgCABIgHADQgFACgHAAIAAAAgAAAAKQgIAAgGgDQgGgEAAgDQAAgDAGgDQAGgDAIAAQAHAAAGADQAGADAAADIgTgBIATABIAAAAQAAADgGAEQgGADgHAAIAAAAgAgUAAIAAAAgAATAAg");
	this.shape_42.setTransform(28.65,15.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgEAQIgNgCIgGgCIAHgPQAGADAKAAIgBAQIgDAAgAAAAAIAAAAQAHAAAFgBIAFAOIgFgOIAHgDIACgBIAFgEIABgGIAHAUIgEAEIgJgOIAJAOIgCABQgEACgFABIgCAAIgIACIgKABgAgXAMQgKgDAAgEIACgEIAFgQQAAAFADADIgIAIIAIgIIAFADIACABIgHAPIAAAAgAAeAJg");
	this.shape_43.setTransform(28.65,17.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0033").ss(2,1,1).p("Ag1gCIBMADIAfAC");
	this.shape_44.setTransform(138.85,48.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#663300").ss(1,1,1).p("AhLAAQAAAOAWAKQAXAKAeAAQAgAAAWgKQAWgKAAgOQAAgBAAgBQgCgNgUgJQgWgKggAAQgeAAgXAKQgWALAAANg");
	this.shape_45.setTransform(133.575,48.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("ABogeQgBgOgLgKIgrgWQgWgHgbAAQgqAAgeAQQgZAOgFATQAAADAAAEIAAAAIgUA8IgFAOQABAMAmANQAIADALADQAUAFAfABQAGAAAGAAQAUgBASgDQAWgCALgCQAEgBACAAQAWgEAMgHQAFgCAEgDABTAFQAJgFAFgGQAHgKAAgLIAYBKQgGAGgIAGABTAFIAfA2AAvAVQAPgEALgGQAGgDAEgDAgFAbQADAAACAAQAaAAAVgGIASA3AgFAbIgBA5AhCAOIgWA6AhZAAQAHAFAKAGQADABADACQAbAMAiABAhZAAIghAhAhmgbQAAAPANAM");
	this.shape_46.setTransform(133.9,51.825);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgSA4QgfgBgVgFIgTgGIAXg5QAbAMAiABIAFAAQAaAAAVgGIASA2IghAEQgSADgUABIABg4IgBA4IgMAAgABBAwgAAvgGQAOgEAMgGIAJgGIAgA1Iggg1QAKgFAFgHQAHgKAAgLIAYBKQgGAGgIAGIgJAFQgNAHgVAEIgGABgAh/ATIAFgOIAhghQAGAGALAGIAGADIgXA5QglgNgBgMgAhmg3QAAAPANAMIghAhgAhCgNIAAAAg");
	this.shape_47.setTransform(133.9,54.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#996633").s().p("AgFA3QgigBgbgMIgGgDQgLgFgGgGQgNgMAAgPIAAgBIAAgGQAFgTAZgNQAegQAqAAQAbAAAWAGIAqAWQAMALABANIgfgBQgCgMgUgJQgWgKgfAAQgfAAgXAKQgWAKgBAOQABANAWAKQAXALAfAAQAfAAAWgLQAWgKAAgNIAAgDIAfABIAAACIAAABQAAALgHAJQgFAHgKAGIgJAFQgMAHgOAEQgVAFgaAAIgFAAgAgCAiQgfAAgXgLQgWgKgBgNQABgOAWgKQAXgKAfAAQAfAAAWAKQAUAJACAMIhMgEIBMAEIAAADQAAANgWAKQgWALgfAAIAAAAgAhPAAIAAAAgABJgDg");
	this.shape_48.setTransform(133.9,48.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0033").ss(2,1,1).p("AgyABIBKgBIAbAA");
	this.shape_49.setTransform(138.75,47.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#663300").ss(1,1,1).p("AhKABQAAAOAWAKQAWALAeAAQAfAAAWgLQAWgKAAgOQAAgBAAgCQgBgCgBgDQgCgFgGgEQgEgEgIgEQgWgKgfAAQgeAAgWAKQgWALAAAOg");
	this.shape_50.setTransform(133.825,48.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("ABmgfQgBgOgMgLIgpgWQgVgHgbAAQgpAAgeAQQgZAPgEATQgBADAAAEIAAAAIgTA+ABRAFQAIgFAGgHQAHgKAAgLIAYBMQgGAHgJAGABRAFIAeA4ABABOQADgBADgBQAVgDAMgHQAFgCADgDAAuAVQAOgDAMgHQAFgDAEgDAgFAbQADAAACAAQAaAAAUgGIASA5AhXBKQAIACAKAEQAVAFAeABQAGAAAGAAQATgBATgDQAUgCAMgCAgFAbIgBA7AhBAOIgWA8AhYAAQAHAFAKAGQADACADABQAZAMAjABAhYAAIggAiIgFAOQABANAlANAhlgcQABAPAMAN");
	this.shape_51.setTransform(134.125,51.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgSA5QgegBgVgFIgSgGIAWg7QAZAMAjABIAFAAQAaAAAUgFIASA3IggAEQgTADgTABIABg6IgBA6IgMAAgABAAxgAAugGQAOgEAMgHIAJgGIAeA3Igeg3QAIgFAGgHQAHgKAAgLIAYBLQgGAHgJAGIgIAFQgMAHgVAEIgGABgAh9ATIAFgOIAggiQAHAGAKAGIAGADIgWA7QglgNgBgNgAhlg4QABAPAMAMIggAigAhBgOIAAAAg");
	this.shape_52.setTransform(134.125,54.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#996633").s().p("AgFA4QgjAAgZgMIgGgEQgKgGgHgGQgMgMgBgPIAAAAIABgHQAEgTAZgPQAegPApAAQAbgBAVAHIApAXQAMALABAOIAAACIAAAAQAAALgHAKQgGAHgIAGIgJAFQgMAHgOAEQgUAFgaAAIgFAAgAgCAjQAeAAAWgLQAWgLAAgNIAAgDIgCgFIAbAAIgbAAQgCgFgGgEQgEgFgIgDQgWgKgeAAQgfAAgWAKQgWALAAAOQAAANAWALQAWALAfAAIAAAAgAgCAjQgfAAgWgLQgWgLAAgNQAAgOAWgLQAWgKAfAAQAeAAAWAKQAIADAEAFQAGAEACAFIhJACIBJgCIACAFIAAADQAAANgWALQgWALgeAAIAAAAgAhNAAIAAAAgABGgIIAAAAg");
	this.shape_53.setTransform(134.125,48.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0033").ss(2,1,1).p("AguADIBDgDIAagC");
	this.shape_54.setTransform(138.6,47.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#663300").ss(1,1,1).p("AhLAAQAAAOAWAKQAWAKAfAAQAfAAAXgKQAWgKAAgOQAAAAAAgDQgBgEgEgFQgBgBgBAAQgFgGgKgEQgXgKgfAAQgfAAgWAKQgWAKAAANg");
	this.shape_55.setTransform(133.625,48.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("ABngeQAAgIgFgIQgDgDgEgEIgrgWQgVgGgbAAQgqAAgfAQQgZANgEASQgBADAAAEIAAABIgUA7IgEANQABAMAlAMQAJADAKADQAVAGAfAAQAGAAAFAAQAUAAATgEQAVgCAMgCQADAAADgBQAVgDAMgHQAFgDAEgCABTAFQAIgFAFgHQAHgIAAgLIAZBIQgGAGgJAGABTAFIAeA1AAvAVQAOgEAMgHQAFgCAFgDAgGAaQAEAAACAAQAZAAAWgFIASA1AgGAaIgBA4AhZAAIgiAhAhDANIgWA5AhZAAQAHAFAJAFQADACADABQAbAMAiABAhngaQAAAOAOAM");
	this.shape_56.setTransform(133.9,51.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgSA3QgfgBgVgGIgTgFIAXg4QAaAMAjABIAFAAQAZAAAWgGIASA1IghAEQgSADgVABIACg3IgCA3IgLAAgABBAvgAAvgGQAOgEAMgGIAJgFIAgA0Iggg0QAJgGAFgHQAHgJABgLIAXBIQgFAHgIAGIgJAFQgNAGgVAEIgGABgAh/ASIAFgMIATg8QAAAPAOAMQAHAGAJAFIAHADIgXA4QglgMgBgNgAh6AGIAhghgAhCgNIAAAAg");
	this.shape_57.setTransform(133.9,53.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#996633").s().p("AgFA2QgjgBgagMIgGgDQgKgFgHgGQgNgMgBgOIAAgBIABgGQAFgSAZgNQAegQAqAAQAbAAAWAGIAqAWIAHAHQAFAIAAAIIABACIAAABQgBALgHAIQgFAHgIAGIgJAFQgNAHgOAEQgVAFgaAAIgFAAgAgCAhQAfAAAWgKQAXgKAAgNIgBgDQgBgEgEgFIAagCIgaACIgBgCQgGgFgKgFQgWgKgfAAQggAAgWAKQgWALAAANQAAANAWAKQAWAKAgAAIAAAAgAgCAhQggAAgWgKQgWgKAAgNQAAgNAWgLQAWgKAgAAQAfAAAWAKQAKAFAGAFIABACIhEAEIBEgEQAEAFABAEIABADQAAANgXAKQgWAKgfAAIAAAAgAhOAAIAAAAgABEgMIAAAAg");
	this.shape_58.setTransform(133.875,48.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0033").ss(2,1,1).p("Ag0AFIBMgGIAdgD");
	this.shape_59.setTransform(139.3,47.25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#663300").ss(1,1,1).p("AhQAAQAAAPAXAKQAYAKAhAAQAiAAAYgKQAYgKAAgPQAAgBgBgBQgBgGgFgFQgFgGgMgFQgYgLgiAAQghAAgYALQgXAKAAAOg");
	this.shape_60.setTransform(134.2,48.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("ABuggQgBgNgMgMIgtgWQgXgHgdAAQgtAAggARQgbAOgFATQgBADAAAFIAAAAIgVA+IgEAOQAAANAoANQAJADALADQAXAGAgAAQAHAAAGAAQAVAAAUgDQAXgDAMgCQAEAAADgBQAWgEANgGQAGgDAEgDABYAFIAhA4AAyAWQAPgEANgHQAFgDAFgDQAJgFAGgHQAHgKAAgLIAaBMQgGAHgJAGAAyAWIATA4AgGAcIgBA6AgGAcQADAAADAAQAbAAAXgGAhHAOIgYA8AhfAAQAHAFALAGQADACADABQAcAMAlACAhfAAIgkAiAhugcQABAPAOAN");
	this.shape_61.setTransform(134.525,51.45);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgUA6QgggBgXgGIgUgGIAYg7IgYA7QgogNAAgNIAEgOIAVg+QABAQAOAMIgkAiIAkgiQAHAGALAGIAGADQAcAMAlABIAGAAQAbABAXgGIATA4IgTg4QAPgFANgGIAKgGQAJgFAGgIQAHgJAAgMIAaBMQgGAIgJAFIghg3IAhA3IgKAGQgNAHgWADIgHACIgjAEQgUADgVABIABg7IgBA7IgNAAg");
	this.shape_62.setTransform(134.525,54.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#996633").s().p("AgGA5QglgBgcgNIgGgCQgLgHgHgFQgOgNAAgPIAAgBIABgGQAEgTAbgOQAggRAtAAQAdAAAXAHIAuAWQAMAMAAANIAAACIAAABQAAALgHAKQgGAHgJAFIgJAHQgNAGgQAEQgXAGgbAAIgGAAgAgCAiQAhABAXgLQAZgKAAgOIgBgDQgBgGgFgEIAcgDIgcADQgFgHgNgFQgXgLghAAQgiAAgYALQgXALAAAOQAAAOAXAKQAYALAigBIAAAAgAgCAiQgiABgYgLQgXgKAAgOQAAgOAXgLQAYgLAiAAQAhAAAXALQANAFAFAHIhMAGIBMgGQAFAEABAGIABADQAAAOgZAKQgXALghgBIAAAAgAhTAAIAAAAgABIgNIAAAAg");
	this.shape_63.setTransform(134.5,48.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF0033").ss(2,1,1).p("AgvAJIBGgMIAZgF");
	this.shape_64.setTransform(139.05,47.35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#663300").ss(1,1,1).p("AhTAAQAAAOAYAKQAZAKAiAAQAjAAAZgKQAYgKAAgOQAAgBAAgCQgCgJgNgHQgBgBgCAAQgDgCgDgCQgZgKgjAAQgiAAgZAKQgYALAAANg");
	this.shape_65.setTransform(134.375,48.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("ABygeQgBgOgMgKIgGgDIgpgTQgYgHgeAAQguAAgiAQQgcAOgEATQgBADAAAEIAAAAIgWA8IgFANQABANApANQAKADALADQAXAFAiABQAHAAAGAAABIBMQAEgBADAAQAXgEAOgHQAFgCAFgDABbAFIAjA2AA0AVQAQgEANgGQAGgDAEgDQAKgFAGgGQAHgKABgLIAaBJQgGAHgJAGAgGAbQAEAAACAAQAdAAAXgGIAUA3AgGAbIgBA5QAWgBAVgDQAXgCANgCAhJAOIgZA6AhiAAQAHAFALAGQAEABADACQAdAMAmABAhiAAIglAhAhxgbQAAAPAPAM");
	this.shape_66.setTransform(134.7,51.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgUA4QgigBgXgFIgVgGIAZg5IgZA5QgpgNgBgNIAEgNIAlghIglAhIAWg8QABAPAOAMQAIAGALAGIAHADQAdAMAmABIgBA4IABg4IAGAAQAcAAAYgGQAQgEANgGIAKgGQAJgGAGgGQAIgKABgLIAaBJQgGAHgKAGIgig1IAiA1IgJAFQgOAHgXAEIgHABIgUg2IAUA2IglAEQgUADgWABIgNAAg");
	this.shape_67.setTransform(134.7,54.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#996633").s().p("AgGA3QgmgBgdgMIgHgDQgLgFgIgGQgOgMgBgPIAAgBIACgGQAEgTAcgNQAigQAuAAQAeAAAXAGIAqAUIAFACQANALABANIABACIAAABQgBALgIAJQgGAHgJAGIgKAFQgNAHgQAEQgYAFgcAAIgGAAgAgCAiQAiAAAYgLQAZgKAAgNIgBgDQgBgJgNgHIAZgFIgZAFIgDgCIgHgDQgYgKgiAAQgkAAgYAKQgZAKAAAOQAAANAZAKQAYALAkAAIAAAAgAgCAiQgkAAgYgLQgZgKAAgNQAAgOAZgKQAYgKAkAAQAiAAAYAKIAHADIADACIhFAMIBFgMQANAHABAJIABADQAAANgZAKQgYALgiAAIAAAAgAhXAAIAAAAgABCgTIAAAAg");
	this.shape_68.setTransform(134.7,48.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0033").ss(2,1,1).p("AgrAKIBBgOIAWgF");
	this.shape_69.setTransform(138.4,46.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#663300").ss(1,1,1).p("AhPAAQAAAPAXAKQAYALAgAAQAiAAAXgLQAXgKAAgPQAAAAAAgCQgCgKgOgIQgDgCgEgCQgXgLgiAAQggAAgYALQgXALAAANg");
	this.shape_70.setTransform(134.125,48.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("ABsgfQgBgOgLgLIgtgXQgXgGgcAAQgsAAggAQQgbAPgEATQgBADAAAEIAAAAIgVA/IgEANQAAANAoANQAJAEAKACQAXAGAgAAQAGAAAGAAQAVAAAUgDQAWgDAMgBQAEgBACAAQAXgEANgHQAFgDAEgDABWAFIAhA4AAxAWQAPgEANgHQAFgCAEgEQAKgFAFgHQAHgJABgMIAZBMQgGAHgJAGAAxAWIATA5AgGAcIgBA6AgGAcQADAAADAAQAbAAAWgGAhGAOIgXA8AheAAQAHAFALAGQADACADABQAcAMAkACAheAAIgjAjAhsgcQAAAQAOAM");
	this.shape_71.setTransform(134.475,51.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgTA5QggAAgXgFIgTgHIAXg7IgXA7QgogMAAgOIAEgNIAVg+QAAAPAOANIgjAiIAjgiQAHAFALAGIAGADQAcANAkABIgBA5IABg5IAGAAQAbgBAWgFIATA3IgTg3QAPgEANgHIAJgGIAhA4Ighg4QAKgGAFgGQAHgKABgLIAZBLQgGAHgJAHIgJAFQgNAGgXAEIgGABIgiAFQgUADgVAAIgMAAgABWgXg");
	this.shape_72.setTransform(134.475,54.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#996633").s().p("AgFA5QglgBgbgMIgHgEQgKgFgHgGQgOgMgBgQIAAgBIABgGQAEgTAbgPQAggQAsAAQAcAAAXAHIAtAXQALALABAOIABABIAAABQAAALgIAKQgFAHgKAGIgJAFQgMAHgQAFQgWAFgbAAIgFAAgAgCAjQAhAAAWgKQAYgLAAgOIAAgDQgCgKgOgIIAXgFIgXAFIgIgEQgWgKghAAQgiAAgXAKQgYALAAAOQAAAOAYALQAXAKAiAAIAAAAgAgCAjQgiAAgXgKQgYgLAAgOQAAgOAYgLQAXgKAiAAQAhAAAWAKIAIAEIhAAOIBAgOQAOAIACAKIAAADQAAAOgYALQgWAKghAAIAAAAgAhTAAIAAAAgAA9gVIAAAAg");
	this.shape_73.setTransform(134.45,48.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF0033").ss(2,1,1).p("AgmAMIA7gRIASgF");
	this.shape_74.setTransform(137.975,46.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#663300").ss(1,1,1).p("AhQAAQAAAPAYAKQAXAKAhAAQAiAAAYgKQAXgKAAgPQAAAAAAgCQgDgMgUgKIgBAAQgDgBgDgBQgVgIgeAAQghAAgXAKQgYALAAANg");
	this.shape_75.setTransform(134.325,48.675);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("ABugfQgBgNgMgLIgugXQgXgGgcAAQgtAAggAQQgbAOgFATQgBADAAAEIAAABIgUA9IgFANQABANAnANQAJADALADQAXAGAgAAQAHAAAGAAQAVAAAUgDQAXgDAMgCQAEgBACAAQAXgEANgGQAFgDAEgDABXAFIAhA3AAxAVQAQgEANgGQAFgDAEgDQAKgFAFgHQAIgJAAgLIAaBKQgGAHgKAGAAxAVIAUA4AgGAbIgBA6AgGAbQADAAADAAQAbAAAWgGAhHAOIgYA7AhfAAQAHAFALAGQADABADACQAcAMAlABAhfAAIgjAiAhugbQABAPAOAM");
	this.shape_76.setTransform(134.675,51.675);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgUA5QgggBgXgGIgUgFIAYg7IgYA7QgngNgBgNIAFgNIAUg+QABAPAOANIgjAiIAjgiQAHAGALAFIAGADQAcANAlABIgBA5IABg5IAGAAQAbAAAWgGIAUA2IgUg2QAQgEANgHIAJgFIAhA2Ighg2QAKgGAFgHQAIgKAAgLIAaBLQgGAHgKAGIgJAFQgNAHgXADIgGABIgjAFQgUADgVABIgNAAgABXgWg");
	this.shape_77.setTransform(134.675,54.525);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#996633").s().p("AgGA4QgkgBgcgMIgHgDQgKgGgIgGQgNgMgBgPIAAgBIABgGQAEgTAbgOQAhgQAsAAQAdAAAXAGIAtAXQAMALABANIAAACIAAABQAAALgHAJQgGAHgJAGIgKAGQgNAGgPAEQgWAGgcAAIgGAAgAgCAiQAhAAAYgKQAXgKAAgOIAAgDQgDgMgUgKIgBAAIASgFIgSAFIgGgCQgVgIgdAAQgiAAgXAKQgYALAAAOQAAAOAYAKQAXAKAiAAIAAAAgAgCAiQgiAAgXgKQgYgKAAgOQAAgOAYgLQAXgKAiAAQAdAAAVAIIAGACIg6ASIA6gSIABAAQAUAKADAMIAAADQAAAOgXAKQgYAKghAAIAAAAgAhTAAIAAAAgAA2gZg");
	this.shape_78.setTransform(134.625,48.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF0033").ss(2,1,1).p("AgiAOIAxgTIATgI");
	this.shape_79.setTransform(137.35,46.525);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#663300").ss(1,1,1).p("AhMAAQAAAOAWALQAXAKAfAAQAgAAAWgKQAXgLAAgOQAAgBAAgBQgDgMgUgKQgDgBgDgBQgVgIgbAAQgfAAgXAKQgWALAAANg");
	this.shape_80.setTransform(134.1,48.675);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1).p("ABogeQgBgOgLgLIgrgXQgWgGgbAAQgqAAgfAQQgaAOgEATQgBADAAAEIAAABIgUA9ABTAFIAfA3ABCBNQADgBADAAQAVgEAMgGQAFgDAEgDAAwAVQAOgDAMgHQAFgDAEgDQAJgFAFgHQAHgJAAgLIAZBLQgGAHgJAFAgGAbQAEAAACAAQAaAAAWgGIASA4AhaBJQAJADAKADQAWAGAeAAQAHAAAFAAQAUAAAUgEQAVgCAMgCAgGAbIgBA6AhDAOIgXA7AhaAAQAHAFAKAGQADACADABQAbAMAiABAhaAAIgiAiIgEAOQABAMAlANAhogbQABAPANAM");
	this.shape_81.setTransform(134.4,51.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgSA4QgfAAgVgFIgTgGIAWg7QAbAMAiACIgBA4IABg4IAGAAQAagBAVgFQAPgEAMgHIAJgGIAgA3Iggg3QAJgFAFgHQAIgJgBgLIAZBKQgGAHgIAGIgJAFQgNAGgVAEIgGABIgTg2IATA2IgiAFQgSADgVAAIgLAAgABCAwgAiAATIAEgNIAigiQAHAGAKAFIAGADIgWA7QgmgNgBgNgAhog3QABAPANAMIgiAigABTgXg");
	this.shape_82.setTransform(134.4,54.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#996633").s().p("AgGA4QgigBgbgMIgGgDQgKgGgHgGQgNgMgBgPIAAgBIABgGQAEgTAagNQAfgRAqAAQAbAAAWAHIArAWQALALABAOIAAABIAAABQABALgIAKQgFAGgJAGIgJAGQgMAGgPAFQgVAFgaAAIgGAAgAgCAiQAfAAAXgKQAWgKAAgOIAAgDQgDgMgTgKIgHgCIATgJIgTAJQgVgIgaAAQggABgXAJQgWALAAAOQAAAOAWAKQAXAKAgAAIAAAAgAgCAiQggAAgXgKQgWgKAAgOQAAgOAWgLQAXgJAggBQAaAAAVAIIgxAUIAxgUIAHACQATAKADAMIAAADQAAAOgWAKQgXAKgfAAIAAAAgAhPAAIAAAAgAAtgbIAAAAg");
	this.shape_83.setTransform(134.4,48.75);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF0033").ss(2,1,1).p("AghARIAugWIAVgL");
	this.shape_84.setTransform(137.5,46.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#663300").ss(1,1,1).p("AhNAAQAAAQAWALQAXALAgAAQAhAAAXgLQAWgLAAgQQAAAAAAgCQgCgNgUgKQgFgDgGgBQgTgIgaAAQggAAgXAMQgWALAAAOg");
	this.shape_85.setTransform(134.25,49.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("ABqghQgBgOgLgMIgsgYQgWgHgcAAQgrAAgfASQgaAPgFAUQgBADAAAEQAAABAAAAIgUBBIgEAOQAAAOAnAOQAIADALADQAWAGAfABQAHAAAFAAQAVgBATgDQAWgDAMgCQADgBADAAQAWgEANgHQAFgDAEgDABVAGIAgA6AAwAXQAPgEAMgHQAFgDAFgDQAJgGAFgHQAHgKABgMIAYBPQgFAIgJAGAAwAXIATA7AgGAdIgBA+AgGAdQAEAAACAAQAaAAAWgGAhEAPIgXA/AhcAAQAHAGALAGQADABADACQAbANAjABAhcAAIgiAkAhqgdQABAQANAN");
	this.shape_86.setTransform(134.575,52.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgTA8QgfAAgWgGIgTgHIAXg+IgXA+QgngNAAgOIAEgOIAUhBQABAQANANIgiAkIAigkQAHAGALAGIAGADQAbANAjABIgBA9IABg9IAGAAQAaAAAWgGIATA6IgTg6QAPgEAMgHIAKgGIAgA6Iggg6QAJgGAFgHQAHgLABgLIAYBPQgFAHgJAHIgJAFQgNAIgWADIgGABQgMADgWACQgTAEgVAAIgMAAgABVgYg");
	this.shape_87.setTransform(134.575,55.275);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#996633").s().p("AgGA8QgjgBgbgNIgGgDQgLgGgHgHQgNgNgBgQIAAgBIABgGQAFgUAagPQAfgSArAAQAcAAAWAHIAsAYQALAMABAOIABACIAAABQgBAMgHAKQgFAIgJAGIgKAGQgMAHgPAEQgWAGgaAAIgGAAgAgCAlQAgAAAXgLQAWgLAAgPIAAgDQgCgNgUgKIgLgEIAVgLIgVALQgUgHgYAAQghAAgXALQgXALAAAPQAAAPAXALQAXALAhAAIAAAAgAgCAlQghAAgXgLQgXgLAAgPQAAgPAXgLQAXgLAhAAQAYAAAUAHIguAXIAugXIALAEQAUAKACANIAAADQAAAPgWALQgXALggAAIAAAAgAhRAAIAAAAgAAqgeIAAAAg");
	this.shape_88.setTransform(134.575,49.125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF0033").ss(2,1,1).p("AgfARIAsgXIATgK");
	this.shape_89.setTransform(137.175,46.225);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#663300").ss(1,1,1).p("AhPAAQAAAPAXALQAYALAgAAQAhAAAYgLQAXgLAAgPQAAgBAAgBQgDgOgUgKQgHgDgHgCQgTgFgYAAQggAAgYAKQgXAMAAAOg");
	this.shape_90.setTransform(134.125,48.725);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1,1,1).p("ABtghQgBgOgMgMIgtgXQgWgIgdAAQgsAAggASQgaAPgFAUQgBADAAAFIAAAAIgUBBIgFAPQABANAnAOQAJADALADQAWAGAgABQAHAAAFAAQAVgBAUgDQAWgDANgCQADgBADAAQAWgEANgHQAFgDAEgDABXAGIAgA6AAxAXQAPgEANgHQAFgDAFgDQAJgGAFgHQAIgKAAgMIAZBQQgFAHgKAGAAxAXIAUA7AgFAdIgCA+AgFAdQADAAACAAQAbAAAWgGAhFAPIgYA/AhdAAQAHAGAKAGQAEABADACQAbANAlABAhdAAIgjAkAhsgdQABAQAOAN");
	this.shape_91.setTransform(134.45,51.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgTA8QggAAgXgGIgTgHIAYg+IgYA+QgngNgBgOIAFgOIAUhBQABAQAOANIgjAkIAjgkQAHAGAKAGIAHADQAbANAlACIgBA8IABg8IAFAAQAbAAAWgGIAUA6IgUg6QAPgFANgHIAJgGIAhA6Ighg6QAKgGAFgHQAIgLgBgLIAaBPQgGAIgJAGIgJAGQgNAHgWAEIgGABIgkAFQgTADgUAAIgNAAgABWgYg");
	this.shape_92.setTransform(134.45,54.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#996633").s().p("AgFA8QglgBgbgNIgHgEQgKgGgHgGQgOgNgBgQIAAAAIABgHQAFgVAagPQAggRAsAAQAdAAAWAIIAtAXQAMAMABAOIAAADIAAAAQAAALgIALQgFAHgJAHIgKAFQgNAIgPAEQgWAGgbAAIgFAAgAgCAlQAggBAYgKQAXgLAAgPIAAgDQgDgOgUgJIgOgGIAUgKIgUAKQgTgFgXAAQghAAgYALQgXALAAAPQAAAPAXALQAYAKAhABIAAAAgAgCAlQghgBgYgKQgXgLAAgPQAAgPAXgLQAYgLAhAAQAXAAATAFIgsAZIAsgZIAOAGQAUAJADAOIAAADQAAAPgXALQgYAKggABIAAAAgAhSAAIAAAAgAAoggIAAAAg");
	this.shape_93.setTransform(134.425,48.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF0033").ss(2,1,1).p("AghAUIArgZIAYgO");
	this.shape_94.setTransform(137.325,46.35);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#663300").ss(1,1,1).p("AhPAAQAAAQAYAMQAXALAgAAQAhAAAYgLQAWgMAAgQQAAgBAAgCQgCgNgUgLQgHgDgIgCQgSgGgYAAQggAAgXALQgYAMAAAPg");
	this.shape_95.setTransform(134.1,49.125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("ABsgjQgBgPgMgMIgggSIgMgHQgXgIgcAAQgrAAggATQgaAPgFAWQgBADAAAFQAAAAAAABIgUBEIgFAPQABAPAnAOQAJADAKAEQAWAGAgABQAHAAAFAAQAVgBAUgEQAWgCAMgDQAEAAACgBQAWgEANgHQAFgDAEgDAAxAYQAPgEAMgIQAGgDAEgDIAgA+ABWAGQAJgGAFgHQAIgLAAgMIAZBTQgFAIgKAHAgFAeQADAAACAAQAbAAAWgGIATA+AhFAPIgXBDAhcAAIgjAmAhcAAQAGAGALAGQADACADABQAbAOAlABIgCBCAhrgeQABAQAOAO");
	this.shape_96.setTransform(134.45,52.475);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgTA/QgggBgWgFIgUgHIAYhCIgYBCQgngPAAgOIAEgPIAUhFQABARAOAOQAHAHALAGIAGADQAbAOAlABIAFAAQAaAAAXgGQAOgFANgHIAKgHIAgA9Iggg9QAJgGAFgHQAIgMAAgMIAZBUQgGAIgJAGIgJAGQgNAIgWAEIgGABIgTg9IATA9QgMACgXADQgTAEgUAAIABhAIgBBAIgNAAgAiAAGIAjgmgABEA2g");
	this.shape_97.setTransform(134.45,55.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#996633").s().p("AgFA/QgkgBgcgOIgGgDQgLgGgGgHQgOgOgBgRIAAgBIABgHQAFgVAagQQAggSArAAQAcAAAXAHIAMAIIAgASQAMAMABAPIAAACIAAABQAAAMgIAMQgFAHgJAGIgKAHQgMAHgPAFQgWAGgbAAIgFAAgAgCAmQAgABAYgMQAWgMAAgPIAAgDQgCgOgUgLQgHgDgIgCIAYgOIgYAOQgSgGgXAAQghAAgXALQgYANAAAPQAAAPAYAMQAXAMAhgBIAAAAgAgCAmQghABgXgMQgYgMAAgPQAAgPAYgNQAXgLAhAAQAXAAASAGIgrAZIArgZQAIACAHADQAUALACAOIAAADQAAAPgWAMQgYAMgggBIAAAAgAhSAAIAAAAgAAnghIAAAAg");
	this.shape_98.setTransform(134.425,49.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FF0033").ss(2,1,1).p("AgYARIAfgUIASgN");
	this.shape_99.setTransform(136.575,46.125);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#663300").ss(1,1,1).p("AhNAAQAAAQAWALQAXALAgAAQAgAAAXgLQAXgLAAgQQAAgBAAgBQgDgOgUgKQgGgDgIgCQgEgBgFgBIgBgBQgOgDgRAAQggAAgXALQgWAMAAAOg");
	this.shape_100.setTransform(134.075,49.125);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(1,1,1).p("ABqghQgBgPgMgLIgrgYQgBgBgBAAQgVgHgbAAQgrAAgfASQgaAPgFAUQAAAEAAAEIAAABIgVBCIgEAOQABAOAmAOQAJADAKADQAWAGAfABQAGAAAGAAQAVgBATgDQAWgDAMgCQADgBADAAQAVgEANgHQAFgDAEgDABUAGIAgA7AAwAXQAPgEAMgHQAFgDAEgDQAJgGAGgHQAHgKAAgMIAZBQQgGAIgJAGAgGAdQADAAADAAQAaAAAWgGIATA8AgGAdIgBA/AhEAPIgXBAAhbAAQAGAGALAGQADACADABQAbANAjABAhbAAIgjAlAhpgdQAAAQAOAN");
	this.shape_101.setTransform(134.375,52.325);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgTA9QgfAAgWgHIgTgGIAXg/IgXA/QgmgOgBgOIAEgOIAVhCQAAARAOANIgjAkIAjgkQAGAGALAGIAGADQAbANAjACIgBA9IABg9IAGAAQAaAAAWgHQAPgEAMgHIAJgGIAgA7Iggg7QAJgGAGgHQAHgLAAgMIAZBQQgGAIgJAHIgJAFQgNAIgVADIgGACIgTg8IATA8IgiAEQgTAEgVAAIgMAAgABDA1gABUgYg");
	this.shape_102.setTransform(134.375,55.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#996633").s().p("AgGA9QgjgCgbgNIgGgDQgLgGgGgGQgOgNAAgRIAAgBIAAgHQAFgTAagQQAfgRArgBQAbABAVAGIACABIArAYQAMAMABAPIAAABIAAABQAAAMgHALQgGAHgJAGIgJAGQgMAHgPAEQgWAHgaAAIgGAAgAgCAlQAfAAAXgLQAXgLAAgPIAAgDQgDgNgUgLIgOgEIgJgDIASgNIgSANIgBgBQgOgCgQAAQghgBgXALQgWAMAAAPQAAAPAWALQAXALAhAAIAAAAgAgCAlQghAAgXgLQgWgLAAgPQAAgPAWgMQAXgLAhABQAQAAAOACIABABIgfAWIAfgWIAJADIAOAEQAUALADANIAAADQAAAPgXALQgXALgfAAIAAAAgAhQAAIAAAAgAAdgiIAAAAg");
	this.shape_103.setTransform(134.375,49.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FF0033").ss(2,1,1).p("AgXAUIAfgZIAQgO");
	this.shape_104.setTransform(136.75,45.675);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#663300").ss(1,1,1).p("AhSAAQAAAPAYAKQAYALAiAAQAjAAAYgLQAYgKAAgPQAAgBAAgBQgDgNgVgJQgHgDgIgCQgHgCgHgBQgOgDgQAAQgiAAgYALQgYALAAANg");
	this.shape_105.setTransform(134.475,48.425);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("ABxgfQgBgOgNgLIgugXQgYgHgdAAQguAAghARQgcAOgEATQgBAEAAAEIAAAAIgWA/IgEANQAAANApANQAJADAMADQAXAGAhABQAHAAAGAAABHBOQAEAAACgBQAYgDANgHQAFgDAFgDABaAFIAiA4AAzAWQAQgEANgHQAFgDAFgDQAJgFAGgHQAIgKAAgLIAaBMQgGAHgJAGAgGAcQADAAADAAQAcAAAXgGIAUA4AgGAcIgBA7QAWgBAUgDQAXgDANgCAhIAOIgZA8AhhAAQAHAFALAGQADACAEABQAcANAmABAhhAAIglAjAhwgcQAAAQAPAM");
	this.shape_106.setTransform(134.825,51.475);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgUA6QghgBgXgGIgVgGIAZg7IgZA7QgpgNAAgNIAEgNIAlgjIglAjIAWg/QAAAQAPAMQAHAGALAGIAHADQAcANAmABIgBA6IABg6IAGAAQAcAAAXgGQAQgEANgHIAKgGQAJgGAGgHQAIgKAAgLIAaBMQgGAHgJAGIgig3IAiA3IgKAGQgNAHgYADIgGABIgUg3IAUA3IgkAFQgUADgWABIgNAAg");
	this.shape_107.setTransform(134.825,54.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#996633").s().p("AgGA5QgmgBgcgMIgHgEQgLgFgHgGQgPgNAAgPIAAgBIABgGQAFgUAbgOQAhgQAuAAQAdAAAYAGIAuAXQANALABAOIAAACIAAABQAAALgIAKQgGAHgJAGIgKAFQgNAHgQAEQgXAGgcAAIgGAAgAgCAjQAhAAAZgLQAYgKAAgOIAAgDQgDgNgVgJIgPgFIgOgDIARgPIgRAPQgOgDgPAAQgjAAgYALQgYALAAAOQAAAOAYAKQAYALAjAAIAAAAgAgCAjQgjAAgYgLQgYgKAAgOQAAgOAYgLQAYgLAjAAQAPAAAOADIgfAaIAfgaIAOADIAPAFQAVAJADANIAAADQAAAOgYAKQgZALghAAIAAAAgAhVAAIAAAAgAAbghIAAAAg");
	this.shape_108.setTransform(134.8,48.525);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FF0033").ss(2,1,1).p("AgVAUIAagZIARgP");
	this.shape_109.setTransform(136.05,45.95);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#663300").ss(1,1,1).p("AhQAAQAAAOAYALQAXAKAhAAQAhAAAYgKQAXgLAAgOQAAgBAAgBQgCgNgVgJQgOgGgSgCIAAAAQgMgCgNAAQghAAgXAKQgYALAAANg");
	this.shape_110.setTransform(134.05,48.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1,1,1).p("ABtgfQgBgOgMgKIgtgXQgXgGgcAAQgsAAggAQQgbAOgFATQgBADAAAEIAAABIgUA9IgFANQABANAnANQAJACALADQAWAGAhABQAGAAAGAAQAVgBAUgDQAWgDANgCQADAAADgBQAWgDANgHQAFgCAEgDABXAFIAgA3AAxAVQAPgDANgIQAFgCAFgDQAJgFAFgHQAIgJAAgLIAaBKQgGAHgKAGAAxAVIAUA3AgGAbIgBA6AgGAbQADAAADAAQAbAAAWgGAhGANIgYA8AheAAQAHAFALAFQADADADAAQAcANAkABAheAAIgjAiAhtgbQABAPAOAM");
	this.shape_111.setTransform(134.375,51.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgTA5QghgCgWgFIgUgGIAYg6IgYA6QgngMgBgNIAFgOIAUg9QABAPAOAMIgjAiIAjgiQAHAHALAFIAGADQAcAMAkABIAGAAQAbABAWgGIAUA2IgUg2QAPgEANgHIAKgFQAJgGAFgHQAIgKAAgLIAaBLQgGAHgKAFIggg1IAgA1IgJAGQgNAHgWADIgGABIgjAEQgUAEgVABIABg6IgBA6IgMAAg");
	this.shape_112.setTransform(134.375,54.55);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#996633").s().p("AgFA4QglgBgcgNIgGgDQgLgFgHgGQgOgMgBgPIAAAAIABgHQAFgTAbgOQAggQAsAAQAcAAAXAGIAtAXQAMAKABAOIAAADIAAAAQAAALgHAJQgGAIgJAFIgJAFQgNAIgPADQgXAGgbAAIgFAAgAgCAiQAhAAAXgKQAYgKAAgOIgBgDQgDgMgUgJQgOgGgRgDIAQgPIgQAPIgBAAQgMgCgMAAQghAAgYALQgYAKAAAOQAAAOAYAKQAYAKAhAAIAAAAgAgCAiQghAAgYgKQgYgKAAgOQAAgOAYgKQAYgLAhAAQAMAAAMACIABAAIgbAaIAbgaQARADAOAGQAUAJADAMIABADQAAAOgYAKQgXAKghAAIAAAAgAhTAAIAAAAgAAXghIAAAAg");
	this.shape_113.setTransform(134.35,48.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FF0033").ss(2,1,1).p("AgPAYIATgdIAMgS");
	this.shape_114.setTransform(134.825,45.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#663300").ss(1,1,1).p("AhMAAQAAAQAWALQAXALAfAAQAgAAAWgLQAXgLAAgQQAAAAgBgCQgCgOgUgKQgRgIgWgCQgIgBgHAAQgfAAgXALQgWAMAAAOg");
	this.shape_115.setTransform(133.775,48.675);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("ABogiQgBgPgMgMIgqgYQgWgHgbAAQgqAAgfARQgZAQgFAUQgBAEAAAEQAAABAAAAIgTBDIgEAPQAAAOAmAOQAIADALADQAVAGAfABQAGAAAFAAQAUgBATgDQAWgDALgCQAEgBACAAQAWgEAMgHQAFgDAEgDABSAFQAJgFAGgHQAHgLAAgMIAYBSQgFAHgJAHABSAFIAgA9AAvAXQAOgEANgHQAEgDAEgEAgGAdQADAAADAAQAaAAAVgGIASA9AgGAdIgBBAAhDAPIgWBBAhaAAQAHAFAKAHQADABADACQAbANAiABAhaAAIghAlAhogeQABAQANAO");
	this.shape_116.setTransform(134.075,51.975);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgSA+QgfgBgVgGIgTgHIAWg/QAbANAiABIAGAAQAaAAAVgGIASA8IghAFQgTADgUABIABg/IgBA/IgLAAgABBA1gAAvgHQAOgFANgGIAIgHIAgA8Iggg8QAJgGAGgIQAHgKAAgMIAYBRQgFAIgJAHIgJAFQgMAIgWADIgGACgAh/AUIAEgOIAThDQABAQANANQAHAHAKAHIAGADIgWA/QgmgOAAgOgAh7AGIAhgmgAhDgPIAAAAg");
	this.shape_117.setTransform(134.075,55.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#996633").s().p("AgFA9QgjgBgagNIgGgDQgKgHgHgGQgNgOgBgQIAAgBIABgHQAEgUAagQQAegRAqAAQAbAAAWAHIArAYQALAMABAPIAAACIAAABQAAAMgHALQgFAHgJAGIgJAHQgMAHgPAEQgVAGgaAAIgFAAgAgCAlQAfAAAXgLQAWgLAAgPIAAgDQgDgOgTgKQgRgIgXgCIAMgSIgMASIgOgBQggAAgWALQgWAMAAAPQAAAPAWALQAWALAgAAIAAAAgAgCAlQggAAgWgLQgWgLAAgPQAAgPAWgMQAWgLAgAAIAOABIgTAeIATgeQAXACARAIQATAKADAOIAAADQAAAPgWALQgXALgfAAIAAAAgAhOAAIAAAAgAAMglIAAAAg");
	this.shape_118.setTransform(134.025,48.775);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FF0033").ss(2,1,1).p("AgLAWIAOgbIAJgQ");
	this.shape_119.setTransform(134.675,45.975);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#663300").ss(1,1,1).p("AhKAAQAAAOAWAKQAVALAfAAQAfAAAWgLQAXgKAAgOQAAgBgBgBQgCgMgUgKQgQgHgXgCQgCAAgCAAQgFgBgFAAQgfAAgVAKQgWALAAANg");
	this.shape_120.setTransform(134,48.825);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("ABmgeQgBgOgLgLIgqgWQgVgGgbAAQgpAAgeAQQgZAOgFASQgBAEAAAEIAAAAIgTA9IgEANQABANAkAMQAJADAKADQAVAGAeAAQAGAAAGAAQATAAATgDQAVgDALgCQAEgBACAAQAVgEAMgGQAFgDAEgCABRAFQAJgFAFgGQAHgKAAgLIAYBKQgFAHgJAGABRAFIAfA3AAuAVQAOgEANgGQAEgDAEgDAgFAbQADAAACAAQAZAAAVgGIASA3AgFAbIgBA5AhYAAQAHAFAKAGQADABADACIgXA6AhYAAIghAiAhBAOQAaAMAiABAhmgbQABAPANAM");
	this.shape_121.setTransform(134.275,51.775);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgSA4QgeAAgVgGIgTgGIAXg5IgXA5QgkgMgBgOIAEgMIAhgiQAHAGAKAFIAGAEQAaALAiACIgBA4IgMAAgAgFAAIAFAAQAZgBAVgFIASA2IggAEQgTADgTABgABAAwgAAugGQAOgEANgHIAIgFIAfA2Igfg2QAJgFAFgIQAHgJAAgLIAYBJQgFAIgJAGIgJAEQgMAHgVAEIgGABgAhmg3QABAPANAMIghAigAhYgcIAAAAg");
	this.shape_122.setTransform(134.275,54.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#996633").s().p("AgFA4QgigCgagLIgGgEQgKgFgHgGQgNgMAAgPIAAAAIABgHQAEgTAZgOQAegPApAAQAbgBAWAHIApAWQALALACAOIAAACIAAAAQgBALgGAJQgGAIgJAFIgIAFQgNAHgOAEQgUAFgaABIgFAAgAgBAiQAdAAAXgLQAWgJAAgOIgBgDQgCgMgTgKQgRgHgWgCIgEAAIAIgRIgIARIgJAAQgggBgWAKQgWALAAAOQAAAOAWAJQAWALAgAAIAAAAgAgBAiQggAAgWgLQgWgJAAgOQAAgOAWgLQAWgKAgABIAJAAIgPAcIAPgcIAEAAQAWACARAHQATAKACAMIABADQAAAOgWAJQgXALgdAAIAAAAgAhNAAIAAAAgAAIgiIAAAAg");
	this.shape_123.setTransform(134.25,48.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FF0033").ss(2,1,1).p("AgHAXIAKgdIAFgQ");
	this.shape_124.setTransform(134.825,45.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#663300").ss(1,1,1).p("AhOABQAAAOAXAKQAXALAgAAQAhAAAXgLQAXgKAAgOQAAgBgBgCQgCgMgUgKQgSgIgXgBQgCgBgCAAQgDAAgCAAQgDAAgDAAQggAAgXAKQgXALAAAOg");
	this.shape_125.setTransform(134.475,48.55);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("ABqgfQgBgOgLgLIgsgXQgWgGgcAAQgrAAggAQQgaAOgEAUQgBADAAAEIAAAAIgVA+ABUAFIAhA3ABDBOQADgBADgBQAWgDANgHQAFgCAEgEAAwAVQAPgDAMgIQAFgCAEgDQAKgFAFgHQAHgKAAgLIAZBMQgFAGgJAGAAwAVIATA5AhcBKQAJACALADQAVAGAgABQAGAAAGAAQAVgBATgDQAWgDAMgBAgGAbIgBA7AgGAbQADAAADAAQAaAAAWgGAhFAOIgXA8AhcAAQAHAFAKAFQADADADABQAbAMAkABAhcAAIgjAiIgEAOQABAMAmAOAhqgcQAAAPAOAN");
	this.shape_126.setTransform(134.8,51.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgTA5QgggBgVgFIgTgGIAXg7QAbAMAkABIgCA6IgMAAgAgFgBIAFAAQAbAAAVgFIATA3IgTg3QAPgEANgHIAJgGIAgA3Iggg3QAJgFAFgHQAHgKAAgLIAaBLQgGAHgJAGIgKAFQgMAHgWAEIgGABIgiAEQgTADgVABgAiCATIADgOIAjgiQAHAGALAGIAGADIgXA7QgngNAAgNgAhqg4QAAAPAOAMIgjAigAhEgOIAAAAgABVgXg");
	this.shape_127.setTransform(134.8,54.475);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#996633").s().p("AgFA4QgkgBgbgMIgGgDQgLgFgHgHQgNgMgBgPIAAgBIABgGQAEgTAbgOQAfgRArABQAcAAAWAGIAsAWQAMAMABAOIAAABIAAABQAAALgIAKQgFAHgJAGIgJAFQgNAHgPAEQgVAGgbgBIgFAAgAgCAjQAgAAAXgLQAXgLAAgNIgBgDQgCgNgUgJQgSgIgXgCIgEAAIgFAAIAGgQIgGAQIgFAAQghgBgXALQgXALAAAOQAAANAXALQAXALAhAAIAAAAgAgCAjQghAAgXgLQgXgLAAgNQAAgOAXgLQAXgLAhABIAFAAIgKAdIAKgdIAFAAIAEAAQAXACASAIQAUAJACANIABADQAAANgXALQgXALggAAIAAAAgAhRAAIAAAAgAADgjIAAAAg");
	this.shape_128.setTransform(134.775,48.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FF0033").ss(2,1,1).p("AgCAaIACgdIADgW");
	this.shape_129.setTransform(134.3,45.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#663300").ss(1,1,1).p("AhMAAQAAAPAWALQAXALAfAAQAgAAAXgLQAWgLAAgPQAAgBAAgBQgCgNgUgKQgNgGgPgDQgKgCgKAAQgCAAgCAAQgBAAgCAAQgfAAgXALQgWALAAAOg");
	this.shape_130.setTransform(134.075,49.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(1,1,1).p("ABpghQgBgOgMgMIgrgYQgDgBgEAAQgSgFgWAAQgBAAgBAAQgqAAgfARQgaAOgEAVQgBADAAAFIAAAAIgUBBIgEAOQAAAOAmAOQAJACAKAEQAWAGAfAAQAGAAAGAAQAUAAATgEQAVgCAMgDQADAAADgBQAWgEAMgGQAFgEAEgCABTAFIAgA7AAvAXQAPgEAMgIQAFgCAEgEQAJgFAGgHQAHgKAAgMIAYBPQgFAIgJAGAgFAdQADAAACAAQAaAAAVgGIATA6AgFAdIgBA9AhDAPIgXA/AhaAAQAHAFAKAGQADACADACQAbANAjABAhaAAIgiAkAhogdQAAAQAOAN");
	this.shape_131.setTransform(134.375,52.25);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgSA8QgfgBgWgGIgTgGIAXg+IgXA+QgmgNAAgOIAEgOIAUhBQAAAQAOANIgiAkIAigkQAHAGAKAGIAGADQAbANAjABIgBA9IABg9IAFAAQAaAAAVgGQAPgEAMgHIAJgGIAgA6Iggg6QAJgGAGgHQAHgKAAgMIAYBPQgFAHgJAHIgJAFQgMAHgWAEIgGABIgTg6IATA6IghAFQgTADgUABIgMAAgABCAzgABTgYg");
	this.shape_132.setTransform(134.375,55.275);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#996633").s().p("AgFA7QgjAAgbgNIgGgEQgKgFgHgHQgOgNAAgQIAAAAIABgHQAEgUAagPQAfgSAqABIACAAQAWAAASAFIAHACIArAXQAMAMABAOIAAADIAAAAQAAAMgHAKQgGAHgJAHIgJAFQgMAHgPAFQgVAFgaAAIgFAAgAgCAlQAfAAAXgMQAWgKAAgPIAAgDQgCgNgUgKQgNgGgPgDQgKgCgKAAIgEAAIACgVIgCAVIgCAAQggAAgXALQgWALAAAPQAAAPAWAKQAXAMAgAAIAAAAgAgCAlQggAAgXgMQgWgKAAgPQAAgPAWgLQAXgLAgAAIACAAIgDAeIADgeIAEAAQAKAAAKACQAPADANAGQAUAKACANIAAADQAAAPgWAKQgXAMgfAAIAAAAgAhPAAIAAAAgAAAglIAAAAg");
	this.shape_133.setTransform(134.375,49.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},271).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},5).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},4).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},5).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},4).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},6).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},5).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},5).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},354).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},6).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},6).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},6).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},6).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},6).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},6).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},6).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},6).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},6).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},6).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},10).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},15).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},11).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},6).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},13).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},15).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},15).to({state:[]},390).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Провода = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Провода
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(2,1,1).p("Ai3AQIECgdQAlgFAWAFQAhAFARAX");
	this.shape.setTransform(120.3625,91.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330099").ss(2,1,1).p("ABujAQAPALAEAWQAEAWgHAUQgMAhgnAWQgKAGgXALQgVAKgLAHQgRALgTASQgCACgDACQgMAMgZAcQgTAVgJAOQgOAUgFAVQgCAHgDAeQgDAUgEAMIgCAD");
	this.shape_1.setTransform(49.7946,73.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFCC").ss(5,1,1).p("AI/FpQAFgFABgBQADgEADgDQAAgBABgBQABgCABgBQABgBACgCQACgBACgCIAHgFAixmIQgCAAgDABQgBAAgEABQgFABgLgBQgGAAgEABQgDgBgCAAAgrF6QANgBAHgBQAKAAAJACAGOGIQgKABgIgGQgEgDgEgEIgEgEAGbFnQADgIADgDQABgBABAAIACgCQAGgFAEgFAmrgkQAEAFABADIABADQAAAAABACQAAABACACQABABABACIACAEQABADAAACAo0guQgHABgIABQgDAAgFABQgFACgDAAQgEABgEAAAjdFcQgDgHgCgDQgDgCAAgBQgCgDgBgDQgDgFAAgBQgBAAAAgB");
	this.shape_2.setTransform(102.45,54.9019);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFCC").ss(4,1,1).p("AhjAAQgBgDADgIQABgFABgCIADgKQABAAAAgBQAAgBABgCABGAhQACgBAGgCQAFgCACgCQAEgDADgFIAJgK");
	this.shape_3.setTransform(26.6958,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFCC").ss(2,1,1).p("AE7lrQgTgDgSAIQgVAKgNATQgFAJgGANQAAACgIAWQgBADgNAgQgJAWgEAOQgLAmAEAeQAAACAAABQAAADAAADQABAQAAAWQAAAFgDApQgDA6AHAhQAFAVANAaQAHAQAPAeQAYAyAPA3QAPA1AHA3QABACABABAk6FtQADgFABgDQAUgfAggiQAsgrAVgVQAmgmAWgiQAcgrAIgsQAFghAEgQQAGgWANgKQACgCACgB");
	this.shape_4.setTransform(49.0625,52.1845);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Подложка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Подложка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AP7qKIABC0IjpRYAMKIUIAJBuAP7qKIjxSeAv6IOIC9ySIE8gBIMkgDILYgCAv6IOIH5ADIMkACIHnABAv6IOIgBB9IH6gCIMkgEIHwgD");
	this.shape.setTransform(98.425,74.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B4513").s().p("Av6IPIH5ACIMkACIHnABIDxyeIABC0IjpRZIgJhvIAJBvInwACIskADIn6ADg");
	this.shape_1.setTransform(98.425,74.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0522D").s().p("AEjJOIskgCIn5gCIC9yTIE8gBIMkgDILYgCIjxSeg");
	this.shape_2.setTransform(98.425,69.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Обложка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Обложка
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag6BSQgRgRgBgaQAAgVAJgNQAKgMAQgIQAQgHAXgDQAWgDAbgBIAAgFQAAgLgEgHQgEgHgHgEQgGgEgJgBQgJgBgJAAQgMAAgPADQgOADgPAGIgCAAIAAggIAZgFQARgEAQAAQASAAAPAEQANAEALAHQAKAIAFAMQAFAMABATIAAB+IgeAAIAAgUIgMAHIgNAIQgIAEgJADQgJACgNAAQgZAAgQgQgAAOgBQgSABgLADQgNADgIAIQgIAJAAAOQAAAQAKAIQAIAJAUgBQAOAAAOgGQANgHAMgIIAAgzIghACg");
	this.shape.setTransform(568.8,271.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAtBeIAAhVIhZAAIAABVIgeAAIAAi6IAeAAIAABLIBZAAIAAhLIAeAAIAAC6g");
	this.shape_1.setTransform(549,271.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag7BIQgXgaAAguQAAgtAXgaQAWgbAlAAQAmAAAWAbQAXAaAAAtQAAAugXAaQgWAbgmAAQglAAgWgbgAglg1QgOASAAAjQAAAjAOATQANASAYAAQAYAAAOgSQANgSAAgkQAAgjgNgSQgOgSgYAAQgYAAgNASg");
	this.shape_2.setTransform(528.5,271.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhOCDIAAj/IAeAAIAAATQAMgKAPgHQAPgIAQAAQAhAAASAaQASAZAAAuQAAAXgHASQgGASgLANQgKANgPAHQgOAGgQAAQgOAAgLgDQgLgDgMgHIAABPgAgXheQgNAGgMAKIAABpQANAGAJACQAJACAMAAQAZAAAOgSQAOgRgBgiQABgigMgRQgLgRgXAAQgMAAgNAGg");
	this.shape_3.setTransform(508.9,274.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgOBeIAAifIhBAAIAAgbICfAAIAAAbIhBAAIAACfg");
	this.shape_4.setTransform(489.825,271.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag4BJQgZgZAAgvQAAgsAZgbQAYgbAmAAQAkAAAUAVQATAXAAAoIAAAQIiCAAQAAASAEANQAFANAJAIQAJAIALAEQALAEANAAQATAAASgHQATgJAIgHIABAAIAAAiQgPAHgQAFQgQAEgRABQgtgBgZgZgAgig5QgOAQgBAWIBlAAQAAgZgLgOQgMgNgYAAQgYgBgPAPg");
	this.shape_5.setTransform(471.85,271.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAtBeIAAhVIhZAAIAABVIgeAAIAAi6IAeAAIAABLIBZAAIAAhLIAeAAIAAC6g");
	this.shape_6.setTransform(451.5,271.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag9BeIAAi6IB7AAIAAAbIhdAAIAACfg");
	this.shape_7.setTransform(434.675,271.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag7BSQgQgRgBgaQAAgVAJgNQAKgMAQgIQAQgHAXgDQAWgDAbgBIAAgFQgBgLgDgHQgEgHgHgEQgGgEgJgBQgJgBgJAAQgMAAgPADQgOADgQAGIgBAAIAAggIAZgFQARgEAQAAQASAAAOAEQAOAEALAHQAKAIAFAMQAFAMAAATIAAB+IgdAAIAAgUIgLAHIgOAIQgIAEgJADQgJACgNAAQgZAAgRgQgAAOgBQgSABgLADQgNADgIAIQgIAJAAAOQAAAQAKAIQAIAJAUgBQAPAAANgGQANgHAMgIIAAgzIghACg");
	this.shape_8.setTransform(415,271.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AA3BeIAAiUIgtBgIgVAAIgthgIAACUIgcAAIAAi6IAlAAIAvBnIAwhnIAlAAIAAC6g");
	this.shape_9.setTransform(394.275,271.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AA3BeIAAiUIgtBgIgVAAIgthgIAACUIgcAAIAAi6IAlAAIAvBnIAwhnIAlAAIAAC6g");
	this.shape_10.setTransform(359.725,271.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag8BIQgWgaAAguQAAgtAWgaQAXgbAlAAQAmAAAXAbQAWAaAAAtQAAAugWAaQgXAbgmAAQglAAgXgbgAglg1QgOASAAAjQAAAjAOATQAOASAXAAQAYAAAOgSQAOgSAAgkQAAgjgOgSQgNgSgZAAQgXAAgOASg");
	this.shape_11.setTransform(338.25,271.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("ABDB0IAAguIiGAAIAAAuIgcAAIAAhIIAUAAQASggAKgqQAJgqAAgrIBwAAIAACfIAWAAIAABIgAgWgMQgKAhgOAXIBaAAIAAiFIg2AAQgCArgKAig");
	this.shape_12.setTransform(317.475,273.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag8BIQgWgaAAguQAAgtAWgaQAXgbAlAAQAmAAAXAbQAWAaAAAtQAAAugWAaQgXAbgmAAQglAAgXgbgAglg1QgOASAAAjQAAAjAOATQAOASAXAAQAYAAAOgSQAOgSAAgkQAAgjgOgSQgNgSgZAAQgXAAgOASg");
	this.shape_13.setTransform(297.75,271.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgOBeIAAifIhBAAIAAgbICfAAIAAAbIhBAAIAACfg");
	this.shape_14.setTransform(279.625,271.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("Ag4BJQgYgZAAgvQAAgsAXgbQAYgbAnAAQAkAAAUAVQAUAXAAAoIAAAQIiEAAQAAASAGANQAEANAJAIQAIAIAMAEQALAEANAAQASAAATgHQATgJAHgHIACAAIAAAiQgPAHgQAFQgQAEgSABQgrgBgagZgAghg5QgPAQgCAWIBmAAQAAgZgMgOQgMgNgYAAQgXgBgOAPg");
	this.shape_15.setTransform(261.65,271.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AA3BeIAAiUIgtBgIgVAAIgthgIAACUIgcAAIAAi6IAlAAIAvBnIAwhnIAlAAIAAC6g");
	this.shape_16.setTransform(240.325,271.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Ag7BSQgQgRAAgaQAAgVAJgNQAIgMAQgIQARgHAXgDQAWgDAagBIAAgFQABgLgEgHQgEgHgGgEQgHgEgJgBQgJgBgJAAQgMgBgOAEQgPADgPAGIgDAAIAAgfIAagGQARgDAQAAQASAAAPADQANAEAKAHQALAIAFAMQAGAMAAATIAAB+IgfAAIAAgUIgKAIIgOAHQgIAEgJADQgJACgNAAQgYAAgSgQgAAOgBQgSABgLADQgNAEgIAHQgIAJAAAOQAAAQAJAIQAKAJASgBQAPAAAOgGQANgHALgIIAAg0IggADg");
	this.shape_17.setTransform(759.65,228.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAtBeIAAhVIhZAAIAABVIgeAAIAAi7IAeAAIAABMIBZAAIAAhMIAeAAIAAC7g");
	this.shape_18.setTransform(739.85,228.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Ag7BIQgXgaAAguQAAgtAXgaQAWgbAlAAQAmAAAWAbQAXAaAAAtQAAAugXAaQgWAbgmAAQglAAgWgbgAglg1QgNASAAAjQAAAjANATQAOASAXAAQAYAAAOgSQAOgSAAgkQAAgjgOgSQgNgSgZAAQgXAAgOASg");
	this.shape_19.setTransform(719.35,228.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AhOCDIAAj/IAeAAIAAATQAMgKAPgHQAPgIAQAAQAhAAASAaQASAZAAAuQAAAXgGASQgHASgLANQgLANgOAHQgOAGgQAAQgOAAgLgDQgMgDgLgHIAABPgAgWheQgOAGgMAKIAABpQANAGAJACQAJACAMAAQAYAAAOgSQAOgRABgiQgBgigKgRQgMgRgWAAQgMAAgNAGg");
	this.shape_20.setTransform(699.75,231.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgOBeIAAifIhBAAIAAgcICfAAIAAAcIhBAAIAACfg");
	this.shape_21.setTransform(680.675,228.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AApBeIhKhXIgQAAIAABXIgfAAIAAi7IAfAAIAABRQAPAAAJgGQAJgFAHgNIAEgJIAEgKQAIgTAMgKQAMgJAYAAIAOAAIAAAbIgOAAQgMABgHAFQgIAGgFAOQgHAPgHAJQgHAHgHAEIBWBjg");
	this.shape_22.setTransform(664.15,228.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("Ag3BJQgagZAAgvQAAgsAZgcQAYgbAmAAQAkABAUAVQATAXAAAoIAAAQIiCAAQAAASAEANQAFAMAJAJQAIAIAMAEQALAEANAAQASAAATgIQATgIAIgHIABAAIAAAiQgPAIgQAEQgQAEgRABQgtgBgYgZgAgig4QgOAPgBAWIBlAAQAAgZgLgOQgNgNgXAAQgYgBgPAQg");
	this.shape_23.setTransform(643.2,228.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AhNBdIgHAAIAAgbIACAAIADAAIAFAAIAHgBQAFgBACgDQAIgJAGgUQAFgUABgkIACghIABgkIB6AAIAAC6IgeAAIAAigIhCAAIgBAbIgBAYQgBAbgDAQQgCARgFALQgEAKgEAHIgLAMQgFAFgGACQgHADgIAAIgIgBg");
	this.shape_24.setTransform(621.85,228.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgwBeQgPgEgLgFIAAgiIACAAQAKAIAQAGQAQAGARAAQAYAAAQgQQAQgQACgfIhaAAIAAgZIBaAAQgDgagQgNQgPgOgWAAQgOAAgPAFQgOAFgOAMIgDAAIAAgjQALgEAPgFQAQgFAQAAQATAAAQAGQARAGALALQAMAMAGASQAHARAAAYQAAAugZAbQgZAcgpAAQgQAAgQgEg");
	this.shape_25.setTransform(603.675,228.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("Ag7BSQgRgRAAgaQABgVAIgNQAKgMAPgIQARgHAXgDQAWgDAagBIAAgFQAAgLgDgHQgEgHgGgEQgHgEgJgBQgJgBgJAAQgMgBgOAEQgPADgQAGIgCAAIAAgfIAagGQARgDAQAAQASAAAOADQAOAEAKAHQALAIAFAMQAGAMgBATIAAB+IgeAAIAAgUIgKAIIgOAHQgIAEgJADQgJACgNAAQgYAAgSgQgAAOgBQgSABgLADQgNAEgIAHQgIAJAAAOQAAAQAKAIQAJAJASgBQAPAAAOgGQANgHALgIIAAg0IggADg");
	this.shape_26.setTransform(572.8,228.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("ABDB0IAAguIiGAAIAAAuIgcAAIAAhIIAUAAQASggAKgqQAJgqAAgrIBwAAIAACfIAWAAIAABIgAgWgMQgKAhgOAXIBaAAIAAiFIg2AAQgCAqgKAjg");
	this.shape_27.setTransform(552.725,230.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAwBeIAAhLIgjAAIg3BLIgjAAIA8hOQgYgHgLgMQgKgOAAgWQAAgQAHgKQAFgLALgGQAJgGANgDQANgCANAAIBGAAIAAC7gAgHhDQgGABgGAEQgGAEgDAGQgDAGAAAHQAAAJACAHQACAFAGAFQAFAFAJACQAIABAKABIAlAAIAAg/IgmAAIgRAAg");
	this.shape_28.setTransform(532.15,228.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AhOCDIAAj/IAeAAIAAATQAMgKAPgHQAPgIAQAAQAgAAATAaQASAZAAAuQAAAXgHASQgFASgMANQgLANgOAHQgPAGgPAAQgNAAgMgDQgMgDgLgHIAABPgAgWheQgOAGgMAKIAABpQANAGAJACQAJACAMAAQAZAAAOgSQANgRAAgiQAAgigLgRQgLgRgXAAQgMAAgMAGg");
	this.shape_29.setTransform(513.6,231.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("Ag6BSQgRgRAAgaQgBgVAKgNQAIgMARgIQAQgHAXgDQAWgDAbgBIAAgFQAAgLgEgHQgEgHgHgEQgGgEgJgBQgJgBgJAAQgMgBgPAEQgOADgPAGIgCAAIAAgfIAZgGQARgDAQAAQASAAAPADQAOAEAKAHQAKAIAFAMQAFAMABATIAAB+IgeAAIAAgUIgMAIIgNAHQgHAEgKADQgJACgNAAQgZAAgQgQgAAOgBQgSABgLADQgNAEgIAHQgIAJAAAOQAAAQAJAIQAJAJAUgBQAOAAAOgGQANgHAMgIIAAg0IghADg");
	this.shape_30.setTransform(492.2,228.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AglBeQgSgDgQgIIAAgjIACAAQAMALASAGQASAGARAAIAQgCQAIgBAGgEQAIgEADgFQAEgGABgKQgBgKgEgGQgDgGgIgDQgGgDgJgBIgRAAIgaAAIAAgaIASAAIAQgBQALAAAGgDQAIgCAGgGQAEgFAAgLQAAgIgDgFQgEgFgGgDQgGgDgHgBIgMgBQgRAAgQAFQgPAEgLAJIgCAAIAAgjQANgEAPgDQAPgDAQAAQALAAANACQAMADAMAFQAKAGAHAKQAGAKABAOQgBAPgIALQgJALgPAFIAAABQAQAEAKALQAKALAAATQAAAQgHALQgHALgLAHQgLAGgNADQgNADgMAAQgTAAgQgEg");
	this.shape_31.setTransform(473.9,228.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("Ag7BIQgXgaAAguQAAgtAXgaQAWgbAlAAQAmAAAWAbQAXAaAAAtQAAAugXAaQgWAbgmAAQglAAgWgbgAglg1QgNASAAAjQAAAjANATQAOASAXAAQAYAAAOgSQANgSAAgkQAAgjgNgSQgNgSgZAAQgXAAgOASg");
	this.shape_32.setTransform(444.05,228.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("Ag9BeIAAi7IB7AAIAAAcIhdAAIAACfg");
	this.shape_33.setTransform(427.675,228.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("Ag8BIQgWgaAAguQAAgtAWgaQAXgbAlAAQAmAAAXAbQAWAaAAAtQAAAugWAaQgXAbgmAAQglAAgXgbgAglg1QgOASAAAjQAAAjAOATQAOASAXAAQAYAAAOgSQAOgSAAgkQAAgjgOgSQgNgSgZAAQgXAAgOASg");
	this.shape_34.setTransform(408.55,228.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AAtBeIAAhVIhZAAIAABVIgeAAIAAi7IAeAAIAABMIBZAAIAAhMIAeAAIAAC7g");
	this.shape_35.setTransform(388.05,228.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AhHBeIAAi7IAfAAIAABJIAoAAQATAAAMACQALADALAIQAJAHAFALQAFALgBANQAAAOgEALQgGALgJAHQgLAIgLAEQgMADgTABgAgoBEIAdAAQAPABAJgCQAIgBAHgFQAGgEAEgGQADgGAAgJQgBgJgCgGQgDgGgGgEQgIgFgIgBIgYAAIgdAAg");
	this.shape_36.setTransform(368.9,228.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhNBdIgHAAIAAgbIACAAIADAAIAFAAIAIgBQADgBAEgDQAIgJAEgUQAFgUACgkIACghIABgkIB6AAIAAC6IgeAAIAAigIhCAAIgBAbIgBAYQgBAbgDAQQgCARgEALQgFAKgEAHIgLAMQgFAFgHACQgGADgIAAIgIgBg");
	this.shape_37.setTransform(347.2,228.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("Ag4BJQgZgZAAgvQAAgsAYgcQAZgbAmAAQAkABAUAVQATAXABAoIAAAQIiDAAQAAASAEANQAFAMAJAJQAJAIALAEQALAEANAAQASAAATgIQASgIAIgHIACAAIAAAiQgPAIgQAEQgQAEgRABQgsgBgagZgAghg4QgPAPgBAWIBlAAQAAgZgMgOQgLgNgZAAQgXgBgOAQg");
	this.shape_38.setTransform(328.5,228.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("ABDB0IAAguIiGAAIAAAuIgcAAIAAhIIAUAAQASggAKgqQAJgqAAgrIBwAAIAACfIAWAAIAABIgAgWgMQgKAhgOAXIBaAAIAAiFIg2AAQgCAqgKAjg");
	this.shape_39.setTransform(307.875,230.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgxCAIAihOIhIixIAhAAIA2CJIA4iJIAgAAIhoD/g");
	this.shape_40.setTransform(288.4,232.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("Ag3BJQgZgZAAgvQAAgsAXgcQAYgbAnAAQAkABAUAVQAUAXAAAoIAAAQIiEAAQAAASAGANQAEAMAJAJQAIAIAMAEQALAEANAAQATAAASgIQATgIAHgHIACAAIAAAiQgPAIgQAEQgQAEgSABQgsgBgYgZgAghg4QgPAPgCAWIBmAAQAAgZgMgOQgMgNgYAAQgXgBgOAQg");
	this.shape_41.setTransform(257.25,228.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AAuBeIAAiMIheCMIgbAAIAAi7IAeAAIAACKIBciKIAcAAIAAC7g");
	this.shape_42.setTransform(236.9,228.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAtBeIAAhVIhZAAIAABVIgeAAIAAi7IAeAAIAABMIBZAAIAAhMIAeAAIAAC7g");
	this.shape_43.setTransform(215.85,228.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("Ag4BJQgZgZAAgvQAAgsAZgcQAYgbAmAAQAkABAUAVQATAXAAAoIAAAQIiCAAQAAASAEANQAFAMAJAJQAJAIALAEQALAEANAAQATAAASgIQATgIAIgHIABAAIAAAiQgPAIgQAEQgQAEgRABQgtgBgZgZgAgig4QgOAPgBAWIBlAAQAAgZgLgOQgMgNgYAAQgYgBgPAQg");
	this.shape_44.setTransform(195.55,228.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AhNBdIgHAAIAAgbIACAAIADAAIAFAAIAIgBQADgBADgDQAIgJAGgUQAEgUACgkIACghIABgkIB6AAIAAC6IgeAAIAAigIhCAAIgBAbIgBAYQgBAbgDAQQgDARgEALQgEAKgEAHIgLAMQgFAFgGACQgHADgIAAIgIgBg");
	this.shape_45.setTransform(174.2,228.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("Ag4BJQgYgZAAgvQAAgsAXgcQAZgbAmAAQAkABAUAVQAUAXAAAoIAAAQIiEAAQAAASAGANQAEAMAJAJQAIAIAMAEQALAEANAAQASAAATgIQATgIAHgHIACAAIAAAiQgPAIgQAEQgQAEgSABQgrgBgagZgAghg4QgPAPgCAWIBmAAQAAgZgMgOQgMgNgYAAQgXgBgOAQg");
	this.shape_46.setTransform(155.45,228.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("ABDB0IAAguIiGAAIAAAuIgcAAIAAhIIAUAAQASggAKgqQAJgqAAgrIBwAAIAACfIAWAAIAABIgAgWgMQgKAhgOAXIBaAAIAAiFIg2AAQgCAqgKAjg");
	this.shape_47.setTransform(134.875,230.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("Ag3BJQgagZAAgvQAAgsAZgcQAYgbAmAAQAkABAUAVQATAXAAAoIAAAQIiCAAQAAASAEANQAFAMAJAJQAIAIAMAEQALAEANAAQASAAATgIQATgIAIgHIABAAIAAAiQgPAIgQAEQgQAEgRABQgtgBgYgZgAgig4QgOAPgBAWIBlAAQAAgZgLgOQgNgNgXAAQgYgBgPAQg");
	this.shape_48.setTransform(115.35,228.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AhOCDIAAj/IAeAAIAAATQAMgKAPgHQAPgIAQAAQAhAAASAaQASAZAAAuQAAAXgGASQgHASgLANQgLANgOAHQgOAGgQAAQgOAAgLgDQgMgDgLgHIAABPgAgWheQgOAGgMAKIAABpQANAGAJACQAJACAMAAQAYAAAOgSQAOgRABgiQgBgigKgRQgMgRgWAAQgMAAgNAGg");
	this.shape_49.setTransform(95.85,231.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AAtBeIAAigIhZAAIAACgIgeAAIAAi7ICVAAIAAC7g");
	this.shape_50.setTransform(74.5,228.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgtB5QgVgIgOgRQgPgRgHgXQgIgYAAgfQAAgeAHgZQAIgXAPgSQAOgRAVgIQAVgJAYAAQAaAAAUAJQAVAJAOAQQAPARAHAYQAIAYAAAfQAAAegIAZQgIAYgOAQQgPARgUAIQgUAJgaAAQgYAAgVgJgAg4hKQgVAaAAAxQAAAwAVAbQAVAaAjAAQAkAAAVgaQAVgbAAgwQAAgxgVgaQgVgagkAAQgjAAgVAag");
	this.shape_51.setTransform(51.025,225.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCC99").s().p("Eg+eAmoMAAAhNPMB89AAAMAAABNPg");
	this.shape_52.setTransform(399.925,252.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},99).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Обводка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Обводка
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AppMdQgkgCgfgMQgKgDgEgKQgEgJAEgKQADgJAKgFQAJgEAKAEQAYAJAbABQALABAGAHQAHAIAAAKQgBALgHAHQgHAGgKAAIgBAAgAJGMdIg8AAQgKAAgHgHQgIgHABgLQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIgBAKQABALgIAHQgHAHgKAAIgBAAgAHOMdIg8AAQgKAAgHgHQgIgHAAgLQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAHgKAAIgBAAgAFWMdIg8AAQgKAAgHgHQgIgHAAgLQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIgBAKQABALgIAHQgHAHgKAAIgBAAgADeMdIg8AAQgKAAgHgHQgIgHABgLQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIgBAKQABALgIAHQgHAHgKAAIgBAAgABmMdIg8AAQgKAAgHgHQgIgHAAgLQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAHgKAAIgBAAgAgRMdIg8AAQgKAAgHgHQgIgHAAgLQAAgKAIgIQAHgHAKAAIA8AAQALAAAGAHQAIAIgBAKQABALgIAHQgGAHgKAAIgBAAgAiJMdIg8AAQgKAAgHgHQgIgHABgLQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIgBAKQABALgIAHQgHAHgKAAIgBAAgAkBMdIg8AAQgKAAgHgHQgIgHAAgLQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAHgKAAIgBAAgAl5MdIg8AAQgKAAgHgHQgIgHAAgLQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIgBAKQABALgIAHQgHAHgKAAIgBAAgAnxMdIg8AAQgKAAgHgHQgIgHABgLQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIgBAKQABALgIAHQgHAHgKAAIgBAAgAJ2MWQgIgGgCgKQgCgKAGgJQAGgIAKgCQAagFAXgNQAJgFAKADQAKACAFAJQAFAKgDAJQgDAKgJAFQgeASgiAGIgFAAQgHAAgHgEgArnLtIgNgMQgTgTgOgWQgFgIACgKQACgKAJgGQAJgFAKACQAKACAGAJQAKARAPAOIAKAJQAIAHABAKQABALgHAIQgGAIgLABIgCAAQgJAAgHgGgALaLZQgIgHAAgKQAAgKAHgIQASgTAKgYQAEgJAKgEQAJgEAKAEQAJAEAEAKQAEAKgEAJQgNAfgZAaQgHAIgKAAIgBAAQgKAAgHgHgAsjKIQgJgFgCgKQgEgUAAgVIAAgaQAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAAaQAAAQADAPQACAKgGAIQgFAJgLACIgFABQgHAAgGgFgAMXJ0QgKgBgHgIQgGgIAAgKIABgJIAAgxQAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAAxIgBANQAAALgJAGQgHAGgIAAIgDAAgAsZITQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAMaH8QgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAsZGbQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAMaGEQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAsZEjQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAMaEMQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAsZCrQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAMaCUQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAsZAzQgKAAgIgHQgHgHAAgLIAAg7QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA7QAAALgHAHQgIAHgKAAIAAAAgAMaAcQgKAAgIgHQgHgHAAgLIAAg7QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA7QAAALgHAHQgIAHgKAAIAAAAgAsZhEQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAMahbQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAsZi8QgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAMajTQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAsZk0QgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAMalLQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAsZmsQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAManDQgKAAgIgHQgHgHAAgLIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAALgHAHQgIAHgKAAIAAAAgAsZokQgKAAgIgHQgHgHAAgLIAAgSQAAgZAFgWQADgKAIgGQAJgFAKACQAKADAGAIQAFAJgCAKQgEARAAATIAAASQAAALgHAHQgIAHgKAAIAAAAgAMJpBQgIgHAAgLQAAgbgKgYQgEgJAEgKQAFgJAJgEQAKgEAJAEQAKAEAEAKQAMAgABAkQAAALgHAHQgHAIgKAAIgBAAQgKAAgHgHgAsLqaQgIgGgCgKQgDgKAGgJQANgSARgRIAAgBIARgOQAIgGAKABQALABAGAIQAGAIgBAKQgBALgIAGIgOAMIABAAQgOANgJAOQgGAJgKACIgFAAQgHAAgHgEgALvqoQgKgBgHgHIgMgNQgOgNgPgKQgJgFgCgKQgDgKAGgJQAFgJAKgCQAKgCAJAFQAVAMARASIANAOQAHAHAAALQAAAKgIAHQgHAHgKAAIgBAAgAqqriQgKgFgDgJQgDgKAEgKQAEgJAKgDQAggMAjAAIADAAIACAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIg8AAIgCAAIgCAAQgbAAgYAJIgIABQgGAAgFgCgAKGrnQgSgDgTAAIgSAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIASAAQAZAAAWAEQAKACAGAJQAGAJgDAKQgCAKgIAFQgHAFgHAAIgFgBgAITrqIg8AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAgAGbrqIg8AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAgAEjrqIg8AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAgACrrqIg8AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAgAAzrqIg7AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA7AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAgAhErqIg8AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAgAi8rqIg8AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAgAk0rqIg8AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAgAmsrqIg8AAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAIA8AAQAKAAAIAHQAHAHAAALQAAAKgHAHQgIAIgKAAIAAAAg");
	this.shape.setTransform(593.9002,382.876);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AKONyIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAIWNyIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAGeNyIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAEmNyIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgACuNyIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAA2NyIg7AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA7AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAhBNyIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAi5NyIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAkxNyIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAmpNyIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAohNyIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAqZNyIggAAQgQAAgPgCQgKgCgGgIQgGgIABgLQABgKAJgGQAIgGALABQALACAMAAIAgAAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAK2NrQgIgHgBgKQAAgKAHgIQAGgIALgBQAbgBAYgLQAKgFAJAEQAKAEAFAJQAEAJgEAKQgDAKgKAEQggAPglADIgCAAQgJAAgHgHgAsZNZQgdgQgXgaQgHgIAAgKQABgLAIgGQAHgHALAAQAKABAHAHQASAVAVAMQAJAFADAKQADAKgFAJQgFAJgKACIgHACQgGAAgGgEgAMyNAQgKAAgHgIQgHgIAAgKQABgKAHgHIAKgKIAAgBQANgOAJgQQAFgJAKgDQAKgDAJAFQAJAFADAKQADAKgGAJQgLAVgQASIgBAAIgNAPQgHAGgKAAIgBAAgAtnMCQgKgDgEgKQgPgegGghQgCgLAGgIQAGgJAKgBQAKgCAJAFQAIAGACALQAFAbAMAYQAEAJgDAKQgEAJgJAFQgFADgGAAIgIgCgANoLaQgKgCgFgJQgGgJADgKQAHgZAAgcQAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKQAAAigIAfQgDAKgJAGQgGADgHAAIgGgBgAt1KNQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2JkQgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1IVQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2HsQgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1GdQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2F0QgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1ElQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2D8QgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1CtQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2CEQgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1A1QgKAAgIgHQgHgIAAgKIAAg7QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA7QAAAKgHAIQgHAHgLAAIAAAAgAN2AMQgLAAgHgHQgHgHAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAHQgHAHgKAAIAAAAgAt1hCQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2hrQgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1i6QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2jjQgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1kyQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2lbQgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1mqQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2nTQgLAAgHgHQgHgIAAgKIAAg8QAAgKAHgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAt1oiQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAN2pLQgLAAgHgHQgHgIAAgKIAAghIgCgYQgBgKAHgJQAGgIAKgBQALgBAIAGQAIAHABAKQACAPAAAPIAAAhQAAAKgIAIQgHAHgKAAIAAAAgAt1qaQgKgCgGgIQgGgJACgKQAGgiAOgdQAFgJAKgDQAKgDAJAEQAJAFADAKQAEAJgFAKQgLAXgFAaQgCAKgJAGQgGAEgHAAIgFAAgANcrFQgJgDgEgKQgKgZgRgVQgHgIABgLQACgKAIgGQAIgGAKABQAKABAHAIQAVAbANAfQAEAJgEAKQgEAKgKADQgEACgFAAQgFAAgFgCgAtNsIQgIgHgBgLQAAgKAHgIQAXgaAbgQQAJgFAKACQAKADAGAJQAFAIgDAKQgCALgJAFQgVANgSAUQgHAHgKABIgCAAQgJAAgHgGgAMOslQgWgPgYgGQgKgDgFgJQgGgJADgKQADgKAJgFQAJgFAKACQAgAJAdAUQAIAGACAKQACAKgGAJQgGAIgKACIgFAAQgHAAgGgEgArmtBQgJgGgCgLQgBgKAGgIQAGgIAKgCQARgDARAAIA9AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIg9AAQgNAAgNACIgEABQgIAAgGgFgAKqs/Ig8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAIys/Ig8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAG6s/Ig8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAFCs/Ig8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgADKs/Ig8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgABSs/Ig8AAQgKAAgIgHQgGgIAAgKQAAgKAGgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAgls/Ig8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAids/Ig8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAkVs/Ig8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAmNs/Ig8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAoFs/Ig8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAg");
	this.shape_1.setTransform(111.125,380.65);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AJ6NBIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAICNBIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAGKNBIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAESNBIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgACaNBIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAAiNBIg7AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA7AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAhVNBIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAjNNBIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAlFNBIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAm9NBIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAo1NBIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQALAAAHAHQAHAIAAAKQAAAKgHAIQgHAHgLAAIAAAAgAqyM8QgigIgdgVQgIgGgCgKQgCgLAGgIQAHgJAKgBQAKgCAIAGQAVAPAYAGQALADAFAIQAFAJgCALQgCAJgJAGQgGADgHAAIgGAAgAKpM3QgJgEgDgKQgDgKAFgJQAFgJAKgEQAYgHAVgQQAIgGAKABQAKACAHAIQAGAIgCAKQgBAKgIAHQgcAWggAJIgIACQgGAAgGgEgAsSL4QgKgCgHgIQgUgagNgeQgEgKAEgJQAEgKAJgEQAKgEAJAEQAKAEAEAJQALAYAQAWQAGAIgBAKQgBAKgJAHQgGAFgIAAIgEAAgAMDLvQgIgGgCgKQgBgKAGgIQAQgWAKgZQAEgJAJgEQAKgFAJAEQAKAEAEAKQAEAJgDAKQgNAegUAbQgGAJgKABIgEABQgIAAgHgGgAtLKGQgIgGgCgKQgDgWAAgXIAAgSQAAgLAHgHQAHgIALABQAKgBAHAIQAIAHAAALIAAASQAAAUACARQACAKgGAJQgGAIgKACIgEAAQgIAAgHgFgAM8KGQgLgBgGgJQgHgIABgKQACgQAAgRIAAgYQAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAAYQAAAUgCATQgBAKgIAHQgHAFgIAAIgDAAgAs/IUQgLAAgHgIQgHgHAAgKIAAg9QAAgKAHgHQAHgIALAAQAKAAAHAIQAIAHAAAKIAAA9QAAAKgIAHQgHAIgKAAIAAAAgANAIOQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAs/GbQgLABgHgIQgHgHAAgKIAAg8QAAgLAHgHQAHgIALAAQAKAAAHAIQAIAHAAALIAAA8QAAAKgIAHQgHAHgKAAIAAAAgANAGWQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAs/EjQgLABgHgIQgHgHAAgLIAAg7QAAgLAHgHQAHgIALABQAKgBAHAIQAIAHAAALIAAA7QAAALgIAHQgHAHgKABIAAgBgANAEeQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAs/CsQgLAAgHgIQgHgHAAgKIAAg9QAAgKAHgHQAHgIALAAQAKAAAHAIQAIAHAAAKIAAA9QAAAKgIAHQgHAIgKAAIAAAAgANACmQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAs/AzQgLABgHgIQgHgHAAgKIAAg7QAAgLAHgHQAHgIALAAQAKAAAHAIQAIAHAAALIAAA7QAAAKgIAHQgHAHgKAAIAAAAgANAAuQgKAAgIgHQgHgIAAgKIAAg7QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA7QAAAKgHAIQgHAHgLAAIAAAAgAs/hEQgLABgHgIQgHgHAAgLIAAg7QAAgLAHgHQAHgIALABQAKgBAHAIQAIAHAAALIAAA7QAAALgIAHQgHAHgKABIAAgBgANAhJQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAs/i7QgLAAgHgIQgHgHAAgKIAAg9QAAgKAHgHQAHgIALAAQAKAAAHAIQAIAHAAAKIAAA9QAAAKgIAHQgHAIgKAAIAAAAgANAjBQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAs/k0QgLABgHgIQgHgHAAgKIAAg8QAAgLAHgHQAHgIALAAQAKAAAHAIQAIAHAAALIAAA8QAAAKgIAHQgHAHgKAAIAAAAgANAk5QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAs/msQgLABgHgIQgHgHAAgLIAAg7QAAgLAHgHQAHgIALABQAKgBAHAIQAIAHAAALIAAA7QAAALgIAHQgHAHgKABIAAgBgANAmxQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQALAAAHAHQAHAIAAAKIAAA8QAAAKgHAIQgHAHgLAAIAAAAgAs/ojQgLAAgHgIQgHgHAAgKIAAgMQAAgbAEgZQACgKAIgHQAJgFAKACQAKABAGAJQAGAIgCAKQgDAVAAAXIAAAMQAAAKgIAHQgHAIgKAAIAAAAgANAopQgKAAgIgHQgHgIAAgKIAAgGQAAgagEgXQgCgKAFgJQAGgIAKgCQALgCAIAGQAJAGACAKQAFAcAAAeIAAAGQAAAKgHAIQgHAHgLAAIAAAAgAs1qaQgJgFgEgJQgDgKAEgJQANgeAVgaQAHgIAKgBQAKgBAJAGQAHAHACAKQABALgHAIQgRAVgLAXQgEAKgJAEQgFABgEAAQgFAAgGgCgAMhqeQgKgEgFgJQgKgWgQgTIgDgDQgHgIAAgKQAAgKAHgIQAHgHALAAQAKAAAIAHIACADIACACQAUAZAOAcQAFAJgEAKQgDAKgJAFQgGACgFAAIgIgBgArlrzQgKgCgFgJQgGgJACgKQACgKAIgGQAfgUAjgHQAKgCAJAGIAAAAIABgBQAHgHALAAIA8AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIg8AAQgIAAgHgFQgFAGgIACQgaAFgWAPQgGAEgHAAIgGAAgALMr7QgWgNgZgEQgKgCgGgIQgGgJABgKQACgKAIgGQAIgGALABQAiAFAfATQAJAFACALQADAKgFAJQgGAIgKADIgGABQgHAAgGgEgAJlsOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAHtsOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAF1sOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAD9sOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgACFsOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAANsOIg7AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA7AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAhqsOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAjisOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAlasOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAnSsOIg8AAQgLAAgHgHQgHgIAAgKQAAgKAHgIQAHgHALAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAg");
	this.shape_2.setTransform(359.525,387.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(432).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(654));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(664).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(389));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(914).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).wait(6).to({_off:true},1).wait(231));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Миллиампертметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Миллиампертметр
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAGIAAAAIABgBIABgBIADgHIAAgCIAAAAIADAAIACAAIABABIAAACIgCACIgDABIgBgBIAAAAIgBAEIgBABIABABIAAAAIAAAAgAAAAAIAAAAIACAAIACgCIAAgBIAAgBIgBgBIgBAAg");
	this.shape.setTransform(94.1625,111.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAGIAAAAIAAAAIACgBIABgBIADgJIgCAAIgBABIgBACIAAAAIABgDIAIAAIgBADIAAgCIAAAAIgBgBIgCAAIgDAJIAAACIABAAIAAAAg");
	this.shape_1.setTransform(93.375,111.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGAGIAAAAIABAAIABgBIABgBIADgHIAAgCIAAAAIAHAAIgBACIgBAAIABgBIgBgBIgBAAIgDAAIgBAFIACAAIABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAAAIgBAEIgBAAIABgBIgBgBIgBAAIgBAAIgCAEIAAABIABABIABAAIABgBIABAAIACgCIgDADg");
	this.shape_2.setTransform(92.225,111.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAAAGIAAAAIAAAAIACgBIAAgBIAEgHIgIAJIAAAAIAAgJIgDAHIgBACIABAAIAAAAIgDAAIAAAAIABgBIABgBIAEgHIAAgBIgBgBIAAAAIADAAIAAAIIAHgIIACAAIgBAAIgBACIgDAHIAAACIABAAIAAAAg");
	this.shape_3.setTransform(91.025,111.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgFAGIAAAAIAAAAIACgBIABgBIADgJIgCAAIgBABIgBACIAAAAIABgDIAIAAIgBADIAAgCIAAAAIgBgBIgCAAIgDAJIAAACIABAAIAAAAg");
	this.shape_4.setTransform(89.875,111.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgFAGIAAAAIABgBIABgBIADgHIAAgCIAAAAIADAAIACAAIABABIAAACIgCACIgDABIgBgBIAAAAIgBAEIgBABIABABIAAAAIAAAAgAAAAAIAAAAIACAAIACgCIAAgBIAAgBIgBgBIgBAAg");
	this.shape_5.setTransform(88.7625,111.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgGAGIAAAAIABAAIABgBIABgBIADgHIAAgCIAAAAIAHAAIgBACIgBAAIABgBIgBgBIgBAAIgDAAIgBAFIACAAIABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAAAIgBAEIgBAAIABgBIgBgBIgBAAIgBAAIgCAEIAAABIABABIABAAIABgBIABAAIACgCIgDADg");
	this.shape_6.setTransform(87.825,111.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgBAGIAAAAIABAAIABgCIAEgJIgFAAIgDAJIAAACIABAAIAAAAIgFAAIAAAAIACAAIABgCIADgHIAAgCIgBAAIAKAAIgBAAIgBACIgDAHIAAACIAAAAIAAAAg");
	this.shape_7.setTransform(86.75,111.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAAAGIAAAAIAAAAIACgBIAAgBIAEgHIgIAJIAAAAIAAgJIgDAHIgBACIABAAIAAAAIgDAAIAAAAIABgBIABgBIAEgHIAAgBIgBgBIAAAAIADAAIAAAIIAHgIIACAAIgBAAIgBACIgDAHIAAACIABAAIAAAAg");
	this.shape_8.setTransform(85.425,111.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AACAGIAAAAIABAAIAAAAIAAgCIABgCIgEAAIgBADIgBABIAAAAIABAAIAAAAIgEAAIAAAAIACAAIABgCIAIgJIgBALIABAAIAAAAgAAAABIAEAAIAAgDg");
	this.shape_9.setTransform(83.825,111.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgBAGIAAAAIABAAIABgCIADgGIgHAGIAAABIAAABIABAAIAAAAIgFAAIAAAAIABAAIACgCIADgHIAAgCIAAAAIACAAIgBAAIAAACIgCAGIAHgGIAAgCIgBAAIAEAAIgBAAIgBACIgEAHIAAACIABAAIAAAAg");
	this.shape_10.setTransform(82.95,111.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgBAGIAAAAIABAAIAAgCIAEgJIgDAAIgBAEQgBAEgCACQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBAAIAAgBIABAAIABgBIAAABIAAAAIACgBIADgEIAAgDIAAgCIAAAAIAIAAIgCAAIAAACIgEAHIAAACIABAAIAAAAg");
	this.shape_11.setTransform(81.7625,111.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgBAGIAAAAIABAAIAAgCIAEgJIgDAAIgBAEQgBAEgCACQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBAAIAAgBIABAAIABgBIAAABIAAAAIACgBIADgEIAAgDIAAgCIAAAAIAIAAIgCAAIAAACIgEAHIAAACIABAAIAAAAg");
	this.shape_12.setTransform(80.6625,111.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAAAGIAAAAIAAAAIABgCIADgGIgHAGIgBABIAAABIABAAIAAAAIgEAAIAAAAIABAAIABgCIAEgHIAAgCIAAAAIADAAIgCAAIAAACIgDAGIAHgGIAAgCIAAAAIAEAAIgBAAIgBACIgEAHIAAACIABAAIAAAAg");
	this.shape_13.setTransform(79.5,111.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAAAGIAAAAIAAAAIACgBIAAgBIAEgHIgIAJIAAAAIAAgJIgDAHIgBACIABAAIAAAAIgDAAIAAAAIABgBIABgBIAEgHIAAgBIgBgBIAAAAIADAAIAAAIIAHgIIACAAIgBAAIgBACIgDAHIAAACIABAAIAAAAg");
	this.shape_14.setTransform(78.175,111.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_15.setTransform(96.225,102.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_16.setTransform(95.575,102.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAFIAAAAIABAAIAAgCIAAgEIAAgBIAAgBIgBAAIABgBIABAAIAAAHIAAACIABAAIAAAAg");
	this.shape_17.setTransform(94.925,102.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_18.setTransform(94.975,100.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAFIAAgCIABgCIgBABIgBgBIgBgBIABgDIABgBIACABIABADIgBACIgCADIgBAAIABAAgAAAgDIgBACIABABIAAABIABAAIAAgBIABAAIgBgCIAAgBIgBgBIAAABg");
	this.shape_19.setTransform(94.325,100.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_20.setTransform(93.275,99.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBAFIAAgCIAAgBIABgCIgBAAIAAgCIAAgBIABgBIABABIABABIAAABIgCABIACABIAAACIgBACIgBAAIgBAAgAAAgDIAAABIAAABIAAABIABgBIAAgBIAAgBIgBgBIAAABg");
	this.shape_21.setTransform(92.65,99.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_22.setTransform(91.475,99.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAFIACgIIgCAAIgBAAIgBABIAAAAIABgCIAEAAIgDAJg");
	this.shape_23.setTransform(90.825,99.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_24.setTransform(89.325,99.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAFQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgBIABgDIABgBIABAAIABAAIAAAAIgCABIgBAAIAAACIAAABIABAAIABAAIABACIgBACIgCABIAAAAg");
	this.shape_25.setTransform(88.675,99.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_26.setTransform(87.025,99.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAAAFIgBAAIAAgBIAAAAIAAgBIABAAIAAABIAAABIABgCIAAgBIAAgCIgBAAIgBAAIABgEIACAAIAAABIgCAAIAAACIABABIABABIAAACIgBABIAAABIgBAAg");
	this.shape_27.setTransform(86.35,99.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_28.setTransform(84.775,99.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AABAFIAAgCIgDAAIAAgBIADgGIABAAIAAAGIABAAIAAABIgBAAIAAACgAgBACIACAAIAAgFg");
	this.shape_29.setTransform(84.1,99.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_30.setTransform(82.825,99.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAFIAAAAIAAgBIABAAIAAABIAAAAIABgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAAAIAAAAIABAAIAAgBIgBgCIAAAAIgBABIAAAAIAAgCIABAAIABABIABABIgBACIABAAIABACIgBACIgCABg");
	this.shape_31.setTransform(82.15,99.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_32.setTransform(81.375,100.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgCAFIAAAAIACgEIABgCIAAgBIgBgBIgBAAIAAACIgBAAIABgCIABgBIACABIAAACIAAABIgCACIgBACIACAAIABAAIAAAAIABgBIgBACg");
	this.shape_33.setTransform(80.725,100.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_34.setTransform(79.825,101.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.5,1,1).p("AAogJIgBAEAA4gDIgDAEIgEAGABFAHIgBACIgCABAAXgMIAAADAACgOIAAACIAAACAgmgJIACAEIAAAAIADAHAg1gCIACADIAEAGAhEAHIAHAIAgTgMIADAK");
	this.shape_35.setTransform(87.925,101.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.2,1,1).p("AAogIIgCAIIAFgHIgDAIAAigBIADgHIgGAGABDAHIgGAFABEAGIgIAFIADgJIgGAFIAAgHIgHAEABGAJIgBABIgGAFAAtADIAFgHIgEAHIAHgEAANgNIgCAHAARgMIAAAHIAGgGAAXgMIAAABAAfgLIgFAHIACgHIgHAHIACgHAgHgNIABAHAgPgFIgBgHIADAHAgKgNIAAAHAgDgOIAAAIAACgOIABAIIgBgHAAGgOIgBAIIAEgHAgkgIIAAAIIgBAAIgDgGAgUgMIABAHAgkgIIAGAGIgCgHAg0ADIABADAg6ACIAHAEIABAAIgCgDAg+AEIAEAGAg2AAIACADAgwgCIAFAEAhFAKIAFAF");
	this.shape_36.setTransform(87.875,102.0125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AgLiLIAEgMIAEgLIALgBIAMgBIAJAKIAFAGIAAAAIAEADIgDAHIgCAEIgEAMIgFABQgDAAgCAAIAAABIgBAAIAAAAQgDAAgDAAIgIABIgIgLIgEgFgAgyisQAAAAAAABAhMisIAAgBQAAgEAEgDQADgCAGAAQAFAAAEACQAEADAAAEIAAABICGAAIAAgBQAAgEAEgDQAEgCAGAAQAFAAADACQAEADAAAEIAAABQAAAAAAABQgBAEgBABQgFADgFAAQgGAAgEgDQgDgCgBgCIAAAMQABADADACQABAAABABIAAAGQAEABAEAAQAEAAADgBIAAgGQgDABgEAAQgEAAgEgBAg3iYQgEABgEAAQgEAAgDgBAg3iYQABgBABAAQACgCABgBIAAgPQgCAEgBABQgEADgGAAQgGAAgEgDQgCgCgBgCIAAgBQAAgBAAAAAg3iYIAAAGQgDABgFAAQgEAAgDgBIAAgGAAmiRIAAALIgEAKIgEAMIgFABQgCAAgDABIgBAAQgBAAAAAAQgDAAgCAAIgIABIgIgLIgIgJIAAgKABuipIAAgCIAAAAIAAACIAAANQgBABgBACQgCAAgBABABUiqIAAgBQAAgBAAAAACNirIAAgBIgBAEIAAgDIAAgBIABAAIAAAAIAAABIAHBQQgFAagFAaQgSBmgTBnQAAAEgBAEIgCAJIAAAAACMirIABgBABuisIAeAAAhMiqIAAAMQABADADACQABAAABABAiTBlIAxkRIAWAAAhMg3IAJARAiTBlIAGBSIDvAAABDgpIALgHAAvg3IAGgPAA7gzIAJgMAhWgDQAHgNATgJQADgCAEgCQAbgMAfAAQAPAAANADQANADAIAGQAQALgFAPAAQhNIgBAFAgGhOIABAGAgbhLIABAFIAEAHAgthFIADAGIAIAFAg7g9IADAFIAEAGABbBlIAAAAIAAADQAAAAAAABIAHBOAAhhGIACgEAiTBlIDuAAIAxkNAhsBAIAeijICwAAIgeCjg");
	this.shape_37.setTransform(87.65,107.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF99").s().p("AhnBSIAfijICwAAIgfCjgABHAOIABgGQAAgKgMgJQgIgGgNgDQgNgDgQAAQgeAAgbAMIgIAEQgSAIgHANQAHgNASgIIAIgEQAbgMAeAAQAQAAANADQANADAIAGQAMAJAAAKIgBAGgAg9gUIgJgRgABIgXIALgHgAg4gZIgFgFgABNgeIgHAFIAHgFIAAgBgABKghIgFAFIAFgFIABgBIACgCIgCACIgIAFIAEgJIgHAFIAJgMIgJAMIAAgJIgHAGIAHgGIAAAJIAHgFIgEAJIAIgFgAg1gcIgHgIgAgygeIgEgGgAgygmIAEAGIgEgGIgEgFgAgrgiIgCgDIgCgDIACADIACADIgCgDIACADIAAAAIAAAAgAgrgiIgHgEgAA5gkIAEgHIADgEIgDAEIgHAGIAEgIIgGAIIAGgPIgGAPIAGgIIgEAIIAHgGgAgrgqIAEAFIgEgFIgCgEgAgkgmIgEgFgAAwgnIADgJIgGAHIACgIIABgEIgBAEIgCAIIAGgHgAgdgoIAAAAIABgJIgBAJIAAAAIgDgHgAgkguIAHAGIgHgGIgDgFgAgcgxIADAIIgDgIIAAAAIgCgEIACAEIAAAAgAApgqIADgHIgFAGIAFgGgAgWgrIgDgHIADAHIgGgGIAGAGgAAhgtIAGgHIACgEIgCAEIgGAHIADgHIgHAHIABgHIgBAHIAHgHgAgUg0IAEAGIgEgGIgCgFgAAZguIAFgGIAAgCIAAACIgFAGIAAgHgAgIguIgDgKgAgIguIAAgHIADAHIgDgHgAgLguIgCgHgAgDgvIAAgHgAAUg2IgCAHIACgHIACgFgAAMgvIAFgHIgFAHIACgIgAAKgvIAAgIIAAAIIgBgHgAAEgvIAAgIgAAAg3IABAIIgBgIIAAgFgAAeg2IABgCgAAKg3IgBABIABgBIAAgDgABDgdgABAghgAA0glgAAtgpgAgWgrg");
	this.shape_38.setTransform(87.125,106.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AiPCJIAxkRIAWAAIAAABIAAABIADAEQAEADAGAAQAGAAAEgDIADgFIAAAQIgDACIgCABIACgBIADgCIAAgQIAAgBICGAAIAAABIAAABIAAANQABACADACIACABIgCgBQgDgCgBgCIAAgNIAEAEQAEADAFAAQAGAAAEgDQACgBABgEIAAgBIAeAAIAAABIAAADIgxENgAhoBkICwAAIAeijIiwAAgAgHhmIAAAJIAHAJIAJALIAIgBIAFAAIABAAIABAAIAFgBIAFAAIAEgMIAEgLIgBgLIABALIgEALIgEAMIgFAAIgFABIgBAAIgBAAIgFAAIgIABIgJgLIgHgJIAAgJIADADIAEAFIAIALIAIgBIAFAAIABAAIABAAIAAAAIAFgBIAFAAIAEgNIACgEIACgHIgDgCIAAgBIgFgGIgJgKIgMABIgMABIgDAMIgEAMgABehuQAEACAEgBQAEABADgCIAAgGIgHACQgEAAgEgCgAhIh5QABACADACIACABIAAAGQADACAEgBQAFABADgCIAAgGIgIACQgEAAgDgCIgCgBQgDgCgBgCIAAgNIAAANgAByh3IgCACIgDABIADgBIACgCIAAgOIAAgCIAAAAIAAACg");
	this.shape_39.setTransform(87.275,104.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABiC3IgGhOIAAgBIgBgCIAAgBIAxkNIABgEIAAABIAHBQIgJA0IglDNIgCAJIgCAIgAiMC3IgHhSIDuAAIAAABIABACIAAABIAGBOgAgDiCIgFgFIgDgDIAEgMIAEgMIALgBIANgBIAIAKIAFAGIAAABIAEACIgDAHIgCAEIgEANIgFAAIgEABIgBAAIgBAAIgBAAIgFAAIgHABgABaiSIAAgGQAEACAEAAIAHgCIAAAGQgDACgEgBQgEABgEgCgAhGiSIAAgGQADACAEAAIAIgCIAAAGQgDACgFgBQgEABgDgCgABYimIgDgEIAAgBIAAgBIAAgBQAAgDADgEQAEgCAFAAQAGAAADACQAFAEAAADIAAABIgBABQgBAEgCABQgDADgHAAQgFAAgEgDgAhJimIgDgEIAAgBIAAgBIAAgBQAAgDAEgEQADgCAGAAQAFAAAEACQAEAEAAADIAAABIAAABIgDAFQgEADgGAAQgFAAgFgDg");
	this.shape_40.setTransform(87.65,107.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_МиллиампСтрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// МиллиампСтрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah7jOID3Gd");
	this.shape.setTransform(342.375,380.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.6,1,1).p("AgQhAIAhCB");
	this.shape_1.setTransform(85,107.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhGjlICNHL");
	this.shape_2.setTransform(347.7,378.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ag+joIB9HR");
	this.shape_3.setTransform(348.475,378.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhMjkICZHI");
	this.shape_4.setTransform(347.125,378.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhSjiIClHE");
	this.shape_5.setTransform(346.5,379.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhcjeIC5G9");
	this.shape_6.setTransform(345.55,379.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhhjbIDDG4");
	this.shape_7.setTransform(345.025,379.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhojZIDRGz");
	this.shape_8.setTransform(344.375,380);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhxjUIDjGp");
	this.shape_9.setTransform(343.475,380.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah1jRIDsGj");
	this.shape_10.setTransform(343.05,380.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},372).to({state:[{t:this.shape_2}]},292).to({state:[{t:this.shape_3}]},16).to({state:[{t:this.shape_4}]},19).to({state:[{t:this.shape_5}]},17).to({state:[{t:this.shape_6}]},18).to({state:[{t:this.shape_7}]},17).to({state:[{t:this.shape_8}]},18).to({state:[{t:this.shape_9}]},20).to({state:[{t:this.shape_10}]},20).wait(391));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ВольтметрСтрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ВольтметрСтрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah7jOID3Gd");
	this.shape.setTransform(576,385.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.6,1,1).p("AgDjwIAHHh");
	this.shape_1.setTransform(588.075,382.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.6,1,1).p("AAKjwIgTHh");
	this.shape_2.setTransform(589.35,382.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.6,1,1).p("AAYjvIguHf");
	this.shape_3.setTransform(590.8,382.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.6,1,1).p("AArjtIhVHb");
	this.shape_4.setTransform(592.425,382.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6,1,1).p("ABFjnIiJHO");
	this.shape_5.setTransform(595.35,383.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6,1,1).p("ABSjiIijHF");
	this.shape_6.setTransform(596.675,383.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6,1,1).p("ABjjbIjGG3");
	this.shape_7.setTransform(598.45,384.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.6,1,1).p("AB1jSIjpGl");
	this.shape_8.setTransform(600.225,385.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.6,1,1).p("AAig4IhDBx");
	this.shape_9.setTransform(151.4,109.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},372).to({state:[{t:this.shape_1}]},77).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_9}]},10).wait(671));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Вольтметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Вольтметр
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape.setTransform(158.125,102.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAFIgBAAIAAgBIAAAAIAAAAIABAAIAAAAIAAABIABgBIAAgCIAAgCIgBAAIgBAAIABgEIACAAIAAABIgCAAIAAACIABABIABABIAAACIgBABIAAABIgBAAg");
	this.shape_1.setTransform(157.45,102.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAFIAAAAIABAAIAAgCIAAgEIAAgBIAAgBIgBAAIABgBIABAAIAAAHIAAACIABAAIAAAAg");
	this.shape_2.setTransform(156.825,102.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBADIAAgDIAAgBIABgCIAAAAIABABIABACIAAACIgBABIgBABIgBgBg");
	this.shape_3.setTransform(156.3,102.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABAEIAAgCIgCAAIAAAAIACgFIAAAAIAAAEIABAAIAAABIgBAAIAAACgAgBABIACAAIAAgDg");
	this.shape_4.setTransform(155.775,102.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAEIAAgBIAAgFIAAAAIAAAAIAAAAIAAgBIABAAIAAAGIAAABg");
	this.shape_5.setTransform(155.275,102.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_6.setTransform(155.975,100.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAFIAAAAIAAgBIABAAIAAABIAAAAIABgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAAAIAAAAIABAAIAAgBIgBgCIAAAAIgBABIAAAAIABgCIAAAAIABABIABABIgBACIABAAIAAACIAAACIgCABg");
	this.shape_7.setTransform(155.3,100.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAFIAAAAIABAAIAAgCIAAgEIAAgBIAAgBIgBAAIABgBIABAAIAAAHIAAACIABAAIAAAAg");
	this.shape_8.setTransform(154.675,100.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBADIAAgDIAAgBIABgBIAAgBIABABIABACIAAACIgBABIgBABIgBgBg");
	this.shape_9.setTransform(154.15,101.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBAEIABgBIAAgCIABgBIAAgBIgBgBIAAABIgBABIABgCIAAgBIABABIABABIAAABIgCABIAAACIACAAIAAgBIAAACg");
	this.shape_10.setTransform(153.625,101.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAEIAAgBIAAgFIAAAAIAAABIAAgBIAAgBIABAAIAAAGIAAABg");
	this.shape_11.setTransform(153.125,101.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_12.setTransform(153.325,100.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAFIAAAAIABAAIAAgCIAAgEIAAgBIAAgBIgBAAIABgBIABAAIAAAHIAAACIABAAIAAAAg");
	this.shape_13.setTransform(152.675,100.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBAFIAAAAIABAAIAAgCIAAgEIAAgBIAAgBIgBAAIABgBIABAAIAAAHIAAACIABAAIAAAAg");
	this.shape_14.setTransform(152.025,100.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBADIAAgDIAAgBIABgBIAAgBIACABIAAACIAAACIgBABIgBABIgBgBg");
	this.shape_15.setTransform(151.65,101.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAADIgBgDIAAgBIABgBIAAgBIABABIABACIAAACIgBABIgBABIAAgBg");
	this.shape_16.setTransform(151.15,101.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAAEIAAgBIAAgFIAAAAIAAABIAAgBIAAgBIABAAIAAAGIAAABg");
	this.shape_17.setTransform(150.625,101.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_18.setTransform(150.475,100.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAFIAAgCIABgCIgBABIgBgBIgBgBIABgDIABgBIACABIABADIgBACIgCADIgBAAIABAAgAAAgDIgBACIABABIAAABIABAAIAAgBIABAAIgBgCIAAgBIgBgBIAAABg");
	this.shape_19.setTransform(149.825,100.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBADIAAgDIAAgBIABgBIAAgBIACABIAAACIAAACIgBACIgBAAIgBgBg");
	this.shape_20.setTransform(148.95,100.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAAEIgBgCIABgBIAAgBIAAAAIgBgBIABgBIAAgBIABABIAAABIAAAAIAAABIAAABIABABIgBACIgBAAIAAAAgAAAgCIAAABIAAABIAAAAIABgBIAAAAIAAgBIgBAAIAAAAg");
	this.shape_21.setTransform(148.45,100.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_22.setTransform(147.625,100.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAFIACgIIgCAAIgBABIgBABIAAgBIABgCIAEAAIgDAJg");
	this.shape_23.setTransform(146.975,100.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBADIAAgDIAAgBIABgBIAAgBIABABIABACIAAACIgBABIgBABIgBgBg");
	this.shape_24.setTransform(146.5,101.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAADIgBgCIABgBIAAgBIABgBIABgBIAAAAIAAABIgBAAIgBABIAAABIAAAAIABAAIABAAIAAABIAAACIgCABIAAgBg");
	this.shape_25.setTransform(146,101.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_26.setTransform(145.075,100.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAAAFIgBAAIAAgBIAAAAIAAgBIABAAIAAABIAAABIABgCIAAgBIAAgCIgBAAIgBAAIABgEIACAAIAAABIgCAAIAAACIABABIABABIAAACIgBABIgBABIAAAAg");
	this.shape_27.setTransform(144.4,100.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAADIgBgDIAAgBIABgBIAAgBIABABIABACIAAACIgBACIgBAAIAAgBg");
	this.shape_28.setTransform(143.95,101.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AABAEIAAgCIgCAAIAAgBIACgEIAAAAIAAAEIABAAIAAABIgBAAIAAACgAgBABIACAAIAAgCg");
	this.shape_29.setTransform(143.425,101.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_30.setTransform(142.675,101.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAFIgBAAIAAgBIACAAIAAABIAAAAIABgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAAAIAAAAIABAAIAAgBIgBgCIAAAAIgBABIgBAAIABgCIABAAIABABIABABIgBACIABAAIABACIgBACIgCABg");
	this.shape_31.setTransform(142,101.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_32.setTransform(141.275,102.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAGIAAAAIACgBIAAgBIADgHIAAgCIgBAAIADAAIACAAIABABIAAACIgCACIgCABIgBgBIAAAAIgBAEIgBABIABABIABAAIAAAAgAAAAAIAAAAIACAAIABgCIABgBIgBgBIgBgBIgBAAg");
	this.shape_33.setTransform(151.8125,112.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEAGIAAAAIAAAAIACgBIAAgBIACgJIgBAAIgBABIgBACIAAAAIABgDIAIAAIgBADIAAgCIAAAAIgBgBIgCAAIgDAJIAAACIABAAIAAAAIAAAAg");
	this.shape_34.setTransform(151,112.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgFAGIAAAAIABAAIABgBIAAgBIADgHIAAgCIgBAAIAHAAIgBACIAAAAIAAgBIAAgBIgBAAIgDAAIgBAFIACAAIABAAIABgCIABAAIgCAEIAAAAIAAgBIAAgBIgBAAIgCAAIgCAEIAAABIABABIABAAIACgBIABAAIABgCIgCADg");
	this.shape_35.setTransform(149.85,112.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAAAGIAAAAIABAAIABgBIAAgBIADgHIgGAJIgBAAIAAgJIgDAHIgBACIABAAIABAAIAAAAIgEAAIAAAAIACgBIAAgBIADgHIAAgBIAAgBIgBAAIADAAIABAIIAGgIIADAAIgBAAIgBACIgDAHIAAACIABAAIAAAAIAAAAg");
	this.shape_36.setTransform(148.675,112.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFAGIAAAAIABAAIACgBIAAgBIACgJIgBAAIgBABIgBACIgBAAIACgDIAIAAIgCADIAAgCIAAAAIgBgBIgBAAIgCAJIgBACIABAAIAAAAIAAAAg");
	this.shape_37.setTransform(147.55,112.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEAGIAAAAIABAAIABgCIACgHIAAgCIAAAAIADAAIgBAAIAAACIgBADIAAAAIACAAIACABIgBACIgBACIgDABgAAAAAIgBAFIABABIACgBIABgCIAAgCIgCgBg");
	this.shape_38.setTransform(146.35,112.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgBAGIAAAAIABAAIABgCIADgJIgDAAIgBAEIgDAGQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAAIAAgBIAAAAIABgBIABABIABgBIACgEIABgDIAAgCIgBAAIAIAAIgBAAIgBACIgCAHIgBACIABAAIAAAAg");
	this.shape_39.setTransform(145.4625,112.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAFQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQABgCACgCIADgCQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBAAIgDAFQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAgAAAgEIgCAEIgBAFIACABIACgCIADgEIAAgEQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgCABg");
	this.shape_40.setTransform(144.275,112.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgFAGIAAAAIABgBIABgBIADgHIAAgCIgBAAIADAAIACAAIACABIAAACIgBACIgCAAIACABIgBACIgBACIgCABIgBAAgAgCAFIABABIACgBIABgCIABgBIgBgCIgCAAIAAAAIAAAAgAAAAAIAAAAIACAAIABgBIABgBIAAgCIgCgBIgBAAg");
	this.shape_41.setTransform(143.0625,112.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AAtgHIgEAKABDADIgEAMAAWgMIgCALAgDgOIACALAhCAHIAHAIAgbgMIAEAMAgwgEIAGAK");
	this.shape_42.setTransform(149.225,103.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("ABiC3IABAAIABgIQABgFABgEQAXiBAXiAIgHhOIAAgDIgBAEIAAgDIABgBIAAAAAhMipIAAgCQAAgBAAAAIAAgBQAAgEAEgCQAEgDAFAAQAFAAAEADQAEACAAAEIAAABQAAAAAAABQgBAEgCABQgEADgGAAQgFAAgFgDQgCgCgBgBIAAALQABADADACQABAAABABAiTBlIAxkRIAWAAAgyipQAAAAAAgCIAAAAIAAACIAAANQgBACgCABQgBABgBAAQgDACgEAAQgFAAgDgCAg3iYIAAAGQgDACgEAAQgFAAgDgCIAAgGAAliQIgCAGIgCAEIgEAMIgFABQgCAAgDABIgBAAQgDAAgDABIgHAAIgJgKIgEgGIgDgEIAEgMIAEgLIALgBIANgBIAIAKIAFAGIABAAIACAEIABAKIgEAKIgEAMIgFABQgDAAgCABIgCAAQgCABgDAAIgIAAIgIgKIgHgKIgBgKABVipIAAgCQAAgBAAAAIAAgBQAAgEADgCQAEgDAGAAQAFAAAEADQAEACAAAEIAAABQgBAAAAABQgBAEgCABQgEADgFAAQgGAAgEgDQgCgCgBgBIAAALQABADACACQABAAACABIAAAGQADACAEAAQAEAAADgCIAAgGQgDACgEAAQgEAAgDgCABvipQgBAAAAgCIABAAIAAACIAAANQgBACgCABQgBABgCAAAgyisICHAAAAjhJIgDAMAA1g0IAFgMAhVgDQAHgNASgJQADgCAEgCQAcgMAeAAQAPAAANADQANAEAJAFQAPALgEAPABRg2IgJAQAAKhNIAAANAgOhKIAEAMAgnhHIAHAMAg6g9IAIALABbBlIAAAEIAHBOAhsBAIAeijICwAAIgeCjgAhMg2IAKAQAiTBlIDuAAAiTBlIAGBSIDvAAABvisIAeAAACMioIgxEN");
	this.shape_43.setTransform(149.125,109.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF99").s().p("AhnBSIAfijICwAAIgfCjgABHAOIABgGQAAgKgMgJQgIgGgNgDQgNgDgQAAQgeAAgbAMIgIAEQgSAIgHANQAHgNASgIIAIgEQAbgMAeAAQAQAAANADQANADAIAGQAMAJAAAKIgBAGgABNgUIAJgRgAg9gUIgJgRgABFgaIAFgMgAg1gaIgHgJgAgtggIgIgLgAA7giIAFgMgAgkgkIgFgKgAAvgmIAEgMgAgagpIgHgMgAgRgrIgEgMgAAlgrIAEgMgAAbgsIACgLgAgFgsIgDgNgAAEgtIgCgMgAAQguIAAgNg");
	this.shape_44.setTransform(148.575,107.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AiQCJIAykRIAWAAIAAACIAAABIAAALQABADADACIACABIgCgBQgDgCgBgDIAAgLIADADQAEADAGAAQAGAAAEgDQACgBAAgDIABgCICGAAIAAACIAAABIAAALIAEAFIADABIAAAGQADACAEAAQAEAAADgCIAAgFQgDABgEAAQgEAAgDgCIgDgBIgEgFIAAgLIADADQAFADAGAAQAFAAAEgDQACgBABgDIAAgCIAeAAIAAACIgBACIgwENgAhoBkICvAAIAfiiIiwAAgAgHhdIAHAJIAJAMIAHgBIAGgBIACAAIAEgBIAFgBIAFgLIAEgLIgBgKIgCgEIgBAAIgFgGIgJgKIgMACIgMABIgDAKIgFAMgAhChuQADACAFAAQADAAADgCIAAgFQgDABgDAAQgFAAgDgCgAByh4IgCADIgDACIADgCIACgDIAAgNIAAgBIAAAAIAAABgAguh4IgDADIgDACIADgCIADgDIAAgNIAAgBIgBAAIABABgAAAhUIgHgJIgBgKIAEAEIAEAFIAIAMIAIgCIAGAAIABAAIAEgBIAGgBIAEgLIACgFIACgGIABAKIgEALIgFALIgFABIgEABIgCAAIgGABIgHABg");
	this.shape_45.setTransform(148.75,105.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ABiC3IgHhOIAAgEIAxkNIABgEIAAADIAHBPIguEAIgCAIIgBAJgAiNC3IgGhSIDuAAIAAAEIAHBOgABbBlgAgEiCIgEgFIgDgEIAEgMIAEgKIALgBIANgCIAIAKIAFAGIABAAIACAEIgCAGIgCAFIgEALIgFABIgFABIgBAAIgGAAIgHACgABbiSIAAgGQADACAEAAQAEAAADgBIAAAFQgDACgEAAQgEAAgDgCgAhGiSIAAgGQADACAFAAQAEAAADgBIAAAFQgDACgEAAQgFAAgDgCgABYimIgDgDIAAgBIAAgCIAAAAQAAgEADgDQAEgDAGAAQAFAAAEADQAEADAAAEIAAAAIgBACQgBADgCABQgEADgFAAQgGAAgEgDgAhJimIgDgDIAAgBIAAgCIAAAAQAAgEAEgDQAEgDAFAAQAFAAAEADQAEADAAAEIAAAAIAAACQgBADgCABQgEADgGAAQgFAAgFgDg");
	this.shape_46.setTransform(149.125,109.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Амперметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Амперметр
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape.setTransform(31.825,103.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_1.setTransform(31.175,103.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAFIAAAAIABAAIAAgCIAAgEIAAgBIAAgBIgBAAIABgBIABAAIAAAHIAAACIABAAIAAAAg");
	this.shape_2.setTransform(30.525,103.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_3.setTransform(30.575,101.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAFIAAgCIABgCIgBABIgBgBIgBgBIABgDIABgBIACABIABADIgBACIgCADIgBAAIABAAgAAAgDIgBACIABABIAAABIABAAIAAgBIABAAIgBgCIAAgBIgBgBIAAABg");
	this.shape_4.setTransform(29.925,101.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_5.setTransform(28.875,100.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBAFIgBgCIAAgBIACgCIgCAAIAAgCIABgBIABgBIACABIAAABIAAABIgCABIACABIABACIgBACIgCAAIgBAAgAgBgDIAAABIAAABIABABIABgBIAAgBIAAgBIgBgBIgBABg");
	this.shape_6.setTransform(28.25,100.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_7.setTransform(27.125,100.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAFIACgIIgCAAIgBABIgBABIAAgBIABgCIAEAAIgDAJg");
	this.shape_8.setTransform(26.475,100.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_9.setTransform(24.875,100.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAFQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgBIABgDIABgBIABAAIABAAIAAAAIgCABIgBAAIAAACIAAABIABAAIABAAIABACIgBACIgCABIAAAAg");
	this.shape_10.setTransform(24.225,100.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_11.setTransform(22.625,99.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAFIgBAAIgBgBIABAAIAAgBIAAAAIABABIAAAAIABgBIABgBIgBgBIgBgBIgBAAIABgEIADAAIgBABIgCAAIAAABIACACIABACIAAABIgBABIgCABIAAAAg");
	this.shape_12.setTransform(21.95,100);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_13.setTransform(20.375,100.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AABAFIAAgCIgDAAIAAgBIADgGIABAAIAAAGIABAAIAAABIgBAAIAAACgAgBACIACAAIAAgFg");
	this.shape_14.setTransform(19.7,100.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_15.setTransform(18.425,100.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAFIgBAAIAAgBIACAAIAAABIAAAAIABgBIABgBIAAgBIgBgBIgBgBIAAAAIAAAAIAAAAIABAAIAAgBIAAgCIgBAAIgBABIgBAAIACgCIAAAAIACABIAAABIgBACIABAAIABACIgBACIgCABg");
	this.shape_16.setTransform(17.75,100.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_17.setTransform(16.925,101.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgCAFIAAAAIACgEIABgCIAAgBIgBgBIgBAAIAAACIgBAAIABgCIABgBIACABIAAACIAAABIgCACIgBACIACAAIABAAIAAAAIABgBIgBACg");
	this.shape_18.setTransform(16.275,101.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAEIgBgEIABgCIABgCIAAAAIACABIABADIgBADIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgDIAAACIgBABIABAEIAAABIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_19.setTransform(15.375,102.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAGIAAAAIACgBIAAgBIADgHIAAgCIgBAAIADAAIACAAIABABIAAACIgCACIgCABIgBgBIAAAAIgBAEIgBABIABABIABAAIAAAAgAAAAAIAAAAIACAAIABgCIABgBIgBgBIgBgBIgBAAg");
	this.shape_20.setTransform(26.3125,112.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAGIAAAAIABAAIABgBIABgBIADgJIgCAAIgCABIAAACIgBAAIABgDIAIAAIgBADIAAgCIAAAAIgBgBIgBAAIgCAJIgBACIABAAIAAAAIAAAAg");
	this.shape_21.setTransform(25.5,112.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAGIAAAAIABAAIABgBIAAgBIADgHIAAgCIgBAAIAHAAIAAACIgBAAIAAgBIAAgBIgBAAIgDAAIgBAFIACAAIABAAIABgCIABAAIgCAEIgBAAIABgBIgBgBIgBAAIgBAAIgBAEIAAABIAAABIABAAIABgBIABAAIACgCIgCADg");
	this.shape_22.setTransform(24.35,112.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAGIAAAAIABAAIABgBIAAgBIADgHIgGAJIgBAAIAAgJIgDAHIgBACIABAAIABAAIAAAAIgEAAIAAAAIACgBIAAgBIADgHIAAgBIAAgBIgBAAIADAAIABAIIAGgIIADAAIgBAAIgBACIgDAHIAAACIABAAIAAAAIAAAAg");
	this.shape_23.setTransform(23.175,112.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAGIAAAAIACgBIAAgBIADgHIAAgCIgBAAIADAAIACAAIABABIAAACIgCACIgCABIgBgBIAAAAIgBAEIgBABIABABIABAAIAAAAgAAAAAIAAAAIACAAIABgCIABgBIgBgBIgBgBIgBAAg");
	this.shape_24.setTransform(21.9625,112.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAGIAAAAIABAAIABgBIAAgBIADgHIAAgCIgBAAIAHAAIgBACIAAAAIAAgBIAAgBIgBAAIgDAAIgBAFIACAAIABAAIABgCIAAAAIgBAEIgBAAIABgBIgBgBIgBAAIgBAAIgBAEIAAABIAAABIABAAIABgBIABAAIACgCIgCADg");
	this.shape_25.setTransform(21,112.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAAAGIAAAAIAAAAIABgCIAEgJIgFAAIgCAJIgBACIABAAIAAAAIgFAAIAAAAIABAAIACgCIADgHIAAgCIgBAAIAJAAIAAAAIgBACIgDAHIgBACIACAAIAAAAg");
	this.shape_26.setTransform(19.95,112.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAAAGIAAAAIABAAIABgBIAAgBIADgHIgGAJIgBAAIAAgJIgDAHIgBACIABAAIABAAIAAAAIgEAAIAAAAIACgBIAAgBIADgHIAAgBIAAgBIgBAAIADAAIABAIIAGgIIADAAIgBAAIgBACIgDAHIAAACIABAAIAAAAIAAAAg");
	this.shape_27.setTransform(18.625,112.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AACAGIAAAAIABAAIAAgBIAAgBIAAgCIgDAAIgCACIAAABIAAABIABAAIAAAAIgEAAIAAAAIABAAIACgCIAGgKIABAKIAAABIABABIAAAAgAAAACIADAAIAAgFg");
	this.shape_28.setTransform(17.075,112.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.2,1,1).p("AAXgNIgBACIgCAGAAXgLIgBAAAAfgLIABAAAAogIIgGAHAArgHIgGAHAA2gCIgHAFIACgJAAyAEIAGgGIgBAIIAAAAIAGgGAA+AGIgDADIAAABgABDAHIgFAGABBADIgDADAAbgMIgDAHIAHgGAAcgEIADgHAAKgNIgFAGIACgHIgGAHIABgHAgQgFIABgIIADAHAANgOIgCAIAgKgNIAAAHAASgMIgCAHIAGgGAgCgOIAAAIAgWgMIACAHABFAJIgFAGAhEAJIAFAGAg9AEIAEAGAgrgFIAEAGAgngGIADAGIAAgIIADAHAgzgBIAEAFAg4ABIAEAFAgggJIAEAG");
	this.shape_29.setTransform(23.4375,103.0375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AAXgNIgBAEIAAABIgCAGAAogJIgBAEIgDAHAA4gDIgDADIgEAHAACgOIAAADABFAHIgCADAhEAHIAHAIAg2gCIACADAgmgJIABAE");
	this.shape_30.setTransform(23.525,102.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AhMipIAAgBQAAgBAAgBQAAgEAEgDQADgDAGAAQAFAAAFADQADADAAAEQAAABAAABIAAAOQgBACgCABQgBABgBAAIAAAGQgDACgEAAQgFAAgDgCIAAgGAgyiqQgCADgBABQgEADgGAAQgGAAgEgDQgCgBgBgCIAAALQABADADACQABABABAAAg3iYQgDACgFAAQgEAAgDgCAiTBlIAxkRIAWAAAgLiLIAEgMIAEgKIAMgCIAMgBIAIAKIAFAGIAAABIADADIgCAGIgBAFIgFAMIgFAAQgDABgCAAIgBAAIAAAAQgDAAgDAAIgIABIgIgLIgEgFgAAliQIABAKIgEALIgEAMIgFAAQgCABgDAAIgBAAQAAAAgBAAQgCAAgDABIgIAAIgIgLIgHgIIgBgLACNisIgBAEIAAgDgACMisIABAAACMirIAAgBACOiqIgBgCIABAAIAAACIAGBPQgXCAgYCBQAAAEgBAEIgBAJIgBAAABuiqQgBADgBABQgEADgGAAQgGAAgEgDQgCgBgBgCIAAgBQAAgBAAgBQAAgEAEgDQADgDAGAAQAFAAADADQAEADAAAEQAAABAAABgABuipIAAgBIAAAAIAAABIAAANQAAACgCABQgCABgBAAABaiYIAAAGQAEACAEAAQAEAAADgCIAAgGQgDACgEAAQgEAAgEgCgABVipIAAALQABADADACQABABAAAAABuisIAeAAAgyisICHAAAhsBAIAeijICxAAIgfCjgAAihGIACgEAA/g5IAFgFAAzhAIACgGAAQhMIgBAEAgbhLIACAFIADAHAgFhOIAAAFIACAIAhWgDQAHgMATgKQADgCAEgCQAcgMAeAAQAQAAANADQAMADAIAGQAQALgEAQABbBlIAAADQAAABAAAAIAHBOABCgqIAMgGAg7g9IAEAFAhMg2IAJAQAgthFIADAFAiTBlIDuAAIAxkNAiTBlIAGBSIDvAA");
	this.shape_31.setTransform(23.25,108.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ABiC3IgHhOIAAgBIAAgDIAAADIAAABIAHBOIjvAAIgGhSIDuAAIAxkNIABgEIABACIAGBPIgvEBIgBAIIgBAJgAgEiCIgEgFIgDgEIAEgMIAEgKIAMgCIALgBIAJAKIAFAGIABABIACADIgCAGIgBAFIgFAMIgFAAIgFABIgBAAIAAAAIgGAAIgIABgABbiSIAAgGQADACAEAAQAEAAADgCIAAAGQgDACgEAAQgEAAgDgCgAhGiSIAAgGQADACAFAAQAEAAADgCIAAAGQgDACgEAAQgEAAgEgCgABYimIgEgDIAAgBIAAgCQAAgEAFgDQADgDAGAAQAFAAAEADQADADAAAEIAAACIgCAEQgFADgFAAQgGAAgEgDgAhIimIgEgDIAAgBIAAgCQAAgEAEgDQADgDAGAAQAFAAAFADQADADAAAEIAAACIgDAEQgEADgFAAQgHAAgDgDg");
	this.shape_32.setTransform(23.25,108.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AiPCJIAxkRIAWAAIAAACIAAABIAAALQABADADACIACABIgCgBQgDgCgBgDIAAgLIADADQAEADAGAAQAGAAAEgDIADgEIAAAOIgDADIgCABIACgBIADgDIAAgOIAAgCICGAAIAAACIAAABIAEADQAEADAGAAQAFAAAEgDIADgEIAAgCIAeAAIAAABIAAADIgxENgAhoBkICwAAIAeijIiwAAgAgHhnIAAALIAHAIIAJALIAIAAIAFgBIAAAAIACAAIAFgBIAFAAIAEgMIAEgLIgBgKIABAKIgEALIgEAMIgFAAIgFABIgCAAIAAAAIgFABIgIAAIgJgLIgHgIIAAgLIADAEIAEAFIAIALIAIgBIAFAAIABAAIABAAIAFgBIAFAAIAEgMIACgFIACgGIgDgDIAAgBIgFgGIgJgKIgMABIgMACIgDAKIgEAMgABYh6QABADADACIACABIAAAGQAEACAEAAQAEAAADgCIAAgGQgDACgEAAQgEAAgEgCIgCgBQgDgCgBgDIAAgLIAAALgAhChuQADACAFAAQAEAAADgCIAAgGQgEACgEAAQgEAAgDgCgAByh4IgDADIgCABIACgBIADgDIAAgNIAAgBIAAAAIAAABg");
	this.shape_33.setTransform(22.875,105.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF99").s().p("AhnBSIAfijICwAAIgfCjgABHAPIABgHQAAgKgMgJQgIgGgNgDQgNgDgQAAQgeAAgbAMIgIAEQgSAJgHAMQAHgMASgJIAIgEQAbgMAeAAQAQAAANADQANADAIAGQAMAJAAAKIgBAHgAg9gUIgJgQgABHgYIAMgGIgMAGIAFgGgAg4gYIgFgGgABFgaIAGgHgAg1gbIgHgJgAgygdIgEgGgABDgeIgBAAIADgDIgDADIABAAIACgDgABLghIACgDgAA+ghIAAgBIAGgFIAFgFIgFAFIgGAFIAAABIABgJIgGAGIAEgGIADgFIgDAFIgEAGIAGgGIgBAJgABFghIADgDgAgtghIgEgFgAgogjIgDgHgAA2glIAHgFIgHAFIACgJIgCAJgAgxgmIgFgFgAgggmIgEgHgAgdgoIAAgJIAEAIIgEgIIgBgDIABADIAAAJIgDgHIADAHgAAsgpIAGgHgAAvgxIgDAIIADgIIABgEgAgrgqIgDgEgAApgqIAGgHgAgVgrIgEgHgAAngzIgEAHIAEgHIAAgBgAAfgtIAIgGIgIAGIADgIgAgNgtIgCgHgAgUg0IAEAHIgEgHIgCgFgAgJgtIABgIIADAHIgDgHgAgkgtIgDgGgAAcguIACgFIAAgCIABgDIgBADIAAACIgCAFIACgFIgHAFIACgHIgCAHIAHgFIgCAFgAA4guIACgGgAASgvIADgHgAAEgvIAAgIgAAAg3IABAIIgBgIIAAgFIAAAFgAgDgvIAAgHgAAIgvIAGgHIgCAHIAFgHIgFAHIACgHIgGAHIACgHIgCAHgAAegzIAAAAgAAegzIAAgCgAAng0IACgEgAAVg2IABgEgAAKg2IAAgEgAA+ghgAA5gkgAA2glgAAcgugAAXgugAgdgxg");
	this.shape_34.setTransform(22.725,107.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_АмпСтрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// АмпСтрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.6,1,1).p("Aggg5IBBBz");
	this.shape.setTransform(18.75,109.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah7jOID3Gd");
	this.shape_1.setTransform(96.2,384.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhvjVIDfGr");
	this.shape_2.setTransform(97.5,384.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhrjXIDXGv");
	this.shape_3.setTransform(97.75,383.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhijbIDFG3");
	this.shape_4.setTransform(98.75,383.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhejdIC9G7");
	this.shape_5.setTransform(99.1,383.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhVjgICrHB");
	this.shape_6.setTransform(100.025,382.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhOjjICdHH");
	this.shape_7.setTransform(100.675,382.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhHjlICPHL");
	this.shape_8.setTransform(101.325,382.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhBjnICDHP");
	this.shape_9.setTransform(101.95,382.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ag6jpIB1HT");
	this.shape_10.setTransform(102.675,382.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ag0jqIBpHV");
	this.shape_11.setTransform(103.275,382.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(0.6,1,1).p("AgxjrIBjHX");
	this.shape_12.setTransform(103.7,381.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},664).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},11).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},14).to({state:[{t:this.shape_7}]},12).to({state:[{t:this.shape_8}]},13).to({state:[{t:this.shape_9}]},16).to({state:[{t:this.shape_10}]},14).to({state:[{t:this.shape_11}]},19).to({state:[{t:this.shape_12}]},16).wait(391));

}).prototype = p = new cjs.MovieClip();


(lib.ИсточникПитания = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("AhskmQABgWAFgQQAFgSAIAAQACAAABAAAhWjkQgBABgCAAQgIAAgFgSQgFgPgBgWABtCMIAAAAQgBABgBAAQgIAAgGgSQgGgSAAgaQAAgaAGgRQABgCABgCQAFgOAHAAQABAAABAAAgEgjIgBABQgBAAgBAAQgIAAgFgSQgGgSAAgZQAAgMABgJQABgNAEgKQAFgSAIAAQACAAABAAAhsg9QABgWAFgPQAFgSAIAAQACAAABAAAhWAFQgBABgCAAQgIAAgFgRQgFgQgBgVAgECaQgBABgCAAQgIAAgFgSQgGgSAAgZQAAgaAGgSQAFgSAIAAQACAAABAAABtFeQgBABgBAAQgIAAgGgSQgGgSAAgaQAAgaAGgRQAGgSAIAAQABAAABAA");
	this.shape.setTransform(10.925,121.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(1,1,1).p("AgZlMQgCgJgFgJIg0AAIhWAAQAHADAEAPQAGASAAAaQAAAZgGASQgEAQgHABAA4iLQgCgJgFgJIiFAAIgEAAQACABACACQAEAEADALQAEAKABANQABAJAAAMQAAAZgGASQgEAQgHABAA4g5QgCAMgFALIglAAIhkAAACrAkQgDgJgFgJIiJAAQAGACAEAMQAAACABACQAGARAAAaQAAAagGASQgEAPgHACAgZj6QgCAMgFALIg0AAIhWAAAhsh0Ig+AAQAHACAEAQQAGARAAAaQAAAagGASQgEAOgHACAgZgQQgCALgFALIgjAAIhnAAAALAgIhBAAIgiAAQAHADAEAPQAGASAAAaQAAAZgGASQgEAQgHABAA2CNQgCAHgDAHIgsAAIhdAAACrB2QgDALgFAMIhtAAIgdgBACrD2QgDgJgFgJIh7AAIgOAAQAHACAEAQQAGARAAAaQAAAagGASQgEAPgHACACrFIQgDALgFAMIg/AAIhKAA");
	this.shape_1.setTransform(19.275,121.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(17.4,1,1).p("AAfkjIEkI+AHYkaIEkI+Ar7kjIEkI+AmDkaIEjI+");
	this.shape_2.setTransform(176.5,49.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AG5k8IAAAaIE/JsIAjAAAADlEIAAAbIE/JrIAjAAAmilEIAAAbIFAJrIAjAAAsalIIAAAbIE/JrIAjAA");
	this.shape_3.setTransform(171.225,52.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("A3jxqMAnHAAAIAHATIH0QCIAFALIAAStIgFAIMgnCAAAA3jxqIAAObIAAANIAADbIAAANIAAApIAAAHAy+G2ICLEeIAAqTIlFqYIAAFRAXfhVMgnCAAAIAAAIIAAS4A14iLIAABGA0eDzIAkBIA1nBdIANAbA3jxqIIAQdA3jBPIIAQc");
	this.shape_4.setTransform(150.825,113.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0522D").s().p("AAXF4IA/AAQAFgMADgLIAdAAQAZgqgZgtIgdAAIAAAFQgDgJgFgJIh6AAIgjhIIAsAAIAFgPIBsAAQAFgLADgMIAdAAQAZgqgZgsIgdAAIAAAEQgDgJgFgJIiIAAIgDAAQgHAAgFAPIhCAAIgNgbIAjAAQAFgLACgMIAeAAQAFgIADgJIAlAAQAFgLACgLIAdAAQAYgqgYgtIgdAAIAAAFQgCgKgFgIIiGAAIAAhHIA0AAQAFgLACgMIAeAAQAYgpgYgtIgeAAIAAAEQgCgIgFgKIg0AAIAAlQIFDKZIAAKRg");
	this.shape_5.setTransform(26.975,119.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("ABZFAQgEgNAAgRQAAgSAEgNQAEgOAFAAQAFAAADAOQAFANAAASQAAARgFANQgDANgFABQgFgBgEgNgAgYB9QgEgOAAgRQAAgSAEgMQAEgOAEgBQAGABADAOQAFAMAAASQAAARgFAOQgDANgGAAQgEAAgEgNgABZBuQgEgNAAgRQAAgTAEgMQAEgOAFAAQAFAAADAOQAFAMAAATQAAARgFANQgDANgFAAQgFAAgEgNgAhqgYQgEgNAAgRQAAgTAEgMQAEgOAEAAQAGAAADAOQAFAMAAATQAAARgFANQgDANgGAAQgEAAgEgNgAgYhAQgEgOAAgRQAAgMABgIIADgKQAEgOAEgBIACABQAEACADAMIADAKQACAIAAAMQAAARgFAOQgDANgGAAQgEAAgEgNgAhqkBQgEgOAAgRQAAgSAEgNQAEgNAEAAQAGAAADANQAFANAAASQAAARgFAOQgDANgGAAQgEAAgEgNg");
	this.shape_6.setTransform(12.225,121.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B4513").s().p("Aj/BOIAAgoQABAWAFAPQAFASAJAAIACgBIAAABIBmAAIAOAbIgiAAIgCAAQgJAAgFASQgGARAAAaQAAAZAGATQAFASAJAAIACgCIAAACIBdAAIAkBIIgOAAIgDAAQgIAAgGASQgFASgBAZQABAaAFASQAGASAIAAIADgBIAAABIBJAAICLEdIAAqRIlEqZIAAFQIhVAAIgCAAQgJAAgFASQgFAQgBAWIAAubIH/QdIAAS3gAj/jCQABAVAFAPQAFASAJABIACgBIAAABIBVAAIAABGIgDAAIgCAAQgJgBgFATQgDAKgBAMIg+AAIgCAAQgJAAgFASQgFAPgBAVg");
	this.shape_7.setTransform(25.6,113.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("ABaFfIhKAAIAAgBQAHgCAEgPQAGgSAAgaQAAgagGgRQgEgQgHgCIAOAAIB7AAQAFAJADAJIAAgFIAdAAQAZAtgZAqIgdAAQgDALgFAMgAAAFNQgFgSAAgaQAAgaAFgRQAFgSAIAAIADAAQAHACAEAQQAGARAAAaQAAAagGASQgEAPgHACIgDABQgIAAgFgSgAAJECQgEANAAASQAAARAEAOQAEANAEAAQAGAAADgNQAFgOAAgRQAAgSgFgNQgDgOgGAAQgEAAgEAOgAAQDkgAgECbIheAAIAAgBIgCABQgIAAgGgSQgGgSAAgZQAAgaAGgSQAGgSAIAAIACAAQAHADAEAPQAGASAAAaQAAAZgGASQgEAQgHABQAHgBAEgQQAGgSAAgZQAAgagGgSQgEgPgHgDIAiAAIBBAAQAFgOAHAAIADAAQAGACAEAMIABAEQAGARAAAaQAAAagGASQgEAPgHACIgBAAIgCABQgIAAgFgSQgFgSAAgaQAAgaAFgRIABgEIgBAEQgFARAAAaQAAAaAFASQAFASAIAAIACgBIABAAQAHgCAEgPQAGgSAAgaQAAgagGgRIgBgEQgEgMgGgCICJAAQAFAJADAJIAAgFIAdAAQAZAtgZAqIgdAAQgDALgFAMIhtAAIgdgBIAdABIgFAOgAhpA/QgEAMAAASQAAASAEANQAEANAFAAQAFAAADgNQAFgNAAgSQAAgSgFgMQgDgOgFAAQgFAAgEAOgAAJAwQgEANAAASQAAARAEAOQAEANAEAAQAGAAADgNQAFgOAAgRQAAgSgFgNQgDgOgGAAQgEAAgEAOgAAsCNgAhNAGIhnAAIAAgBQAHgCAEgOQAGgSAAgaQAAgagGgRQgEgQgHgCIA+AAQgCAJAAAMQAAAZAGASQAGASAIAAIACAAIBkAAQgCAJgFAJIgeAAQgCALgFALgAjEgLQgFgQgBgVIAAgNQABgWAFgPQAGgSAIAAIACAAQAHACAEAQQAGARAAAaQAAAagGASQgEAOgHACIgCABQgIAAgGgRgAi7hWQgEANAAASQAAARAEAOQAEANAFAAQAFAAADgNQAFgOAAgRQAAgSgFgNQgDgOgFAAQgFAAgEAOgAACgiIhkAAIAAgBQAHgBAEgQQAGgSAAgZIgBgVQgBgNgEgKQgDgLgEgEQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIAEAAICFAAQAFAJACAJIAAgEIAeAAQAYAtgYApIgeAAQgCAMgFALgAhyg0QgGgSAAgZQAAgMACgJQABgNADgKQAGgSAIAAIACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAEAEADALQAEAKABANIABAVQAAAZgGASQgEAQgHABIAAABIgCAAQgIAAgGgSgAhph+IgCAKQgCAJAAALQAAASAEANQAEANAFAAQAFAAADgNQAFgNAAgSQAAgLgCgJIgDgKQgCgMgEgCIgCAAQgFAAgEAOgAhigigAi0h0gAhejjIhWAAIAAgBQAHgBAEgQQAGgSAAgZQAAgagGgSQgEgPgHgDIBWAAIA0AAQAFAJACAJIAAgEIAeAAQAXAtgXApIgeAAQgCAMgFALgAjEj1QgFgPgBgWIAAgMQABgWAFgQQAGgSAIAAIACAAQAHADAEAPQAGASAAAaQAAAZgGASQgEAQgHABIgCABQgIAAgGgSgAi7k/QgEAMAAASQAAASAEANQAEANAFAAQAFAAADgNQAFgNAAgSQAAgSgFgMQgDgOgFAAQgFAAgEAOgAi0leg");
	this.shape_8.setTransform(20.2625,121.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AzjJgIAAy4IAAgHMAnCAAAIAFALIAAStIgFAHg");
	this.shape_9.setTransform(176.425,165.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("A3hoNMAnIAAAIAHATIH0QBMgnCAAAIAAAHgAKHklIFAJrIAjAAIgjAAIlAprIAAgbIAAAbgADSksIE/JrIAjAAIgjAAIk/prIAAgbIAAAbgAjTksIE+JrIAjAAIgjAAIk+prIAAgbIAAAbgApLkxIE/JsIAjAAIgjAAIk/psIAAgaIAAAagAP/EFIkko+gACjEFIkjo+gAJHD8Ikko+gAjTD8Ikko+g");
	this.shape_10.setTransform(150.55,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ИсточникПитания, new cjs.Rectangle(-1,-1,303.7,228.1), null);


(lib.Галочка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(2,1,1).p("A241fMAatAx+ITE0nIlKppIsRNPIhpiDMgUQgl5g");
	this.shape.setTransform(-88.475,-7.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("A241fIGdm/MAUQAl5IBpCDIMRtPIFKJpIzEUng");
	this.shape_1.setTransform(-88.475,-7.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Галочка, new cjs.Rectangle(-235.9,-190.6,294.9,366.6), null);


(lib.Выпрямитель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEuAPQgPA3hFAdQhFAdiRgBQiQAAhHgdQgGgDgGgCQg9gdgQg1QgSg4BMgpQAJgFAKgEQBMgfCIAAQCbAABXArQBXAsgQA2g");
	this.shape.setTransform(50.3269,21.5254);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AmhkQQAOgLARgKQB5hLD3AAQD3AACLBQQAdARAWASAFWjxIAABnQAIAEAJACAGwjxIAABnQgHAEgGACAHihsQgBABAAABQgZBlhtA0QhtA1jogBQjmgBhxg1Qhxg0gdhqQgDgOgCgNIAAGIQIODoG3jngAGwjyQBCA+gQBIAmpkGIAABnQAJADAIACAlPkGIAABnQgGADgHACAnkiMQgGhHBCg3");
	this.shape_1.setTransform(48.5099,36.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AGtALQAAAAAAABQAAAAAAABQgCAFgLADQgNAEgTAAQgTAAgNgEQgLgDgBgFQgBgBAAgBQAAgGANgEQANgEATAAQATAAANAEQAAAAAAAAQANAEAAAGgAlSgKQAAABAAABQgBAEgGACQgCABgEABQgMAEgUAAQgSAAgNgEQgDgBgDAAQgGgDgBgEQgBgBAAgBQAAgBABgBQADgDAEgDQADgBADgBQAFgBAFgBQAKgCALAAQANAAAKACQAFABAEABQANAEAAAGg");
	this.shape_2.setTransform(48.825,11.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#570000").s().p("AAEB/QiQAAhHgdIgMgFQg9gdgQg1QgSg4BMgpQAJgFAKgEQBMgfCIAAQCbAABXArQBXAsgQA2QgPA3hFAdQhEAciNAAIgFAAg");
	this.shape_3.setTransform(50.3269,21.5254);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B0000").s().p("AnjCKIABmIQACANADAOQAcBqByA1QBxA1DmABQDnABBug1QBtg1AZhlIAAgCIAAFpQjbBzjxAAQjxABkJh1g");
	this.shape_4.setTransform(48.35,48.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#500000").s().p("AAGDqQjmgBhxg2Qhxg0gdhrQgDgNgCgMQgGhHBCg4IgBACIABACIgBAAIAABoIARAFIAAAVQAfATAhgTIAAgVIgEAAIANgFIAAhoIAAgCQAAgGgNgEIgJgCQgJgDgNAAQgMAAgKADIgKACIgGACQAOgLARgKQB5hKD3AAQD3AACLBQQAdARAWASQgNgFgTAAQgTAAgNAFQgNAEAAAGIABACIgBAAIAABnIARAFIAAAVQAeATAhgTIAAgVIgDAAIANgFIAAhnIAAgBQBCA+gQBGIgBADQgZBkhtA2QhsA0jkAAIgFAAgAjNhyQgKAEgJAFQhMApASA6QAQAzA9AdIAMAFQBHAdCQABQCRAABFgdQBFgdAPg2QAQg3hXgsQhXgricAAQiHAAhMAfg");
	this.shape_5.setTransform(48.5099,23.4002);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AFpARQgJgCAAgFQAAgDAJgDQAKgDANAAQANAAAJADQAKADAAADQAAAFgKACQgJAEgNgBQgNABgKgEgAmVgDQgKgDAAgEQAAgEAKgDQAJgCANAAQANAAAKACQAJADABAEQgBAEgJADQgKADgNAAQgNAAgJgDg");
	this.shape_6.setTransform(48.9,11.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AFkBQIAAgWIgRgGIAAhmIABAAIgBgCQAAgGANgEQANgEATAAQATAAANAEIAAABQANADAAAGIAAABIAAABQgCAFgLADQgNAFgTAAQgTAAgNgFQgLgDgBgFQABAFALADQANAFATAAQATAAANgFQALgDACgFIAABmIgNAGIADAAIAAAWQgQAJgQAAQgQAAgPgJgAFqg3QgKADAAADQAAAEAKADQAJADAOAAQANAAAJgDQAKgDAAgEQAAgDgKgDQgJgDgNAAQgOAAgJADgAmbA6IAAgWIgRgFIAAhmIABAAIgBgCIABgCIAHgGIAGgCIAKgDQAKgCALAAQANAAAKACIAJADQANAEAAAGIAAACQgBADgGADIgGACQgMAEgUAAQgSAAgNgEIgGgCQgGgDgBgDQABADAGADIAGACQANAEASAAQAUAAAMgEIAGgCQAGgDABgDIAABmIgNAFIAEAAIAAAWQgRAJgQAAQgQAAgPgJgAmVhNQgJADAAAEQAAAEAJACQAKAEANAAQANAAAJgEQAKgCAAgEQAAgEgKgDQgJgDgNAAQgNAAgKADg");
	this.shape_7.setTransform(48.825,17.7875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Выпрямитель, new cjs.Rectangle(-1,-1,99.1,75.7), null);


(lib.ВыключательКнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABZA9IArg9IgZg5IgtA+IhOA5gAANAAIgpA+IAMAAAgcA+IhnAAIAog+IBoAAIBcg9AA+AFIAbA4");
	this.shape.setTransform(13.175,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgcA+IApg+IBcg9IACAEIgtA+IAbA4IhpABIBOg5IhOA5gAiDA+IAog+IBoAAIgpA+gABZA9Igbg4IAtg+IAZA5IgrA9gAANAAg");
	this.shape_1.setTransform(13.175,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ВыключательКнопка, new cjs.Rectangle(-1,-1,28.4,14.4), null);


(lib.Выключатель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AFShlQgBBUhiA6QhjA9iMAAQiLAAhjg9Qhig6gBhU");
	this.shape.setTransform(33.8,31.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AlRiJIAAAGIAAENQABBUBiA7QBjA9CLAAQCMAABjg9QBig7ABhUIAAkNIAAgGQAAgFAAgFQgHhNhcg4Qhjg9iMAAQiLAAhjA9QhfA6gEBSQAAABAAACg");
	this.shape_1.setTransform(33.8,34.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjuEZQhhg8gChTIAAkNIAAgGIAAgDQADhRBgg7QBjg8CLgBQCMABBjA8QBbA4AIBOIAAAJIAAAGQgCBThhA7QhjA8iMABQiLgBhjg8Qhhg7gChTQACBTBhA7QBjA8CLABQCMgBBjg8QBhg7AChTIAAENQgCBThhA8QhjA8iMABQiLgBhjg8gAFSiDg");
	this.shape_2.setTransform(33.8,34.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Выключатель, new cjs.Rectangle(-1,-1,69.6,70.3), null);


(lib.Монтажный_кадр_1_слой4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// слой4
	this.instance = new lib.Электрон();
	this.instance.parent = this;
	this.instance.setTransform(558.45,480.3,0.6268,0.6866,0,0,0,-122.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-122.8,regY:-2.7,scaleX:1,scaleY:1,rotation:90,x:1255.8,y:5.55},24).to({rotation:164.9998,x:20.25,y:254.35},35).to({regY:-2.6,rotation:284.9996,x:1251.2,y:692.45},39).to({_off:true},1).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_слой3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// слой3
	this.instance = new lib.Электрон();
	this.instance.parent = this;
	this.instance.setTransform(517.45,101.75,0.6721,0.6422,0,57.69,62.2098,-122.4,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-122.8,regY:-2.7,scaleX:1,scaleY:1,rotation:-60.0011,skewX:0,skewY:0,x:18,y:685.15},26).to({rotation:104.9996,x:1255.25,y:485.95},22).to({scaleX:0.9999,scaleY:0.9999,rotation:225,x:36.1,y:33.85},36).to({rotation:45,x:14.75,y:276.85},14).to({_off:true},1).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_слой2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// слой2
	this.instance = new lib.Электрон();
	this.instance.parent = this;
	this.instance.setTransform(20.15,25,0.9902,1.1443,0,0,0,-122.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-122.7,regY:-2.7,scaleX:1.5796,scaleY:1.6666,rotation:150.0008,x:1248.25,y:359.05},20).to({regY:-2.6,rotation:75.001,x:870.15,y:690.25},17).to({regY:-2.8,rotation:180.001,x:442.4,y:41.35},18).to({scaleY:1.6665,rotation:255.0009,x:31.85,y:312.5},27).to({regY:-2.7,scaleX:1.5795,rotation:315.0004,x:211.25,y:691.4},16).to({_off:true},1).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_слой1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// слой1
	this.instance = new lib.Электрон();
	this.instance.parent = this;
	this.instance.setTransform(11.25,477.15,0.6721,0.6422,0,57.69,62.2098,-122.4,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-122.8,scaleX:1,scaleY:1,rotation:-30.0004,skewX:0,skewY:0,x:407.75,y:11.7},25).to({x:1275.95,y:288.05},33).to({regY:-2.6,rotation:-59.9996,x:1201.1,y:699.8},40).to({_off:true},1).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Стрелки = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Стрелки
	this.instance = new lib.Стрелка();
	this.instance.parent = this;
	this.instance.setTransform(751.15,104.75,0.6051,0.8602,-60.0002,0,0,68.4,46.6);
	this.instance._off = true;

	this.instance_1 = new lib.Галочка();
	this.instance_1.parent = this;
	this.instance_1.setTransform(409.7,239.45,0.6326,0.5568,0,0,0,-88.5,-7.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyYSAMAAAgj/MAkxAAAMAAAAj/g");
	this.shape.setTransform(418.65,244.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},189).to({state:[]},4).to({state:[{t:this.instance}]},4).to({state:[]},4).to({state:[{t:this.instance}]},4).to({state:[]},4).to({state:[{t:this.instance}]},4).to({state:[]},3).to({state:[{t:this.instance}]},55).to({state:[]},5).to({state:[{t:this.instance}]},5).to({state:[]},5).to({state:[{t:this.instance}]},5).to({state:[]},5).to({state:[{t:this.instance}]},5).to({state:[]},5).to({state:[{t:this.instance}]},5).to({state:[]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[]},1).to({state:[{t:this.shape},{t:this.instance_1}]},33).to({state:[]},25).to({state:[{t:this.instance}]},47).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},43).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},21).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).to({state:[{t:this.instance}]},7).to({state:[]},7).wait(389));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},3).wait(55).to({_off:false,regX:68.3,regY:46.5,scaleX:0.5523,scaleY:0.9132,rotation:-165.0017,x:49.75,y:26.95},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(5).to({_off:true},1).wait(105).to({_off:false,regX:68.5,regY:46.9,scaleX:0.6511,scaleY:0.9891,rotation:-59.9997,x:754.65,y:89.15},0).to({_off:true},6).wait(6).to({_off:false,rotation:-59.9997},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(43).to({_off:false,regX:68.4,regY:46.6,scaleX:0.6461,scaleY:0.9245,rotation:0,skewX:14.9984,skewY:-165.0028,x:162.95,y:251.05},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(21).to({_off:false,regX:68.5,scaleX:0.6697,scaleY:1.0362,skewX:-14.998,skewY:-194.9978,x:56.75,y:76.55},0).to({_off:true},7).wait(7).to({_off:false,skewX:-14.998},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},7).wait(389));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Соленоид = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Соленоид
	this.instance = new lib.Соленоид();
	this.instance.parent = this;
	this.instance.setTransform(84.55,34.95,0.1646,0.192,0,0,0,55,123.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_РеостатПолзунок = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РеостатПолзунок
	this.instance = new lib.РеостатПолзунок();
	this.instance.parent = this;
	this.instance.setTransform(700.7,208.4,0.6268,0.6866,0,0,0,14.1,22.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({regX:14,regY:22.5,scaleX:0.6633,scaleY:0.4864,y:213.05},0).wait(90).to({x:696.1,y:191.35},21).wait(244).to({regX:14.3,regY:22.8,scaleX:0.1741,scaleY:0.136,x:174.7,y:50.35},75).to({_off:true},670).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Реостат = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Реостат
	this.instance = new lib.Реостат();
	this.instance.parent = this;
	this.instance.setTransform(163.45,50.65,0.1646,0.192,0,0,0,148,168.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ЛАТР = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ЛАТР
	this.instance = new lib.латрРучка();
	this.instance.parent = this;
	this.instance.setTransform(28.75,16.45,0.1646,0.192,0,0,0,21.6,13.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCACIgBgBIgBgBIACgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIACAAIABABIAAABIgBACIgCABIgDgBg");
	this.shape.setTransform(24.75,16.6667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCACIgBgBIgBgBIACgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIACAAIABABIAAABIgBACIgCABIgDgBg");
	this.shape_1.setTransform(24.75,17.4667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABAAIgCgBIgBABIgBAAIABABIABABIAAABIgCgBIgBgCQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIABgBIABAAIABACIACACIAAgCIABgBIAAgBIgBAAIACAAIgBAFIgDgDg");
	this.shape_2.setTransform(24.725,18.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAEIgCgCIAAgCIABgCIADgBIADABIACABIAAABIAAADQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgCAAgAgDgBIgBABIAAABIABABIADAAIAEAAIABgBIAAgBIAAAAIgCgBIgDAAIgDAAg");
	this.shape_3.setTransform(33.2,17.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF99").ss(2,1,1).p("AgnghQgHABgFABQgEABgDACQgLAFgGAMQgFALAAAMQAAADABADQAAAEACAEQADAHAFADQAAAAAAAAIABAAIAAABQAAAAAAAAAgnABQgGAAgGACQgFABgGADQgHADgKAIQgBAAgBABQgDACgBABQgCACAAABQgCADAAAGAAYgiQAJgDAGABQADAAADAAQAKACAFAHQAFAFACAIQABAFAAAJQAAAIABANQAAAHABAJAAaAFQACAEAFACQACACAEABQABAAABAAQAOADAOAEQALAEAKAG");
	this.shape_4.setTransform(28.8875,47.6833);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("Aifh1QgBgHAAgHQAAgHABgGQAIgbAmgUQAWgMAfgFQAZgDAmAAQAlAAAXADQAdAFAWAMQAuAYABAjIAAACQAAAEgBADIABBMIAAAPIAAANIAAAPIAABJIAAAHIAAAIIAAAOAifh1IAAEBQAIAbAmAUQANAHAPAFQAMAEANADQAcAGAgAAQAoAAAigJQAKgDAKgEQAKgEAKgFQAugYABgjIAAgSIAAgEQAAAAAAgBQAAgDAAgEAgYibIAAgBACgh7QgEAfgqAWQgvAZhDAAQhCAAgvgZQgmgUgIgbAgjCFQAAgBAAAAQABgCABgCQAAgBACgBIAAgBQABgBABAAQABAAABgBIACAFQABgBABAAIAAAAQACAAABABIACgFQACABACACIAAAAQABACABACAgiCKQgBgCAAgCQAAAAAAgBAgcCQQgCgBgBgBIgBAAQgBgCgBgCIAFgCQAAgBAAgBIAAgBQAAgBAAgBQABgBABgBQABgBABAAAgjCoQAAgBAAAAQAAgCABgCQABgBABgCIABAAQABgBABgBQAAAAABAAQACgBACAAIABAAQACAAACABQACAAACACIABABQABABABACQABACAAACIAAAAQAAACgBABQAAACgBACQgBABgBAAQgBABgBABAgjCsQAAgCAAgCIAAAAAgcCzQgCgBgCgCIAAAAQgCgCgBgCIAGgBQgBgBAAgCIAAAAQAAgBABgBQAAgBABgBQABgBABgBQABAAABAAIABAAQABAAABAAIACgEAgvByIBaAAIAAAOIAAAzIAAAKIhaAAIAAgVIAAgjgAARCAIAAAAQABAAACABIACgFQACABACACIAAAAQABACABABIAAAAQABACAAACIAAABQAAABAAACQgBACgBACQgBAAAAABQgBABgCABQgCABgDAAIgBAAQgCAAgDgBAARB7IAAAFAARB7IAAAAQADAAACABAAPCBQAAgBACAAAAJB+QABgBABAAQABgBAAAAIADAFAAGCBQABgBABgBQABAAAAgBAALCEQABgBAAgBQABgBACAAAALCGQAAgBAAgBAALCJQAAgBAAgBIAAgBIgGAAQAAgDABgCIAFADAAMCCIgDgEAAMB8QACAAADgBAAGCLQgBgCAAgCIAAgBAAPCNQgBgBgBgBIgBAAQAAgBgBgBAASCNIgBAAQgBAAgBAAIgDAEQgCgBgCgBQgCgCAAgCIAFgCAASCNIAAAFAANCLIgFAEAgSCBIAEgDAgRCDQABABAAABIAAABQAAABAAABIAFABQgBACgBACQgBAAAAABQgBABgCABAgLCFQAAABAAAAQAAACAAABAgRCDIAFgBQABABAAACAgSCBQABABAAABAgQCFIAFAAAgXB6IAAAAQADAAACABAgXB6IAAAFAgbB7QACAAACgBAgZCMIgDAEAgZCMQgBgBgBgBQgBgBgBgBAgTCLQgCABgBAAIgBAAQgBAAgBAAAgWCRQAAAAgBAAQgCAAgDgBAgWCMIAAAFAgRCKQgBAAAAAAQgBABAAAAIACAFQgCABgDAAAgRCKIAEADAgUCAQABAAABABAgQCIQgBABAAABAgQCoIAFAAAgRCmIAFgCAgRCmQAAABABABIAAAAQAAABgBABQAAABgBABQAAAAAAABQgBAAgBABQgBAAgBABQgBAAAAAAQgCAAgBgBQgBAAgBgBQgBgBAAgBAgVCiQABABACABQABABAAABAgYCdIAAAFAgcCeIACAEAgWC0QgBAAAAAAQgDAAgCgBAgWCvIAAAFAgaCuIgCAFAgRCqIAFABAgSCsIAFADAgUCuIADAEQgCACgDAAAgSCkIAEgDAASCdIABAAQACAAACABAAOCeQACgBACAAIAAAFAAICjQABgBABgCQAAAAAAAAQABgBABgBQABAAABAAIACAEQABAAABAAIABAAQABAAABAAQABABABABQABABABABQAAABAAABIAAAAQAAABAAABQAAABgBABIgBABQAAAAgBABQgBAAgCABIAAAAQgCAAgBgBQgBAAgBgBIAAAAQgBgBAAgBQgBgBAAgCIAAAAQAAgBABgBQAAgBABgBQABgBABgBAAICjIAFADAAOCkIgEgEAAHCsQgBgCAAgCIAAAAQABgDABgCAAKCwQgCgCgBgCIAGgBAATC0IAAAAQgDAAgCgBAAOCtIgEADAAQCuIgCAFQgCgBgCgCIAAAAAAMCoIgGAAAgiCjIAFADAgeCoIgFAAAgbCKIgFAEAgdCFIgGAAAghCAIAEADAgbCBIgEgEAgcCtIgEADAgcCkIgDgEAAWCCQABABAAABQABABAAABIAAABQAAABAAAAQgBACAAAAQgBABAAAAQgBABAAAAIACAFAAXCEIAFgCAAUCBQABAAABABIAEgDAAYCGIAFAAAAXCKIAEAEAAYCIIAFACAAfCoIAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAACgCACAAbChQACABAAACQABACABACAAZCmIAEgCAAVCiIACgEQACAAACACIAAABAAZCoIAGAAAAXCkIAEgDAAYCzQgCABgDAAAAWCuIACAFAATCvIAAAFAAYCsIAEADQAAABgBAAQgBACgCABAAZCqIAFABAAVCMQgCABgBAA");
	this.shape_5.setTransform(28.475,31.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Ag9CiIgZgHQABgGABgCIADgEIADgDIACgBIACAJQADAGAFADIAAAAIABAAIAAABIAAAAIAAAAIAAgBIgBAAIAAAAQgFgDgDgGIgCgJIgCABIgDADIgDAEQgBACgBAGQgPgFgNgHQgmgUgHgbIAAkCQAHAbAmAVQAwAZBCgBQBCABAvgZQAqgWAEgfIABBLQgDABgCADIgDAEIAAABQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIABABIABABIAEAAIABAAIAAAMIgEADIgCAFIAAABQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAAABIACACIADAAIAABIIgEADIgCAFIAAABIABAEIABABIACACIACAAIAAANIgEADIgCAEIAAACIABAEIABABIACABIACAAIABgCIAAASQgCAiguAZIgUAJQgKgGgLgEIABARQghAJgoAAQghAAgcgGgAgwBZIAAAjIAAAVIBaAAIAAgKIAAgzIAAgPIhaAAgAAsCHIAcAHIgcgHIgCAAIACAAgAAwBVQAKACAGAGQAEAFACAIIACAQIAAAUIAAgUIgCgQQgCgIgEgFQgGgGgKgCIgGgBIAGABgAg7CAQgHADgKAIQAKgIAHgDQAHgDAEgBQgEABgHADgAhNCFIABAGIgBgGQAAgNAGgKQAFgMALgGIAHgDIgHADQgLAGgFAMQgGAKAAANIAAAAgABXBkIgDAFIAAABIAAADIABABIABACQACABAEgBIABAAQADAAACgCIACgCIABgEIAAgBQAAgCgCgDQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAIgBAAQgCABgDACgAB1BZIgDAFIAAABIAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAABABQACABADAAIABAAIADgBIACgCIAAgBIABgBIACgDIAAgBQAAgDgCgCQgCgBgDgBIgCAAQgDACgCACgACMBLIgCAEIgBABIAAAAQABAEABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIACAAIAAgBQADAAACgCIACgCIABgEIAAAAIAAgBQAAgBAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBAAIgEgCIgBAAQgEABgCADgABXBHQgCADgBACIAAABIAAACIABABIABADQACACAEgBIABAAQADgBACgDIACgBIABgEQAAgEgCgCQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAIgBAAQgCABgDACgAB1A8IgDAFIAAABIAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQACACADABIABgBIADgCIACgBIABgCIACgDIAAgBQAAgDgCgCQgCgCgDABIgCAAQgDAAgCADgACMAuIgCAEIgBABQABAEABACIAFABIACAAIAAAAQADgBACgCIACgCIABgDIAAgBIAAgBIAAAAIgCgEIgBgBIgEgBIAAABIgBAAQgEAAgCADgAA5gKIgCAGIAAAAIABAEIABABQACABAEAAIABAAQACgBACgCIACgBIABgDIAAgBQAAgDgCgCQAAAAgBgBQgBAAAAAAQgBgBAAAAQgBAAAAABIgBAAIgBAAQgDAAgDACgABXgQQgCABgBADIAAABIAAACIAAACIACACQACABAEAAIAAAAIAAAAQADgBADgCIABgCIACgEQAAgEgCgCQgCgBgEAAIgBAAQgDABgCADgAhhgTQgCACAAAEIAAAAIABAEIACACQABACADABIABAAQAEAAACgBIABgCIAAgCIABgCIgBgBQAAgDgCgBQgCgDgEgBIgBAAQgDAAgBABgAB1gcQgCACgBADIAAABIAAAAQAAABAAABQABABAAAAQAAABAAAAQABABAAAAQACACADAAIABgBIAAAAIAEgBIACgCIAAAAIABgCIABgDQAAgEgCgCQgBgCgEABIgBAAQgDABgCACgAiAgeQgCACAAADIAAABIACADIABABIABABIACACIACABIABAAQADAAADgBIACgFIAAAAIAAgBQgBgDgCgCQgCgCgDgBIgBAAIgBAAQgCgBgDACgAAYghIgCADIAAACQAAAEACACQADADADgBQADABADgDQACgCAAgEIAAgCIgCgDIAAAAQgCgCgEAAQgDAAgDACgAA3glQgCACAAADIgBABIABAEIABACQACACAEgBIAAAAQAEgBABgDIACgBIABgDIAAgBIAAAAQABgEgDgCQgBgBgDABIgCAAQgDAAgCACgACMgqQgCACgBACIAAABQAAAEACACIAEABIACAAIABAAQADgBACgCIACgCIABgEIAAAAIAAgBIAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgCgBIgDgBIgBAAIAAAAQgDABgDADgAiWgtIAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAABIAAAAIABAEIABACIAFADIABAAIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQADgCgBgEIAAgBQAAgCgCgCQgDgDgCgBIgCAAIgEABgAhhgtQgCADAAADIAAAAIABADIACADQABACADAAIABAAQAEABACgCIABgBIAAgBIABgDIgBgBIgCgFQgCgCgEgBIAAAAIgBAAQgDAAgBABgABXgsQgCACgBADIAAABIAAACIAAABIACACQACACAEAAIAAAAIAAgBQADgBADgCIABgCIACgDIAAAAQAAgEgCgCQgCgBgEAAIgBAAQgDABgCACgAiAg4QgCACAAADIAAABIACADIABABIABABIACACIACABIABAAQADAAADgBIACgFIAAAAIAAgBQgBgDgCgCQgCgCgDgBIgBAAIAAgBIgBAAQgCABgDABgAByg4IgDAGIAAABIAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAAAQACADAEgBIABAAIADgCIACgBIAAgBIACgBIABgDIAAgBQAAgDgCgCQgCgCgDABIgBAAQgDAAgDACgAifgwIACAAIAAgBIACgBIACgBIABgEIAAgBIgEgFIgBgCIgCgBgAiWhGIAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIAAACIAAAAIABAEIABACIAFADIABAAIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQADgBgBgEIAAgBIgCgEIgFgEIgCAAIgEACgACHhHQgCACgBADIAAABQAAADACACQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIACAAIABAAIAGgEIABgCIABgDIAAAAIAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAQgDABgCACgAifhLIACAAIACgBIACgBIABgEIAAgCIgEgEIgDgDgABICOQALAEAKAGIgUAHIgBgRgAASCCIgDAAIgCgBIAAAAIgBgCIgBgDIAAgBIABgBIABgCIACgCIADAAIAAAAIACAAIACACIACACIAAABIAAABIAAABIgBADIgBABIgBABIgCAAgAgYCCIgCAAIgDgBIgBgCIgBgDIAAgBIABgBIABgCIADgCIACAAIAAAAIACAAIADACIACACIAAABIAAABIAAABIgBADIgBABIgCABIgCAAIgBAAgAARBgIgDAAIgCgBIgBAAIAAgCIgBgCIAAgBIABgCIAAgDIADAAIACgBIABAAIACABIACAAIABADIABACIAAABIAAABIgBACIgBABIgBABIgDAAgAgXBgIgDgBIgCgBIgCgCIAAgDIAAAAIAAgCIACgCIACgBIACgBIABAAIACABIADABIABACIABACIAAAAIgBADIgBACIAAAAIgCABIgDABg");
	this.shape_6.setTransform(28.55,35.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjARQgPgIAAgKQAAgLAPgHIAGgDIAAABIgGAVIAEADIACACQADACAGABIACAAIAJABIAJABIADAAQAJAAAFgBIAFgCQAKgEABgDIgHgVIAAgBIAAgCQAFACAFADQAPAHAAALQAAAKgPAIQgPAIgVAAQgUAAgPgIg");
	this.shape_7.setTransform(28.925,17.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgwDBIAAgVQAGgBAGgBQgGABgGABIAAgjIAMgCIAAACIAGAAIAAAAIAAADIACACIACABIgDAFIgDgDIgBAAIAFgDIgFADIgCgDIAFgCIgFACIgBgEIAAgBIAAABIABAEIACADIABAAIADADIADgFIACABIABAAIADgBIABgBIABAAIABgCIAFABIgFgBIAAgDIAAAAIgBgCIAFgCIABAEIgFAAIAFAAIAAABIAAADIAAgDIAAgBIgBgEIgFACIgBgCIAEgDIgEADIgCgBIACgFIgFgBIAAAAIAAAAIAFABIgCAFIgDgBIAAAAIAAgFIgEABIgCABIgCABIACgBIACgBIACAFIgCABIgEgEIAEAEIgCACIgEgDIAEADIAAACIgGAAIAAgCIACgDIACgCIAAgBIAAABIgCACIgCADIgMACIAAgUIBaAAIAAAPIgBAAIgBAAIAAAAIAAAAIgLABIgCABIACgBIALgBIAAAAIAAAAIABAAIABAAIAAAzIgGgDQgFgBgBgFQABAFAFABIAGADIAAAKgAASC4IAFgCIADgCIABgBIgEgDIAEADIgBABIgDACIgCgEIACAEIgFACIAAgGIAAAGIAAAAIgFgBIACgFIgCAFIgEgDIAAgBIAEgCIgEACIAAABIAEADIAFABIAAAAgAgXC4QADAAACgCIgDgEIADAEQgCACgDAAIAAgGIAAAGIgBAAIgFgCIACgEIgCAEIgEgCIAAgBIAEgCIgEACIgDgDIAGgBIgGABIADADIAAABIAEACIAFACIABAAgAgQC0IgCACIACgCIACgBIABgEIgFgCIAFACIgBAEIgFgDIAFADIgCABgAAGCwQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAGgBIgGABIgBgEIAAgBIAAABIABAEgAAbCzIACgEIABgBIAAgBIAAgBIAAgBIgBgDIgDgEIAAAAIgEgDIgCAFIgCAAIgBAAIgCAAIgCgFIACAFIgCACIgEgFIAEAFIgBACIgBABIgGAAIAGAAIAAABIABADIABACIAAAAIACABIADAAIAAAAIADAAIABgBIABgBIABgDIAAgBIAAgBIAAgBIAFgCIgFACIgCgCIAEgEIADAEIABADIgGAAIAGAAIAAABIAAABIAAABIgBABIgFgCIAFACIgCAEgAgfCsIABADIABACIACABIADAAIABAAIACAAIACgBIAAgBIABgDIABgBIAAgBIgBgBIAFgCIgFACIgBgCIAEgEIACAEIABADIgFAAIAFAAIgBgDIgCgEIgBAAIgEgDIgEgBIgBAAIABAAIAEABIgCAFIgCAAIgBAAIAAgGIgEABIACAFIgCACIgDgFIADAFIgBACIgFgDIAFADIgBABIgFAAIAAgBIABgDIACgDIABgBIgBABIgCADIgBADIAAABIAAABIAAAEIAAgEIAAgBIAFAAgAgMCsIgBADIABgDIAAgBgAALCiIgCABIAAABIgCADIgCAEIACgEIAFADIgFgDIACgDIAAgBIACgBIACgBIgCABgAARCmIAAgGIABAAIAEABIgEgBIgBAAIgEABIAEgBgAgeCiIgCABIACgBIABgBIgBABgAARCWQADAAACgBIADgDIABgBIgEgDIAEADIgBABIgDADIgCgFIACAFQgCABgDAAIgBAAIgFgBIAFABIABAAgAARCWIAAgGIADAAIABgBIABgBIABgCIAAgBIAAgBIgBgCIAFgCIgFACIgBgDIAEgCIACADIAAAAIABAEIgFAAIAFAAIAAABIAAADIAAgDIAAgBIgBgEIAAAAIgCgDIAAAAIgEgDIAEADIAAAAIgEACIgCAAIACgFIgCAFIgDgBIAAAAIAAgFIAAAAIAFABIgFgBIAAAAIAAAFIgCABIgDgFIAFgBIgFABIgBAAIgCACIADADIgBADIgFgDIACgCIABgBIgBABIgCACIAFADIAAACIgGAAIABgFIgBAFIAGAAIAAABIAAACIgFACIgBgEIAAgBIAAABIABAEIAFgCIABACIABAAIgFADIgCgDIACADIAFgDIACABIgDAFIgEgDIAEADIADgFIACAAIABAAgAgXCVQADAAACgBIgCgFIACAFQgCABgDAAIAAgFIAAAFIgBAAIgFgBIAFABIABAAgAgPCRIgDADIADgDIABgBIACgDIgCADIgEgCIAEACIgBABgAAaCRIACgDIgFgCIAFACIgCADgAgPCCIACADIgCgDIAAAAIgEgDIAEADIAAAAgAgXC4gAANC3IAAAAgAgdC2IAAAAgAAXC2gAghCzgAgkCwIAAAAgAAdCvgAgNCvgAAeCrgAAWCoIgCgCIACgFIAEADIAAAAIgEAEIAAAAgAgWCmIACgFIAEADIABAAIgEAEIgDgCgAAPCmgAgdChIAEgBIAAAGIgCAAgAAaCkIAAAAgAgPCkgABWCgIgBgCIgBgBIAAgDIAAgBIADgFQACgCADgBIABAAIABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQADADgBACIAAABIgBAEIgBACQgCACgDAAIgBAAIgCABIgEgBgAB0CUQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAAAIAAgBIADgFQACgCADgCIACAAQADABACABQACACAAADIAAABIgCADIgBABIAAABIgCACIgDABIgBAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgXCVIAAAAgAAaCRgAghCRgAgOCQgAAcCOgAgjCOIAAAAgAAcCKgAAcCKIAAAAgAAcCKgAgMCJIAAAAgAgMCJgACPCHQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgCgBAAgEIAAAAIABgBIACgEQACgDAEgBIABAAIAEACIABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAABIAAABIAAAAIgCAEIgBACQgCACgDAAIgBABIgCAAgAAbCGIAAAAgAAICCIACgCIABAAIADAFIgDAAgABWCDIgBgDIgBgBIAAgCIAAgBQABgCACgDQACgCADgBIABAAIABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQADACgBAEIgBAEIgBABQgCADgDABIgBAAIgCAAIgEgBgAgcB/IAEgBIAAAFIgCABgAALCAgAgTB/IAAAAgAB0B2QAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgBIAAgBIADgFQACgDADAAIACAAQADgBACACQACACAAADIAAABIgCADIgBACIgCABIgDACIgBABQgEgBgCgCgACeB0IgCgBIgBgBIgBgEIAAgCIACgEIAEgDIAAAAIAAAIIAAABIAAAEIAAACIgCAAgACPBqIgEgBQgCgCAAgEIABgBIACgEQACgDAEAAIAAAAIABgBIAEABIABABIACAEIAAAAIAAABIAAABIgCADIgBACQgCACgDABIgBAAIgBAAIgBAAgACeBYIgCgCIgBgBIgBgEIAAgBIACgFIAEgDIAAAIIAAgIIAAAAIAAAIIAAAIIgCAAgAA5AxIgCgCIAAgEIAAAAIACgGQADgCADAAIAAAAIABAAQABgBAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIAAABIgBADIgCABQgCADgDABIgBAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgABWAqIgCgCIAAgCIAAgCIAAgBQABgDACgBQACgDADgBIABAAQADAAACABQACACAAAEIgBAEIgCACQgCACgDABIAAAAIAAAAIgCAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAhcArQgDgBgCgCIgBgCIgCgEIAAAAQAAgEACgCQACgBADAAIABAAQAEABACADQACABAAADIABABIgBACIAAACIgBACQgCABgEAAIgBAAgAB0AeQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIAAAAIAAgBQABgDACgCQACgCADgBIABAAQADgBACACQACACAAAEIgBADIgBACIgBAAIgCACIgDABIAAAAIgBABQgDAAgCgCgAh5AfIgBAAIgDgBIgCgCIAAgBIgBgBIgCgDIAAgBQAAgDACgCQACgCADABIABAAIABAAQADABACACQACACAAADIABABIAAAAIgCAFIgEABIgCAAgAAYAZQgCgCAAgEIAAgCIACgDQADgCADAAQADAAACACIABAAIACADIAAACQAAAEgCACQgDADgDgBQgDABgDgDgAA2AWIgBgCIgBgEIAAgBQABgDACgCQACgCADAAIABAAQADgBACABQADACgBAEIAAAAIAAABIgBADIgCABQgCADgDABIAAAAIgCAAIgEgBgACPARIgEgBQgCgCAAgEIAAgBQABgCACgCQACgDADgBIABAAIABAAIADABIABABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIAAABIAAAAIgBAEIgBACQgDACgCABIgBAAIgBAAIgBAAgAiQARIgBAAIgFgDIgCgCIgBgEIAAAAIAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIABgBIAEgBIABAAQADABADADQACACAAACIAAABQABAEgDACQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAgAhbAQIgBAAQgDAAgCgCIgBgDIgCgDIAAAAQAAgDACgDQACgBADAAIABAAIAAAAQAEABACACIACAFIABABIgBADIAAABIgBABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgBgBgABWAOIgCgCIAAgBIAAgCIAAgBQABgDACgCQACgCADgBIABAAQADAAACABQACACAAAEIAAAAIgBADIgCACQgCACgDABIAAABIAAAAIgCAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAh5AFIgBAAIgDgBIgCgCIAAgBIgBgBIgCgCIAAgBQAAgDACgCQACgBADgBIABAAIAAABIABAAQADABACACQACACAAADIABABIAAAAIgCAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgBAAgABxACQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAAAIAAgBIAAgBIADgGQACgCADAAIACAAQADgBACACQACACAAADIAAABIgCADIgBAAIAAABIgCABIgDACIgBAAIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgACdAAIgCgCIAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgBIACgFIAEgDIAAAQIgDAAgAifAAIAAgQIACABIABACIADAFIAAABIgBAEIgBABIgCABIAAABIgCAAgAiQgIIgBAAIgFgDIgCgCIgBgEIAAAAIAAgCQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIABAAIAEgCIABAAIAGAEIACAEIAAABQABAEgDABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAgACLgKIgCAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgDgCABgDIAAgBQAAgDACgCQADgCADgBIABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAACIAAAAIgBADIgCACIgFAEIgBAAgAifgqIADADIADAEIAAACIgBAEIgBABIgCABIgCAAgACbgcIgCgBIAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgBIACgEQACgDAEgBIAAAQIAAgQIAAAAIAAADIAAALIAAACIAAAAIgBAAIgCAAIgCAAgAAGhBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBIABgCIACgCIAGAAIAFAAIAAAAIACACIABACQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBABQgCABgDAAQgEAAgCgBgAghhDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgCIACgBQACgBAEAAIAFABIAAAAIACABIABACQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBABQgCABgDAAQgEAAgCgBgAAshGQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgBIACgCQADgCADAAIAFABIABABIACACIAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgDABgDAAQgDAAgDgBgAhIhLQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIACgCQADgBADAAIAFABIABAAIACACIAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgDABgDABQgDgBgDgBgAAWhNQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIACgBQADgCADAAIAFABIABABIACABIAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgDACgDAAQgDAAgDgCgAgNhNQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgBIABgBQADgCADAAIAGABIAAABIABABIAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCACgEAAQgDAAgDgCgABRhQQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAIABgCIACgCQACgCAEAAQADAAACACIAAAAIACACIABACQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgCACgDAAQgEAAgCgCgAgxhRQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIABgCIACgCIAFgBIAGABIAAAAIACACIABACQAAAAAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgGABIgFgBgAA5hXQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAgBIACgCQACgBAEAAIAFABIABAAIABACIABABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQgDACgDAAQgEAAgCgCgAgdhZQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgBIABgDQADgBADAAQADAAACABIABAAIACADIAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgCABgEAAQgDAAgDgBgAhlhZQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgBIACgDQACgBAEAAQADAAACABIAAAAIACADIABABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgCABgDAAQgEAAgCgBgAAihaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgCIABgCQADgBADAAQADAAACABIABAAIACACIAAACQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgCABgEAAQgDAAgDgBgAhLhaQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgCIACgCQACgBAEAAQADAAACABIABAAIACACIAAACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgDABgDAAQgEAAgCgBgABuhdQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgCIACgBQADgCADAAQADAAACACIABAAIACABIAAACQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAABIgGABIgGgBgABWhgQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIACgCIAGgBIAFABIABAAIACACIAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgDACgDAAQgEAAgCgCgAhIhqQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgBIACgCIAGgCIAFACIABAAIACACIAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgDACgDAAQgDAAgDgCgAhhhqQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIACgCIAGgCIAFACIAAAAIACACIABABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgCACgDAAQgEAAgCgCgABkhuQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIABgCIABgBQADgCADABIAFAAIABABIACABIAAACQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgCABgEAAQgDAAgDgBgAh8huQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIABgCIACgBQACgCADABIAGAAIAAABIACABIABACQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgCABgEAAQgDAAgCgBgABPhvQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgBIACgCIAFgBIAGABIAAAAIACACIABABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgCABgEABQgDgBgCgBgAB8hwQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBIABgCIACgBIAFgBIAGABIAAAAIACABIAAACQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgGABIgFgBgABnh9QgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIABgCIACgCIAGgBIAFABIAAAAIACACIABACQAAAAAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgCABgDAAQgEAAgCgBgAhxh9QgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIABgCIACgCIAFgBIAGABIACACIAAACQAAAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgCABgEAAQgDAAgCgBgABPiAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBIABgCIACgBQACgCADAAQADAAADACIAAAAIACABIABACQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBABIgGABIgFgBgAhbiDQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgCIACgBQACgCAEAAIAFABIAAABIACABIABACQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgCACgDAAQgEAAgCgCgAiJiHQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIABgBIACgDIAFgBIAGABIAAAAIACADIABABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgCACgEAAQgDAAgCgCgAB8iHQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIABgCIACgCIAFgBIAGABIAAAAIACACIAAACQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgGABIgFgBgABhiNQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgBIABgCQADgBADAAIAFABIABAAIACACIAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgCACgEAAQgDAAgDgCgAhviNQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgBIACgCQACgBAEAAIAFABIAAAAIACACIABABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgCACgDAAQgEAAgCgCgAhfiXQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgCIACgCQACgCAEAAQADAAACACIAAAAIACACIABACQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgCACgDAAQgEAAgCgCgABPiZQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIABgCIACgCQACgBADgBIAGABIAAABIACACIABACQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgCACgEAAQgDAAgCgCgAg1iZQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIABgCIACgCQACgBAEgBIAFABIAAABIACACIABACQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgCACgDAAQgEAAgCgCgABnibQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIABgCIACgCQACgBAEAAIAFABIAAAAIACACIABACQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgCABgDABQgEgBgCgBgAh5ibIgBgBIgBgCIAAgCIACgCQACgBAEAAIAFABIAAAAIACACIABACIgBACIgCABQgCABgDABQgEgBgCgBgAAgigQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgBIACgCIAGgCIAFACIAAAAIACACIABABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgCACgDAAQgEAAgCgCgAhLigQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgCIACgBQACgCAEAAQADAAACACIABAAIACABIAAACQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgDABgDAAQgEAAgCgBgAgXigQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgCIACgBQACgCAEAAQADAAACACIABAAIABABIgMAFIgBAAgAAzikQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgBIACgCQACgCADABIAFAAIABABIACACIAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgCABgEAAQgDAAgCgBgAhhioQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgBIACgCIAFgBIAGABIAAAAIACACIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgGABIgFgBgABJipQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgCIACgCIAGgBIAFABIABAAIACACIAAACQAAAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgDABgDAAQgDAAgDgBgAgqipQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgCIABgCIAGgBIAFABIABAAIACACIAAACQAAAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgCABgEAAQgDAAgDgBgAAWisQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgCIACgCQADgBADgBQADABACABIABAAIACACIAAACQAAAAAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgDABgDAAQgDAAgDgBgAgJitQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBIABgCIACgCQACgBADAAQADAAACABIAAAAIACACIAAACQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgFABIgFgBgAhBiyQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgBIACgCIAGgCIAFACIABAAIABACIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgDACgDAAQgEAAgCgCgAApi2QgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIABgCIACgCQACgBAEAAQADAAACABIAAAAIACACIABACQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgCABgDAAQgEAAgCgBgAAGi3QgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBIABgCIACgBIAGgBIAFABIAAAAIACABIABACQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBABQgCABgDAAQgEAAgCgBgAgdi3QgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBIABgCIACgBIAFgBIAGABIAAAAIACABIAAACQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQgCABgEAAQgDAAgCgBg");
	this.shape_8.setTransform(28.575,30.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhxA6QgmgUgIgbQgBgGAAgHQAAgGABgHQAIgbAmgUQAWgMAfgEQAZgEAmAAQAlAAAXAEQAdAEAWAMQAuAYABAjIAAADIgBAFQgEAfgqAWQgvAZhDAAQhCAAgvgZgAAHA0IgCACIgBACQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQACABAEAAQADAAACgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIgBgCIgCgCIAAAAIgFgBIgGABgAggAyIgCACIAAACQAAAAAAAAQAAABAAAAQAAABABAAQAAABABAAQACACAEgBQADABACgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIgBgCIgCgCIAAAAIgFgBQgEAAgCABgAAtAwIgCACIAAABQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAQADAAADgBQAAgBABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgBIgCgCIgBgBIgFAAQgDgBgDACgAhHArIgCACIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAQADACADAAQADAAADgCQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIgCgCIgBgBIgFgBQgDAAgDACgAAXApIgCABIAAACQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAQADACADAAQADAAADgCQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgCIgCgBIgBgBIgFgBQgDABgDABgAgMApIgBABIgBACQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQADACADAAQAEAAACgCQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgCIgBgBIAAgBIgGgBQgDABgDABgABSAmIgCACIgBACQAAABAAAAQABAAAAABQAAAAABAAQAAABABAAQACABAEABQADgBACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIgBgCIgCgCIAAAAQgCgBgDAAQgEAAgCABgAgwAlIgCABIgBACQAAABAAAAQABAAAAABQAAAAABABQAAAAABABIAFABIAGgBQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIgBgCIgCgBIAAAAIgGgBIgFABgAA6AfIgCACIAAACQAAAAAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAEgBQADABADgCQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAIgBgCIgBgCIgBAAIgFgBQgEAAgCABgAgcAdIgBACIgBABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABADAAQAEAAACgBQAAgBABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgBIgCgCIgBAAQgCgCgDABQgDgBgDACgAhkAdIgCACIAAABQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQACABAEAAQADAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIgBgBIgCgCIAAAAQgCgCgDABQgEgBgCACgAAjAbIgBACIgBABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQADACADAAQAEAAACgCQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgBIgCgCIgBAAQgCgBgDAAQgDAAgDABgAhKAbIgCACIAAABQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACACAEAAQADAAADgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAgBIgCgCIgBAAQgCgBgDAAQgEAAgCABgABvAYIgCACIAAACQAAAAAAAAQAAABAAAAQABABAAAAQABABAAAAIAGABIAGgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAAgCIgCgCIgBAAQgCgBgDgBQgDABgDABgABXAVIgCACIAAACQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABQACABAEAAQADAAADgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgCIgCgCIgBAAIgFAAIgGAAgAgWgpIgCABIAAACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIABAAQgDAEAAAEIgHADQgPAHAAALQAAAKAPAHQAPAJAVAAQAVAAAPgJQAPgHAAgKQAAgLgPgHQgFgDgGgCQgBgFgGgFQgJgEgLAAQgHAAgFACIgBgBIgBAAQgCgCgDABQgEgBgCACgAhHAMIgCACIAAABQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQADABADABQADgBADgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgBIgCgCIgBAAIgFgBIgGABgAhgAMIgCACIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACABAEABQADgBACgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgBIgCgCIAAAAIgFgBIgGABgABlAIIgBABIgBACQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQADABADAAQAEAAACgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgCIgCgBIgBgBIgFgBQgDAAgDACgAh7AIIgCABIgBACQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQACABADAAQAEAAACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgCIgCgBIAAgBIgGgBQgDAAgCACgABQAGIgCADIgBABQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACACADAAQAEAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIgBgBIgCgDIAAAAIgGgBIgFABgAB9AFIgCACIgBACQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAIAFABIAGgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIgCgCIAAAAIgGgBIgFABgABogGIgCABIgBACQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQACABAEAAQADAAACgBQABAAAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIgBgCIgCgBIAAAAIgFgBIgGABgAhwgGIgCABIgBACQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQACABADAAQAEAAACgBQAAAAABAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAgCIgCgBIgGgBIgFABgABQgKIgCACIgBACQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAIAFABIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIgBgCIgCgCIAAAAQgDgCgDAAQgDAAgCACgAhagMIgCABIAAADQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQACACAEAAQADAAACgCQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIgBgDIgCgBIAAgBIgFgBQgEABgCABgAiIgQIgCACIgBABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACABADABQAEgBACgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgBIgCgCIAAAAIgGgBIgFABgAB9gQIgCABIgBACQAAABAAAAQABAAAAABQAAAAABABQAAAAABABIAFABIAGgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAgCIgCgBIAAAAIgGgBIgFABgABigWIgBACIgBACQAAAAAAABQAAAAABAAQAAABAAAAQABABAAAAQADACADgBQAEABACgCQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgCIgCgCIgBAAIgFgBQgDAAgDABgAhugWIgCACIAAACQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAQACACAEgBQADABACgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgCIgCgCIAAAAIgFgBQgEAAgCABgAheggIgCACIAAACQAAAAAAABQAAAAAAAAQABABAAAAQABABAAAAQACABAEABQADgBACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgCIgCgCIAAAAQgCgBgDAAQgEAAgCABgABQghIgCABIgBACQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQACABADABQAEgBACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgCIgCgBIAAgBIgGgBQgDAAgCACgAg0ghIgCABIgBACQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQACABAEABQADgBACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgCIgCgBIAAgBIgFgBQgEAAgCACgABogkIgCACIgBABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQACACAEAAQADAAACgCQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIgBgBIgCgCIAAAAIgFgCQgEAAgCACgAh4gkIgCACIAAABIABACIABABQACACAEAAQADAAACgCIACgBIABgCIgBgBIgCgCIAAAAIgFgCQgEAAgCACgAAhgpIgCACIAAABQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACABAEAAQADAAACgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgBIgCgCIAAAAIgFgBIgGABgAhKgpIgCABIAAACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQACABAEAAQADAAADgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAAgCIgCgBIgBAAQgCgCgDABQgEgBgCACgAA0gtIgCACIgBABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQACABADAAQAEAAACgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgBIgCgCIgBgBIgFgBQgDAAgCACgAhggyIgCACIgBACQAAAAAAABQABAAAAABQAAAAABABQAAAAABABIAFAAIAGAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgCIgCgCIAAAAIgGAAIgFAAgABKgyIgCABIAAACQAAABAAAAQAAAAAAABQABAAAAABQABAAAAABQADABADAAQADAAADgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAgCIgCgBIgBAAIgFgBIgGABgAgpgyIgBABIgBACQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQADABADAAQAEAAACgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAgCIgCgBIgBAAIgFgBIgGABgAAXg1IgCACIAAABQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAQADACADAAQADAAADgCQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgBIgCgCIgBAAQgCgCgDAAQgDAAgDACgAgIg3IgCACIgBACQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAIAFABIAFgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAAgCIgCgCIAAAAQgCgCgDAAQgDAAgCACgAhAg7IgCACIAAABQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAQACABAEABQADgBADgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIgBgBIgBgCIgBAAIgFgBIgGABgAAqg/IgCACIgBABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACACAEAAQADAAACgCQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIgBgBIgCgCIAAAAQgCgCgDAAQgEAAgCACgAAHhBIgCACIgBACQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQACABAEAAQADAAACgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIgBgCIgCgCIAAAAIgFgBIgGABgAgchBIgCACIgBACQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQACABADAAQAEAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIgCgCIAAAAIgGgBIgFABg");
	this.shape_9.setTransform(28.475,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Кнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Кнопка
	this.but1 = new lib.Play();
	this.but1.name = "but1";
	this.but1.parent = this;
	this.but1.setTransform(391.2,345.9,0.434,0.4801,0,0,0,0.5,0.4);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.but1).wait(1).to({regX:0,regY:0,scaleX:0.6924,scaleY:0.6992,x:624,y:501.1},0).to({_off:true},1).wait(1198));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Источник_питания = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Источник_питания
	this.instance = new lib.ИсточникПитания();
	this.instance.parent = this;
	this.instance.setTransform(126.4,47.45,0.1646,0.192,0,0,0,151.3,113.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(2,1,1).p("AgrgYQgBAAgBADQAAACAAACQACADADADQAGAEAGABQAHACAGgCQAEgBARgIQANgHAJACQAHACAFAGQAFAGABAHQAAAFgCAFQgCAGgEABQgCAAgDAAQgEgBgBABQgDAAgCACQgCADABAC");
	this.shape.setTransform(161.0175,85.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AgbgbQgNAFAAAJQgBAFADAEQADAEAFABQAHAEAKAAQAHAAALAAQAYgCAKAOQACADAAADQAAADgCAC");
	this.shape_1.setTransform(141.9514,85.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Выпрямитель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Выпрямитель
	this.instance = new lib.Выпрямитель();
	this.instance.parent = this;
	this.instance.setTransform(52.85,53.35,0.1646,0.192,0,0,0,49.2,37.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Выключатель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Выключатель
	this.instance = new lib.Выключатель();
	this.instance.parent = this;
	this.instance.setTransform(56.55,78.85,0.1646,0.192,0,0,0,34.4,34.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ВыключКнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ВыключКнопка
	this.instance = new lib.ВыключательКнопка();
	this.instance.parent = this;
	this.instance.setTransform(56.65,75.6,0.1646,0.192,0,0,0,13.7,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(614).to({regX:13.5,regY:6.4,scaleX:0.6268,scaleY:0.6866,skewY:180,x:240.55,y:263.4},0).to({_off:true},585).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Анимациямалкопия = function(mode,startPosition,loop) {
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
		this.but1 = this.Кнопка.but1;
		this.stop();
		
		this.but1.addEventListener("click",f1.bind(this));
		this.pause.addEventListener("click",f2.bind(this));
		this.tobegin.addEventListener("click",f3.bind(this));
		
		function f1(args){this.play();} 
		function f2(args){this.stop();} 
		function f3(args){this.gotoAndStop(0);}
	}
	this.frame_1 = function() {
		this.but1 = undefined;this.but1 = this.Кнопка.but1;
	}
	this.frame_2 = function() {
		this.but1 = undefined;
	}
	this.frame_5 = function() {
		this.playbut.addEventListener("click",f1.bind(this));
		this.pause.addEventListener("click",f2.bind(this));
		this.tobegin.addEventListener("click",f3.bind(this));
		
		function f1(args){this.play();}
		function f2(args){this.stop();} 
		function f3(args){this.gotoAndStop(0);}
	}
	this.frame_1199 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(3).call(this.frame_5).wait(1194).call(this.frame_1199).wait(1));

	// Кнопка_obj_
	this.Кнопка = new lib.Монтажный_кадр_1_Кнопка();
	this.Кнопка.name = "Кнопка";
	this.Кнопка.parent = this;
	this.Кнопка.setTransform(402.2,371.1,1,1,0,0,0,402.2,371.1);
	this.Кнопка.depth = 0;
	this.Кнопка.isAttachedToCamera = 0
	this.Кнопка.isAttachedToMask = 0
	this.Кнопка.layerDepth = 0
	this.Кнопка.layerIndex = 0
	this.Кнопка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Кнопка).wait(1200));

	// Обводка_obj_
	this.Обводка = new lib.Монтажный_кадр_1_Обводка();
	this.Обводка.name = "Обводка";
	this.Обводка.parent = this;
	this.Обводка.depth = 0;
	this.Обводка.isAttachedToCamera = 0
	this.Обводка.isAttachedToMask = 0
	this.Обводка.layerDepth = 0
	this.Обводка.layerIndex = 1
	this.Обводка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Обводка).wait(1200));

	// Стрелки_obj_
	this.Стрелки = new lib.Монтажный_кадр_1_Стрелки();
	this.Стрелки.name = "Стрелки";
	this.Стрелки.parent = this;
	this.Стрелки.depth = 0;
	this.Стрелки.isAttachedToCamera = 0
	this.Стрелки.isAttachedToMask = 0
	this.Стрелки.layerDepth = 0
	this.Стрелки.layerIndex = 2
	this.Стрелки.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Стрелки).wait(1200));

	// слой4_obj_
	this.слой4 = new lib.Монтажный_кадр_1_слой4();
	this.слой4.name = "слой4";
	this.слой4.parent = this;
	this.слой4.setTransform(558.3,480.2,1,1,0,0,0,558.3,480.2);
	this.слой4.depth = 0;
	this.слой4.isAttachedToCamera = 0
	this.слой4.isAttachedToMask = 0
	this.слой4.layerDepth = 0
	this.слой4.layerIndex = 3
	this.слой4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.слой4).wait(1200));

	// слой3_obj_
	this.слой3 = new lib.Монтажный_кадр_1_слой3();
	this.слой3.name = "слой3";
	this.слой3.parent = this;
	this.слой3.setTransform(517.3,101.5,1,1,0,0,0,517.3,101.5);
	this.слой3.depth = 0;
	this.слой3.isAttachedToCamera = 0
	this.слой3.isAttachedToMask = 0
	this.слой3.layerDepth = 0
	this.слой3.layerIndex = 4
	this.слой3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.слой3).wait(1200));

	// слой2_obj_
	this.слой2 = new lib.Монтажный_кадр_1_слой2();
	this.слой2.name = "слой2";
	this.слой2.parent = this;
	this.слой2.setTransform(19.9,24.8,1,1,0,0,0,19.9,24.8);
	this.слой2.depth = 0;
	this.слой2.isAttachedToCamera = 0
	this.слой2.isAttachedToMask = 0
	this.слой2.layerDepth = 0
	this.слой2.layerIndex = 5
	this.слой2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.слой2).wait(1200));

	// слой1_obj_
	this.слой1 = new lib.Монтажный_кадр_1_слой1();
	this.слой1.name = "слой1";
	this.слой1.parent = this;
	this.слой1.setTransform(11.1,476.9,1,1,0,0,0,11.1,476.9);
	this.слой1.depth = 0;
	this.слой1.isAttachedToCamera = 0
	this.слой1.isAttachedToMask = 0
	this.слой1.layerDepth = 0
	this.слой1.layerIndex = 6
	this.слой1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.слой1).wait(1200));

	// Обложка_obj_
	this.Обложка = new lib.Монтажный_кадр_1_Обложка();
	this.Обложка.name = "Обложка";
	this.Обложка.parent = this;
	this.Обложка.setTransform(399.9,252.7,1,1,0,0,0,399.9,252.7);
	this.Обложка.depth = 0;
	this.Обложка.isAttachedToCamera = 0
	this.Обложка.isAttachedToMask = 0
	this.Обложка.layerDepth = 0
	this.Обложка.layerIndex = 7
	this.Обложка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Обложка).wait(1200));

	// Провода_obj_
	this.Провода = new lib.Монтажный_кадр_1_Провода();
	this.Провода.name = "Провода";
	this.Провода.parent = this;
	this.Провода.setTransform(90,55.2,1,1,0,0,0,90,55.2);
	this.Провода.depth = 0;
	this.Провода.isAttachedToCamera = 0
	this.Провода.isAttachedToMask = 0
	this.Провода.layerDepth = 0
	this.Провода.layerIndex = 8
	this.Провода.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Провода).wait(1200));

	// РеостатПолзунок_obj_
	this.РеостатПолзунок = new lib.Монтажный_кадр_1_РеостатПолзунок();
	this.РеостатПолзунок.name = "РеостатПолзунок";
	this.РеостатПолзунок.parent = this;
	this.РеостатПолзунок.setTransform(700.6,208.2,1,1,0,0,0,700.6,208.2);
	this.РеостатПолзунок.depth = 0;
	this.РеостатПолзунок.isAttachedToCamera = 0
	this.РеостатПолзунок.isAttachedToMask = 0
	this.РеостатПолзунок.layerDepth = 0
	this.РеостатПолзунок.layerIndex = 9
	this.РеостатПолзунок.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.РеостатПолзунок).wait(1200));

	// Реостат_obj_
	this.Реостат = new lib.Монтажный_кадр_1_Реостат();
	this.Реостат.name = "Реостат";
	this.Реостат.parent = this;
	this.Реостат.setTransform(163.3,50.6,1,1,0,0,0,163.3,50.6);
	this.Реостат.depth = 0;
	this.Реостат.isAttachedToCamera = 0
	this.Реостат.isAttachedToMask = 0
	this.Реостат.layerDepth = 0
	this.Реостат.layerIndex = 10
	this.Реостат.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Реостат).wait(1200));

	// Источник_питания_obj_
	this.Источник_питания = new lib.Монтажный_кадр_1_Источник_питания();
	this.Источник_питания.name = "Источник_питания";
	this.Источник_питания.parent = this;
	this.Источник_питания.setTransform(134,57.4,1,1,0,0,0,134,57.4);
	this.Источник_питания.depth = 0;
	this.Источник_питания.isAttachedToCamera = 0
	this.Источник_питания.isAttachedToMask = 0
	this.Источник_питания.layerDepth = 0
	this.Источник_питания.layerIndex = 11
	this.Источник_питания.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Источник_питания).wait(1200));

	// ВыключКнопка_obj_
	this.ВыключКнопка = new lib.Монтажный_кадр_1_ВыключКнопка();
	this.ВыключКнопка.name = "ВыключКнопка";
	this.ВыключКнопка.parent = this;
	this.ВыключКнопка.setTransform(56.6,75.5,1,1,0,0,0,56.6,75.5);
	this.ВыключКнопка.depth = 0;
	this.ВыключКнопка.isAttachedToCamera = 0
	this.ВыключКнопка.isAttachedToMask = 0
	this.ВыключКнопка.layerDepth = 0
	this.ВыключКнопка.layerIndex = 12
	this.ВыключКнопка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ВыключКнопка).wait(1200));

	// Выключатель_obj_
	this.Выключатель = new lib.Монтажный_кадр_1_Выключатель();
	this.Выключатель.name = "Выключатель";
	this.Выключатель.parent = this;
	this.Выключатель.setTransform(56.5,78.8,1,1,0,0,0,56.5,78.8);
	this.Выключатель.depth = 0;
	this.Выключатель.isAttachedToCamera = 0
	this.Выключатель.isAttachedToMask = 0
	this.Выключатель.layerDepth = 0
	this.Выключатель.layerIndex = 13
	this.Выключатель.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Выключатель).wait(1200));

	// Выпрямитель_obj_
	this.Выпрямитель = new lib.Монтажный_кадр_1_Выпрямитель();
	this.Выпрямитель.name = "Выпрямитель";
	this.Выпрямитель.parent = this;
	this.Выпрямитель.setTransform(52.7,53.2,1,1,0,0,0,52.7,53.2);
	this.Выпрямитель.depth = 0;
	this.Выпрямитель.isAttachedToCamera = 0
	this.Выпрямитель.isAttachedToMask = 0
	this.Выпрямитель.layerDepth = 0
	this.Выпрямитель.layerIndex = 14
	this.Выпрямитель.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Выпрямитель).wait(1200));

	// Соленоид_obj_
	this.Соленоид = new lib.Монтажный_кадр_1_Соленоид();
	this.Соленоид.name = "Соленоид";
	this.Соленоид.parent = this;
	this.Соленоид.setTransform(84.4,34.8,1,1,0,0,0,84.4,34.8);
	this.Соленоид.depth = 0;
	this.Соленоид.isAttachedToCamera = 0
	this.Соленоид.isAttachedToMask = 0
	this.Соленоид.layerDepth = 0
	this.Соленоид.layerIndex = 15
	this.Соленоид.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Соленоид).wait(1200));

	// МиллиампСтрелка_obj_
	this.МиллиампСтрелка = new lib.Монтажный_кадр_1_МиллиампСтрелка();
	this.МиллиампСтрелка.name = "МиллиампСтрелка";
	this.МиллиампСтрелка.parent = this;
	this.МиллиампСтрелка.setTransform(342.4,380.9,1,1,0,0,0,342.4,380.9);
	this.МиллиампСтрелка.depth = 0;
	this.МиллиампСтрелка.isAttachedToCamera = 0
	this.МиллиампСтрелка.isAttachedToMask = 0
	this.МиллиампСтрелка.layerDepth = 0
	this.МиллиампСтрелка.layerIndex = 16
	this.МиллиампСтрелка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.МиллиампСтрелка).wait(1200));

	// Миллиампертметр_obj_
	this.Миллиампертметр = new lib.Монтажный_кадр_1_Миллиампертметр();
	this.Миллиампертметр.name = "Миллиампертметр";
	this.Миллиампертметр.parent = this;
	this.Миллиампертметр.setTransform(87.7,107.9,1,1,0,0,0,87.7,107.9);
	this.Миллиампертметр.depth = 0;
	this.Миллиампертметр.isAttachedToCamera = 0
	this.Миллиампертметр.isAttachedToMask = 0
	this.Миллиампертметр.layerDepth = 0
	this.Миллиампертметр.layerIndex = 17
	this.Миллиампертметр.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Миллиампертметр).wait(1200));

	// ВольтметрСтрелка_obj_
	this.ВольтметрСтрелка = new lib.Монтажный_кадр_1_ВольтметрСтрелка();
	this.ВольтметрСтрелка.name = "ВольтметрСтрелка";
	this.ВольтметрСтрелка.parent = this;
	this.ВольтметрСтрелка.setTransform(576,385.9,1,1,0,0,0,576,385.9);
	this.ВольтметрСтрелка.depth = 0;
	this.ВольтметрСтрелка.isAttachedToCamera = 0
	this.ВольтметрСтрелка.isAttachedToMask = 0
	this.ВольтметрСтрелка.layerDepth = 0
	this.ВольтметрСтрелка.layerIndex = 18
	this.ВольтметрСтрелка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ВольтметрСтрелка).wait(1200));

	// Вольтметр_obj_
	this.Вольтметр = new lib.Монтажный_кадр_1_Вольтметр();
	this.Вольтметр.name = "Вольтметр";
	this.Вольтметр.parent = this;
	this.Вольтметр.setTransform(149.1,109.2,1,1,0,0,0,149.1,109.2);
	this.Вольтметр.depth = 0;
	this.Вольтметр.isAttachedToCamera = 0
	this.Вольтметр.isAttachedToMask = 0
	this.Вольтметр.layerDepth = 0
	this.Вольтметр.layerIndex = 19
	this.Вольтметр.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Вольтметр).wait(1200));

	// АмпСтрелка_obj_
	this.АмпСтрелка = new lib.Монтажный_кадр_1_АмпСтрелка();
	this.АмпСтрелка.name = "АмпСтрелка";
	this.АмпСтрелка.parent = this;
	this.АмпСтрелка.setTransform(18.8,109.5,1,1,0,0,0,18.8,109.5);
	this.АмпСтрелка.depth = 0;
	this.АмпСтрелка.isAttachedToCamera = 0
	this.АмпСтрелка.isAttachedToMask = 0
	this.АмпСтрелка.layerDepth = 0
	this.АмпСтрелка.layerIndex = 20
	this.АмпСтрелка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.АмпСтрелка).wait(1200));

	// Амперметр_obj_
	this.Амперметр = new lib.Монтажный_кадр_1_Амперметр();
	this.Амперметр.name = "Амперметр";
	this.Амперметр.parent = this;
	this.Амперметр.setTransform(23.2,108.9,1,1,0,0,0,23.2,108.9);
	this.Амперметр.depth = 0;
	this.Амперметр.isAttachedToCamera = 0
	this.Амперметр.isAttachedToMask = 0
	this.Амперметр.layerDepth = 0
	this.Амперметр.layerIndex = 21
	this.Амперметр.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Амперметр).wait(1200));

	// латрРучка_obj_
	this.латрРучка = new lib.Монтажный_кадр_1_латрРучка();
	this.латрРучка.name = "латрРучка";
	this.латрРучка.parent = this;
	this.латрРучка.setTransform(134.2,51.7,1,1,0,0,0,134.2,51.7);
	this.латрРучка.depth = 0;
	this.латрРучка.isAttachedToCamera = 0
	this.латрРучка.isAttachedToMask = 0
	this.латрРучка.layerDepth = 0
	this.латрРучка.layerIndex = 22
	this.латрРучка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.латрРучка).wait(1200));

	// ЛАТР_obj_
	this.ЛАТР = new lib.Монтажный_кадр_1_ЛАТР();
	this.ЛАТР.name = "ЛАТР";
	this.ЛАТР.parent = this;
	this.ЛАТР.setTransform(28.4,31.1,1,1,0,0,0,28.4,31.1);
	this.ЛАТР.depth = 0;
	this.ЛАТР.isAttachedToCamera = 0
	this.ЛАТР.isAttachedToMask = 0
	this.ЛАТР.layerDepth = 0
	this.ЛАТР.layerIndex = 23
	this.ЛАТР.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ЛАТР).wait(1200));

	// Подложка_obj_
	this.Подложка = new lib.Монтажный_кадр_1_Подложка();
	this.Подложка.name = "Подложка";
	this.Подложка.parent = this;
	this.Подложка.setTransform(98.4,75,1,1,0,0,0,98.4,75);
	this.Подложка.depth = 0;
	this.Подложка.isAttachedToCamera = 0
	this.Подложка.isAttachedToMask = 0
	this.Подложка.layerDepth = 0
	this.Подложка.layerIndex = 24
	this.Подложка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Подложка).wait(1200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.5,53.4,1218.9,685.7);
// library properties:
lib.properties = {
	id: '60FBEE31B89053448C9002AAE0822EE8',
	width: 200,
	height: 140,
	fps: 23,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"sounds/animation.mp3", id:"animation"}
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
an.compositions['60FBEE31B89053448C9002AAE0822EE8'] = {
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