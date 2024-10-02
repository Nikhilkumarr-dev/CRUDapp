const mysql =require('mysql');
const dotenv=require('dotenv');
dotenv.config();

const connection  = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DB_PORT
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    console.log('db'+connection.state);
})

class db{
    static getdbInstance(){
        return instance ? instance : new db();
    }
    async getAllData(){
        try {
            const response=await new Promise((resolve,reject)=>{
                const query ="select * from names where id=?";
                
                connection.query(query,(err,results)=>
                {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })
            return response;
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports=db;