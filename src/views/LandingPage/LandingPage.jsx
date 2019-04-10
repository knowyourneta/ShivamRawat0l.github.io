import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import {Link} from 'react-router-dom'
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.jsx";
import SectionTeam from "./Sections/SectionTeam.jsx";
import SectionWork from "./Sections/SectionWork.jsx";

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    this.getAllState()
  }
  constructor(props)
  {
    super(props)
     this.state={
       region:null,
       regions:null,
       selected:"SELECT STATE"
     }
   this.getAllState=this.getAllState.bind(this)
  }
  async getAllState(){
   await fetch("https://ydop6myneta.pythonanywhere.com/all/states")
    .then(blob=>blob.json())
    .then(snapshot=>{
    
        this.setState({
          regions:snapshot
        })
    })
  
    const main = await Object.keys(this.state.regions["states"]).map(data=>{
      return <div onClick={()=>{
        this.setState({
          selected:this.state.regions["states"][data]
        })
        this.getCities(this.state.regions["states"][data])
      }}>
      {this.state.regions["states"][data]}
       </div>
    })
    await this.setState({
      region:main
    })
  }

  async getCities(cityname){
    var a
    a=cityname
    if ( a.includes("&")){
      a=a.split(' ')[0];
      a=a.toLowerCase()
    }
    await fetch("https://ydop6myneta.pythonanywhere.com/constituencies?state="+a)
     .then(blob=>blob.json())
     .then(snapshot=>{
         this.setState({
           cities:snapshot
         })
     })
     if(cityname.includes("&")){
       cityname=cityname.toLowerCase()
     }
     const citys = await this.state.cities["constituencies"][cityname].map(data=>{
      if ( data.includes("&")){
        data=data.split(' ')[0];
        data=data.toLowerCase()
      }
       return <Link to={"/city/"+data}>
       <div style={{padding:2}}>
       {data}</div>
        </Link>
     })
     await this.setState({
       city:citys
     })
   }
  render() {
    const { classes, ...rest } = this.props;
    const navbar= (this.state.region!=null || this.state.region!=undefined) ?   <Header
    color="transparent"
    brand="KnowYourNeta"
    links={<HeaderLinks state={this.state.selected} datas={this.state.region} citydata={this.state.city} dropdownHoverColor="info" />}
    fixed
    changeColorOnScroll={{
      height: 300,
      color: "primary"
    }}
  />:<React.Fragment></React.Fragment>
    return (
      <div>
      {navbar}
        <Parallax image={require("assets/img/bg8.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Vote the right candidate</h1>
                <h4>
                This Election, know your candidates before casting your vote
                </h4>
                <br />
                
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          {/*<SectionProduct></SectionProduct>*/}
          {/*  <SectionWork />*/ }
          </div>
        </div>
     {/* <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="myneta.info"
                      className={classes.block}
                    >
                      All the data is scraped from myneta.info. Please Consider donating them.
                    </a>
                  </ListItem>
                  
                </List>
              </div>
             
            </div>
          }
        />*/ }
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
