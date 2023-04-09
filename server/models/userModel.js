const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
     firstName:{
        type:String,
        required:true
     },
     lastName:{
      type:String,
      required:true
     },
     password:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     phone:{
         type:String,
     },
     about:{
        type:String,
        default:''
     },
     image:{
        type:String,
        default:""
     },
     followedBy:[
        {
            type:mongoose.Types.ObjectId,
            ref:"User"
        },
        
    ]
     ,
     follows:[
        {
            type:mongoose.Types.ObjectId,
            ref:"User"
        },
        
    ]
     ,
     linkedInurl:{
        type:String,
        default:''
     },
     gitHuburl:{
        type:String,
        default:''
     },
     facebookurl:{
        type:String,
        default:''
     },
     twitterUrl:{
        type:String,
        default:''
     },
     instagramUrl:{
        type:String,
        default:''
     },
     websiteUrl:{
        type:String,
        default:''
     },
     interest:{
        type:[String],
        default:[]
     },
     education:{
        type:[String],
        default:[]
     },
     daysActive:{
        type:[String],
        default:[]
     }

},{timestamps:true})

const User=mongoose.model('User',userSchema)
module.exports=User;