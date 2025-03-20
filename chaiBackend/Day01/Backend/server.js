import express from 'express';
const app = express();
import 'dotenv/config'

const port = process.env.PORT || 4000;



app.use(express.static('dist'));
app.get("/api/jokes",(req,res)=>{
    let data =[
        {
            id:1,
            title:"first joke",
            content:"the first joke is awesome"

        },
        {
            id:3,
            title:"second joke",
            content:"the second joke is awesome"

        },
        {
            id:3,
            title:"third joke",
            content:"the third joke is awesome"

        },
        {
            id:4,
            title:"forth joke",
            content:"the forth joke is awesome"

        },
        {
            id:5,
            title:"fiveth joke",
            content:"the fifth joke is awesome"

        },
        {
            id:6,
            title:"sixth joke",
            content:"the sixth joke is awesome"

        },
    ]
    res.send(data)
})

app.listen(port,()=>{
    console.log(`app is running in localhost ${port}`)
}); 