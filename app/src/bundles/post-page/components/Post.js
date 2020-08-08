import React from 'react';
import PostTags from './PostTags';
import PostHeader from './PostHeader';
import RelatedPostList from './RelatedPostList';
import CommentSection from './CommentSection';
import PostBody from './PostBody';
import Navbar1 from '../../common/components/navbar';
import './Post.css';

const Post = () => (

    <div>
        <div> <Navbar1 /> </div>
        <PostHeader />
        <hr />
        <div className="row">
            <div className="col-md-8" id="html-part"> <PostBody /> </div>
            <div className="col-md-3" id="aside"> 
                <PostTags />
                <br />
                <RelatedPostList />
            </div>
        </div>
        <hr />
        <div class="commentSection"><CommentSection /></div>

    
    </div>
)

export default Post;