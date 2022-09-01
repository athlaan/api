import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  text: String,
  corect: Boolean
}, {_id: false });

const QuestionSchema = new Schema({
  text: String,
  answers: [AnswerSchema]
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
