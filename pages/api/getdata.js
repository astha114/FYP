import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "hms",
    user: "root",
    password: "root",
  });
  try{
    const query= "SELECT * FROM `medicine`";
    const values=[];
    const [data] =await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ product: data});
  }catch (error) {
    res.status(500).json({error: error.message});
    
  }
}