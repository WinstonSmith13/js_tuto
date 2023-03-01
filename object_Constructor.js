// Ceci est un constructor

function Circle(radius) {
   this.radius = radius;
   this.draw = function(){
    console.log('Draw')

    // Pas besoin de return this cela est fait automatiquement quand on instancie l'objet. 
   }
}

const circle = new Circle(1);

circle.draw();

