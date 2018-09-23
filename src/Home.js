import React from 'react';
import DocumentMeta from 'react-document-meta';
const lang = require('./lang');

/* Load meta tags */

const meta = {
  title: lang.home_meta_title,
  description: lang.home_meta_title,
  meta: {
	name: {
	  keywords: lang.home_meta_title
	}
  }
};
class Home extends React.Component {
	
  render() {
    return (
    
    <div>   	<DocumentMeta  {...meta} />
    
      <div id="maps" style={{position: ''}}></div>
      <div id="button-layer"><button id="btnAction" style={{display: 'none'}}>My Current Location</button></div>
    </div>
    
    );
  }
}
export default Home;

