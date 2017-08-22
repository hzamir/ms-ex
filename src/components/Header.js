import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AcctHeader from './AcctHeader'
import CashHeader from './CashHeader'

import {kAcctNum,kCashAvail} from "../constants/AcctFields";
import {sizes, colors } from "../constants/metrics";

export default class Header extends Component {
  static propTypes = {
    sorting: PropTypes.object.isRequired
  };

  render() {

    const sortby = this.props.sorting.by;             // name of the field we are sorted by
    const acctOrder = this.props.sorting[kAcctNum];   // ascending or descending order for acctnum
    const cashOrder = this.props.sorting[kCashAvail]; // ascending or descending order for cashavail

    // handlers
    const {toggleAvail, toggleAcctNo, sortByAcctNo, sortByAvail} = this.props.actions;

    return (
      <div style={{ letterSpacing: '0.4px', display: 'block', width: sizes.itemWidth, height:sizes.headingHeight, borderBottom: '2px solid ' +  colors.hdgBorder}}>
        <AcctHeader ordered={sortby===kAcctNum}   order={acctOrder}  sort={sortByAcctNo} toggle={toggleAcctNo}  text="Account" />
        <CashHeader ordered={sortby===kCashAvail} order={cashOrder}  sort={sortByAvail}  toggle={toggleAvail}   text="Available Cash"/>
      </div>
    )
  }
}
