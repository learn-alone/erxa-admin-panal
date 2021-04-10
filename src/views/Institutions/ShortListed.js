import React from "react";
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

import Accordion from "../../components/Accordion/Accordion.js";


export default function ShortListed() {
  return (
    <div>
            <Accordion
                active={0}
                activeColor="rose"
                collapses={[
                  {
                    title: "USA",
                    content:
                   <GridContainer>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                            <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                   </GridContainer>
                  },
                  {
                    title: "CANADA",
                    content:
                    <GridContainer>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                   </GridContainer>
                  },
                  {
                    title: "AUSTRALIA",
                    content:
                    <GridContainer>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                            <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                   </GridContainer>
                  },
                  {
                    title: "NEW ZEALAND",
                    content:
                    <GridContainer>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                       <GridItem md={6}>
                       <Card style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"10px"}}>
                                <table>
                                    <tr>
                                        <td>
                                        <img style={{height:"100%"}} src={'https://github.com/learn-alone/erxa_images/blob/master/institution.jpg'}/>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                        <h4> Central Queensland University </h4>
                                   <span> Bribstane,Australia </span>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            <Card style={{padding:"12px", marginTop:"-25px", width:"90%" ,boxShadow:"rgb(0 0 0 / 10%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"7px"}}>
                                <table>
                                    <tr> <td colspan="2"> <center><h4> Documentation </h4> </center></td> </tr>
                                    <tr> <td colspan="2" ><center> (Current Status) </center></td> </tr>
                                    <tr> <td colspan="2" ><center> <div style={{backgroundColor:"rgb(142 140 140)",height:"5px",width:"70%"}} />  </center></td> </tr>
                                    <tr> <td colspan="2" ><center> Completion [25%]
                                                                 <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    
                                    <tr> <td colspan="2" style={{color:"#f00"}}><center> Master of Science in Coputer Information Systems
                                                                <br /> <div style={{backgroundColor:"rgb(142 140 140)",height:"1px",width:"100%"}} />  </center></td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Discipline </h4> </td>
                                         <td> Masters Degree </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Program </h4> </td>
                                         <td> Computer Science </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Intake Applied </h4> </td>
                                         <td> Fall 2021 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Cource Duration </h4> </td>
                                         <td> 2 Years </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Requested </h4> </td>
                                         <td> 20-Oct-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> Date Applied </h4> </td>
                                         <td> 12-Dec-2020 </td> </tr>
                                    <tr> <td ><h4 style={{margin:"0px 0"}}> More Info </h4> </td>
                                         <td> View </td> </tr>
                                    
                                </table>
                                </Card>
                       </GridItem>
                   </GridContainer>
                  }
                ]}
              />
    </div>
  );
}
