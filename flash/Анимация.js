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
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhpggQABgOAMgMIArgXQAWgGAbAAQAsAAAfAQQAbAPAEATQABAEAAAEQAAAAAAABQgBAPgNANIAiAjIAEAOQgBANglANQgKADgKADQgVAGggABQgHAAgFAAQgUgBgUgDQgWgDgMgCQgDgBgDAAQgWgEgMgGQgFgDgEgDABFAOQgbANgjABQgEAAgDAAQgZAAgWgGQgPgEgMgHQgFgDgEgDQgJgFgGgHQgHgKAAgLIgZBNQAGAHAJAGABdAAQgIAFgKAGQgDACgDABIAYA9AAHAcIABA8AgvAWIgTA5AhTAFIggA5ABrgcIAUA/");
	this.shape_2.setTransform(134.15,51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("AAAA6QgZAAgWgGQgPgEgMgHIgJgGQgJgFgGgIQgHgKAAgLIAAgBIAAgCIAfgCIAAAEQAAAOAXAKQAWALAgAAQAhAAAXgLQAWgKAAgOQAAgPgWgKQgXgLghAAQggAAgWALQgUAJgDAMIgfACQABgOAMgMIArgWQAWgHAbAAQAsAAAfAQQAaAPAFAUIAAAGIAAABQAAAPgOANQgHAGgKAGIgGADQgbANgkABIgGAAgAgzAYQgXgKAAgOIAAgEIBPgDIhPADQADgMAUgJQAWgLAgAAQAhAAAXALQAWAKAAAPQAAAOgWAKQgXALghAAQggAAgWgLgABRAAIAAAAgAhKgEIAAAAg");
	this.shape_3.setTransform(134.175,48.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAIA6IgBg6IABA6QgVgBgTgCIghgFIASg4IgSA4IgGgBQgXgEgMgHIgJgGIAgg3IggA3QgJgGgGgGIAZhOQAAAMAHAKQAGAHAJAGIAJAGQAMAHAPAEQAWAFAZABIAHAAQAjgCAbgNIAGgCQALgHAGgGIAjAjIAEAPQgBANgmANIgXg9IAXA9IgTAGQgWAFgfABIgMAAgAB/AFgABcgeQAOgMABgQIAUA/g");
	this.shape_4.setTransform(134.15,54.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0033").ss(2,1,1).p("AAxAIIhEgLIgdgE");
	this.shape_5.setTransform(129.825,47.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AhpggQABgJAEgIQADgEAFgFIArgXQAWgGAbAAQAsAAAfAQQAbAPAEATQABAEAAAEQAAAAAAABQgBAPgNANIAiAjIAEAOQgBANglANQgKADgKADQgVAGggABQgHAAgFAAQgUgBgUgDQgWgDgMgCQgDgBgDAAQgWgEgMgGQgFgDgEgDABdAAQgIAFgKAGQgDACgDABQgbANgjABQgEAAgDAAQgZAAgWgGQgPgEgMgHQgFgDgEgDQgJgFgGgHQgHgKAAgLIgZBNQAGAHAJAGAAHAcIABA8AgvAWIgTA5AhTAFIggA5ABFAOIAYA9ABrgcIAUA/");
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
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AhtgfQABgOAMgLIAtgWQAXgHAcAAQAtAAAhARQAbAOAEATQABADAAAEQAAAAAAABIAaBKQgBAHgJAGQgJAGgTAGQgBABgCAAQgJADgLADQgNADgQACQgMABgOAAQgGAAgGAAQgVAAgUgDQgGgBgFAAQgPgCgJgCQgEgBgCAAQgNgCgKgDQgIgCgFgDQgFgDgFgDQgFgDgFgEABogIIAWBEABogIQgEAEgEAEQgHAFgLAGQgDABgEACQgHADgJADQgPAEgRACQgIABgIAAQgEAAgDAAQgYAAgVgFQgCAAgCgBQgPgEgNgGQgFgDgEgDQgGgEgFgDQgCgCgCgDQgIgJAAgLIgaBKQACADADADAAXAaIAXA6AgtAWIABA7AhNAOIgUA5AhhgCIghA3AA3AUIArA0ABugbQAAAKgGAJ");
	this.shape_11.setTransform(134.725,51.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996633").s().p("AAAA4QgYAAgVgEIgEgBQgPgFgNgGIgJgGIgLgIIgEgEQgIgKAAgLIAAgBIAAgCQABgOAMgLIAtgWQAXgGAcAAQAtAAAhAQQAbAOAEATIABAGIAAABQAAAKgGAJIgIAIQgHAGgLAGIgHADIgQAHQgPADgRACIgQABIgHAAgAhNAAQAAAOAYAKQAXAKAhAAQAiAAAYgKQAXgKAAgOQAAgOgXgLQgYgKgiAAQgbAAgVAHIgTgJIATAJIgIADQgVAJgDANIAAADIAAAAgAg1AYQgYgKAAgOIAAgDQADgNAVgJIAIgDIAyAWIgygWQAVgHAbAAQAiAAAYAKQAXALAAAOQAAAOgXAKQgYAKgiAAQghAAgXgKgABUAAIAAAAgAgtgcg");
	this.shape_12.setTransform(134.725,48.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAIA5QgVgBgUgDIgLgBIgBg5QAVAFAYAAIAHAAIAQgBIAXA5IgaABIgMAAgAAXgBQARgCAPgEIArAzIgDABIgUAGQgNADgQACgAhEAxIgGgBQgNgCgKgDIAUg5IgUA5IgNgGIgKgFIgKgIIAhg2IALAHIAJAGQANAHAPAEIAEABIABA5IgYgDgAA3gHIAQgHIAHgDQALgGAHgGIAIgIIAWBFQgJAGgTAGgAB+AgIgWhFQAGgJAAgKIAaBLQgBAGgJAHgAiHATIAahLQAAALAIAKIAEAFIghA2IgFgFgAAXgBgAA3gHgAhhgeIAAAAgABoglg");
	this.shape_13.setTransform(134.725,54.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0033").ss(2,1,1).p("AAUAUIgagaIgNgN");
	this.shape_14.setTransform(132.3,45.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#663300").ss(1,1,1).p("ABLAAQAAAOgWAJQgWAKgfAAQgeAAgWgKQgWgJAAgOQAAgBAAgBQACgMAUgJQADgCAEgBQAKgDALgCQAMgCAMAAQAfAAAWAKQAWAKAAANg");
	this.shape_15.setTransform(134.125,48.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AhlgeQABgNALgKIAqgVQAVgHAaAAQArAAAeAQQAZANADASQACAEAAADIAAABQgBAOgNAMIAhAhIAEAMQgBANglAMQgIADgKADQgVAFgeABQgGAAgFAAQgUgBgTgDQgVgCgLgCQgEgBgCAAQgVgEgMgGQgFgDgEgCAAGAaQgDAAgDAAQgYAAgVgGQgOgDgMgHQgFgCgEgDQgJgFgFgGQgHgKAAgKIgYBHQAFAHAJAGABZAAQgGAFgKAFQgEACgDABQgaAMgiABIACA4AgtAUIgSA2AhQAFIgfA1ABCANIAWA5ABngaIATA7");
	this.shape_16.setTransform(133.8,51.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996633").s().p("AAAA2QgYAAgVgGQgOgDgMgHIgJgFQgJgGgFgGQgHgKAAgKIAAgBIAAgCQABgNALgKIAqgVQAVgHAaAAQAqAAAeAQQAZANAEASIABAGIAAABQAAAOgNAMQgHAGgKAFIgGADQgaAMgiABIgGAAgAhHAAQAAANAWAKQAWAKAeAAQAfAAAWgKQAWgKAAgNQAAgNgWgLQgWgJgfAAQgMAAgMABIgNgNIANANQgLACgKAEIgHACQgUAJgCAMIAAADIAAAAgAgxAXQgWgKAAgNIAAgDQACgMAUgJIAHgCQAKgEALgCIAaAbIgagbQAMgBAMAAQAfAAAWAJQAWALAAANQAAANgWAKQgWAKgfAAQgeAAgWgKgABOAAIAAAAgAgVggg");
	this.shape_17.setTransform(133.825,48.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAIA2IgBg2QAhgBAbgMIAFgDQAKgGAHgFQANgMABgPIATA8IghghIAhAhIAEAMQAAAMgmANIgVg4IAVA4IgSAFQgVAGgeAAIgLAAgAgeAzIghgFIASg0QAVAFAYABIAHAAIABA2QgUAAgSgDgAhFAtQgVgDgMgHIgIgFIAegzIgeAzQgKgFgFgHIAYhIQAAALAHAJQAGAHAIAGIAJAFQAMAHAOADIgSA0IgGgBg");
	this.shape_18.setTransform(133.8,54.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0033").ss(2,1,1).p("AAUAVIgagbIgNgO");
	this.shape_19.setTransform(132.125,45.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AhmggQABgNALgMIArgWQAVgIAaAAQArAAAeASQAZAOAFATQAAADAAAFIAAAAQAAAPgNANIAhAjIAFAOQgBANgmANQgIADgKADQgWAFgeACQgGAAgFAAQgUgCgTgCQgVgDgMgCQgEgBgCAAQgVgEgNgGQgEgDgEgDAAHAcQgEAAgDAAQgZAAgVgGQgOgEgMgHQgFgCgEgDQgJgGgFgHQgHgKgBgLIgYBNQAGAHAJAGABaAAQgHAGgKAFQgDACgDABQgaANgiABIABA8AguAWIgSA5AhRAGIgfA4ABDAOIAWA9ABngcIAUA/");
	this.shape_20.setTransform(133.65,50.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#663300").ss(1,1,1).p("ABMAAQAAAOgWALQgWALggAAQgfAAgWgLQgWgLAAgOQAAAAAAgDQACgMAUgKQADgCAFgBQAKgEAKgBQAMgCANAAQAgAAAWAKQAWALAAAOg");
	this.shape_21.setTransform(133.975,47.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAHA6IgBg6QAjgBAagNIAGgDQALgGAGgGQANgNAAgPIAUA/IghgjIAhAjIAFANQgBAOgmANIgWg8IAWA8IgSAGQgWAFgeABIgMAAgAgfA2IghgEIASg4QAWAGAYAAIAGAAIABA6QgTgBgTgDgAhGAxQgVgEgMgHIgJgFIAfg4IgfA4QgJgHgGgHIAYhMQABALAHAKQAFAHAJAGIAJAGQAMAHAOAEIgSA4IgGgBg");
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
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AhrgfQABgOALgLIAtgXQAXgHAbAAQAtAAAgARQAbAOAEAUQABADAAAEIAAABQAAAPgOAMQgHAGgLAFQgDACgDABQgcANgkABIABA7QgVAAgUgDQgWgDgMgCQgEgBgCAAQgXgEgNgHQgFgCgEgDACCAjIAEAOQAAANgnANQgJADgLADQgWAGghAAQgGAAgGAAABfAAIAjAjAAHAcQgDAAgEAAQgaAAgWgGQgPgEgNgHQgFgCgEgDQgKgGgFgGQgHgKgBgLIgZBMQAGAHAJAGAgwAWIgTA5AhVAGIghA4ABHAOIAYA9ABtgbIAVA+");
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
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AhtgfQABgOAMgLIAtgXQAXgGAcAAQAtAAAgAQQAbAOAEAUQABADAAAEQAAAAAAABQAAAPgOAMQgHAFgLAGQgDACgDABQgWAKgbACQgCABgCAAQgGAAgFAAQgEAAgDAAQgPAAgOgBIAXA8QgOgBgNgCQgXgDgMgCQgEgBgCAAQgNgCgJgDAB5AFIAOArQgBANgnANQgJADgLADQgDABgDAAQgUAFgdAAQgHAAgFAAQgIAAgFAAQgBAAAAAAAB5AFIgTA/AgxAWQgPgEgNgHQgFgDgFgDQgFgDgEgDQgDgDgCgDQgIgJAAgLIgZBLQAFAHAKAGQAEADAFACQAGADAIADAhggBIAABJAgxAWIgTA4AgdAaQgLgCgJgCAAWAaIAvA3ABtgbIAMAg");
	this.shape_31.setTransform(135.175,51.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#996633").s().p("AAAA5QgPAAgOgCIgTgEQgPgEgNgHIgLgFIgJgHQgDgDgBgDQgJgKAAgLIAAgBIAAgCQACgNALgLIAtgXQAYgHAbAAQAtAAAhARQAbAOADATIABAGIAAABQAAAPgOANQgGAGgLAFIgHADQgVAKgbADIgFAAIgLABIgHAAgAhMAAQAAAOAXAKQAXALAhAAQAiAAAYgLQAXgKAAgOQAAgOgXgLQgKgEgMgDIAPgLIgPALQgQgDgUAAIgDAAQgZAAgVAIIgHACQgVAKgCAMIAAADIAAAAgAg1AYQgXgKAAgOIAAgDQACgMAVgKIAHgCQAVgIAZAAIADAAQAUAAAQADIglAcIAlgcQAMADAKAEQAXALAAAOQAAAOgXAKQgYALgiAAQghAAgXgLgABUAAIAAAAgAAnggIAAAAg");
	this.shape_32.setTransform(135.15,48.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAIA5IgNAAIgBAAIgXg7QAOABAPAAIAHAAIALAAIAEgBQAbgCAWgKIAGgDQALgGAHgGQAOgMAAgPIAMAhIgTA+IATg+IAOAqQgBANgnANIgUAGIgGABIgvg2IAvA2QgUAFgdAAIgMAAgAghA2IgjgFIATg3IAUAEIAXA7IgbgDgAhKAwIgWgFIAAhJIAABJIgOgGIgJgFQgKgGgFgHIAZhLQAAALAIAJQACADADADIAJAHIAKAGQANAHAPAEIgTA3IgGgBgAgxgGIAAAAg");
	this.shape_33.setTransform(135.175,53.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0033").ss(2,1,1).p("AgfAPIAxgXIAOgH");
	this.shape_34.setTransform(138.375,46.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#663300").ss(1,1,1).p("ABPAAQAAAPgXALQgXAKghAAQggAAgXgKQgXgLAAgPQAAAAABgDQACgMAUgJQADgBAEgCQAUgHAbgBQABAAAAAAQATAAAQAEQAHABAHACQADACAEACQAXALAAANg");
	this.shape_35.setTransform(135.325,48.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AhqggQABgOAMgLIAsgXQAWgGAbAAQAsAAAgAQQAaAPAEATQABADAAAEQAAABAAAAQgBAPgNANQgHAFgKAGQgEACgDABIAYA8AB/AjIAFANQgBAOgmAMQgJAEgLADQgWAFgfABQgHAAgFAAQgVgBgTgDQgWgCgMgCQgEgBgCAAQgWgEgNgHQgFgDgEgCABdAAIAiAjAAHAcIABA7AAHAcQgEAAgDAAQgaAAgVgGQgPgEgNgHQgFgDgEgDQgJgFgFgHQgIgKAAgLIgZBMQAGAHAJAHAgvAWIgTA5AhUAFIggA5ABFAOQgbANgjABABrgcIAUA/");
	this.shape_36.setTransform(135.025,51.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#996633").s().p("AAAA6QgaAAgVgHQgPgEgNgGIgJgGQgJgGgGgHQgHgKAAgLIAAgBIAAgCQABgOAMgLIArgXQAXgGAbgBQAsAAAfARQAaAOAFAUIABAGIAAABQgBAPgOANQgGAGgLAGIgGACQgbAOgjABIgHAAgAhLAAQAAAOAXAKQAXALAgAAQAgAAAYgLQAWgKAAgOQAAgOgWgMIgHgDIANgGIgNAGQgHgCgHgBQgQgEgTAAIgDAAQgZAAgUAIIgHACQgUAKgCANIgBADIAAAAgAg0AYQgXgKAAgOIABgDQACgNAUgKIAHgCQAUgIAZAAIADAAQATAAAQAEQAHABAHACIgzAZIAzgZIAHADQAWAMAAAOQAAAOgWAKQgYALggAAQggAAgXgLgABRAAIAAAAgAA0gdIAAAAg");
	this.shape_37.setTransform(135.05,48.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAIA6IgBg6QAjgBAbgOIAYA8IgUAHQgWAFgfABIgMAAgAggA2IgigFIATg4IgTA4IgGgBQgWgDgNgIIgJgEIAgg4IggA4QgJgHgGgHIAZhMQAAALAIAKQAFAHAJAGIAJAGQANAGAPAEQAVAHAaAAIAHAAIABA6QgVgBgTgDgABdAtgABFgPIAHgCQAKgGAHgGQANgNABgPIAUA/IAFANQgBAOgmAMgAB/AGIgigjg");
	this.shape_38.setTransform(135.025,54.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0033").ss(2,1,1).p("Ag1gCIBMADIAfAC");
	this.shape_39.setTransform(138.85,48.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#663300").ss(1,1,1).p("AhLAAQAAAOAWAKQAXAKAeAAQAgAAAWgKQAWgKAAgOQAAgBAAgBQgCgNgUgJQgWgKggAAQgeAAgXAKQgWALAAANg");
	this.shape_40.setTransform(133.575,48.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("ABogeQgBgOgLgKIgrgWQgWgHgbAAQgqAAgeAQQgZAOgFATQAAADAAAEIAAAAQAAAPANAMIghAhIgFAOQABAMAmANQAIADALADQAUAFAfABQAGAAAGAAQAUgBASgDQAWgCALgCQAEgBACAAQAWgEAMgHQAFgCAEgDABTAFQAJgFAFgGQAHgKAAgLIAYBKQgGAGgIAGABTAFIAfA2AAvAVQAPgEALgGQAGgDAEgDAgFAbQADAAACAAQAaAAAVgGIASA3AgFAbIgBA5AhZAAQAHAFAKAGQADABADACIgWA6AhCAOQAbAMAiABAhmgbIgUA8");
	this.shape_41.setTransform(133.9,51.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#996633").s().p("AgFA3QgigBgbgMIgGgDQgLgFgGgGQgNgMAAgPIAAgBIAAgGQAFgTAZgNQAegQAqAAQAbAAAWAGIAqAWQAMALABANIgfgBQgCgMgUgJQgWgKgfAAQgfAAgXAKQgWAKgBAOQABANAWAKQAXALAfAAQAfAAAWgLQAWgKAAgNIAAgDIAfABIAAACIAAABQAAALgHAJQgFAHgKAGIgJAFQgMAHgOAEQgVAFgaAAIgFAAgAgCAiQgfAAgXgLQgWgKgBgNQABgOAWgKQAXgKAfAAQAfAAAWAKQAUAJACAMIhMgEIBMAEIAAADQAAANgWAKQgWALgfAAIAAAAgAhPAAIAAAAgABJgDg");
	this.shape_42.setTransform(133.9,48.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgSA4QgfgBgVgFIgTgGIAXg5QAbAMAiABIAFAAQAaAAAVgGIASA2IghAEQgSADgUABIABg4IgBA4IgMAAgABBAwgAAvgGQAOgEAMgGIAJgGIAgA1Iggg1QAKgFAFgHQAHgKAAgLIAYBKQgGAGgIAGIgJAFQgNAHgVAEIgGABgAh/ATIAFgOIAhghQAGAGALAGIAGADIgXA5QglgNgBgMgAhmg3QAAAPANAMIghAhgAhZgcIAAAAg");
	this.shape_43.setTransform(133.9,54.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0033").ss(2,1,1).p("AgyABIBKgBIAbAA");
	this.shape_44.setTransform(138.75,47.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#663300").ss(1,1,1).p("AhKABQAAAOAWAKQAWALAeAAQAfAAAWgLQAWgKAAgOQAAgBAAgCQgBgCgBgDQgCgFgGgEQgEgEgIgEQgWgKgfAAQgeAAgWAKQgWALAAAOg");
	this.shape_45.setTransform(133.825,48.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("ABmgfQgBgOgMgLIgpgWQgVgHgbAAQgpAAgeAQQgZAPgEATQgBADAAAEIAAAAQABAPAMANIggAiIgFAOQABANAlANQAIACAKAEQAVAFAeABQAGAAAGAAQATgBATgDQAUgCAMgCQADgBADgBQAVgDAMgHQAFgCADgDABRAFQAIgFAGgHQAHgKAAgLIAYBMQgGAHgJAGABRAFIAeA4AAuAVQAOgDAMgHQAFgDAEgDAgFAbQADAAACAAQAaAAAUgGIASA5AgFAbIgBA7AhYAAQAHAFAKAGQADACADABIgWA8AhBAOQAZAMAjABAhlgcIgTA+");
	this.shape_46.setTransform(134.125,51.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgSA5QgegBgVgFIgSgGIAWg7QAZAMAjABIgBA6IgMAAgAgFgBIAFAAQAaAAAUgFIASA3IggAEQgTADgTABgABAAxgAAugGQAOgEAMgHIAJgGIAeA3Igeg3QAIgFAGgHQAHgKAAgLIAYBLQgGAHgJAGIgIAFQgMAHgVAEIgGABgAhXAtQglgNgBgNIAFgOIAggiQAHAGAKAGIAGADIgWA7IAAAAgAhlg4QABAPAMAMIggAigAhYgdIAAAAg");
	this.shape_47.setTransform(134.125,54.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#996633").s().p("AgFA4QgjAAgZgMIgGgEQgKgGgHgGQgMgMgBgPIAAAAIABgHQAEgTAZgPQAegPApAAQAbgBAVAHIApAXQAMALABAOIAAACIAAAAQAAALgHAKQgGAHgIAGIgJAFQgMAHgOAEQgUAFgaAAIgFAAgAgCAjQAeAAAWgLQAWgLAAgNIAAgDIgCgFIAbAAIgbAAQgCgFgGgEQgEgFgIgDQgWgKgeAAQgfAAgWAKQgWALAAAOQAAANAWALQAWALAfAAIAAAAgAgCAjQgfAAgWgLQgWgLAAgNQAAgOAWgLQAWgKAfAAQAeAAAWAKQAIADAEAFQAGAEACAFIhJACIBJgCIACAFIAAADQAAANgWALQgWALgeAAIAAAAgAhNAAIAAAAgABGgIIAAAAg");
	this.shape_48.setTransform(134.125,48.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0033").ss(2,1,1).p("AguADIBDgDIAagC");
	this.shape_49.setTransform(138.6,47.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#663300").ss(1,1,1).p("AhLAAQAAAOAWAKQAWAKAfAAQAfAAAXgKQAWgKAAgOQAAAAAAgDQgBgEgEgFQgBgBgBAAQgFgGgKgEQgXgKgfAAQgfAAgWAKQgWAKAAANg");
	this.shape_50.setTransform(133.625,48.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("ABngeQAAgIgFgIQgDgDgEgEIgrgWQgVgGgbAAQgqAAgfAQQgZANgEASQgBADAAAEIAAABQAAAOAOAMQAHAFAJAFQADACADABIgWA5QAJADAKADQAVAGAfAAQAGAAAFAAQAUAAATgEQAVgCAMgCQADAAADgBQAVgDAMgHQAFgDAEgCABTAFQAIgFAFgHQAHgIAAgLIAZBIQgGAGgJAGABTAFIAeA1AAvAVQAOgEAMgHQAFgCAFgDAgGAaQAEAAACAAQAZAAAWgFIASA1AgGAaIgBA4AhZAAIgiAhIgEANQABAMAlAMAhDANQAbAMAiABAhngaIgUA7");
	this.shape_51.setTransform(133.9,51.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgSA3QgfgBgVgGIgTgFIAXg4QAaAMAjABIgCA3IgLAAgAgFAAIAFAAQAZAAAWgGIASA1IghAEQgSADgVABgABBAvgAAvgGQAOgEAMgGIAJgFIAgA0Iggg0QAJgGAFgHQAHgJABgLIAXBIQgFAHgIAGIgJAFQgNAGgVAEIgGABgAh/ASIAFgMIATg8QAAAPAOAMQAHAGAJAFIAHADIgXA4QglgMgBgNgAh6AGIAhghg");
	this.shape_52.setTransform(133.9,53.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#996633").s().p("AgFA2QgjgBgagMIgGgDQgKgFgHgGQgNgMgBgOIAAgBIABgGQAFgSAZgNQAegQAqAAQAbAAAWAGIAqAWIAHAHQAFAIAAAIIABACIAAABQgBALgHAIQgFAHgIAGIgJAFQgNAHgOAEQgVAFgaAAIgFAAgAgCAhQAfAAAWgKQAXgKAAgNIgBgDQgBgEgEgFIAagCIgaACIgBgCQgGgFgKgFQgWgKgfAAQggAAgWAKQgWALAAANQAAANAWAKQAWAKAgAAIAAAAgAgCAhQggAAgWgKQgWgKAAgNQAAgNAWgLQAWgKAgAAQAfAAAWAKQAKAFAGAFIABACIhEAEIBEgEQAEAFABAEIABADQAAANgXAKQgWAKgfAAIAAAAgAhOAAIAAAAgABEgMIAAAAg");
	this.shape_53.setTransform(133.875,48.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0033").ss(2,1,1).p("Ag0AFIBMgGIAdgD");
	this.shape_54.setTransform(139.3,47.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#663300").ss(1,1,1).p("AhQAAQAAAPAXAKQAYAKAhAAQAiAAAYgKQAYgKAAgPQAAgBgBgBQgBgGgFgFQgFgGgMgFQgYgLgiAAQghAAgYALQgXAKAAAOg");
	this.shape_55.setTransform(134.2,48.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("ABuggQgBgNgMgMIgtgWQgXgHgdAAQgtAAggARQgbAOgFATQgBADAAAFIAAAAQABAPAOANQAHAFALAGQADACADABIgYA8QAJADALADQAXAGAgAAQAHAAAGAAQAVAAAUgDQAXgDAMgCQAEAAADgBQAWgEANgGQAGgDAEgDAiDAiIgEAOQAAANAoANAAyAWQAPgEANgHQAFgDAFgDQAJgFAGgHQAHgKAAgLIAaBMQgGAHgJAGABYAFIAhA4AgGAcIgBA6AgGAcQADAAADAAQAbAAAXgGIATA4AhHAOQAcAMAlACAhugcIgVA+AhfAAIgkAi");
	this.shape_56.setTransform(134.525,51.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgUA6QgggBgXgGIgUgGIAYg7QAcAMAlABIgBA7IgNAAgAgGgBIAGAAQAbABAXgGQAPgFANgGIAKgGQAJgFAGgIQAHgJAAgMIAaBMQgGAIgJAFIghg3IAhA3IgKAGQgNAHgWADIgHACIgTg4IATA4IgjAEQgUADgVABgAhfAtQgogNAAgNIAEgOIAVg+QABAQAOAMQAHAGALAGIAGADIgYA7IAAAAgAiDAFIAkgigAB5Agg");
	this.shape_57.setTransform(134.525,54.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#996633").s().p("AgGA5QglgBgcgNIgGgCQgLgHgHgFQgOgNAAgPIAAgBIABgGQAEgTAbgOQAggRAtAAQAdAAAXAHIAuAWQAMAMAAANIAAACIAAABQAAALgHAKQgGAHgJAFIgJAHQgNAGgQAEQgXAGgbAAIgGAAgAgCAiQAhABAXgLQAZgKAAgOIgBgDQgBgGgFgEIAcgDIgcADQgFgHgNgFQgXgLghAAQgiAAgYALQgXALAAAOQAAAOAXAKQAYALAigBIAAAAgAgCAiQgiABgYgLQgXgKAAgOQAAgOAXgLQAYgLAiAAQAhAAAXALQANAFAFAHIhMAGIBMgGQAFAEABAGIABADQAAAOgZAKQgXALghgBIAAAAgAhTAAIAAAAgABIgNIAAAAg");
	this.shape_58.setTransform(134.5,48.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0033").ss(2,1,1).p("AgvAJIBGgMIAZgF");
	this.shape_59.setTransform(139.05,47.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#663300").ss(1,1,1).p("AhTAAQAAAOAYAKQAZAKAiAAQAjAAAZgKQAYgKAAgOQAAgBAAgCQgCgJgNgHQgBgBgCAAQgDgCgDgCQgZgKgjAAQgiAAgZAKQgYALAAANg");
	this.shape_60.setTransform(134.375,48.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("ABygeQgBgOgMgKIgGgDIgpgTQgYgHgeAAQguAAgiAQQgcAOgEATQgBADAAAEIAAAAQAAAPAPAMQAHAFALAGQAEABADACIgZA6QAKADALADQAXAFAiABQAHAAAGAAAiHAhIgFANQABANApANABbAFIAjA2AA0AVQAQgEANgGQAGgDAEgDQAKgFAGgGQAHgKABgLIAaBJQgGAHgJAGABIBMQAEgBADAAQAXgEAOgHQAFgCAFgDAgGAbQAEAAACAAQAdAAAXgGIAUA3AgGAbIgBA5QAWgBAVgDQAXgCANgCAhJAOQAdAMAmABAhxgbIgWA8AhiAAIglAh");
	this.shape_61.setTransform(134.7,51.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgUA4QgigBgXgFIgVgGIAZg5QAdAMAmABIgBA4IABg4IAGAAQAcAAAYgGQAQgEANgGIAKgGIAiA1Igig1QAJgGAGgGQAIgKABgLIAaBJQgGAHgKAGIgJAFQgOAHgXAEIgHABIgUg2IAUA2IglAEQgUADgWABIgNAAgAiMASIAEgNIAlghQAIAGALAGIAHADIgZA5QgpgNgBgNgAhyg3QABAPAOAMIglAhgABbgWgAhjgcIAAAAg");
	this.shape_62.setTransform(134.7,54.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#996633").s().p("AgGA3QgmgBgdgMIgHgDQgLgFgIgGQgOgMgBgPIAAgBIACgGQAEgTAcgNQAigQAuAAQAeAAAXAGIAqAUIAFACQANALABANIABACIAAABQgBALgIAJQgGAHgJAGIgKAFQgNAHgQAEQgYAFgcAAIgGAAgAgCAiQAiAAAYgLQAZgKAAgNIgBgDQgBgJgNgHIAZgFIgZAFIgDgCIgHgDQgYgKgiAAQgkAAgYAKQgZAKAAAOQAAANAZAKQAYALAkAAIAAAAgAgCAiQgkAAgYgLQgZgKAAgNQAAgOAZgKQAYgKAkAAQAiAAAYAKIAHADIADACIhFAMIBFgMQANAHABAJIABADQAAANgZAKQgYALgiAAIAAAAgAhXAAIAAAAgABCgTIAAAAg");
	this.shape_63.setTransform(134.7,48.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF0033").ss(2,1,1).p("AgrAKIBBgOIAWgF");
	this.shape_64.setTransform(138.4,46.825);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#663300").ss(1,1,1).p("AhPAAQAAAPAXAKQAYALAgAAQAiAAAXgLQAXgKAAgPQAAAAAAgCQgCgKgOgIQgDgCgEgCQgXgLgiAAQggAAgYALQgXALAAANg");
	this.shape_65.setTransform(134.125,48.475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("ABsgfQgBgOgLgLIgtgXQgXgGgcAAQgsAAggAQQgbAPgEATQgBADAAAEIAAAAQAAAQAOAMIgjAjIgEANQAAANAoANQAJAEAKACQAXAGAgAAQAGAAAGAAQAVAAAUgDQAWgDAMgBQAEgBACAAQAXgEANgHQAFgDAEgDAAxAWQAPgEANgHQAFgCAEgEQAKgFAFgHQAHgJABgMIAZBMQgGAHgJAGABWAFIAhA4AgGAcIgBA6AgGAcQADAAADAAQAbAAAWgGIATA5AheAAQAHAFALAGQADACADABIgXA8AhGAOQAcAMAkACAhsgcIgVA/");
	this.shape_66.setTransform(134.475,51.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgTA5QggAAgXgFIgTgHIAXg7QAcANAkABIgBA5IgMAAgAgGAAIAGAAQAbgBAWgFQAPgEANgHIAJgGQAKgGAFgGQAHgKABgLIAZBLQgGAHgJAHIghg4IAhA4IgJAFQgNAGgXAEIgGABIgTg3IATA3IgiAFQgUADgVAAgAhdAtQgogMAAgOIAEgNIAVg+QAAAPAOANQAHAFALAGIAGADIgXA7IAAAAgAiBAGIAjgigAB3Ahg");
	this.shape_67.setTransform(134.475,54.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#996633").s().p("AgFA5QglgBgbgMIgHgEQgKgFgHgGQgOgMgBgQIAAgBIABgGQAEgTAbgPQAggQAsAAQAcAAAXAHIAtAXQALALABAOIABABIAAABQAAALgIAKQgFAHgKAGIgJAFQgMAHgQAFQgWAFgbAAIgFAAgAgCAjQAhAAAWgKQAYgLAAgOIAAgDQgCgKgOgIIAXgFIgXAFIgIgEQgWgKghAAQgiAAgXAKQgYALAAAOQAAAOAYALQAXAKAiAAIAAAAgAgCAjQgiAAgXgKQgYgLAAgOQAAgOAYgLQAXgKAiAAQAhAAAWAKIAIAEIhAAOIBAgOQAOAIACAKIAAADQAAAOgYALQgWAKghAAIAAAAgAhTAAIAAAAgAA9gVIAAAAg");
	this.shape_68.setTransform(134.45,48.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0033").ss(2,1,1).p("AgmAMIA7gRIASgF");
	this.shape_69.setTransform(137.975,46.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#663300").ss(1,1,1).p("AhQAAQAAAPAYAKQAXAKAhAAQAiAAAYgKQAXgKAAgPQAAAAAAgCQgDgMgUgKIgBAAQgDgBgDgBQgVgIgeAAQghAAgXAKQgYALAAANg");
	this.shape_70.setTransform(134.325,48.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("ABugfQgBgNgMgLIgugXQgXgGgcAAQgtAAggAQQgbAOgFATQgBADAAAEIAAABQABAPAOAMIgjAiIgFANQABANAnANQAJADALADQAXAGAgAAQAHAAAGAAQAVAAAUgDQAXgDAMgCQAEgBACAAQAXgEANgGQAFgDAEgDAAxAVQAQgEANgGQAFgDAEgDQAKgFAFgHQAIgJAAgLIAaBKQgGAHgKAGABXAFIAhA3AgGAbIgBA6AgGAbQADAAADAAQAbAAAWgGIAUA4AhfAAQAHAFALAGQADABADACIgYA7AhHAOQAcAMAlABAhugbIgUA9");
	this.shape_71.setTransform(134.675,51.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgUA5QgggBgXgGIgUgFIAYg7QAcANAlABIgBA5IgNAAgAgGAAIAGAAQAbAAAWgGQAQgEANgHIAJgFQAKgGAFgHQAIgKAAgLIAaBLQgGAHgKAGIghg2IAhA2IgJAFQgNAHgXADIgGABIgUg2IAUA2IgjAFQgUADgVABgAhfAtQgngNgBgNIAFgNIAUg+QABAPAOANQAHAGALAFIAGADIgYA7IAAAAgAiCAGIAjgigAB4Agg");
	this.shape_72.setTransform(134.675,54.525);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#996633").s().p("AgGA4QgkgBgcgMIgHgDQgKgGgIgGQgNgMgBgPIAAgBIABgGQAEgTAbgOQAhgQAsAAQAdAAAXAGIAtAXQAMALABANIAAACIAAABQAAALgHAJQgGAHgJAGIgKAGQgNAGgPAEQgWAGgcAAIgGAAgAgCAiQAhAAAYgKQAXgKAAgOIAAgDQgDgMgUgKIgBAAIASgFIgSAFIgGgCQgVgIgdAAQgiAAgXAKQgYALAAAOQAAAOAYAKQAXAKAiAAIAAAAgAgCAiQgiAAgXgKQgYgKAAgOQAAgOAYgLQAXgKAiAAQAdAAAVAIIAGACIg6ASIA6gSIABAAQAUAKADAMIAAADQAAAOgXAKQgYAKghAAIAAAAgAhTAAIAAAAgAA2gZg");
	this.shape_73.setTransform(134.625,48.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF0033").ss(2,1,1).p("AgiAOIAxgTIATgI");
	this.shape_74.setTransform(137.35,46.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#663300").ss(1,1,1).p("AhMAAQAAAOAWALQAXAKAfAAQAgAAAWgKQAXgLAAgOQAAgBAAgBQgDgMgUgKQgDgBgDgBQgVgIgbAAQgfAAgXAKQgWALAAANg");
	this.shape_75.setTransform(134.1,48.675);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("ABogeQgBgOgLgLIgrgXQgWgGgbAAQgqAAgfAQQgaAOgEATQgBADAAAEIAAABQABAPANAMIgiAiIgEAOQABAMAlANQAJADAKADQAWAGAeAAQAHAAAFAAQAUAAAUgEQAVgCAMgCQADgBADAAQAVgEAMgGQAFgDAEgDAAwAVQAOgDAMgHQAFgDAEgDQAJgFAFgHQAHgJAAgLIAZBLQgGAHgJAFABTAFIAfA3AgGAbQAEAAACAAQAaAAAWgGIASA4AgGAbIgBA6AhaAAQAHAFAKAGQADACADABIgXA7AhDAOQAbAMAiABAhogbIgUA9");
	this.shape_76.setTransform(134.4,51.65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgSA4QgfAAgVgFIgTgGIAWg7QAbAMAiACIgBA4IgLAAgAgGAAIAGAAQAagBAVgFQAPgEAMgHIAJgGQAJgFAFgHQAIgJgBgLIAZBKQgGAHgIAGIggg3IAgA3IgJAFQgNAGgVAEIgGABIgTg2IATA2IgiAFQgSADgVAAgAhZAtQgmgNgBgNIAEgNIAigiQAHAGAKAFIAGADIgWA7IAAAAgABzAggAhog3QABAPANAMIgiAigAhagcIAAAAg");
	this.shape_77.setTransform(134.4,54.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#996633").s().p("AgGA4QgigBgbgMIgGgDQgKgGgHgGQgNgMgBgPIAAgBIABgGQAEgTAagNQAfgRAqAAQAbAAAWAHIArAWQALALABAOIAAABIAAABQABALgIAKQgFAGgJAGIgJAGQgMAGgPAFQgVAFgaAAIgGAAgAgCAiQAfAAAXgKQAWgKAAgOIAAgDQgDgMgTgKIgHgCIATgJIgTAJQgVgIgaAAQggABgXAJQgWALAAAOQAAAOAWAKQAXAKAgAAIAAAAgAgCAiQggAAgXgKQgWgKAAgOQAAgOAWgLQAXgJAggBQAaAAAVAIIgxAUIAxgUIAHACQATAKADAMIAAADQAAAOgWAKQgXAKgfAAIAAAAgAhPAAIAAAAgAAtgbIAAAAg");
	this.shape_78.setTransform(134.4,48.75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF0033").ss(2,1,1).p("AghARIAugWIAVgL");
	this.shape_79.setTransform(137.5,46.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#663300").ss(1,1,1).p("AhNAAQAAAQAWALQAXALAgAAQAhAAAXgLQAWgLAAgQQAAAAAAgCQgCgNgUgKQgFgDgGgBQgTgIgaAAQggAAgXAMQgWALAAAOg");
	this.shape_80.setTransform(134.25,49.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1).p("ABqghQgBgOgLgMIgsgYQgWgHgcAAQgrAAgfASQgaAPgFAUQgBADAAAEQAAABAAAAQABAQANANIgiAkIgEAOQAAAOAnAOQAIADALADQAWAGAfABQAHAAAFAAQAVgBATgDQAWgDAMgCQADgBADAAQAWgEANgHQAFgDAEgDAAwAXQAPgEAMgHQAFgDAFgDQAJgGAFgHQAHgKABgMIAYBPQgFAIgJAGABVAGIAgA6AgGAdIgBA+AgGAdQAEAAACAAQAaAAAWgGIATA7AhcAAQAHAGALAGQADABADACIgXA/AhEAPQAbANAjABAhqgdIgUBB");
	this.shape_81.setTransform(134.575,52.225);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgTA8QgfAAgWgGIgTgHIAXg+QAbANAjABIgBA9IgMAAgAgGgBIAGAAQAaAAAWgGQAPgEAMgHIAKgGQAJgGAFgHQAHgLABgLIAYBPQgFAHgJAHIggg6IAgA6IgJAFQgNAIgWADIgGABIgTg6IATA6QgMADgWACQgTAEgVAAgAhbAvQgngNAAgOIAEgOIAUhBQABAQANANQAHAGALAGIAGADIgXA+IAAAAgAh+AGIAigkgAB1Aig");
	this.shape_82.setTransform(134.575,55.275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#996633").s().p("AgGA8QgjgBgbgNIgGgDQgLgGgHgHQgNgNgBgQIAAgBIABgGQAFgUAagPQAfgSArAAQAcAAAWAHIAsAYQALAMABAOIABACIAAABQgBAMgHAKQgFAIgJAGIgKAGQgMAHgPAEQgWAGgaAAIgGAAgAgCAlQAgAAAXgLQAWgLAAgPIAAgDQgCgNgUgKIgLgEIAVgLIgVALQgUgHgYAAQghAAgXALQgXALAAAPQAAAPAXALQAXALAhAAIAAAAgAgCAlQghAAgXgLQgXgLAAgPQAAgPAXgLQAXgLAhAAQAYAAAUAHIguAXIAugXIALAEQAUAKACANIAAADQAAAPgWALQgXALggAAIAAAAgAhRAAIAAAAgAAqgeIAAAAg");
	this.shape_83.setTransform(134.575,49.125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF0033").ss(2,1,1).p("AgfARIAsgXIATgK");
	this.shape_84.setTransform(137.175,46.225);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#663300").ss(1,1,1).p("AhPAAQAAAPAXALQAYALAgAAQAhAAAYgLQAXgLAAgPQAAgBAAgBQgDgOgUgKQgHgDgHgCQgTgFgYAAQggAAgYAKQgXAMAAAOg");
	this.shape_85.setTransform(134.125,48.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("ABtghQgBgOgMgMIgtgXQgWgIgdAAQgsAAggASQgaAPgFAUQgBADAAAFIAAAAQABAQAOANIgjAkIgFAPQABANAnAOQAJADALADQAWAGAgABQAHAAAFAAQAVgBAUgDQAWgDANgCQADgBADAAQAWgEANgHQAFgDAEgDAAxAXQAPgEANgHQAFgDAFgDQAJgGAFgHQAIgKAAgMIAZBQQgFAHgKAGABXAGIAgA6AgFAdIgCA+AgFAdQADAAACAAQAbAAAWgGIAUA7AhdAAQAHAGAKAGQAEABADACIgYA/AhFAPQAbANAlABAhsgdIgUBB");
	this.shape_86.setTransform(134.45,51.875);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgTA8QggAAgXgGIgTgHIAYg+QAbANAlACIgBA8IgNAAgAgFAAIAFAAQAbAAAWgGQAPgFANgHIAJgGQAKgGAFgHQAIgLgBgLIAaBPQgGAIgJAGIghg6IAhA6IgJAGQgNAHgWAEIgGABIgUg6IAUA6IgkAFQgTADgUAAgAhdAvQgngNgBgOIAFgOIAUhBQABAQAOANQAHAGAKAGIAHADIgYA+IAAAAgAiAAGIAjgkgAB3Aig");
	this.shape_87.setTransform(134.45,54.925);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#996633").s().p("AgFA8QglgBgbgNIgHgEQgKgGgHgGQgOgNgBgQIAAAAIABgHQAFgVAagPQAggRAsAAQAdAAAWAIIAtAXQAMAMABAOIAAADIAAAAQAAALgIALQgFAHgJAHIgKAFQgNAIgPAEQgWAGgbAAIgFAAgAgCAlQAggBAYgKQAXgLAAgPIAAgDQgDgOgUgJIgOgGIAUgKIgUAKQgTgFgXAAQghAAgYALQgXALAAAPQAAAPAXALQAYAKAhABIAAAAgAgCAlQghgBgYgKQgXgLAAgPQAAgPAXgLQAYgLAhAAQAXAAATAFIgsAZIAsgZIAOAGQAUAJADAOIAAADQAAAPgXALQgYAKggABIAAAAgAhSAAIAAAAgAAoggIAAAAg");
	this.shape_88.setTransform(134.425,48.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF0033").ss(2,1,1).p("AghAUIArgZIAYgO");
	this.shape_89.setTransform(137.325,46.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#663300").ss(1,1,1).p("AhPAAQAAAQAYAMQAXALAgAAQAhAAAYgLQAWgMAAgQQAAgBAAgCQgCgNgUgLQgHgDgIgCQgSgGgYAAQggAAgXALQgYAMAAAPg");
	this.shape_90.setTransform(134.1,49.125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1,1,1).p("ABsgjQgBgPgMgMIgggSIgMgHQgXgIgcAAQgrAAggATQgaAPgFAWQgBADAAAFQAAAAAAABQABAQAOAOQAGAGALAGQADACADABIgXBDQAJADAKAEQAWAGAgABQAHAAAFAAQAVgBAUgEQAWgCAMgDQAEAAACgBQAWgEANgHQAFgDAEgDABWAGIAgA+ABWAGQAJgGAFgHQAIgLAAgMIAZBTQgFAIgKAHAAxAYQAPgEAMgIQAGgDAEgDAgFAeQADAAACAAQAbAAAWgGIATA+AhcAAIgjAmIgFAPQABAPAnAOAgFAeIgCBCAhFAPQAbAOAlABAhrgeIgUBE");
	this.shape_91.setTransform(134.45,52.475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgTA/QgggBgWgFIgUgHIAYhCQAbAOAlABIAFAAQAaAAAXgGIATA9QgMACgXADQgTAEgUAAIABhAIgBBAIgNAAgABEA2gAAxgHQAOgFANgHIAKgHIAgA9Iggg9QAJgGAFgHQAIgMAAgMIAZBUQgGAIgJAGIgJAGQgNAIgWAEIgGABgAiEAVIAEgPIAjgmQAHAHALAGIAGADIgYBCQgngPAAgOgAhsg/QABARAOAOIgjAmgAhFgQIAAAAg");
	this.shape_92.setTransform(134.45,55.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#996633").s().p("AgFA/QgkgBgcgOIgGgDQgLgGgGgHQgOgOgBgRIAAgBIABgHQAFgVAagQQAggSArAAQAcAAAXAHIAMAIIAgASQAMAMABAPIAAACIAAABQAAAMgIAMQgFAHgJAGIgKAHQgMAHgPAFQgWAGgbAAIgFAAgAgCAmQAgABAYgMQAWgMAAgPIAAgDQgCgOgUgLQgHgDgIgCIAYgOIgYAOQgSgGgXAAQghAAgXALQgYANAAAPQAAAPAYAMQAXAMAhgBIAAAAgAgCAmQghABgXgMQgYgMAAgPQAAgPAYgNQAXgLAhAAQAXAAASAGIgrAZIArgZQAIACAHADQAUALACAOIAAADQAAAPgWAMQgYAMgggBIAAAAgAhSAAIAAAAgAAnghIAAAAg");
	this.shape_93.setTransform(134.425,49.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF0033").ss(2,1,1).p("AgYARIAfgUIASgN");
	this.shape_94.setTransform(136.575,46.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#663300").ss(1,1,1).p("AhNAAQAAAQAWALQAXALAgAAQAgAAAXgLQAXgLAAgQQAAgBAAgBQgDgOgUgKQgGgDgIgCQgEgBgFgBIgBgBQgOgDgRAAQggAAgXALQgWAMAAAOg");
	this.shape_95.setTransform(134.075,49.125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("ABqghQgBgPgMgLIgrgYQgBgBgBAAQgVgHgbAAQgrAAgfASQgaAPgFAUQAAAEAAAEIAAABQAAAQAOANIgjAlIgEAOQABAOAmAOQAJADAKADQAWAGAfABQAGAAAGAAQAVgBATgDQAWgDAMgCQADgBADAAQAVgEANgHQAFgDAEgDAAwAXQAPgEAMgHQAFgDAEgDQAJgGAGgHQAHgKAAgMIAZBQQgGAIgJAGABUAGIAgA7AgGAdQADAAADAAQAaAAAWgGIATA8AgGAdIgBA/AhbAAQAGAGALAGQADACADABIgXBAAhEAPQAbANAjABAhpgdIgVBC");
	this.shape_96.setTransform(134.375,52.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgTA9QgfAAgWgHIgTgGIAXg/QAbANAjACIgBA9IgMAAgAgGAAIAGAAQAaAAAWgHQAPgEAMgHIAJgGQAJgGAGgHQAHgLAAgMIAZBQQgGAIgJAHIggg7IAgA7IgJAFQgNAIgVADIgGACIgTg8IATA8IgiAEQgTAEgVAAgAiCAUIAEgOIAVhCQAAARAOANQAGAGALAGIAGADIgXA/QgmgOgBgOgAh+AGIAjgkgAB0AjgAhEgPIAAAAg");
	this.shape_97.setTransform(134.375,55.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#996633").s().p("AgGA9QgjgCgbgNIgGgDQgLgGgGgGQgOgNAAgRIAAgBIAAgHQAFgTAagQQAfgRArgBQAbABAVAGIACABIArAYQAMAMABAPIAAABIAAABQAAAMgHALQgGAHgJAGIgJAGQgMAHgPAEQgWAHgaAAIgGAAgAgCAlQAfAAAXgLQAXgLAAgPIAAgDQgDgNgUgLIgOgEIgJgDIASgNIgSANIgBgBQgOgCgQAAQghgBgXALQgWAMAAAPQAAAPAWALQAXALAhAAIAAAAgAgCAlQghAAgXgLQgWgLAAgPQAAgPAWgMQAXgLAhABQAQAAAOACIABABIgfAWIAfgWIAJADIAOAEQAUALADANIAAADQAAAPgXALQgXALgfAAIAAAAgAhQAAIAAAAgAAdgiIAAAAg");
	this.shape_98.setTransform(134.375,49.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FF0033").ss(2,1,1).p("AgXAUIAfgZIAQgO");
	this.shape_99.setTransform(136.75,45.675);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#663300").ss(1,1,1).p("AhSAAQAAAPAYAKQAYALAiAAQAjAAAYgLQAYgKAAgPQAAgBAAgBQgDgNgVgJQgHgDgIgCQgHgCgHgBQgOgDgQAAQgiAAgYALQgYALAAANg");
	this.shape_100.setTransform(134.475,48.425);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(1,1,1).p("ABxgfQgBgOgNgLIgugXQgYgHgdAAQguAAghARQgcAOgEATQgBAEAAAEIAAAAQAAAQAPAMQAHAFALAGQADACAEABIgZA8QAJADAMADQAXAGAhABQAHAAAGAAAiGAjIgEANQAAANApANABaAFIAiA4AAzAWQAQgEANgHQAFgDAFgDQAJgFAGgHQAIgKAAgLIAaBMQgGAHgJAGABHBOQAEAAACgBQAYgDANgHQAFgDAFgDAgGAcQADAAADAAQAcAAAXgGIAUA4AgGAcIgBA7QAWgBAUgDQAXgDANgCAhIAOQAcANAmABAhwgcIgWA/AhhAAIglAj");
	this.shape_101.setTransform(134.825,51.475);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgUA6QghgBgXgGIgVgGIAZg7QAcANAmABIgBA6IABg6IAGAAQAcAAAXgGQAQgEANgHIAKgGIAiA3Igig3QAJgGAGgHQAIgKAAgLIAaBMQgGAHgJAGIgKAGQgNAHgYADIgGABIgUg3IAUA3IgkAFQgUADgWABIgNAAgAiKATIAEgNIAlgjQAHAGALAGIAHADIgZA7QgpgNAAgNgAhwg5QAAAQAPAMIglAjgABagXgAhhgdIAAAAg");
	this.shape_102.setTransform(134.825,54.375);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#996633").s().p("AgGA5QgmgBgcgMIgHgEQgLgFgHgGQgPgNAAgPIAAgBIABgGQAFgUAbgOQAhgQAuAAQAdAAAYAGIAuAXQANALABAOIAAACIAAABQAAALgIAKQgGAHgJAGIgKAFQgNAHgQAEQgXAGgcAAIgGAAgAgCAjQAhAAAZgLQAYgKAAgOIAAgDQgDgNgVgJIgPgFIgOgDIARgPIgRAPQgOgDgPAAQgjAAgYALQgYALAAAOQAAAOAYAKQAYALAjAAIAAAAgAgCAjQgjAAgYgLQgYgKAAgOQAAgOAYgLQAYgLAjAAQAPAAAOADIgfAaIAfgaIAOADIAPAFQAVAJADANIAAADQAAAOgYAKQgZALghAAIAAAAgAhVAAIAAAAgAAbghIAAAAg");
	this.shape_103.setTransform(134.8,48.525);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FF0033").ss(2,1,1).p("AgVAUIAagZIARgP");
	this.shape_104.setTransform(136.05,45.95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#663300").ss(1,1,1).p("AhQAAQAAAOAYALQAXAKAhAAQAhAAAYgKQAXgLAAgOQAAgBAAgBQgCgNgVgJQgOgGgSgCIAAAAQgMgCgNAAQghAAgXAKQgYALAAANg");
	this.shape_105.setTransform(134.05,48.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("ABtgfQgBgOgMgKIgtgXQgXgGgcAAQgsAAggAQQgbAOgFATQgBADAAAEIAAABQABAPAOAMQAHAFALAFQADADADAAIgYA8QAJACALADQAWAGAhABQAGAAAGAAQAVgBAUgDQAWgDANgCQADAAADgBQAWgDANgHQAFgCAEgDAiBAiIgFANQABANAnANAAxAVQAPgDANgIQAFgCAFgDQAJgFAFgHQAIgJAAgLIAaBKQgGAHgKAGABXAFIAgA3AgGAbIgBA6AgGAbQADAAADAAQAbAAAWgGIAUA3AhGANQAcANAkABAhtgbIgUA9AheAAIgjAi");
	this.shape_106.setTransform(134.375,51.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgTA5QghgCgWgFIgUgGIAYg6QAcAMAkABIgBA6IgMAAgAgGgBIAGAAQAbABAWgGQAPgEANgHIAKgFQAJgGAFgHQAIgKAAgLIAaBLQgGAHgKAFIggg1IAgA1IgJAGQgNAHgWADIgGABIgUg2IAUA2IgjAEQgUAEgVABgAheAsQgngMgBgNIAFgOIAUg9QABAPAOAMQAHAHALAFIAGADIgYA6IAAAAgAiBAFIAjgigAB3Afg");
	this.shape_107.setTransform(134.375,54.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#996633").s().p("AgFA4QglgBgcgNIgGgDQgLgFgHgGQgOgMgBgPIAAAAIABgHQAFgTAbgOQAggQAsAAQAcAAAXAGIAtAXQAMAKABAOIAAADIAAAAQAAALgHAJQgGAIgJAFIgJAFQgNAIgPADQgXAGgbAAIgFAAgAgCAiQAhAAAXgKQAYgKAAgOIgBgDQgDgMgUgJQgOgGgRgDIAQgPIgQAPIgBAAQgMgCgMAAQghAAgYALQgYAKAAAOQAAAOAYAKQAYAKAhAAIAAAAgAgCAiQghAAgYgKQgYgKAAgOQAAgOAYgKQAYgLAhAAQAMAAAMACIABAAIgbAaIAbgaQARADAOAGQAUAJADAMIABADQAAAOgYAKQgXAKghAAIAAAAgAhTAAIAAAAgAAXghIAAAAg");
	this.shape_108.setTransform(134.35,48.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FF0033").ss(2,1,1).p("AgPAYIATgdIAMgS");
	this.shape_109.setTransform(134.825,45.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#663300").ss(1,1,1).p("AhMAAQAAAQAWALQAXALAfAAQAgAAAWgLQAXgLAAgQQAAAAgBgCQgCgOgUgKQgRgIgWgCQgIgBgHAAQgfAAgXALQgWAMAAAOg");
	this.shape_110.setTransform(133.775,48.675);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1,1,1).p("ABogiQgBgPgMgMIgqgYQgWgHgbAAQgqAAgfARQgZAQgFAUQgBAEAAAEQAAABAAAAQABAQANAOIghAlIgEAPQAAAOAmAOQAIADALADQAVAGAfABQAGAAAFAAQAUgBATgDQAWgDALgCQAEgBACAAQAWgEAMgHQAFgDAEgDABSAFQAJgFAGgHQAHgLAAgMIAYBSQgFAHgJAHABSAFIAgA9AAvAXQAOgEANgHQAEgDAEgEAgGAdQADAAADAAQAaAAAVgGIASA9AgGAdIgBBAAhaAAQAHAFAKAHQADABADACIgWBBAhDAPQAbANAiABAhogeIgTBD");
	this.shape_111.setTransform(134.075,51.975);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgSA+QgfgBgVgGIgTgHIAWg/QAbANAiABIgBA/IgLAAgAgGgBIAGAAQAaAAAVgGIASA8IghAFQgTADgUABgABBA1gAAvgHQAOgFANgGIAIgHIAgA8Iggg8QAJgGAGgIQAHgKAAgMIAYBRQgFAIgJAHIgJAFQgMAIgWADIgGACgAh/AUIAEgOIAThDQABAQANANQAHAHAKAHIAGADIgWA/QgmgOAAgOgAh7AGIAhgmgAhDgPIAAAAg");
	this.shape_112.setTransform(134.075,55.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#996633").s().p("AgFA9QgjgBgagNIgGgDQgKgHgHgGQgNgOgBgQIAAgBIABgHQAEgUAagQQAegRAqAAQAbAAAWAHIArAYQALAMABAPIAAACIAAABQAAAMgHALQgFAHgJAGIgJAHQgMAHgPAEQgVAGgaAAIgFAAgAgCAlQAfAAAXgLQAWgLAAgPIAAgDQgDgOgTgKQgRgIgXgCIAMgSIgMASIgOgBQggAAgWALQgWAMAAAPQAAAPAWALQAWALAgAAIAAAAgAgCAlQggAAgWgLQgWgLAAgPQAAgPAWgMQAWgLAgAAIAOABIgTAeIATgeQAXACARAIQATAKADAOIAAADQAAAPgWALQgXALgfAAIAAAAgAhOAAIAAAAgAAMglIAAAAg");
	this.shape_113.setTransform(134.025,48.775);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FF0033").ss(2,1,1).p("AgLAWIAOgbIAJgQ");
	this.shape_114.setTransform(134.675,45.975);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#663300").ss(1,1,1).p("AhKAAQAAAOAWAKQAVALAfAAQAfAAAWgLQAXgKAAgOQAAgBgBgBQgCgMgUgKQgQgHgXgCQgCAAgCAAQgFgBgFAAQgfAAgVAKQgWALAAANg");
	this.shape_115.setTransform(134,48.825);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("ABmgeQgBgOgLgLIgqgWQgVgGgbAAQgpAAgeAQQgZAOgFASQgBAEAAAEIAAAAQABAPANAMIghAiIgEANQABANAkAMQAJADAKADQAVAGAeAAQAGAAAGAAQATAAATgDQAVgDALgCQAEgBACAAQAVgEAMgGQAFgDAEgCABRAFQAJgFAFgGQAHgKAAgLIAYBKQgFAHgJAGABRAFIAfA3AAuAVQAOgEANgGQAEgDAEgDAgFAbQADAAACAAQAZAAAVgGIASA3AgFAbIgBA5AhBAOIgXA6AhYAAQAHAFAKAGQADABADACQAaAMAiABAhmgbIgTA9");
	this.shape_116.setTransform(134.275,51.775);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgSA4QgeAAgVgGIgTgGIAXg5QAaALAiACIAFAAQAZgBAVgFIASA2IggAEQgTADgTABIABg4IgBA4IgMAAgABAAwgAAugGQAOgEANgHIAIgFIAfA2Igfg2QAJgFAFgIQAHgJAAgLIAYBJQgFAIgJAGIgJAEQgMAHgVAEIgGABgAh9ASIAEgMIATg9QABAPANAMIghAiIAhgiQAHAGAKAFIAGAEIgXA5QgkgMgBgOgAhBgNIAAAAg");
	this.shape_117.setTransform(134.275,54.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#996633").s().p("AgFA4QgigCgagLIgGgEQgKgFgHgGQgNgMAAgPIAAAAIABgHQAEgTAZgOQAegPApAAQAbgBAWAHIApAWQALALACAOIAAACIAAAAQgBALgGAJQgGAIgJAFIgIAFQgNAHgOAEQgUAFgaABIgFAAgAgBAiQAdAAAXgLQAWgJAAgOIgBgDQgCgMgTgKQgRgHgWgCIgEAAIAIgRIgIARIgJAAQgggBgWAKQgWALAAAOQAAAOAWAJQAWALAgAAIAAAAgAgBAiQggAAgWgLQgWgJAAgOQAAgOAWgLQAWgKAgABIAJAAIgPAcIAPgcIAEAAQAWACARAHQATAKACAMIABADQAAAOgWAJQgXALgdAAIAAAAgAhNAAIAAAAgAAIgiIAAAAg");
	this.shape_118.setTransform(134.25,48.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FF0033").ss(2,1,1).p("AgHAXIAKgdIAFgQ");
	this.shape_119.setTransform(134.825,45.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#663300").ss(1,1,1).p("AhOABQAAAOAXAKQAXALAgAAQAhAAAXgLQAXgKAAgOQAAgBgBgCQgCgMgUgKQgSgIgXgBQgCgBgCAAQgDAAgCAAQgDAAgDAAQggAAgXAKQgXALAAAOg");
	this.shape_120.setTransform(134.475,48.55);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("ABqgfQgBgOgLgLIgsgXQgWgGgcAAQgrAAggAQQgaAOgEAUQgBADAAAEIAAAAQAAAPAOANIgjAiIgEAOQABAMAmAOQAJACALADQAVAGAgABQAGAAAGAAQAVgBATgDQAWgDAMgBQADgBADgBQAWgDANgHQAFgCAEgEAAwAVQAPgDAMgIQAFgCAEgDQAKgFAFgHQAHgKAAgLIAZBMQgFAGgJAGABUAFIAhA3AgGAbIgBA7AgGAbQADAAADAAQAaAAAWgGIATA5AhcAAQAHAFAKAFQADADADABIgXA8AhFAOQAbAMAkABAhqgcIgVA+");
	this.shape_121.setTransform(134.8,51.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgTA5QgggBgVgFIgTgGIAXg7QAbAMAkABIgCA6IgMAAgAgFgBIAFAAQAbAAAVgFQAPgEANgHIAJgGQAJgFAFgHQAHgKAAgLIAaBLQgGAHgJAGIggg3IAgA3IgKAFQgMAHgWAEIgGABIgTg3IATA3IgiAEQgTADgVABgAiCATIADgOIAjgiIgjAiIAVg9QAAAPAOAMQAHAGALAGIAGADIgXA7QgngNAAgNgAB1Agg");
	this.shape_122.setTransform(134.8,54.475);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#996633").s().p("AgFA4QgkgBgbgMIgGgDQgLgFgHgHQgNgMgBgPIAAgBIABgGQAEgTAbgOQAfgRArABQAcAAAWAGIAsAWQAMAMABAOIAAABIAAABQAAALgIAKQgFAHgJAGIgJAFQgNAHgPAEQgVAGgbgBIgFAAgAgCAjQAgAAAXgLQAXgLAAgNIgBgDQgCgNgUgJQgSgIgXgCIgEAAIgFAAIAGgQIgGAQIgFAAQghgBgXALQgXALAAAOQAAANAXALQAXALAhAAIAAAAgAgCAjQghAAgXgLQgXgLAAgNQAAgOAXgLQAXgLAhABIAFAAIgKAdIAKgdIAFAAIAEAAQAXACASAIQAUAJACANIABADQAAANgXALQgXALggAAIAAAAgAhRAAIAAAAgAADgjIAAAAg");
	this.shape_123.setTransform(134.775,48.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FF0033").ss(2,1,1).p("AgCAaIACgdIADgW");
	this.shape_124.setTransform(134.3,45.775);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#663300").ss(1,1,1).p("AhMAAQAAAPAWALQAXALAfAAQAgAAAXgLQAWgLAAgPQAAgBAAgBQgCgNgUgKQgNgGgPgDQgKgCgKAAQgCAAgCAAQgBAAgCAAQgfAAgXALQgWALAAAOg");
	this.shape_125.setTransform(134.075,49.075);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("ABpghQgBgOgMgMIgrgYQgDgBgEAAQgSgFgWAAQgBAAgBAAQgqAAgfARQgaAOgEAVQgBADAAAFIAAAAQAAAQAOANIgiAkIgEAOQAAAOAmAOQAJACAKAEQAWAGAfAAQAGAAAGAAQAUAAATgEQAVgCAMgDQADAAADgBQAWgEAMgGQAFgEAEgCAAvAXQAPgEAMgIQAFgCAEgEQAJgFAGgHQAHgKAAgMIAYBPQgFAIgJAGABTAFIAgA7AgFAdQADAAACAAQAaAAAVgGIATA6AgFAdIgBA9AhaAAQAHAFAKAGQADACADACIgXA/AhDAPQAbANAjABAhogdIgUBB");
	this.shape_126.setTransform(134.375,52.25);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgSA8QgfgBgWgGIgTgGIAXg+QAbANAjABIgBA9IgMAAgAgFgBIAFAAQAaAAAVgGQAPgEAMgHIAJgGQAJgGAGgHQAHgKAAgMIAYBPQgFAHgJAHIggg6IAgA6IgJAFQgMAHgWAEIgGABIgTg6IATA6IghAFQgTADgUABgAiAAUIAEgOIAUhBQAAAQAOANQAHAGAKAGIAGADIgXA+QgmgNAAgOgAh8AGIAigkgABzAigAhDgPIAAAAg");
	this.shape_127.setTransform(134.375,55.275);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#996633").s().p("AgFA7QgjAAgbgNIgGgEQgKgFgHgHQgOgNAAgQIAAAAIABgHQAEgUAagPQAfgSAqABIACAAQAWAAASAFIAHACIArAXQAMAMABAOIAAADIAAAAQAAAMgHAKQgGAHgJAHIgJAFQgMAHgPAFQgVAFgaAAIgFAAgAgCAlQAfAAAXgMQAWgKAAgPIAAgDQgCgNgUgKQgNgGgPgDQgKgCgKAAIgEAAIACgVIgCAVIgCAAQggAAgXALQgWALAAAPQAAAPAWAKQAXAMAgAAIAAAAgAgCAlQggAAgXgMQgWgKAAgPQAAgPAWgLQAXgLAgAAIACAAIgDAeIADgeIAEAAQAKAAAKACQAPADANAGQAUAKACANIAAADQAAAPgWAKQgXAMgfAAIAAAAgAhPAAIAAAAgAAAglIAAAAg");
	this.shape_128.setTransform(134.375,49.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},271).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},5).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},4).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},5).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},4).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},6).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},5).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},5).to({state:[{t:this.shape_42},{t:this.shape_43},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},354).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},6).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},6).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},6).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},6).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},6).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},6).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},6).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},6).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},6).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},6).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},10).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},15).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},11).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},6).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},13).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},15).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},15).to({state:[]},390).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Провода = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Провода
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(2,1,1).p("Aq/A6IPfhrQCNgQBXAPQB8AVBABT");
	this.shape.setTransform(482.85,318.8803);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330099").ss(2,1,1).p("AGiqyQA4AmAQBQQAPBMgcBIQgtB2iVBRQgkAUhZAoQhRAkgqAaQhLAshSBLQgxAthdBiQhIBNgiAvQg2BKgSBJQgIAcgMBpQgKBTgWAt");
	this.shape_1.setTransform(214.5761,256.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFCC").ss(5,1,1).p("Aql16QgIgBgMACQgFAAgOADQgTADgogBQgZAAgQABQgLACgIABAtLTeQgOgbgIgKQgKgHgCgFQgFgHgFgLQgNgVAAgBQgFgHgIgJAimVKQAugGAcgCQAogCAiADAXrV7QglADgfgWQgOgJgPgPIgSgQEAiNAUNQATgSAEgFQANgNAIgMQACgCAEgGQAEgGADgDQAFgFAIgHQAFgDALgHIAagRAYeUGQAMgeAMgKQACgDAFgDIAGgFQAYgRAOgSEghogClQgZACgfAFQgLAAgWAEQgTAFgKACQgRADgNgBA5giEQAPASAGALIAFALQABACABAGQACAEAFAGQAEAEAEAIIAHAOQAHALAAAG");
	this.shape_2.setTransform(414.95,189.5513);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFCC").ss(4,1,1).p("AEHCFQAJgHAUgHQAUgIAJgFQANgKAOgTIAmgwAmAAOQgCgPAIgbQAGgSACgJIANgjQADAAAAgCQgBgGAGgHQALgSAGgJ");
	this.shape_3.setTransform(126.7382,321);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFCC").ss(2,1,1).p("AS50QQhQgShOAhQhPAhgwBHQgWAfgUAwQgDAHgeBOQgEAIgxB2QggBLgRA1QgrCHAPBsQABAFAAAEQABAKABAKQAEA9gDBMQAAASgKCUQgMDRAdB2QATBMAuBfQAbA2A5BrQBdC1A7DFQA5C9AYDFQABAJABAIAy4UYQBNh8CMiIQCmiYBShNQCPiGBUh5QBribAfifQARh2AQg3QAXhTAwgkQAHgGAIgE");
	this.shape_4.setTransform(212.375,179.7354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Подложка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Подложка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA8qgkWIADKDMgN5A+MEAuVAdwIAfGJEA8qgkWMgOVBCGEg8pAdaIgDG9MBOAgAWIdggIEg8pAdaMBN9AAQIdBAGEg8pAdaMALQhBeMBCtgALMArWgAH");
	this.shape.setTransform(399.65,261.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B4513").s().p("Eg8pAdaMBN9AAQIdAAGMAOVhCFIAEKCMgN5A+MIggmJIAgGJI9gAIMhOAAAWg");
	this.shape_1.setTransform(399.65,261.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0522D").s().p("EARUAg9MhN9gAQMALRhBdMBCsgALMArWgAHMgOVBCFg");
	this.shape_2.setTransform(399.625,240.225);

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
	this.shape.graphics.f("#333333").s().p("AgXAXIABgBIABAAQADAAACgCIADgFIANgdQABgEAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgCAAIABgCIAOAAQAGAAACACQADABABADQAAADgBAEQgDAFgFAEQgFACgGAAIgDAAIgCgBIgGAOIgCAFQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIACAAIgBABgAAHgSIgHASIABAAIACAAQADAAAEgBIAFgHIACgGQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgDgBIgFABg");
	this.shape.setTransform(383.6313,391.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgWAXIAAgBIACAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIADgFIAOgiIgDAAIgFABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgEAFIgBAAIAFgLIAhAAIgFALIgBAAIABgEIgBgDIgEgBIgGAAIgOAiQgCAEAAABQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIACAAIgBABg");
	this.shape_1.setTransform(380.675,391.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgZAXIAAgBIACAAIADgBIACgCIACgEIANgdIACgFQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIAfAAIgEAKIgBAAIAAgFQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIgEAAIgLAAIgHASIAIAAIAFgBQACgCACgEIABAAIgHAPIgBAAIABgEIgBgCIgEgBIgIAAIgGAPIgBAEIAAABIACAAIAHAAIAEAAIAEgCIAHgHIABAAIgIAMg");
	this.shape_2.setTransform(376.275,391.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAAAXIAAgBIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIADgFIAOgeIghAmIgBAAIABgmIgNAeIgBAFQAAABAAAAQAAAAABAAQAAABAAAAQABAAABAAIABAAIgBABIgOAAIAAgBIACAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgBABgEIAOgdIABgEIgBgCIgDAAIABgCIAMAAIgBAjIAdgjIAMAAIAAACIgCAAIgFABIgCAFIgOAdQgCAEABABQAAABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIACAAIgBABg");
	this.shape_3.setTransform(371.7,391.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAXIAAgBIACAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIADgFIAOgiIgDAAIgFABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgEAFIgBAAIAFgLIAhAAIgFALIgBAAIABgEIgBgDIgEgBIgGAAIgOAiIgCAFQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIACAAIgBABg");
	this.shape_4.setTransform(367.475,391.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgXAXIABgBIABAAQADAAACgCIADgFIANgdQABgEAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgCAAIABgCIAOAAQAGAAACACQADABABADQAAADgBAEQgDAFgFAEQgFACgGAAIgDAAIgCgBIgGAOIgCAFQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIACAAIgBABgAAHgSIgHASIABAAIACAAQADAAAEgBIAFgHIACgGQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgDgBIgFABg");
	this.shape_5.setTransform(363.0813,391.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgZAXIAAgBIACAAIADgBIACgCIACgEIANgdIACgFQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIAfAAIgEAKIgBAAIAAgFQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIgEAAIgLAAIgHASIAIAAIAFgBQACgCACgEIABAAIgHAPIgBAAIABgEIgBgCIgEgBIgIAAIgGAPIgBAEIAAABIACAAIAHAAIAEAAIAEgCIAHgHIABAAIgIAMg");
	this.shape_6.setTransform(359.575,391.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgFAXIAAgBIAFgCQABgBACgFIAQghIgTAAIgPAhQgCAFAAABQAAABABAAQAAAAABAAQAAAAABAAQABABABAAIgBABIgSAAIABgBIAFgCIAEgGIANgbQACgFAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIABgCIAqAAIgBACIgFABIgEAGIgNAbQgCAFAAABIAFACIgBABg");
	this.shape_7.setTransform(355.525,391.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAAAXIAAgBIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAIACgFIANgeIgfAmIgBAAIABgmIgOAeIgBAFQAAABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIACAAIgBABIgOAAIABgBIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQABgBACgEIANgdIACgEIgCgCIgDAAIAAgCIAMAAIgBAjIAegjIAMAAIgBACIgBAAIgFABIgCAFIgOAdIgCAFQABABAAAAQAAAAAAAAQABABAAAAQABAAABAAIABAAIAAABg");
	this.shape_8.setTransform(350.5,391.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAFAXIABgBIAEgBIACgCIAAgEIABgHIgPAAIgGAHIgDAEIAAACIADABIAAABIgNAAIAAgBIAEgBIAHgHIAegkIABAAIgCAlIAAAGIADABIAAABgAAAAGIANAAIABgSg");
	this.shape_9.setTransform(344.475,391.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgGAXIABgBIAFgCQABgBACgFIAMgZIgeAaIgCAEQAAABAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAEABIgBABIgSAAIABgBIAFgCIAEgGIANgbQACgFAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIABgCIARAAIgBACIgFABIgDAGIgMAZIAfgaQACgEgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIABgCIASAAIgBACIgFABIgEAGIgNAbQgCAFAAABIAFACIgBABg");
	this.shape_10.setTransform(340.925,391.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgcAWIgBgDIACgCIADgBIABABIACABQADAAAEgFQAEgEAGgNIAEgJQABgFAAgBQgBgBAAAAQAAAAAAAAQAAAAgBAAQgBAAgBAAIABgCIAgAAIAAACIgGABIgEAGIgNAbQgCAFABABQAAAAAAAAQAAABABAAQABAAAAAAQABAAABABIAAABIgRAAIAAgBIAGgCIACgGIAQghIgNAAIgFAMQgIATgGAFQgFAGgFAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_11.setTransform(336.5917,391.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgcAWIgBgDIACgCIADgBIABABIACABQADAAAEgFQAEgEAGgNIAEgJQABgFAAgBQgBgBAAAAQAAAAAAAAQAAAAgBAAQgBAAgBAAIABgCIAgAAIAAACIgGABIgEAGIgNAbQgCAFABABQAAAAAAAAQAAABABAAQABAAAAAAQABAAABABIAAABIgRAAIAAgBIAGgCIACgGIAQghIgNAAIgFAMQgIATgGAFQgFAGgFAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_12.setTransform(332.3417,391.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgGAXIABgBIAFgCQABgBACgFIAMgZIgeAaIgCAEQAAABAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAEABIgBABIgSAAIABgBIAFgCIAEgGIANgbQACgFAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIABgCIARAAIgBACIgFABIgDAGIgMAZIAfgaQACgEgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIABgCIASAAIgBACIgFABIgEAGIgNAbQgCAFAAABIAFACIgBABg");
	this.shape_13.setTransform(327.925,391.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAAAXIAAgBIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIADgFIANgeIggAmIgBAAIABgmIgNAeIgBAFQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIACAAIgBABIgOAAIABgBIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgBACgEIANgdIABgEIgBgCIgDAAIABgCIALAAIgBAjIAegjIAMAAIAAACIgCAAIgFABIgCAFIgOAdIgCAFQABABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIACAAIAAABg");
	this.shape_14.setTransform(322.85,391.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_15.setTransform(391.575,359.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_16.setTransform(389.075,359.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFATIAAgBIADgBIABgBIAAgEIAAgSIAAgGIgBgBIgBgBIgCABIAAgBIAHgDIABAAIAAAdIAAAEIABABIACABIAAABg");
	this.shape_17.setTransform(386.55,359.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_18.setTransform(386.775,352.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJATIAAgBIAGgCQADgCABgDQADgEABgFQgEADgCAAQgDAAgDgDQgDgCABgFQgBgFADgEQADgEAEAAQAEAAADADQADAFAAAHQAAAFgCAFQgDAFgFAEQgDADgFAAgAgEgOQgBACAAAEQAAAGACACQAAABABAAQAAABABAAQAAAAABAAQAAAAAAABIACgBIAEgCIAAgFIgBgFIgDgFIgCgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape_19.setTransform(384.25,353);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_20.setTransform(380.325,350.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAQQgCgDAAgDIACgFIAFgFIgFgFIgBgEQAAgEADgCQACgDADAAQAEAAACADQADACAAADQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBACgEADIAGAFIABAGQAAADgCADQgDADgEAAQgEAAgDgDgAgDAFIgBAFQAAADABACQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgEIgHgHQgCACAAACgAgDgPQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABIAAADIACACIADAEIAEgEIABgEQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_21.setTransform(377.8,350.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_22.setTransform(373.575,349.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCATIAIggIgIAAIgDAAIgEAEIgBAAIADgJIARAAIAAABIgKAkg");
	this.shape_23.setTransform(371.05,349.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_24.setTransform(365.125,347.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAQQgGgEAAgIQAAgEACgEQACgFADgDQADgEADgBIAFgBIACAAIAAABQgDAAgCACIgFADIgCAFIgCAGQAEgDACAAQADAAADADQADACAAAFQAAAFgDADQgDAFgFAAQgCAAgCgDgAgBgBIgDABIAAAGIAAAFIADAFIACABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQABgCAAgEQAAgFgBgDQgCgCgDAAIgBAAg");
	this.shape_25.setTransform(362.6,347.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_26.setTransform(356.575,347.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHARQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgBIABgBIABABIACABIAEABQABAAADgCQACgDAAgEQAAgCgCgDQgCgDgCgBIgIgBIAHgPIALAAIgCAFIgJAAIgDAFQAGABAEAEQADADAAAFIgBAFIgDAFIgDACIgFABIgEgBg");
	this.shape_27.setTransform(354.025,347.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_28.setTransform(347.875,348.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AADATIAAgKIgNAAIAAgEIAOgWIADAAIAAAWIAEAAIAAAEIgEAAIAAAKgAgIAFIALAAIAAgRg");
	this.shape_29.setTransform(345.325,348.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_30.setTransform(340.475,350.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHASIgCgCIABgBIACgBIABAAIACABIABABIACABQACAAACgDQACgCAAgDIgBgEIgBgCIgEgCIgCgBIgBAAIAAAAIADgBIADgDIABgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgEAAgCAEIgBAAIAEgGQACgCACAAQAEAAACADQACACAAADQAAADgFAFQADABACABQABADAAADQAAAFgDADQgDAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_31.setTransform(337.85,350.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_32.setTransform(334.875,354.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKATIAAgBQAJgJACgGQAEgEAAgFQAAgDgCgDQgCgCgCAAIgEACQgCACgBADIgBAAQAAgFADgDQADgCADAAQADAAADACQADADAAAEIgBAFQgCAEgEAEIgHAJIAIAAIADAAIADgBIABgCIABAAIgCAIg");
	this.shape_33.setTransform(332.3,354.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_34.setTransform(328.975,356.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.5,1,1).p("AAIg2IgHAoAiSgiIAQAqAhKgvIAGAoAkHAaIAbAdAjPgKIAVAkABYgvIgPAoACZgjIgSApADUgOIgYAoAEIAaIghAd");
	this.shape_35.setTransform(359.675,357.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.2,1,1).p("Agbg2IAAAcAgOg2IAAAbAgCg2IgEAbAgrg0IAAAbAAWg1IgFAbAAhg0IgHAbAANg3IgFAdAiUgfIAMAcAh4gnIAJAbAiAglIAKAbAiHgkIALAcAhRgyIAGAdAg4gxIAEAaAhBgxIADAcAhaguIAGAaAhmguIAIAdAjwAOIAQAWAjUgCIAQAWAjCgKIAOAWAi6gNIANAWAkKAhIATAUAi0gRIAPAYAjbAAIASAWAjNgFIANAVAicgbIANAaAilgXIAPAYACogaIgPAbABagwIgKAcABBgwIgJAZABLgtIgKAYABjgvIgLAdACFgmIgPAcACMgjIgOAbAB8goIgNAbABsgtIgNAdAD0AIIgVAaAD6AOIgYAXADvAGIgUAWACjgdIgQAcACbggIgOAdAC6gWIgQAeADGgNIgRAZADSgLIgQAbADZgHIgPAaADggCIgSAYAC/gRIgQAaAECAbIgZATAEKAlIgaATAEHAfIgaAUAA2gyIgGAZ");
	this.shape_36.setTransform(359.6,358.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AFDpgIAAgEQAAgDAAgDQAAgBAAAAQAAgOAOgLQAOgJAVAAQAUAAAPAJQAOALAAAOQAAAAAAABQAAADgBADQgEAMgHAEQgPALgWAAQgVAAgQgLQgIgFgEgHIAAAqQADAJALAHQAEACAEADIAAAVQANAGAQAAQAQAAALgGIAAgVQgMAFgPAAQgQAAgNgFAGkpkIABAAIAAAFQAAABgBgGgACOoGIgIAYIgGAOIgRArIgTACQgJACgJAAQgBABAAAAIgCAAIgCAAQgBAAAAABQgLAAgKABIgdADIgjgoIgQgSIgMgNIAQgrIAPgmIAugFIAvgFIAgAkIATAWIACABIAKAMIADAkIgPAmIgQArIgTACQgKACgJABQAAAAgBAAIgBAAIgCAAQgCAAAAABQgKAAgLACIgdACIgignIgcggIgDgkAGlpfIAAAwQgDAFgHAEQgFADgFACAkjpgIAAgEQAAgDAAgDQAAgBAAAAQAAgOAOgLQAOgJAVAAQAUAAAPAJQAOALAAAOQAAAAAAABQAAADgBADQgEAMgGAEQgQALgVAAQgWAAgQgLQgIgFgEgHIAAAqQADAJALAHQAEACAEADAjCpkIABAAIAAAFQAAABgBgGgAjVohQgMAFgPAAQgQAAgNgFAjVohIAAAVQgLAGgQAAQgPAAgOgGIAAgVAjBpfIAAAwQgDAFgHAEQgFADgFACAgYkYIAAAwAhpkNIANAtAisj4IAaAtAkijFIAjA7AlIgMQAbgtBFgjQAOgHAPgGQBogsB2AAQA8AAAxALQAxAMAgAVQA7AogRA2AjkjcIAeAmACsjLIAdgxAByjgIAVgsADhi3IAigrAEAiTIApgbAA/kTIgOAqAmeDlIB0pIIKhAAIh0JIgAjBpqIIEAAAIXplIABgFIABAAAIXplIACgFIABAAIgFAPgAIbpkIgBgGIABAAIAAAGIAZEeQgSBcgRBcQhHFvhGFwQgDAPgDAQIgGAeIgDAAAGlpqIBzAAAozFqIAZEkIOPAAAFbFqIAAABIABAKQAAACABACIAYEVAozFqIC8vUIBUAAAozFqIOOAAIC6vF");
	this.shape_37.setTransform(358.575,379.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF99").s().p("AmKEkIB0pHIKhAAIh0JHgAEPAzQAEgMAAgLQAAgngugeQgggVgxgMQgxgLg8AAQh2AAhoArIgdAOQhFAhgbAuQAbguBFghIAdgOQBogrB2AAQA8AAAxALQAxAMAgAVQAuAeAAAnQAAALgEAMgAjrhLIgjg7gAEUhUIApgagAEOhYIAbgSgAjYhaIgTgVgAELhcIAbgVgAEHhhIAZgTgAEGhlIAhgdgAjNhlIgbgdgAEAhqIAZgXgAjChsIgPgVgAD9huIAWgZgAD6h0IATgWgAiyh2IgegngAD1h4IAigqgADsh5IATgagAirh6IgRgVgAimh8IgPgWgADoh9IAPgagADhh/IAQgcgAihh/IgNgWgAibiCIgVglgADbiCIAYgpgADTiDIARgbgAiWiDIgNgXgADOiHIAPgbgAiOiHIgOgXgADIiIIAQgegAiHiJIgPgZgADAiMIAdgwgAh+iMIgagsgAC3iOIAQgdgAh3iOIgPgagACxiRIAQgcgAhxiRIgNgagACsiUIANgcgAhjiUIgQgrgAhqiUIgLgbgACmiWIASgqgACdiYIAOgbgAheiZIgLgbgACViaIAOgdgAhYibIgJgbgAhRidIgJgbgACNieIAOgbgACGihIAVgrgAB+ihIAMgdgAhIihIgNgtgAg/iiIgJgdgAB2iiIAMgegABoijIAPgpgAglijIgGgpgABuikIAKgdgAg1ilIgGgagABfilIAKgYgAgfilIgEgdgAgtimIgGgdgABWioIAJgYgAgWioIgDgZgAgEipIAAgvgABOipIAHgagABFiqIAOgqgAA4iqIAHgagAgMiqIAAgagAAviqIAFgcgAAnirIAFgcgAAgirIAHgogAADirIAAgbgAAPirIAAgbgAAYisIADgag");
	this.shape_38.setTransform(356.575,372.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AolHrIC8vVIBUAAIAAAHIAAAEQAEAGAIAGQAQALAWAAQAVAAAQgLQAGgEAEgMIABAFIAAgFIgBAAIABgHIIEAAIAAAHIAAAEIAAApQADAJALAHIAIAFIAAAWQANAFAQAAQAQAAALgFIAAgVQgMAFgPAAQgQAAgNgGIgIgFQgLgHgDgJIAAgpQAEAGAIAGQAQALAVAAQAWAAAPgLQAHgEAEgMIABAFIAAgFIgBAAIABgHIBzAAIgBAGIgCAJIi6PGgAmQFlIKhAAIB0pHIqhAAgAgclNIAcAfIAiAoIAdgDIAVgCIACgBIACAAIABAAIABAAIATgCIATgCIAQgrIAPgnIgDgkIgKgLIgCgCIgTgWIgggkIgvAFIguAFIgPAmIgQAsgAkVm2QADAJALAHIAIAFIAAAWQAOAFAPAAQAQAAALgFIAAgVQgMAFgPAAQgQAAgNgGIgIgFQgLgHgDgJIAAgpIAAApgAGzmvQgDAFgHAEQgFAEgFACQAFgCAFgEQAHgEADgFIAAgvgAizmvQgDAFgHAEQgFAEgFACQAFgCAFgEQAHgEADgFIAAgvgAAAkuIgcgfIgDgkIAMAMIAQATIAjAoIAdgDIAVgCIABgBIACAAIACAAIABAAIASgCIATgCIARgrIAGgPIAIgYIADAkIgPAnIgQArIgTACIgTACIgBAAIgBAAIgCAAIgCABIgVACIgdADg");
	this.shape_39.setTransform(357.175,366.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AF1KOIgYkVIgBgEIgBgKIAAgBIAAABIABAKIABAEIAYEVIuPAAIgZkkIOOAAIC6vFIAFgPIAAAAIABAGIAZEeIgjC4IiNLfIgGAfIgGAegAgRnTIgQgSIgMgNIAQgrIAPgmIAugFIAvgFIAgAkIATAWIACABIAKAMIgIAYIgGAOIgRArIgTACIgSACIgBABIgCAAIgCAAIgBABIgVABIgdADgAFZoMIAAgVQANAFAQAAQAPAAAMgFIAAAVQgLAGgQAAQgQAAgNgGgAkNoMIAAgVQANAFAQAAQAPAAAMgFIAAAVQgLAGgQAAQgPAAgOgGgAFPpUQgIgFgEgHIAAgEIAAgGIAAgBQAAgOAOgLQAOgJAVAAQAUAAAPAJQAOALAAAOIAAABIgBAGQgEAMgHAEQgPALgWAAQgVAAgQgLgAkXpUQgIgFgEgHIAAgEIAAgGIAAgBQAAgOAOgLQAOgJAVAAQAUAAAPAJQAOALAAAOIAAABIgBAGQgEAMgGAEQgQALgVAAQgWAAgQgLg");
	this.shape_40.setTransform(358.575,379.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_МиллиампСтрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// МиллиампСтрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah7jOID3Gd");
	this.shape.setTransform(342.375,380.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ag+joIB9HR");
	this.shape_1.setTransform(348.475,378.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhGjlICNHL");
	this.shape_2.setTransform(347.7,378.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhMjkICZHI");
	this.shape_3.setTransform(347.125,378.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhSjiIClHE");
	this.shape_4.setTransform(346.5,379.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhcjeIC5G9");
	this.shape_5.setTransform(345.55,379.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhhjbIDDG4");
	this.shape_6.setTransform(345.025,379.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhojZIDRGz");
	this.shape_7.setTransform(344.375,380);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhxjUIDjGp");
	this.shape_8.setTransform(343.475,380.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah1jRIDsGj");
	this.shape_9.setTransform(343.05,380.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},372).to({state:[{t:this.shape_2}]},292).to({state:[{t:this.shape_1}]},16).to({state:[{t:this.shape_3}]},19).to({state:[{t:this.shape_4}]},17).to({state:[{t:this.shape_5}]},18).to({state:[{t:this.shape_6}]},17).to({state:[{t:this.shape_7}]},18).to({state:[{t:this.shape_8}]},20).to({state:[{t:this.shape_9}]},20).wait(391));

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
	this.shape_9.graphics.f().s("#FF0000").ss(0.6,1,1).p("ACCjKIkDGV");
	this.shape_9.setTransform(601.475,386.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},372).to({state:[{t:this.shape_1}]},77).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_9}]},10).wait(671));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Вольтметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Вольтметр
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape.setTransform(627.275,359.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHARQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgBIABgBIABABIACAAIAEACQABAAADgCQACgDAAgEQAAgCgCgDQgCgDgCgBIgIgBIAHgPIALAAIgCAFIgJAAIgDAFQAGABAEAFQADACAAAFIgBAFIgDAEIgDADIgFABIgEgBg");
	this.shape_1.setTransform(624.725,359.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFATIAAgBIADgBIABgBIAAgEIAAgTIAAgFIgBgBIgBgBIgCABIAAgBIAHgDIABAAIAAAdIAAAEIABABIACABIAAABg");
	this.shape_2.setTransform(622.25,359.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAKQgCgEAAgGIABgHQABgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQADAAACADQADAEAAAGQAAAFgCADQgBADgCACIgDABQgDAAgCgEgAgCgLIgBAGIgBAGIABAJQABABAAAAQABABAAAAQABAAAAABQAAAAAAAAIACgBIABgDIABgJIgBgIIgBgDIgCgBIgCABg");
	this.shape_3.setTransform(620.2,360.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AACAOIAAgHIgJAAIAAgDIAKgRIACAAIAAARIADAAIAAADIgDAAIAAAHgAgFAEIAHAAIAAgMg");
	this.shape_4.setTransform(618.3,360.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDAOIAAgBIACAAIABgBIAAgDIAAgOIAAgDIgBgBIgBAAIgCAAIAAAAIAFgEIABAAIAAAWIAAADIABABIACAAIAAABg");
	this.shape_5.setTransform(616.425,360.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOQgCACgBAFIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_6.setTransform(619.125,353.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHASIgCgCIABgBIACgBIABAAIABABIACABIACABQACAAACgDQACgCAAgDIgBgEIgBgCIgDgCIgDgBIgBAAIAAAAIADgBIADgDIABgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgEAAgCAEIgBAAIAEgGQACgCACAAQAEAAACADQACACAAADQAAADgFAFQAEABABABQACADAAADQgBAFgDADQgDAFgGAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAg");
	this.shape_7.setTransform(616.5,353.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFATIAAgBIADgBIABgBIAAgEIAAgTIAAgFIAAgBIgCgBIgDABIAAgBIAHgDIABAAIAAAdIAAAEIABABIAEABIAAABg");
	this.shape_8.setTransform(614.1,353.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAKQgCgEAAgGIABgHQABgDADgCQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQADAAACADQADAEAAAGQAAAFgBADQgCADgCACIgDABQgDAAgCgEgAgBgLIgCAGIgBAGIACAJQAAABAAAAQABABAAAAQABAAAAABQAAAAAAAAIACgBIABgDIABgJIgBgIIgBgDIgCgBIgBABg");
	this.shape_9.setTransform(611.95,356.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAOIAAgBQAHgGABgFQADgDgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgEACIgCADIgBAAQABgEACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACAAACADQACACABACIgBAFIgEAFIgGAHIAGAAIADAAIACgBIABgBIAAAAIgBAFg");
	this.shape_10.setTransform(610.05,356.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDAOIAAgBIACAAIABgBIAAgDIAAgOIAAgDIgBgBIgBAAIgCAAIAAAAIAFgEIABAAIAAAWIAAADIABABIACAAIAAABg");
	this.shape_11.setTransform(608.175,356.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_12.setTransform(608.975,351.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFATIAAgBIADgBIABgBIAAgEIAAgTIAAgEIAAgCIgCgBIgDABIAAgBIAHgDIABAAIAAAdIAAAEIABABIAEABIAAABg");
	this.shape_13.setTransform(606.45,351.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFATIAAgBIADgBIABgBIAAgEIAAgTIAAgEIAAgCIgBgBIgEABIAAgBIAHgDIABAAIAAAdIAAAEIABABIAEABIAAABg");
	this.shape_14.setTransform(603.95,351.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAKQgCgEAAgGIABgHQABgDADgCQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQADAAACADQADAEAAAGQAAAFgBADQgBADgDACIgDABQgDAAgCgEgAgBgLIgCAGIAAAGIABAJQAAABAAAAQABABAAAAQABAAAAABQAAAAAAAAIACgBIABgDIACgJIgCgIIgBgDIgCgBIgBABg");
	this.shape_15.setTransform(602.6,355.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAKQgCgEAAgGIABgHQABgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQADAAACADQADAEAAAGQAAAFgCADQgBADgBACIgEABQgDAAgCgEgAgCgLIgBAGIgBAGIABAJQABABAAAAQABABAAAAQABAAAAABQAAAAAAAAIACgBIACgDIABgJIgBgIIgCgDIgCgBIgCABg");
	this.shape_16.setTransform(600.75,355.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDAOIAAgBIACAAIABgBIAAgDIAAgOIAAgDIgBgBIgBAAIgCAAIAAAAIAFgEIABAAIAAAWIAAADIABABIACAAIAAABg");
	this.shape_17.setTransform(598.825,355.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_18.setTransform(598.125,351.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJATIAAgBIAGgCQADgBABgEQADgFABgEQgEADgCAAQgEAAgCgDQgCgCgBgFQABgFACgDQADgFAEAAQAEAAADAEQADAEAAAHQAAAFgDAFQgCAFgFAEQgDADgFAAgAgDgOQgCACAAAEQAAAGACACQAAABABAAQAAABABAAQAAAAABAAQAAABAAAAIADgBIADgCIAAgEIgBgGIgCgFIgDgCQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_19.setTransform(595.6,351.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAKQgCgEAAgGIABgHQACgDACgCQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQADAAACADQADAEAAAGQAAAFgBADQgBADgCACIgEABQgDAAgCgEgAgBgLIgCAGIAAAGIABAJQAAABAAAAQABABAAAAQABAAAAABQAAAAAAAAIACgBIACgDIABgJIgBgIIgCgDIgCgBIgBABg");
	this.shape_20.setTransform(592.35,354.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAMIgBgEIABgEIAEgEIgEgDIgBgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQABAAAAABIgBADIgFAEIAFADIABAEQAAADgCACQgCACgDAAQgCAAgDgCgAgCAEIgBADQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAIACgDIgBgDIgEgFIgCADgAgCgLQAAABgBAAQAAAAAAAAQAAABAAAAQAAABAAAAIAAACIACACIABADIADgEIABgCIgBgEIgDgBIgCABg");
	this.shape_21.setTransform(590.45,354.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_22.setTransform(587.275,351.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDATIAJggIgIAAIgEAAIgDAEIAAAAIADgJIARAAIAAABIgLAkg");
	this.shape_23.setTransform(584.75,351.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAKQgCgEAAgGIABgHQABgDADgCQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQADAAACADQADAEAAAGQAAAFgCADQgBADgBACIgEABQgDAAgCgEgAgCgLIgBAGIAAAGIABAJQAAABAAAAQABABAAAAQABAAAAABQAAAAAAAAIACgBIACgDIABgJIgBgIIgCgDIgCgBIgCABg");
	this.shape_24.setTransform(583.1,355.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDAMQgEgDAAgGQAAgDACgDIAEgGIADgDIAEgBIABAAIAAABIgDABIgEACIgBAEIgCAFQADgCABAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQACABAAAEQAAADgCADQgDADgDAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgBAAIgCAAIAAAEIABAFIABADIABABQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgEIgBgGQgBgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBABg");
	this.shape_25.setTransform(581.2,355.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_26.setTransform(577.475,352.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHARQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgBIABgBIABABIACAAIAEACQABAAADgCQACgDAAgEQAAgCgCgDQgCgDgCgBIgIgBIAHgPIALAAIgCAFIgJAAIgDAFQAGABAEAEQADADAAAFIgBAFIgDAEIgDADIgFABIgEgBg");
	this.shape_27.setTransform(574.925,352.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAKQgCgEAAgGIABgHQABgDACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQADAAACADQADAEAAAGQAAAFgCADQgBADgBACIgEABQgDAAgCgEgAgCgLIgBAGIgBAGIABAJQABABAAAAQABABAAAAQABAAAAABQAAAAAAAAIACgBIACgDIABgJIgBgIIgCgDIgCgBIgCABg");
	this.shape_28.setTransform(573.3,357.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AACAOIAAgHIgJAAIAAgDIAKgRIACAAIAAARIAEAAIAAADIgEAAIAAAHgAgGAEIAIAAIAAgNg");
	this.shape_29.setTransform(571.35,357.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_30.setTransform(568.425,354.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHASIgCgCIABgBIABgBIABAAIADABIACABIABABQACAAACgDQACgCAAgDIgBgEIgBgCIgEgCIgCgBIgBAAIAAAAIADgBIADgDIABgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgEAAgCAEIgBAAIAEgGQACgCACAAQAEAAACADQACACAAADQAAADgFAFQADABACABQABADAAADQAAAFgCADQgEAFgFAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAg");
	this.shape_31.setTransform(565.8,354.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_32.setTransform(563.075,358.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVAXIABgBIABAAQABAAAAAAQABAAAAgBQABAAABAAQAAgBABAAIACgFIAKgdIABgFQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIAOAAQAGAAADACQACABACADQABADgCAEQgCAFgEAEQgFACgGAAIgDAAIgCgBIgFAOIgBAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIACAAIgBABgAAFgSIgGASIACAAIACAAQADAAAEgBIAEgHIABgGQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgEgBIgEABg");
	this.shape_33.setTransform(603.345,395.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAXIABgBIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIAMgiIgEAAIgFABIgDACIgEAFIgBAAIAFgLIAhAAIgEALIgBAAIABgEIgCgDIgEgBIgFAAIgMAiIgBAFQABABAAAAQAAAAAAAAQABABAAAAQABAAABAAIABAAIAAABg");
	this.shape_34.setTransform(600.35,395.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgXAXIABgBIABAAIACgBIADgCIABgEIALgdIABgFQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAIgCAAIABgCIAfAAIgEAKIgBAAIAAgFIgBgCIgEAAIgMAAIgFASIAIAAIAFgBQACgCACgEIACAAIgGAPIgCAAIABgEIgBgCIgDgBIgIAAIgGAPIgBAEIAAABIADAAIAHAAIAEAAIAEgCIAGgHIACAAIgIAMg");
	this.shape_35.setTransform(595.95,395.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AABAXIABgBIABAAQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAIACgFIALgeIgcAmIgBAAIgDgmIgLAeIAAAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAABIgPAAIABgBIABAAQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAQACgBABgEIAKgdIABgEIgBgCIgDAAIAAgCIAMAAIADAjIAagjIAMAAIgBACIgBAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAIgCAFIgLAdIAAAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAABg");
	this.shape_36.setTransform(591.375,395.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAXIAAgBIACAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIAMgiIgEAAIgFABIgDACIgDAFIgCAAIAFgLIAhAAIgEALIgBAAIAAgEIgBgDIgDgBIgGAAIgMAiIAAAFQAAABAAAAQAAAAABAAQAAABAAAAQABAAABAAIABAAIgBABg");
	this.shape_37.setTransform(587.15,395.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAXIAAgBIAGgCIADgGIAJgbIABgGQAAAAgBgBQAAAAAAAAQAAAAgBAAQgBAAgBAAIABgCIARAAIgBACIgFABIgDAGIgFAMIACAAIALABQADAAABADQACADgCAEQgCAFgEAEQgFAEgIAAgAAAABIgFATIAEABQADAAADgDQAEgDACgFQACgFgCgCQgDgDgEAAIgEABg");
	this.shape_38.setTransform(582.4125,395.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAWIgBgDIACgCIADgBIABABIACABQADAAADgFQAEgEAEgNIAEgJIABgHQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIABgCIAgAAIAAACIgGAAIgDAHIgKAbIgBAGQAAAAABAAQAAABAAAAQABAAABAAQABAAABABIgBABIgRAAIABgBIAEgCIADgGIAMgiIgNAAIgDANQgHATgFAFQgFAGgFAAIgDgBg");
	this.shape_39.setTransform(579.0917,395.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUARQgDgHADgKQAEgKAKgHQAGgGAIAAQAIAAAFAHQADAHgDAJQgEAKgJAHQgIAHgHAAQgJAAgEgHgAgCgQQgHAGgEAKQgDALACAGQACAEAGAAQAFAAAFgFQAFgFAEgKQAFgLgDgGQgBgEgHAAQgFAAgEAEg");
	this.shape_40.setTransform(574.65,395.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAXIABgBIABAAQABAAAAAAQABAAAAgBQABAAABAAQAAgBABAAIACgFIAKgdIABgFQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIARAAIAIABQAEABABADQACADgCAEQgBAEgDADIgHADQAEABACACQACADgCAEQgBAEgDADQgDADgEABQgEACgGAAgAgKATIAHABQAFAAAEgCQADgDACgEIAAgFQAAgDgDgBIgHgBIgCAAIgCAAgAADgTIgFASIACAAIACAAIAIgBIAEgDQACgCABgDQABgEgCgDQgCgCgFAAIgGAAg");
	this.shape_41.setTransform(569.9375,395.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("ABUgvIgGAoAgOg1IAGAoAi4gPIAUAkAj/AZIAaAdAhrgvIARArAEAAMIgRAqACrgcIgQAn");
	this.shape_42.setTransform(593.1,362.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AkjpqIAAgCQAAgNANgKQAPgKAVAAQAUAAAPAKQAOAKAAANIAAACQAAADgBADIABAAIAAAFQAAABgBgGQgEAMgHAFQgPAKgVAAQgWAAgQgKQgIgGgEgHIAAApQADAKAKAHQAFACAEADAozFqIC8vUIBUAAAjVohIAAAVQgLAGgQAAQgQAAgNgGIAAgVAkjpgIAAgEQAAgDAAgDAFDpqIAAgCQAAgNAOgKQAOgKAVAAQAUAAAPAKQAOAKAAANIAAACQAAADgBADQgEAMgHAFQgPAKgWAAQgWAAgPgKQgIgGgEgHIAAApQADAKALAHQADACAFADIAAAVQANAGAQAAQAQAAALgGIAAgVQgMAFgPAAQgQAAgNgFAFDpgIAAgEQAAgDAAgDAIapqIABAAIAAAGgAIYpqIABAAAIXplIABgFAIXplIACgFIABAAIgFAPgAIbpkIAAAEIgBgKAGkpkIABAAIAAAFIAAAvQgDAFgHAFQgFADgFACAGlpfQAAABgBgGAGlpqIBzAAAjBpfIAAAvQgDAFgHAFQgFADgFACQgMAFgPAAQgQAAgNgFAgtnyIAQgrIAOgnIAvgFIAvgEIAgAkIATAVIACACIAKAMIgIAXIgGAPIgRArIgTACQgJACgKAAQAAABAAAAIgCAAIgCAAQgBAAgBAAQgKABgKABIgdADIgjgoIgQgSgACOoGIADAjIgPAoIgQArIgUACQgJABgJAAQAAABgBAAIgCAAIgBAAQgCAAAAABQgKAAgLACIgdADIgigoIgcggIgDgkAlIgMQAbguBFgiQAOgHAPgGQBogsB2AAQA7AAAyALQAxAMAgAVQA7AogRA1ACHkHIgOArAAokWIAAAwAjgjcIAeAmAiXkAIAbAtAg4kNIAOAtAE0jGIgjA8ADKi7IAVgrAjBpqIIEAAAkijGIAjA8AmeDlIB0pIIKhAAIh0JIgAFbFqIAAABIABAKQAAABABACIAYEWAIbpgIAZEaQhYHLhYHMQgDAQgDAPIgGAeIgDAAAozFqIAZEkIOPAAAozFqIOOAAAIVpbIi6PF");
	this.shape_43.setTransform(592.725,383.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF99").s().p("AmKEkIB0pHIKhAAIh0JHgAEPAzQAEgMAAgLQAAgmgugfQgggVgxgMQgygLg7AAQh2AAhoArIgdAOQhFAhgbAuQAbguBFghIAdgOQBogrB2AAQA7AAAyALQAxAMAgAVQAuAfAAAmQAAALgEAMgAElhLIAjg7gAjrhLIgjg7gAEGhhIASgqgAjNhhIgbgdgAiuh2IgegngADeh7IAVgsgAiMiCIgUglgACziMIAQgogAhoiTIgbgtgAhCicIgRgrgACNidIAOgqgABlifIAHgogAgWigIgOgtgAAPilIgGgogAA8inIAAgvg");
	this.shape_44.setTransform(590.725,377.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AolHrIC8vVIBUAAIAAAHIAAAEIAAApQADAKAKAGIAJAFIgJgFQgKgGgDgKIAAgpQAEAHAIAFQAQALAWAAQAVAAAPgLQAHgEAEgMIABgHIIEAAIAAAHIAAAEIAAApQADAKALAGQADADAFACIAAAWQANAFAQAAQAQAAALgFIAAgVQAFgCAFgEQAHgEADgFIAAgvIAAgFIgBAAIABgHIBzAAIgBAGIgCAJIi6PGgAmQFlIKhAAIB0pHIqhAAgAgflxIADAkIAcAfIAiAoIAdgDIAVgCIACAAIABAAIACAAIABgBIASgCIAUgCIAQgrIAPgnIgDgkIADAkIgPAnIgQArIgUACIgSACIgBABIgCAAIgBAAIgCAAIgVACIgdADIgigoIgcgfIgDgkIAMANIAQASIAjAoIAdgDIAUgCIACAAIACAAIACAAIAAgBIATgCIATgCIARgrIAGgPIAIgYIgKgLIgCgCIgTgVIgggkIgvAEIgvAFIgOAnIgQArgAj/mLQANAFAQAAQAQAAALgFIAAgVQAFgCAFgEQAHgEADgFIAAgvIAAgFIgBAAIABAFIAAAvQgDAFgHAEQgFAEgFACQgMAFgPAAQgQAAgNgGgAFnmhQgFgCgDgDQgLgGgDgKIAAgpQAEAHAIAFQAPALAWAAQAWAAAPgLQAHgEAEgMIABAFIAAAvQgDAFgHAEQgFAEgFACQgMAFgPAAQgQAAgNgGgAizneg");
	this.shape_45.setTransform(591.325,370.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AF1KOIgYkWIgBgDIgBgKIAAgBIC6vGIAFgOIAAAAIABAKIAZEaIiwOXIgGAfIgGAegAoaKOIgZkkIOOAAIAAABIABAKIABADIAYEWgAFbFqgAgRnTIgQgSIgMgNIAQgrIAOgmIAvgGIAvgEIAgAkIATAVIACACIAKAMIgIAXIgGAPIgRAsIgTABIgTACIAAABIgCAAIgCAAIgCAAIgUACIgdAEgAFZoMIAAgVQANAFAQAAQAPABAMgGIAAAVQgLAGgQAAQgQAAgNgGgAkNoMIAAgVQANAFAQAAQAPABAMgGIAAAVQgLAGgQAAQgQAAgNgGgAFPpUQgIgFgEgHIAAgEIAAgGIAAgCQAAgNAOgKQAOgKAVAAQAUAAAPAKQAOAKAAANIAAACIgBAGQgEAMgHAEQgPALgWAAQgWAAgPgLgAkXpUQgIgFgEgHIAAgEIAAgGIAAgCQAAgNANgKQAPgKAVAAQAUAAAPAKQAOAKAAANIAAACIgBAGQgEAMgHAEQgPALgVAAQgWAAgQgLg");
	this.shape_46.setTransform(592.725,383.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Амперметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Амперметр
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape.setTransform(146.225,363.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_1.setTransform(143.725,363.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFATIAAgBIADgBIABgBIAAgEIAAgSIAAgGIgBgBIgBgBIgCABIAAgBIAHgDIABAAIAAAdIAAAEIABABIACABIAAABg");
	this.shape_2.setTransform(141.2,363.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_3.setTransform(141.475,356.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJATIAAgBIAGgCQADgBACgEQACgFABgEQgEADgCAAQgEAAgCgDQgCgCgBgFQABgFACgEQADgEAEAAQAEAAADAEQAEAEAAAHQgBAFgDAFQgCAGgFADQgDADgFAAgAgDgOQgCACAAAEQAAAGACACQAAABABAAQAAABABAAQAAAAABAAQAAABAAAAIADgBIADgCIAAgFIgBgFIgCgFIgDgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_4.setTransform(138.95,356.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_5.setTransform(135.025,353.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAQQgCgDAAgDIABgFIAFgFIgFgFIgBgEQAAgEACgCQADgDADAAQAEAAACADQADACAAADQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgCACgEADIAGAFIACAGQgBADgCADQgCADgFAAQgDAAgDgDgAgEAFIgBAFQABADABACQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAIgBgEIgFgHQgDACgBACgAgDgPQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABIABADIACACIADAEIADgEIABgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_6.setTransform(132.5,353.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_7.setTransform(128.275,352.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDATIAJggIgIAAIgEAAIgDAEIAAAAIADgJIARAAIAAABIgLAkg");
	this.shape_8.setTransform(125.75,352.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_9.setTransform(119.775,351.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEAQQgGgEAAgIQAAgEACgEQACgFAEgDQACgEADgBIAFgBIACAAIAAABQgDAAgCACIgFADIgCAFIgCAGQADgDADAAQADAAADADQACACAAAFQAAAFgCADQgDAFgFAAQgCAAgCgDgAgBgBIgDABIAAAGIAAAFIADAFIACABQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQABgCABgEQgBgFgBgDQgCgCgDAAIgBAAg");
	this.shape_10.setTransform(117.25,351.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_11.setTransform(111.275,350.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHARQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgBIABgBIABABIACABIAEABQABAAADgCQACgDAAgEQAAgCgCgEQgCgBgCgCIgIgBIAHgPIALAAIgCAFIgJAAIgDAFQAGABAEAFQADACAAAFIgBAFIgDAFIgDACIgFABIgEgBg");
	this.shape_12.setTransform(108.725,350.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_13.setTransform(102.575,352.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AADATIAAgKIgNAAIAAgEIAOgWIADAAIAAAWIAEAAIAAAEIgEAAIAAAKgAgIAFIALAAIAAgRg");
	this.shape_14.setTransform(100.025,352.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_15.setTransform(95.125,354.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHASIgCgCIABgBIABgBIACAAIACABIABABIACABQACAAACgDQACgCAAgDIgBgEIgBgCIgEgCIgCgBIgBAAIAAAAIADgBIADgDIABgEQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgEAAgCAEIgBAAIAEgGQACgCACAAQAEAAACADQACACAAADQAAADgFAFQADABACABQABADAAADQAAAFgCADQgEAFgFAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_16.setTransform(92.5,354.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_17.setTransform(89.575,357.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKATIAAgBQAJgJACgGQAEgEAAgEQAAgEgCgDQgCgCgCAAIgEACQgCABgBAEIgBAAQABgGACgCQADgCADAAQADAAAEACQACADAAAEIgBAFQgCAEgEAEIgGAJIAHAAIAEAAIABgBIACgBIABAAIgDAHg");
	this.shape_18.setTransform(87,357.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHANQgDgFAAgIQAAgFACgEQABgFADgCIAEgCQAEAAADAEQAEAGAAAIQAAAGgCAEQgCAFgCACQgDACgCAAQgEAAgDgGgAgCgOIgDAHIAAAIQAAAHACAFQABAEACAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgEIABgMIgBgLIgDgEIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_19.setTransform(83.625,359.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAXIABgBIABAAQABAAAAAAQABAAAAgBQABAAABAAQAAgBABAAIACgFIAKgdIABgFQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIAOAAQAGAAADACQACABACADQABADgCAEQgCAFgEAEQgFACgGAAIgDAAIgCgBIgFAOIgBAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIACAAIgBABgAAFgSIgGASIACAAIACAAQADAAAEgBIAEgHIABgGQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBIgEgBIgEABg");
	this.shape_20.setTransform(125.395,394.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAXIAAgBIACAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIAMgiIgEAAIgFABIgDACIgDAFIgBAAIAEgLIAhAAIgEALIgBAAIAAgEIgBgDIgDgBIgHAAIgLAiIAAAFQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIACAAIgBABg");
	this.shape_21.setTransform(122.4,394.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAXIABgBIABAAIACgBIADgCIACgEIAJgdIACgFQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIAfAAIgDAKIgBAAIAAgFIgBgCIgFAAIgLAAIgGASIAIAAIAGgBQACgCABgEIABAAIgFAPIgBAAIABgEIgCgCIgEgBIgIAAIgFAPIgBAEIAAABIADAAIAHAAIAEAAIAEgCIAGgHIABAAIgHAMg");
	this.shape_22.setTransform(118,394.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AABAXIABgBIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgFIALgeIgcAmIgBAAIgDgmIgLAeIAAAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAABIgPAAIABgBIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgBABgEIAKgdIABgEIgBgCIgDAAIAAgCIAMAAIADAjIAagjIAMAAIgBACIgBAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAIgCAFIgLAdIAAAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAABg");
	this.shape_23.setTransform(113.425,394.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAXIABgBIABAAQABAAAAAAQABAAAAgBQABAAABAAQAAgBABAAIACgFIAKgdIABgFQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAgCIAOAAQAGAAADACQACABACADQABADgCAEQgCAFgEAEQgFACgGAAIgDAAIgCgBIgFAOIgBAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIACAAIgBABgAAFgSIgGASIACAAIACAAQADAAAEgBIAEgHIABgGQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBIgEgBIgEABg");
	this.shape_24.setTransform(108.695,394.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXAXIABgBIABAAIACgBIADgCIACgEIAKgdIABgFQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgCAAIABgCIAfAAIgDAKIgCAAIAAgFIgBgCIgEAAIgLAAIgGASIAIAAIAFgBQADgCABgEIACAAIgGAPIgCAAIABgEIgBgCIgDgBIgIAAIgGAPIgBAEIAAABIADAAIAHAAIAEAAIAEgCIAGgHIACAAIgIAMg");
	this.shape_25.setTransform(105.1,394.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgDAXIAAgBIAFgCQACgBABgFIAMghIgSAAIgNAhIgBAGQABAAAAABQAAAAABAAQAAAAABAAQABABABAAIAAABIgSAAIAAgBIAFgCIAEgGIAKgbIABgGQgBgBAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgCIAqAAIAAACIgGABIgDAGIgJAbIgBAGIAEACIgBABg");
	this.shape_26.setTransform(101.1,394.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AABAXIABgBIABAAQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAIACgFIALgeIgcAmIgBAAIgDgmIgLAeIAAAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAABIgPAAIABgBIABAAQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAQACgBABgEIAKgdIABgEIgBgCIgDAAIAAgCIAMAAIADAjIAagjIAMAAIgBACIgBAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAIgCAFIgLAdIAAAFQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIAAABg");
	this.shape_27.setTransform(96.025,394.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAFAXIABgBIADgBIACgCIAAgEIAAgHIgPAAIgFAHIgCAEIAAACIADABIAAABIgNAAIAAgBIAEgBIAGgHIAagkIABAAIACAlIABAGIADABIAAABgAgCAGIANAAIAAgSg");
	this.shape_28.setTransform(90.225,394.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.2,1,1).p("AAWg1IgFAbABBgwIgJAZAA3gyIgHAZAAOg3IgFAdAAhg0IgHAbAhRgyIAGAdAgqg0IAAAbAgCg2IgDAbAh/glIAJAbAg3gxIADAaAgOg2IAAAbAgbg2IAAAcAhmguIAIAdAh4gnIAJAbAhBgxIADAcAhZguIAFAaAkJAhIASAUAicgbIANAaAi0gRIAPAYAikgXIAPAYAjUgCIAQAWAjbAAIASAWAjMgFIAMAVAjCgKIAOAWAi6gNIAOAWAiTgfIALAcAjvAOIAPAWAiHgkIALAcACpgaIgQAbADSgLIgPAbADZgHIgPAaADGgNIgRAZAC/gRIgQAaAEKAlIgaATADvAGIgTAWADhgCIgTAYAEIAfIgbAUAD6AOIgYAXAD1AIIgWAaAECAbIgZATAC6gWIgQAeACbggIgOAdACjgdIgQAcACMgjIgNAbABsgtIgNAdABkgvIgMAdAB9goIgOAbABagwIgKAcACFgmIgOAcABLgtIgKAY");
	this.shape_29.setTransform(114.3,361.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AAIg2IgHAoAhKgvIAGAoAkHAaIAbAdAjPgKIAVAkAiSghIAQApADUgOIgYAoAEIAaIghAdABYgvIgPAoACZgjIgSAp");
	this.shape_30.setTransform(114.375,360.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AFDpqQAAgBAAAAQAAgOAOgLQAOgJAVAAQAUAAAPAJQAOALAAAOQAAAAAAABQAAADgBADIABAAIAAAFIAAAwQgDAFgHAEQgFADgFACQgMAFgPAAQgQAAgNgFIAAAVQANAGAQAAQAQAAALgGIAAgVAFDpgIAAgEQAAgDAAgDAgtnyIAQgrIAPgmIAugFIAvgFIAgAkIATAWIACABIAKAMIgIAYIgGAOIgRArIgTACQgJACgJAAQgBABAAAAIgCAAIgCAAQgBAAAAABQgLAAgKABIgdADIgjgnIgQgTgACOoGIADAkIgPAnIgQAqIgTACQgKACgJABQAAAAgBAAIgBAAIgCAAQgCAAAAABQgKAAgLACIgdACIgignIgcggIgDgkAFDpgIAAAqQADAJALAHQAEACAEADAGkpkQgEAMgHAEQgPALgVAAQgWAAgQgLQgIgFgEgHAGlpfQAAABgBgGAkjpqQAAgBAAAAQAAgOAOgLQAOgJAVAAQAUAAAPAJQAPALAAAOQAAAAAAABQgBADgBADIACAAIAAAFIAAAwQgEAFgHAEQgFADgFACIAAAVQgLAGgPAAQgQAAgOgGIAAgVAkjpgIAAgEQAAgDAAgDAjCpkQgEAMgGAEQgQALgVAAQgWAAgQgLQgIgFgEgHIAAAqQADAJALAHQAEACAEADAjVohQgMAFgPAAQgQAAgNgFAjApfQgBABgBgGAA/kTIgOAqAgYkYIAAAwAhpkNIANAtAkijFIAjA7Aisj4IAaAtAjkjcIAeAmAlIgMQAbgtBFgjIABAAQANgHAPgGQBogsB2AAQA8AAAxALQAxAMAgAVQA7AogRA2ADhi3IAigqAByjgIAVgsACsjLIAdgxAEAiTIApgbAmeDlIB0pIIKhAAIh0JIgAjApqIIDAAAozFqIC8vUIBUAAAIZpqIABAAIgFAPIACgKgAIXplIABgFIABAAAIbpkIgBgGIABAAIAAAGIAZEeQhYHLhYHMQgDAPgDAQIgGAeIgDAAAGlpqIBzAAAFbFqIAAABIABAKQAAACABACIAYEVAozFqIAZEkIOPAAAozFqIOOAAIC6vF");
	this.shape_31.setTransform(113.275,382.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AF1KOIgYkVIgBgEIgBgKIAAgBIAAABIABAKIABAEIAYEVIuPAAIgZkkIOOAAIC6vFIAFgPIAAAAIABAGIAZEeIiwOXIgGAfIgGAegAgRnSIgQgTIgMgNIAQgrIAPgmIAugFIAvgFIAgAkIATAWIACABIAKAMIgIAYIgGAOIgRArIgTACIgSACIgBABIgCAAIgCAAIgBABIgVABIgdADgAFZoMIAAgVQANAFAQAAQAPAAAMgFIAAAVQgLAGgQAAQgQAAgNgGgAkNoMIAAgVQANAFAQAAQAPAAAMgFIAAAVQgLAGgPAAQgQAAgOgGgAFPpUQgIgFgEgHIAAgEIAAgGIAAgBQAAgOAOgLQAOgJAVAAQAUAAAPAJQAOALAAAOIAAABIgBAGQgEAMgHAEQgPALgVAAQgWAAgQgLgAkXpUQgIgFgEgHIAAgEIAAgGIAAgBQAAgOAOgLQAOgJAVAAQAUAAAPAJQAPALAAAOIAAABIgCAGQgEAMgGAEQgQALgVAAQgWAAgQgLg");
	this.shape_32.setTransform(113.275,382.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AolHrIC8vVIBUAAIAAAHIAAAEQAEAGAIAGQAQALAWAAQAVAAAQgLQAGgEAEgMQABAGABgBIAAAvQgEAFgHAEQgFAEgFACQAFgCAFgEQAHgEAEgFIAAgvIAAgFIgCAAIACgHIIDAAIAAAHIAAAEIAAApQADAJALAHIAIAFIAAAWQANAFAQAAQAQAAALgFIAAgVQAFgCAFgEQAHgEADgFIAAgvIAAgFIgBAAIABgHIBzAAIgBAGIgCAJIi6PGgAmQFlIKhAAIB0pHIqhAAgAgflxIADAkIAcAfIAiAoIAdgDIAVgCIACgBIACAAIABAAIABAAIATgCIATgCIAQgrIAPgnIgDgkIADAkIgPAnIgQArIgTACIgTACIgBAAIgBAAIgCAAIgCABIgVACIgdADIgigoIgcgfIgDgkIAMAMIAQATIAjAoIAdgDIAVgCIABgBIACAAIACAAIABAAIASgCIATgCIARgrIAGgPIAIgYIgKgLIgCgCIgTgWIgggkIgvAFIguAFIgPAnIgQArgAkVm2QADAJALAHIAIAFIAAAWQAOAFAQAAQAPAAALgFIAAgVQgMAFgPAAQgQAAgNgGIgIgFQgLgHgDgJIAAgpIAAApgAFnmhIgIgFQgLgHgDgJIAAgpQAEAGAIAGQAQALAWAAQAVAAAPgLQAHgEAEgMIABAFIAAAvQgDAFgHAEQgFAEgFACQgMAFgPAAQgQAAgNgGg");
	this.shape_33.setTransform(111.875,369.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF99").s().p("AmKEkIB0pHIKhAAIh0JHgAEPAzQAEgMAAgLQAAgngugeQgggVgxgMQgxgLg8AAQh2AAhoArIgcAOIgBAAQhFAhgbAuQAbguBFghIABAAIAcgOQBogrB2AAQA8AAAxALQAxAMAgAVQAuAeAAAnQAAALgEAMgAjrhLIgjg7gAEUhUIApgagAEOhYIAbgSgAjYhaIgTgVgAELhcIAbgVgAEHhhIAZgTgAEGhlIAhgdgAjNhlIgbgdgAEAhqIAZgXgAjBhsIgQgVgAD9huIAWgZgAD6h0IATgWgAiyh2IgegngAD1h4IAigqgADsh5IATgagAirh5IgRgWgAimh8IgPgWgADoh9IAPgagADhh/IAQgcgAihh/IgNgWgAibiCIgVglgADbiCIAYgpgADTiDIARgbgAiWiDIgNgXgADOiHIAPgbgAiOiHIgOgXgADIiIIAQgegAiHiJIgPgZgADAiMIAdgwgAh+iMIgagsgAC3iOIAQgdgAh3iOIgPgagACxiRIAQgcgAhxiRIgNgagACsiUIANgcgAhjiUIgQgqgAhqiUIgLgbgACmiWIASgqgACdiYIAOgbgAheiZIgLgbgACViaIAOgdgAhYibIgJgbgAhRidIgJgbgACNieIAOgbgACGihIAVgrgAB+ihIAMgdgAhIihIgNgtgAg/iiIgJgdgAB2iiIAMgegABoijIAPgpgAglijIgGgpgABuikIAKgdgAg1ilIgGgZgABfilIAKgYgAgfilIgEgdgAgtimIgGgdgABWinIAJgZgAgWioIgDgZgAgEipIAAgvgABOipIAHgagABFiqIAOgqgAA4iqIAHgagAgMiqIAAgagAAviqIAFgcgAAnirIAFgcgAAgirIAHgogAADirIAAgbgAAPirIAAgbgAAYisIADgag");
	this.shape_34.setTransform(111.275,376.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_АмпСтрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// АмпСтрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah7jOID3Gd");
	this.shape.setTransform(96.2,384.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhvjVIDfGr");
	this.shape_1.setTransform(97.5,384.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhrjXIDXGv");
	this.shape_2.setTransform(97.75,383.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhijbIDFG3");
	this.shape_3.setTransform(98.75,383.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhejdIC9G7");
	this.shape_4.setTransform(99.1,383.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhVjgICrHB");
	this.shape_5.setTransform(100.025,382.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhOjjICdHH");
	this.shape_6.setTransform(100.675,382.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhHjlICPHL");
	this.shape_7.setTransform(101.325,382.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhBjnICDHP");
	this.shape_8.setTransform(101.95,382.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ag6jpIB1HT");
	this.shape_9.setTransform(102.675,382.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ag0jqIBpHV");
	this.shape_10.setTransform(103.275,382.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(0.6,1,1).p("AgxjrIBjHX");
	this.shape_11.setTransform(103.7,381.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},664).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},11).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},14).to({state:[{t:this.shape_6}]},12).to({state:[{t:this.shape_7}]},13).to({state:[{t:this.shape_8}]},16).to({state:[{t:this.shape_9}]},14).to({state:[{t:this.shape_10}]},19).to({state:[{t:this.shape_11}]},16).wait(391));

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
	this.instance.setTransform(346.8,117.85,0.6268,0.6866,0,0,0,54.5,123);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({regX:14,regY:22.5,scaleX:0.6633,scaleY:0.4864,y:213.05},0).wait(90).to({x:696.1,y:191.35},21).wait(244).to({x:690.1,y:173},75).to({_off:true},670).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Реостат = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Реостат
	this.instance = new lib.Реостат();
	this.instance.parent = this;
	this.instance.setTransform(647.35,174.15,0.6268,0.6866,0,0,0,147.6,168);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ЛАТР = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ЛАТР
	this.instance = new lib.латрРучка();
	this.instance.parent = this;
	this.instance.setTransform(134.3,51.85,0.6268,0.6866,0,0,0,21.2,13.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAMQgFAAgEgDQgEgCgCgDIgBgEQAAgEAEgDQAFgFAIABQAFAAAEACIAGAFQABADAAACQAAAFgGADQgEADgFAAIgCAAgAgJgFIgEADIgCACQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQACACAEABIAIAAQAGABAFgBQADgCAAgDQABAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgEgDIgLgCIgJABg");
	this.shape.setTransform(119.5063,52.6511);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAMQgFAAgEgDQgEgCgCgDIgBgEQAAgEAEgDQAFgFAIABQAFAAAEACIAGAFQABADAAACQAAAFgGADQgEADgFAAIgCAAgAgJgFIgEADIgCACQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQACACAEABIAIAAQAGABAFgBQADgCAAgDIAAgCIgEgDIgLgCIgJABg");
	this.shape_1.setTransform(119.4063,55.4011);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAMQgHgKgFgCQgEgFgDAAQgEAAgCABQgCACAAADIABAEQABADADABIAAABQgEgBgCgDQgDgCAAgEQAAgEADgDQADgDADAAIAFACQADABAEAGIAIAIIAAgJIAAgEIAAgCIgCgCIAAgCIAGAEIgBAUg");
	this.shape_2.setTransform(119.25,58.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAMQgFgCgCgDQgCgEgBgDQABgGAGgEQAGgEAIAAQAGAAAFADQAGACACAEQACADAAACQAAAFgEAEQgHAGgKAAQgGAAgFgDgAgOgFQgFACAAADIACAEQABACADABQAGABAIAAQAIAAAEgCQAEgBACgCIAAgDQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFgBIgKgBQgJAAgFACg");
	this.shape_3.setTransform(151.5,55.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF99").ss(2,1,1).p("Aiah/QgXADgTAEQgQAFgOAGQgoATgVAqQgUAmAAAtQAAAMABAKQgCACgDACQgLAIgDADQgHAGgEAHQgEAJgCARAicAAQgUAAgUAEQgUAEgWAKQgdANgnAaQADAQAGAOQAKAYAVALQAAAAABABQAAABACAAIAAABQABABABABQAAAAABABQABAAAAABQABgBACACIACADAj8CGQADABAAACQAAABAAACABhiFQAbgGAaABQAJAAAKACQAnAGAWAXQASATAGAdQAEAUABAjQABAbACAuQApANAoAQABqANQACAOARAIQAJAEAQADQADAAADABQA2AKA0AQQABAYAAAd");
	this.shape_4.setTransform(134.75,164.3433);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ApemmQgHgYAAgZQAAgZAHgYQAchfCRhJQBTgpB5gQQBfgNCSAAQCNAABYANQBtAPBUAqQCvBYAFB7IAAAKQAAAMgCAMIAAEPIABA3IAAAtIgBA3IABEHIABAbIAAAbIAAAxAJkm7QgSBuigBPQi0Baj+AAQj9AAi0haQiRhJgchfIAAObQAcBgCRBIQBbAuBtAWQBsAWB9AAQD+AAC0haQCxhYADh8IAAg/IAAgQQAAgBAAgBQAAgNAAgOAheotQAAgBAAAAQAAgCAAgBAhbG1QABAAABAAQATAAANAMQABABAAABQAMAKACAPQAAABAAABQAAAGgDAGQgCAHgFAGQgCACgDACQgMALgRABQgBAAgCAAQgTAAgOgMQgBgBAAAAQgHgGgDgHQgCgHAAgIQAAAAAAgCQAAgJAFgJQADgFAFgEQABAAABgBQADgDAEgCQADgCADAAIAIAQQAEgCAEAAQABAAABAAQAFAAAEACIAGgOAiJJYQAAgKAGgIQADgFAEgEQABgBABgBQAEgDAEgCQACgBAEgBIAHAQQAEgCAFAAQABAAABAAQAEAAAEABIAGgMAiGJoQgDgHAAgHQAAgBAAgBAhXKDQgCAAgCAAQgTAAgOgNQAAAAgBgBQgGgGgDgHIAUgGQgCgEAAgFQAAgBAAAAQABgEABgEQACgEAEgDQADgDAEgCAi0GWIFaAAIAAA0IAAC2IAAAjIlaAAIAAhKIAAh8gABAG5QAAAAABAAQAUAAANAMQABAAAAAAQAMALABAPQAAABAAABQAAAGgCAGQgCAHgFAGQgDACgCACQgMAMgRAAQgBAAgDAAQgSAAgOgMQAAAAgBgBQgHgGgCgHQgEgHAAgIQAAAAAAgBQABgKAFgIQADgFAFgEQABgBABgBQADgDAEgCQADgBADgCIAIARQADgCAFAAABcHfQAAABAAABQAAADgCADQgBAFgCADIAQALABaHnIAUAGABaHYQACADAAAEIAUAAABaHYIAPgEABFIxQABAAACAAQASAAAOAMQAAAAABABQAMALABAOQAAABAAACQAAACAAABQgBAEgBAEQgDAHgFAGQgBADgDABQgMAMgSABQgBAAgBAAQgUAAgOgNQAAAAAAgBQgHgGgDgHIAUgGQgBgEAAgFQAAgBAAAAQAAgEABgEQACgEADgDIgNgOQAEgDAEgCQACgBADgBIAJAQQADgCAFAAQABAAABAAQAFAAADABQAFACAFAEIAPgLABaJJQADADACAEIAQgFABiJXQAAABAAABQAAAEgBACQgCAFgDADQgBABgBABQgCACgEACQgEACgGABQgBAAgBAAQgFAAgFgCQgEgBgDgDQgBAAgBgBQgDgEgCgDABiJXIAUAAABhJfIATAGABfJQQACADABAEABcJnIAQALABAG5IAAARQABAAACAAQAEAAAEACQAFABAEADQAEAEACAEABLHMIAGgNAAwHQQAEgDAEgBAAxHyQgBgBAAAAQgEgEgBgDQgCgFAAgEQAAgBAAAAQAAgEACgEQABgEAEgEIgNgNABXHvQgCABgBABQgCACgDACQgFACgFAAIAAATAAwG7QAHgCAJAAAA4H2IgHAOABFH3QgBAAgBAAQgGAAgFgBQgDgBgEgDIgRALAAXHwIAUgGAAZHOIASAKAApHgIgWAAAg/HcQAAABAAABQAAADgBADIATAGAg/HcIAVAAAhQHJQAFABAEADQAEAEACADQABAEABAEAhwHUQACgDADgEQAEgDAEgBAhqHvQAAAAgBgBQgEgDgBgFQgCgEAAgEQAAgBAAgBQAAgEACgEAhjHyQgEgBgDgCIgRALAhMHyQgFACgFABQgBAAgCAAQgFAAgFgDIgHAPAhFHsQgBABgBABQgCACgDACIAHAMAhdIxQABAAABAAQATAAAOAMQAAAAABABQAMALAAAOQAAABAAACQAAAFgBAGQgDAHgFAGQgCADgCABQgNAMgQABAhAHkQgCAEgDAEIARALAhWH1IAAASAhBHUIAPgEAhHHNIAPgKAhBJXQAAABAAABQAAAEgBACQgBAFgDADQgBABgBABQgDACgDACQgEACgGABQgBAAgBAAQgGAAgEgCQgEgBgDgDQgBAAAAgBQgEgEgCgDAhBJXIAUAAAhSJDQAFACAFAEQADADACAEQACADAAAEAhYJwIABATAhOJtIAIANAhGJnIAQALAhCJfIAUAGAhDJQIAQgFAhIJJIAPgLAhkJuIgHAOAAfJGQADgFAEgEQABgBABgBAA1JJQAEgDAFgCAAcJoQgDgHAAgHQAAgBAAgBQAAgKAGgIIARAKAA+JuIgHAOAA3JqIgRALAAvJYIgWAAABKJwIAAATABFIxIABARAA1I0QAJgDAHAAAhdIxIABARAhsI0QAHgDAIAAABUHQIAPgLABPH1IAIANABQJDIAHgMABUJtIAIANAhbG1IAAASAhrHNIgNgNAhrG5QAIgDAIgBAiCHKIASAKAhyHcIgVAAAiFHtIAVgHAhsJJIgOgOAhrJqIgSALAiDJGIARAKAh0JYIgVAA");
	this.shape_5.setTransform(133.15,104.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AjsJDIgBgCQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIABACQhtgWhcgtQiQhJgdhfIAAucQAdBgCQBIQC1BaD9AAQD+AAC0haQCfhPAShtIAAEOQgLACgJAJQgIAIgCAJIAAAEQAAAJAEAGIADAEQAEACAEACQAGACAIgCIACAAIAAAuQgIADgFAFQgIAJgCAJIgBAEQAAAJAEAFIAEAEQADADAFABIAHACIACEIQgIADgFAFQgIAIgCAJIgBAFQAAAHAEAGIAEAFIAIADQADACAFAAIAAAyQgHADgGAFQgIAIgCAJIgBAEQAAAJAEAGIAEADIAIAFIAIABIABgIIAAA+QgEB9iwBYQi0BZj+ABQh9AAhsgXgAjzI6IACACIgCgCIgCgBIgBgBIAAABIgBgBIgCgBIgBgCIAAgBIgCgBIgBgBQgVgLgLgYQgFgOgDgQQAngaAdgNQAVgLAVgEQgVAEgVALQgdANgnAaQADAQAFAOQALAYAVALIABABIACABIAAABIABACIACABIABABIAAgBIABABIACABgAETIyIgBg2QApANAoAQQgogQgpgNIABA2gAkqH0IgOAMQgIAGgDAHQgFAJgBARQABgRAFgJQADgHAIgGIAOgMIAFgDIgFADgAi3E/IAAB8IAABKIFaAAIAAgjIAAi2IAAg0IlaAAgACpHiQA1ALA0APQg0gPg1gLIgGAAIAGAAgAC2EuQAmAHAXAXQARASAHAeQAEAUABAjIACBJIgChJQgBgjgEgUQgHgegRgSQgXgXgmgHIgTgCIATACgAknHbQABAMABAKQgBgKgBgMQABguATgmQAWgqAogUQANgFARgFQgRAFgNAFQgoAUgWAqQgTAmgBAuIAAAAgAFMFnQgHAIgCAIIgBAFIABAIIABADIAFAHQAJAHANgCIACgBIABAAQALgCAIgJIAGgFQADgHABgHIAAgBQACgMgJgGQgIgHgKABIgEABIgBAAQgMACgJAJgAG+E9QgHAJgCAIIgBAEIAAAEQABAIAHAGQAIAHANgBIABAAIADgBQAFgCAGgDIAIgGIAAAAIAGgGQADgHABgGIAAgCQABgLgJgIQgHgFgLABIgCABIgBAAIgBAAIgBAAQgMACgJAIgAIwD/IgCABIgCAAQgMACgKAJQgHAIgCAIIgBAEIAAABQAAAMAIAGQAGAFAIAAIABAAIAGAAIAEgBQAKgCAJgIIAFgHQAFgGAAgGIAAgCIAAgFIAAgBQAAgHgIgFIgCgDQgGgDgIAAIgCAAgAFmD0IgEABIgBAAQgMACgJAIQgHAIgCAJIgBAEIABAJIABADQACADADADQAJAIANgCIACAAIABgBQALgCAIgJIAGgGQADgGABgHIAAgCQACgLgJgHQgHgFgKAAIgBAAgAG+DXQgHAHgCAJIgBAFIAAACQABAKAHAFQAIAHANgCIABAAIADgBQAFAAAGgEIAIgHIAAAAIAGgFQADgGABgIIAAgBQABgMgJgGQgHgGgLABIgCAAIgBAAIgBAAIgBAAQgMADgJAJgAIWCkQgHAHgCAKIgBACIAAABQAAAMAIAHQAGAEAIABIABAAIAGAAIAEgBQAKgCAJgJIAFgGQAFgGAAgHIAAgCIAAgEIAAAAQAAgJgIgFIgCgCQgHgDgJABIgCAAIgCAAQgMACgKAJgADbgkQgHAIgDAJIAAAEQAAAHACAFQACADAEACQAIAHANgBIAEgCQAKgCAJgIIAFgFQADgGACgFIAAgDIAAgBQABgMgJgGQgHgHgLACIgDAAIgBAAQgNACgJAJgAFLg9QgIAHgCAJIgBAEQAAAEACAFIABACQABAFAEACQAIAIAOgCIACAAIABgBQALgCAIgJIAGgGQADgGABgIIAAgBQABgMgJgGQgHgGgLABIgDABIgBAAQgNABgIAKgAl2hEQgIAGAAAMIAAABQABAHAFAHIAGAFQAHAJAMADIAAAAIACABQAOABAIgHQAEgCACgFIABgDIABgIIgBgEQgCgJgIgIQgJgJgLgBIgCgBIgDgBIgCAAQgKAAgHAGgAG9hnQgHAIgDAIIAAAFIAAADQAAAKAIAFQAIAGAMgBIABAAIAEgBQAGgBAEgDIAJgGIAAgBIAFgGQAEgGABgHIAAgBQABgMgJgHQgHgFgLABIgCAAIgBAAIgBAAIgBAAQgMADgJAIgAnohuQgJAHABALIAAACQABAHAEAGIAFAGIABAAIAIAHQAFADAGABIADAAIAAABQANABAJgGQAGgGABgJIAAgEIgBgEQgBgJgJgHQgHgJgNgCIgBAAIgBAAIAAAAIgCAAIgEgBQgJAAgGAFgABdh5QgEAFgDAGQgCAEAAAFQABALAIAJQAKAIANAAQANAAAIgIQAJgIAAgMQAAgFgBgEQgDgGgFgFIgCgBQgIgGgLgBQgNABgKAHgADRiFQgIAHgCAKIAAADQgBAIADAFQACADAEACQAIAIANgCIADgBQALgCAIgJIAGgGQAEgFABgFIAAgDIAAgCQABgLgJgIQgHgFgLACIgDAAIgCAAQgMABgJAKgAIViZQgHAHgCAJIgBADIAAACQgBALAJAHQAFAFAJAAIAHgBIAEAAQAKgDAJgIIAFgGQAEgGABgIIAAAAIAAgGIAAAAQAAgHgHgGIgEgCQgGgDgJAAIgDAAIgCAAQgLACgKAKgAo9iiIgDACQgHAFgBAIIAAAFIAAABQABAIAEAGIAFAFQAJAJAKADIAEAAIAHAAIAAAAQAIAAAHgEQAHgIAAgKIAAgCIAAgDQgDgJgHgHQgJgKgNgCIgBAAIgCAAIgDAAQgHAAgGADgAl2iiQgIAHAAAMIAAACQABAGAFAGIAGAHQAHAIAMACIAAABIACAAQAOABAIgGQAEgDACgEIABgDIABgIIgBgEQgCgJgIgJQgJgIgLgCIgCgBIgDAAIgDAAQgJAAgHAFgAFgiqQgNACgIAIQgIAIgCAJIgBAEQAAAFACADIABADQABAEAEADQAIAHAOgBIACgBIABAAQALgCAIgJIAGgGQADgHABgGIAAgCQABgLgJgIQgHgFgLABIgDAAIgBABgAnojLQgJAGABAMIAAACQABAHAEAGIAFAFIABABIAIAGQAFADAGACIADABIAAAAQANABAJgHQAGgFABgJIAAgEIgBgEQgBgJgJgHQgHgJgNgCIgBAAIgBAAIAAAAIgCgBIgEAAQgJAAgGAFgAHHjTQgLACgJAIQgIAIgCAJIgBAFIAAADQABAIAIAHQAHAGANgBIABgBIADAAQAGgBAGgDIAHgGIABgBIAFgHQAEgFABgHIAAgBQAAgMgIgHQgHgFgLAAIgCAAIgBAAIgCAAgApgiwIAHgBIABAAIAIgEIAEgEQAEgGAAgIIAAgEQgDgKgHgIIgHgEIgGgEgAo9kAIgDACQgHAGgBAIIAAAEIAAADQABAGAEAGIAFAHQAJAIAKADIAEAAIAHAAIAAAAQAIAAAHgFQAHgGAAgMIAAgCIAAgCQgDgJgHgJQgJgHgNgDIgBAAIgCAAIgDgBQgHAAgGADgAIVkLQgMACgIAIQgIAIgCAJIAAADIgBABQAAANAHAGQAHAFAIAAIAIAAIACAAQAMgDAHgIIAGgHQAFgGAAgHIAAgCIAAgEIAAgBQgBgHgGgGIgEgCQgHgEgIACIgDAAIgCAAgApgkMIAIgCQAFgCADgDIAEgDQAEgGAAgJIAAgEQgDgJgHgHQgGgGgHgDgABEHSQgFAAgFgCQgDgBgDgDIgCAAIgFgIQgCgEAAgFIAAgBIACgHIAFgIQADgDAFgBQAEgCAEgBIACAAIAJACQAFABAEAEIAGAHIACAIIAAABIgBAHQgBAEgDAEIgDACIgFADQgEACgGABIgDAAgAheHSQgFAAgFgCQgDgBgEgDIgBAAQgEgFgBgDQgCgEAAgFIAAgBIACgHQACgEADgEQAEgDAEgBQAEgCAEgBIACAAIAJACQAFABAEAEIAGAHIACAIIAAABIgBAHQgCAEgCAEIgDACIgFADQgEACgGABIgDAAgAA/FaQgFAAgFgBIgHgEIgBgCQgEgDgCgEQgCgFABgEIAAgBQgBgEACgDQACgFAEgDQADgDAFgCQADgBAFgBIACAAQAEAAAFACQAEABAFAEQADADACAFQACACAAAEIAAACIgBAGQgBAFgDADIgCACIgGAEIgKADIgCAAgAhcFXQgFAAgFgCIgHgEIgBgBQgEgDgBgFQgCgEAAgEIAAgCIACgHQACgEADgEQADgCAEgCIAJgCIACAAQAFAAAEACQAFABAEADQADAEACAEIACAHIAAACIgBAHQgBAEgDADIgCACIgFAEQgFACgFABIgDAAg");
	this.shape_6.setTransform(133.5,120.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiJA9Qg5gdAAgmQAAgnA5gbQAMgGANgEIAAACIAAABIgZBPQAGAFAJAGIAJAGQAMAHAWAEIAHABIAhAFQATACAVABIAMAAQAfgBAWgFIATgGQAngNAAgMIgZhPIAAgBIAAgHQAUAGASAJQA5AbABAnQgBAmg5AdQg5AbhQAAQhQAAg5gbg");
	this.shape_7.setTransform(134.95,56.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ai5KxIAAhKIACAAQARgEAQAAIABAAIAAAAIACAAIACAAIgCAAIgCAAIAAAAIgBAAQgQAAgRAEIgCAAIAAh8QATgFAXgCQgXACgTAFIAAhHIFaAAIAAA0IgEAAIgDAAIAAAAIgBAAQgVAAgWAFIgCABIACgBQAWgFAVAAIABAAIAAAAIADAAIAEAAIAAC2QgQgEgJgEQgRgIgDgOQADAOARAIQAJAEAQAEIAAAjgABFKRQARgBANgMIAEgEQAFgGADgHIgUgGIABgGIAAgCIgCgHIAQgFIgQAFIgFgHQgFgEgFgCIAGgMIgGAMIgIgBIgCAAIgBgRIABARQgFAAgEACIgIgQIAIAQQgEACgEADIgNgOIAIgFIAFgCQAIgDAIAAQgIAAgIADIgFACIgIAFIANAOIgFAHIgRgKIAHgJIACgCIgCACIgHAJQgGAIAAAKIAAACQAAAHADAHQgDgHAAgHIAAgCIAVAAIAAABQAAAFACAEIgUAGQADAHAGAGQgGgGgDgHIAUgGIAFAHIACABIgSALIASgLQADADAEABIgHAOIAHgOQAEACAGAAIACAAQAGgBAEgCIAGgEIACgCIAQALIgEAEQgNAMgRABIAAgTIAAATIgDAAQgTAAgOgNIgBgBIABABQAOANATAAIADAAIAAAAgAhcKRQAQgBANgMIAEgEIgQgLIAQALIgEAEQgNAMgQABIgBgTQAGgBAEgCIAGgEIACgCQADgDABgFIABgGIAAgCIAUAAIAAADIgBALIABgLIAAgDQAAgOgMgLIgPALQgFgEgFgCIAGgMIgGAMIgIgBIgCAAIgBgRIACAAQATAAAOAMIABABIgBgBQgOgMgTAAIgCAAQgIAAgHADIAHAQQgEACgDADQgEADgCAEIgRgKIARAKIgCAIIAAABQAAAFACAEIgUAGQADAHAGAGIABABQAOANATAAIAEAAgABXKIIgIgNgAhLKIIgIgNgAg7KAQAFgGADgHIgUgGIAUAGQgDAHgFAGgAiOJoQAAAHADAHQgDgHAAgHIAAgCIAVAAIgVAAQAAgKAGgIIAHgJIACgCIgCACIgHAJQgGAIAAAKIAAACIAAAAgABwJoIAAADIgBAIIABgIIAAgDIAAgDIAAADgABwJlQgBgOgLgLIgBgBQgOgMgTAAIgCAAIACAAQATAAAOAMIABABQALALABAOIgUAAIAUAAIAAAAgABVJXIAPgLgAhxJXIgOgOIAIgFIAGgCIgGACIgIAFgABAIYQARAAAMgMIAFgEQAFgGACgHIgUgGIAUAGQgCAHgFAGIgRgLQADgDABgFIABgGIAAgCQAAgEgBgDIAPgEIgPAEQgCgEgEgEIAPgKIgPAKQgEgDgFgBIAGgNIgGANQgEgCgFAAIgCAAIAAgRIAAARQgFAAgDACIgIgQIgGACIgHAFIgCACQgFAEgDAFIASAKQgCAEAAAEIgWAAQABgKAFgIQgFAIgBAKIAWAAIAAABQAAAEACAFQABAEAEADIABABIAHAEIgHAOIAHgOQAFACAFAAIADAAIAKgDIAFgEIACgCIARALIgFAEQgMAMgRAAIAAgSIAAASgAAcIMQANAMATAAIAEAAIgEAAQgTAAgNgMIgBgBIARgLIgRALQgHgGgDgHIAVgGIgVAGQgDgHAAgIIAAgBIAAABQAAAIADAHQADAHAHAGIABABgAhbIVQARgBAMgLIAFgEIgRgLIARALIgFAEQgMALgRABIAAgSQAFgBAFgCIAFgEIACgCQADgDACgFIATAGQACgGAAgFIAAgDQgBgPgMgKIgPAKQgEgDgFgBIAGgNIgGANQgEgCgFAAIgCAAIgIACIgIgQQgDAAgDACQgEACgDADIANANIgNgNQADgDAEgCQADgCADAAIAIAQQgEABgEADQgDAEgCAEIgCAHIgVAAIAVAAIAAACQAAAEACAEIgVAHQgCgHAAgHIAAgDQAAgJAFgIQgFAIAAAJIAAADQAAAHACAHIAVgHQABAFAEADIABABIgRALQgHgGgDgHQADAHAHAGIABABQAOAMATAAIADAAgABRIQIgHgNgAhKIMIgHgMgAg5IFQAFgGACgHQgCAHgFAGgABrHvQAAAGgCAGQACgGAAgGIAAgCQgBgPgMgKQAMAKABAPIgVAAIAVAAIAAACgAiHHZIASAKIgSgKQADgFAFgFIACgBIgCABQgFAFgDAFIAAAAgAhgHVIAAgSIACAAQATAAANAMIABACIgBgCQgNgMgTAAIgCAAQgIABgIADQAIgDAIgBgAA8HHQAUAAANAMIABABIgBgBQgNgMgUAAIgBAAQgJAAgHADQAHgDAJAAIABAAgAhcKRIAAAAgAhgKRQgTAAgOgNIgBgBIASgLQADADAEABQAEACAGAAIACAAIABATIgEAAgAhwKKIAHgOgAiCKDIAAAAgAiCKDQgGgGgDgHIAUgGQACADAEAEIABABIgSALIAAAAgABnKAIgQgLQADgDABgFIAUAGQgDAHgFAGgAg7KAgAhdJ+gAiLJ2IAAAAgABXJ1gABbJtgAAUJmQAAgKAGgIIARAKIgCAIgABwJlgAhGJlIgCgHIAQgFIgQAFIgFgHIAPgLQAMALAAAOgAAaJUgAhxJCQAHgDAIAAIABARQgFAAgEACgAh/JJgAFHI6IgFgHIgBgDIgBgIIABgFQACgJAHgIQAJgIAMgCIACAAIADgBQALgBAHAGQAJAHgBALIAAACQgBAHgEAGIgGAGQgIAJgLACIAAAAIgDABIgFAAQgKAAgHgFgAhiI/IAAAAgAG6IQQgHgGAAgJIAAgDIAAgEQACgJAIgIQAIgIAMgDIABAAIABAAIABAAIACAAQALgBAIAFQAJAHgBAMIAAACQgBAGgEAHIgFAFIgBABIgIAGQgFADgGACIgDAAIgBAAIgEABQgKAAgHgGgAhbIVIAAAAgAheIVQgTAAgOgMIgBgBIARgLIAHAEQAFACAFAAIADAAIAAASIgDAAgAhvIPIAHgOgAiAIIIAAAAgAg5IFgAhbIDgABpH7gAhFHyIABgGIAAgCIgCgHIAPgFIgPAFQgCgEgEgEIAPgKQAMAKABAPIgUAAIAUAAIAAADQAAAFgCAGgAh1H0IAAAAgABrHtgAgwHqgAgwHqIAAAAgAAUHcQADgFAFgEIACgCIANANQgEAEgBAEgAIhHjIgBAAQgIgBgGgEQgIgHABgLIAAgCIAAgDQACgIAIgIQAJgJAMgCIACAAIACgBQAJAAAHADIADACQAHAFABAIIAAABIAAAEIAAACQgBAHgEAGIgGAGQgIAJgLACIgDABIgEAAIgDAAgAAeHRIAHgFIAGgCIAIAQQgFABgDADgAFHHSQgDgDgCgEIgBgCIgBgJIABgEQACgJAHgIQAJgJAMgBIACgBIADAAQALgBAHAGQAJAHgBALIAAACQgBAHgEAGIgGAGQgIAJgLACIAAAAIgDAAIgGABQgJAAgHgGgAhoHXgAh9HOgAG6GpQgHgGAAgJIAAgDIAAgEQACgJAIgIQAIgIAMgDIABAAIABAAIABAAIACAAQALgBAIAFQAJAHgBAMIAAABQgBAHgEAHIgFAFIgBAAIgIAHQgFADgGABIgDABIgBAAIgDAAQgLAAgHgFgAJYGfIgIgEIgDgEQgFgFABgJIAAgEQADgJAHgIQAGgGAHgDIABAAIAAAbIAAADIAAAPIgBAJIgIgCgAIhF8IgBAAQgIgBgGgEQgIgHABgMIAAgBIAAgDQACgJAIgIQAJgIAMgCIACAAIACgBQAJAAAHADIADACQAHAFABAIIAAABIAAAEIAAACQgBAHgEAGIgGAGQgIAJgLACIgDABIgEAAIgDAAgAJYE4IgIgEIgDgEQgFgGABgIIAAgEQADgJAHgIQAGgGAHgDIAAAbIAAgbIABAAIgBAbIAAAbQgEAAgEgCgADXCuQgDgCgCgEQgDgFAAgHIABgEQACgJAIgJQAIgIANgCIABAAIADAAQALgCAIAGQAIAHgBAMIAAABIAAADQgBAFgEAFIgFAGQgIAJgLACIgDABIgEAAQgLAAgHgFgAFGCUQgEgDgBgEIgBgDQgCgEABgEIAAgEQACgJAIgIQAJgJAMgCIACAAIACAAQALgBAIAGQAJAGgBAMIAAABQgBAHgEAHIgGAGQgIAIgLADIgBAAIgCAAIgGABQgJAAgHgGgAleCZIgDAAIAAAAQgLgDgIgJIgGgGQgEgGgBgHIAAgBQgBgMAJgGQAHgGALAAIADABIACAAQAMACAJAJQAHAIACAJIABAEIgBAIIgBADQgCAEgDADQgHAGgKAAIgFgBgAG5BrQgHgGgBgJIAAgDIABgFQACgIAIgIQAIgJAMgCIABAAIABAAIABAAIACAAQALgBAIAFQAIAHgBAMIAAABQgBAHgEAGIgFAGIAAAAIgIAHQgFADgGABIgEABIAAAAIgEAAQgKAAgHgFgAnQBwIgBgBIgDAAQgGgBgFgDIgIgHIgBgBIgFgFQgEgHgBgGIAAgCQgBgLAJgHQAIgGALABIACABIAAAAIACAAIABAAQAMACAIAJQAIAHACAJIAAAEIAAAEQAAAJgHAGQgHAFgKAAIgEAAgABcBaQgJgJAAgLQAAgFACgEQACgGAFgFQAJgIANAAQALAAAIAHIACABQAFAFADAGQABAEAAAFQAAAMgJAIQgIAIgNAAQgNAAgJgIgADNBMQgEgCgBgDQgDgGAAgHIABgEQACgJAHgIQAJgJAMgCIACAAIADAAQALgBAHAFQAJAIgBALIAAACIAAACQgBAGgEAFIgGAGQgIAJgLACIgDAAIgFABQgKAAgGgGgAIfA+QgIgBgGgEQgIgHAAgMIABgBIAAgDQACgJAIgIQAJgJAMgCIABAAIADAAQAJgBAGAEIAEACQAHAFAAAIIAAAAIAAAFIAAABQAAAIgFAGIgFAGQgIAIgLADIgDAAIgFABIgDAAgAopA9IgDAAQgLgDgIgJIgGgFQgEgHgBgHIAAgBIAAgFQABgIAHgFIADgDQAHgDAJABIACAAIACAAQAMACAJAJQAHAIADAJIAAADIAAABQABALgIAHQgGAFgIAAIgBAAIgDAAIgEAAgAleA8IgDAAIAAgBQgLgCgIgJIgGgGQgEgGgBgHIAAgCQgBgLAJgHQAHgGALABIADAAIACABQAMACAJAIQAHAIACAKIABAEIgBAIIgBADQgCAEgDACQgHAGgLAAIgEAAgAFGAyQgEgDgBgEIgBgDQgCgEABgEIAAgEQACgJAIgIQAJgJAMgCIACAAIACAAQALAAAIAEQAJAHgBAMIAAACQgBAGgEAHIgGAGQgIAIgLACIgBABIgCAAIgFABQgKAAgHgGgAnQASIgBAAIgDAAQgGgCgFgDIgIgGIgBgBIgFgFQgEgGgBgGIAAgCQgBgMAJgGQAIgGALABIACAAIAAAAIACABIABAAQAMACAIAIQAIAIACAJIAAAEIAAAEQAAAHgHAGQgHAFgLAAIgDAAgAGvAJQgHgGgBgHIAAgEIABgEQACgJAHgIQAJgJAMgBIAAgBIACAAIABAAIACAAQALgBAHAGQAJAGgBAMIAAACQgBAGgEAGIgFAFIgBABIgHAGQgGADgGACIgDAAIAAABIgEAAQgKAAgHgGgAJXgFQgFgBgDgDIgDgEQgFgGAAgIIABgEQACgKAIgIQAGgFAHgDIAAA2IgIgCgAphg5IAHADIAGAFQAHAIADAJIAAAFQABAIgFAGIgDAEIgIAEIgBAAIgHABgAopgfIgDgBQgLgCgIgJIgGgGQgEgGgBgHIAAgCIAAgEQABgIAHgGIADgCQAHgDAJAAIACABIACAAQAMACAJAIQAHAIADAKIAAACIAAACQABALgIAHQgGAFgIAAIgBAAIgCAAIgFAAgAIKgoQgIgBgGgEQgIgHAAgMIABgBIAAgDQACgJAIgIQAJgIAMgCIABgBIADAAQAJgBAGAEIAEACQAHAFAAAIIAAAAIAAAFIAAACQAAAGgFAHIgFAGQgIAJgLACIgDAAIgFABIgDAAgAphiWQAHACAGAGQAHAIADAJIAAAEQABAJgFAFIgDAEQgEADgEABIgIACgAJPhnQgEgCgEgDIgDgDQgEgHAAgIIABgEQACgJAHgIQAJgJAMgCIAAA3IAAg3IAAAAIACAAIAAAAIAAAIIABAnIAAAHIgCABIgBAAIgCAAIgGABIgIgBgAAVjtQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQAMAAAIAEIACABQAFADACADQACADAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAiCj0QgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQALAAAJAEIABABQAFADADAEQACACAAADQAAAHgKAFQgIAFgNAAQgNAAgJgFgACoj8QgJgFAAgHQAAgEACgCQACgDAFgDQAJgFANAAQALAAAIAEIACABQAFADADADQABACAAAEQAAAHgJAFQgJAFgMAAQgNAAgJgFgAkVkPQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQAMAAAIAEIACABQAFADACAEQACACAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgABUkWQgJgFAAgHQAAgDACgCQACgEAFgDQAJgEANAAQAMAAAIADIACABQAFADACAEQACACAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAgzkWQgJgFAAgHQAAgDACgCQACgEAFgDQAJgEANAAQALAAAJADIABABQAFADADAEQABACAAADQAAAHgJAFQgIAFgNAAQgNAAgJgFgAEzkeQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQALAAAIAEIACABQAFADADADQABADAAADQAAAHgJAFQgIAFgNAAQgNAAgJgFgAjAklQgIgFAAgHQAAgDACgCQABgEAFgDQAKgEAMAAQAMAAAIADIACABQAFADADAEQABACAAADQAAAHgJAFQgJAFgNAAQgMAAgKgFgADZk3QgJgGAAgHQAAgDACgCQACgEAFgDQAJgEANAAQALAAAIADIACABQAFADADAEQABACAAADQAAAIgJAFQgIAFgNAAQgNAAgJgFgAhxlAQgIgFAAgHQAAgDACgDQABgDAFgDQAKgFAMAAQAMAAAIAEIACABQAFADADADIABAGQAAAHgJAFQgJAFgNAAQgMAAgKgFgAmElAQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQALAAAIAEIACABQAFADADADIABAGQAAAHgJAFQgJAFgMAAQgNAAgJgFgACClHQgIgFAAgHQAAgDABgCQACgEAFgDQAJgFANAAQAMAAAIAEIACABQAFADACAEQACACAAADQAAAHgJAFQgJAGgNAAQgNAAgJgGgAkhlHQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQAMAAAIAEIACABQAFADACAEQACACAAADQAAAHgJAFQgJAGgNAAQgNAAgJgGgAGjlSQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQALAAAJAEIABABQAFADADAEQACACAAADQAAAHgKAFQgIAFgNAAQgNAAgJgFgAFHlaQgIgFAAgHQAAgDACgDQABgDAFgDQAJgFANAAQAMAAAIAEIACABQAFADACADQACADAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAkVl8QgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQAMAAAIAEIACABQAFADACADIACAGQAAAHgJAFQgJAFgNAAQgNAAgJgFgAl2l8QgIgFAAgHIABgGQACgDAFgDQAJgFANAAQAMAAAIAEIACABQAFADACADQACADAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAF+mNQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQALAAAJAEIABABQAGADACADQACADAAADQAAAHgKAFQgIAFgNAAQgNAAgJgFgAndmNQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQAMAAAIAEIACABQAFADACADQACADAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAErmQQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQALAAAJAEIABABQAFADADADQACADAAADQAAAHgKAFQgIAFgNAAQgNAAgJgFgAHWmWQgJgFAAgHQAAgDACgCQACgEAFgDQAJgEANAAQAMAAAIADIACABQAFADACAEQACACAAADQAAAIgJAEQgJAFgNAAQgNAAgJgFgAGHnCQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQALAAAIAEIACABQAFADADAEQABACAAADQAAAHgJAFQgJAFgMAAQgNAAgJgFgAm0nCQgIgFAAgHQAAgDABgCQACgEAFgDQAJgFANAAQAMAAAIAEIACABQAFADACAEQACACAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAErnPQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQALAAAJAEIABABQAFADADAEQACACAAADQAAAHgKAFQgIAFgNAAQgNAAgJgFgAlenXQgJgFAAgGQAAgEACgCQACgEAFgDQAJgFANAAQALAAAIAEIACABQAFADADAEQABACAAAEQAAAGgJAFQgJAFgMAAQgNAAgJgFgAoPnkQgIgFAAgHQAAgDACgCQABgEAFgDQAKgFAMAAQAMAAAIAEIACABQAFADADAEQABACAAADQAAAHgJAFQgJAFgNAAQgMAAgKgFgAHWnmQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQAMAAAIAEIACABQAFADACAEQACACAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAFyn5QgIgFAAgGQAAgEABgCQACgEAFgCQAJgFANAAQAMAAAIAEIACABQAFACACAEQACACAAAEQAAAHgJAEQgJAFgNAAQgNAAgJgFgAmrn5QgJgFAAgGQAAgEACgCQACgEAFgCQAJgFANAAQAMAAAIAEIACABQAFACACAEQACACAAAEQAAAHgJAEQgJAFgNAAQgNAAgJgFgAltocQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFAMAAQAMAAAIAEIACABQAFADADADIABAGQAAAHgJAFQgJAFgNAAQgMAAgJgFgAErokQgJgFAAgGIACgGQACgEAFgDQAJgFANAAQALAAAJAEIABABQAFADADAEQACADAAADQAAAGgKAFQgIAFgNAAQgNAAgJgFgAjOokQgJgFAAgGQAAgDACgDQACgEAFgDQAJgFANAAQALAAAIAEIACABQAFADADAEIABAGQAAAGgJAFQgIAFgNAAQgNAAgJgFgAGHotQgJgFAAgGQAAgDACgDQACgEAFgDQAJgEANAAQALAAAIAEIACAAQAFADADAEIABAGQAAAHgJAEQgJAGgMAAQgNAAgJgGgAnRotIgFgDQgEgEAAgEIACgGQACgEAFgDQAJgEANAAQALAAAJAEIABAAQAFADADAEQACADAAADQAAAEgEAEIgGADQgIAGgNAAQgNAAgJgGgAB5o9QgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQAMAAAIAEIACABQAFADACADQACADAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAkho+QgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQAMAAAIAEIACABQAFADACADIACAGQAAAHgJAFQgJAFgNAAQgNAAgJgFgAhbo+QgIgFAAgHIABgGQACgDAFgDQAJgFANAAQAMAAAIAEIACABQACABACACIgsAXIgEgCgADApOQgJgFAAgHQAAgDACgDQACgEAFgCQAJgFANAAQALAAAIAEIACABQAFACADAEQABADAAADQAAAHgJAFQgJAFgMAAQgNAAgJgFgAl2pcQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQALAAAIAEIACABQAFADADADQABADAAADQAAAHgJAFQgIAFgNAAQgNAAgJgFgAEWpfQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQAMAAAIAFIACAAQAFADACAEQACACAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAiipfQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQALAAAJAFIABAAQAGADACAEQACACAAADQAAAHgKAFQgIAFgNAAQgNAAgJgFgABUprQgJgFAAgHQAAgDACgCQACgEAFgDQAJgFANAAQAMAAAIAFIACAAQAFADACAEQACACAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgAgnpwQgJgFAAgHQAAgDACgDQACgDAFgDQAJgFANAAQALAAAHAEIACABQAFADADADQABADAAADQAAAHgJAFQgHAFgNAAQgNAAgJgFgAj7p+QgJgFAAgHQAAgDACgCQACgEAFgDQAJgEANAAQAMAAAIADIACABQAFADACAEQACACAAADQAAAHgJAFQgJAFgNAAQgNAAgJgFgACbqNQgJgFAAgGQAAgEACgCQACgEAFgDQAJgEANAAQALAAAIAEIACAAQAFADADAEQABACAAAEQAAAGgJAFQgIAFgNAAQgNAAgJgFgAAVqTQgJgFAAgHQAAgDACgDQACgEAFgCQAJgFANAAQAMAAAIAEIACABQAFACACAEIACAGQAAAHgJAFQgJAFgNAAQgNAAgJgFgAhzqTQgJgFAAgHQAAgDACgDQACgEAFgCQAJgFANAAQALAAAIAEIACABQAFACADAEIABAGQAAAHgJAFQgJAFgMAAQgNAAgJgFg");
	this.shape_8.setTransform(133.675,103.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AmxDPQiQhIgdhgQgHgYAAgYQAAgZAHgXQAdhgCQhJQBTgpB5gQQBfgNCRAAQCPAABXANQBtAQBUApQCvBYAFB7IAAAKIgCAXQgTBuifBPQi0Baj+AAQj9AAi0hagAAbC6QgFADgDADQgBADAAADQgBAHAKAFQAJAFAMAAQAOAAAIgFQAJgFAAgHQAAgDgBgDQgDgDgFgDIgCgBQgIgEgMAAQgMAAgJAFgAh9CzQgFADgCAEQgBACgBADQABAHAIAFQAJAFANAAQANAAAJgFQAJgFAAgHQAAgDgCgCQgDgEgEgDIgCgBQgJgEgLAAQgNAAgJAFgACtCrQgFADgCADQgCACAAAEQAAAHAJAFQAJAFANAAQAMAAAKgFQAJgFgBgHQAAgEgBgCQgDgDgEgDIgCgBQgJgEgLAAQgNAAgJAFgAkPCYQgGADgBAEQgCACAAADQAAAHAJAFQAIAFANAAQANAAAJgFQAJgFAAgHQAAgDgCgCQgCgEgFgDIgCgBQgIgEgMAAQgNAAgIAFgABaCRQgFADgDAEQgBACAAADQgBAHAKAFQAJAFAMAAQANAAAJgFQAJgFAAgHQAAgDgBgCQgDgEgFgDIgCgBQgIgDgMAAQgMAAgJAEgAguCRQgFADgCAEQgCACABADQAAAHAIAFQAJAFANAAQANAAAJgFQAIgFAAgHQAAgDgCgCQgCgEgEgDIgCgBQgIgDgMAAQgNAAgJAEgAE4CJQgFADgCADQgCADAAADQAAAHAJAFQAJAFANAAQANAAAIgFQAJgFAAgHQAAgDgBgDQgCgDgGgDIgCgBQgIgEgLAAQgNAAgJAFgAi7CCQgEADgCAEQgCACAAADQAAAHAIAFQAKAFANAAQANAAAIgFQAKgFgBgHQAAgDgBgCQgDgEgFgDIgBgBQgJgDgLAAQgNAAgKAEgADeBvQgFADgCAEQgCACAAADQAAAHAJAGQAJAFANAAQANAAAIgFQAJgFAAgIQAAgDgBgCQgCgEgGgDIgCgBQgIgDgLAAQgNAAgJAEgAhrBnQgFADgCADQgCADAAADQAAAHAJAFQAJAFAMAAQANAAAKgFQAIgFABgHIgCgGQgDgDgEgDIgCgBQgJgEgMAAQgMAAgJAFgAl/BnQgFADgCADQgCADAAADQAAAHAJAFQAJAFANAAQAMAAAJgFQAKgFgBgHIgBgGQgDgDgFgDIgBgBQgJgEgLAAQgNAAgJAFgACHBgQgEADgDAEQgBACAAADQAAAHAIAFQAJAGANAAQAOAAAIgGQAJgFAAgHQAAgDgBgCQgDgEgFgDIgCgBQgIgEgMAAQgNAAgJAFgAkcBgQgFADgBAEQgDACAAADQABAHAIAFQAJAGANAAQANAAAJgGQAJgFAAgHQAAgDgCgCQgCgEgFgDIgCgBQgIgEgMAAQgNAAgJAFgAGoBVQgFADgCAEQgCACAAADQAAAHAJAFQAJAFANAAQANAAAJgFQAJgFAAgHQAAgDgBgCQgDgEgFgDIgCgBQgIgEgMAAQgNAAgJAFgAFNBNQgFADgCADQgCADAAADQAAAHAJAFQAJAFAMAAQAOAAAIgFQAKgFAAgHQAAgDgCgDQgDgDgFgDIgBgBQgJgEgMAAQgMAAgJAFgAhWiWQgEADgCADIgCAGQAAAHAIAFIAFACQgMALgBAOQgNAFgMAGQg5AbAAAnQAAAmA5AdQA5AbBQAAQBQAAA5gbQA5gdABgmQgBgng5gbQgSgKgUgFQgFgUgZgOQgggRgsAAQgbAAgVAHQgCgCgDgBIgCgBQgIgEgLAAQgNAAgKAFgAkPArQgGADgBADQgCADAAADQAAAHAJAFQAIAFANAAQANAAAJgFQAJgFAAgHIgCgGQgCgDgFgDIgCgBQgIgEgMAAQgNAAgIAFgAlwArQgFADgDADIgBAGQAAAHAJAFQAJAFAMAAQAOAAAIgFQAKgFAAgHQAAgDgCgDQgDgDgFgDIgBgBQgJgEgMAAQgMAAgJAFgAGDAaQgFADgCADQgCADAAADQABAHAIAFQAJAFANAAQANAAAJgFQAJgFAAgHQAAgDgBgDQgDgDgFgDIgCgBQgJgEgLAAQgNAAgJAFgAnYAaQgFADgBADQgCADgBADQAAAHAJAFQAKAFAMAAQANAAAJgFQAJgFAAgHQAAgDgCgDQgCgDgFgDIgCgBQgIgEgMAAQgMAAgKAFgAEwAXQgFADgCADQgCADABADQAAAHAIAFQAJAFANAAQANAAAJgFQAJgFAAgHQAAgDgCgDQgCgDgFgDIgCgBQgIgEgMAAQgNAAgJAFgAHcARQgGADgCAEQgBACAAADQgBAHAKAFQAIAFANAAQANAAAJgFQAJgEAAgIQAAgDgCgCQgCgEgFgDIgCgBQgIgDgMAAQgNAAgIAEgAGMgaQgFADgCAEQgCACAAADQAAAHAJAFQAJAEANAAQAMAAAKgEQAIgFABgHQgBgDgBgCQgDgEgEgDIgCgBQgIgEgMAAQgNAAgJAFgAmvgaQgEADgDAEQgBACAAADQAAAHAIAFQAJAEANAAQAOAAAIgEQAJgFAAgHQAAgDgBgCQgDgEgFgDIgBgBQgJgEgMAAQgNAAgJAFgAEwgnQgFADgCAEQgCACABADQAAAHAIAFQAJAFANAAQANAAAJgFQAJgFAAgHQAAgDgCgCQgCgEgFgDIgCgBQgIgEgMAAQgNAAgJAFgAlZgvQgFADgCAEQgCACAAAEQAAAGAJAFQAJAFANAAQANAAAIgFQAJgFAAgGQAAgEgBgCQgDgEgFgDIgCgBQgHgEgMAAQgNAAgJAFgAoJg8QgFADgCAEQgCACAAADQAAAHAJAFQAJAFAMAAQANAAAKgFQAIgFABgHQgBgDgBgCQgDgEgEgDIgCgBQgJgEgMAAQgMAAgJAFgAHcg+QgGADgCAEQgBACAAADQgBAHAKAFQAIAFANAAQANAAAJgFQAJgFAAgHQAAgDgCgCQgCgEgFgDIgCgBQgIgEgMAAQgNAAgIAFgAF4hQQgGACgBAEQgCACAAAEQAAAGAJAFQAIAFANAAQANAAAJgFQAJgEAAgHQAAgEgCgCQgCgEgFgCIgCgBQgIgEgMAAQgNAAgIAFgAmlhQQgFACgDAEQgCACAAAEQAAAGAKAFQAIAFANAAQANAAAJgFQAJgEAAgHQAAgEgBgCQgDgEgFgCIgCgBQgIgEgMAAQgNAAgIAFgAloh0QgFADgCADQgCADAAADQAAAHAJAFQAJAFAMAAQANAAAKgFQAIgFABgHIgCgGQgCgDgFgDIgDgBQgHgEgNAAQgMAAgJAFgAEwh8QgFADgCAEIgBAGQAAAGAIAFQAJAFANAAQANAAAJgFQAJgFAAgGQAAgDgCgDQgCgEgFgDIgCgBQgIgEgMAAQgNAAgJAFgAjJh8QgFADgCAEQgCADAAADQAAAGAJAFQAJAFANAAQANAAAIgFQAJgFAAgGIgBgGQgDgEgFgDIgCgBQgHgEgMAAQgNAAgJAFgAGMiFQgFADgCAEQgCADAAADQAAAGAJAFQAJAGANAAQAMAAAKgGQAIgEABgHIgCgGQgDgEgEgDIgCAAQgIgEgMAAQgNAAgJAEgAnMiFQgFADgCAEIgBAGQAAAEADAEIAFADQAJAGANAAQANAAAJgGIAFgDQAEgEAAgEQAAgDgCgDQgCgEgFgDIgCAAQgIgEgMAAQgNAAgJAEgAB/iVQgFADgDADQgCADAAADQAAAHAKAFQAIAFANAAQANAAAJgFQAJgFAAgHQAAgDgBgDQgDgDgFgDIgCgBQgIgEgMAAQgNAAgIAFgAkciWQgFADgBADQgDADAAADQABAHAIAFQAJAFANAAQANAAAJgFQAJgFAAgHIgCgGQgCgDgFgDIgCgBQgIgEgMAAQgNAAgJAFgADFimQgFACgCAEQgCADAAADQAAAHAJAFQAJAFANAAQANAAAJgFQAIgFABgHQAAgDgCgDQgCgEgFgCIgDgBQgHgEgMAAQgNAAgJAFgAlxi0QgFADgCADQgCADAAADQAAAHAJAFQAJAFANAAQANAAAJgFQAIgFABgHQAAgDgCgDQgCgDgFgDIgDgBQgHgEgMAAQgNAAgJAFgAEbi3QgEADgCAEQgCACgBADQABAHAIAFQAKAFANAAQAMAAAJgFQAJgFAAgHQAAgDgCgCQgCgEgFgDIgCAAQgIgFgLAAQgNAAgKAFgAidi3QgFADgBAEQgCACgBADQAAAHAJAFQAKAFAMAAQANAAAIgFQAKgFAAgHQAAgDgCgCQgCgEgGgDIgBAAQgJgFgLAAQgMAAgKAFgABajDQgFADgDAEQgBACAAADQgBAHAKAFQAJAFAMAAQANAAAJgFQAJgFAAgHQAAgDgBgCQgDgEgFgDIgCAAQgIgFgMAAQgMAAgJAFgAgijIQgFADgCADQgBADgBADQAAAHAJAFQAJAFANAAQAMAAAJgFQAJgFAAgHQgBgDgBgDQgDgDgEgDIgCgBQgIgEgLAAQgNAAgJAFgAj1jWQgGADgBAEQgCACAAADQAAAHAJAFQAIAFANAAQANAAAJgFQAJgFAAgHQAAgDgCgCQgCgEgFgDIgCgBQgIgDgMAAQgNAAgIAEgACgjlQgFADgCAEQgCACAAAEQAAAGAJAFQAJAFANAAQANAAAJgFQAIgFABgGQAAgEgCgCQgCgEgFgDIgDAAQgHgEgMAAQgNAAgJAEgAAbjrQgFACgDAEQgBADAAADQgBAHAKAFQAJAFAMAAQAOAAAIgFQAJgFAAgHIgBgGQgDgEgFgCIgCgBQgIgEgMAAQgMAAgJAFgAhujrQgFACgCAEQgCADAAADQAAAHAJAFQAJAFANAAQAMAAAJgFQAJgFAAgHIgBgGQgCgEgGgCIgCgBQgIgEgLAAQgNAAgJAFg");
	this.shape_9.setTransform(133.15,58.375);

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
	this.instance.setTransform(506.3,162.7,0.6268,0.6866,0,0,0,151,113.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(2,1,1).p("AilhaQgGADgCAIQgCAHADAIQAEAKAPAMQAVANAXAGQAZAFAXgFQASgEBBgeQAzgYAiAIQAZAGATAVQATAWAEAbQADAUgIASQgIATgQAEQgHABgNgBQgOgCgGABQgKABgHAJQgIAJAFAJ");
	this.shape.setTransform(638.0868,297.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AhnhjQgxASgEAfQgCARAMAQQALAOARAHQAcAOAoAAQAYABAugDQBcgGAkAzQAIAKABALQABAMgHAG");
	this.shape_1.setTransform(565.4232,298.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Выпрямитель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Выпрямитель
	this.instance = new lib.Выпрямитель();
	this.instance.parent = this;
	this.instance.setTransform(226.05,183.65,0.6268,0.6866,0,0,0,48.8,37.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Выключатель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Выключатель
	this.instance = new lib.Выключатель();
	this.instance.parent = this;
	this.instance.setTransform(240,274.9,0.6268,0.6866,0,0,0,33.9,34.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ВыключКнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ВыключКнопка
	this.instance = new lib.ВыключательКнопка();
	this.instance.parent = this;
	this.instance.setTransform(240.55,263.4,0.6268,0.6866,0,0,0,13.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(614).to({skewY:180},0).to({_off:true},585).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Анимация = function(mode,startPosition,loop) {
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
	this.Провода.setTransform(366.9,191.5,1,1,0,0,0,366.9,191.5);
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
	this.Реостат.setTransform(647.2,174,1,1,0,0,0,647.2,174);
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
	this.Источник_питания.setTransform(534,197,1,1,0,0,0,534,197);
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
	this.ВыключКнопка.setTransform(240.3,263.2,1,1,0,0,0,240.3,263.2);
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
	this.Выключатель.setTransform(240,274.8,1,1,0,0,0,240,274.8);
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
	this.Выпрямитель.setTransform(225.8,183.5,1,1,0,0,0,225.8,183.5);
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
	this.Соленоид.setTransform(346.7,117.8,1,1,0,0,0,346.7,117.8);
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
	this.Миллиампертметр.setTransform(358.6,379.1,1,1,0,0,0,358.6,379.1);
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
	this.Вольтметр.setTransform(592.7,383.8,1,1,0,0,0,592.7,383.8);
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
	this.АмпСтрелка.setTransform(96.2,384.8,1,1,0,0,0,96.2,384.8);
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
	this.Амперметр.setTransform(113.2,382.6,1,1,0,0,0,113.2,382.6);
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
	this.ЛАТР.setTransform(133.2,104.6,1,1,0,0,0,133.2,104.6);
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
	this.Подложка.setTransform(399.7,261.4,1,1,0,0,0,399.7,261.4);
	this.Подложка.depth = 0;
	this.Подложка.isAttachedToCamera = 0
	this.Подложка.isAttachedToMask = 0
	this.Подложка.layerDepth = 0
	this.Подложка.layerIndex = 24
	this.Подложка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Подложка).wait(1200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(385.5,233.4,918.9000000000001,505.70000000000005);
// library properties:
lib.properties = {
	id: '60FBEE31B89053448C9002AAE0822EE8',
	width: 800,
	height: 500,
	fps: 23,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"sounds/animation.mp3?1638892448624", id:"animation"}
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