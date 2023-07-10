/* eslint-disable @next/next/no-img-element */
import { urlFor } from "@/sanity/config/client-config";
import { ProductContainer } from "./styles";

const Product = ({
  product: { image, name, slug, price },
}: {
  product: any;
}) => {
  // console.log(urlFor(image && image[0]));
  return (
    slug && (
      <ProductContainer href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0]).url()}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">R${price},00</p>
        </div>
      </ProductContainer>
    )
  );
};

export default Product;
