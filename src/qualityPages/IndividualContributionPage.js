import React from "react";
import uomHeader from "../header/uomheader.js";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import { Tab, Col, Row, Container } from "react-bootstrap";
import ButtonGroup from "../_utils/ButtonGroup";
import { commonConstants } from "../_constants";
import { ToastContainer } from "react-toastify";
import Banner from "../_utils/Banner";
import DonutChart from "../_utils/DonutChart";
import DropdownMenus from "../_utils/DropdownMenus";
import { InformationalNote } from "../_utils/Alert";
import { alertConstants } from "../_constants";
import Table from "../_utils/Table";
// Testing File for tayuto
// import jiraContributionTestData from "../jiraContributionResult.json";

class IndividualContributionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      btnNames: [
        commonConstants.CONFLUENCE,
        commonConstants.GITHUB,
        commonConstants.JIRA,
      ],
      btnSelected: commonConstants.CONFLUENCE,
      selectedStudent: "All",
      ContributionSelectedStudent: "All",
      studentList: [],
      contribution_columns: [
        {
          name: "Student Name",
          selector: "student",
          maxWidth: "15vw",
        },
        {
          name: "Page Name",
          selector: "page_name",
        },
      ],
      // Jira Contribution columns START
      jira_contribution_columns:[
        {
          name: "Student Name",
          selector: "student",
        },
        {
          name: "Contribution",
          selector: "change_log",
          wrap:true,
          grow:3,
        },
      ],
      // Jira Contribution columns END
      
      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],
    };

    this.selectStudent = this.selectStudent.bind(this);
    this.ContributionSelectStudent = this.ContributionSelectStudent.bind(this);
    this.handleBtnGroupClick = this.handleBtnGroupClick.bind(this);
  }

  handleBtnGroupClick(e) {
    let picked = e.currentTarget.firstChild.innerHTML;
    if (picked === commonConstants.CONFLUENCE) {
      this.props.getConfluenceIndividualData(this.props.currentTeamKey);
      this.props.getIndividualContribution(this.props.currentTeamKey);
      this.props.getConfluenceIndividualContribution(this.props.currentTeamKey);
    } else if (picked === commonConstants.GITHUB) {
      this.props.getIndividualContribution(this.props.currentTeamKey);
      this.props.getGithubIndividualData(this.props.currentTeamKey);
    } else {
      this.props.getIndividualContribution(this.props.currentTeamKey);
      this.props.getJiraIndividualData(this.props.currentTeamKey);
      this.props.getJiraIndividualContribution(this.props.currentTeamKey);
    }
    this.setState({
      btnSelected: picked,
      selectedStudent: "All",
      ContributionSelectedStudent: "All",
    });
  }

  selectStudent(e) {
    this.setState({ selectedStudent: e.target.value });
  }

  ContributionSelectStudent(e) {
    this.setState({ ContributionSelectedStudent: e.target.value });
  }

  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getConfluenceIndividualData(this.props.currentTeamKey);
      this.props.getIndividualContribution(this.props.currentTeamKey);
      this.props.getConfluenceIndividualContribution(this.props.currentTeamKey);
    }
  }

  render() {
    const title_style = {
      color:'grey',
      marginLeft: '150px',
    };
    return (
      <div className="uomcontent">
        <ToastContainer limit={1} />
        {uomHeader("Individual Contribution")}
        <div role="main">
          <div className="page-inner">
            <Banner projName={this.props.currentTeamName} />
            {!this.state.hasConfig && (
              <InformationalNote message={alertConstants.NO_CONFIG} />
            )}
            {this.state.hasConfig && (
              <Container>
                <Tab.Container id="left-tabs-example">
                  <Row>
                    <Col>
                      <ButtonGroup
                        btnNames={this.state.btnNames}
                        clickHandler={this.handleBtnGroupClick}
                        selected={this.state.btnSelected}
                      />
                    </Col>
                    <Col>
                      
                      {this.state.btnSelected === commonConstants.GITHUB &&
                        typeof this.props.individualGithubData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualGithubData) !==
                          "{}" && (
                            <div>
                              <h1 style={title_style}>• Contribution Within the Team</h1>
                              <DropdownMenus
                                data={this.props.individualGithubData["All"].labels}
                                onChange={this.selectStudent}
                                value={this.state.selectedStudent}
                              />
                            </div>
                        )}
                      {this.state.btnSelected === commonConstants.JIRA &&
                        typeof this.props.individualJiraData !== "undefined" &&
                        JSON.stringify(this.props.individualJiraData) !==
                          "{}" && (
                            <div>
                              <h1 style={title_style}>• Contribution Within the Team</h1>
                              <DropdownMenus
                                data={this.props.individualJiraData["All"].labels}
                                onChange={this.selectStudent}
                                value={this.state.selectedStudent}
                              />
                            </div>
                        )}
                    </Col>
                    <Col>
                      {this.state.btnSelected === commonConstants.CONFLUENCE &&
                        typeof this.props.individualConfluenceData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualConfluenceData) !==
                          "{}" && (
                            <div>
                              <h1 style={title_style}>• Contribution Within the Team</h1>
                              <DropdownMenus
                                data={
                                  this.props.individualConfluenceData["All"].labels
                                }
                                onChange={this.selectStudent}
                                value={this.state.selectedStudent}
                              />
                            </div>
                        )}
                      {this.state.btnSelected === commonConstants.CONFLUENCE &&
                        typeof this.props.individualConfluenceData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualConfluenceData) !==
                          "{}" && (
                          <DonutChart
                            data={JSON.parse(
                              JSON.stringify(
                                this.props.individualConfluenceData[
                                  this.state.selectedStudent
                                ]
                              )
                            )}
                          />
                        )}
                      {this.state.btnSelected === commonConstants.CONFLUENCE &&
                        typeof this.props.individualContribution !==
                          "undefined" &&
                        JSON.stringify(this.props.individualContribution) !==
                          "{}" && (
                          <div>
                            <br/><br/>
                            <h1 style={title_style}>• Contribution Between Confluence and Jira</h1>
                            <DropdownMenus
                              data={
                               this.props.individualContribution["All"].labels
                              }
                              onChange={this.ContributionSelectStudent}
                              value={this.state.ContributionSelectedStudent}
                            />
                          </div>                          
                        )}
                      {this.state.btnSelected === commonConstants.CONFLUENCE &&
                        typeof this.props.individualContribution !==
                          "undefined" &&
                        JSON.stringify(this.props.individualContribution) !==
                          "{}" && (
                          <DonutChart
                            data={JSON.parse(
                              JSON.stringify(
                                this.props.individualContribution[
                                  this.state.ContributionSelectedStudent
                                ]
                              )
                            )}
                          />
                        )}
                      {this.state.btnSelected === commonConstants.CONFLUENCE && 
                        typeof this.props.individualConfluenceContributionData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualConfluenceContributionData) !==
                          "{}" && (
                            <div>
                              <br/><br/>
                              <h1 style={title_style}>• Contribution of Each Student</h1>
                              <Table
                                columns={this.state.contribution_columns}
                                data = {this.props.individualConfluenceContributionData}
                                width={"80vw"}
                                height={"50vh"}
                              />
                            </div>
                        )
                      }
                      {this.state.btnSelected === commonConstants.GITHUB &&
                        typeof this.props.individualGithubData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualGithubData) !==
                          "{}" && (
                            <div>
                          <DonutChart
                            data={JSON.parse(
                              JSON.stringify(
                                this.props.individualGithubData[
                                  this.state.selectedStudent
                                ]
                              )
                            )}
                            dataLabel={"Number of Commits"}
                          />
                          <br/><br/>
                            <h1 style={title_style}>• Contribution of Each Student</h1>
                            <table border="1">
                              <tr>
                                <th width="30%">Name</th>
                                <th width="35">Commit Count</th>
                                <th width="35%">Description</th>
                              </tr>
                              {
                                this.props.individualGithubData["All"]["github"].map(function (item) {
                                  return <tr><td>{item["name"]}</td><td>{item["commit_count"]}</td><td>{item["version"]}</td></tr>
                                })
                              }
                            </table>
                          </div>
                        )}
                        {this.state.btnSelected === commonConstants.JIRA &&
                        typeof this.props.individualContribution !==
                          "undefined" &&
                        JSON.stringify(this.props.individualContribution) !==
                          "{}" && (
                          <DonutChart
                            data={JSON.parse(
                              JSON.stringify(
                                this.props.individualContribution[
                                  this.state.selectedStudent
                                ]
                              )
                            )}
                          />
                        )} 
                      {this.state.btnSelected === commonConstants.JIRA &&
                        typeof this.props.individualJiraData !== "undefined" &&
                        JSON.stringify(this.props.individualJiraData) !==
                          "{}" && (
                          <DonutChart
                            data={JSON.parse(
                              JSON.stringify(
                                this.props.individualJiraData[
                                  this.state.selectedStudent
                                ]
                              )
                            )}
                            dataLabel={"Completed Tasks"}
                          />
                        )}
                    </Col>
                    <Col>
                      {this.state.btnSelected === commonConstants.JIRA &&
                        typeof this.props.individualJiraContribution !== "undefined" &&
                        JSON.stringify(this.props.individualJiraContribution) !==
                          "{}" && (
                            <div>
                              <br/><br/>
                              <h1 style={title_style}>• Contribution of Each Student</h1>
                              <Table
                                title="Individual Contribution Details - Jira"
                                columns={this.state.jira_contribution_columns}
                                data ={
                                  this.props.individualJiraContribution

                                  //JSON.parse(this.props.individualJiraContribution).filter(({student})=>student ===this.state.selectedStudent)
                                }
                                max-width={"50vw"}
                                height={"50vh"}
                              />
                            </div>
                        )}
                    </Col>
                  </Row>
                </Tab.Container>
              </Container>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    individualConfluenceData: state.user.individualConfluencePages,
    individualGithubData: state.user.individualGitHubCommits,
    individualContribution: state.user.individualContribution,
    individualConfluenceContributionData: state.user.individualConfluenceContribution,
    individualGithubData: state.user.individualGitHubCommits,
    individualJiraData: state.user.individualJiraCounts,
    individualJiraContribution: state.user.individualJiraContribution,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,
  };
}

const actionCreators = {
  getConfluenceIndividualData: userActions.getConfluenceIndividualData,
  getGithubIndividualData: userActions.getGithubIndividualData,
  getIndividualContribution: userActions.getIndividualContribution,
  getConfluenceIndividualContribution: userActions.getConfluenceIndividualContribution,
  getGithubIndividualData: userActions.getGithubIndividualData,
  getJiraIndividualData: userActions.getJiraIndividualData,
  getJiraIndividualContribution: userActions.getJiraIndividualContribution,
};

const Product = connect(mapState, actionCreators)(IndividualContributionPage);
export { Product as IndividualContributionPage };
