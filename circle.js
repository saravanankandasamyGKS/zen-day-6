class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius},color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  const myCircle = new Circle();
  console.log(myCircle.toString()); 
  
  const customCircle = new Circle(3.5, "blue");
  console.log(customCircle.toString()); 
  
  console.log(customCircle.getRadius()); 
  console.log(customCircle.getColor()); 
  
  customCircle.setRadius(4.2);
  customCircle.setColor("green");
  console.log(customCircle.toString()); 
  
  console.log(customCircle.getArea()); 
  console.log(customCircle.getCircumference());
  