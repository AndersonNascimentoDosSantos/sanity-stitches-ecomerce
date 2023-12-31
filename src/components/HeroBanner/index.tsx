/* eslint-disable @next/next/no-img-element */
import { urlFor } from "@/sanity/config/client-config";
import Link from "next/link";
import { HeroBannerContainer } from "./styles";

const HeroBanner = ({ heroBanner }: any) => {
  return (
    <HeroBannerContainer>
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
              <div className="hero-banner-image">
                <img
                  // width="500"
                  // height="500"
                  src={urlFor(heroBanner.image).url()}
                  alt="headphones"
                />
              </div>
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
