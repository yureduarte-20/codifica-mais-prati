const car = {
    marca: 'Ford',modelo: 'Ka',ano: 2012,cor:'Verde'
};

for(const property in car ){
    console.log(`${property}: ${car[property]}`)
}