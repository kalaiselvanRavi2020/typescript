import circleconfig from "./circleConfig";


class Circle{
    radius:number;
    color:string;
    constructor(circleData: circleconfig){
        this.radius=circleData.radiusValue,
        this.color=circleData.colorValue;
    }
setRadius(radius:number):void{
  console.log(radius);
}

getRadius():number{
    return this.radius;
}
getColor():String{
    return `${this.color}`
}

setColor(color:string):void{
    console.log(color);
}

toString():string{
    return `circle[radius=${this.radius},color=${this.color}]`
}

getArea():number{
    let area=this.radius*(Math.PI)*this.radius;
    return area;
}
getCircumference():number{
    
    let circumference=2*(Math.PI)*this.radius;
    console.log(circumference.toFixed(2));
    return circumference;
    
}

}

(<HTMLButtonElement>document.getElementById('submit-data')).addEventListener("click",()=>{
 let radiusValue=parseInt((<HTMLInputElement>document.getElementById('radiusValue')).value);
    let colorValue=(<HTMLInputElement>document.getElementById('colorValue')).value;
    console.log(radiusValue,colorValue);

    
let obj : circleconfig={
    radiusValue,colorValue
};

let c=new Circle(obj);
let container=document.createElement("div");
container.setAttribute("id","container");
container.setAttribute("class","container");

let area1=(document.createElement("div"));
 area1.innerHTML=`Area=${c.getArea().toFixed(2)}`;
 container.appendChild(area1);

let circumference1=(document.createElement("div"));
circumference1.innerHTML=`circumference=${c.getCircumference().toFixed(2)}`;
container.appendChild(circumference1);


c.getRadius();
c.setRadius(65);
c.setColor("diamond");
c.getColor();
let value=document.createElement("div");
value.innerHTML=`${c.toString()}`;
container.appendChild(value);


document.body.appendChild(container);
});