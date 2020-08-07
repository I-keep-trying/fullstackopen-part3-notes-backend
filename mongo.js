require('dotenv').config()
const mongoose = require('mongoose')

const url = `mongodb+srv://fullstack2020:${process.env.MONGO_PW}@cluster0-lw40o.mongodb.net/note-app?retryWrites=true`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

/* const note = new Note({
  content:
    "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.",
  date: new Date(),
  important: true,
}) */

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

/* note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
}) */
