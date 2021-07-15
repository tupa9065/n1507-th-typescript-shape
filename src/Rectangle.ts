import {Shape} from "./Shape";

export class Rectangle extends Shape implements IArea{
    area(): number {
        return this._height*this._width;
    }

    constructor(x: number, y: number,private _width: number, private _height: number) {
        super(x, y);
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
}