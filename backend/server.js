import express from 'express';
const app=express();
app.use(express.json());
app.post('/chat',(req,res)=>{
res.json({reply:'Backend working'});
});
app.listen(3000);
