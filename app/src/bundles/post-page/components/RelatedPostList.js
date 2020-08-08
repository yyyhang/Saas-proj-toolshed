import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RelatedPostList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            related:[]
        };
    }
    
    componentDidMount(){
        this.getData();
    }
    
    getData=()=>{
        var api = 'http://localhost:3000/related.json';
        axios.get(api)
        .then((response)=>{this.setState({
            related:response.data.related
         })
        })
        .catch((error)=>{console.log(error)})
    }
    
    render() { 
        return ( 
            <Fragment> 
            <h3 class = "related-post-header" >Related Posts</h3>
            
            <div>
            {
                    this.state.related.map((item,index)=>{
                        return (<Link className="card" key={index} to={`/posts/${item.title}`}>
                                    {/* <div class="card-body"> */}
                                        <h4> {item.title} </h4>
                                        <p> {item.type} </p>
                                    {/* </div> */}
                                </Link>
                        )  
                    })
                }
            </div>
            <br />
            
            </Fragment>
            
        );
    }
}
 
export default RelatedPostList;
