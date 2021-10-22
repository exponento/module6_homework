const opredZnach = () =>{
    const arr = [] ;
    while (true){
        let index = prompt('Введите значение (для остановки введите stop)');
        if (index == 'stop'){
            break;
        } else  if (isNaN(index + 1)) {
            arr.push(index);
        } else {
            arr.push(index++);
        }
    }
console.log(arr)
    let chet = 0;
    let nechet = 0;
    let str = 0;
    let obj = 0;
    for (let i = 0; i < arr.length; i++){
       if (typeof arr[i] == "string"){
          str = str + 1
       } else if(typeof arr[i] == "object"){
          obj = obj + 1
       } else if (arr[i] == 0){
           obj = obj + 1
       } else if (arr[i] % 2 === 0){
          chet = chet + 1;
       } else {
          nechet = nechet + 1;
       }
    }
    alert(`В массиве:  ${arr.length} Элементов, из них:  ${chet} Четных; ${nechet} Нечетных; ${str} Строчный; ${obj} Значение 0`)
    console.log(' В массиве ', arr.length, 'Элементов, из них: ', chet, 'Четных;', nechet, 'Нечетных;', str, 'Строчный;', obj, 'Значение 0')
 }
 opredZnach();