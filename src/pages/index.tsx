import { client } from "@/sanity/config/client-config";
import { groq } from "next-sanity";
import { Key } from "react";
import { FooterBanner, HeroBanner, Product } from "../components";

const Home = ({ products, bannerData }: any) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product: { _id: Key | null | undefined }) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = groq`*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = groq`*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
