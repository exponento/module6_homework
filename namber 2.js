function opredNamber(nam) {
    let schet = 1;
    if (nam > 1000){
        alert('данные неверны');
        return false;
    } else if (nam == 1) {
        alert('Число 1 — не является ни простым, ни составным числом');
        return false;
    } else if (nam == 0) {
        alert('данные неверны');
        return false;
    }else {
        for (let i = 1; i < nam; i++){
            if (nam % i === 0){
                schet = schet + 1;
            } else {
            }
        } 
    } 
    if (schet > 2){
        alert('Введенное число СЛОЖНОЕ')
    } else {
        alert('Введенное число ПРОСТОЕ')
    }
}
opredNamber(prompt('Введите число от 1 до 1000 '));