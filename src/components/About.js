import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class About extends Component {

  render() {
    return (
      <div className={"content"}>
        <div className={"indent"}>
          <h1>About</h1>
          <NavLink to={"/"}>1. Create chat</NavLink><br/>
          <NavLink to={"/"}>2. Open chat</NavLink><br/>
          <NavLink to={"/"}>3. Get messages</NavLink><br/>
          <NavLink to={"/"}>4. Send message</NavLink><br/>
          <br/>
          <br/>
          <h2>Create chat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid cupiditate enim inventore iusto minus nihil, nisi nulla odit, provident, quas rerum vitae voluptatibus! A alias animi, at blanditiis consequatur distinctio ea earum eum, hic incidunt inventore magni minima minus nam nobis officiis optio quas quibusdam quidem quo sit voluptates voluptatum. Accusantium adipisci alias autem beatae consequatur, consequuntur corporis deserunt ducimus ea eius enim excepturi facere fugiat in iste iusto molestiae numquam obcaecati possimus provident quibusdam quis quos rem repellendus soluta tempore vitae voluptatum. Accusamus accusantium ad, aliquid animi at consequatur, enim esse itaque provident repellendus ullam unde velit, voluptates.
          </p>
          <br/>
          <br/>


          <h2>Open chat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid cupiditate enim inventore iusto minus nihil, nisi nulla odit, provident, quas rerum vitae voluptatibus! A alias animi, at blanditiis consequatur distinctio ea earum eum, hic incidunt inventore magni minima minus nam nobis officiis optio quas quibusdam quidem quo sit voluptates voluptatum. Accusantium adipisci alias autem beatae consequatur, consequuntur corporis deserunt ducimus ea eius enim excepturi facere fugiat in iste iusto molestiae numquam obcaecati possimus provident quibusdam quis quos rem repellendus soluta tempore vitae voluptatum. Accusamus accusantium ad, aliquid animi at consequatur, enim esse itaque provident repellendus ullam unde velit, voluptates.
          </p>
          <br/>
          <br/>


          <h2>Get messages</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid cupiditate enim inventore iusto minus nihil, nisi nulla odit, provident, quas rerum vitae voluptatibus! A alias animi, at blanditiis consequatur distinctio ea earum eum, hic incidunt inventore magni minima minus nam nobis officiis optio quas quibusdam quidem quo sit voluptates voluptatum. Accusantium adipisci alias autem beatae consequatur, consequuntur corporis deserunt ducimus ea eius enim excepturi facere fugiat in iste iusto molestiae numquam obcaecati possimus provident quibusdam quis quos rem repellendus soluta tempore vitae voluptatum. Accusamus accusantium ad, aliquid animi at consequatur, enim esse itaque provident repellendus ullam unde velit, voluptates.
          </p>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default About;