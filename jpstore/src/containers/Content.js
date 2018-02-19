import React, { Component } from 'react';
import SimpleSlider from  '../components/content/SimpleSlider';
import Banner from  '../components/content/Banner';

class Content extends Component {
  render() {
    return (
        <content className="content container-fluid">
            <div className="row">
            <div className="col-3">
                <Banner />
                <Banner />
             </div>
             <div className="col-6">
                <SimpleSlider />
             </div>
             <div className="col-3">
                <Banner />
                <Banner />
            </div>
            </div>
        </content>
    );
  }
}

export default Content;


