import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as Actions from '../actions'
import BodyBuddy from "../components/BodyBuddy";

const App = ({accounts, sorting, limited, actions}) => (

  <div>
    <BodyBuddy/>
    <Header sorting={sorting} actions={actions}/>
    <MainSection accounts={accounts} limited={limited} actions={actions} />
  </div>
);

App.propTypes = {
  accounts: PropTypes.array.isRequired,
  limited: PropTypes.bool.isRequired,
  sorting: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const s = state.msexstate;

  return {
     accounts : s.accounts
    ,sorting: s.sorting
    ,limited: s.limited
  };
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
