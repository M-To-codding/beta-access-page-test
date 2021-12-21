import StatusCodes from "http-status-codes";
import {Request, Response} from "express";
import Product from "@entities/Product";
import {EMPTY_OR_MISSED_DATA} from "@shared/constants";

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all products.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAllProducts(req: Request, res: Response) {
  const products = await Product.find({});
  return res.status(OK).json({products});
}

/**
 * Add one product.
 *
 * @param req
 * @param res
 * @returns
 */

export async function addOneProduct(req: Request, res: Response) {
  const { product } = req.body;

  if (!product) {
    return res.status(BAD_REQUEST).json({
      error: EMPTY_OR_MISSED_DATA,
    });
  }

  const productDoc = new Product({
    id: product.id,
    highlighted: product.highlighted,
    title: product.title,
    description: product.description,
    isBestPrice: product.isBestPrice,
    isNew: product.isNew,
    rate: product.rate,
    gallery: product.gallery,
    dateCreated: product.dateCreated
  });

  await productDoc.save();
  return res.status(CREATED).end();
}