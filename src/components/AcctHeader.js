import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {caretup, caretdn, colors, sizes, ibox, smallFontStyle, noTextSelectingAllowed} from "../constants/metrics"
import {asc} from '../constants/AcctFields'

const pickerstyle =  {
  ...noTextSelectingAllowed,
  ...ibox,
  ...smallFontStyle,
  paddingLeft: sizes.itemLeftPadding,
  paddingTop: '36.5px',
  backgroundColor: colors.hdgAcctBg,
  height:sizes.headingHeight,
  width:'310px'
};


export default class AcctHeader extends Component {
  static propTypes = {
    ordered: PropTypes.bool.isRequired,
    order: PropTypes.string.isRequired,
    sort: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
  };

  constructor(props)
  {
    super(props);
    const {sort, toggle} = this.props;

    const self = this;

    this.handler = function() {
      if(self.props.ordered) {
        toggle();
      } else {
        sort();
      }
    }
  }


  render()
  {
    const { ordered, order, text} = this.props;

    let caretStyle = {display: 'none'};

    if(ordered)
    {
      caretStyle = (order === asc)?caretup:caretdn;
    }
    return <div style={pickerstyle} onClick={this.handler}>{text} <span style={caretStyle}>^</span></div>;
  }
}
