import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {colors, sizes, ibox, commonStyle, bigFontStyle, smallFontStyle} from "../constants/metrics";


const numfmt = {minimumFractionDigits: 2, maximumFractionDigits: 2};

function fmtnum(n)  { return n.toLocaleString(undefined, numfmt); }
function fmtpct(n)  { return (n>0? '+':'') + fmtnum(n) + '%';     } // explicit + or -, add pct
function fmtacct(n) { return ('0000' + n).substr(-4);             } // pad with leading zeroes

// some inline styles
const border = { borderBottom: 'solid ' + sizes.borderHeight,  borderBottomColor: colors.itemBorder};
const backgr = { backgroundColor: colors.itemBg};



const acctNameStyle = {
  ...ibox,
  ...border,
  ...bigFontStyle,
  color: colors.acctName,
  fontWeight: 'bold',
  // paddingLeft: sizes.itemLeftPadding,
  paddingTop: '32px',
  height: sizes.itemHeight,
  width: sizes.acctWidth,
  letterSpacing: '-.4px'
};

const acctDetailsStyle = {
  ...commonStyle,
  fontWeight: 'Normal',
  textAlign: 'right',
  display: 'block',
  float: 'left',
  width: '50%',
  height: sizes.itemHeight
};

const cashStyle     = {
  ...commonStyle,
  ...bigFontStyle,
  color: colors.availCash,
  display: 'block',
  paddingTop: '16px',
  paddingRight: sizes.itemRightPadding,
  height: '50%',
  letterSpacing: '-.4px'
};

const changeStyle   = {
  ...commonStyle,
  ...smallFontStyle,
  ...border, display: 'block',
  verticalAlign: 'bottom',
  paddingTop:'8px',
  paddingRight: sizes.itemRightPadding,
  height: '50%',
  letterSpacing: '0.4px'
};  // add in colors later


const obscureBorder = {
  ...acctNameStyle,
  height:sizes.itemHeight,
  width:sizes.itemLeftPadding,

  borderBottomColor: colors.itemBg,
  display: 'block', float:'left',
  backgroundColor:colors.itemBg,
};

export default class AccountItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  // state = { };


//            {acctType: 'AAA', [kAcctNum]: 1812, [kCashAvail]:  2010926.10, changePct: 0.21, totValue:  38881.63},






  //-----

  render()
  {
    const { item } = this.props;


    const element =
        <div style={ {...backgr, display: 'block', height: sizes.itemHeight, width:sizes.itemWidth} }>
          <div style={obscureBorder}/>
          <div style={acctNameStyle} >{item.acctType} - {fmtacct(item.acctNum)}</div>
          <div style={acctDetailsStyle}>
            <div style={cashStyle} >${ fmtnum(item.cashAvail) }</div>
            <div style={{...changeStyle, color: (item.changePct>0? colors.positive: (item.changePct<0?colors.negative:colors.neutral))}}>
              {fmtpct(item.changePct)} / ${fmtnum(item.totValue)}
            </div>
          </div>
        </div>
    ;

    // for classnames we need to know negative/positive/zero change
    return <div>{element}</div>;
  }

};
