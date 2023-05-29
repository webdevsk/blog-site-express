const express   =   require('express')
const port  =   process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

//variables
const pages = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Blogs',
        link: '/blogs'
    },
    {
        title: 'Contact Us',
        link: '/contact-us'
    },
    {
        title: 'About Us',
        link: '/about-us'
    },

]

app.get('/', (req, res)=>{
    res.render('homepage', {pages: pages, pageTitle: pages[0].title})
})

app.listen(port, ()=> console.log(`Server started at port ${port}`))

// npx tailwindcss -i ./public/css/tailwind.css -o ./public/css/styles.css --watch