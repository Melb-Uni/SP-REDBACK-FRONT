import React from "react";
import ButtonGroup from "../_utils/ButtonGroup";
import Banner from "../_utils/Banner";
import LineChart from "../_utils/LineChart";
import uomHeader from "../header/uomheader.js";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import { commonConstants } from "../_constants";
import { ToastContainer } from "react-toastify";
import { Spin } from "antd";
import { InformationalNote } from "../_utils/Alert";
import { alertConstants } from "../_constants";
import Table from "../_utils/Table";

class ProcessQualityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnNames: [
        commonConstants.CONFLUENCE,
        commonConstants.GITHUB,
        commonConstants.JIRA,
      ],
      btnSelected: commonConstants.CONFLUENCE,
      scrollPosition: 0,
      update_columns: [
        {
          name: "Action",
          selector: "action",
          maxWidth: "10vw",
        },
        {
          name: "Time",
          selector: "time",
        },
        {
          name: "Page Name",
          selector: "page_name",
        },
        {
          name: "Links",
          selector: "link",
          cell: (row) => <a href={row.link}>{row.link}</a>,
        },
      ],
      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],
    };

    this.handleBtnGroupClick = this.handleBtnGroupClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleBtnGroupClick(e) {
    let selected = e.currentTarget.firstChild.innerHTML;
    if (selected == commonConstants.CONFLUENCE) {
      this.props.getTeamConfluencePages(this.props.currentTeamKey);
      this.props.getTeamConfluenceUpdate(this.props.currentTeamKey);
    } else if (selected == commonConstants.GITHUB) {
      this.props.getTeamGithubCommits(this.props.currentTeamKey);
    } else {
      this.props.getTeamJiraTickets(this.props.currentTeamKey);
    }
    this.setState({
      btnSelected: selected,
    });
  }

  handleScroll() {
    this.setState({
      scrollPosition: window.pageYOffset,
    });
  }

  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getTeamConfluencePages(this.props.currentTeamKey);
      this.props.getTeamConfluenceUpdate(this.props.currentTeamKey);
    }
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    window.scrollTo(0, parseInt(this.state.scrollPosition));
  }

  render() {
    
    const instruction_style = {
      color:'grey',
      marginLeft: '150px'
    };

    return (
      <div className="uomcontent">
        {uomHeader("Process Quality")}
        <div role="main">
          <div className="page-inner">
            <Banner projName={this.props.currentTeamName} />
            {!this.state.hasConfig && (
              <InformationalNote message={alertConstants.NO_CONFIG} />
            )}
            {this.state.hasConfig && (
              <ButtonGroup
                btnNames={this.state.btnNames}
                clickHandler={this.handleBtnGroupClick}
                selected={this.state.btnSelected}
              />
            )}
            <Spin
              spinning={
                this.props.requestTeamConfluencePages ||
                this.props.requestTeamGithubCommits ||
                this.props.requestTeamJiraTickets
              }
            >
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.CONFLUENCE && (
                  <div>
                    <p style={instruction_style}> • Hover on the line to get more information </p>
                    <LineChart data={this.props.confluenceData} />
                  </div>
                )}
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.CONFLUENCE && (
                  <Table
                    columns={this.state.update_columns}
                    data={this.props.confluenceUpdateData}
                    width={"80vw"}
                    height={"50vh"}
                  />)
              }
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.GITHUB && (
                  <div>
                  <LineChart data={this.props.githubData} />
                  <br/><br/>
                      <table border="1">
                        <tr>
                          <th width="30%">Name</th>
                          <th width="35">Page Count</th>
                          <th width="35%">Version</th>
                        </tr>
                        {
                          this.props.githubData["github"].map(function (item) {
                            return <tr><td>{item["name"]}</td><td>{item["commit_count"]}</td><td>{item["version"]}</td></tr>
                          })
                        }
                      </table>
                    </div>
                )}
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.JIRA && (
                  <LineChart data={this.props.jiraData} />
                )}
            </Spin>
          </div>
        </div>
        <ToastContainer limit={1} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    requestTeamConfluencePages: state.user.requestTeamConfluencePages,
    requestTeamGithubCommits: state.user.requestTeamGithubCommits,
    requestTeamJiraTickets: state.user.requestTeamJiraTickets,
    confluenceData: state.user.teamConfluencePages,
    confluenceUpdateData: state.user.teamConfluenceUpdate,
    githubData: state.user.teamGithubCommits,
    jiraData: state.user.teamJiraTickets,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,
  };
}

const actionCreators = {
  getTeamConfluencePages: userActions.getTeamConfluencePages,
  getTeamConfluenceUpdate: userActions.getTeamConfluenceUpdate,
  getTeamGithubCommits: userActions.getTeamGithubCommits,
  getTeamJiraTickets: userActions.getTeamJiraTickets,
};

const qualityPage = connect(mapState, actionCreators)(ProcessQualityPage);
export { qualityPage as ProcessQualityPage };
