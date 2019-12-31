import React, { Component } from 'react'


export default class footer extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      date: ''
    };
  }

  componentDidMount() {


  }

  render() {
    return (
      <div>
                    {/* <!-- Footer --> */}
          <footer className="page-footer font-small black">

            {/* <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3 text-white">John Concept,© {new Date().getFullYear()} All right reserved: </div>
            {/* <!-- Copyright --> */}

          </footer>
          {/* <!-- Footer --> */}
      </div>
    )
  }
} footer.propTypes = {};
