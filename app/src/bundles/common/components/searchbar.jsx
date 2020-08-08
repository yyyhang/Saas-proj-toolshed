import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form,FormControl, Container, Button} from 'react-bootstrap'
import styled from "styled-components"


class SearchBar extends Component {
  render() {
    let query = 'sometext';
    let searchPath = `/search?query=${query}`;
    return (
      <React.Fragment>
        <div class="input-group mx-auto" style={{
          justifyContent: "center"
        }}>
            <Form inline>
                <FormControl className="topnav input" type="text" placeholder="Search"/>
            </Form>
            <div class="input-group-append" >
                <Link type="button" className="button" to={searchPath}>
                    Search
                </Link>
            </div>
            <div class="input-group-append">
                        <button
                            class="button"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Filters
                        </button>
                        <div class="dropdown-menu">
                            <a class="button" href="#">
                                Knowledge Base Items
                            </a>
                            <a class="button" href="#">
                                Blog Post Items
                            </a>
                            <a class="button" href="#">
                                New Posts
                            </a>
                            <div
                                role="separator"
                                class="dropdown-divider"
                            ></div>
                            <a class="button" href="#">
                                Popular Posts
                            </a>
                        </div>
                    </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default SearchBar;