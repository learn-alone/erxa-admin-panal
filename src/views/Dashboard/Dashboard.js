import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Paper from "@material-ui/core/Paper";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import Accordion from "../../components/Accordion/Accordion.js";


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      {/* <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer> */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}> New Erxians</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader style={{stroke:"#fff", backgroundColor:"rgb(152 183 236)",color:"#fff"}}>
              <ChartistGraph 
              style={{color:"#fff",stroke:"#fff"}}
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Erxans Growth</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader style={{backgroundColor:"rgb(152 183 236)"}}  >
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Erxians Comparison</h4>
              <p className={classes.cardCategory}>Freemium Vs Premium</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader style={{backgroundColor:"rgb(2 28 73)"}}>
              <h4 className={classes.cardTitleWhite}>Countries & Cources</h4>
             
            </CardHeader>
            <CardBody>
            <Accordion
                active={0}
                activeColor="rose"
                collapses={[
                  {
                    title: "ALL COUNTRIES",
                    content:
                    <GridContainer>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/countries.jpg'}/></center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 9</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Countries</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>0</span> New Country this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/institution.jpg"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1321</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Institutions</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>146</span> New Institutions this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/programs.jpg"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 18</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Programs</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>121</span> New Programs this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/ug.png'} />    </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1489</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Bachelors Courses</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>157</span> New Cources this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/master.png"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1642</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Masters Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>18</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>   <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/doctoral_icon.png'} />  </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 371</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Doctorate Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>14</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    </GridContainer>
                  },
                  {
                    title: "USA",
                    content:
                    <GridContainer>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                      <div style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/flag/us.jpg'} /></div>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/institution.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1321</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Institutions</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>146</span> New Institutions this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/programs.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 18</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Programs</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>121</span> New Programs this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/ug.png'} />    </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1489</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Bachelors Courses</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>157</span> New Cources this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/master.png"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1642</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Masters Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>18</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>   <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/doctoral_icon.png'} />  </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 371</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Doctorate Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>14</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    </GridContainer>
                  },
                  {
                    title: "CANADA",
                    content:
                    <GridContainer>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <div style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/flag/canada.png'} />
                    </div>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/institution.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1321</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Institutions</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>146</span> New Institutions this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/programs.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 18</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Programs</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>121</span> New Programs this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/ug.png'} />    </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1489</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Bachelors Courses</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>157</span> New Cources this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/master.png"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1642</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Masters Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>18</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>   <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/doctoral_icon.png'} />  </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 371</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Doctorate Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>14</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    </GridContainer>
                  },
                  {
                    title: "AUSTRALIA",
                    content:
                    <GridContainer>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                      <div style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/flag/australia.png'} />
                    </div>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/institution.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1321</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Institutions</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>146</span> New Institutions this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/programs.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 18</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Programs</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>121</span> New Programs this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/ug.png'} />    </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1489</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Bachelors Courses</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>157</span> New Cources this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/master.png"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1642</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Masters Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>18</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>   <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/doctoral_icon.png'} />  </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 371</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Doctorate Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>14</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    </GridContainer>
                  },
                  {
                    title: "UNITED KINGDOM",
                    content:
                    <GridContainer>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <div style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/flag/uk.png'} />
                    </div>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/institution.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1321</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Institutions</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>146</span> New Institutions this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/programs.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 18</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Programs</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>121</span> New Programs this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/ug.png'} />    </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1489</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Bachelors Courses</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>157</span> New Cources this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/master.png"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1642</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Masters Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>18</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>   <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/doctoral_icon.png'} />  </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 371</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Doctorate Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>14</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    </GridContainer>
                  },
                  {
                    title: "GERMANY",
                    content:
                    <GridContainer>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <div style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/flag/germany.png'} />
                    </div>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/institution.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1321</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Institutions</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>146</span> New Institutions this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/programs.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 18</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Programs</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>121</span> New Programs this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/ug.png'} />    </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1489</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Bachelors Courses</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>157</span> New Cources this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/master.png"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1642</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Masters Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>18</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>   <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/doctoral_icon.png'} />  </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 371</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Doctorate Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>14</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    </GridContainer>
                  },
                  {
                    title: "NEW ZEALAND",
                    content:
                    <GridContainer>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <div style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/flag/newzealand.jpg'} />
                    </div>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/institution.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1321</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Institutions</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>146</span> New Institutions this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/programs.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 18</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Programs</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>121</span> New Programs this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/ug.png'} />    </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1489</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Bachelors Courses</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>157</span> New Cources this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/master.png"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1642</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Masters Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>18</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>   <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/doctoral_icon.png'} />  </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 371</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Doctorate Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>14</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    </GridContainer>
                  },
                  {
                    title: "POLAND",
                    content:
                    <GridContainer>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <div style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/flag/poland.png'} />
                    </div>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/institution.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1321</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Institutions</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>146</span> New Institutions this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/programs.jpg'} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 18</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Programs</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>121</span> New Programs this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center> <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/ug.png'} />    </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1489</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Bachelors Courses</center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>157</span> New Cources this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                      <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>  <img style={{width:"100%",height:"auto"}} src={"https://raw.githubusercontent.com/learn-alone/erxa_images/master/master.png"} />   </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 1642</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Masters Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>18</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    <GridItem xs={6} sm={4} md={2} style={{marginBottom:"15px"}}>
                    <Paper style={{borderRadius:"25px",padding:"5px",width:"100%",border:"2px solid #7dbf7d"}}>
                    <table style={{minHeight:"150px"}}>
                        <tr>
                          <td rowSpan={2} style={{width:"30%"}}><center>   <img style={{width:"100%",height:"auto"}} src={'https://raw.githubusercontent.com/learn-alone/erxa_images/master/doctoral_icon.png'} />  </center></td>
                          <td><center><span style={{fontSize:"24px",fontWeight:"bold",color:"#7dbf7d"}}> 371</span></center></td></tr>
                        <tr><td style={{fontSize:"18px",fontWeight:"bold",color: "#675d5d"}}><center> Doctorate Courses </center></td></tr>
                        <tr><td colSpan={2}><center><span style={{color:"rgb(103, 93, 93)",fontSize: "15px",fontWeight: "bold"}}>14</span> New Courses this Month</center></td></tr>
                      </table>
                    </Paper>
                    </GridItem>
                    </GridContainer>
                  }
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
