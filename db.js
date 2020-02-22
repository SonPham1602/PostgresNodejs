 const {Client} = require('pg');
const connectionString = process.env.DATABASE_URL ||'postgres://jsrvdtvdiiuskz:244e875697086b038781ba1f636358221cec87b5da4a79d5a10a5cb316a1fee5@ec2-184-72-235-159.compute-1.amazonaws.com:5432/ddidtkmgfqhhju';

const client = new Client({connectionString:connectionString,ssl:true,rejectUnauthorized: false});



module.exports= {
    load:sql =>{
        return new Promise((resolve,reject)=>{
            var c = client;
            c.connect()
            c.query((sql),(err,res)=>{
               
                console.log(res.rows)
                resolve(res.rows)

                console.log("end connection");
                
                c.end()
            })
            
        })
    },
    add:(sql) => {
        return new Promise((resolve,reject)=>{
            var c = client
            c.connect()
            c.query(sql,(err,res)=>{
                if(err){
                    reject(err)
                   
                }
                else{
                    resolve(res)
                   
                }
                c.end()
            })  
            
        })
    }
}

// const query = client.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', () => { client.end(); });