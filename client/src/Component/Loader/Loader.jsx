import React, { Component } from 'react'

class Loader extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div>
                 {/* <!--== Preloader Area Start ==--> */}
                <div className="preloader">
                    <div className="preloader-spinner">
                        <div className="loader-content">
                            <img src={require("./asset/img/preloader.gif")} alt="img"/>
                        </div>
                    </div>
                </div>
    {/* <!--== Preloader Area End ==-- */}
            </div>
        );
    }
}

Loader.propTypes = {};
