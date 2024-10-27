// question , right answer ,answers array 
const { default: mongoose } = require("mongoose");


const  questionmodel = ({
    question :{
        type : String,
        unique : true,
    },
    rightanswer : {
        type : string
    },
    answer: Array
})

export const Question = mongoose.models.question || mongoose.model("question", questionmodel)
