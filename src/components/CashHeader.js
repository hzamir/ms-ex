import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ibox, colors, sizes, smallFontStyle, noTextSelectingAllowed} from "../constants/metrics"
import {caretdn,caretup} from "../constants/metrics"
import {asc} from '../constants/AcctFields'

const pickerstyle =  {
  ...noTextSelectingAllowed,
  ...ibox,
  ...smallFontStyle,
  borderLeft: 'solid 2px ' + colors.itemBg,
  paddingRight: sizes.hdgRightPadding,
  paddingTop: '8.5px',
  lineHeight: '125%',
  letterSpacing: '0.25px',
  backgroundColor: colors.hdgAvailBg,
  height:sizes.headingHeight, width:'310px',
  textAlign: 'right'
};


export default class CashHeader extends Component {
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

    // for classnames we need to know negative/positive/zero change
    return <div style={pickerstyle} onClick={this.handler}><span style={caretStyle}>^</span>&nbsp;&nbsp;{text}<br/><span style={{color:colors.neutral}}>Today's Change</span></div>;
  }
}
