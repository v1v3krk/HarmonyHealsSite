import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import blogdata from "../../../data/blog.json";
import './BlogSnippet.css'


function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

class BlogSnip extends Component {


    render() {


      const Card = (props) => {
        const data = props.data

        const listCards = data['blogs'].map((blog) =>
          <div className="Card">
            <div className = "categories">
              {blog['categories'].map((category) =>
              <h3 className = "category">{category}</h3>
            )}</div>
            <h2 className = "title">{blog['title']}</h2>
            <p className = "description">{shorten(blog['summary'], 150)}</p>
          </div>
        )

        return(
          <div >
              {listCards}
          </div>
        )

      }


      return (
        <div className = "BlogSection">
          <div className = "CoreTextHolder">
              <div className = "CoreHeaderText">
                <p>Check out our <span className = "mattepurple">Healing</span> Blogs.</p>
              </div>
              <div className = "CoreSubHeaderText">
                <p>Our <span className = "CoreEmphasized">attention capturing</span> blogs span <span className = "CoreEmphasized">multiple </span>
                topics that reflect our goals as an organization to <span className = "CoreEmphasized">uplift</span> humanity.</p>
              </div>
          </div>
          <div className = "CardsHolder">
            <div className = "Cards">
              <ScrollAnimation animateIn = "fadeInUpMod" animateOnce duration = {2}>
                <Card data = {blogdata}></Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      )

    }
}

export default BlogSnip;
