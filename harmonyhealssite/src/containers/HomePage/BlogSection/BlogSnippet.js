import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import blogdata from "../../../data/blog.json";
import './BlogSnippet.css'
import {Redirect} from 'react-router-dom'


function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

export const MContext = React.createContext()


class BlogSnip extends Component {
  state = {
    redirect: false,
    title : ""
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if(this.state.redirect){
      let copystate = {...this.state}
      this.setState({
        title: ""
      })
      return <Redirect to={{pathname: '/blog', state: {...copystate}}} />

    }



  }

  setName = (blog) => {
    this.setState({
      title: blog['title']
    })

  }


    render() {




      const Card = (props) => {
        const data = props.data

        const listCards = data['blogs'].map((blog,) =>
          <div onClick = {this.setRedirect} className="fake-Card">
            <div className = "Card" onClick = {() => this.setName(blog)}>
              <div className = "categories">
                {blog['categories'].map((category) =>
                <h3 className = "category">{category}</h3>
              )}</div>
              <h2 className = "title">{blog['title']}</h2>
              <p className = "description">{shorten(blog['summary'], 160)}</p>
            </div>
          </div>
        )

        return(
          <div className = "Cards">
            {this.renderRedirect()}
              {listCards}
          </div>
        )

      }


      return (
        <div className = "BlogSection">
          <ScrollAnimation animateIn = "fadeInUpMod" animateOnce duration = {2}>
            <div className = "CoreTextHolder">
                <div className = "CoreHeaderText">
                  <p>Check out our <span className = "mattepurple">Healing</span> Blogs.</p>
                </div>
                <div className = "CoreSubHeaderText">
                  <p>Our <span className = "CoreEmphasized">attention capturing</span> blogs span <span className = "CoreEmphasized">multiple </span>
                  topics that reflect our goals as an organization to <span className = "CoreEmphasized">uplift</span> humanity.</p>
                </div>
              </div>
            </ScrollAnimation>
          <ScrollAnimation animateIn = "fadeInUpMod" animateOnce duration = {2}>
            <div className = "CardsHolder">
                <Card data = {blogdata}></Card>
            </div>
          </ScrollAnimation>

        </div>
      )

    }
}

export default BlogSnip;
