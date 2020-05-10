var  pets  =  [
    {  name : "Max" ,  type : "dog" ,  bornOn : 2018  } ,
    {  name : "Angel" ,  type : "cat" ,  bornOn : 2015  } ,
    {  nom : "Jasper" ,  tapez : "chien" ,  né le : 2016  }
] ;

const  getAge  =  pet  =>  {
    retourne une  nouvelle  date ( ) . getFullYear ( )  -  animal de compagnie . bornOn ;


laissez  petsWithAge  =  [ ] ;
les animaux . forEach (  ( animal )  =>  {
    animal . age  =  getAge ( animal ) ;
    petsWithAge . pousser ( animal ) ;
} ) ;
console . journal ( petsWithAge ) ;


laissez les  chiens  =  [ ] ;
les animaux . forEach (  ( animal )  =>  {
    if  ( pet . type  ==  "dog" ) {
        chiens . pousser ( animal ) ;
    }
} ) ;
console . bûche ( chiens ) ;


laissez  jaspe ;
les animaux . forEach (  ( animal )  =>  {
    si  ( animal de compagnie . nom  ===  "Jasper" ) 
        jaspe  =  animal de compagnie ;
    }
} ) ;
console . log ( `Jasper a $ { jasper . age } ans» ) ;
