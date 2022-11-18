import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousels = () => {
  return (
    <div className="m-3">
      <Carousel
        width="full"
        dynamicHeight={true}
        infiniteLoop={true}
        interval={2000}
      >
        <div>
          <img src="https://1xbet.ng/genfiles/cms/designed_banners/159/image/edbf0136d720156dcc5ab393cb32daac.jpg" />
          <h1 className="legend text-extrabold ">
            1xbet IS NOW PARTNER OF AKWA UNITED
          </h1>
        </div>
        <div>
          <img src="	https://1xbet.ng/genfiles/cms/designed_banners/159/image/eafe5c66aec54c7c38a809e03bb182a7.jpg" />
          <p className="legend">
            BET ON THE WORLD CUP TO WIND BENTLY AND OTHER TWO PRICES{" "}
          </p>
        </div>
        <div>
          <img src="https://1xbet.ng/genfiles/cms/designed_banners/159/image/8600e2779e5a92fe200da0c32cd6b6e2.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://1xbet.ng/genfiles/cms/designed_banners/159/image/8b8ef1a01ff764ecb69aa8e5e49ff44f.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://1xbet.ng/genfiles/cms/designed_banners/159/image/fcb6195cb5002b6511412b2f0aa34a2c.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://1xbet.ng/genfiles/cms/designed_banners/159/image/51542b21f490d6c7f952698704faf5b8.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://1xbet.ng/genfiles/cms/designed_banners/159/image/08126fd47621507460e88bce953c020b.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://1xbet.ng/genfiles/cms/designed_banners/159/image/4dfbc312d75876d931e6921c3ec3e5b6.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
