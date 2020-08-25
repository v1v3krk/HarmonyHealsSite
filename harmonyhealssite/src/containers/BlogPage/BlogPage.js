import React, { Component } from 'react';
import Autolinker from 'autolinker';
import BlogSnippet from '../HomePage/BlogSection/BlogSnippet'
import { useRef } from 'react'




import "./BlogPage.css";
// import HomeJumbotron from '../HomePage/HomeJumbotron/HomeJumbotron';
import blogdata from "../../data/blog.json";
import SubJumbotron from '../../ui/SubJumbotron/SubJumbotron';

function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}




class BlogPage extends Component {
      state = {
        ...this.props.location.state
      }




      setName = (blog) => {
        this.setState({
          title: blog['title']
        })
      }


      render() {

        const animateDuration = 2;


        // const Card = (props) => {
        //   const data = props.data
        //   const listCards = data['blogs'].map((blog) =>
        //     <div className = "Card" onClick = {() => this.setName(blog)}>
        //       <div className = "categories">
        //         {blog['categories'].map((category) =>
        //         <h3 className = "category">{category}</h3>
        //       )}</div>
        //       <h2 className = "title">{blog['title']}</h2>
        //       <p className = "description">{shorten(blog['summary'], 150)}</p>
        //     </div>
        //   )
        //
        //   return(
        //     <div className = "Cards">
        //         {listCards}
        //     </div>
        //
        //   )
        //
        // }


        const blogDataRenderOne = blogdata.blogs.map((blog) => {
          if(blog['title'] === this.state['title']){
            return (
              <div className="BlogPage">
                <div className = "blog">
                  <div className = "BlogDate">
                    <p className = "blogDateText">{blog.date}</p>
                  </div>
                  <div className = "BlogHeaderTextPad">
                    <div className = "BlogHeaderText">
                      <p className = "bloghead">{blog.title}</p>
                    </div>
                  </div>

                  <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
                </div>
                <div className = "AuthorCard">
                  <div className = "Author">References</div>
                  <div className = "referencesHolder">
                    <ul>
                      {blog['references'].map((reference) =>
                        <li><a href = {reference} className = "reference">{reference}</a></li>
                      )}
                    </ul>
                    </div>
                </div>
              </div>

            );
          }
        })

        // const blogDataRender = blogdata.blogs.map((blog) => {
        //   return (
        //     <div className = "blog" >
        //       <div className = "BlogHeaderTextPad">
        //         <div className = "BlogHeaderText">
        //           <p className = "bloghead">{blog.title}</p>
        //         </div>
        //       </div>
        //         <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
        //     </div>
        //   );
        //
        // })




        return (
            <div>
                <SubJumbotron></SubJumbotron>
                
                  {blogDataRenderOne}



            </div>

        )
    }
}

export default BlogPage;
