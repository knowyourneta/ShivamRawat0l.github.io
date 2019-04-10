import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import {Link} from 'react-router-dom'
import './style.css'
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
import Table from './table.jsx'
import Loader from 'react-loader-spinner'
import { relative } from "path";
class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: null,
      search:RegExp('','gmi')
    };
   this.getSearched=this.getSearched.bind(this)
  }
  componentDidMount(){
    this.getData()
  }
  async getData(){
   await fetch("https://ydop6myneta.pythonanywhere.com/candidates?constituency="+this.props.match.params.city)
    .then(blob=>blob.json())
    .then(snapshot=>{
      this.setState({
        data:snapshot
      })
    })
   const maindata= await Object.keys(this.state.data.candidates).map(index=>{
     if(this.state.search.test(this.state.data.candidates[index].candidate))
     return <Table Candidate={this.state.data.candidates[index].candidate} Constituency={this.state.data.candidates[index].constituency} Party={this.state.data.candidates[index].party} CriminalCase={this.state.data.candidates[index].criminalcase} Education={this.state.data.candidates[index].education} TotalAssets={this.state.data.candidates[index].totalassets} Liabilities={this.state.data.candidates[index].liabilities}/>
     else
     return <React.Fragment></React.Fragment>
    })
    this.setState({
      main:maindata
    })
  }
async getSearched(regular_Exp){
 await  this.setState({
    search:RegExp(regular_Exp,'gmi')
  })
  const maindata= await Object.keys(this.state.data.candidates).map(index=>{
    if(this.state.search.test(this.state.data.candidates[index].party) || this.state.search.test(this.state.data.candidates[index].candidate))
    return <Table Candidate={this.state.data.candidates[index].candidate} Constituency={this.state.data.candidates[index].constituency} Party={this.state.data.candidates[index].party} CriminalCase={this.state.data.candidates[index].criminalcase} Education={this.state.data.candidates[index].education} TotalAssets={this.state.data.candidates[index].totalassets} Liabilities={this.state.data.candidates[index].liabilities}/>
    else
    return <React.Fragment></React.Fragment>
   })
   this.setState({
     main:maindata
   })
 }
  render() {
  
   
    return (
      <React.Fragment>
         <Link to="/">
       <i class="fas fa-arrow-circle-left" style={{fontSize:24,margin:20}}></i>
       </Link>
        <div  style={{position:'absolute',right:14,top:14}}>
       
        <form method="post">
      
        <input type="text" class="textbox" placeholder="Search by name or party" ref="search" onChange={(data)=>{
                     

  
       
     }}/>
</form>
   
</div>
      <table>
      <caption>{this.props.cons}</caption>
      <thead>
        <tr>
          <th scope="col">Candidate</th>
          <th scope="col">Constituency</th>
          <th scope="col">Party</th>
          <th scope="col">CriminalCase</th>
          <th scope="col">Education</th>
          <th scope="col">TotalAssets</th>
          <th scope="col">Liabilities</th>
    
        </tr>
      </thead>
      <tbody>
      {this.state.main}
      </tbody>
</table>
</React.Fragment>
    )
  }
}

export default withStyles(signupPageStyle)(Components);
