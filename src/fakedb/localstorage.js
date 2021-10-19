// const db ={};    

const addToDb = item =>{
    const db = getDb();
    // console.log(db);
    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }
    saveToDb(db)
}

// local storage a data rakhte hole json a convert kore rakhte hobe 
// abar amra read korar somoy json theke parse kore js object kore data read korte hobe.
const saveToDb = db =>{
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJSON)
}

const removeFromDb = item =>{
    const db = getDb()
    delete db[item];
    saveToDb()
}

const getDb = () =>{
    let savedDb = localStorage.getItem('shopping-cart')
    savedDb = JSON.parse(savedDb)
    return savedDb;
}