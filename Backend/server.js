require('dotenv').config();
const app=require('./src/app');
const PORT=process.env.PORT || 3000;
const connect_db=require('./src/db/db')


connect_db();
app.listen(PORT,()=>{
    console.log(`Server Connected Successfully PORT ${PORT}`)
})