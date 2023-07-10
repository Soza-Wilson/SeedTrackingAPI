exports.getPosts = (req, res, next) => {

    res.status(200).json({user: [{user_ID:"001", fullname:"Wilson soza"}]});
};


exports. createPost = (req,res,next) =>{
    
     const title = req.body.title;
     const content = req.body.content;

     res.status(201).json({
        massage: 'Post created successfully',
        post: {id: new Date().toString(),title:title,content:content}

     })



} 
