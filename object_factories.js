// Ceci est une factory function.

function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log('draw');
        }
    };

}


// Pour eviter de dupliquer des objets et répondre au besoin d'Avoir un object avec des fonctionnements 
//propres on utilise des factories ou bien des constructeurs.
const circle = createCircle(1);
circle.draw();
