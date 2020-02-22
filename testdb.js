var db = require('./db')
// db.load('select * from category').then((rows)=>{
//     console.log(rows)
// })
db.add('insert into category(name) values ("naaa") ').then(()=>{
    console.log('da them')
})