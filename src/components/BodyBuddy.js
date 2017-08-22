import { Component } from 'react'
import {colors} from "../constants/metrics";


export default class BodyBuddy extends Component {

  componentDidMount() {
    document.body.style.backgroundColor = colors.appBg
  }

  render() {
    return null;
    // return this.props.children
  }

};
