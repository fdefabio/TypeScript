var a:number = 9;
a += 4;

function mostrar (b:string): void{
    console.log(b + a);
}

mostrar("hola");

//*******************//

interface Person {
    name : string;
    age  : string;
}


function sortByName(a: Person[]){
    var result = a.slice(0);
    result.sort(function(x , y) {
        return x.name.localeCompare(y.name);
    });
   
    return result;
}

//*********************//


