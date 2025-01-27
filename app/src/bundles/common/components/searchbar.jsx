// General-use searchbar on the landing page and results page

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.addfilter = this.addfilter.bind(this);
        this.state = {
            query: '',
            filters: [],
        };
    }
    changeHandler = (event) => {
        let filtered = this.state.filters;
        this.setState({
            query: event.target.value,
            filters: filtered,
        });
    };
    torender() {
        var searchPath = `/search?query=${
            this.state.query // + '+' + this.state.filters.join('+')    // had to comment this out due to the + and non-functional filters
        }`;
        if (this.state.query == '') {
            return (
                <Link
                    type="button"
                    className="button"
                    to={searchPath}
                    style={{ pointerEvents: 'none' }}
                >
                    Search
                </Link>
            );
        } else {
            return (
                <Link type="button" className="button" to={searchPath}>
                    Search
                </Link>
            );
        }
    }
    addfilter(value) {
        let querys = this.state.query;
        let filtered = this.state.filters;
        if (filtered.length > 0 && filtered.includes(value)) {
            filtered = filtered.filter((item) => item != value);
        } else {
            filtered.push(value);
        }
        this.setState({
            query: querys,
            filters: filtered,
        });
    }
    render() {
        return (
            <React.Fragment>
                <div
                    className="input-group mx-auto"
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <Form inline>
                        <FormControl
                            className="topnav input"
                            type="text"
                            placeholder="search..."
                            name="query"
                            style={{ width: '300px' }}
                            value={this.state.query}
                            onChange={this.changeHandler}
                        />
                    </Form>
                    <div class="input-group-append">{this.torender()}</div>
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
                            <div class="checkbox">
                                <label>
                                    <input className="mb-2" type="checkbox" value="" />
                                    Blog Posts
                                </label>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input className="mb-2" type="checkbox" value="" />
                                    Knowledge Base
                                </label>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input className="mb-2" type="checkbox" value="" />
                                    New Items
                                </label>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input className="mb-2" type="checkbox" value="" />
                                    Videos
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;
