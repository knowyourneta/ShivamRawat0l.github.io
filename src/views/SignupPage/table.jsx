import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import ReactTable from "react-table";
import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";
import 'react-table/react-table.css'
import image from "assets/img/bg7.jpg";
import './table.css'
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
   
   const criminal=this.props.CriminalCase>0 ?  <td data-label="CriminalCase" style={{color:'red'}}>{this.props.CriminalCase}</td>: <td data-label="CriminalCase">{this.props.CriminalCase}</td>
    return (
  
    <tr>
      <td data-label="Candidate">{this.props.Candidate}</td>
      <td data-label="Constituency">{this.props.Constituency}</td>
      <td data-label="Party">{this.props.Party}</td>
{criminal}      <td data-label="Education">{this.props.Education}</td>
      <td data-label="TotalAssets">{this.props.TotalAssets}</td>
      <td data-label="Liabilities">{this.props.Liabilities}</td>
    </tr>
)
  }
}

export default Table;
