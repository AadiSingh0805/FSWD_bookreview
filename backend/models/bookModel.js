import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
