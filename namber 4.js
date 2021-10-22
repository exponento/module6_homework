const znach = (a, b) => {
    let c = a;
    const interval = () => {
        if (c <= b){
        console.log(c++);
        } else {
            clearInterval(interval)
        }
    }
    setInterval(interval, 1000);
}
znach(2, 7)