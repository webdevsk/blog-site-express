const express   =   require('express')
const port  =   process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const {pages} = require('./pageContents')

app.get('/', (req, res)=>{
    res.render('homepage', {pages: pages, pageTitle: pages[0].title, content: pages[0].content})
})
app.get('/blogs', (req, res)=>{
    res.render('blogs', {pages: pages, pageTitle: pages[1].title, content: pages[1].content})
})
app.get('/contact-us', (req, res)=>{
    res.render('contact-us', {pages: pages, pageTitle: pages[2].title, content: pages[2].content})
})
app.get('/about-us', (req, res)=>{
    res.render('about-us', {pages: pages, pageTitle: pages[3].title, content: pages[3].content})
})

app.listen(port, ()=> console.log(`Server started at port ${port}`))

// npx tailwindcss -i ./public/css/tailwind.css -o ./public/css/styles.css --watch