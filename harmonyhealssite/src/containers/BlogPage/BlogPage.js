import React, { Component } from 'react';
import Autolinker from 'autolinker';


import "./BlogPage.css";
// import HomeJumbotron from '../HomePage/HomeJumbotron/HomeJumbotron';
import blogdata from "../../data/blog.json";
import SubJumbotron from '../../ui/SubJumbotron/SubJumbotron';


class BlogPage extends Component {

    render() {

        const animateDuration = 2;

        const blogDataRender = blogdata.blogs.map((blog,id) => {
            return (
                <div>
                    <p>{blog.title}</p>
                    <p>{blog.summary}</p>
                </div>
            );
        })

        return (
            <div>
                <SubJumbotron></SubJumbotron>
                {/* <div className="BlogPage" dangerouslySetInnerHTML={{__html: blogdata.blogs[0].content}}>
                </div> */}
                {blogDataRender}
            </div>

        )
    }
}

export default BlogPage;