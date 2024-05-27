import app from "./app.js";
const portUrl = process.env.PORT;

app.listen(portUrl, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
