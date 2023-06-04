const express   =   require('express')
const port  =   process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const {pages} = require('./pageContents')

app.get('/', (req, res)=>{
    res.render('Home', {pages: pages, pageTitle: pages[0].title, content: pages[0].content})
})
app.get('/:pageId', (req, res)=>{
    const {pageId} = req.params
    pages.map(page=>{
        if (page.link !== '/' + pageId) return
        res.render(page.title, {pages: pages, pageTitle: page.title, content: page.content})
    })
})

app.listen(port, ()=> console.log(`Server started at port ${port}`))

// npx tailwindcss -i ./public/css/tailwind.css -o ./public/css/styles.css --watch