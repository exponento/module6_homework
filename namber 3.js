function priemChisla(nam){
    return function(nam){
        console.log(nam + nam)
    }
}
const rezFunc = priemChisla(2);
rezFunc(5);