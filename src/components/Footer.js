import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ibox, colors, baseColors, sizes, noTextSelectingAllowed} from "../constants/metrics";



//todo replicated bigFontStyle should be shared

const bigFontStyle = {  fontSize: sizes.bigFontSize, fontFamily: 'Arial'};

const footerStyle = {...ibox, ...noTextSelectingAllowed, ...bigFontStyle,
  textAlign:'center',
  paddingTop: '32px',
  color: baseColors.blue,
  backgroundColor: colors.itemBg,

  width: sizes.itemWidth,
  height: sizes.loadMoreHeight,
  letterSpacing: '-0.2px'
};


export default class Footer extends Component {
  static propTypes = {
    loadMore: PropTypes.func.isRequired
  };


  render() {
    return (
      <footer>
        <div style={footerStyle} onClick={this.props.loadMore}>Load more</div>
      </footer>
    )
  }
}

