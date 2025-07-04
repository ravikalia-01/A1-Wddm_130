const { name } = require('ejs')
const express = require('express')
const app = express()
 
//ejs will allow us to reference the javascript within html
//in a seperate file
app.set('view engine', 'ejs')
 
app.use(express.static('public'))
 
//using middleware to get the current page
//referencing the current page in header.ejs
app.use((req, res, next) => {
    app.locals.currentRoute = req.path
    next()
})
 
const HTTP_PORT = process.env.PORT || 8085
 
//using EJS template engine, you have to say render
//for it to render the home.ejs
app.get('/', (req, res) => {
    res.render('home',{
        title: 'Home Page',
        message1: 'Welcome to the Home Page! This is a simple demonstration of using EJS as a templating engine in a Node.js application. EJS allows you to embed JavaScript code within your HTML, making it easy to create dynamic web pages. You can use EJS to render data from your server, loop through arrays, and conditionally display content based on your application logic. Enjoy exploring the features of EJS!.',
        data: 'EJS, or Embedded JavaScript, is a simple and popular templating language that enables developers to generate HTML markup using plain JavaScript. Originally released in February 2011 by Matthew Eernisse, EJS was designed to be lightweight, fast, and flexible, making it especially well-suited for Node.js applications. Its main advantage is that it allows developers to embed JavaScript logic directly within HTML templates, which is particularly beneficial for those already familiar with JavaScript. EJS uses a straightforward syntax with special delimiters—such as <%= %> for outputting values and <% %> for executing code—making it easy to inject dynamic data into web pages. Features like template partials, caching for performance, and automatic HTML escaping for security are built in. EJS is widely used for server-side rendering in web development, and its ability to combine dynamic data with static HTML makes it a practical choice for creating dynamic web pages in a familiar coding environment.'
    })
})
 
app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Page',
        message: 'EJS, or Embedded JavaScript, is a simple and popular templating language that enables developers to generate HTML markup using plain JavaScript. Originally released in February 2011 by Matthew Eernisse, EJS was designed to be lightweight, fast, and flexible, making it especially well-suited for Node.js applications. Its main advantage is that it allows developers to embed JavaScript logic directly within HTML templates, which is particularly beneficial for those already familiar with JavaScript. EJS uses a straightforward syntax with special delimiters—such as `` for outputting values and `` for executing code—making it easy to inject dynamic data into web pages. Features like template partials, caching for performance, and automatic HTML escaping for security are built in. EJS is widely used for server-side rendering in web development, and its ability to combine dynamic data with static HTML makes it a practical choice for creating dynamic web pages in a familiar coding environment.'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact',{
        title: 'Contact Us',
        email: 'Kravi9009@gmail.com',
        phone: '123-456-7890',
        address: '123 Main St, Toronto, ON, Canada',
        message: `If you have any questions or need assistance, please feel free to reach out to us. We are here to help you with any inquiries you may have. You can contact us via email at kravi9009@gmail.com, call us at 123-456-7890, or visit us at our office located at #123, Main St, Toronto, Ontario, Canada. We look forward to hearing from you!`,
    })
})
app.get('/profile', (req, res) => {
    res.render('profile',{
        title: 'Profile',
        name: 'Ravi',
        email: 'kravi9009@gmail.com',
        phone: '123-456-7890',
        address: '123 Main St, Toronto, ON, Canada',
        Image: '/images/profile.jpg',
        message: 'This is your profile page. Here you can view and manage your personal information. If you need to update any details, please contact our support team.',
    })
})
app.get('/setting', (req, res) => {
    res.render('setting',{ 
        title: 'Setting',
        theme: 'Light Mode',
        notifications: 'Enabled',
        privacy: 'Public',
    })
})
 
app.get("/viewData", function(req, res) {
    let someData = {
        studentid: 'N01719809',
        name: 'Ravi',
        age: 30,
        hobbies: ['coding', 'reading', 'gaming'],
        occupation: 'Web designer and developer',
        institute: 'Humber Polytechnic Institute',
        location: 'Toronto, Canada',

        studentid2: 'N01719810',
        name2: 'John',
        age2: 25,
        hobbies2: ['painting', 'hiking', 'photography'],
        occupation2: 'Graphic designer',
        institute: 'Humber Polytechnic Institute',
        location: 'Toronto, Canada',
    }
 
    res.render('viewData', {
        data: someData,
    })
})
 
app.listen(HTTP_PORT, () => {
    console.log(`server listening: http://localhost:${HTTP_PORT}`)
})