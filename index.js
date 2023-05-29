const express   =   require('express')
const port  =   process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(port, ()=> console.log(`Server started at port ${port}`))