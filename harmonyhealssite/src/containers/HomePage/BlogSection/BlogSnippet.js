import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import blogdata from "../../../data/blog.json";





class BlogSnip extends Component {


    render() {
      const Card = (props) => {
        const data = props.data
        const listCards = data['blogs'].map((blog) =>
          <div className="Card">
            <h3 id = "title">{blog['title']}</h3>
            <p id = "description">{blog['summary']}</p>
          </div>
        )
        return(
          <div>
              {listCards}
          </div>
        )

      }


      return (
        <div classname = "CardsHolder">
          <ScrollAnimation animateIn = "fadeInUpMod" animateOnce duration = {2}>
            <Card data = {blogdata}></Card>
          </ScrollAnimation>
        </div>
      )

    }
}

export default BlogSnip;
