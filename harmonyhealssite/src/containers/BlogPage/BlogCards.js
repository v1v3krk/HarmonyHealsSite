import React, { Component } from 'react';
import Autolinker from 'autolinker';
import BlogSnippet from '../HomePage/BlogSection/BlogSnippet'
import { useRef } from 'react'
import {Redirect} from 'react-router-dom'





import "./BlogPage.css";
// import HomeJumbotron from '../HomePage/HomeJumbotron/HomeJumbotron';
import blogdata from "../../data/blog.json";
import SubJumbotron from '../../ui/SubJumbotron/SubJumbotron';

function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}
export const MContext = React.createContext()




class BlogCards extends Component {
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

        const animateDuration = 2;
        var counter = -1;
        function makeid(){
          counter++;
          return "card" + "abcd".charAt(counter);
        }


        const Card = (props) => {
          const data = props.data

          const listCards = data['blogs'].map((blog,) =>
            <div onClick = {this.setRedirect} className="fake-Card">
              <div id = {makeid()} className = "Card" onClick = {() => this.setName(blog)}>
                <div className = "categories">
                  {blog['categories'].map((category) =>
                  <h3 className = "category">{category}</h3>
                )}</div>
                <h2 className = "title">{blog['title']}</h2>
                <p className = "description">{shorten(blog['summary'], 150)}</p>
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
            <div>
                <SubJumbotron></SubJumbotron>
                <div className = "CardsHolder">
                    <Card data = {blogdata}></Card>
                </div>



            </div>

        )
    }
}

export default BlogCards;
