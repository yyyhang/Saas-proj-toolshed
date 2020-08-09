import React, { Component } from 'react';

import PostDetails from './PostDetails'
import DeletePost from './DeletePost'

class PostHeader extends Component {
    constructor(props) {
        super(props);
    }
    

    
    render() {
        let details = this.props.type === "BlogPost" ? <PostDetails 
                                                        title = {this.props.title}
                                                        type = {this.props.type}
                                                        name = {this.props.name}
                                                        date = {this.props.date}
                                                        likes = {this.props.likes}
                                                        icon = {this.props.icon}
                                                        updateLikes = {this.props.updateLikes}
                                                        /> : ''
    
        return ( 
            <div class="ml-2">
                <div class="ml-4">
                    <h1 class="mt-2 text-dark"> {this.props.title} </h1>
                    <h5 class="mt-1 text-secondary"> {this.props.type} </h5>
                </div>
                <div class='mt-4'> {details} </div> 
                
                <div class='ml-4 mt-3'>
                    <button type="button" class="btn btn-danger btn-sm"> <DeletePost deletePost={this.props.deletePost} /> </button>
                    <button type="button" class="btn btn-secondary btn-sm ml-1"> Edit </button>
                </div>
                
            </div>
        );
    }
}
 
export default PostHeader;