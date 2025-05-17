//complete this code

class Rectangle {
	constructor(width,height){
		this._height=height
		this._width=width
	}
	get height(){
		return this._height;
	}
	get width(){
		return this._width;
	}

	getArea(){
		return this._height*this._width;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
	}

	getPerimeter(){
		return this._height*4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
