let objeto = {};

// Los objetos tienen atributos
// Los  atributos

let otroObjeto = {
    'color': 'rojo',
    'alto': 15
};


console.log(otroObjeto.color);
console.log(otroObjeto.alto);

let propiedad = 'color;'
console.log(otroObjeto['alto']);

let objetosAnidados = {
    'color': 'rojo',
    'alto': 15,
    'propietario': {}
};

console.log(objetosAnidados.color);

let objetosAnidados2 = {
    'color': 'rojo',
    'alto': 15,
    'propietario': {
        'usuario': 'Ignacio'
    }
};

console.log(objetosAnidados2.propietario.usuario);

