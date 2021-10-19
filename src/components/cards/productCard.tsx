import React from "react";


interface ProductCardProps {
  product?: IProduct
}

function ProductCard(props: ProductCardProps) {

  if (!props.product) {
    return <h3>Product not found</h3>;
  }

  let productGallery = props.product.gallery;

  return (
    <section className="col-xl-4 col-md-4">
      <div className="card bg-light">

        {productGallery.length <= 1 &&
        <img className="card-img-top"
             src={
               productGallery.length === 0 ?
                 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/plant.png' :
                 productGallery[0]
             }
             alt="Card image cap"/>
        }

        {productGallery.length > 1 &&
        productGallery.map((imgItem) => {
          return <img className="card-img-top"
                      src={imgItem}
                      alt="Card image cap"/>
        })
        }

        <div className="card-body">
          <h5 className="card-title">
            {props.product?.title}
          </h5>
          <p className="card-text">
            {props.product?.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductCard;