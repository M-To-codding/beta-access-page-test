import StatusCodes from "http-status-codes";
import {Request, Response} from "express";
import Product from "@entities/Product";

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
