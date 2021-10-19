import React from "react";
import ProductCarousel from "../productCarousel";


interface ProductCardProps {
  product?: IProduct
}

function ProductCard(props: ProductCardProps) {

  if (!props.product) {
    return <h3>Product not found</h3>;
  }

  let productGallery = props.product.gallery;
  handleImageGallery();

  function handleImageGallery() {
    const carouselData: Array<SlickImage> = [];
    productGallery.forEach((imgItem: string, index: number) => {
      carouselData.push({
          id: `${index}`,
          url: imgItem,
          caption: props.product?.title
        }
      );
    });

    return carouselData;
  }

  return (
    <section className="col-xl-4 col-md-4">
      <div className="product-card bg-light">

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
          <ProductCarousel carouselData={handleImageGallery()}/>
        }

        {props.product?.isNew &&
        <p className="product-new-label">
          New!
        </p>
        }
        {props.product?.isBestPrice &&
        <p className="product-best-price-label">
          Best price!
        </p>
        }

        <div className="card-body">
          <h5 className="product-card-title">
            {props.product?.title}
          </h5>
          <p className="product-card-description">
            {props.product?.description}
          </p>
        </div>

        <button type="button" className="btn btn-dark go-to-product-btn">Read more</button>
      </div>
    </section>
  )
}

export default ProductCard;