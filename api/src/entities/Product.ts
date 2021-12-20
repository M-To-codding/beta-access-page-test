import {Document, Schema, model, Model} from "mongoose";

export interface IProduct extends Document {
  id: number;
  highlighted: boolean,
  title: string,
  description: string,
  isNew: boolean,
  isBestPrice: boolean,
  rate: number,
  gallery: Array<string>,
  dateCreated: string
}

const productSchema: Schema = new Schema({
  id: {
    type: Schema.Types.Number,
    required: true
  },
  highlighted: {
    type: Schema.Types.Boolean,
    required: true
  },
  title: {
    type: Schema.Types.String,
    required: false
  },
  description: {
    type: Schema.Types.String,
    required: false
  },
  isNew: {
    type: Schema.Types.Boolean,
    required: true
  },
  isBestPrice: {
    type: Schema.Types.Boolean,
    required: true
  },
  rate: {
    type: Schema.Types.Number,
    required: true
  },
  gallery: {
    type: Schema.Types.Array,
    required: false
  },
  dateCreated: {
    type: Schema.Types.String,
    required: true
  },
});

const Product: Model<IProduct> = model('Product', productSchema);

export default Product;