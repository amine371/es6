# es6
var pets = [
    {name: "Max", type: "dog", bornOn: 2018},
    {name: "Angel", type: "cat", bornOn: 2015},
    {nom: "Jasper", tapez: "chien", né le: 2016}
];

const getAge = pet => {
    return une nouvelle date (). getFullYear () - animal de compagnie. né sur ;


let petsWithAge = [];
les animaux. forEach ((animal) => {
    animal . age = getAge (animal);
    petsWithAge. pousser (animal);
});
console .log(" journal (petsWithAge"));


let les chiens = [];
les animaux. forEach ((animal) => {
    if (pet. type == "dog") {
        chiens. pousser (animal);
    }
});
console .log(' bûche (chiens'));


let jaspe;
les animaux. forEach ((animal) => {
    if (animal de compagnie. nom === "Jasper") 
        jaspe = animal de compagnie;
    }
});
console . log ('Jasper a $ {jasper. age} ans');
