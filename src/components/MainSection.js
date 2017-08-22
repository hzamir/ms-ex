import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'

import AccountItem from './AccountItem'
import {kAcctNum} from "../constants/AcctFields";


export default class MainSection extends Component {
  static propTypes = {
    accounts: PropTypes.array.isRequired,
    limited: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
  };


  renderFooter(limited)
  {

    if (limited) {
      return <Footer loadMore={this.props.actions.loadMore}/>;
    }
  }

  render() {
    const { accounts, limited } = this.props;

    const visaccounts = limited? accounts.slice(0,3): accounts;

    return (
      <div >
        {visaccounts.map(item => <AccountItem key={item[kAcctNum]} item={item} />)}
        {this.renderFooter(limited)}
      </div>
    )
  }
}
