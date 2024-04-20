const express= require('express');
const dotenv = require('dotenv')
const mongoose= require('mongoose')
const Blog= require('./model/blogModel')
const app=express();
const cors = require('cors')
const PORT= process.env.PORT || 4000
const URI = "mongodb://localhost:27017/CMS"
// connect to mongoDB

app.use(cors());

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
    res.json("hello world");
})

//create blogs

app.post('/blogs',async(req,res)=>{
   const {title,subTitle, description}=req.body;

   await Blog.create({
    title:title,
    subTitle:subTitle,
    description:description
   })

   res.status('200').json({
    message:"blog create successfully.."
   })
})

// get blogs;
app.get('/blogs',async(req,res)=>{
   const blogs= await Blog.find()

   if(blogs.length===0){
    res.status("404").json({
        message:"Blog Not Found"
    })
   }else{
    res.status('200').json({
        message:"Blog Fetch successfully",
        blogs : blogs
    })
   }
})


//get single blog
app.get('/blogs/:id', async(req,res)=>{
    const id= req.params.id;

    const blog= await Blog.findById(id)

    if(blog){
        res.status('200').json({
           message: "blog fetch successfully",
           blog:blog
        })
    }else{
        res.status('404').json({
            message:"Blog not found"
        })
    }
})

//blog update

app.patch('/blogs/:id',async(req,res)=>{
    const id= req.params.id;
    const{title,subTitle,description}=req.body;

    await Blog.findByIdAndUpdate(id,{
        title:title,
        subTitle:subTitle,
        description: description
    })
    
    res.status('200').json({
        message:"Blog updated successfully..."
    })

})

//blog delete

app.delete('/blogs/:id',async(req,res)=>{
     const id = req.params.id;
     await Blog.findByIdAndDelete(id);
   
     res.status('200').json({
        message:"Blog delete successfully..."
     })
})



app.listen(PORT,()=>{
    console.log(`Server Running Port No: ${PORT}`);
})

