import React from "react"
import Card from "./Card"

const CardSection = () => {
    return (
        // <!-- get in touch section -->
        <section className="contact bg-success ">
          <div className="container ">
            <h2 className="text-white">
              We love new friends!
            </h2>
            <div className="row">
              <div className="col-4">
                <Card title="Dark Matter" buttonText="Touch it"/>
              </div>
              <div className="col-4">
                <Card title="Universe"buttonText="Explore"/>
              </div>
              <div className="col-4">
                <Card title="Photons" buttonText="Light" />
              </div>
            </div>
          </div>
        </section>
        // <!-- get in touch section ends -->
    
    )
}

export default CardSection