import React from "react";
import Fast_Booking from "../images/icons/fast.png";
import Collection from "../images/icons/collection.png";
import Insurance from "../images/icons/insurance.png";
import Map from "../images/icons/map.png";
import Pay from "../images/icons/pay.png";
import Support from "../images/icons/support.png";

const Services = () => {
  return (
    <div>
      <section class="we-offer-area text-center bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site-heading text-center">
                <h2 className="heading-service">
                  Why Choose<span> US</span>?
                </h2>
              </div>
            </div>
          </div>
          <div class="row our-offer-items less-carousel">
            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-pen-fancy">
                  <img src={Fast_Booking} alt="" className="icon-image" />
                </i>
                <h4>Fast & Easy Booking</h4>
                <p>
                  At Present the Fastest Rental booking and pickup company is the King Kos Rentals.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-dharmachakra">
                  <img src={Map} alt="" className="icon-image" />
                </i>
                <h4>Any Pickup Location</h4>
                <p>
                  Even you are in Forest like Amazon rain forest with simple off road then we will arrive there to pic u up.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-tasks">
                  <img src={Pay} alt="" className="icon-image" />
                </i>
                <h4>No Booking Charges</h4>
                <p>
                  Your pockets will be always safe , as we dont charge Booking charges.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-tachometer-alt">
                  <img src={Collection} alt="" className="icon-image" />
                </i>
                <h4>Free Maintenance</h4>
                <p>
                  Free Maintenance is like getting a free popcorn for your movie , King Kos cars puttings all their efforts for you.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-recycle">
                  <img src={Insurance} alt="" className="icon-image" />
                </i>
                <h4>Fully Insured</h4>
                <p>
                  There will be insurance available for you and also for your co-passengers if you take the consent.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-headset">
                  <img src={Support} alt="" className="icon-image" />
                </i>
                <h4>24/7 Support</h4>
                <p>
                  There is no other Car rental company working as we do. we have 24/7 customer support feel free to call +91 9000000000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
