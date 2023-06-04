const express   =   require('express')
const port  =   process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const {pages} = require('./pageContents')
const {blogPosts} = require('./blogPosts')

app.get('/', (req, res)=>{
    res.render('Home', {pages: pages, pageTitle: pages[0].title, content: pages[0].content, blogPosts: blogPosts})
})

app.get('/:pageId', (req, res)=>{
    const {pageId} = req.params
    pages.map(page=>{
        if (page.link !== '/' + pageId) return
        res.render(page.title, {pages: pages, pageTitle: page.title, content: page.content})
    })
})

app.get('/posts/:postId', (req, res)=>{
    const {postId} = req.params
    blogPosts.map(blog=>{
        if (blog.title !== postId) return
        res.render('Blog post', {pages: pages, pageTitle: blog.title, title: blog.title, body: blog.body})
    })
})

app.post('/publish', (req, res)=>{
    const {postTitle, postBody} = req.body
    blogPosts.push({title: postTitle, body: postBody, time: new Date()})
    res.redirect('/')
})

app.listen(port, ()=> console.log(`Server started at port ${port}`))

// npx tailwindcss -i ./public/css/tailwind.css -o ./public/css/styles.css --watch