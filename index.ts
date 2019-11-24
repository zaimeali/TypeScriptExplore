import * as _ from 'lodash';

async function hello(){
    return 'world';
}

// url class is the part of dom
// const url = new URL('....').

// now checking third party libraries




interface Person {
    first: string,
    last: string,
    // for adding additional property
    [key: string]: any
}

const person: Person = {
    first: "Zaime",
    last: "Ali"
}
const person2: Person = {
    first: "Faraz",
    last: "Azhar",
    chaman: true
}


function pow(x, y){
    return Math.pow(x, y);
}

pow('23', 'foo');