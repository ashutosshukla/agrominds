import pg from "pg";


const db= new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"AgroLogin",
    password:"naman1234",
    port:5432
})

db.connect();

export default pg;