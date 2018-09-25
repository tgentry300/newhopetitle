import React, { Component } from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import newHopeTitleLogo from './newhopetitle.png';

const style = {
  div: {
    width: '100%',
    height: '5rem',
    backgroundColor: '#C70039'
  },
  div2: {
    backgroundColor: '#D0D3D4',
    width: '100%',
    height: '4rem',
    marginBottom: '3rem'
  },
  logo: {
    marginLeft: '2rem',
    marginTop: '.5rem'
  }
};

class PageHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={style.div}>
          <Image
            style={style.logo}
            src={newHopeTitleLogo}
            as="a"
            href="https://www.newhopetitle.com/"
          />
        </div>
        <div style={style.div2} />
      </React.Fragment>
    );
  }
}

export default PageHeader;
