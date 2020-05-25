import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/graphqlreactdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log(`Database is connected ${db}`))
.catch(err => console.log(err))