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
	this.shape_7.graphics.f("#000000").s().p("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AIAFQAJAGgBAKIAAABIAAACQgBAEgEAFIgGAFQgJAHgLACIgDABIgGAAQgKAAgHgFgAo9wCQgFgDgDgFQgFgIABgKIABgGQADgNAMgLQAOgNAUgDIACAAIAFgBQARgBAMAIQAOAKgBARIAAACIgBAEQgCAIgFAHIgJAJQgNANgSADIgFABIgJABQgPAAgKgJgArcxFIgFgFQgDgFAAgFIABgEQACgHAIgHQAJgIANgBIACAAIADgBQALAAAIAEQAJAGgBAKIAAABIAAACQgBAFgEAEIgGAGQgJAHgLACIgDAAIgGABQgKAAgHgFgApxy3QgFgEgDgEQgFgIABgKIABgGQADgNAMgMQAOgNAUgDIACAAIAFAAQARgCAMAIQAOALgBARIAAACIgBADQgCAIgFAIIgJAJQgNAMgSAEIgFAAIgJABQgPAAgKgIgAsEzxIgGgFQgDgFABgFIAAgEQADgHAIgHQAJgIAMgBIACAAIADgBQAMAAAHAEQAKAGgBAKIAAABIgBACQgBAFgEAEIgFAGQgJAHgMACIgDAAIgFABQgLAAgGgFgAqz2LQgFgDgDgFIgCgEIgCgGIAAgIIABgGQADgNAMgLQAOgNAUgDIACAAIAFgBQARgBAMAIQAOAKgBARIAAACIgBAEQgCAIgFAHIgJAJQgNANgSADIgFABIgJABQgPAAgKgJg");
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
	this.shape.graphics.f().s("#FF0033").ss(2,1,1).p("ABYgDIh+AFIgxAC");
	this.shape.setTransform(206,67.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWglAPQgkAQg0AAQgzAAglgQQgkgPAAgWQAAgBAAgDQAEgSAggOQAlgQAzAAQA0AAAkAQQAlAQAAAUg");
	this.shape_1.setTransform(214.55,68.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQApAVAHAdQACAFAAAGQAAAAAAABQgBAWgVATQgMAIgQAIQgFADgFACIAlBZQgOAEgRAFQgjAIgyABQgKAAgJAAQghgBgfgEQgjgEgTgDQgFgBgEgBQgjgFgUgKQgIgEgHgEAiGAIQgOgIgJgKQgLgPgBgQIgnBwQAJALAOAJAiGAIIgzBTAhMAgQgXgGgUgKQgIgEgHgEAAKApIACBXAAKApQgFAAgFAAQgpAAgjgJIgeBUADKAzIAHAUQgBAUg9ATACqgpIAgBcABuAVQgrASg5ACACUAAIA2Az");
	this.shape_2.setTransform(214.05,72.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("AAABUQgpAAgjgIQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgBIABgEQABgVATgQIBFgiQAkgJArgBQBGABAyAYQApAVAHAcQACAFAAAGIAAABQgBAWgWASQgLAJgQAJIgKAFQgrASg5ABIgKAAgAh3AAQAAAVAkAPQAlAPAzAAQA0AAAkgPQAlgPAAgVQAAgVglgRQgkgPg0AAQgzAAglAPQggAOgEATIgxACIAxgCIAAAFIAAAAgAhTAkQgkgPAAgVIAAgFIB/gGIh/AGQAEgTAggOQAlgPAzAAQA0AAAkAPQAlARAAAVQAAAVglAPQgkAPg0AAQgzAAglgPgACCAAIAAAAg");
	this.shape_3.setTransform(214.075,68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAMBVIgChWQA5gCArgSIAlBYIgfAJQgiAIgzABIgTAAgAgzBQIg3gHIAehTIgeBTIgJgCQgjgFgUgKIgPgIIA0hSIAOAIQAUAKAXAGQAjAJApAAIAKAAIACBWQghgBgegEgACTBDIglhYIAKgFQAQgIALgJQAWgTABgWIAgBcIg3gzIA3AzIAHAUQgBAUg9ATgAi5AwQgOgJgJgLIAnhwQABAQALAPQAJAKAPAJIg0BSIAAAAgAAKgBg");
	this.shape_4.setTransform(214.05,77.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBABgDQAEgSAggOQAkgQAzAAQA0AAAlAQQAkAQAAAUg");
	this.shape_5.setTransform(214.7,68.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AiogvQABgUATgRIBGghQAjgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACIAlBZQgOAEgRAFQgiAIgyABQgKAAgKAAAiFAIQgPgIgJgKQgLgPAAgQIgoBwQAJALAPAJAhpB0QgGgBgEgBQgjgFgUgKQgIgEgGgEAiFAIIgzBTAhLAgQgYgGgUgKQgIgEgGgEAALApIABBXQghgBgfgEQgjgEgSgDAALApQgFAAgGAAQgpAAgigJIgeBUADKAzIAHAUQgBAUg9ATACqgpIAgBcABuAVQgrASg4ACACUAAIA2Az");
	this.shape_6.setTransform(214.2,72.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAMBVIgBhWQA4gCArgSIAlBYIgfAJQgjAIgyABIgTAAgAgzBQIg2gHIAehTIgeBTIgKgCQgjgFgUgKIgOgIIAzhSIAOAIQAUAKAYAGQAiAJApAAIALAAIABBWQghgBgegEgACTBDIglhYIAKgFQARgIALgJQAVgTABgWIAgBcIg2gzIA2AzIAHAUQgBAUg9ATgAi4AwQgPgJgJgLIAohwQAAAQALAPQAJAKAPAJIgzBSIAAAAgAALgBg");
	this.shape_7.setTransform(214.2,77.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0033").ss(2,1,1).p("ABYgDIh+AFIgyAC");
	this.shape_8.setTransform(205.55,68.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWglAPQgkAQg0AAQgzAAgkgQQglgPAAgWQAAgBABgDQAEgSAggOQAkgQAzAAQA0AAAkAQQAlAQAAAUg");
	this.shape_9.setTransform(214.1,69.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AiFAIQgPgIgJgKQgLgPAAgQIgoBwQAJALAPAJAiogvQABgUATgRIBGghQAjgKArAAQBGAAAyAYQAqAVAGAdQACAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACIAlBZQgOAEgRAFQgiAIgyABQgKAAgKAAQghgBgfgEQgjgEgTgDQgFgBgEgBQgjgFgUgKQgIgEgGgEAhMAgQgXgGgUgKQgIgEgGgEIgzBTAALApQgFAAgGAAQgpAAgjgJIgeBUAALApIABBXADKAzIAHAUQgBAUg9ATACUAAIA2AzACqgpIAgBcABuAVQgrASg4AC");
	this.shape_10.setTransform(213.6,73.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgBIABgEQABgUATgRIBFgiQAkgKArAAQBGABAyAYQApAVAHAcQACAGAAAFIAAABQgBAWgWASQgLAKgQAIIgKAFQgrASg5ACIgKAAgAh3AAQAAAUAkAQQAlAPAzAAQA0AAAkgPQAlgQAAgUQAAgWglgQQgkgPg0AAQgzAAglAPQggAOgEATIgxACIAxgCIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFIB/gGIh/AGQAEgTAggOQAlgPAzAAQA0AAAkAPQAlAQAAAWQAAAUglAQQgkAPg0AAQgzAAglgPgACCAAIAAAAg");
	this.shape_11.setTransform(213.625,69.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAMBVIgChWIACBWQghgBgfgEIg2gHIAehTIgeBTIgJgCQgjgFgUgKIgPgIIA0hSIAOAIQAUAKAXAGQAjAJApAAIAKAAQA5gCArgSIAKgFQAQgIALgJQAWgTABgWIAgBcIg3gzIA3AzIAHAUQgBAUg9ATIglhYIAlBYIgfAJQgiAIgzABIgTAAgAjQAcIAnhwQABAQALAPQAJAKAPAJIg0BSQgOgJgJgLgAiFgiIAAAAg");
	this.shape_12.setTransform(213.6,77.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0033").ss(2,1,1).p("ABJANIhsgSIglgH");
	this.shape_13.setTransform(206.875,65.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWglAPQgkAQg0AAQgzAAglgQQgkgPAAgWQAAgBAAgDQADgNARgKQAHgFAJgEQAlgQAzAAQA0AAAkAQQAlAQAAAUg");
	this.shape_14.setTransform(213.8,67.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AhMAgQgXgGgUgKQgIgEgHgEQgOgIgJgKQgLgPgBgQIgnBwQAJALAOAJAiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQApAVAHAdQACAFAAAGQAAAAAAABQgBAWgVATQgMAIgQAIQgFADgFACIAlBZQgOAEgRAFQgjAIgyABQgKAAgJAAQghgBgfgEQgjgEgTgDQgFgBgEgBQgjgFgUgKQgIgEgHgEAiGAIIgzBTAAKApIACBXAAKApQgFAAgFAAQgpAAgjgJIgeBUADKAzIAHAUQgBAUg9ATACqgpIAgBcABuAVQgrASg5ACACUAAIA2Az");
	this.shape_15.setTransform(213.3,72.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgIQgOgJgJgKQgLgPgBgRIAAgBIABgDQABgUATgRIBFghQAkgLArABQBGgBAyAZQApAVAHAcQACAFAAAFIAAABQgBAXgWATQgLAJgQAIIgKAEQgrATg5ACIgKAAgAh3AAQAAAVAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgVQAAgWglgPQgkgQg0AAQgzAAglAQQgJAEgHAFIgmgHIAmAHQgRAKgDANIAAAFIAAAAgAhTAkQgkgPAAgVIAAgFQADgNARgKIBsASIhsgSQAHgFAJgEQAlgQAzAAQA0AAAkAQQAlAPAAAWQAAAVglAPQgkAQg0AAQgzAAglgQgACCAAIAAAAgAhjgcg");
	this.shape_16.setTransform(213.325,68.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAMBVIgBhWQA4gCArgSIAlBYIgfAJQgjAIgyABIgTAAgAgzBQIg2gHIAdhTIgdBTIgKgCQgjgFgUgKIgOgIIAzhSIgzBSQgPgJgJgLIAohwQAAAQAMAPQAIAKAPAJIAOAIQAUAKAXAGQAjAJApAAIALAAIABBWQghgBgegEgACTBDIglhYIAKgFQARgIALgJIA2AzIAHAUQgBAUg9ATgACUgrQAVgTABgWIAgBcgAALgBg");
	this.shape_17.setTransform(213.3,76.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0033").ss(2,1,1).p("AA2AXIhNggIgegN");
	this.shape_18.setTransform(209.575,65.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBABgDQAEgSAggOQAFgDAIgCQAggLAqAAQA0AAAlAQQAkAQAAAUg");
	this.shape_19.setTransform(214.7,68.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AiogvQABgUATgRIBGghQAjgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQAAAPgKANQgFAHgHAGQgLAIgRAIQgFADgFACQgMAFgNAEQgXAHgbACIAkBXQgSACgVAAQgKAAgKAAQghgBgfgEQgjgEgSgDQgGgBgEgBQgUgDgOgEQgNgEgIgEQgIgEgGgEQgJgGgHgGAhFAiQgDgBgDgBQgYgGgUgKQgIgEgGgEQgJgGgHgFQgEgDgEgEQgLgPAAgQIgoBwQAEAEAEAEAh3AVIgeBWAiVgDIgzBSAAjAnQgMABgMABQgFAAgGAAQglAAgggHIACBTADCBaQgOAJgcAJQgDABgCABQgOAEgRAFQgUAFgZACACqgpIAnBwQAAAKgPAJABVAeIBDBOACggNIAiBn");
	this.shape_20.setTransform(214.2,72.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#996633").s().p("AAABUQglABgggIIgHgBQgXgGgUgKIgPgJQgJgFgGgGIgIgIQgLgOgBgQIAAgBIABgEQABgVATgQIBFgiQAkgJArgBQBGABAyAYQApAVAHAcQACAFAAAGIAAABQgBAOgKAOQgFAHgHAFQgLAJgQAJIgKAFQgMAFgOAEQgXAHgaACIgZABIgKAAgAh3AAQAAAVAkAPQAlAPAzAAQA0AAAkgPQAlgPAAgVQAAgVglgRQgkgPg0AAQgqAAghALIgegNIAeANIgNAEQggAOgEATIAAAFIAAAAgAhTAkQgkgPAAgVIAAgFQAEgTAggOIANgEIBOAhIhOghQAhgLAqAAQA0AAAkAPQAlARAAAVQAAAVglAPQgkAPg0AAQgzAAglgPgACCAAIAAAAgAhGgqg");
	this.shape_21.setTransform(214.225,68.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAMBVQghgBgegEIg2gHIgKgCQgUgDgOgEIAehVIgeBVQgMgEgJgEIgOgIQgJgGgIgGIA0hSIg0BSIgHgIIAohwQAAAQALAPIAIAHQAHAGAJAGIAOAIQAUAKAYAGIAGACIACBSIgChSQAgAHAlAAIALAAIAYgCIAjBWIgnACIgTAAgAAjgDQAagCAYgHQANgEAMgFIAKgFQARgIALgJQAGgGAFgHQALgNAAgPIAnBwQAAAKgPAJIgjhnIAjBnQgPAJgcAJIhChNIBCBNIgEACIgfAJQgUAFgaACg");
	this.shape_22.setTransform(214.2,77.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0033").ss(2,1,1).p("AAhAfIgsgpIgVgU");
	this.shape_23.setTransform(211.325,64.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWglAPQgkAQg0AAQgzAAglgQQgkgPAAgWQAAgBAAgDQAEgSAggOQAGgDAHgCQAQgFASgDQAUgDAVAAQA0AAAkAQQAlAQAAAUg");
	this.shape_24.setTransform(214.3,67.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQApAVAHAdQACAFAAAGQAAAAAAABQgBAWgVATQgMAIgQAIQgFADgFACIAlBZQgOAEgRAFQgjAIgyABQgKAAgJAAQghgBgfgEQgjgEgTgDQgFgBgEgBQgjgFgUgKQgIgEgHgEAhMAgQgXgGgUgKQgIgEgHgEQgOgIgJgKQgLgPgBgQIgnBwQAJALAOAJAiGAIIgzBTAAKApIACBXAAKApQgFAAgFAAQgpAAgjgJIgeBUADKAzIAHAUQgBAUg9ATACqgpIAgBcABuAVQgrASg5ACACUAAIA2Az");
	this.shape_25.setTransform(213.8,72.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#996633").s().p("AAABVQgpAAgjgJQgXgGgUgKIgPgIQgOgJgJgKQgLgPgBgRIAAgBIABgDQABgUATgRIBFghQAkgLArABQBGgBAyAZQApAVAHAcQACAFAAAFIAAABQgBAXgWATQgLAJgQAIIgKAEQgrATg5ACIgKAAgAh3AAQAAAVAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgVQAAgWglgPQgkgQg0AAQgVAAgUADIgVgVIAVAVQgSACgQAGIgNAFQggAOgEASIAAAFIAAAAgAhTAkQgkgPAAgVIAAgFQAEgSAggOIANgFQAQgGASgCIAsAqIgsgqQAUgDAVAAQA0AAAkAQQAlAPAAAWQAAAVglAPQgkAQg0AAQgzAAglgQgACCAAIAAAAgAgkgyg");
	this.shape_26.setTransform(213.825,68.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAMBVIgChWQA5gCArgSIAlBYIgfAJQgjAIgxABIgUAAgAg0BQIg2gHIAfhTIgfBTIgJgCQgjgFgUgKIgPgIIAzhSIgzBSQgOgJgJgLIAnhwQABAQAMAPQAIAKAOAJIAPAIQAUAKAYAGQAiAJApAAIAKAAIACBWQghgBgfgEgACTBDIglhYIAKgFQARgIAKgJIA3AzIAHAUQgBAUg9ATgACTgrQAWgTABgWIAgBcgAAKgBg");
	this.shape_27.setTransform(213.8,76.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0033").ss(2,1,1).p("AACAhIgCgsIgBgV");
	this.shape_28.setTransform(214.825,64.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWglAPQgkAQg0AAQgzAAgkgQQglgPAAgWQAAgBAAgDQAEgSAhgOQAFgCAFgCQAggLAqgBQACAAABAAQA0AAAkAQQAlAQAAAUg");
	this.shape_29.setTransform(215.15,68.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AgCApQgogBgigIQgXgGgUgKQgIgEgHgEQgOgIgJgKQgLgPgBgQIgnBwQAJALAOAJQAHAEAIAEQAUAKAjAFQAEABAFABQATADAjAEAiogvQABgUATgRIBFghQAkgKArAAQBGAAAyAYQAqAVAGAdQACAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACQgrASg5ACQgFAAgFAAQgBAAgBAAIgyBSAiTAEIgeBTACTBuQgOAEgRAFQgiAIgyABQgKAAgKAAQghgBgfgEQAAAAAAAAAh5AWIACBYADABbQgPAKgeAJACqgpIAnBwQgBAKgQAKACbAEIAlBXABNAjIBGBL");
	this.shape_30.setTransform(214.65,73.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#996633").s().p("AAABUIgDAAQgoAAghgIQgXgGgUgKIgPgIQgOgJgJgKQgLgPgBgRIAAgBIABgDQABgUATgRIBFghQAkgKArAAQBGAAAyAYQApAVAHAdQACAFAAAEIAAABQgBAXgWATQgLAIgQAJIgKAEQgrATg5ABIgKAAgAh3AAQAAAUAkAQQAlAQAzAAQA0AAAkgQQAlgQAAgUQAAgVglgQQgkgQg0AAIgEAAIgBgVIABAVQgpABggAKIgLAFQggAOgEASIAAAFIAAAAgAhTAkQgkgQAAgUIAAgFQAEgSAggOIALgFQAggKApgBIADAsIgDgsIAEAAQA0AAAkAQQAlAQAAAVQAAAUglAQQgkAQg0AAQgzAAglgQgACCAAIAAAAgAABg1g");
	this.shape_31.setTransform(214.675,68.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AAMBVQghgBgegEIgBAAIAxhRIgxBRIg1gHIgKgCQgjgFgUgKIgOgIQgPgJgJgLIAohwQAAAQALAPQAJAKAPAJIAOAIQAUAKAXAGQAhAIAoABIADAAIALAAQA4gCArgSIAKgFQARgIALgJQAVgTABgWIAnBwQAAAKgRAKIgkhWIAkBWQgPAKgeAJIhGhKIBGBKIgfAJQgjAIgxABIgUAAgAh3BDIgChXgAixAsIAehSg");
	this.shape_32.setTransform(214.65,77.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0033").ss(2,1,1).p("AgTAhIAagrIANgW");
	this.shape_33.setTransform(216.6,64.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBABgDQAEgSAggOQAFgCAFgCQAggLAqgBQACAAABAAQAOAAAMABQAkADAbAMQAkAQAAAUg");
	this.shape_34.setTransform(214.7,68.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AiFAIQgPgIgJgKQgLgPAAgQIgoBwQAJALAPAJAiogvQABgUATgRIBGghQAjgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACIAlBZQgOAEgRAFQgiAIgyABQgKAAgKAAQghgBgfgEQgjgEgSgDQgGgBgEgBQgjgFgUgKQgIgEgGgEAiFAIIgzBTAhLAgQgYgGgUgKQgIgEgGgEAALApIABBXAALApQgFAAgGAAQgpAAgigJIgeBUADKAzIAHAUQgBAUg9ATACqgpIAgBcABuAVQgrASg4ACACUAAIA2Az");
	this.shape_35.setTransform(214.2,72.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#996633").s().p("AAABUQgpAAgjgIQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgBIABgEQABgVATgQIBFgiQAkgJArgBQBGABAyAYQApAVAHAcQACAFAAAGIAAABQgBAWgWASQgLAJgQAJIgKAFQgrASg5ABIgKAAgAh3AAQAAAVAkAPQAlAPAzAAQA0AAAkgPQAlgPAAgVQAAgVglgRQgbgLgjgDIANgWIgNAWIgagBIgEAAQgpAAggAMIgLADQggAOgEATIAAAFIAAAAgAhTAkQgkgPAAgVIAAgFQAEgTAggOIALgDQAggMApAAIAEAAIAaABIgbAtIAbgtQAjADAbALQAlARAAAVQAAAVglAPQgkAPg0AAQgzAAglgPgACCAAIAAAAgAAfg0IAAAAg");
	this.shape_36.setTransform(214.225,68.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0033").ss(2,1,1).p("AgoAdIA5goIAYgR");
	this.shape_37.setTransform(218.575,63.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBABgDQAEgSAggOQAFgCAFgCQAggLAqgBQACAAABAAQAfAAAZAGQASADAPAHQAkAQAAAUg");
	this.shape_38.setTransform(214.7,67.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AiogvQABgUATgRIBGghQAjgKArAAQBGAAAyAYQAqAVAHAdQABAFAAAGQAAAAAAABQgBAWgVATQgLAIgRAIQgFADgFACQghAOgqAEQgDABgDAAQgJABgJAAQgFAAgGAAQgpAAgigJQgYgGgUgKQgIgEgGgEQgJgFgGgFQgFgEgEgEQgLgPAAgQIgoBwQAJALAPAJQAGAEAIAEQAKAEAMAEAiUgCIAABtACqgpIARAxIAWA/QgBAUg9ATQgOAEgRAFQgEABgEABQggAGgsABQgKAAgKAAQgLAAgJgBQgBAAgBAAQgWgBgUgDQgjgEgSgDQgGgBgEgBQgSgDgPgEAhLAgIgeBUAguApIAkBWAAjAnIBJBSAC7AIIgdBd");
	this.shape_39.setTransform(214.2,71.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#996633").s().p("AAABUQgpAAgjgIQgXgGgUgKIgPgJQgIgFgGgFIgJgJQgLgOgBgQIAAgBIABgEQABgVATgQIBFgiQAkgJArgBQBGAAAyAZQApAVAHAdQACAEAAAGIAAABQgBAWgWASQgLAJgQAJIgKAFQgiAOgqAEIgGAAIgSABIgKAAgAh3AAQAAAVAkAPQAlAPAzAAQA0AAAkgPQAlgPAAgVQAAgVglgRQgPgGgRgEIAXgQIgXAQQgagFgeAAIgEAAQgpAAggALIgLAEQggAOgEATIAAAFIAAAAgAhTAkQgkgPAAgVIAAgFQAEgTAggOIALgEQAggLApAAIAEAAQAeAAAaAFIg6ApIA6gpQARAEAPAGQAlARAAAVQAAAVglAPQgkAPg0AAQgzAAglgPgACCAAIAAAAgAA9gwIAAAAg");
	this.shape_40.setTransform(214.225,67.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AAMBVIgVgBIgBAAIgkhVIAkBVQgWgBgTgDIg2gHIAehTIgeBTIgKgCQgSgDgPgEIAAhtQAGAGAJAFIAOAIQAUAKAYAGQAiAJApAAIALAAIASgBIAFgBQArgEAhgOIAKgFQARgIALgJQAVgTABgWIARAyIgdBcIAdhcIAWA+QgBAUg9ATIgfAJIgIACIhKhRIBKBRQggAGgtABIgTAAgABsBOgAiqA4IgOgIQgPgJgJgLIAohwQAAAQALAPIAJAIIAABtQgMgEgKgEgAiUgtIAAAAg");
	this.shape_41.setTransform(214.2,75.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0033").ss(2,1,1).p("AgyAXIBOgjIAWgK");
	this.shape_42.setTransform(219.55,65.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#663300").ss(1,1,1).p("AB9AAQAAAWgkAPQglAQg0AAQgzAAgkgQQglgPAAgWQAAgBABgDQAEgSAggOQAFgCAFgCQAggLAqgBQACAAABAAQAfAAAZAGQALACAKADQAGACAGADQAkAQAAAUg");
	this.shape_43.setTransform(214.7,68.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#996633").s().p("AAABUQgpAAgjgIQgXgGgUgKIgPgJQgOgIgJgLQgLgOgBgQIAAgBIABgEQABgVATgQIBFgiQAkgJArgBQBGABAyAYQApAVAHAcQACAFAAAGIAAABQgBAWgWASQgLAJgQAJIgKAFQgrASg5ABIgKAAgAh3AAQAAAVAkAPQAlAPAzAAQA0AAAkgPQAlgPAAgVQAAgVglgRIgLgEIAWgKIgWAKQgKgEgLgCQgagFgeAAIgEAAQgpAAggAMIgLADQggAOgEATIAAAFIAAAAgAhTAkQgkgPAAgVIAAgFQAEgTAggOIALgDQAggMApAAIAEAAQAeAAAaAFQALACAKAEIhPAkIBPgkIALAEQAlARAAAVQAAAVglAPQgkAPg0AAQgzAAglgPgACCAAIAAAAgABSgqIAAAAg");
	this.shape_44.setTransform(214.225,68.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0033").ss(2,1,1).p("AhXgDIB+AFIAxAC");
	this.shape_45.setTransform(221.6,67.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgkgQg0AAQgzAAglAQQgkAQAAAUg");
	this.shape_46.setTransform(213.05,67.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("ACpgvQgBgUgTgRIhGghQgjgKgsAAQhFAAgyAYQgqAVgHAdQgBAFAAAGQAAAAAAABQABAWAVATQALAIARAIQAFADAFACQArASA4ACIgBBXQAhgBAfgEQAjgEASgDQAGgBAEgBQAjgFAUgKQAIgEAGgEAiSBuQAOAEARAFQAiAIAyABQAKAAAKAAAjJAzIgHAUQABAUA9ATAiTAAIg2AzAipgpIggBcABMAgQAYgGAUgKQAIgEAGgEQAPgIAJgKQALgPAAgQIAoBwQgJALgPAJAgKApQAFAAAFAAQAqAAAigJIAeBUACGAIIAzBTAhtAVIglBZ");
	this.shape_47.setTransform(213.55,72.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIgxgCQgEgSgggOQglgQgzAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAQAzAAAlgQQAkgPAAgVIAAgFIAxACIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAzAAAlAQQAgAOAEASIh/gFIB/AFIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAB4gFg");
	this.shape_48.setTransform(213.525,68.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgeBVQgzgBgigIIgfgJIAlhYQArASA4ACIgBBWIgTAAgAgKgBIAKAAQAqAAAjgJIAdBTIgdhTQAXgGAUgKIAOgIIA0BSIg0hSQAPgJAJgKQALgPAAgQIAoBwQgJALgOAJIgPAIQgUAKgjAFIgKACIg2AHQgeAEghABgAjQAcIAHgUIA3gzQALAJAQAIIAKAFIglBYQg9gTgBgUgAiphUQABAWAWATIg3AzgACGgig");
	this.shape_49.setTransform(213.55,76.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0033").ss(2,1,1).p("AhTACIB7gCIAsgB");
	this.shape_50.setTransform(221.2,66.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQAAgEgDgDQgEgIgJgGQgIgGgMgFQgkgQg0AAQgzAAglAQQgkAQAAAUg");
	this.shape_51.setTransform(213.05,67.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgeBVQgzgBgigIIgfgJIAlhYQArASA4ACIgBBWIgTAAgAgKgBIAKAAQAqAAAjgJIAdBTIg2AHQgeAEghABgABqBJgABNgKQAXgGAUgKIAOgIIA0BSIg0hSQAPgJAJgKQALgPAAgQIAoBwQgJALgOAJIgPAIQgUAKgjAFIgKACgAjQAcIAHgUIA3gzQALAJAQAIIAKAFIglBYQg9gTgBgUgAiphUQABAWAWATIg3Azg");
	this.shape_52.setTransform(213.55,76.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFIgDgHIAsgBIgsABQgEgIgJgHQgIgFgMgFQglgQgzAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAzAAAlAQQAMAFAIAFQAJAHAEAIIh7ACIB7gCIADAHIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAB1gMIAAAAg");
	this.shape_53.setTransform(213.525,68.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0033").ss(2,1,1).p("AhMAEIBugFIArgC");
	this.shape_54.setTransform(221.275,66.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgBgHgHgHQgBgCgBgBQgJgIgRgHQgkgQg0AAQgzAAglAQQgkAQAAAUg");
	this.shape_55.setTransform(213.05,67.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("ACpgvQgBgNgIgMQgEgGgHgGIhGghQgjgKgsAAQhFAAgyAYQgqAVgHAdQgBAFAAAGQAAAAAAABQABAWAVATQALAIARAIQAFADAFACQArASA4ACIgBBXQAhgBAfgEQAjgEASgDQAGgBAEgBQAjgFAUgKQAIgEAGgEAiSBuQAOAEARAFQAiAIAyABQAKAAAKAAAjJAzIgHAUQABAUA9ATAiTAAIg2AzAipgpIggBcABMAgQAYgGAUgKQAIgEAGgEQAPgIAJgKQALgPAAgQIAoBwQgJALgPAJAgKApQAFAAAFAAQAqAAAigJIAeBUACGAIIAzBTAhtAVIglBZ");
	this.shape_56.setTransform(213.55,72.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQAHAGAEAGQAIAMABANIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgCgIgGgGIArgDIgrADIgDgDQgJgIgQgHQglgQgzAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAzAAAlAQQAQAHAJAIIADADIhwAGIBwgGQAGAGACAIIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgABwgTIAAAAg");
	this.shape_57.setTransform(213.525,68.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0033").ss(2,1,1).p("AhQAHIB1gJIAsgE");
	this.shape_58.setTransform(220.875,66.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgBgIgIgHQgJgJgSgIQgkgQg0AAQgzAAglAQQgkAQAAAUg");
	this.shape_59.setTransform(213.05,67.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgCgIgHgHIArgEIgrAEQgJgKgSgHQglgQgzAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAzAAAlAQQASAHAJAKIh1AKIB1gKQAHAHACAIIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgABvgUIAAAAg");
	this.shape_60.setTransform(213.525,68.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0033").ss(2,1,1).p("AhGANIBogSIAlgH");
	this.shape_61.setTransform(219.975,65.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgCgOgTgLQgCgBgDgBQgEgDgGgCQgkgQg0AAQgzAAglAQQgkAQAAAUg");
	this.shape_62.setTransform(213.05,67.975);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("ACpgvQgBgUgTgRIgJgEIg9gdQgjgKgsAAQhFAAgyAYQgqAVgHAdQgBAFAAAGQAAAAAAABQABAWAVATQALAIARAIQAFADAFACQArASA4ACIgBBXQAhgBAfgEQAjgEASgDQAGgBAEgBQAjgFAUgKQAIgEAGgEAiSBuQAOAEARAFQAiAIAyABQAKAAAKAAAjJAzIgHAUQABAUA9ATAiTAAIg2AzAipgpIggBcABMAgQAYgGAUgKQAIgEAGgEQAPgIAJgKQALgPAAgQIAoBwQgJALgPAJAgKApQAFAAAFAAQAqAAAigJIAeBUACGAIIAzBTAhtAVIglBZ");
	this.shape_63.setTransform(213.55,72.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIA8AdIAJAEQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgDgOgTgLIAmgHIgmAHIgEgDIgKgEQglgQgzAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAzAAAlAQIAKAEIAEADIhoAUIBogUQATALADAOIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgABigeIAAAAg");
	this.shape_64.setTransform(213.525,68.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF0033").ss(2,1,1).p("AhEAPIBlgVIAkgI");
	this.shape_65.setTransform(219.675,65.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgDgPgWgMQgEgDgHgCQgkgQg0AAQgzAAglAQQgkAQAAAUg");
	this.shape_66.setTransform(213.05,67.975);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgDgPgWgMIAjgHIgjAHIgLgFQglgQgzAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAzAAAlAQIALAFIhlAWIBlgWQAWAMADAPIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgABfggIAAAAg");
	this.shape_67.setTransform(213.525,68.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF0033").ss(2,1,1).p("Ag6ASIBagaIAcgJ");
	this.shape_68.setTransform(218.65,65.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQAAAAAAgBQgEgBgFgCQgigMgtAAQgzAAglAQQgkAQAAAUg");
	this.shape_69.setTransform(213.05,67.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOIgBgBIAcgIIgcAIIgJgDQghgMgtAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAtAAAhAMIAJADIhaAbIBagbIABABQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgABTgmIAAAAg");
	this.shape_70.setTransform(213.525,68.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF0033").ss(2,1,1).p("Ag3AWIBQgeIAfgM");
	this.shape_71.setTransform(218.325,64.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgFgDgGgBQghgMgsAAQgzAAglAQQgkAQAAAUg");
	this.shape_72.setTransform(213.05,67.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOIgLgFIAfgMIgfAMQgigLgrAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQArAAAiALIhQAfIBQgfIALAFQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgABJgqIAAAAg");
	this.shape_73.setTransform(213.525,68.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF0033").ss(2,1,1).p("Ag1AYIBJggIAigP");
	this.shape_74.setTransform(218.175,64.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgIgEgJgCQgfgKgoAAQgzAAglAQQgkAQAAAUg");
	this.shape_75.setTransform(213.05,67.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOIgRgHIAigOIgiAOQgfgJgoAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAoAAAfAJIhKAhIBKghIARAHQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgABDgsIAAAAg");
	this.shape_76.setTransform(213.525,68.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF0033").ss(2,1,1).p("AgxAZIBEgiIAfgP");
	this.shape_77.setTransform(217.775,64.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgKgFgLgDQgegIglAAQgzAAglAQQgkAQAAAUg");
	this.shape_78.setTransform(213.05,67.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgLgFgLgDIAfgPIgfAPQgdgIglAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAlAAAdAIIhFAiIBFgiQALADALAFQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAA+gtIAAAAg");
	this.shape_79.setTransform(213.525,68.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF0033").ss(2,1,1).p("AgzAaIBFgiIAigR");
	this.shape_80.setTransform(217.925,64.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgKgFgMgDQgdgIglAAQgzAAglAQQgkAQAAAUg");
	this.shape_81.setTransform(213.05,67.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgLgFgMgDIAjgSIgjASQgdgIgkAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAkAAAdAIIhEAjIBEgjQAMADALAFQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAA9gtIAAAAg");
	this.shape_82.setTransform(213.525,68.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF0033").ss(2,1,1).p("AgmAYIAxgeIAcgR");
	this.shape_83.setTransform(217.075,63.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgKgFgMgDQgHgCgIgBQgBgBAAAAQgXgEgbAAQgzAAglAQQgkAQAAAUg");
	this.shape_84.setTransform(213.05,67.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("ACpgvQgBgUgTgRIhGghQgBgBgBAAQgigJgrAAQhFAAgyAYQgqAVgHAdQgBAFAAAGQAAAAAAABQABAWAVATQALAIARAIQAFADAFACQArASA4ACIgBBXQAhgBAfgEQAjgEASgDQAGgBAEgBQAjgFAUgKQAIgEAGgEAiSBuQAOAEARAFQAiAIAyABQAKAAAKAAAjJAzIgHAUQABAUA9ATAiTAAIg2AzAipgpIggBcABMAgQAYgGAUgKQAIgEAGgEQAPgIAJgKQALgPAAgQIAoBwQgJALgPAJAgKApQAFAAAFAAQAqAAAigJIAeBUACGAIIAzBTAhtAVIglBZ");
	this.shape_85.setTransform(213.55,72.475);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQArgBAiAKIADABIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgLgFgMgDIgPgEIAdgRIgdARIgBAAQgXgEgaAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAaAAAXAEIABAAIgxAfIAxgfIAPAEQAMADALAFQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAAugxIAAAAg");
	this.shape_86.setTransform(213.525,68.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF0033").ss(2,1,1).p("AgkAeIAvgmIAagV");
	this.shape_87.setTransform(216.425,63.925);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgKgFgMgDQgKgDgLgBQgVgEgYAAQgzAAglAQQgkAQAAAUg");
	this.shape_88.setTransform(213.05,67.975);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgLgFgMgDIgVgFIAagVIgaAVQgVgDgXAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAXAAAVADIgvAnIAvgnIAVAFQAMADALAFQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAAogyIAAAAg");
	this.shape_89.setTransform(213.525,68.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF0033").ss(2,1,1).p("AghAfIAqgmIAZgX");
	this.shape_90.setTransform(216.15,63.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgVgJgbgEQgBAAAAAAQgSgDgVAAQgzAAglAQQgkAQAAAUg");
	this.shape_91.setTransform(213.05,67.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgWgKgbgDIAZgXIgZAXIgBgBQgSgCgUAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAQAUAAASACIABABIgqAnIAqgnQAbADAWAKQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAAjgyIAAAAg");
	this.shape_92.setTransform(213.525,68.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FF0033").ss(2,1,1).p("AgZAhIAggpIATgY");
	this.shape_93.setTransform(214.775,63.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgbgMglgDQgLgBgNAAQgzAAglAQQgkAQAAAUg");
	this.shape_94.setTransform(213.05,67.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgcgMgkgDIASgYIgSAYIgYgBQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAIAYABIggAqIAggqQAkADAcAMQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAAUg0IAAAAg");
	this.shape_95.setTransform(213.525,68.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF0033").ss(2,1,1).p("AgSAiIAXgqIAPgZ");
	this.shape_96.setTransform(214.2,63.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgbgMglgDQgDAAgEAAQgIgBgJAAQgzAAglAQQgkAQAAAUg");
	this.shape_97.setTransform(213.05,67.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgcgMgkgDIgIgBIAOgYIgOAYIgQAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAIAQAAIgYArIAYgrIAIABQAkADAcAMQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAAMg1IAAAAg");
	this.shape_98.setTransform(213.525,68.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FF0033").ss(2,1,1).p("AgMAhIAQgqIAJgY");
	this.shape_99.setTransform(213.575,63.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgbgMglgDQgDAAgEAAQgEAAgEAAQgEgBgFAAQgzAAglAQQgkAQAAAUg");
	this.shape_100.setTransform(213.05,67.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAsgBAkALIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgcgMgkgDIgIgBIgIAAIAKgXIgKAXIgIAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAIAIAAIgQArIAQgrIAIAAIAIABQAkADAcAMQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAAEg1IAAAAg");
	this.shape_101.setTransform(213.525,68.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FF0033").ss(2,1,1).p("AgEAjIAFgqIAEgb");
	this.shape_102.setTransform(213.4,63.45);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#663300").ss(1,1,1).p("Ah8AAQAAAWAkAPQAlAQAzAAQA0AAAkgQQAlgPAAgWQAAgBgBgDQgEgSgggOQgUgJgZgEQgPgCgSAAQgCgBgEAAQgCAAgCAAQgzAAglAQQgkAQAAAUg");
	this.shape_103.setTransform(213.05,67.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("ACpgvQgBgUgTgRIhGghQgFgCgGgBQgfgHglAAQhFAAgyAYQgqAVgHAdQgBAFAAAGQAAAAAAABQABAWAVATQALAIARAIQAFADAFACQArASA4ACIgBBXQAhgBAfgEQAjgEASgDQAGgBAEgBQAjgFAUgKQAIgEAGgEAiSBuQAOAEARAFQAiAIAyABQAKAAAKAAAjJAzIgHAUQABAUA9ATAiTAAIg2AzAipgpIggBcABMAgQAYgGAUgKQAIgEAGgEQAPgIAJgKQALgPAAgQIAoBwQgJALgPAJAgKApQAFAAAFAAQAqAAAigJIAeBUACGAIIAzBTAhtAVIglBZ");
	this.shape_104.setTransform(213.55,72.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#996633").s().p("AgJBVQg5gCgrgTIgKgEQgQgIgLgJQgWgTgBgXIAAgBQAAgFACgFQAHgcApgVQAygZBFABQAlgBAfAIIAMADIBFAhQATARABAUIABADIAAABQgBARgLAPQgJAKgOAJIgPAIQgUAKgXAGQgjAJgqAAIgJAAgAgEA0QAzAAAlgQQAkgPAAgVIAAgFQgEgSgggOQgVgJgZgEQgPgCgRgBIgGAAIAEgcIgEAcIgEAAQg0AAgkAQQglAPAAAWQAAAVAlAPQAkAQA0AAIAAAAgAgEA0Qg0AAgkgQQglgPAAgVQAAgWAlgPQAkgQA0AAIAEAAIgFArIAFgrIAGAAQARABAPACQAZAEAVAJQAgAOAEASIAAAFQAAAVgkAPQglAQgzAAIAAAAgAiBAAIAAAAgAAAg1IAAAAg");
	this.shape_105.setTransform(213.525,68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:214.075}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:206}}]}).to({state:[{t:this.shape_7},{t:this.shape_3,p:{x:214.225}},{t:this.shape_6},{t:this.shape_5},{t:this.shape,p:{x:206.15}}]},271).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},4).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},4).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},5).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},5).to({state:[{t:this.shape_7},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},4).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},6).to({state:[{t:this.shape_7},{t:this.shape_44},{t:this.shape_35},{t:this.shape_43},{t:this.shape_42}]},5).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},5).to({state:[{t:this.shape_48},{t:this.shape_49},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},354).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_47},{t:this.shape_51},{t:this.shape_50}]},6).to({state:[{t:this.shape_57},{t:this.shape_52},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},6).to({state:[{t:this.shape_60},{t:this.shape_52},{t:this.shape_47},{t:this.shape_59},{t:this.shape_58}]},6).to({state:[{t:this.shape_64},{t:this.shape_52},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},6).to({state:[{t:this.shape_67},{t:this.shape_52},{t:this.shape_47},{t:this.shape_66},{t:this.shape_65}]},6).to({state:[{t:this.shape_70},{t:this.shape_49},{t:this.shape_47},{t:this.shape_69},{t:this.shape_68}]},6).to({state:[{t:this.shape_73},{t:this.shape_49},{t:this.shape_47},{t:this.shape_72},{t:this.shape_71}]},6).to({state:[{t:this.shape_76},{t:this.shape_49},{t:this.shape_47},{t:this.shape_75},{t:this.shape_74}]},6).to({state:[{t:this.shape_79},{t:this.shape_49},{t:this.shape_47},{t:this.shape_78},{t:this.shape_77}]},6).to({state:[{t:this.shape_82},{t:this.shape_49},{t:this.shape_47},{t:this.shape_81},{t:this.shape_80}]},6).to({state:[{t:this.shape_86},{t:this.shape_49},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},10).to({state:[{t:this.shape_89},{t:this.shape_49},{t:this.shape_47},{t:this.shape_88},{t:this.shape_87}]},15).to({state:[{t:this.shape_92},{t:this.shape_49},{t:this.shape_47},{t:this.shape_91},{t:this.shape_90}]},11).to({state:[{t:this.shape_95},{t:this.shape_49},{t:this.shape_47},{t:this.shape_94},{t:this.shape_93}]},6).to({state:[{t:this.shape_98},{t:this.shape_49},{t:this.shape_47},{t:this.shape_97},{t:this.shape_96}]},13).to({state:[{t:this.shape_101},{t:this.shape_49},{t:this.shape_47},{t:this.shape_100},{t:this.shape_99}]},15).to({state:[{t:this.shape_105},{t:this.shape_49},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},15).to({state:[]},390).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Провода = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Провода
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(2,1,1).p("AxiBVIYuidQDhgXCKAVQDGAfBmB5");
	this.shape.setTransform(770.35,462.0239);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330099").ss(2,1,1).p("AKavuQBZA4AaB0QAZBwgtBoQhJCrjtB3Qg6AdiNA6QiBA1hEAlQh3BAiDBuQhOBBiVCQQhzBwg2BEQhWBsgeBqQgMApgTCZQgPB5gkBC");
	this.shape_1.setTransform(342.36,370.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFCC").ss(5,1,1).p("EAlxAf7Qg7AEgzgfQgVgNgYgWIgdgXEAnBAdRQAUgrATgQQAEgDAHgFIALgHQAlgYAXgbEA2kAdbQAegaAHgHQAVgUANgRQADgDAGgJQAGgIAEgEQAIgIAOgJQAIgFAQgKIArgZAw6/6QgNgCgRADQgIABgXAEQgdAFhCgCQgmgBgbADQgQABgNADEgorgDAQAXAZAJAQIAIAQQABAEADAIQACAGAJAJQAGAGAGALIAMAUQAKARAAAJEg1pgDxQgoAEgyAGQgSABgjAFQgeAHgQADQgbAFgVgBAkKe0QBLgIAsgDQBAgDA2AEA1DcWQgUgmgPgOQgOgLgFgHQgHgLgJgQQgTgegBgBQgJgKgHgO");
	this.shape_2.setTransform(662.0125,273.6694);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFCC").ss(4,1,1).p("AGjDCQAOgKAggLQAhgLANgIQAVgOAXgcIA8hHApmAUQgCgWAMgoQAJgaAEgMIAVg0QAEgBABgBQgCgJAJgLQASgaAKgN");
	this.shape_3.setTransform(202.2292,465.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFCC").ss(2,1,1).p("AeI9gQh+gbh9AxQh+AwhNBnQgjAuggBFQgFAKgwBxQgFANhPCrQgzBugbBMQhEDGAXCdQABAHABAGQADAPADAPAbxclQgmkshekfQhfkfiTkHQhcicgqhPQhLiKgehuQguitAUkwQAPjYABgbQAGiBgLhjA+HdrQB6i1DfjGQEJjdCDhwQDljDCFixQCrjhAxjnQAcitAZhQQAlh5BMg1QAMgIAMgH");
	this.shape_4.setTransform(338.8125,259.3818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Подложка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Подложка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBgwg08IAGOoMgWLBalEBJ5ArVIAyI8EBgwg08MgW3BgREhgwAq1IgFKIMCrggAsEhgwAq1MAR9hfXMCvjgAaEhgwAq1MCqpAAg");
	this.shape.setTransform(637.625,378.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B4513").s().p("EhgwAq1MCqpAAfMAW3hgPIAGOoMgWLBakIgyo9IAyI9MirgAAsg");
	this.shape_1.setTransform(637.625,378.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0522D").s().p("EhgwAvpMAR+hfWMCvjgAaMgW3BgPg");
	this.shape_2.setTransform(637.575,347.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Обложка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Обложка
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AheB3QgbgYAAgmQAAgfAPgTQANgSAagMQAbgKAkgEQAkgEAqgCIAAgIQAAgPgGgKQgGgKgKgGQgLgGgOgCQgOgCgPAAQgTAAgXAFQgYAFgZAJIgCAAIAAgvQAOgEAbgEQAagEAagBQAeAAAWAGQAWAEARALQAQAMAJASQAIASAAAaIAAC4IgwAAIAAgdIgRALQgLAIgKAFQgNAFgPAEQgPADgVAAQgnABgbgZgAAWgCQgdACgRADQgVAHgNALQgNAMAAAUQAAAYAPAMQAPAMAfAAQAYAAAVgKQAVgJASgNIAAhLIg0AEg");
	this.shape.setTransform(907.675,393.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABHCIIAAh7IiOAAIAAB7IgwAAIAAkPIAwAAIAABuICOAAIAAhuIAxAAIAAEPg");
	this.shape_1.setTransform(876.15,393.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhgBpQgjgmgBhCQABhCAjgnQAkgnA8AAQA8AAAlAnQAkAnAABCQAABCgkAmQglAng8AAQg8AAgkgngAg8hNQgVAaAAA0QAAAyAVAbQAWAbAmgBQAmAAAXgaQAWgagBgzQABg0gWgaQgWgagnAAQgmAAgWAag");
	this.shape_2.setTransform(843.45,393.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ah9C+IAAlzIAwAAIAAAcQATgQAYgKQAYgLAaAAQA0AAAdAmQAdAlAABDQAAAggKAbQgKAbgSAUQgRARgXALQgXAJgZABQgWAAgSgGQgSgEgTgJIAABxgAgliJQgVAIgTAOIAACaQAVAJAOADQAPADATAAQAnAAAXgaQAWgZAAgyQAAgygRgYQgSgZglABQgUAAgVAIg");
	this.shape_3.setTransform(812.125,397.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXCIIAAjnIhoAAIAAgoID/AAIAAAoIhoAAIAADng");
	this.shape_4.setTransform(781.675,393.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhZBrQgoglAAhEQAAhBAmgoQAngnA9gBQA6ABAgAgQAfAgAAA8IAAAYIjSAAQAAAYAIATQAIATAOAMQANALATAHQASAFAVAAQAdAAAegLQAdgLANgKIADAAIAAAxQgZAKgZAHQgaAGgcABQhGAAgoglgAg2hSQgXAVgDAhICjAAQAAglgTgUQgTgTgmgBQgmAAgXAXg");
	this.shape_5.setTransform(753.075,393.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ABHCIIAAh7IiOAAIAAB7IgwAAIAAkPIAwAAIAABuICOAAIAAhuIAxAAIAAEPg");
	this.shape_6.setTransform(720.6,393.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhiCIIAAkPIDFAAIAAAoIiVAAIAADng");
	this.shape_7.setTransform(693.725,393.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AheB3QgbgYAAgmQAAgfAPgTQANgSAagMQAbgKAkgEQAkgEAqgCIAAgIQAAgPgGgKQgGgKgKgGQgLgGgOgCQgOgCgPAAQgTAAgXAFQgYAFgZAJIgCAAIAAgvQAOgEAbgEQAagEAagBQAeAAAWAGQAWAEARALQAQAMAJASQAIASAAAaIAAC4IgwAAIAAgdIgRALQgLAIgKAFQgNAFgPAEQgPADgVAAQgnABgbgZgAAWgCQgdACgRADQgVAHgNALQgNAMAAAUQAAAYAPAMQAPAMAfAAQAYAAAVgKQAVgJASgNIAAhLIg0AEg");
	this.shape_8.setTransform(662.325,393.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ABYCIIAAjWIhICLIgjAAIhHiLIAADWIgtAAIAAkPIA7AAIBNCXIBLiXIA7AAIAAEPg");
	this.shape_9.setTransform(629.25,393.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("ABYCIIAAjWIhHCLIgjAAIhHiLIAADWIgtAAIAAkPIA5AAIBOCXIBLiXIA8AAIAAEPg");
	this.shape_10.setTransform(574.15,393.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhfBpQgkgmAAhCQAAhCAkgnQAjgnA8AAQA8AAAkAnQAlAngBBCQABBCglAmQgkAng8AAQg8AAgjgngAg7hNQgXAaAAA0QAAAyAXAbQAVAbAmgBQAmAAAWgaQAXgaAAgzQAAg0gXgaQgVgagnAAQgmAAgVAag");
	this.shape_11.setTransform(539.9,393.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("ABsCpIAAhCIjXAAIAABCIgtAAIAAhpIAgAAQAdgvAQg8QAOg+AAg/ICzAAIAADoIAjAAIAABpgAgjgSQgRAxgVAhICPAAIAAjBIhWAAQgDA8gQAzg");
	this.shape_12.setTransform(506.75,396.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AhfBpQglgmABhCQgBhCAlgnQAkgnA7AAQA9AAAjAnQAkAnAABCQAABCgkAmQgjAng9AAQg7AAgkgngAg7hNQgXAaAAA0QAAAyAXAbQAVAbAmgBQAnAAAVgaQAXgaAAgzQAAg0gXgaQgVgagnAAQgmAAgVAag");
	this.shape_13.setTransform(475.3,393.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgXCIIAAjnIhoAAIAAgoID/AAIAAAoIhoAAIAADng");
	this.shape_14.setTransform(446.325,393.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AhZBrQgoglAAhEQAAhBAmgoQAngnA9gBQA6ABAgAgQAfAgAAA8IAAAYIjSAAQAAAYAIATQAIATAOAMQANALATAHQASAFAVAAQAdAAAegLQAdgLANgKIADAAIAAAxQgZAKgZAHQgaAGgcABQhGAAgoglgAg2hSQgXAVgDAhICjAAQAAglgTgUQgTgTgmgBQgmAAgXAXg");
	this.shape_15.setTransform(417.675,393.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("ABYCIIAAjWIhICLIgjAAIhHiLIAADWIgtAAIAAkPIA7AAIBNCXIBLiXIA7AAIAAEPg");
	this.shape_16.setTransform(383.65,393.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AheB3QgbgZAAglQAAgfAPgTQANgSAagMQAbgLAkgDQAkgEAqgCIAAgIQAAgPgGgKQgGgLgKgFQgLgGgOgCQgOgCgPAAQgTAAgXAFQgYAFgZAJIgCAAIAAgvQAOgDAbgFQAagEAaAAQAeAAAWAEQAWAFARALQAQAMAJASQAIARAAAbIAAC4IgwAAIAAgdIgRALQgLAIgKAEQgNAGgPAEQgPADgVABQgngBgbgYgAAWgDQgdADgRADQgVAHgNALQgNAMAAAVQAAAXAPAMQAPAMAfAAQAYAAAVgKQAVgJASgNIAAhLIg0ADg");
	this.shape_17.setTransform(1212.175,330.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("ABHCIIAAh7IiOAAIAAB7IgwAAIAAkPIAwAAIAABuICOAAIAAhuIAxAAIAAEPg");
	this.shape_18.setTransform(1180.6,330.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AhgBqQgkgnAAhDQAAhCAkgmQAlgnA7AAQA9AAAkAnQAjAmABBCQgBBDgjAnQgkAmg9AAQg7AAglgmgAg8hNQgVAZAAA0QAAAzAVAbQAWAaAmABQAmAAAXgbQAVgaAAg0QAAg0gVgZQgWgagnAAQgmAAgWAag");
	this.shape_19.setTransform(1147.9,330.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Ah9C+IAAlzIAwAAIAAAcQATgQAYgKQAYgKAaAAQA0AAAdAlQAdAlAABCQAAAigKAaQgKAcgSASQgRATgXAJQgXALgZAAQgWgBgSgEQgSgFgTgKIAABygAgliJQgVAJgTANIAACaQAVAJAOADQAPADATAAQAnAAAXgaQAWgaAAgxQAAgxgRgZQgSgYglAAQgUgBgVAJg");
	this.shape_20.setTransform(1116.575,335.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgXCIIAAjnIhoAAIAAgoID/AAIAAAoIhoAAIAADng");
	this.shape_21.setTransform(1086.175,330.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("ABBCIIh2h9IgaAAIAAB9IgwAAIAAkPIAwAAIAAB1QAYAAAPgIQAOgIAKgSIAIgOIAGgPQANgbAUgOQAUgNAlAAIAWAAIAAAnIgVAAQgUAAgMAIQgLAIgJAVQgLAXgLALQgMAMgLAFICICQg");
	this.shape_22.setTransform(1059.825,330.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AhZBrQgoglAAhEQAAhBAmgoQAngnA9AAQA6gBAgAhQAfAgAAA8IAAAXIjSAAQAAAaAIASQAIATAOAMQANALATAHQASAFAVAAQAdABAegLQAdgMANgKIADAAIAAAxQgZAKgZAHQgaAHgcAAQhGgBgogkgAg2hTQgXAWgDAgICjAAQAAgkgTgUQgTgTgmgBQgmABgXAVg");
	this.shape_23.setTransform(1026.425,330.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("Ah7CIIgLAAIAAgoIACAAIAGAAIAGABQAHgBAGgCQAHgBAEgEQANgNAIgdQAIgdADg2IACgvIACg0IDEAAIAAEPIgxAAIAAjpIhqAAIgBAnIgCAiQgBAogFAYQgDAYgIARQgFAOgIAKQgHAJgJAIQgJAHgKAEQgLADgNAAIgMAAg");
	this.shape_24.setTransform(992.35,330.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AhNCIQgYgFgRgHIAAgyIADAAQAPALAaAKQAZAIAcABQAngBAagXQAZgYADgtIiQAAIAAgkICPAAQgFgngYgTQgYgTgkAAQgXAAgXAIQgXAHgXAQIgDAAIAAgyQAQgHAZgHQAZgGAagBQAfABAaAHQAZAJATARQATARAKAaQAKAZAAAkQAABDgnAoQgoAohCgBQgaABgZgHg");
	this.shape_25.setTransform(963.375,330.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AheB3QgbgZAAglQAAgfAPgTQANgSAagMQAbgLAkgDQAkgEAqgCIAAgIQAAgPgGgKQgGgLgKgFQgLgGgOgCQgOgCgPAAQgTAAgXAFQgYAFgZAJIgCAAIAAgvQAOgDAbgFQAagEAaAAQAeAAAWAEQAWAFARALQAQAMAJASQAIARAAAbIAAC4IgwAAIAAgdIgRALQgLAIgKAEQgNAGgPAEQgPADgVABQgngBgbgYgAAWgDQgdADgRADQgVAHgNALQgNAMAAAVQAAAXAPAMQAPAMAfAAQAYAAAVgKQAVgJASgNIAAhLIg0ADg");
	this.shape_26.setTransform(914.025,330.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("ABsCpIAAhCIjXAAIAABCIgtAAIAAhpIAgAAQAdguAQg9QAOg+AAg/ICzAAIAADoIAiAAIAABpgAgkgSQgQAygVAgICPAAIAAjCIhWAAQgDA+gRAyg");
	this.shape_27.setTransform(882.05,333.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("ABNCIIAAhsIg5AAIhXBsIg5AAIBghwQglgKgRgTQgRgUAAghQAAgWAKgPQAKgPAQgKQAPgJAUgDQAUgDAXAAIBuAAIAAEPgAgLhiQgJACgKAFQgKAFgFAKQgFAJAAAKQAAAOADAIQADAIAKAIQAJAHAOADQAMACARAAIA7AAIAAhcIg9AAIgbABg");
	this.shape_28.setTransform(849.225,330.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("Ah9C+IAAlzIAwAAIAAAcQATgQAYgKQAYgKAaAAQA0AAAdAlQAdAlAABCQAAAigKAaQgKAcgSASQgRATgXAJQgXALgZAAQgWgBgSgEQgSgFgTgKIAABygAgliJQgVAJgTANIAACaQAVAJAOADQAPADATAAQAnAAAXgaQAWgaAAgxQAAgxgRgZQgSgYglAAQgUgBgVAJg");
	this.shape_29.setTransform(819.625,335.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AheB3QgbgZAAglQAAgfAPgTQANgSAagMQAbgLAkgDQAkgEAqgCIAAgIQAAgPgGgKQgGgLgKgFQgLgGgOgCQgOgCgPAAQgTAAgXAFQgYAFgZAJIgCAAIAAgvQAOgDAbgFQAagEAaAAQAeAAAWAEQAWAFARALQAQAMAJASQAIARAAAbIAAC4IgwAAIAAgdIgRALQgLAIgKAEQgNAGgPAEQgPADgVABQgngBgbgYgAAWgDQgdADgRADQgVAHgNALQgNAMAAAVQAAAXAPAMQAPAMAfAAQAYAAAVgKQAVgJASgNIAAhLIg0ADg");
	this.shape_30.setTransform(785.475,330.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("Ag9CKQgbgGgagLIAAgzIADAAQATAQAdAJQAdAJAbAAQAMgBAOgCQANgCAKgFQALgHAGgIQAHgHAAgPQAAgOgGgKQgHgIgKgEQgLgFgPgBIgagBIgqAAIAAgnIAdAAIAaAAQAQgBALgDQANgEAIgHQAIgIAAgRQAAgLgGgHQgHgJgJgDQgJgEgMgCIgUgBQgagBgZAIQgZAGgSANIgDAAIAAgzQAVgHAZgDQAYgFAYAAQAUAAAUAEQATADARAIQARAJALAOQALAOAAAVQAAAWgOAQQgOAQgYAHIAAACQAbAGAPAQQAQAQAAAcQAAAXgLAQQgLAQgSAJQgRAKgVAFQgVAEgUAAQgeAAgbgFg");
	this.shape_31.setTransform(756.275,330.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AhfBqQgkgnAAhDQAAhCAkgmQAjgnA8AAQA8AAAkAnQAlAmgBBCQABBDglAnQgkAmg8AAQg8AAgjgmgAg7hNQgXAZAAA0QAAAzAXAbQAVAaAmABQAmAAAWgbQAXgaAAg0QAAg0gXgZQgVgagnAAQgmAAgVAag");
	this.shape_32.setTransform(708.65,330.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AhiCIIAAkPIDFAAIAAAoIiVAAIAADng");
	this.shape_33.setTransform(682.575,330.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AhgBqQgjgngBhDQABhCAjgmQAlgnA7AAQA9AAAkAnQAjAmABBCQgBBDgjAnQgkAmg9AAQg7AAglgmgAg8hNQgVAZAAA0QAAAzAVAbQAWAaAmABQAmAAAXgbQAVgaAAg0QAAg0gVgZQgWgagnAAQgmAAgWAag");
	this.shape_34.setTransform(652,330.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("ABICIIAAh7IiPAAIAAB7IgwAAIAAkPIAwAAIAABuICPAAIAAhuIAwAAIAAEPg");
	this.shape_35.setTransform(619.3,330.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AhyCIIAAkPIAxAAIAABqIBBAAQAfAAASADQASADASANQAPAKAHAPQAHARABAUQAAAUgJAQQgIAQgPAKQgRAMgTAFQgTAFgdAAgAhBBkIAuAAQAZAAAOgCQAOgDAKgFQALgHAFgIQAFgJgBgNQABgNgFgJQgEgKgLgGQgLgGgNgBQgOgBgZAAIgvAAg");
	this.shape_36.setTransform(588.75,330.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("Ah8CIIgLAAIAAgoIADAAIAGAAIAHABQAFgBAHgCQAGgBAFgEQAOgNAHgdQAIgdADg2IACgvIABg0IDEAAIAAEPIgvAAIAAjpIhrAAIgBAnIgBAiQgDAogEAYQgEAYgGARQgHAOgHAKQgIAJgIAIQgJAHgLAEQgKADgNAAIgNAAg");
	this.shape_37.setTransform(554.2,330.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AhZBrQgoglAAhEQAAhBAmgoQAngnA9AAQA6gBAgAhQAfAgAAA8IAAAXIjSAAQAAAaAIASQAIATAOAMQANALATAHQASAFAVAAQAdABAegLQAdgMANgKIADAAIAAAxQgZAKgZAHQgaAHgcAAQhGgBgogkgAg2hTQgXAWgDAgICjAAQAAgkgTgUQgTgTgmgBQgmABgXAVg");
	this.shape_38.setTransform(524.325,330.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("ABsCpIAAhCIjXAAIAABCIgsAAIAAhpIAfAAQAdguAQg9QAOg+AAg/ICzAAIAADoIAiAAIAABpgAgkgSQgQAygVAgICPAAIAAjCIhVAAQgEA+gRAyg");
	this.shape_39.setTransform(491.4,333.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AhOC6IA2hxIhzkCIA1AAIBXDIIBYjIIAzAAIinFzg");
	this.shape_40.setTransform(460.35,335.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AhZBrQgoglAAhEQAAhBAmgoQAngnA9AAQA6gBAgAhQAfAgAAA8IAAAXIjSAAQAAAaAIASQAIATAOAMQANALATAHQASAFAVAAQAdABAegLQAdgMANgKIADAAIAAAxQgZAKgZAHQgaAHgcAAQhGgBgogkgAg2hTQgXAWgDAgICjAAQAAgkgTgUQgTgTgmgBQgmABgXAVg");
	this.shape_41.setTransform(410.675,330.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("ABJCIIAAjMIiVDMIgsAAIAAkPIAwAAIAADIICUjIIAtAAIAAEPg");
	this.shape_42.setTransform(378.125,330.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("ABHCIIAAh7IiOAAIAAB7IgwAAIAAkPIAwAAIAABuICOAAIAAhuIAxAAIAAEPg");
	this.shape_43.setTransform(344.6,330.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AhZBrQgoglAAhEQAAhBAmgoQAngnA9AAQA6gBAgAhQAfAgAAA8IAAAXIjSAAQAAAaAIASQAIATAOAMQANALATAHQASAFAVAAQAdABAegLQAdgMANgKIADAAIAAAxQgZAKgZAHQgaAHgcAAQhGgBgogkgAg2hTQgXAWgDAgICjAAQAAgkgTgUQgTgTgmgBQgmABgXAVg");
	this.shape_44.setTransform(312.225,330.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("Ah8CIIgKAAIAAgoIACAAIAGAAIAHABQAFgBAHgCQAGgBAFgEQAOgNAHgdQAIgdADg2IACgvIABg0IDEAAIAAEPIgvAAIAAjpIhqAAIgCAnIgBAiQgDAogDAYQgEAYgHARQgHAOgHAKQgIAJgJAIQgIAHgLAEQgLADgMAAIgNAAg");
	this.shape_45.setTransform(278.15,330.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AhZBrQgoglAAhEQAAhBAmgoQAngnA9AAQA6gBAgAhQAfAgAAA8IAAAXIjSAAQAAAaAIASQAIATAOAMQANALATAHQASAFAVAAQAdABAegLQAdgMANgKIADAAIAAAxQgZAKgZAHQgaAHgcAAQhGgBgogkgAg2hTQgXAWgDAgICjAAQAAgkgTgUQgTgTgmgBQgmABgXAVg");
	this.shape_46.setTransform(248.275,330.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("ABsCpIAAhCIjXAAIAABCIgtAAIAAhpIAgAAQAeguAPg9QAOg+AAg/ICzAAIAADoIAiAAIAABpgAgkgSQgQAygVAgICPAAIAAjCIhWAAQgDA+gRAyg");
	this.shape_47.setTransform(215.35,333.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AhZBrQgoglAAhEQAAhBAmgoQAngnA9AAQA6gBAgAhQAfAgAAA8IAAAXIjSAAQAAAaAIASQAIATAOAMQANALATAHQASAFAVAAQAdABAegLQAdgMANgKIADAAIAAAxQgZAKgZAHQgaAHgcAAQhGgBgogkgAg2hTQgXAWgDAgICjAAQAAgkgTgUQgTgTgmgBQgmABgXAVg");
	this.shape_48.setTransform(184.275,330.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("Ah9C+IAAlzIAwAAIAAAcQATgQAYgKQAYgKAaAAQA0AAAdAlQAdAlAABCQAAAigKAaQgKAcgSASQgRATgXAJQgXALgZAAQgWgBgSgEQgSgFgTgKIAABygAgliJQgVAJgTANIAACaQAVAJAOADQAPADATAAQAnAAAXgaQAWgaAAgxQAAgxgRgZQgSgYglAAQgUgBgVAJg");
	this.shape_49.setTransform(153.175,335.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("ABHCIIAAjoIiOAAIAADoIgwAAIAAkPIDvAAIAAEPg");
	this.shape_50.setTransform(119.05,330.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AhICxQgigNgXgYQgWgYgNgkQgNgjABgtQgBgrANgjQAMgkAYgZQAXgYAhgNQAigMAmAAQApAAAhANQAhAMAWAYQAXAYANAkQAMAjAAAsQAAAtgMAkQgNAjgXAYQgYAYgfANQghAMgpAAQgoAAgggMgAhahsQgiAmABBGQgBBIAjAmQAhAmA4AAQA5AAAigmQAigmAAhIQAAhGgigmQghgng6AAQg5AAghAng");
	this.shape_51.setTransform(81.65,326.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCC99").s().p("EhjrA4QMAAAhwfMDHXAAAMAAABwfg");
	this.shape_52.setTransform(638.025,365.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},99).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Обводка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Обводка
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Av2UhQgKgBgHgIQgHgIABgKQABgKAIgHQAIgHAKABIAWABIAkAAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIgkAAIgBAAIgZgBgAPHUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgANPUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgALXUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAJfUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAHnUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAFvUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAD3UiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAB/UiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAAHUiIg7AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA7AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAhwUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAjoUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAlgUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAnYUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgApQUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgArIUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAtAUiIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAPyUaQgIgGgBgKQgBgKAGgIQAHgJAKgBQAdgDAagJQAKgDAJAFQAKAEADAKQADAKgFAJQgEAJgKAEQggAKghAEIgDAAQgJAAgHgGgAw1UWQgggJgdgPQgJgFgDgKQgDgKAFgJQAFgJAKgDQAKgDAJAFQAYANAaAHQAKADAFAJQAFAJgDAKQgCAKgJAFQgGADgGAAIgHgBgARuT5QgKgCgFgJQgFgJACgKQADgKAJgFQAXgOAUgTQAIgHAKAAQALABAGAIQAHAHAAALQgBAKgHAHQgZAWgbAQQgGAEgGAAIgHgBgAyoTaQgNgLgNgMQgLgMgKgMQgGgIABgKQABgKAIgHQAIgGAKABQAKABAHAIIASATQAKALALAJQAJAGABALQABAKgHAIQgGAIgKABIgDAAQgJAAgHgFgAS+SkQgIgGgBgKQgCgKAGgJQASgWALgZQAFgJAKgDQAKgEAJAFQAJAFAEAKQADAJgFAKQgOAcgUAbQgGAIgKABIgEABQgIAAgHgGgAzsSDQgKgDgFgJQgQgdgJgfQgDgKAFgKQAFgJAKgDQAKgCAJAEQAJAGADAJQAIAbANAYQAFAJgDAKQgDAKgJAFQgGADgGAAIgHgBgAT7Q+QgKgDgGgIQgFgJADgKQAGgaABgdQAAgKAIgHQAHgHALAAQAKAAAHAIQAHAIAAAKQgBAhgIAgQgCAKgJAFQgGAEgHAAIgGgBgA0XQJQgIgGgBgLIgBgbIAAghQAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAAhIABAYQABAKgHAIQgHAIgKABIgCAAQgJAAgHgHgAUJPHQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IOZQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJNPQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IMhQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJLXQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IKpQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJJfQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IIxQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJHnQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IG5QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJFvQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IFBQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJD3QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IDJQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJB/QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IBRQgKAAgIgHQgHgIAAgKIAAg7QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA7QAAAKgHAIQgIAHgKAAIAAAAgAUJAHQgKAAgIgHQgHgHAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAHQgIAHgKAAIAAAAgA0IgmQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJhwQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IieQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJjoQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IkWQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJlgQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0ImOQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAUJnYQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA0IoGQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAI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");
	this.shape.setTransform(948.8507,552.8501);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AxzTaQgLgBgGgIQgHgIAAgKQABgKAIgHQAIgHAKABIAXABIAiAAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgLAAIgiAAIgBAAIgZgBgAQ4TbIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAPATbIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgANJTbIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgALQTbIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAJYTbIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAHhTbIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAFoTbIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgADwTbIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAB5TbIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAAATbIg6AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA6AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAh3TbIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAjuTbIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAlnTbIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAnfTbIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgApWTbIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgArPTbIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAtHTbIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAu+TbIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgARlTUQgIgHgBgKQgBgKAHgIQAHgIAKgBQAcgCAbgIQAKgDAJAFQAJAFADAKQADAKgFAJQgFAJgKADQgfAJgiADIgCAAQgJAAgHgGgAyzTPQgfgJgdgPQgJgFgDgKQgDgKAFgJQAEgJAKgDQAKgDAJAFQAYANAbAHQAKADAFAJQAFAJgDAKQgDAKgJAFQgGADgGAAIgHgBgAThS3QgJgDgFgJQgFgJACgKQADgKAKgFQAXgNAVgRQAIgHAKAAQAKABAHAIQAHAIgBAKQgBALgIAGQgZAWgcAPQgFADgGAAIgIgBgA0lSTQgOgLgMgMQgMgMgJgMQgHgIABgKQABgKAIgHQAIgGAKABQALABAGAIIASATQALALALAJQAIAHABAKQABAKgGAIQgGAIgLABIgDAAQgIAAgHgFgAU0RmQgIgHgBgKQgBgKAHgJQASgVAMgYQAFgJAKgDQAKgDAJAFQAJAFAEAKQACAKgFAJQgPAcgVAaQgGAHgLACIgCAAQgJAAgHgGgA1qQ8QgJgDgFgJQgQgdgJggQgDgJAEgKQAGgJAKgDQAJgCAKAEQAJAGACAKQAIAaAOAYQAEAJgCAKQgDAKgKAFQgFADgGAAIgIgBgAV1QBQgKgDgFgJQgFgJADgKQAHgaACgcQAAgKAIgHQAIgHAKABQAKABAHAIQAHAHgBALQgCAhgIAfQgDAKgJAFQgGADgGAAIgHgBgA2VPCQgIgGAAgLIgCgbIAAghQAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAAhIAAAYQABAKgHAIQgGAIgKABIgDAAQgJAAgHgHgAWHOLQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GNSQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHMTQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GLaQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHKbQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GJiQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHIjQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GHqQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHGrQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GFyQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHEzQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GD6QgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHC7QgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GCCQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHBDQgLAAgHgHQgIgIABgKIAAg7QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA7QABAKgIAIQgHAHgKAAIAAAAgA2GAKQgKAAgHgHQgIgHAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAHQgHAHgKAAIgBAAgAWHg0QgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GhtQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHisQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GjlQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHkkQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GldQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHmcQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GnVQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHoUQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GpNQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHqMQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2GrFQgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHsEQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA2Gs9QgKAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIgBAAgAWHt8QgLAAgHgHQgIgIABgKQAAgdgGgaQgBgKAGgJQAFgJAKgBQALgCAIAFQAJAGACAKQAFAgAAAhQABAKgIAIQgHAHgKAAIAAAAgA2Fu0QgKgCgGgJQgGgIACgKQAFggAMgeQAEgKAKgEQAJgEAKAEQAJAEAEAJQAFAKgEAJQgKAZgFAbQgCAKgIAGQgHAFgIAAIgEAAgAVnvzQgKgEgFgKQgKgZgRgXQgFgIACgKQABgLAJgFQAIgGAKABQALACAGAJQASAbAOAeQAEAJgEAJQgEAKgKAFQgEACgFAAQgFAAgEgCgA1iwmQgJgGgBgKQgDgKAGgJQASgaAYgYIABgBQAHgHAKAAQALAAAHAHQAIAIAAAKQAAAKgIAIIgBABQgUAUgPAWQgGAJgKACIgFABQgIAAgGgFgAUaxaQgVgUgXgQQgJgGgCgKQgCgKAGgJQAGgIAKgCQAKgCAJAGQAaARAZAYQAHAHAAAKQABALgIAHQgHAIgKAAIgBAAQgJAAgIgHgA0Dx3QgLgDgFgIQgGgJACgKQACgKAJgGQAbgSAfgMQAJgEAKAEQAJAEAEAKQAEAKgEAJQgEAJgKAEQgZAKgYAQQgGAEgHAAIgFAAgAS9yXQgYgJgcgEQgKgCgGgIQgGgJABgKQACgKAIgGQAJgGAKABQAgAFAeAMQAKADAEAKQAEAJgDAKQgEAKgJAEQgFACgFAAQgFAAgFgCgAyeyoQgIgGgCgKQgCgKAGgJQAGgIAKgCQAcgFAeAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgLAAIg8AAQgaAAgXAEIgFABQgHAAgHgFgARRyoIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAPayoIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgANiyoIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgALpyoIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAJyyoIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAH6yoIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAGByoIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAEKyoIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgACSyoIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAAZyoIg6AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA6AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAhdyoIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAjVyoIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAlOyoIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAnFyoIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAo9yoIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAq2yoIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAstyoIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAulyoIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAg");
	this.shape_1.setTransform(180.7999,550.8501);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AwcRaQghgBgfgGQgKgCgGgJQgGgJADgKQACgKAIgGQAJgFAKACQAaAGAdAAQAKAAAHAIQAHAHAAAKQAAALgIAHQgHAHgKAAIAAAAgAQFRTQgHgIAAgKQAAgKAHgIQAIgHAKAAIACAAQAcAAAZgFQALgBAIAFQAJAGACAKQABALgGAIQgFAJgLABQgeAGggAAIgCAAIAAAAQgKAAgIgHgAPbRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgANjRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgALrRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAJzRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAH7RaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAGDRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAELRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgACTRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAAbRaIg7AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA7AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAhcRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAjURaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAlMRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAnERaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAo8RaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAq0RaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAssRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAukRaIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgASCRCQgJgEgEgJQgEgKAEgJQAEgKAJgEQAZgLAYgQQAIgFALACQAKABAFAJQAGAIgBAKQgCALgJAGQgbATgeAMQgFACgFAAQgFAAgFgCgAyZRAQgegNgbgUQgJgGgCgKQgBgKAGgJQAGgIAKgCQAKgBAJAGQAWAQAZALQAKAEAEAKQAEAKgEAJQgFAJgJAEQgFACgFAAQgFAAgEgCgATeP4QgHgHAAgLQAAgKAHgIQATgTAPgWQAGgJAKgCQAKgBAJAGQAJAFABAKQACAKgFAJQgRAZgXAXQgHAIgLAAIAAAAQgKAAgIgHgAzzP8QgKAAgHgIQgXgYgRgaQgFgJACgKQACgKAJgGQAJgFAKACQAKACAGAJQAOAXATAUQAHAHAAALQAAAKgIAHQgHAHgKAAIgBAAgAUoObQgKgEgEgJQgEgKAEgKQAJgZAFgbQACgKAIgGQAIgGALABQAKACAGAIQAGAJgCAKQgFAhgMAdQgDAKgKAEQgFACgFAAQgEAAgFgBgA07OXQgKgFgEgJQgLgfgFggQgCgLAGgIQAGgIALgCQAKgCAIAGQAIAGACALQAFAcAKAZQADAKgEAJQgFAKgJADQgFACgEAAQgFAAgFgCgAVFMnQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EMhQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFKvQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EKpQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFI3QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EIxQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFG/QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EG5QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFFHQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EFBQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFDPQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EDJQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFBXQgKAAgIgHQgHgIAAgKIAAg8QAAgJAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAJIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EBRQgKAAgIgHQgHgIAAgKIAAg7QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA7QAAAKgHAIQgIAHgKAAIAAAAgAVFggQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EgmQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFiYQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EieQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFkQQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EkWQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFmIQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EmOQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFoAQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1EoGQgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFp4QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgA1Ep+QgKAAgIgHQgHgIAAgKIAAg8QAAgKAHgIQAIgHAKAAQAKAAAIAHQAHAIAAAKIAAA8QAAAKgHAIQgIAHgKAAIAAAAgAVFrwQgKAAgIgHQgHgIAAgKIAAgLQAAgXgEgWQgBgKAGgJQAGgIAKgCQAKgBAJAGQAIAGACAKQAEAaAAAbIAAALQAAAKgHAIQgIAHgKAAIAAAAgA1Er2QgKAAgIgHQgHgIAAgKIAAgFQAAgeAFgcQACgKAIgHQAJgFAKACQAKABAGAJQAGAIgCAKQgEAYAAAaIAAAFQAAAKgHAIQgIAHgKAAIAAAAgAUotoQgKgFgDgJQgKgagPgXQgGgJADgKQACgKAIgGQAJgFAKACQAKACAGAJQASAcALAeQAEAKgEAJQgFAKgJADQgFACgEAAQgFAAgFgCgA05tsQgJgEgEgKQgFgJAEgKQAMgeATgbQAGgJAKgCQAKgCAJAGQAIAGACAKQACAKgGAJQgPAXgKAZQgEAJgKAFQgFACgFAAQgEAAgFgCgATvvKQgLgBgGgJIgDgCQgRgSgTgOQgJgGgCgKQgBgKAGgJQAGgIAKgCQAKgBAIAGQAXAQAVAUIAGAIQAGAIgBAKQgBAKgIAHQgHAFgIAAIgDAAgAzsvPQgKAAgIgHQgHgIAAgKQAAgKAHgIQAYgXAZgRQAJgGAKACQAKACAGAIQAFAJgCAKQgBAKgJAGQgWAPgTAUQgIAHgKAAIAAAAgASGwSQgZgKgbgGQgLgCgFgJQgGgIACgLQACgKAJgFQAIgGALACQAgAGAeANQAJAFAEAKQAEAJgEAJQgEAKgKAEQgFACgEAAQgFAAgFgDgAyUwUQgKgEgEgJQgEgKAEgJQAFgKAJgEQAegMAggGQALgBAIAFQAJAGACAKQABALgGAIQgFAJgLABQgbAGgZAKQgFACgEAAQgFAAgFgDgAQbwnIgCAAIg6AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA6AAIACAAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAOjwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAMrwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAKzwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAI7wnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAHDwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAFLwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgADTwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgABbwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAgcwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAiUwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAkMwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAmEwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAn8wnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAp0wnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgArswnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAtkwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAgAvcwnIg8AAQgKAAgIgHQgHgIAAgKQAAgKAHgIQAIgHAKAAIA8AAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAHgKAAIAAAAg");
	this.shape_2.setTransform(569.55,545.4502);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(432).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},2).wait(646));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(664).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).wait(1).to({_off:true},5).wait(386));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(914).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).wait(6).to({_off:true},1).wait(231));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Миллиампертметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Миллиампертметр
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AglAhIABgCIADAAQAEAAADgCQACgCACgGIAWgqQABgGAAgCQAAAAAAAAQgBgBAAAAQAAAAgBAAQgBgBgBAAIgCAAIAAgBIAYAAQAJAAAEABQAEACACAFQABAEgDAGQgEAIgIAFQgHAFgLgBIgEAAIgFgBIgJATQgDAGAAACQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIADAAIgBACgAALgcIgNAcIAEAAIADAAQAFAAAGgDQAFgEADgGQADgEAAgEQAAgEgDgBQgCgDgEAAIgHABg");
	this.shape.setTransform(612.2,568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgkAhIABgCIADAAQADAAAEgCQABgCADgGIAYgxIgHAAIgHAAIgGAEQgDADgCAFIgCAAIAIgQIA1AAIgHAQIgCAAIACgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCgDAAIgJAAIgZAxQgDAGABACQABACAEAAIACAAIgBACg");
	this.shape_1.setTransform(607.5,568);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgpAhIABgCIADAAIAFgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAIAEgHIAVgqIADgIQgBgCgEAAIgDAAIABgBIAyAAIgGAPIgCAAQABgGAAgCQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgHgBIgSAAIgMAaIAOAAQAFABADgCQAEgDADgFIABAAIgLAWIgBAAIABgGIgCgDIgFgBIgOAAIgKAWIgCAGIAAABIAEABIALAAIAHgBQADgBADgDIALgJIACAAIgOARg");
	this.shape_2.setTransform(600.425,568);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgBAhIABgCIACAAQAEAAADgCQABgCADgGIAWgrIg0A3IgCAAIADg3IgXArQgDAGABACQABACAEAAIACAAIgBACIgXAAIABgCIACAAQAFAAACgCQACgCADgGIAVgqIACgGQABAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIgFgBIABgBIATAAIgCAzIAwgzIATAAIgBABIgCAAQgEABgEACQgCACgCAFIgWAqQgCAGABACQAAAAAAABQAAAAABAAQAAABABAAQABAAABAAIADAAIgBACg");
	this.shape_3.setTransform(593.2,568);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgkAhIABgCIACAAQAFAAACgCQACgCADgGIAYgxIgHAAIgGAAIgHAEQgDADgDAFIgCAAIAJgQIA1AAIgHAQIgCAAIACgHQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgDgCgEAAIgJAAIgXAxQgEAGABACQABACAEAAIACAAIgBACg");
	this.shape_4.setTransform(586.4,568);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AglAhIABgCIACAAQAFAAADgCQABgCADgGIAWgqQABgGAAgCQAAAAAAAAQgBgBAAAAQAAAAgBAAQgBgBgBAAIgCAAIAAgBIAYAAQAJAAAEABQAEACACAFQABAEgDAGQgEAIgHAFQgJAFgJgBIgFAAIgFgBIgJATQgDAGAAACQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIADAAIgBACgAALgcIgMAcIADAAIADAAQAFAAAGgDQAGgEADgGQACgEAAgEQAAgEgCgBQgDgDgEAAIgHABg");
	this.shape_5.setTransform(579.45,568);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgpAhIABgCIADAAIAFgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAEgHIAVgqIADgIQgBgCgEAAIgDAAIABgBIAyAAIgGAPIgCAAQABgGAAgCQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgHgBIgSAAIgMAaIAOAAQAFABADgCQAEgDADgFIABAAIgLAWIgBAAIABgGIgCgDIgFgBIgOAAIgKAWIgCAGIAAABIAEABIALAAIAHgBQADgBADgDIALgJIACAAIgOARg");
	this.shape_6.setTransform(573.775,568);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgKAhIABgCQAHAAACgBIAFgJIAZgyIgeAAIgYAyQgEAHABABQAAACAHAAIgBACIgcAAIAAgCQAGAAADgCQADgBADgHIAVgpQADgHgBgCQgBgBgGgBIABgBIBDAAIAAABQgHABgCABQgDACgDAHIgVApQgDAHABABQABACAGAAIgBACg");
	this.shape_7.setTransform(567.45,568);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgBAhIABgCIACAAQAEAAACgCQADgCACgGIAWgrIg0A3IgCAAIADg3IgXArQgDAGABACQABACAEAAIACAAIgBACIgXAAIABgCIACAAQAFAAACgCQACgCADgGIAVgqIACgGQABAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIgFgBIABgBIATAAIgCAzIAwgzIATAAIAAABIgDAAQgEABgDACQgCACgDAFIgWAqQgCAGABACQAAAAAAABQAAAAABAAQAAABABAAQABAAABAAIADAAIgCACg");
	this.shape_8.setTransform(559.35,568);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAJAiIABgCIAGgBIACgDIACgHIAAgJIgZAAIgJAKIgEAGQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAACAFAAIgBACIgUAAIAAgCIAHgCIAKgJIAxg2IACAAIgFA2QAAAHABACQABACAFAAIgBACgAgBAIIAVAAIACgag");
	this.shape_9.setTransform(549.75,567.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgKAhIABgCQAGAAADgCQABgBAEgHIASglIgwAmIgDAGIACACIAGABIgBACIgdAAIABgCQAGAAADgCQADgBADgHIAVgpQADgHgBgCQgBgBgFgBIAAgBIAcAAIgBABQgHABgCABQgBACgEAHIgTAlIAygnQACgFgBgCQgBgBgGgBIAAgBIAdAAIAAABQgHABgCABQgDACgDAHIgVApQgDAHABABQABACAGAAIgBACg");
	this.shape_10.setTransform(544.15,568);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AguAgQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAEgBIADACIADABQAEAAAGgHQAHgHAKgTIAGgNQADgHgBgCQgBgCgFAAIAAgCIA1AAIgBACQgGAAgDACQgCACgEAHIgUAoQgEAHABABQABACAGABIgBACIgbAAIABgCQAGgBADgCQACgBACgHIAZgxIgUAAIgJATQgNAbgKAIQgIAJgJAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_11.setTransform(537.175,568.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AguAgQAAgBgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIACgDIAEgBIADACIADABQAEAAAGgHQAHgHAKgTIAGgNQADgHgBgCQgBgCgFAAIAAgCIA1AAIgBACQgGAAgDACQgCACgEAHIgUAoQgEAHABABQABACAGABIgBACIgbAAIABgCQAGgBADgCQACgBACgHIAZgxIgUAAIgJATQgNAbgKAIQgIAJgJAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_12.setTransform(530.375,568.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgKAhIABgCQAGAAADgCQACgBADgHIASglIgwAmIgDAGIABACIAHABIgBACIgcAAIAAgCQAGAAADgCQADgBADgHIAVgpQADgHgBgCQgBgBgGgBIABgBIAcAAIgBABQgHABgCABQgBACgEAHIgSAlIAwgnQADgFgBgCQgBgBgGgBIABgBIAcAAIAAABQgHABgCABQgDACgDAHIgVApQgDAHABABQABACAGAAIgBACg");
	this.shape_13.setTransform(523.35,568);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgBAhIABgCIACAAQAEAAACgCQADgCACgGIAWgrIg0A3IgCAAIADg3IgXArQgDAGABACQABACAEAAIACAAIgBACIgXAAIABgCIACAAQAFAAACgCQACgCADgGIAVgqIACgGQABAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIgFgBIABgBIATAAIgCAzIAwgzIATAAIgBABIgCAAQgEABgDACQgCACgDAFIgVAqQgDAGABACQAAAAAAABQAAAAABAAQAAABABAAQABAAABAAIADAAIgCACg");
	this.shape_14.setTransform(515.25,568);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgIACgHQADgGAFgDQAEgCACgBQAGAAAFAHQAGAHAAANQAAAJgDAGQgCAHgEADQgEACgEAAQgHABgFgKgAgEgVQgDACAAAIIgBAMQgBALADAHQADAGADAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCACgEQACgHAAgLQAAgJgCgHQgCgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCADg");
	this.shape_15.setTransform(624.9,521.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgIADgHQADgGAEgDQADgCADgBQAGAAAFAHQAGAHAAANQAAAJgDAGQgCAHgFADQgEACgDAAQgHABgFgKgAgDgVQgEACgBAIIgBAMQAAALADAHQADAGADAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQABgCABgEQACgHAAgLQAAgJgCgHQgBgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgCADg");
	this.shape_16.setTransform(620.9,521.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAbIAAgCIAEAAIACgCIAAgGIAAgbIAAgIIgBgBIgCgBIgEABIAAgBIAMgGIABAAIAAArIAAAGIACACIAEAAIAAACg");
	this.shape_17.setTransform(616.875,521.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJACgGQADgHAFgDQAEgCACAAQAGAAAFAFQAGAJAAAMQAAAIgDAHQgCAGgEADQgEAEgEAAQgHgBgFgIgAgEgWQgDAEAAAGIgBAOQgBAKADAHQADAGADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCACgFQACgGAAgLQAAgKgCgFQgCgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCACg");
	this.shape_18.setTransform(617.25,511.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAcIAAgCQAGAAAEgCQAEgDADgFQAEgGACgHQgGAEgEAAQgGAAgEgEQgEgEAAgGQAAgIAEgFQAFgHAHABQAGgBAFAGQAGAGAAALQAAAHgFAIQgEAIgIAEQgFAEgHABgAgGgVQgDADAAAGQAAAIAEAFQACACADAAIAEAAIAFgCIAAgIIgBgIQgBgFgDgCQgCgCgCAAQgDAAgDADg");
	this.shape_19.setTransform(613.225,511.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJADgGQADgHAEgDQADgCADAAQAGAAAFAFQAGAJAAAMQAAAIgDAHQgCAGgFADQgEAEgDAAQgHgBgFgIgAgDgWQgDAEgCAGIgBAOQAAAKADAHQADAGADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBQABgCABgFQACgGAAgLQAAgKgCgFQgBgFgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgCACg");
	this.shape_20.setTransform(606.95,507.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLAWQgDgDAAgFQAAgDACgEQACgDAGgEQgGgEgCgDQgCgEAAgDQAAgFAEgEQAEgDAGAAQAGAAAEADQAEAEAAAEQAAADgCADQgCADgHAEIAJAHQADAFAAAEQAAAFgEAEQgEAEgHABQgHgBgEgFgAgHAHQgBADAAAEQAAAFACADQADADADAAQAFAAACgCQADgDAAgDIgCgFQgDgEgHgGQgDACgCADgAgGgWQgCACAAAEIABADIADAFIAFAEIAGgGIABgFQAAgFgCgCQgCgDgEABQgDgBgDADg");
	this.shape_21.setTransform(602.975,507.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgHACgHQAEgHAEgDQADgCADgBQAGAAAFAHQAGAHAAANQAAAJgCAGQgDAHgEACQgFADgDAAQgHAAgFgJgAgEgVQgDACgBAIIAAAMQgBALADAHQADAGADAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQADgCABgFQABgGAAgLQAAgJgBgHQgCgEgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_22.setTransform(596.2,506.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEAbIAOguIgNAAIgGABQgEACgCADIgBgBIAFgMIAcAAIAAABIgRA0g");
	this.shape_23.setTransform(592.175,506.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgIACgIQAEgGAEgDQADgDADABQAGAAAFAFQAGAJAAAMQAAAIgCAHQgDAGgEAEQgFADgDAAQgHAAgFgJgAgEgWQgDAEgBAGIAAAOQgBAKADAHQADAGADAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQADgCABgEQABgHAAgLQAAgKgBgFQgCgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgDACg");
	this.shape_24.setTransform(582.7,504.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIAYQgIgHAAgMQAAgFADgHQADgGAFgFQAFgFAEgCIAJgBIADAAIAAABQgGAAgDACQgDABgDAEIgFAGIgDAKQAGgEAEAAQAGAAAEAFQAEADAAAHQAAAGgEAGQgFAGgIABQgFgBgDgDgAgDgCIgFACIAAAJIABAIQABAEADACQABABAAAAQABABAAAAQABAAAAAAQAAABABAAQADAAADgEQADgDAAgGQAAgHgDgEQgDgEgEgBIgDABg");
	this.shape_25.setTransform(578.725,504.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgIADgIQADgGAEgDQADgDADABQAGAAAFAFQAGAJAAAMQAAAIgCAHQgDAGgFAEQgDADgEAAQgHAAgFgJgAgDgWQgEAEgBAGIgBANQABALACAHQACAGAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAABgBQABgCABgEQACgHAAgLQAAgKgCgFQgBgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgCACg");
	this.shape_26.setTransform(569.05,503.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMAZQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgCIADgBIACABIACABQADACADAAQAEAAADgDQAEgEAAgFQAAgFgEgEQgDgDgEgCQgEgCgIAAIAKgVIASAAIgDAGIgPAAIgDAIQAJACAGAGQAGAEAAAHQAAAEgCADQgCAEgCADIgGAEQgEACgEAAQgFAAgCgCg");
	this.shape_27.setTransform(564.975,503.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgIADgHQADgGAEgDQADgCADgBQAGAAAFAHQAGAHAAANQAAAJgDAGQgCAHgFADQgEACgDAAQgHABgFgKgAgDgVQgDACgCAIIgBAMQAAALADAHQADAGADAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQABgCABgEQACgHAAgLQAAgJgCgHQgBgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgCADg");
	this.shape_28.setTransform(555.2,505.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAEAbIAAgOIgVAAIAAgFIAYgiIAEAAIAAAhIAHAAIAAAGIgHAAIAAAOgAgNAHIARAAIAAgZg");
	this.shape_29.setTransform(551.125,505.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgHACgHQADgHAFgDQAEgCACgBQAHAAAEAHQAGAHAAANQAAAJgDAGQgCAHgEACQgFADgDAAQgHAAgFgJgAgEgVQgCACgBAIIgBAMQAAALACAHQADAGADAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCACgFQACgGAAgLQAAgJgCgHQgCgEgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCADg");
	this.shape_30.setTransform(543.35,508.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAaQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIABgCIACgBIACAAIADABIADACIADAAQADAAADgDQADgDAAgEIgBgHIgCgCIgFgEIgFgBIgBAAIAAAAIAFgCIAFgFQABgCAAgDQAAgFgCgCQgDgCgDAAQgGAAgEAGIgBgBQACgEAEgDQADgEAEAAQAHAAADAFQACADAAADQAAAGgHAGQAFACADACQACAEAAAFQAAAHgEAFQgGAHgKgBQgFAAgCgBg");
	this.shape_31.setTransform(539.175,508.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgIACgIQADgGAFgDQADgDADABQAGAAAFAFQAGAJAAAMQAAAIgDAHQgCAGgEAEQgFADgDAAQgHAAgFgJgAgEgWQgDAEAAAGIgBANQgBALADAHQADAGADAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQACgCACgEQACgHAAgLQAAgKgCgFQgCgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCACg");
	this.shape_32.setTransform(534.45,513.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgRAbIAAgCQAPgMAEgIQAGgHAAgHQAAgEgDgEQgDgDgEAAQgEAAgDACQgDADgBAEIgCAAQABgIAEgDQAEgEAGAAQAGAAAEAEQAEAEABAGQAAAEgCAEQgEAFgGAHIgLANIANAAIAGAAIADgCIACgCIABAAIgDAKg");
	this.shape_33.setTransform(530.35,513.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgIACgIQADgGAFgDQAEgCACAAQAGAAAFAFQAGAJAAAMQAAAIgDAHQgCAGgEADQgEAEgEAAQgHgBgFgIgAgEgWQgDADAAAHIgBAOQgBAKADAHQADAGADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCACgEQACgHAAgLQAAgKgCgFQgCgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCACg");
	this.shape_34.setTransform(525,516.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.5,1,1).p("AjqgyIAbA+Ah3hFIAKA7AmkAlIArArAlKgPIAhA1AGlAmIg0AqAD0g0IgcA9AANhPIgLA6ACNhFIgZA7AFTgVIgnA7");
	this.shape_35.setTransform(573.825,517.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.2,1,1).p("AkHgiIAYAkAj6gnIAVAmAjMg2IAPAnAjYg0IASAoAjAg5IAOAnAjsgtIASAoAiChJIAKAqAhZhHIAFAlAhphIIAGApAiPhDIAJAlAikhEIAOArAhFhMIAAAnAmoAwIAeAeAl/AVIAZAfAk1gOIAVAgAlSgDIAZAgAlHgHIAVAfAleAAIAdAgAkggZIAYAjAkpgTIAVAgAF9AJIgfAgAGGAMIgjAlAGQAVIgnAiAGbAoIgnAbAGpA2IgqAbAGkAtIgqAeADggzIgWAoADUg4IgXApADGg7IgUAoACehFIgSArACrhCIgSAqAENgnIgaApAD3guIgVApAEDgqIgZApAAWhQIgJApAgEhOIgGAmAgXhOIAAAnAgrhOIAAAnABXhKIgLAmABnhGIgOAkAB3hCIgQAkAA1hMIgMAnAAjhOIgIAoACPhGIgPApAFQgQIgaAoAE7gTIgbAlAExgZIgZAmAEoggIgZArAFmgEIgeAlAFagKIgXAl");
	this.shape_36.setTransform(573.7,519.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("ANbuFIAAAAIABAJgANXuFIABAAIACAAIgHAVIADgNIACgIANWt9IABgIANct8IABAFIgCgOANdt3IAnGbQgcCHgcCGQhxIXhwIYQgFAWgFAWIgJAtIgFAAAhIrWIAag/IAWg4IBLgHIBLgHIA0A1IAeAfIADADIAQAQIAEA1IgXA4IgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgCABgBAAQgQABgQACIgvAEIg3g6IgtgtgADjr0IgOAjIgJAWIgaA+IgfADQgPACgPABQAAABgBAAIgDAAIgDAAQgBAAgBABQgRABgQABIgvAFIg3g6IgbgbIgSgTAIDuFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFgAKgt0IAABFQgGAHgLAGQgHAFgIADAKet8IACAAIAAAIQgBABgBgJgAIDt2IAAA8QAFAOARAKQAGAEAIADIAAAfQAVAIAZAAQAZAAASgIIAAgeQgTAHgZAAQgZAAgUgIAnRuFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEIACAAIAAAIQgBABgBgJQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAA8QAFAOARAKQAGAEAIADAnRt2IAAgGQAAgEAAgFAuDIQIEt2VICFAAAk0t0IAABFQgGAHgLAGQgHAFgIADIAAAeQgSAIgZAAQgZAAgVgIIAAgfAlUsaQgTAHgZAAQgZAAgUgIAiomJIAVBCAoLgSQAqhCBvgzQAWgKAYgJQCmhAC8AAQBfAABPARQBOARAzAfQBeA5gbBPAlslCIAwA4AkUlqIArBBAqVFNIC5tTIQzAAIi5NTgAnQkgIA4BWAGZjXIBBgnAFnkMIA2g9AC2lHIAhhAAgnmYIAABFABlmSIgXA+AETkpIAuhHAk0uFIM3AAAIqIQIAAAAIACAPQAAACAAADIAnGVAuDIQIApGpIWtAAAuDIQIWtAAIEp2AAKguFIC3AA");
	this.shape_37.setTransform(572.075,549.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF99").s().p("Ap1GqIC4tTIQ0AAIi6NTgAGwBLQAGgSAAgQQAAg5hJgsQgzgfhOgRQhPgRhfAAQi8AAimBAIguATQhvAygqBCQAqhCBvgyIAugTQCmhAC8AAQBfAABPARQBOARAzAfQBJAsAAA5QAAAQgGASgAl4htIg4hWgAG5h6IBBgngAGviAIAqgbgAlaiEIgegegAGqiHIArgegAGkiOIAngcgAGiiTIA1grgAlIiTIgrgrgAGZibIAngigAk2idIgZgggAGTigIAjglgAGOipIAfgggAkcitIgwg4gAGHivIA1g9gAF4ixIAeglgAkRixIgdgggAkJi0IgZghgAFzi2IAXgngAFmi6IAagogAkCi6IgVgggAj4i9Ighg2gAFdi+IAng7gAFQjAIAbgmgAjvjAIgWghgAjkjEIgVgigAFIjFIAZgngAE/jGIAagsgAjYjIIgXgkgAEzjMIAuhHgAjKjMIgqhBgAEjjPIAagqgAi/jQIgYglgAEajUIAZgpgAi1jUIgVgmgAESjXIAVgqgAiejXIgbg/gAipjYIgTgngAEJjaIAcg+gAD6jeIAWgngAiWjfIgSgogADtjhIAXgqgAiMjiIgQgngAiCjkIgOgogADijmIAUgngADWjqIAhhAgAhzjqIgWhCgADJjrIASgqgAhmjsIgNgqgAC8jtIATgrgACljuIAZg7gAg7juIgKg7gACvjvIARgqgAhWjwIgJgmgACXjxIAQgjgAgyjxIgHgqgAhIjyIgKgqgACKj0IANgkgAgjj1IgGglgAgHj2IAAhFgAB8j3IALglgABuj3IAXg+gAgVj3IAAgngABaj4IALgmgABLj4IAJgogAA9j5IAJgqgAAzj5IALg6gAAEj5IAAgogAAYj6IAAgngAAmj7IAFgmg");
	this.shape_38.setTransform(568.9,540.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AttLLIEt2VICFAAIAAAKIAAAFIAAA9QAGANAQAKIAOAHIgOgHQgQgKgGgNIAAg9QAHAKANAIQAZAQAjAAQAiAAAZgQQAKgGAHgRQABAIABgBIAAgHIgCAAIACgKIM2AAIAAAKIAAAFQAHAKANAIQAZAQAjAAQAjAAAYgQQAKgGAHgRIACgKIC3AAIgCAIIgDAOIkoV/gAp/IIIQzAAIC5tSIwzAAgAgunmIAtAuIA4A6IAugEIAhgDIADgBIADAAIADAAIABgBIAdgDIAfgDIAag+IAXg5IgDg0IgRgRIgDgCIgeggIgzg0IhLAHIhLAHIgXA4IgaA/gAI9pAQAVAIAaAAQAYAAASgIIAAgfQgTAIgYAAQgaAAgUgJgAmXpAQAVAIAaAAQAYAAASgIIAAgfQgTAIgYAAQgaAAgUgJgAK3p0QgGAHgLAGQgHAFgJADQAJgDAHgFQALgGAGgHIAAhFIAAgHIgCAAQABAIABgBgAkdp0QgGAHgLAGQgHAFgJADQAJgDAHgFQALgGAGgHIAAhFgAIZp+QAGANARAKQAGAEAHADQgHgDgGgEQgRgKgGgNIAAg9IAAA9gAgBm4IgtguIgEg0IATASIAaAbIA4A6IAugEIAhgDIADgBIADAAIADAAIABAAIAdgDIAfgDIAag/IAKgVIAOgjIADA0IgXA5IgaA+IgfADIgdADIgBABIgDAAIgDAAIgDABIghADIguAEg");
	this.shape_39.setTransform(569.825,530.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AJTO5IgnmVIAAgFIgCgPIAAAAIEp2AIAHgVIABAAIACAPIAnGaIg4ENIjhQvIgKAsIgJAtgAtaO5IgpmpIWtAAIAAAAIACAPIAAAFIAnGVgAIqIQgAgbqoIgbgbIgSgSIAag/IAWg5IBLgGIBLgHIA0A0IAeAfIADADIAQAQIgOAjIgJAWIgaA+IgfAEIgeACIgBABIgDAAIgDAAIgCABIghADIgvAEgAInr8IAAgfQAUAJAZAAQAZAAATgIIAAAeQgSAJgZgBQgZABgVgJgAmtr8IAAgfQAUAJAZAAQAZAAATgIIAAAeQgSAJgZgBQgZABgVgJgAIXtkQgOgIgGgKIAAgGIAAgJIAAgBQAAgUAWgQQAXgOAhAAQAhAAAXAOQAXAQAAAUIAAABIgCAJQgGASgLAGQgYAPgjAAQgjAAgYgPgAm9tkQgOgIgGgKIAAgGIAAgJIAAgBQAAgUAWgQQAXgOAhAAQAhAAAXAOQAXAQAAAUIAAABIgCAJQgGASgLAGQgYAPgjAAQgjAAgYgPg");
	this.shape_40.setTransform(572.075,549.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.2,1,1).p("AkHgiIAYAkAj6gnIAVAmAjMg2IAPAnAjYg0IASAoAjAg5IAOAnAjsgtIASAoAiChJIAKAqAhZhHIAFAlAhphIIAGApAiPhDIAJAlAikhEIAOArAhFhMIAAAnAmoAwIAeAeAl/AVIAZAfAk1gOIAVAgAlSgDIAZAgAlHgHIAVAfAleAAIAdAgAkggZIAYAjAkpgTIAVAgAF9AJIgfAgAGGAMIgjAlAGQAVIgnAiAGbAoIgnAbAGpA2IgqAbAGkAtIgqAeADggzIgWAoADUg4IgXApADGg7IgUAoACehFIgSArACrhCIgSAqAENgnIgaApAD3guIgVApAEDgqIgZApAAWhQIgJApAgEhOIgGAmAgXhOIAAAnAgrhOIAAAnAB3hCIgQAkABnhGIgOAkAA1hMIgMAnABXhKIgLAmAAjhOIgIAoACPhGIgPApAFQgQIgaAoAE7gTIgbAlAExgZIgZAmAEoggIgZArAFmgEIgeAlAFagKIgXAl");
	this.shape_41.setTransform(573.7,519.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.2,1,1).p("Aj6gnIAVAmAjsgtIASAoAjYg0IASAoAjMg2IAPAnAjAg5IAOAnAkHgiIAYAkAhFhMIAAAnAikhEIAOArAiPhDIAJAlAhphIIAGApAhZhHIAFAlAiChJIAKAqAl/AVIAZAfAmoAwIAeAeAleAAIAdAgAlHgHIAVAfAlSgDIAZAgAk1gOIAVAgAkpgTIAVAgAkggZIAYAjAGpA2IgqAbAGkAtIgqAeAGbAoIgnAbAGQAVIgnAiAGGAMIgjAlAF9AJIgfAgACrhCIgSAqACehFIgSArADUg4IgXApADGg7IgUAoADggzIgWAoAENgnIgaApAD3guIgVApAEDgqIgZApAgrhOIAAAnAgXhOIAAAnAgEhOIgGAmAAWhQIgJApAA1hMIgMAnAB3hCIgQAkABnhGIgOAkABXhKIgLAmAAjhOIgIAoAEoggIgZArAExgZIgZAmAE7gTIgbAlAFQgQIgaAoACPhGIgPApAFagKIgXAlAFmgEIgeAl");
	this.shape_42.setTransform(573.7,519.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("ANYuFIACAAIgHAVIADgNIABgIgANWt9IACgIANct8IgBgJIAAAAIABAJIABAFIAnGbQgcCHgcCGQhxIXhwIYQgFAWgFAWIgJAtIgFAAANdt3IgCgOAhIrWIAag/IAWg4IBLgHIBLgHIA0A1IAeAfIADADIAQAQIAEA1IgXA4IgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgCABgBAAQgQABgQACIgvAEIg3g6IgtgtgADjr0IgOAjIgJAWIgaA+IgfADQgPACgPABQAAABgBAAIgDAAIgDAAQgBAAgBABQgRABgQABIgvAFIg3g6IgbgbIgSgTAIDuFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFgAKgt0IAABFQgGAHgLAGQgHAFgIADAKgt0QgBABgBgJIACAAgAIDt2IAAA8QAFAOARAKQAGAEAIADIAAAfQAVAIAZAAQAZAAASgIIAAgeQgTAHgZAAQgZAAgUgIAnRt2IAAgGQAAgEAAgFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEIACAAIAAAIIAABFQgGAHgLAGQgHAFgIADIAAAeQgSAIgZAAQgZAAgVgIIAAgfAnRt2IAAA8QAFAOARAKQAGAEAIADAuDIQIEt2VICFAAAk2t8QgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKAk0t0QgBABgBgJAlUsaQgTAHgZAAQgZAAgUgIAiomJIAVBCAoLgSQAqhCBvgzQAWgKAYgJQCmhAC8AAQBfAABPARQBOARAzAfQBeA5gbBPAlslCIAwA4AkUlqIArBBAnQkgIA4BWAqVFNIC5tTIQzAAIi5NTgAGZjXIBBgnAFnkMIA2g9AC2lHIAhhAAgnmYIAABFABlmSIgXA+AETkpIAuhHAk0uFIM3AAAIqIQIAAAAIACAPQAAACAAADIAnGVAuDIQIApGpIWtAAAuDIQIWtAAIEp2AAKguFIC3AA");
	this.shape_43.setTransform(572.075,549.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AttLLIEt2VICFAAIAAAKIAAAFIAAA9QAGANAQAKIAOAHIgOgHQgQgKgGgNIAAg9QAHAKANAIQAZAQAjAAQAiAAAZgQQAKgGAHgRQABAIABgBIAAgHIgCAAIACgKIM2AAIAAAKIAAAFIAAA9QAGANARAKQAGAEAHADQgHgDgGgEQgRgKgGgNIAAg9QAHAKANAIQAZAQAjAAQAjAAAYgQQAKgGAHgRIACgKIC3AAIgCAIIgDAOIkoV/gAp/IIIQzAAIC5tSIwzAAgAgunmIAtAuIA4A6IAugEIAhgDIADgBIADAAIADAAIABgBIAdgDIAfgDIAag+IAXg5IgDg0IgRgRIgDgCIgeggIgzg0IhLAHIhLAHIgXA4IgaA/gAI9pAQAVAIAaAAQAYAAASgIIAAgfQgTAIgYAAQgaAAgUgJgAmXpAQAVAIAaAAQAYAAASgIIAAgfQgTAIgYAAQgaAAgUgJgAK3p0QgGAHgLAGQgHAFgJADQAJgDAHgFQALgGAGgHIAAhFIAAgHIgCAAQABAIABgBgAkdp0QgGAHgLAGQgHAFgJADQAJgDAHgFQALgGAGgHIAAhFgAgBm4IgtguIgEg0IATASIAaAbIA4A6IAugEIAhgDIADgBIADAAIADAAIABAAIAdgDIAfgDIAag/IAKgVIAOgjIADA0IgXA5IgaA+IgfADIgdADIgBABIgDAAIgDAAIgDABIghADIguAEg");
	this.shape_44.setTransform(569.825,530.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.2,1,1).p("Aj6gnIAVAmAjsgtIASAoAjYg0IASAoAjMg2IAPAnAjAg5IAOAnAkHgiIAYAkAhFhMIAAAnAikhEIAOArAiPhDIAJAlAhphIIAGApAhZhHIAFAlAiChJIAKAqAl/AVIAZAfAmoAwIAeAeAleAAIAdAgAlHgHIAVAfAlSgDIAZAgAk1gOIAVAgAkpgTIAVAgAkggZIAYAjAGpA2IgqAbAGkAtIgqAeAGbAoIgnAbAGQAVIgnAiAGGAMIgjAlAF9AJIgfAgACrhCIgSAqACehFIgSArADUg4IgXApADGg7IgUAoADggzIgWAoAENgnIgaApAD3guIgVApAEDgqIgZApAgrhOIAAAnAgXhOIAAAnAgEhOIgGAmAAWhQIgJApAB3hCIgQAkABXhKIgLAmABnhGIgOAkAA1hMIgMAnAAjhOIgIAoAEoggIgZArAExgZIgZAmAE7gTIgbAlAFQgQIgaAoACPhGIgPApAFagKIgXAlAFmgEIgeAl");
	this.shape_45.setTransform(573.7,519.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_39},{t:this.shape_40},{t:this.shape_38},{t:this.shape_37},{t:this.shape_41},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},369).to({state:[{t:this.shape_44},{t:this.shape_40},{t:this.shape_38},{t:this.shape_43},{t:this.shape_42},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},545).to({state:[{t:this.shape_44},{t:this.shape_40},{t:this.shape_38},{t:this.shape_43},{t:this.shape_45},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[]},230).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_МиллиампСтрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// МиллиампСтрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.6,1,1).p("AjFktIGLJa");
	this.shape.setTransform(546.225,552.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.6,1,1).p("AijlAIFHKB");
	this.shape_1.setTransform(549.25,550.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiLlLIEXKX");
	this.shape_2.setTransform(551.425,549.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhwlWIDhKt");
	this.shape_3.setTransform(554.725,548.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhzlUIDnKp");
	this.shape_4.setTransform(553.475,548.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah+lRID9Kj");
	this.shape_5.setTransform(553.275,548.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiBlPIEDKg");
	this.shape_6.setTransform(553.05,549.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiGlOIENKc");
	this.shape_7.setTransform(552.575,549.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiJlMIETKZ");
	this.shape_8.setTransform(552.3,549.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiYlFIExKL");
	this.shape_9.setTransform(552.575,549.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiclEIE5KI");
	this.shape_10.setTransform(552.25,549.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ailk/IFMJ/");
	this.shape_11.setTransform(551.3,549.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},369).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},6).to({state:[{t:this.shape_3}]},280).to({state:[{t:this.shape_4}]},16).to({state:[{t:this.shape_5}]},19).to({state:[{t:this.shape_6}]},17).to({state:[{t:this.shape_7}]},18).to({state:[{t:this.shape_8}]},17).to({state:[{t:this.shape_9}]},18).to({state:[{t:this.shape_10}]},20).to({state:[{t:this.shape_11}]},20).wait(391));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ВольтметрСтрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ВольтметрСтрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.6,1,1).p("AjFksIGLJa");
	this.shape.setTransform(918.925,559.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.6,1,1).p("Aiqk9IFVJ7");
	this.shape_1.setTransform(921.6,557.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiVlHIErKP");
	this.shape_2.setTransform(923.5,557.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhwlWIDhKt");
	this.shape_3.setTransform(926.95,555.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhQleIChK9");
	this.shape_4.setTransform(930.575,554.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6,1,1).p("AgtllIBbLL");
	this.shape_5.setTransform(934.175,553.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6,1,1).p("AADloIgFLQ");
	this.shape_6.setTransform(938.975,553.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6,1,1).p("AAollIhQLL");
	this.shape_7.setTransform(941.45,554.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.6,1,1).p("ABrlXIjVKw");
	this.shape_8.setTransform(949.375,555.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},449).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).wait(671));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Вольтметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Вольтметр
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJADgGQADgHAEgDQADgDADAAQAHABAEAFQAGAIAAANQAAAIgCAHQgDAGgEADQgEADgEABQgHgBgFgIgAgDgWQgEAEgBAGIgBAOQABAKACAHQACAGAEAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBQACgCABgFQABgGAAgLQAAgKgBgFQgCgFgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACg");
	this.shape.setTransform(1000.95,521.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAaQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgBIADgBIACAAIACACQADACADAAQAEAAADgEQAEgDAAgFQAAgFgEgEQgDgDgEgCQgEgCgIgBIAKgUIASAAIgDAHIgPAAIgDAHQAJABAGAGQAGAFAAAHQAAAEgCAEQgCAEgCACIgGAEQgEACgEAAQgFAAgCgBg");
	this.shape_1.setTransform(996.875,521.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAbIAAgBIAEgBIACgBIAAgGIAAgcIAAgHIgBgCIgCgBIgEACIAAgCIAMgGIABAAIAAAsIAAAFIACACIAEABIAAABg");
	this.shape_2.setTransform(992.925,521.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAOQgDgGAAgHQAAgHACgEQADgFADgCQACgCACAAQAFgBADAFQAFAGAAAJQAAAHgCAEQgCAFgDADQgDABgDAAQgFAAgEgGgAgCgQQgDADgBAFIAAAJQAAAJACAEQABAFADAAIADgBQACgCABgEIABgMQAAgIgBgEIgDgEIgDgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_3.setTransform(989.7,523.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEAUIAAgKIgQAAIAAgEIARgZIADAAIAAAZIAGAAIAAAEIgGAAIAAAKgAgKAGIAOAAIAAgTg");
	this.shape_4.setTransform(986.65,523.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAUIAAgBIAEAAIABgBIAAgFIAAgUIAAgGIgBgBIgBgBIgDABIgBgBIAJgEIABAAIAAAgIAAAEIABACIAEAAIAAABg");
	this.shape_5.setTransform(983.675,523.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgIADgHQADgGAEgDQADgCADAAQAHgBAEAHQAGAHAAANQAAAJgCAGQgDAHgFADQgDACgEAAQgHABgFgKgAgDgVQgEACgBAIIgBAMQABALACAHQACAGAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQACgCAAgEQACgHAAgLQAAgJgCgHQgBgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBADg");
	this.shape_6.setTransform(987.9,512.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIABgDIACgBIACAAIADACIADACIADAAQADAAADgDQADgDAAgEIgBgGIgCgDIgFgEIgFgBIgBAAIAAAAIAFgCIAFgFQABgCAAgDQAAgFgCgBQgDgDgDAAQgGAAgEAGIgBgBQACgEAEgEQADgDAEABQAHgBADAEQACADAAAEQAAAGgHAGQAFACADACQACAEAAAFQAAAHgEAFQgGAGgKAAQgFABgCgCg");
	this.shape_7.setTransform(983.725,512.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAbIAAgCIAEAAIACgCIAAgGIAAgbIAAgIIgBgBIgCgBIgEABIAAgBIAMgGIABAAIAAArIAAAGIACACIAEAAIAAACg");
	this.shape_8.setTransform(979.875,512.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAOQgDgGAAgHQAAgHACgEQADgFADgCQADgCABAAQAEgBAEAFQAFAGAAAJQAAAHgCAEQgCAFgDADQgEABgCAAQgFAAgEgGgAgDgQQgBADgBAFIgBAJQAAAJACAEQACAFACAAIADgBQACgCABgEIABgMQAAgIgCgEIgCgEIgDgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_9.setTransform(976.5,517.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMAUIAAgBQAKgJAEgGQADgFAAgFQAAgEgCgCQgCgDgDAAIgEACQgDACgBADIgBAAQAAgFAEgDQACgDAFAAQAEAAADADQAEADAAAEIgCAGQgCAEgFAFIgIAKIAJAAIAFAAIACgBIACgCIABAAIgDAHg");
	this.shape_10.setTransform(973.45,517.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAUIAAgBIAEAAIABgBIAAgFIAAgUIAAgGIgBgBIgBgBIgDABIgBgBIAJgEIABAAIAAAgIAAAEIABACIAEAAIAAABg");
	this.shape_11.setTransform(970.475,517.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgIADgHQADgGAEgDQADgCADAAQAHgBAEAHQAGAHAAANQAAAJgCAGQgDAHgEADQgEACgEAAQgHABgFgKgAgDgVQgEACgBAIIgBAMQABALACAHQACAGAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQACgCABgEQABgHAAgLQAAgJgBgHQgCgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBADg");
	this.shape_12.setTransform(971.7,509.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAbIAAgCIAEAAIACgCIAAgGIAAgbIAAgIIgBgBIgCgBIgEABIAAgBIAMgGIABAAIAAArIAAAGIACACIAEAAIAAACg");
	this.shape_13.setTransform(967.675,509.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAbIAAgCIAEAAIACgCIAAgGIAAgbIAAgIIgBgBIgCgBIgEABIAAgBIAMgGIABAAIAAArIAAAGIACACIAEAAIAAACg");
	this.shape_14.setTransform(963.675,509.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAOQgDgGAAgHQAAgGACgGQADgEADgCQADgDABAAQAEAAAEAFQAFAGAAAJQAAAHgCAFQgCAEgDADQgEACgCAAQgFgBgEgGgAgCgQQgCACgBAGIgBAJQAAAJACAEQACAFACAAIADgBQACgCABgEIABgNQAAgGgCgFIgCgEIgDgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_15.setTransform(961.55,515.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJAOQgDgGAAgHQAAgGACgGQADgEACgCQADgDACAAQAFAAADAFQAFAGAAAJQAAAHgCAFQgCAEgDADQgDACgDAAQgFgBgEgGgAgCgQQgDACgBAGIAAAJQAAAJACAEQABAFADAAIADgBQACgCABgEIABgNQAAgGgBgFIgDgEIgDgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_16.setTransform(958.55,515.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGAUIAAgBIAEAAIABgBIAAgFIAAgUIAAgGIgBgBIgBgBIgDABIgBgBIAJgEIABAAIAAAgIAAAEIABACIAEAAIAAABg");
	this.shape_17.setTransform(955.525,515.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMATQgEgIAAgLQAAgIACgHQAEgGAEgDQADgDADABQAGgBAFAHQAGAHAAANQAAAJgCAGQgDAGgEAEQgFACgDAAQgHABgFgJgAgEgWQgDAEgBAHIAAAMQgBALADAHQADAGADAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQADgCABgEQABgHAAgLQAAgJgBgGQgCgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgDACg");
	this.shape_18.setTransform(954.4,509.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAbIAAgBQAGAAAEgCQAEgCADgGQAEgGACgHQgGAEgEAAQgGAAgEgEQgEgEAAgHQAAgGAEgGQAFgGAHAAQAGAAAFAFQAGAHAAAJQAAAIgFAIQgEAHgIAGQgFADgHAAgAgGgVQgDADAAAHQAAAIAEADQACADADAAIAEAAIAFgDIAAgHIgBgIQgBgEgDgDQgCgCgCAAQgDAAgDADg");
	this.shape_19.setTransform(950.375,509.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAOQgEgGAAgHQAAgHACgFQACgEADgCQADgDACAAQAFAAAEAFQAEAGAAAJQAAAHgCAEQgCAFgDADQgEABgCABQgFgBgDgGgAgDgQQgCADgBAFIAAAJQAAAJACAEQACAFACAAIADgBQACgCABgEIABgMQAAgIgCgEIgCgEIgDgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_20.setTransform(945.2,513.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIARQgCgCgBgEQAAgCACgEQACgCAEgDIgGgFIgBgFQAAgEADgCQADgDAEgBQAFAAACADQADACABAEIgCAFQgCACgEADIAGAFQADADAAAEQAAAEgEADQgDADgFAAQgFgBgDgDgAgEAFQgCADAAADQAAAEACACQACACACAAQAEAAABgBQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgEIgHgIQgDACAAACgAgEgQQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAAADIACADIAEAEIAEgFIABgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgDAAQgCAAgCACg");
	this.shape_21.setTransform(942.2,513.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMATQgEgIAAgLQAAgIADgHQADgGAEgDQADgDADABQAHgBAEAHQAGAHAAANQAAAJgCAGQgDAGgFAEQgDACgEAAQgHABgFgJgAgDgWQgEAEgBAHIgBAMQABALACAHQACAGAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQACgCAAgEQACgHAAgLQAAgJgCgGQgBgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACg");
	this.shape_22.setTransform(937.05,509.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEAbIAOgvIgNAAIgGABQgEACgCAEIgBAAIAFgNIAcAAIAAACIgRAzg");
	this.shape_23.setTransform(933.025,509.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIAOQgEgGAAgHQAAgGACgGQACgEADgCQADgDACAAQAEAAAFAFQAEAGAAAJQAAAHgCAFQgCAEgDADQgEACgCAAQgFgBgDgGgAgDgQQgCACgBAGIAAAJQAAAJACAEQACAFACAAIADgBQACgCABgEIABgNQAAgGgCgFIgCgEIgDgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_24.setTransform(930.45,515.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGASQgFgFgBgJQAAgEACgFQADgEAEgEQADgEAEgCIAGgBIACAAIAAABIgHACIgEADIgDAGIgDAHQAEgDAEAAQADAAAEADQADACAAAFQAAAGgDADQgEAGgGAAQgDgBgDgCgAgCgBIgDABIgBAGIABAGQABAEACACQABAAAAAAQABAAAAABQAAAAAAAAQAAAAABAAQACAAACgDQACgBAAgFQAAgFgCgEQgCgDgDAAIgCABg");
	this.shape_25.setTransform(927.45,515.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgHACgHQADgHAFgDQAEgDACAAQAGABAFAGQAGAIAAAMQAAAIgDAHQgCAGgEADQgEADgEAAQgHAAgFgJgAgEgVQgDACAAAHIgBAOQgBAKADAHQADAGADAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAQACgCACgFQACgGAAgLQAAgJgCgHQgCgEgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCADg");
	this.shape_26.setTransform(921.45,510.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMAaQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIAAgBIADgBIACAAIACACQADACADAAQAEAAADgEQAEgDAAgFQAAgFgEgEQgDgDgEgDQgEgBgIgBIAKgUIASAAIgDAHIgPAAIgDAHQAJACAGAFQAGAFAAAHQAAAEgCAEQgCAEgCACIgGAEQgEACgEAAQgFAAgCgBg");
	this.shape_27.setTransform(917.375,510.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIAOQgEgFAAgJQAAgFACgFQACgFADgDQAEgBABAAQAFgBAEAFQAEAGAAAJQAAAGgCAFQgCAGgDABQgDACgDAAQgFABgDgHgAgCgQQgDACgBAGIAAAJQAAAIACAGQABAEADAAIADgBQACgCABgEIABgMQAAgIgBgEIgDgFIgDgBQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_28.setTransform(914.8,518.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AADAUIAAgKIgPAAIAAgEIARgZIADAAIAAAZIAGAAIAAAEIgGAAIAAAKgAgJAGIAMAAIAAgTg");
	this.shape_29.setTransform(911.75,518.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgIADgHQADgGAEgDQADgDADABQAHgBAEAHQAGAHAAANQAAAJgCAGQgDAGgFAEQgDACgEAAQgHABgFgKgAgDgWQgDAEgCAHIgBAMQABALACAHQACAGAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQABgCABgEQACgHAAgLQAAgJgCgHQgBgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgCACg");
	this.shape_30.setTransform(907,514.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAaQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIABgDIACgBIACAAIADACIADACIADAAQADAAADgDQADgDAAgFIgBgFIgCgEIgFgDIgFgBIgBAAIAAAAIAFgCIAFgFQABgCAAgEQAAgEgCgBQgDgDgDAAQgGAAgEAGIgBgBQACgFAEgDQADgCAEAAQAHAAADADQACAEAAADQAAAGgHAGQAFACADACQACAEAAAFQAAAHgEAFQgGAGgKAAQgFAAgCgBg");
	this.shape_31.setTransform(902.825,514.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgIADgHQADgGAEgDQAEgCACgBQAGAAAFAHQAGAHAAANQAAAJgCAGQgDAHgFADQgEACgDAAQgHABgFgKgAgDgVQgEACgBAIIgBAMQAAALADAHQADAGADAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQABgCABgEQACgHAAgLQAAgJgCgHQgBgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgCADg");
	this.shape_32.setTransform(898.55,520.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgiAhIAAgCIADAAQAEAAADgCQACgCACgFIARgqIABgJQgBgBgEAAIgDAAIABgCIAYAAQAJAAAEACQAEACACAEQACAEgCAGQgEAIgGAFQgIAFgJAAIgGgBIgEgBIgIAUQgCAFABACQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIADAAIAAACgAAHgcIgJAcIADAAIAEAAQAEAAAGgCQAFgEADgHQABgEAAgEQAAgEgDgCQgDgCgDAAIgIABg");
	this.shape_33.setTransform(962.8,574.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AggAhIAAgCIACAAQAEAAAEgCQABgCACgFIATgyIgHAAIgHAAIgGAEQgDADgBAEIgDAAIAHgPIA1AAIgFAPIgCAAIABgFQAAgBAAgBQgBAAAAgBQAAgBgBAAQAAAAgBgBQgCgBgEAAIgJAAIgSAyQgCAFAAACQABACAEAAIACAAIAAACg");
	this.shape_34.setTransform(958.05,574.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AglAhIAAgCIADAAIAFgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBIADgFIAQgqQADgHgBgCQgBgBgEAAIgDAAIABgCIAyAAIgFAOIgCAAIABgHQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgGgBIgSAAIgJAbIANAAQAGgBACgBQAEgCACgGIACAAIgJAWIgBAAIAAgGQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgBIgOAAIgIAWIgCAFIABACIAEABIALAAIAHgBQADgBADgDIAKgJIACAAIgMARg");
	this.shape_35.setTransform(950.975,574.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AACAhIAAgCIACAAQAFAAADgCQABgCACgFIARgrIguA2IgBAAIgEg2IgRArQgCAFAAACQABACAEAAIACAAIgBACIgXAAIABgCIADAAQADAAAEgCQACgCABgFIARgqIABgHQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIgGAAIABgCIATAAIAEAyIArgyIATAAIgBACIgDAAQgEgBgDADIgEAIIgQAqQgCAFAAACQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIACAAIAAACg");
	this.shape_36.setTransform(943.75,574.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghAhIABgCIADAAQADAAADgCQADgCACgFIASgyIgIAAIgGAAIgGAEQgDADgCAEIgBAAIAHgPIA1AAIgGAPIgCAAIABgFQAAgBAAgBQgBAAAAgBQAAgBgBAAQAAAAAAgBQgDgBgEAAIgJAAIgSAyQgDAFABACQABACAEAAIACAAIgBACg");
	this.shape_37.setTransform(936.95,574.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdAhIAAgCQAHAAACgCQACgBADgHIAPgpQACgHgBgCQgBgBgFAAIABgCIAcAAIgBACQgHAAgCABQgDACgCAHIgHASIADAAQAMAAAFABQAFABACAEQACAFgCAFQgDAIgIAFQgHAGgMAAgAABAAIgKAdIAGABQAFAAAHgFQAGgEADgHQADgGgEgEQgEgEgIAAIgEAAg");
	this.shape_38.setTransform(929.4194,574.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgrAfQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIADgBIADACIAEABQAEAAAFgHQAGgHAIgTIAFgNQACgHgBgCQgBgBgGgBIABgCIA0AAIgBACQgGABgCABQgDACgCAHIgQAoQgDAHABABQACACAFAAIAAADIgcAAIABgDQAGAAACgCQACgBACgHIAUgxIgVAAIgGATQgLAbgIAIQgIAJgIAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_39.setTransform(924.105,574.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AggAZQgFgKAFgPQAGgPAPgKQAMgJANABQANgBAFAKQAGAKgFAOQgGAOgOAKQgNALgMgBQgOAAgGgJgAgEgXQgKAHgGAQQgHAPAEAJQADAHAIAAQAKAAAIgHQAJgIAGgPQAGgQgDgIQgDgHgKAAQgIAAgHAHg");
	this.shape_40.setTransform(917.069,574.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AglAhIAAgCIADAAQAEAAADgCQACgCACgFIAQgqIACgJQgBgBgEAAIgDAAIABgCIAcAAIAMABQAHABACAFQACAEgCAHQgCAEgFAFQgEAEgHABQAHABACADQADAFgDAGQgCAFgEAEQgFAFgGACQgHACgKAAgAgGABIgKAbIALACQAHAAAHgFQAGgDACgHQABgDAAgEQgBgDgEgCQgEgCgHgBIgEAAIgEABgAAEgcIgIAaIAEAAIAEAAQAHAAAEgBQAEgCADgDQADgDACgEQACgGgDgEQgDgEgJAAIgKABg");
	this.shape_41.setTransform(909.5071,574.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AgXhOIAKA7ACHhFIgLA6AmYAkIArArAkmgWIAhA1AirhFIAbA/AGZASIgcA9AERgqIgZA7");
	this.shape_42.setTransform(946.225,525.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("Ak0t0QgBABgBgJQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEIACAAIAAAIIAABFQgGAHgLAGQgHAFgIADQgTAHgZAAQgZAAgUgIAlUsaIAAAfQgSAIgZAAQgZAAgVgIIAAggAnRt2IAAA9QAFANARAKQAGAEAIADAhIrVIAag/IAWg5IBLgHIBLgGIA0A0IAeAfIADADIAQARIAEA0IgXA4IgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgCABgBAAQgQACgQACIgvADIg3g6IgtgtgADjrzIgOAjIgJAVIgaA+IgfAEQgPABgPACQAAAAgBAAIgDAAIgDAAQgBAAgBABQgRABgQABIgvAFIg3g6IgbgbIgSgSAhamJIAWBCABAmVIAABFADYl/IgXA9AoLgSQAqhCBvgyQAWgKAYgKQCmhAC8AAQBfAABPARQBOARAzAfQBeA6gbBOAnQkgIA4BWAlmlCIAwA5Ajxl1IAqBBAqVFNIC5tTIQzAAIi5NTgAuDIQIEt2VICFAAAuDIQIApGpIWtAAAKet8QgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEgAInsbIAAAgQAVAIAZAAQAZAAASgIIAAgfQgTAHgZAAQgZAAgUgIgAKgt0IAABFQgGAHgLAGQgHAFgIADAIDt2IAAA9QAFANARAKQAGAEAIADAKgt0QgBABgBgJIACAAgANYuFIACAAIgHAVIADgNgANWt9IABgIIABAAANbuFIAAAAIABAJIABAFgANct8IgBgJAKguFIC3AAAFDkRIAhg/AHrkgIg4BWANdt3IAnGcQiNKdiMKeQgFAWgFAXIgJAsIgFAAAIqIQIAAAAIACAPQAAACAAAEIAnGUANTtwIkpWAAuDIQIWtAAAk0uFIM3AA");
	this.shape_43.setTransform(945.625,556.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF99").s().p("Ap2GqIC6tTIQyAAIi4NTgAGwBLQAGgSAAgQQAAg5hJgsQgzgfhPgRQhOgRhfAAQi9AAilBAIgvATQhuAygrBCQArhCBugyIAvgTQClhAC9AAQBfAABOARQBPARAzAfQBJAsAAA5QAAAQgGASgAHThtIA4hWgAl4htIg4hWgAGjiNIAcg+gAlHiNIgrgsgAkWitIgwg4gAFji0IAgg/gAjgi9Iggg2gAEejMIAZg7gAinjXIgqhBgAhqjkIgbg+gADhjlIAXg9gAChjoIALg6gAgkjqIgWhCgAAYjxIgKg7gABgjzIAAhGg");
	this.shape_44.setTransform(942.45,547.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AttLLIEt2VICFAAIAAAKIAAAFQAHAKANAIQAZAQAjAAQAiAAAZgQQAKgGAHgRQABAIABgBIAAgHIgCAAIACgKIM2AAIAAAKIAAAFQAHAKANAIQAZAQAjAAQAjAAAYgQQAKgGAHgRIACgKIC3AAIgCAIIgDAOIkoV/gAp/IIIQzAAIC5tSIwzAAgAgunmIAtAuIA4A6IAugEIAhgDIADgBIADAAIADAAIABgBIAdgDIAfgDIAag+IAXg5IgDg0IgRgRIgDgCIgeggIgzg0IhLAHIhLAHIgXA4IgaA/gAIZp+QAGANARAKQAGAEAHADIAAAgQAVAIAaAAQAYAAASgIIAAgfQgTAIgYAAQgaAAgUgJQgHgDgGgEQgRgKgGgNIAAg9IAAA9gAm7p+QAGANAQAKIAOAHIAAAgQAVAIAaAAQAYAAASgIIAAgfQgTAIgYAAQgaAAgUgJIgOgHQgQgKgGgNIAAg9IAAA9gAK3p0QgGAHgLAGQgHAFgJADQAJgDAHgFQALgGAGgHIAAhFIAAgHIgCAAQABAIABgBgAkdp0QgGAHgLAGQgHAFgJADQAJgDAHgFQALgGAGgHIAAhFgAgBm4IgtguIgEg0IATASIAaAbIA4A6IAugEIAhgDIADgBIADAAIADAAIABAAIAdgDIAfgDIAag/IAKgVIAOgjIADA0IgXA5IgaA+IgfADIgdADIgBABIgDAAIgDAAIgDABIghADIguAEg");
	this.shape_45.setTransform(943.375,537.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AJTO5IgnmUIAAgGIgCgPIAAgBIEp1/IAHgVIABAAIACAOIAnGcIkZU7IgKAtIgJAsgAtaO5IgpmqIWtAAIAAABIACAPIAAAGIAnGUgAgbqoIgbgbIgSgTIAag/IAWg3IBLgIIBLgHIA0A1IAeAgIADACIAQARIgOAjIgJAVIgaA+IgfADIgeAEIgBAAIgDAAIgDAAIgCABIghACIgvAFgAInr7IAAggQAUAJAZgBQAZABATgIIAAAfQgSAHgZABQgZgBgVgHgAmtr7IAAggQAUAJAZgBQAZABATgIIAAAfQgSAHgZABQgZgBgVgHgAIXtkQgOgIgGgKIAAgFIAAgKIAAgCQAAgTAWgQQAXgOAhAAQAhAAAXAOQAXAQAAATIAAACIgCAKQgGARgLAGQgYAPgjAAQgjAAgYgPgAm9tkQgOgIgGgKIAAgFIAAgKIAAgCQAAgTAWgQQAXgOAhAAQAhAAAXAOQAXAQAAATIAAACIgCAKQgGARgLAGQgYAPgjAAQgjAAgYgPg");
	this.shape_46.setTransform(945.625,556.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("Ak0t0QgBABgBgJQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEIACAAIAAAIIAABFQgGAHgLAGQgHAFgIADQgTAHgZAAQgZAAgUgIAlUsaIAAAfQgSAIgZAAQgZAAgVgIIAAggAnRt2IAAA9QAFANARAKQAGAEAIADAhIrVIAag/IAWg5IBLgHIBLgGIA0A0IAeAfIADADIAQARIAEA0IgXA4IgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgCABgBAAQgQACgQACIgvADIg3g6IgtgtgADjrzIgOAjIgJAVIgaA+IgfAEQgPABgPACQAAAAgBAAIgDAAIgDAAQgBAAgBABQgRABgQABIgvAFIg3g6IgbgbIgSgSAhamJIAWBCABAmVIAABFAoLgSQAqhCBvgyQAWgKAYgKQCmhAC8AAQBfAABPARQBOARAzAfQBeA6gbBOADYl/IgXA9AnQkgIA4BWAlmlCIAwA5Ajxl1IAqBBAqVFNIC5tTIQzAAIi5NTgAuDIQIEt2VICFAAAuDIQIApGpIWtAAAKet8QgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEgAInsbIAAAgQAVAIAZAAQAZAAASgIIAAgfQgTAHgZAAQgZAAgUgIgAKgt0IAABFQgGAHgLAGQgHAFgIADAIDt2IAAA9QAFANARAKQAGAEAIADAKgt0QgBABgBgJIACAAgANYuFIACAAIgHAVIADgNgANWt9IABgIIABAAANbuFIAAAAIABAJIABAFgANct8IgBgJAKguFIC3AAAFDkRIAhg/AHrkgIg4BWANdt3IAnGcQiNKdiMKeQgFAWgFAXIgJAsIgFAAAIqIQIAAAAIACAPQAAACAAAEIAnGUANTtwIkpWAAuDIQIWtAAAk0uFIM3AA");
	this.shape_47.setTransform(945.625,556.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("Ak2t8IACAAIAAAIQgBABgBgJgAnRuFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFgAnRt2IAAA9QAFANARAKQAGAEAIADAlUsaIAAAfQgSAIgZAAQgZAAgVgIIAAggAlUsaQgTAHgZAAQgZAAgUgIAk0t0IAABFQgGAHgLAGQgHAFgIADAhIrVIAag/IAWg5IBLgHIBLgGIA0A0IAeAfIADADIAQARIAEA0IgXA4IgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgCABgBAAQgQACgQACIgvADIg3g6IgtgtgADjrzIgOAjIgJAVIgaA+IgfAEQgPABgPACQAAAAgBAAIgDAAIgDAAQgBAAgBABQgRABgQABIgvAFIg3g6IgbgbIgSgSABAmVIAABFADYl/IgXA9AhamJIAWBCAoLgSQAqhCBvgyQAWgKAYgKQCmhAC8AAQBfAABPARQBOARAzAfQBeA6gbBOAnQkgIA4BWAlmlCIAwA5Ajxl1IAqBBAuDIQIEt2VICFAAAqVFNIC5tTIQzAAIi5NTgAuDIQIApGpIWtAAAIDt2IAAgGQAAgEAAgFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAA9QAFANARAKQAGAEAIADIAAAgQAVAIAZAAQAZAAASgIIAAgfAKgt0IAABFQgGAHgLAGQgHAFgIADQgTAHgZAAQgZAAgUgIAKet8IACAAIAAAIQgBABgBgJgANWt9IABgIIABAAIACAAIgHAVIADgNIACgIANbuFIAAAAIABAJIABAFgANct8IgBgJAKguFIC3AAAFDkRIAhg/AHrkgIg4BWANdt3IAnGcQiNKdiMKeQgFAWgFAXIgJAsIgFAAAIqIQIAAAAIACAPQAAACAAAEIAnGUANTtwIkpWAAk0uFIM3AAAuDIQIWtAA");
	this.shape_48.setTransform(945.625,556.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AttLLIEt2VICFAAIAAAKIAAAFQAHAKANAIQAZAQAjAAQAiAAAZgQQAKgGAHgRQABAIABgBIAAgHIgCAAIACgKIM2AAIAAAKIAAAFQAHAKANAIQAZAQAjAAQAjAAAYgQQAKgGAHgRQABAIABgBIAAgHIgCAAIACgKIC3AAIgCAIIgDAOIkoV/gAp/IIIQzAAIC5tSIwzAAgAgunmIAtAuIA4A6IAugEIAhgDIADgBIADAAIADAAIABgBIAdgDIAfgDIAag+IAXg5IgDg0IgRgRIgDgCIgeggIgzg0IhLAHIhLAHIgXA4IgaA/gAI9pAQAVAIAaAAQAYAAASgIIAAgfQAJgDAHgFQALgGAGgHIAAhFIAABFQgGAHgLAGQgHAFgJADQgTAIgYAAQgaAAgUgJQgHgDgGgEQgRgKgGgNIAAg9IAAA9QAGANARAKQAGAEAHADgAmXpAQAVAIAaAAQAYAAASgIIAAgfQAJgDAHgFQALgGAGgHIAAhFIAABFQgGAHgLAGQgHAFgJADQgTAIgYAAQgaAAgUgJgAm7p+QAGANAQAKIAOAHIgOgHQgQgKgGgNIAAg9IAAA9gAgBm4IgtguIgEg0IATASIAaAbIA4A6IAugEIAhgDIADgBIADAAIADAAIABAAIAdgDIAfgDIAag/IAKgVIAOgjIADA0IgXA5IgaA+IgfADIgdADIgBABIgDAAIgDAAIgDABIghADIguAEgAI9pgIAAAAg");
	this.shape_49.setTransform(943.375,537.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("Ak2t8IACAAIAAAIQgBABgBgJgAnRuFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFgAnRt2IAAA9QAFANARAKQAGAEAIADAlUsaIAAAfQgSAIgZAAQgZAAgVgIIAAggAlUsaQgTAHgZAAQgZAAgUgIAk0t0IAABFQgGAHgLAGQgHAFgIADAhIrVIAag/IAWg5IBLgHIBLgGIA0A0IAeAfIADADIAQARIAEA0IgXA4IgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgCABgBAAQgQACgQACIgvADIg3g6IgtgtgADjrzIgOAjIgJAVIgaA+IgfAEQgPABgPACQAAAAgBAAIgDAAIgDAAQgBAAgBABQgRABgQABIgvAFIg3g6IgbgbIgSgSABAmVIAABFAhamJIAWBCADYl/IgXA9AoLgSQAqhCBvgyQAWgKAYgKQCmhAC8AAQBfAABPARQBOARAzAfQBeA6gbBOAnQkgIA4BWAlmlCIAwA5Ajxl1IAqBBAuDIQIEt2VICFAAAqVFNIC5tTIQzAAIi5NTgAuDIQIApGpIWtAAAIDt2IAAgGQAAgEAAgFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAA9QAFANARAKQAGAEAIADAKAsaQgTAHgZAAQgZAAgUgIIAAAgQAVAIAZAAQAZAAASgIgAKgt0IAABFQgGAHgLAGQgHAFgIADAKet8IACAAIAAAIQgBABgBgJgANWt9IABgIIABAAIACAAIgHAVIADgNIACgIANbuFIAAAAIABAJIABAFgANct8IgBgJAKguFIC3AAAHrkgIg4BWAFDkRIAhg/ANdt3IAnGcQiNKdiMKeQgFAWgFAXIgJAsIgFAAAIqIQIAAAAIACAPQAAACAAAEIAnGUANTtwIkpWAAk0uFIM3AAAuDIQIWtAA");
	this.shape_50.setTransform(945.625,556.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("Ak2t8QgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEIACAAIAAAIQgBABgBgJgAlUsaIAAAfQgSAIgZAAQgZAAgVgIIAAggAnRt2IAAA9QAFANARAKQAGAEAIADAlUsaQgTAHgZAAQgZAAgUgIAk0t0IAABFQgGAHgLAGQgHAFgIADAhIrVIAag/IAWg5IBLgHIBLgGIA0A0IAeAfIADADIAQARIgOAjIgJAVIgaA+IgfAEQgPABgPACQAAAAgBAAIgDAAIgDAAQgBAAgBABQgRABgQABIgvAFIg3g6IgbgbgADjrzIAEA0IgXA4IgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgCABgBAAQgQACgQACIgvADIg3g6IgtgtIgEg0ABAmVIAABFADYl/IgXA9AoLgSQAqhCBvgyQAWgKAYgKQCmhAC8AAQBfAABPARQBOARAzAfQBeA6gbBOAhamJIAWBCAnQkgIA4BWAlmlCIAwA5Ajxl1IAqBBAuDIQIEt2VICFAAAqVFNIC5tTIQzAAIi5NTgAuDIQIApGpIWtAAAIDuFQAAgBAAgBQAAgUAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAUQAAABAAABQAAAFgCAEQgGASgLAGQgYAPgjAAQgjAAgYgPQgOgIgGgKIAAgGQAAgEAAgFgAInsbIAAAgQAVAIAZAAQAZAAASgIIAAgfAKgt0IAABFQgGAHgLAGQgHAFgIADQgTAHgZAAQgZAAgUgIAIDt2IAAA9QAFANARAKQAGAEAIADAKet8IACAAIAAAIQgBABgBgJgANXuFIABAAIACAAIgHAVIADgNgANbuFIAAAAIABAJIABAFgANWt9IACgIANct8IgBgJAKguFIC3AAAFDkRIAhg/AHrkgIg4BWANdt3IAnGcQiNKdiMKeQgFAWgFAXIgJAsIgFAAAIqIQIAAAAIACAPQAAACAAAEIAnGUANTtwIkpWAAk0uFIM3AAAuDIQIWtAA");
	this.shape_51.setTransform(945.625,556.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AttLLIEt2VICFAAIAAAKIAAAFQAHAKANAIQAZAQAjAAQAiAAAZgQQAKgGAHgRQABAIABgBIAAgHIgCAAIACgKIM2AAIAAAKIAAAFIAAA9QAGANARAKQAGAEAHADIAAAgQAVAIAaAAQAYAAASgIIAAgfQgTAIgYAAQgaAAgUgJQgHgDgGgEQgRgKgGgNIAAg9QAHAKANAIQAZAQAjAAQAjAAAYgQQAKgGAHgRQABAIABgBIAAgHIgCAAIACgKIC3AAIgCAIIgDAOIkoV/gAp/IIIQzAAIC5tSIwzAAgAgyoaIAEA0IAtAuIA4A6IAugEIAhgDIADgBIADAAIADAAIABgBIAdgDIAfgDIAag+IAXg5IgDg0IADA0IgXA5IgaA+IgfADIgdADIgBABIgDAAIgDAAIgDABIghADIguAEIg4g6IgtguIgEg0IATASIAaAbIA4A6IAugEIAhgDIADgBIADAAIADAAIABAAIAdgDIAfgDIAag/IAKgVIAOgjIgRgRIgDgCIgeggIgzg0IhLAHIhLAHIgXA4IgaA/gAm7p+QAGANAQAKIAOAHIAAAgQAVAIAaAAQAYAAASgIIAAgfQAJgDAHgFQALgGAGgHIAAhFIAABFQgGAHgLAGQgHAFgJADQgTAIgYAAQgaAAgUgJIgOgHQgQgKgGgNIAAg9IAAA9gAK3p0QgGAHgLAGQgHAFgJADQAJgDAHgFQALgGAGgHIAAhFg");
	this.shape_52.setTransform(943.375,537.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_45},{t:this.shape_46},{t:this.shape_44},{t:this.shape_47},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},99).to({state:[{t:this.shape_49},{t:this.shape_46},{t:this.shape_44},{t:this.shape_48},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},333).to({state:[{t:this.shape_49},{t:this.shape_46},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},22).to({state:[{t:this.shape_46},{t:this.shape_52},{t:this.shape_44},{t:this.shape_51},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},98).to({state:[]},647).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Амперметр = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Амперметр
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJADgHQADgGAEgDQADgCADAAQAGAAAFAFQAGAJAAAMQAAAIgDAHQgCAGgFADQgEAEgDAAQgHgBgFgIgAgEgWQgCADgBAHIgCAOQAAAKADAHQADAGADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCABgEQACgHABgLQgBgKgCgFQgBgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgDACg");
	this.shape.setTransform(233.55,526.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJACgHQADgGAFgDQADgCADAAQAGAAAFAFQAGAJAAAMQAAAIgCAHQgDAGgEADQgEAEgEAAQgHgBgFgIgAgDgWQgEADgBAHIgBAOQABAKACAHQACAGAEAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBQACgCABgEQABgHAAgLQAAgKgBgFQgCgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACg");
	this.shape_1.setTransform(229.55,526.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAbIAAgBIAEgBIACgBIAAgHIAAgbIAAgIIgBgBIgCgBIgEACIAAgCIAMgGIABAAIAAArIAAAGIACACIAEABIAAABg");
	this.shape_2.setTransform(225.525,526.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgHADgHQADgHAEgDQADgCADgBQAGAAAFAHQAGAHAAANQAAAJgDAGQgCAHgFACQgEADgDAAQgHAAgFgJgAgEgVQgCACgBAIIgCAMQAAALADAHQADAGADAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCABgFQACgGABgLQgBgJgCgHQgBgEgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_3.setTransform(225.9,516.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAbIAAgBQAGAAAEgCQAEgDADgFQAEgGACgGQgGADgEAAQgGAAgEgEQgEgDAAgIQAAgGAEgGQAFgGAHgBQAGABAFAFQAGAHAAAKQAAAHgFAIQgEAHgIAGQgFADgHAAgAgGgVQgDADAAAHQAAAHAEAEQACAEADAAIAEgBIAFgDIAAgHIgBgIQgBgEgDgCQgCgDgCAAQgDAAgDADg");
	this.shape_4.setTransform(221.875,516.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgHACgHQADgHAFgDQADgCADgBQAGAAAFAHQAGAHAAANQAAAJgCAGQgDAHgEADQgEACgEAAQgHAAgFgJgAgDgVQgEACgBAIIgBAMQABALACAHQACAGAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQACgCABgFQABgGAAgLQAAgJgBgHQgCgEgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBADg");
	this.shape_5.setTransform(215.6,512.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAXQgDgEAAgEQAAgEACgEQACgDAGgEQgGgEgCgEQgCgDAAgDQAAgFAEgEQAEgDAGgBQAGABAEADQAEADAAAFQAAADgCADQgCADgHAEIAJAIQADADAAAFQAAAGgEAEQgEADgHAAQgHAAgEgEgAgHAHQgBADAAAEQAAAGACADQADACADAAQAFABACgDQADgDAAgDIgCgFQgDgEgHgHQgDADgCADgAgGgWQgCACAAADIABAFIADADIAFAGIAGgHIABgGQAAgEgCgCQgCgDgEAAQgDAAgDADg");
	this.shape_6.setTransform(211.625,512.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJACgHQADgGAFgDQAEgDACABQAHgBAEAHQAGAHAAANQAAAJgDAGQgCAGgFAEQgEACgDAAQgHABgFgJgAgEgWQgCAEgBAHIgBAMQAAALACAHQADAGADAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCABgEQADgHAAgLQAAgJgDgHQgBgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCACg");
	this.shape_7.setTransform(204.85,511.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEAbIAOgvIgNAAIgGABQgEACgCAEIgBAAIAFgNIAcAAIAAACIgRAzg");
	this.shape_8.setTransform(200.825,511.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJACgGQADgHAFgDQAEgDACAAQAHABAEAFQAGAJAAAMQAAAIgDAHQgCAGgFADQgEADgDABQgHgBgFgIgAgEgWQgCAEgBAGIgBAOQAAAKACAHQADAGADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCABgFQADgGAAgLQAAgKgDgFQgBgFgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCACg");
	this.shape_9.setTransform(191.35,509.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIAYQgIgHAAgMQAAgFADgHQADgGAFgFQAFgFAEgCIAJgCIADAAIAAACQgGAAgDACQgDABgDADIgFAHIgDAKQAGgEAEAAQAGAAAEAEQAEAEAAAGQAAAIgEAFQgFAHgIAAQgFAAgDgEgAgDgCIgFACIAAAIIABAIQABAFADACQABABAAAAQABABAAAAQABAAAAAAQAAAAABAAQADABADgEQADgDAAgGQAAgHgDgEQgDgFgEAAIgDABg");
	this.shape_10.setTransform(187.375,509.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJACgGQAEgHAEgDQADgDADAAQAGABAFAFQAGAJAAAMQAAAIgCAHQgDAGgEADQgFADgDABQgHgBgFgIgAgEgWQgDAEgBAGIAAAOQgBAKADAHQADAGADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQADgCABgFQABgGAAgLQAAgKgBgFQgCgFgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgDACg");
	this.shape_11.setTransform(177.7,508.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMAaQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgBIADgBIACAAIACACQADACADAAQAEAAADgEQAEgDAAgFQAAgFgEgEQgDgDgEgCQgEgCgIgBIAKgUIASAAIgDAHIgPAAIgDAHQAJABAGAGQAGAFAAAHQAAAEgCAEQgCAEgCACIgGAEQgEACgEAAQgFAAgCgBg");
	this.shape_12.setTransform(173.625,508.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJACgGQADgHAFgDQADgCADAAQAGAAAFAFQAGAJAAAMQAAAIgCAHQgDAGgEADQgEAEgEAAQgHgBgFgIgAgDgWQgEADgBAHIgBAOQABAKACAHQACAGAEAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBQACgCABgEQABgHAAgLQAAgKgBgFQgCgFgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgBACg");
	this.shape_13.setTransform(163.85,510.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAEAbIAAgOIgVAAIAAgFIAYgiIAEAAIAAAiIAHAAIAAAFIgHAAIAAAOgAgNAIIARAAIAAgag");
	this.shape_14.setTransform(159.775,510.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJADgHQADgGAEgDQADgDADABQAGgBAFAHQAGAHAAANQAAAJgDAGQgCAGgFAEQgEACgDAAQgHABgFgJgAgDgWQgDAEgCAHIgBAMQAAALADAHQADAGADAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQABgCABgEQACgHAAgLQAAgKgCgGQgBgEgCgCQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgCACg");
	this.shape_15.setTransform(152,513.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAaQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIABgDIACgBIACAAIADACIADACIADAAQADAAADgDQADgDAAgFIgBgFIgCgEIgFgDIgFgBIgBAAIAAAAIAFgCIAFgFQABgCAAgEQAAgDgCgCQgDgDgDAAQgGAAgEAGIgBgBQACgFAEgDQADgCAEAAQAHAAADADQACAEAAADQAAAGgHAGQAFACADADQACADAAAFQAAAHgEAFQgGAGgKAAQgFAAgCgBg");
	this.shape_16.setTransform(147.825,513.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMATQgEgIAAgKQAAgJADgGQADgHAEgDQADgDADAAQAGABAFAFQAGAIAAANQAAAIgDAHQgCAGgFADQgEADgDABQgHgBgFgIgAgEgWQgCAEgBAGIgCAOQAAAKADAHQACAGAEAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAABgBQABgCABgFQACgGABgLQgBgKgCgFQgBgFgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgDACg");
	this.shape_17.setTransform(143.1,518.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAbIAAgBQAOgNAFgIQAGgHAAgGQAAgGgEgDQgDgDgCAAQgFAAgCACQgEACgCAFIgBAAQABgHAFgEQADgEAGAAQAGAAAEAEQAFAEAAAGQgBAEgCAEQgDAFgGAIIgLAMIANAAIAGAAIADgCIACgCIACAAIgEAKg");
	this.shape_18.setTransform(139,518.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMASQgEgHAAgLQAAgHADgHQADgHAEgDQADgDADAAQAGABAFAFQAGAJAAAMQAAAIgDAHQgCAGgFADQgEADgDAAQgHAAgFgJgAgEgVQgCACgBAIIgCANQAAAKADAHQADAGADAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAQACgCABgFQACgGABgLQgBgJgCgHQgBgEgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_19.setTransform(133.65,521.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAhIABgCIACAAQAEAAADgCQACgCACgFIAQgrIACgIQgBgCgEAAIgDAAIACgBIAXAAQAJAAAEABQAFADABAEQACAEgCAGQgDAIgIAFQgGAFgLAAIgEgBIgFgBIgIAUQgCAFABACQAAAAAAABQABAAAAAAQABABABAAQABAAABAAIACAAIAAACgAAHgcIgJAcIADAAIADAAQAFAAAGgDQAFgDACgHQACgEgBgEQAAgDgCgDQgCgCgFAAIgHABg");
	this.shape_20.setTransform(200.35,572.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghAhIABgCIACAAQAFAAACgCQADgCACgFIASgyIgHAAIgHAAIgGAEQgDADgBAFIgCAAIAHgQIA1AAIgGAQIgCAAIABgGQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQgDgBgEAAIgJAAIgSAyQgCAFAAACQABACAEAAIACAAIgBACg");
	this.shape_21.setTransform(195.6,572.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AglAhIAAgCIADAAIAFgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABAAIADgGIAQgrQADgGgBgCQgBgCgEAAIgDAAIABgBIAyAAIgFAOIgCAAIABgHQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgGgBIgSAAIgJAaIANAAQAGABACgCQAEgDACgFIACAAIgJAWIgBAAIAAgGQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgFgBIgOAAIgIAWIgCAGIABABIAEABIALAAIAHgBQADgBADgDIAKgJIACAAIgMARg");
	this.shape_22.setTransform(188.525,572.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AABAhIABgCIACAAQAFAAACgCQADgCACgFIARgsIgvA3IgBAAIgEg3IgRAsQgDAFABACQABACAEAAIACAAIgBACIgWAAIAAgCIACAAQAEAAAEgCQABgCACgFIARgrIABgGQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBgBIgFgBIABgBIATAAIAEAzIAqgzIATAAIgBABIgCAAQgEABgDACIgDAHIgRArQgDAFACACQAAAAAAABQAAAAABAAQAAABABAAQABAAABAAIACAAIAAACg");
	this.shape_23.setTransform(181.3,572.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiAhIABgCIACAAQAFAAACgCQACgCACgFIARgrIABgIQgBgCgEAAIgDAAIABgBIAYAAQAJAAAEABQAEADACAEQACAEgCAGQgDAIgIAFQgGAFgLAAIgEgBIgFgBIgIAUQgCAFABACQAAAAAAABQABAAAAAAQABABABAAQABAAABAAIACAAIAAACgAAHgcIgJAcIADAAIADAAQAFAAAGgDQAFgDACgHQACgEgBgEQAAgDgCgDQgDgCgEAAIgHABg");
	this.shape_24.setTransform(173.7,572.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglAhIAAgCIADAAIAFgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgGIAQgrQADgGgBgCQgBgCgEAAIgDAAIABgBIAyAAIgFAOIgCAAIABgHQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgGgBIgSAAIgJAaIANAAQAGABACgCQAEgDACgFIACAAIgJAWIgBAAIAAgGQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgBIgOAAIgIAWIgCAGIABABIAEABIALAAIAHgBQADgBADgDIAKgJIACAAIgMARg");
	this.shape_25.setTransform(167.975,572.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAhIABgCQAFAAADgBQACgCACgHIAUgyIgeAAIgTAyQgDAHABABQABACAGAAIAAACIgdAAIAAgCQAHAAACgCQACgBADgHIAQgpQACgHAAgCQgBgBgHgBIABgBIBEAAIgBABQgGABgCABQgDACgDAHIgQApQgCAHABABQABACAGAAIAAACg");
	this.shape_26.setTransform(161.65,572.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AACAhIAAgCIACAAQAFAAADgCQABgCACgFIARgsIguA3IgBAAIgEg3IgRAsQgCAFAAACQABACAEAAIACAAIAAACIgYAAIABgCIADAAQADAAAEgCQACgCABgFIARgrIABgGQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIgGgBIABgBIATAAIAEAzIArgzIATAAIgBABIgDAAQgEABgDACIgEAHIgQArQgCAFAAACQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIACAAIAAACg");
	this.shape_27.setTransform(153.55,572.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAJAiIAAgCIAGgBIACgDIACgHIgBgJIgZAAIgIAKIgEAGQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQACACAEAAIgBACIgUAAIAAgCIAGgCQAEgCAFgHIAsg2IABAAIACA2QABAHABACQACACADAAIAAACgAgEAIIAWAAIgBgag");
	this.shape_28.setTransform(144.275,572.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.2,1,1).p("AGQAVIgnAiAGGAMIgiAlAF9AJIgfAgAFbgKIgYAlAFmgEIgeAlAFQgQIgZAoAENgnIgaApAEDgqIgYApAD3guIgVApAEpggIgaArAE8gTIgcAlAExgZIgZAmAGpA2IgqAbAGlAtIgrAeAGbAoIgnAbADggzIgWAoAhZhHIAGAlAgXhOIAAAnAgqhOIAAAnAijhEIANArAjAg5IAOAnAhohIIAGApAiPhDIAJAlAgDhOIgGAmAhEhMIAAAnAiChJIAKAqACPhGIgPApADGg7IgUAoACehFIgSArACshCIgTAqAA1hMIgLAnAAWhQIgJApABXhKIgLAmABnhGIgNAkAAkhOIgJAoAB4hCIgRAkADUg4IgXApAj5gnIAUAmAjsgtIATAoAkpgTIAVAgAkfgZIAXAjAkHgiIAYAkAl+AVIAZAfAlSgDIAZAgAlHgHIAVAfAldAAIAcAgAk1gOIAWAgAmoAwIAfAeAjMg2IAQAnAjYg0IASAo");
	this.shape_29.setTransform(182.35,524.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AFTgVIgnA7AD0g0IgcA9AGlAmIg0AqAh3hFIAKA7ACNhFIgZA7AANhPIgLA6AlKgPIAhA1AjqgyIAbA+AmkAlIArAr");
	this.shape_30.setTransform(182.475,522.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("ANbuFIAAAAIABAKgANXuFIABAAIACAAIgHAWIADgOgANWt9IACgIANct7IABAFIgCgPAKet7IACAAIAAAHQgBABgBgIQgGARgLAGQgYAQgjAAQgjAAgYgQQgOgIgGgKIAAgFQAAgFAAgFQAAAAAAgBQAAgUAWgQQAXgOAhAAQAhAAAXAOQAXAQAAAUQAAABAAAAQAAAFgCAFgAKgt0IAABFQgGAHgLAGQgHAFgIADQgTAIgZAAQgZAAgUgJIAAAgQAVAIAZAAQAZAAASgIIAAgfAKguFIC3AAAhIrVIAag/IAWg4IBLgHIBLgHIA0A0IAeAgIADACIAQARIAEA0IgXA5IgaA+IgfADQgPACgPABQAAABgBAAIgDAAIgDAAQgCAAgBABQgQABgQACIgvAEIg3g6IgtgugADjrzIgOAjIgJAVIgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgBABgBAAQgRABgQACIgvAEIg3g6IgbgbIgSgSAIDt2IAAA9QAFANARAKQAGAEAIADAFnkLIA2g+AETkpIAuhGAGZjXIBBgmAoLgSQAqhCBvgyIAAAAQAWgLAYgJQCmg/C8AAQBfAABPAQQBOARAzAfQBeA6gbBOAiomIIAVBBAgnmYIAABGAC2lHIAhg/ABlmSIgXA+AqVFNIC5tSIQzAAIi5NSgANdt2IAnGbQiNKdiMKeQgFAWgFAXIgJAsIgFAAAk2t7QgGARgLAGQgYAQgjAAQgjAAgYgQQgOgIgGgKIAAgFQAAgFAAgFQAAAAAAgBQAAgUAWgQQAXgOAhAAQAhAAAXAOQAXAQAAAUQAAABAAAAQAAAFgCAFgAk0t0QgBABgBgIIACAAIAAAHIAABFQgGAHgLAGQgHAFgIADQgTAIgZAAQgZAAgUgJAlUsaIAAAfQgSAIgZAAQgZAAgVgIIAAggAnRt2IAAA9QAFANARAKQAGAEAIADAuDIQIEt2VICFAAAnQkgIA4BWAlslCIAwA5AkUlqIArBBAuDIQIApGpIWtAAAIqIQIAAAAIACAPQAAADAAADIAnGUAuDIQIWtAAIEp1/Ak0uFIM3AA");
	this.shape_31.setTransform(180.725,554.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AJTO5IgnmUIAAgGIgCgPIAAAAIAAAAIACAPIAAAGIAnGUI2tAAIgpmpIWtAAIEp2AIAHgVIABAAIACAOIAnGbIkZU8IgKAtIgJAsgAgbqoIgbgbIgSgTIAag/IAWg3IBLgIIBLgHIA0A1IAeAgIADACIAQARIgOAjIgJAVIgaA+IgfADIgeAEIgBAAIgDAAIgDAAIgCABIghACIgvAFgAInr7IAAggQAUAJAZgBQAZABATgIIAAAfQgSAIgZAAQgZAAgVgIgAmtr7IAAggQAUAJAZgBQAZABATgIIAAAfQgSAIgZAAQgZAAgVgIgAIXtkQgOgIgGgKIAAgFIAAgKIAAgBQAAgVAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAVIAAABIgCAKQgGARgLAGQgYAPgjAAQgjAAgYgPgAm9tkQgOgIgGgKIAAgFIAAgKIAAgBQAAgVAWgPQAXgOAhAAQAhAAAXAOQAXAPAAAVIAAABIgCAKQgGARgLAGQgYAPgjAAQgjAAgYgPg");
	this.shape_32.setTransform(180.725,554.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AttLLIEt2VICFAAIAAAKIAAAFQAHAKANAIQAZAQAjAAQAiAAAZgQQAKgGAHgRIACgKIM2AAIAAAKIAAAFIAAA9QAGANARAKQAGAEAHADQgHgDgGgEQgRgKgGgNIAAg9QAHAKANAIQAZAQAjAAQAjAAAYgQQAKgGAHgRIACgKIC3AAIgCAIIgDAOIkoV/gAp/IIIQzAAIC5tSIwzAAgAgunmIAtAuIA4A6IAugEIAhgDIADgBIADAAIADAAIABgBIAdgDIAfgDIAag+IAXg5IgDg0IgRgRIgDgCIgeggIgzg0IhLAHIhLAHIgXA4IgaA/gAI9pAQAVAIAaAAQAYAAASgIIAAgfQgTAIgYAAQgaAAgUgJgAmXpAQAVAIAaAAQAYAAASgIIAAgfQAJgDAHgFQALgGAGgHIAAhFIAAgHIgCAAQABAIABgBIAABFQgGAHgLAGQgHAFgJADQgTAIgYAAQgaAAgUgJIgOgHQgQgKgGgNIAAg9IAAA9QAGANAQAKIAOAHgAK3p0QgGAHgLAGQgHAFgJADQAJgDAHgFQALgGAGgHIAAhFgAK3q5IAAgHIgCAAQABAIABgBgAgBm4IgtguIgEg0IATASIAaAbIA4A6IAugEIAhgDIADgBIADAAIADAAIABAAIAdgDIAfgDIAag/IAKgVIAOgjIADA0IgXA5IgaA+IgfADIgdADIgBABIgDAAIgDAAIgDABIghADIguAEgAmXpgIAAAAgAkdq5g");
	this.shape_33.setTransform(178.475,536.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF99").s().p("Ap2GqIC6tTIQyAAIi4NTgAGwBLQAGgSAAgQQAAg5hJgsQgzgfhPgRQhOgRhfAAQi9AAilBAQgYAJgWAKIAAAAQhwAygpBCQAphCBwgyIAAAAQAWgKAYgJQClhAC9AAQBfAABOARQBPARAzAfQBJAsAAA5QAAAQgGASgAl4htIg4hWgAG4h6IBBgngAGviAIAqgbgAlZiEIgfgegAGqiHIAqgegAGkiOIAngcgAGjiTIA0grgAlHiTIgsgrgAGZibIAngigAk1idIgagggAGTigIAjglgAGOipIAfgggAkcitIgwg4gAGHivIA2g9gAF4ixIAeglgAkRixIgcgggAkJi0IgZghgAFyi2IAYgngAFmi6IAagogAkCi6IgVgggAj4i9Ighg2gAFdi+IAng7gAFRjAIAbgmgAjvjAIgWghgAjkjEIgVgigAFIjFIAZgngAE/jGIAagsgAjYjIIgXgkgAEyjMIAuhHgAjJjMIgrhBgAEjjPIAagqgAi/jQIgYglgAEbjUIAYgpgAi1jUIgUgmgAESjXIAVgqgAiejXIgbg/gAiqjYIgSgngAEJjaIAdg+gAD6jeIAWgngAiWjfIgSgogADtjhIAXgqgAiMjiIgQgngAiCjkIgOgogADhjmIAWgngADWjqIAhhAgAhzjqIgVhCgADJjrIATgqgAhmjsIgOgqgAC8jtIASgrgACljuIAZg7gAg7juIgLg7gACwjvIAQgqgAhWjwIgJgmgACXjxIARgjgAgyjxIgGgqgAhIjyIgKgqgACKj0IANgkgAgkj1IgFglgAgIj2IAAhFgAB8j3IALglgABuj3IAXg+gAgUj3IAAgngABZj4IAMgmgABLj4IAJgogAA9j5IAJgqgAAzj5IALg6gAAFj5IAAgogAAYj6IAAgngAAlj7IAGgmg");
	this.shape_34.setTransform(177.55,545.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.5,1,1).p("AFTgVIgnA7AGlAmIg0AqAD0g0IgcA9AANhPIgLA6ACNhFIgZA7Ah3hFIAKA7AlKgPIAhA1AmkAlIArArAjqgyIAbA+");
	this.shape_35.setTransform(182.475,522.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.2,1,1).p("AGQAVIgnAiAFQgQIgZAoAFmgEIgeAlAFbgKIgYAlAF9AJIgfAgAGGAMIgiAlAEpggIgaArAD3guIgVApAEDgqIgYApAENgnIgaApAExgZIgZAmAE8gTIgcAlADggzIgWAoAGbAoIgnAbAGlAtIgrAeAGpA2IgqAbAhohIIAGApAjAg5IAOAnAijhEIANArAgqhOIAAAnAgXhOIAAAnAhZhHIAGAlAB4hCIgRAkAAkhOIgJAoABnhGIgNAkABXhKIgLAmAAWhQIgJApAA1hMIgLAnACshCIgTAqACehFIgSArADGg7IgUAoACPhGIgPApAiChJIAKAqAhEhMIAAAnAgDhOIgGAmAiPhDIAJAlADUg4IgXApAjsgtIATAoAj5gnIAUAmAkfgZIAXAjAkpgTIAVAgAkHgiIAYAkAlHgHIAVAfAl+AVIAZAfAlSgDIAZAgAldAAIAcAgAk1gOIAWAgAmoAwIAfAeAjYg0IASAoAjMg2IAQAn");
	this.shape_36.setTransform(182.35,524.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("ANbuFIAAAAIABAKgANXuFIABAAIACAAIgHAWIADgOgANWt9IACgIANct7IABAFIgCgPAKet7IACAAIAAAHQgBABgBgIQgGARgLAGQgYAQgjAAQgjAAgYgQQgOgIgGgKIAAgFQAAgFAAgFQAAAAAAgBQAAgUAWgQQAXgOAhAAQAhAAAXAOQAXAQAAAUQAAABAAAAQAAAFgCAFgAKgt0IAABFQgGAHgLAGQgHAFgIADQgTAIgZAAQgZAAgUgJIAAAgQAVAIAZAAQAZAAASgIIAAgfAKguFIC3AAAhIrVIAag/IAWg4IBLgHIBLgHIA0A0IAeAgIADACIAQARIAEA0IgXA5IgaA+IgfADQgPACgPABQAAABgBAAIgDAAIgDAAQgCAAgBABQgQABgQACIgvAEIg3g6IgtgugADjrzIgOAjIgJAVIgaA/IgfADQgPACgPABQAAAAgBAAIgDAAIgDAAQgBABgBAAQgRABgQACIgvAEIg3g6IgbgbIgSgSAIDt2IAAA9QAFANARAKQAGAEAIADAFnkLIA2g+AGZjXIBBgmAETkpIAuhGAoLgSQAqhCBvgyIAAAAQAWgLAYgJQCmg/C8AAQBfAABPAQQBOARAzAfQBeA6gbBOABlmSIgXA+AC2lHIAhg/AgnmYIAABGAiomIIAVBBAqVFNIC5tSIQzAAIi5NSgANdt2IAnGbQiNKdiMKeQgFAWgFAXIgJAsIgFAAAk2t7QgGARgLAGQgYAQgjAAQgjAAgYgQQgOgIgGgKIAAgFQAAgFAAgFQAAAAAAgBQAAgUAWgQQAXgOAhAAQAhAAAXAOQAXAQAAAUQAAABAAAAQAAAFgCAFgAk0t0QgBABgBgIIACAAIAAAHIAABFQgGAHgLAGQgHAFgIADQgTAIgZAAQgZAAgUgJAlUsaIAAAfQgSAIgZAAQgZAAgVgIIAAggAnRt2IAAA9QAFANARAKQAGAEAIADAuDIQIEt2VICFAAAnQkgIA4BWAlslCIAwA5AkUlqIArBBAuDIQIApGpIWtAAAIqIQIAAAAIACAPQAAADAAADIAnGUAuDIQIWtAAIEp1/Ak0uFIM3AA");
	this.shape_37.setTransform(180.725,554.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.2,1,1).p("AGQAVIgnAiAGGAMIgiAlAF9AJIgfAgAFbgKIgYAlAFmgEIgeAlAFQgQIgZAoAENgnIgaApAEDgqIgYApAD3guIgVApAEpggIgaArAE8gTIgcAlAExgZIgZAmAGpA2IgqAbAGlAtIgrAeAGbAoIgnAbADggzIgWAoAhZhHIAGAlAgXhOIAAAnAgqhOIAAAnAijhEIANArAjAg5IAOAnAhohIIAGApAiPhDIAJAlAgDhOIgGAmAhEhMIAAAnAiChJIAKAqACPhGIgPApADGg7IgUAoACehFIgSArACshCIgTAqAA1hMIgLAnAAWhQIgJApABXhKIgLAmABnhGIgNAkAAkhOIgJAoAB4hCIgRAkADUg4IgXApAj5gnIAUAmAjsgtIATAoAkpgTIAVAgAkfgZIAXAjAkHgiIAYAkAldAAIAcAgAlSgDIAZAgAl+AVIAZAfAlHgHIAVAfAk1gOIAWAgAmoAwIAfAeAjMg2IAQAnAjYg0IASAo");
	this.shape_38.setTransform(182.35,524.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_32},{t:this.shape_33},{t:this.shape_34},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},664).to({state:[{t:this.shape_32},{t:this.shape_33},{t:this.shape_34},{t:this.shape_31},{t:this.shape_38},{t:this.shape_30},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},145).to({state:[]},390).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_АмпСтрелка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// АмпСтрелка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.6,1,1).p("AjFktIGLJa");
	this.shape.setTransform(153.475,557.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ai7kzIF3Jn");
	this.shape_1.setTransform(155.4,556.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.6,1,1).p("Aiwk5IFhJz");
	this.shape_2.setTransform(155.65,556.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.6,1,1).p("Aipk9IFTJ7");
	this.shape_3.setTransform(156.4,556.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ailk/IFLJ/");
	this.shape_4.setTransform(156.85,556.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiflCIE/KF");
	this.shape_5.setTransform(157.375,555.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiblEIE3KJ");
	this.shape_6.setTransform(157.825,555.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiVlHIErKP");
	this.shape_7.setTransform(158.325,555.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiElOIEJKd");
	this.shape_8.setTransform(160.05,554.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.6,1,1).p("AiClPIEFKf");
	this.shape_9.setTransform(160.2,554.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(0.6,1,1).p("Ah7lSID3Kl");
	this.shape_10.setTransform(160.875,554.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(0.6,1,1).p("AhwlWIDhKt");
	this.shape_11.setTransform(161,554.35);

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
	this.instance.setTransform(890.9,696.85,1,1,0,0,0,-122.8,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:1255.8,y:5.55},24).to({rotation:164.9998,x:20.25,y:254.35},35).to({regY:-2.6,rotation:284.9996,x:1251.2,y:692.45},39).to({_off:true},1).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_слой3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// слой3
	this.instance = new lib.Электрон();
	this.instance.parent = this;
	this.instance.setTransform(825.5,145.5,1,1,59.9996,0,0,-122.8,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-2.7,rotation:-60.0011,x:18,y:685.15},26).to({rotation:104.9996,x:1255.25,y:485.95},22).to({scaleX:0.9999,scaleY:0.9999,rotation:225,x:36.1,y:33.85},36).to({rotation:45,x:14.75,y:276.85},14).to({_off:true},1).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_слой2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// слой2
	this.instance = new lib.Электрон();
	this.instance.parent = this;
	this.instance.setTransform(32.05,33.85,1.5797,1.6667,0,0,0,-122.7,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-2.7,scaleX:1.5796,scaleY:1.6666,rotation:150.0008,x:1248.25,y:359.05},20).to({regY:-2.6,rotation:75.001,x:870.15,y:690.25},17).to({regY:-2.8,rotation:180.001,x:442.4,y:41.35},18).to({scaleY:1.6665,rotation:255.0009,x:31.85,y:312.5},27).to({regY:-2.7,scaleX:1.5795,rotation:315.0004,x:211.25,y:691.4},16).to({_off:true},1).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_слой1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// слой1
	this.instance = new lib.Электрон();
	this.instance.parent = this;
	this.instance.setTransform(18,692.2,1,1,59.9996,0,0,-122.8,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30.0004,x:407.75,y:11.7},25).to({x:1275.95,y:288.05},33).to({regY:-2.6,rotation:-59.9996,x:1201.1,y:699.8},40).to({_off:true},1).wait(1101));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Стрелки = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Стрелки
	this.instance = new lib.Стрелка();
	this.instance.parent = this;
	this.instance.setTransform(1204.6,164.2,1,1,-59.9996,0,0,68.5,46.6);
	this.instance._off = true;

	this.instance_1 = new lib.Галочка();
	this.instance_1.parent = this;
	this.instance_1.setTransform(588.75,310.25,1,1,0,0,0,-88.5,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},189).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},5).to({state:[]},1).to({state:[{t:this.instance}]},55).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},3).to({state:[{t:this.instance}]},3).to({state:[]},3).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},2).to({state:[]},10).to({state:[{t:this.instance_1}]},33).to({state:[]},25).to({state:[{t:this.instance}]},47).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},1).to({state:[{t:this.instance}]},36).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},1).to({state:[]},4).to({state:[{t:this.instance}]},16).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[]},5).wait(386));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).wait(5).to({_off:true},1).wait(55).to({_off:false,rotation:-165.0008,x:83,y:49.95},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(5).to({_off:false},0).wait(2).to({_off:true},10).wait(105).to({_off:false,rotation:-45,x:1194.1,y:190.25},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false,rotation:0,skewX:14.9992,skewY:-165.0008,x:266.5,y:355.95},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(1).to({_off:false},0).to({_off:true},4).wait(16).to({_off:false,skewX:-14.9992,skewY:-194.9992,x:93.85,y:108.3},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).wait(1).to({_off:true},5).wait(386));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Соленоид = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Соленоид
	this.instance = new lib.Соленоид();
	this.instance.parent = this;
	this.instance.setTransform(553.25,169.15,1,1,0,0,0,54.2,122.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_РеостатПолзунок = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РеостатПолзунок
	this.instance = new lib.РеостатПолзунок();
	this.instance.parent = this;
	this.instance.setTransform(1117.9,300.85,1,1,0,0,0,13.9,22.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({x:1120.1,y:300.65},0).wait(90).to({x:1120.7,y:300.3},0).to({x:1109.15,y:268.7},21).wait(244).to({x:1105.5,y:246.35},75).to({_off:true},670).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Реостат = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Реостат
	this.instance = new lib.Реостат();
	this.instance.parent = this;
	this.instance.setTransform(1032.85,251,1,1,0,0,0,147.5,167.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ЛАТР = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ЛАТР
	this.instance = new lib.латрРучка();
	this.instance.parent = this;
	this.instance.setTransform(214.2,72.85,1,1,0,0,0,20.9,12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAARQgJAAgGgDQgGgDgDgFQgCgEAAgDQAAgGAGgEQAIgGAMABQAJAAAHADQAGADACAEQADAEAAADQgBAIgJAFQgHADgJAAIgBAAgAgQgIIgGADIgCAEQAAACACADQADADAHABIAMACQALAAAHgDQAGgBAAgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgCgDgEgBQgHgDgLAAQgJAAgGABg");
	this.shape.setTransform(190.9536,74.3706);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAARQgJAAgGgDQgGgDgDgFQgCgEAAgDQAAgGAGgEQAIgGAMABQAJAAAHADQAGADACAEQADAEAAADQgBAIgJAFQgHADgJAAIgBAAgAgQgIIgGADIgCAEQAAACACADQADADAHABIAMACQALAAAHgDQAGgBAAgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgCgDgEgBQgHgDgLAAQgJAAgGABg");
	this.shape_1.setTransform(190.7536,78.4206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYASQgMgPgHgFQgHgGgGAAQgFgBgDADQgEADAAAEQgBAEADADQACADAEACIAAABQgHgBgEgEQgDgFAAgEQABgHAEgFQAEgDAGgBIAIADQAEADAHAHIAMAMIABgNIAAgGIgBgEIgDgCIAAgBIAKAEIgCAfg");
	this.shape_2.setTransform(190.4969,82.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSASQgIgDgEgFQgDgFAAgFQAAgJALgGQAJgGANAAQALAAAIAEQAIAEAEAFQADAFAAADQAAAIgHAGQgKAHgRAAQgKABgIgEgAgXgHQgHADAAAEQAAADACACQACADAGACQAIACAPAAQALAAAIgCQAFgCACgDQACgCAAgDQAAgCgDgDQgEgEgJAAIgQgCQgNAAgJAEg");
	this.shape_3.setTransform(241.975,78.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF99").ss(2,1,1).p("AnoBTQgEACgFADQgQAMgGAEQgMAKgGAKQgGAMgCAZACbjCQArgJApABQAQABAPACQA+AJAjAiQAcAbALArQAGAcACA0QABAoADBCQABAjABArAGiBkQBBATA/AXACpASQADAVAcALQAOAHAZAEQAFABAFAAQBWAPBTAXAj1i5QglADgeAHQgbAHgVAJQhAAcgjA9QgfA3AABCQAAARACAPAj5AAQgfgBggAGQghAGgjAPQguATg+AmQAEAYAKAUQARAiAgARQABAAABABQAAABADABIAAABQAAAAAAABQABABACABQABAAACABQABABgBABQABgBAEADIAEADAmSDDQAEACAAACQABABAAAD");
	this.shape_4.setTransform(214.975,236.9398);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_5.setTransform(212.425,149.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Al5NMIgBgEQAAgDgEgBQAEABAAADIABAEQivghiRhCQjnhpgtiMIAA1BQAtCMDnBpQEfCCGWAAQGUAAEfiCQD/h0AcifIABGLQgTACgOANQgMAMgDANIgBAGQgBAMAHAJIAGAGQAFAEAHACQAKACAMgBIAEgBIAABDQgMAFgKAIQgMALgDAOIgBAGQgBAMAHAJIAGAFQAFAEAHACQAGACAHABIACGAQgMAEgJAIQgMAMgDANIgBAGQgBAMAHAJIAGAGQAFAEAHACQAGACAHAAIAABIQgLAEgKAJQgMALgDANIgBAHQgBAMAHAIIAGAGQAFAEAHACQAGACAHAAIABgNIAABbQgFC2kaCAQkfCDmUAAQjJAAisgggAmFM+IAEAEIgEgEIAAAAIgEgCIAAAAIgBAAIAAAAIAAgCIgDAAIgDgDIAAgBIAAAAIgDgCIgCgBQgggRgRgjQgKgUgEgXQAEAXAKAUQARAjAgARIACABIADACIAAAAIAAABIADADIADAAIAAACIAAAAIABAAIAAAAIAEACIAAAAgAG4MyIgChNQBBASA/AYQg/gYhBgSQhTgXhWgPIgKgBIAAkIIAfADQA+AJAjAhQAcAbALAsQAGAcACAzIAEBsIgEhsQgCgzgGgcQgLgsgcgbQgjghg+gJIgfgDIAAhMIonAAIAABnIAAC1QghAGgjAOQguATg+AnQA+gnAugTQAjgOAhgGIAABsIInAAIAAg0IAKABQBWAPBTAXIACBNgAndLZIgWAQQgMAKgGAJQgGANgCAZQACgZAGgNQAGgJAMgKIAWgQIAJgFQgCgPAAgRQAAhDAfg4QAjg9BAgcQAVgJAbgGQgbAGgVAJQhAAcgjA9QgfA4AABDQAAARACAPIgJAFgAISIKQgMAMgEANIgBAGQAAAGACAGIABAEQADAGAGAFQAOAJAVgCIAEgBIABAAQARgEANgMIAJgJQAHgJABgKIAAgCQACgRgOgKQgMgIgSABIgEABIgDAAQgTADgOAMgALpG/QgTADgNAMQgMAMgEANIgBAGIAAAFQABANALAIQANAKAVgCIABgBIAFAAQAJgCAJgFIAMgJIABgBIAIgIQAHgKABgJIAAgDQACgQgOgLQgMgIgSACIgDAAIgBAAIgDAAIgBABgAN+F0IgFABIgCAAQgUADgOANQgMALgDANIgBAEIAAACQgBARANAKQAJAGANABIABAAIALAAIAFgBQASgEANgMIAJgJQAGgJACgKIAAgCIAAgHIAAgBQgCgLgLgIIgFgDQgJgEgLAAIgEAAgAI6FkIgEAAIgDABQgTACgOANQgMAMgEANIgBAGQAAAGACAGIABAEQADAGAGAEQAOAKAVgDIAEAAIABAAQARgEANgMIAJgJQAHgJABgKIAAgCQACgRgOgKQgLgHgPAAIgEAAgALJE4QgMAMgEAMIgBAHIAAAEQABAOALAIQANAJAVgBIABgBIAFgBQAJgBAJgFIAMgKIABgBQAFgDADgEQAHgKABgKIAAgCQACgRgOgKQgMgIgSACIgDAAIgBAAIgDAAIgBAAQgTAEgNAMgANVDuQgMAMgDANIgBAEIAAACQgBARANAKQAJAGANABIABAAIALAAIAFgBQASgEANgMIAJgJQAGgJACgKIAAgCIAAgHIAAgBQgCgLgLgIIgFgDQgKgFgOABIgFABIgCAAQgUADgOAMgAFeg1QgMAMgDANIgBAGQgBAKAFAIQADAEAFADQANAKAVgCIAFgBQASgEANgLIAJgJQAFgIACgIIABgDIAAgDQABgRgOgJQgMgJgRACIgFAAIgCAAQgUADgOANgAI4hrIgEABIgDAAQgTADgOANQgMALgEANIgBAGQAAAHACAFIABAEQADAGAGAFQAOAKAVgDIAEAAIABgBQARgDANgNIAJgJQAHgJABgKIAAgCQACgRgOgKQgLgHgPAAIgEAAgApUhkQgOAKABARIAAACQACAKAGAJIAJAJQANAMASAEIABAAIAEABQAVACANgJQAGgFADgGIACgEQACgGgBgGIgBgGQgDgNgMgMQgOgNgUgCIgCgBIgFAAIgDAAQgQAAgKAHgALHiWQgMALgEANIgBAGIAAAFQABANALAIQANAKAVgCIABAAIAFgBQAJgCAJgFIAMgJIABgBIAIgIQAHgJABgKIAAgCQACgRgOgKQgMgIgSABIgDABIgBAAIgDAAIgBAAQgTADgNANgAsLihQgOALABAQIAAADQACAJAGAKIAIAIIABAAIANAKQAIAFAKABIAFABIABABQAUACANgKQALgIABgOIAAgEIgBgHQgDgMgMgMQgOgMgTgDIgBAAIgCgBIgBAAIgEAAIgFAAQgOAAgKAGgACViwQgIAHgDAIQgDAHAAAHQAAAQAOAMQAPAMAUAAQAVAAAOgMQAOgLAAgRQAAgHgCgHQgEgIgIgHIgDgBQgNgKgTAAQgUAAgPALgAFOjDQgMAMgEANIgBAGQAAAKAEAIQADAEAFAEQAOAKAVgDIAFAAQARgEANgMIAJgJQAGgIACgIIAAgDIAAgCQACgRgOgLQgMgIgSACIgEAAIgDAAQgTADgOANgANTjgQgMALgDANIgBAFIAAACQgBAQANAKQAJAHANABIABAAIALgBIAFgBQASgDANgNIAJgIQAGgJACgLIAAgCIAAgHIAAAAQgCgMgLgHIgFgDQgKgFgOABIgFAAIgCAAQgUADgOANgAuTjtIgFADQgLAIgBALIAAABIAAAHIAAACQABAKAHAJIAJAJQANAMARAEIAFABIAMAAIAAAAQANgBAKgGQANgKgBgRIgBgCIAAgEQgEgNgMgLQgOgNgTgDIgDAAIgEgBIgFAAQgLAAgJAEgApUjsQgOAKABARIAAACQACAKAGAJQAEAFAFAEQANANASADIABABIAEAAQAVACANgKQAGgEADgGIACgEQACgFgBgHIgBgGQgDgNgMgMQgOgMgUgDIgCgBIgFAAIgEAAQgPAAgKAHgAI4j6IgEABIgDAAQgTADgOANQgMALgEANIgBAHQAAAGACAGIABAEQADAFAGAFQAOAKAVgDIAEAAIABgBQARgDANgMIAJgJQAHgKABgJIAAgDQACgRgOgKQgLgHgPAAIgEAAgAsLkoQgOAJABARIAAADQACAKAGAJIAIAIIABABIANAJQAIAFAKACIAFABIABAAQAUABANgJQALgIABgNIAAgFIgBgGQgDgNgMgMQgOgMgTgDIgBAAIgCgBIgBAAIgEAAIgFAAQgOAAgKAHgALYk0IgBAAQgTADgOAMQgMAMgDANIgBAGIAAAFQABANALAIQANAKAUgCIABAAIAFgBQAKgCAIgFIANgJIABgBQAFgEADgEQAGgJACgKIAAgCQABgRgOgKQgMgIgRABIgEAAIgBAAIgCABgAvKkAIALgCIACAAQAHgCAGgEIAFgGQAHgIAAgMIgBgHQgEgNgMgMIgKgHIgKgFgAuTl1IgFADQgLAIgBAMIAAAHIAAACQABAKAHAJIAJAJQANANARADIAFABIAMABIAAAAQANgBAKgHQANgKgBgQIgBgDIAAgEQgEgNgMgMQgOgMgTgDIgDAAIgEgBIgFAAQgLAAgJAEgANamGIgEAAIgDABQgTACgOANQgMAMgEANIAAAEIgBACQgBARANAJQAKAHANABIAAAAIAMgBIAFAAQARgEANgMIAJgJQAHgKABgJIAAgDIAAgHIAAAAQgBgMgLgIIgFgCQgJgEgLAAIgFAAgAvKmIQAHAAAGgCQAHgCAGgEIAFgGQAHgIAAgNIgBgGQgEgNgMgLQgJgJgLgEgAEDK+IAAAAgABtKnQgIAAgIgDQgGgCgFgEIgCgBQgGgFgCgGQgDgGAAgGIAAgCQAAgGADgFQADgGAFgFQAGgFAHgCQAGgCAHgBIADAAQAIAAAGACQAIACAHAGQAGAFADAFQACAFABAGIAAADQAAAFgCAEQgCAGgFAFIgDADIgJAGQgHADgJABIgEAAgAiWKnQgIAAgIgDQgGgCgFgEIgCgBQgGgFgCgGQgDgGAAgGIAAgCQAAgGADgFQADgGAFgFQAGgFAHgCQAGgCAHgBIADAAQAIAAAGACQAIACAHAGQAGAFADAFQACAFABAGIAAADQAAAFgCAEQgCAGgFAFIgDADIgJAGQgHADgJABIgEAAgAkkKGgABkH4QgIAAgIgCIgLgGIgCgCQgGgFgCgGQgDgGAAgGIAAgCQAAgGADgFQADgGAFgFQAGgFAHgBQAGgDAHgBIADAAQAIAAAGADQAIABAHAGQAGAFADAGQACAFABAFIAAADIgCAJQgCAGgFAFIgDADIgJAGQgHADgJABIgEAAgAiTHzQgJAAgHgCQgGgCgFgEIgCgBQgGgFgDgGQgDgGAAgHIAAgCQABgGACgFQADgGAGgFQAFgEAHgCQAGgDAIAAIADAAQAHAAAHACQAIACAGAFQAGAFADAGQADAFAAAGIAAACQAAAFgBAEQgCAHgFAFIgEADIgIAFQgHAEgJAAIgEAAgAEDG2IAAAAg");
	this.shape_6.setTransform(212.975,172.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjbBYQhbgpAAg4QAAg5BbgoQATgIAVgHIAAAFIAAABIgoBxQAJAKAPAJIAOAIQAUAKAjAFIAKACIA2AHQAeAEAhABIATAAQAygBAjgIIAfgJQA9gTABgTIgnhxIAAgBQAAgGgCgFQAiAIAcANQBcAogBA5QABA4hcApQhbAoiAAAQiAAAhbgog");
	this.shape_7.setTransform(215.3,80.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("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LBJrQgLgIgBgOIAAgEIABgHQAEgMAMgMQANgMATgEIABAAIADAAIABAAIADAAQASgCAMAIQAOAKgCARIAAACQgBAKgHAKQgDAEgFADIgBABIgMAKQgJAFgJABIgFABIgBABIgGAAQgRAAgLgIgAO9JdQgHgCgFgEIgGgGQgHgIABgMIABgHQADgNAMgLQAKgJALgEIABAAIAAAnIAAAEIAAAWIgBANQgHAAgGgCgANlIpIgBAAQgNgBgJgGQgNgKABgRIAAgCIABgEQADgNAMgMQAOgMAUgDIACAAIAFgBQAOgBAKAFIAFADQALAIACALIAAABIAAAHIAAACQgCAKgGAJIgJAJQgNAMgSAEIgFABIgIAAIgDAAgAO9HHQgHgCgFgEIgGgGQgHgJABgMIABgGQADgNAMgMQAJgIAMgEIAAAnIAAgnIABAAIgBAnIAAAnQgHAAgGgCgAFXD9QgFgDgDgFQgFgIABgKIABgGQADgNAMgMQAOgNAUgDIACAAIAFAAQARgCAMAJQAOAJgBARIAAADIgBADQgCAIgFAIIgJAJQgNAMgSAEIgFABIgHAAQgQAAgLgIgAIIDYQgGgFgDgGIgBgEQgCgFAAgHIABgGQAEgNAMgLQAOgNATgDIADAAIAEgBQASgBAMAIQAOAKgCARIAAACQgBAKgHAJIgJAJQgNANgRADIgBABIgEAAIgIABQgQAAgLgIgAovDfIgEgBIgBAAQgSgEgNgMIgJgJQgGgJgCgKIAAgCQgBgRAOgKQAMgIARABIAFAAIACABQAUACAOANQAMAMADANIABAGQABAGgCAGIgCAEQgDAGgGAFQgKAHgQAAIgIAAgAK/CbQgLgIgBgNIAAgFIABgGQAEgNAMgLQANgNATgDIABAAIADAAIABAAIADgBQASgBAMAIQAOAKgCARIAAACQgBAKgHAJIgIAIIgBABIgMAJQgJAFgJACIgFABIgBAAIgGAAQgRAAgLgIgArlCjIgBgBIgFgBQgKgBgIgFIgNgKIgBAAIgIgIQgGgKgCgJIAAgDQgBgQAOgLQAMgIARACIAEAAIABAAIACABIABAAQATADAOAMQAMAMADAMIABAHIAAAEQgBAOgLAIQgKAIgQAAIgHAAgACSCCQgOgMAAgQQAAgHADgHQADgIAIgHQAPgLAUAAQATAAANAKIADABQAIAHAEAIQACAHAAAHQAAARgOALQgOAMgVAAQgUAAgPgMgAFGBvQgFgEgDgEQgEgIAAgKIABgGQAEgNAMgMQAOgNATgDIADAAIAEAAQASgCAMAIQAOALgCARIAAACIAAADQgCAIgGAIIgJAJQgNAMgRAEIgFAAIgJABQgPAAgLgIgANjBaIgBAAQgNgBgJgHQgNgKABgQIAAgCIABgFQADgNAMgLQAOgNAUgDIACAAIAFAAQAOgBAKAFIAFADQALAHACAMIAAAAIAAAHIAAACQgCALgGAJIgJAIQgNANgSADIgFABIgIABIgDAAgAtzBZIgFgBQgRgEgNgMIgJgJQgHgJgBgKIAAgCIAAgHIAAgBQABgLALgIIAFgDQALgFAOABIAEABIADAAQATADAOANQAMALAEANIAAAEIABACQABARgNAKQgKAGgNABIAAAAIgEAAIgIAAgAovBXIgEAAIgBgBQgSgDgNgNQgFgEgEgFQgGgJgCgKIAAgCQgBgRAOgKQAMgIARABIAFAAIACABQAUADAOAMQAMAMADANIABAGQABAHgCAFIgCAEQgDAGgGAEQgLAJgQAAIgHgBgAIIBJQgGgFgDgFIgBgEQgCgGAAgGIABgHQAEgNAMgLQAOgNATgDIADAAIAEAAQASgBAMAHQAOAKgCARIAAADQgBAJgHAKIgJAJQgNAMgRADIgBABIgEAAIgIABQgQAAgLgIgArlAbIgBAAIgFgBQgKgCgIgFIgNgJIgBgBIgIgIQgGgIgCgKIAAgDQgBgRAOgJQAMgJARACIAEAAIABAAIACABIABAAQATADAOAMQAMAMADANIABAGIAAAFQgBAMgLAIQgLAIgRAAIgFAAgAKvANQgLgIgBgMIAAgFIABgGQADgNAMgMQAOgMATgDIABAAIACgBIABAAIAEAAQARgBAMAIQAOAKgBARIAAACQgCAKgGAJQgDAEgFADIgBABIgNAJQgIAFgKACIgFABIgBAAIgFAAQgRAAgLgIgAO7gIQgHgCgFgEIgGgFQgHgJABgMIABgGQADgOAMgLQAKgIAMgFIgBBPQgHgBgGgCgAvMhUIAKAFIAKAHQAMAMAEANIABAHQAAAMgHAIIgFAGQgGAEgHACIgCAAIgLACgAtzguIgFgBQgRgDgNgNIgJgJQgHgJgBgKIAAgCIAAgHQABgMALgIIAFgDQALgFAOABIAEABIADAAQATADAOAMQAMAMAEANIAAAEIABADQABAQgNAKQgKAHgNABIAAAAIgEAAIgIgBgANBg7IAAAAQgNgBgKgHQgNgJABgRIABgCIAAgEQAEgNAMgMQAOgNATgCIADgBIAEAAQAOgBALAFIAFACQALAIABAMIAAAAIAAAHIAAADQgBAJgHAKIgJAJQgNAMgRAEIgFAAIgIABIgEAAgAvMjcQALAEAJAJQAMALAEANIABAGQAAANgHAIIgFAGQgGAEgHACQgGACgHAAgAOviXQgHgCgFgEIgGgGQgHgJABgMIABgGQADgNAMgMQAOgNATgCIABBPIgBhPIABAAIACgBIABAAQgBAFAAAHIACA4IABALIgEABIgBAAIgEABIgJAAQgHAAgGgBgAAilaQgOgHAAgKQAAgFADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAjQlkQgOgHAAgKQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADADAAAFQAAAKgPAHQgOAIgUAAQgVAAgOgIgAELlwQgOgHAAgKQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAm6mLQgOgHAAgLQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgACGmVQgOgIAAgJQAAgFADgDQADgGAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAGQACADAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAhSmVQgOgIAAgJQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQACADAAAFQAAAKgOAHQgOAHgUAAQgVAAgOgHgAHpmiQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgAkymrQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgAFanGQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgAi0nTQgOgHAAgKQAAgEADgEQADgFAIgFQAOgGAVAAQASAAANAFIADABQAIAFAEAFQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgApsnTQgOgHAAgKQAAgEADgEQADgFAIgFQAOgGAVAAQASAAANAFIADABQAIAFAEAFQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgADQndQgOgHAAgKQAAgEADgEQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgAnOndQgOgHAAgKQAAgEADgEQADgGAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAGQACAEAAAEQAAAKgOAHQgOAIgVAAQgUAAgPgIgAKcnsQgOgIAAgKQAAgEADgEQADgFAIgEQAPgIAUAAQATAAANAGIADACQAIAEAEAFQACAEAAAEQAAAKgOAIQgOAHgVAAQgUAAgPgHgAIKn5QgOgHAAgKQAAgFADgDQADgFAIgFQAPgHAUAAQATAAANAGIADABQAIAFAEAFQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAm6oqQgOgIAAgJQAAgFADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgApVoqQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAJhpDQgOgHAAgLQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAHQgOAHgVAAQgUAAgPgHgAr6pDQgOgHAAgLQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAHQgOAHgVAAQgUAAgPgHgAHdpHQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgALupPQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgAJvqQQgOgIAAgJQAAgFADgDQADgGAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAGQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAq4qQQgOgIAAgJQAAgFADgDQADgGAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAGQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAHdqjQgOgHAAgKQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADADAAAFQAAAKgPAHQgOAIgUAAQgVAAgOgIgAowquQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAtJrBQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgALurEQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgAJPrgQgOgHAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAGQgOAIgUAAQgVAAgOgIgAqqrgQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgApIsTQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAHdseQgOgIAAgJQAAgFADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAlKseQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAJvsrQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgArnsrIgHgFQgHgGAAgGQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAGgGAGIgIAFQgOAIgVAAQgUAAgPgIgADBtDQgOgHAAgLQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAHQgOAHgVAAQgUAAgPgHgAnOtFQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgAiRtFQgOgHAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAEABADADIhGAhIgGgDgAEytcQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgApWtxQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgAG8t1QgOgHAAgKQAAgEADgEQADgFAIgFQAOgGAVAAQASAAANAGIADAAQAIAFAEAFQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgAkDt1QgOgHAAgKQAAgEADgEQADgFAIgFQAOgGAVAAQASAAANAGIADAAQAIAFAEAFQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgACGuGQgOgHAAgKQAAgFADgDQADgFAIgFQAPgHAUAAQATAAANAGIADABQAIAFAEAFQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAg/uNQgOgIAAgKQAAgEADgEQADgFAIgEQAOgIAVAAQASAAAMAGIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgNAHgUAAQgVAAgOgHgAmRuiQgOgHAAgKQAAgFADgDQADgFAIgFQAPgGAUAAQATAAANAFIADABQAIAFAEAFQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAD3u3QgOgIAAgJQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADADAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAAivBQgOgHAAgKQAAgFADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAi5vBQgOgHAAgKQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHg");
	this.shape_8.setTransform(213.275,147.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AqzEuQjnhqgtiLQgLgjAAgjQAAgkALgiQAtiMDnhqQCEg7DBgZQCYgSDoAAQDjAACMASQCuAYCFA8QEYCAAHCzIAAAPQAAAQgDASQgdCfj/B0QkeCCmWAAQmUAAkfiCgAAqEPQgIAEgDAFQgDAEAAAEQAAAKAOAIQAPAHAUAAQAVAAAOgHQAOgHAAgLQAAgEgCgEQgEgFgIgEIgDgCQgNgFgTAAQgUAAgPAHgAjIEFQgIAEgDAFQgDAEAAAEQAAALAOAGQAPAJAUgBQAVABAOgJQAOgGAAgLQAAgEgCgEQgEgFgIgEIgDgBQgNgGgTAAQgUAAgPAHgAEUD5QgIAEgDAFQgDAEAAAFQAAAKAOAHQAOAHAVAAQAUAAAOgHQAPgHAAgKQAAgFgDgEQgEgFgIgEIgDgBQgNgHgSAAQgVABgOAHgAmyDeQgIAEgDAFQgDAEAAAEQAAAKAOAIQAPAHAUAAQAVAAAOgHQAOgIAAgKQAAgEgCgEQgEgFgIgEIgDgBQgNgHgTAAQgUABgPAHgACPDUQgIAEgDAGQgDADAAAFQAAAJAOAIQAOAHAVAAQAUAAAOgHQAPgHAAgKQAAgFgDgDQgEgGgIgEIgDgBQgNgGgSAAQgVAAgOAHgAhKDUQgIAEgDAGQgDADAAAFQAAAJAOAIQAPAHAUAAQAVAAAOgHQANgHAAgKQAAgFgCgDQgEgGgHgEIgDgBQgNgGgTAAQgUAAgPAHgAHyDHQgIAFgDAFQgDAEAAAEQAAAKAOAHQAOAHAVAAQAUAAAOgHQAPgHAAgKQAAgEgDgEQgEgFgIgFIgDgBQgNgFgSAAQgVAAgOAGgAkqC9QgIAFgDAFQgDADAAAFQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgGAAgLQAAgFgCgDQgEgFgIgFIgDgBQgNgFgTAAQgUAAgPAGgAFiCiQgIAEgDAGQgDADAAAFQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgGAAgLQAAgFgCgDQgEgGgIgEIgDgBQgNgGgTABQgUAAgPAGgAisCWQgIAFgDAEQgDAFAAAEQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgEgCgFQgEgEgIgFIgDgBQgNgFgTgBQgUABgPAGgApkCWQgIAFgDAEQgDAFAAAEQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgEgCgFQgEgEgIgFIgDgBQgNgFgTgBQgUABgPAGgADYCMQgIAEgDAGQgDAEAAAEQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgEgCgEQgEgGgIgEIgDgBQgNgGgTAAQgUAAgPAHgAnFCMQgIAEgDAGQgDAEAAAEQAAAKAOAHQAOAIAVAAQAUAAAOgIQAPgHAAgKQAAgEgDgEQgEgGgIgEIgDgBQgNgGgSAAQgVAAgOAHgAKlB8QgIAEgDAFQgDAEAAAFQAAAJAOAIQAOAIAVAAQAUAAAOgIQAPgHAAgKQAAgFgDgEQgEgFgIgEIgDgBQgNgGgSAAQgVAAgOAHgAITBwQgIAFgDAFQgDADAAAFQAAAJAOAIQAOAIAVgBQAUABAOgIQAPgHAAgKQAAgFgDgDQgEgFgIgFIgDgBQgNgGgSAAQgVAAgOAHgAiJjaQgIAEgDAFQgDADAAAFQAAAKAOAHIAHADQgTAQgBAVQgVAHgTAIQhbAoAAA5QAAA4BbApQBbAoCAAAQCAAABbgoQBbgpAAg4QAAg5hbgoQgdgOghgIQgHgcgpgVQgygYhGgBQgrABgkAJQgDgDgDAAIgDgCQgNgFgTgBQgUAAgPAIgAmyA+QgIAFgDAFQgDAEAAAEQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgGAAgLQAAgEgCgEQgEgFgIgFIgDgBQgNgFgTgBQgUABgPAGgApMA+QgIAFgDAFQgDAEAAAEQAAAKAOAHQAOAIAVAAQAUAAAOgIQAPgGAAgLQAAgEgDgEQgEgFgIgFIgDgBQgNgFgSgBQgVABgOAGgAJqAmQgIAEgDAFQgDAEAAAEQAAALAOAGQAOAIAVAAQAUAAAOgIQAPgGAAgLQAAgEgDgEQgEgFgIgEIgDgCQgNgFgSAAQgVAAgOAHgArxAmQgIAEgDAFQgDAEAAAEQAAALAOAGQAOAIAVAAQAUAAAOgIQAPgGAAgLQAAgEgDgEQgEgFgIgEIgDgCQgNgFgSAAQgVAAgOAHgAHlAhQgIAFgDAFQgDAEAAAEQAAAKAOAIQAPAHAUAAQAVAAAOgHQAOgIAAgKQAAgEgCgEQgEgFgIgFIgDAAQgNgGgTAAQgUAAgPAGgAL2AZQgIAEgDAGQgDADAAAFQAAAKAOAIQAPAHAUAAQAVAAAOgHQAOgIAAgKQAAgFgCgDQgEgGgIgEIgDgBQgNgGgTAAQgUABgPAGgAJ4gmQgIAEgDAGQgDADAAAFQAAAJAOAIQAOAHAVAAQAUAAAOgHQAPgHAAgKQAAgFgDgDQgEgGgIgEIgDgBQgNgGgSAAQgVAAgOAHgAqvgmQgIAEgDAGQgDADAAAFQAAAJAOAIQAOAHAVAAQAUAAAOgHQAPgHAAgKQAAgFgDgDQgEgGgIgEIgDgBQgNgGgSAAQgVAAgOAHgAHlg5QgIAEgDAGQgDADAAAFQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgFgCgDQgEgGgIgEIgDgBQgNgGgTAAQgUAAgPAHgAonhEQgIAEgDAFQgDADAAAGQAAAJAOAHQAOAIAVgBQAUABAOgIQAPgHAAgJQAAgGgDgDQgEgFgIgEIgDgCQgNgFgSAAQgVgBgOAIgAtAhYQgIAFgDAFQgDAEAAAEQAAAKAOAHQAOAIAVAAQAUAAAOgIQAPgGAAgLQAAgEgDgEQgEgFgIgFIgDgBQgNgGgSABQgVAAgOAGgAL2hbQgIAEgDAGQgDADAAAFQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgFgCgDQgEgGgIgEIgDgBQgNgGgTAAQgUABgPAGgAJXh2QgIAEgDAGQgDADAAAFQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgFgCgDQgEgGgIgEIgDgBQgNgGgTAAQgUABgPAGgAqhh2QgIAEgDAGQgDADAAAFQAAAKAOAHQAOAIAVAAQAUAAAOgIQAPgHAAgKQAAgFgDgDQgEgGgIgEIgDgBQgNgGgSAAQgVABgOAGgAo/iqQgIAEgDAGQgDAEAAAEQAAAKAOAHQAOAIAVAAQAUAAAOgIQAPgGAAgLQAAgEgDgEQgEgGgIgEIgDgBQgNgFgSAAQgVAAgOAGgAHli1QgIAEgDAGQgDAEAAAEQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgEgCgEQgEgGgIgEIgDgBQgNgGgTAAQgUABgPAGgAlBi1QgIAEgDAGQgDAEAAAEQAAAKAOAHQAOAIAVAAQAUAAAOgIQAPgHAAgKQAAgEgDgEQgEgGgIgEIgDgBQgNgGgSAAQgVABgOAGgAJ4jBQgIAEgDAFQgDAEAAAFQAAAJAOAIQAOAHAVAAQAUAAAOgHQAPgIAAgJQAAgFgDgEQgEgFgIgEIgDgBQgNgHgSABQgVgBgOAIgArejBQgIAEgDAFQgDAEAAAFQAAAGAGAGIAIAFQAOAHAVAAQAUAAAOgHIAJgFQAGgGAAgGQAAgFgDgEQgEgFgIgEIgDgBQgNgHgSABQgVgBgOAIgADKjZQgIAEgDAFQgDAEAAAEQAAAKAOAIQAOAHAVAAQAUAAAOgHQAPgIAAgKQAAgEgDgEQgEgFgIgEIgDgBQgNgHgSAAQgVAAgOAIgAnFjaQgIAEgDAFQgDADAAAFQAAAKAOAHQAOAIAVAAQAUAAAOgIQAPgGAAgLQAAgFgDgDQgEgFgIgEIgDgCQgNgFgSgBQgVAAgOAIgAE6jzQgIAFgDAFQgDAEAAAEQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgEgCgEQgEgFgIgFIgDgBQgNgGgTAAQgUABgPAGgApNkGQgIADgDAGQgDAEAAAEQAAAKAOAHQAOAIAVAAQAUAAAOgIQAPgGAAgLQAAgEgDgEQgEgGgIgDIgDgBQgNgHgSAAQgVAAgOAIgAHEkLQgIAEgDAGQgDAEAAAEQAAAJAOAIQAPAHAUAAQAVAAAOgHQAOgHAAgKQAAgEgCgEQgEgGgIgEIgDgBQgNgFgTAAQgUAAgPAGgAj7kLQgIAEgDAGQgDAEAAAEQAAAJAOAIQAPAHAUAAQAVAAAOgHQAOgHAAgKQAAgEgCgEQgEgGgIgEIgDgBQgNgFgTAAQgUAAgPAGgACPkcQgIAEgDAGQgDADAAAFQAAAJAOAIQAOAIAVgBQAUABAOgIQAPgHAAgKQAAgFgDgDQgEgGgIgEIgDgBQgNgGgSAAQgVAAgOAHgAg3kjQgIADgDAGQgDAEAAAEQAAAKAOAIQAPAGAUAAQAUAAAOgGQAOgIAAgKQAAgEgCgEQgEgGgIgDIgDgCQgMgGgTAAQgUAAgPAIgAmIk4QgIAEgDAGQgDADAAAEQAAAKAOAIQAOAHAVAAQAUAAAOgHQAPgHAAgLQAAgEgDgDQgEgGgIgEIgDgBQgNgGgSABQgVAAgOAGgAD/lOQgIAFgDAFQgDAEAAAEQAAAKAOAHQAPAIAUAAQAVAAAOgIQAOgHAAgKQAAgEgCgEQgEgFgIgFIgDgBQgNgFgTAAQgUAAgPAGgAAqlXQgIAEgDAFQgDAEAAAFQAAAKAOAHQAPAHAUAAQAVAAAOgHQAOgHAAgKQAAgFgCgEQgEgFgIgEIgDgBQgNgGgTAAQgUAAgPAHgAiwlXQgIAEgDAFQgDAEAAAFQAAAKAOAHQAOAHAVAAQAUAAAOgHQAPgHAAgKQAAgFgDgEQgEgFgIgEIgDgBQgNgGgSAAQgVAAgOAHg");
	this.shape_9.setTransform(212.425,82.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_10.setTransform(212.425,149.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("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QgLgIgBgOIAAgEIABgHQAEgMAMgMQANgMATgEIABAAIADAAIABAAIADAAQASgCAMAIQAOAKgCARIAAACQgBAKgHAKQgDAEgFADIgBABIgMAKQgJAFgJABIgFABIgBABIgGAAQgRAAgLgIgAO9JdQgHgCgFgEIgGgGQgHgIABgMIABgHQADgNAMgLQAKgJALgEIABAAIAAAnIAAAEIAAAWIgBANQgHAAgGgCgANlIpIgBAAQgNgBgJgGQgNgKABgRIAAgCIABgEQADgNAMgMQAOgMAUgDIACAAIAFgBQAOgBAKAFIAFADQALAIACALIAAABIAAAHIAAACQgCAKgGAJIgJAJQgNAMgSAEIgFABIgIAAIgDAAgAO9HHQgHgCgFgEIgGgGQgHgJABgMIABgGQADgNAMgMQAJgIAMgEIAAAnIAAgnIABAAIgBAnIAAAnQgHAAgGgCgAFXD9QgFgDgDgFQgFgIABgKIABgGQADgNAMgMQAOgNAUgDIACAAIAFAAQARgCAMAJQAOAJgBARIAAADIgBADQgCAIgFAIIgJAJQgNAMgSAEIgFABIgHAAQgQAAgLgIgAIIDYQgGgFgDgGIgBgEQgCgFAAgHIABgGQAEgNAMgLQAOgNATgDIADAAIAEgBQASgBAMAIQAOAKgCARIAAACQgBAKgHAJIgJAJQgNANgRADIgBABIgEAAIgIABQgQAAgLgIgAovDfIgEgBIgBAAQgSgEgNgMIgJgJQgGgJgCgKIAAgCQgBgRAOgKQAMgIARABIAFAAIACABQAUACAOANQAMAMADANIABAGQABAGgCAGIgCAEQgDAGgGAFQgKAHgQAAIgIAAgAK/CbQgLgIgBgNIAAgFIABgGQAEgNAMgLQANgNATgDIABAAIADAAIABAAIADgBQASgBAMAIQAOAKgCARIAAACQgBAKgHAJIgIAIIgBABIgMAJQgJAFgJACIgFABIgBAAIgGAAQgRAAgLgIgArlCjIgBgBIgFgBQgKgBgIgFIgNgKIgBAAIgIgIQgGgKgCgJIAAgDQgBgQAOgLQAMgIARACIAEAAIABAAIACABIABAAQATADAOAMQAMAMADAMIABAHIAAAEQgBAOgLAIQgKAIgQAAIgHAAgACSCCQgOgMAAgQQAAgHADgHQADgIAIgHQAPgLAUAAQATAAANAKIADABQAIAHAEAIQACAHAAAHQAAARgOALQgOAMgVAAQgUAAgPgMgAFGBvQgFgEgDgEQgEgIAAgKIABgGQAEgNAMgMQAOgNATgDIADAAIAEAAQASgCAMAIQAOALgCARIAAACIAAADQgCAIgGAIIgJAJQgNAMgRAEIgFAAIgJABQgPAAgLgIgANjBaIgBAAQgNgBgJgHQgNgKABgQIAAgCIABgFQADgNAMgLQAOgNAUgDIACAAIAFAAQAOgBAKAFIAFADQALAHACAMIAAAAIAAAHIAAACQgCALgGAJIgJAIQgNANgSADIgFABIgIABIgDAAgAtzBZIgFgBQgRgEgNgMIgJgJQgHgJgBgKIAAgCIAAgHIAAgBQABgLALgIIAFgDQALgFAOABIAEABIADAAQATADAOANQAMALAEANIAAAEIABACQABARgNAKQgKAGgNABIAAAAIgEAAIgIAAgAovBXIgEAAIgBgBQgSgDgNgNQgFgEgEgFQgGgJgCgKIAAgCQgBgRAOgKQAMgIARABIAFAAIACABQAUADAOAMQAMAMADANIABAGQABAHgCAFIgCAEQgDAGgGAEQgLAJgQAAIgHgBgAIIBJQgGgFgDgFIgBgEQgCgGAAgGIABgHQAEgNAMgLQAOgNATgDIADAAIAEAAQASgBAMAHQAOAKgCARIAAADQgBAJgHAKIgJAJQgNAMgRADIgBABIgEAAIgIABQgQAAgLgIgArlAbIgBAAIgFgBQgKgCgIgFIgNgJIgBgBIgIgIQgGgIgCgKIAAgDQgBgRAOgJQAMgJARACIAEAAIABAAIACABIABAAQATADAOAMQAMAMADANIABAGIAAAFQgBAMgLAIQgLAIgRAAIgFAAgAKvANQgLgIgBgMIAAgFIABgGQADgNAMgMQAOgMATgDIABAAIACgBIABAAIAEAAQARgBAMAIQAOAKgBARIAAACQgCAKgGAJQgDAEgFADIgBABIgNAJQgIAFgKACIgFABIgBAAIgFAAQgRAAgLgIgAO7gIQgHgCgFgEIgGgFQgHgJABgMIABgGQADgOAMgLQAKgIAMgFIgBBPQgHgBgGgCgAvMhUIAKAFIAKAHQAMAMAEANIABAHQAAAMgHAIIgFAGQgGAEgHACIgCAAIgLACgAtzguIgFgBQgRgDgNgNIgJgJQgHgJgBgKIAAgCIAAgHQABgMALgIIAFgDQALgFAOABIAEABIADAAQATADAOAMQAMAMAEANIAAAEIABADQABAQgNAKQgKAHgNABIAAAAIgEAAIgIgBgANBg7IAAAAQgNgBgKgHQgNgJABgRIABgCIAAgEQAEgNAMgMQAOgNATgCIADgBIAEAAQAOgBALAFIAFACQALAIABAMIAAAAIAAAHIAAADQgBAJgHAKIgJAJQgNAMgRAEIgFAAIgIABIgEAAgAvMjcQALAEAJAJQAMALAEANIABAGQAAANgHAIIgFAGQgGAEgHACQgGACgHAAgAOviXQgHgCgFgEIgGgGQgHgJABgMIABgGQADgNAMgMQAOgNATgCIABBPIgBhPIABAAIACgBIABAAQgBAFAAAHIACA4IABALIgEABIgBAAIgEABIgJAAQgHAAgGgBgAAilaQgOgHAAgKQAAgFADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAjQlkQgOgHAAgKQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADADAAAFQAAAKgPAHQgOAIgUAAQgVAAgOgIgAELlwQgOgHAAgKQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAm6mLQgOgHAAgLQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgACGmVQgOgIAAgJQAAgFADgDQADgGAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAGQACADAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAhSmVQgOgIAAgJQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQACADAAAFQAAAKgOAHQgOAHgUAAQgVAAgOgHgAHpmiQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgAkymrQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgAFanGQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgAi0nTQgOgHAAgKQAAgEADgEQADgFAIgFQAOgGAVAAQASAAANAFIADABQAIAFAEAFQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgApsnTQgOgHAAgKQAAgEADgEQADgFAIgFQAOgGAVAAQASAAANAFIADABQAIAFAEAFQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgADQndQgOgHAAgKQAAgEADgEQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgAnOndQgOgHAAgKQAAgEADgEQADgGAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAGQACAEAAAEQAAAKgOAHQgOAIgVAAQgUAAgPgIgAKcnsQgOgIAAgKQAAgEADgEQADgFAIgEQAPgIAUAAQATAAANAGIADACQAIAEAEAFQACAEAAAEQAAAKgOAIQgOAHgVAAQgUAAgPgHgAIKn5QgOgHAAgKQAAgFADgDQADgFAIgFQAPgHAUAAQATAAANAGIADABQAIAFAEAFQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAm6oqQgOgIAAgJQAAgFADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgApVoqQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAJhpDQgOgHAAgLQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAHQgOAHgVAAQgUAAgPgHgAr6pDQgOgHAAgLQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAHQgOAHgVAAQgUAAgPgHgAHdpHQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgALupPQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgAJvqQQgOgIAAgJQAAgFADgDQADgGAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAGQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAq4qQQgOgIAAgJQAAgFADgDQADgGAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAGQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAHdqjQgOgHAAgKQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADADAAAFQAAAKgPAHQgOAIgUAAQgVAAgOgIgAowquQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAtJrBQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgALurEQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgAJPrgQgOgHAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAGQgOAIgUAAQgVAAgOgIgAqqrgQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgApIsTQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAHdseQgOgIAAgJQAAgFADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAlKseQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHgAJvsrQgOgIAAgJQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgArnsrIgHgFQgHgGAAgGQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAGgGAGIgIAFQgOAIgVAAQgUAAgPgIgADBtDQgOgHAAgLQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAHQgOAHgVAAQgUAAgPgHgAnOtFQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAFIADACQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgAiRtFQgOgHAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAEABADADIhGAhIgGgDgAEytcQgOgIAAgKQAAgEADgEQADgFAIgEQAOgHAVAAQASAAANAFIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgOAHgUAAQgVAAgOgHgApWtxQgOgHAAgKQAAgEADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAEQAAALgOAGQgOAIgVAAQgUAAgPgIgAG8t1QgOgHAAgKQAAgEADgEQADgFAIgFQAOgGAVAAQASAAANAGIADAAQAIAFAEAFQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgAkDt1QgOgHAAgKQAAgEADgEQADgFAIgFQAOgGAVAAQASAAANAGIADAAQAIAFAEAFQADAEAAAEQAAAKgPAHQgOAIgUAAQgVAAgOgIgACGuGQgOgHAAgKQAAgFADgDQADgFAIgFQAPgHAUAAQATAAANAGIADABQAIAFAEAFQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAg/uNQgOgIAAgKQAAgEADgEQADgFAIgEQAOgIAVAAQASAAAMAGIADACQAIAEAEAFQADAEAAAEQAAALgPAHQgNAHgUAAQgVAAgOgHgAmRuiQgOgHAAgKQAAgFADgDQADgFAIgFQAPgGAUAAQATAAANAFIADABQAIAFAEAFQACADAAAFQAAAKgOAHQgOAIgVAAQgUAAgPgIgAD3u3QgOgIAAgJQAAgFADgDQADgGAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAGQADADAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAAivBQgOgHAAgKQAAgFADgEQADgFAIgEQAOgHAVAAQASAAANAGIADABQAIAEAEAFQADAEAAAFQAAAKgPAHQgOAHgUAAQgVAAgOgHgAi5vBQgOgHAAgKQAAgFADgEQADgFAIgEQAPgHAUAAQATAAANAGIADABQAIAEAEAFQACAEAAAFQAAAKgOAHQgOAHgVAAQgUAAgPgHg");
	this.shape_11.setTransform(213.275,147.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_9},{t:this.shape_11},{t:this.shape_7},{t:this.shape_6},{t:this.shape_10},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},280).to({state:[]},919).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Кнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Кнопка
	this.but1 = new lib.Play();
	this.but1.name = "but1";
	this.but1.parent = this;
	this.but1.setTransform(624,501.1,0.6924,0.6992);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.but1).wait(1).to({_off:true},1).wait(1198));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Источник_питания = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Источник_питания
	this.instance = new lib.ИсточникПитания();
	this.instance.parent = this;
	this.instance.setTransform(807.75,234.25,1,1,0,0,0,150.8,113);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(2,1,1).p("AkIiEQgJAFgDALQgDALAEALQAHAPAXAQQAhAUAmAIQAnAHAlgGQAdgFBpgtQBRgjA1ALQApAJAeAfQAeAgAHAoQAEAdgMAaQgNAcgaAGQgLACgUgCQgXgDgJABQgQACgMAMQgMAOAHAO");
	this.shape.setTransform(1017.9873,431.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AiliRQhOAbgGAsQgDAZATAYQARAUAbALQAtAUBAABQAmAABKgEQCSgIA7BKQALAOACAQQACASgMAJ");
	this.shape_1.setTransform(902.0877,432.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Выпрямитель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Выпрямитель
	this.instance = new lib.Выпрямитель();
	this.instance.parent = this;
	this.instance.setTransform(360.5,264.95,1,1,0,0,0,48.5,36.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Выключатель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Выключатель
	this.instance = new lib.Выключатель();
	this.instance.parent = this;
	this.instance.setTransform(382.95,397.7,1,1,0,0,0,33.8,34.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1199).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_ВыключКнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ВыключКнопка
	this.instance = new lib.ВыключательКнопка();
	this.instance.parent = this;
	this.instance.setTransform(383.75,381,1,1,0,0,0,13.2,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(614).to({scaleY:1.0584,skewX:19.1251,skewY:180,x:383.6},0).to({_off:true},585).wait(1));

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
	this.Кнопка.setTransform(641.9,538,1,1,0,0,0,641.9,538);
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
	this.слой4.setTransform(891,696.9,1,1,0,0,0,891,696.9);
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
	this.слой3.setTransform(825.5,145.6,1,1,0,0,0,825.5,145.6);
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
	this.слой2.setTransform(31.9,33.7,1,1,0,0,0,31.9,33.7);
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
	this.слой1.setTransform(17.9,692.3,1,1,0,0,0,17.9,692.3);
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
	this.Обложка.setTransform(638,365.6,1,1,0,0,0,638,365.6);
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
	this.Провода.setTransform(585.1,276.7,1,1,0,0,0,585.1,276.7);
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
	this.РеостатПолзунок.setTransform(1117.9,300.9,1,1,0,0,0,1117.9,300.9);
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
	this.Реостат.setTransform(1032.8,251,1,1,0,0,0,1032.8,251);
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
	this.Источник_питания.setTransform(851.6,284.3,1,1,0,0,0,851.6,284.3);
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
	this.ВыключКнопка.setTransform(383.7,381,1,1,0,0,0,383.7,381);
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
	this.Выключатель.setTransform(382.9,397.8,1,1,0,0,0,382.9,397.8);
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
	this.Выпрямитель.setTransform(360.5,264.9,1,1,0,0,0,360.5,264.9);
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
	this.Соленоид.setTransform(553.3,169.1,1,1,0,0,0,553.3,169.1);
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
	this.МиллиампСтрелка.setTransform(546.2,552.5,1,1,0,0,0,546.2,552.5);
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
	this.Миллиампертметр.setTransform(572.1,549.7,1,1,0,0,0,572.1,549.7);
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
	this.ВольтметрСтрелка.setTransform(918.9,559.6,1,1,0,0,0,918.9,559.6);
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
	this.Вольтметр.setTransform(945.6,556.5,1,1,0,0,0,945.6,556.5);
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
	this.АмпСтрелка.setTransform(153.5,558,1,1,0,0,0,153.5,558);
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
	this.Амперметр.setTransform(180.7,554.8,1,1,0,0,0,180.7,554.8);
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
	this.латрРучка.setTransform(214.1,72.9,1,1,0,0,0,214.1,72.9);
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
	this.ЛАТР.setTransform(212.4,149.9,1,1,0,0,0,212.4,149.9);
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
	this.Подложка.setTransform(637.6,378.2,1,1,0,0,0,637.6,378.2);
	this.Подложка.depth = 0;
	this.Подложка.isAttachedToCamera = 0
	this.Подложка.isAttachedToMask = 0
	this.Подложка.layerDepth = 0
	this.Подложка.layerIndex = 24
	this.Подложка.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Подложка).wait(1200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(625.5,343.4,678.9000000000001,395.70000000000005);
// library properties:
lib.properties = {
	id: '60FBEE31B89053448C9002AAE0822EE8',
	width: 1280,
	height: 720,
	fps: 23,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"sounds/animation.mp3?1634540645775", id:"animation"}
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