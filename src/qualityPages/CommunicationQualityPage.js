import React from "react";
import Banner from "../_utils/Banner";
import uomHeader from "../header/uomheader";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import Table from "../_utils/Table";
import { alertConstants } from "../_constants";
import { InformationalNote } from "../_utils/Alert";

class CommunicationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meeting_columns: [
        {
          name: "Meeting Name",
          selector: "title",
        },
        {
          name: "Meeting Minutes",
          selector: "link",
          cell: (row) => <a href={row.link}>{row.link}</a>,
        },
      ],
      comment_columns: [
        {
          name: "Time",
          selector: "time",
        },
        {
          name: "Page Name",
          selector: "page_name",
        },
        {
          name: "Comment",
          selector: "comment content",
        },
        {
          name: "Student Name",
          selector: "creator",
        },
      ],
      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],
    };
  }

  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getTeamConfluenceMeeting(this.props.currentTeamKey);
      this.props.getTeamConfluenceComment(this.props.currentTeamKey);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="uomcontent">
        {uomHeader("Communication")}
        <div role="main">
          <div className="page-inner">
            <Banner projName={this.props.currentTeamName} />
            {!this.state.hasConfig && (
              <InformationalNote message={alertConstants.NO_CONFIG} />
            )}
            {this.state.hasConfig &&
              (!this.props.confluenceData ||
                this.props.confluenceData.length == 0) && (
                <InformationalNote
                  message={alertConstants.NO_MEETING_MINUTES}
                />
              )}
            {this.state.hasConfig &&
              this.props.confluenceData &&
              this.props.confluenceData.length != 0 && (
                <Table
                  columns={this.state.meeting_columns}
                  data={this.props.confluenceData}
                  width={"80vw"}
                  height={"50vh"}
                />
              )}
              {this.state.hasConfig &&
              this.props.confluenceComment &&
              this.props.confluenceComment.length != 0 && (
                <Table
                  columns={this.state.comment_columns}
                  data={this.props.confluenceComment}
                  width={"80vw"}
                  height={"50vh"}
                />
              )}
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    confluenceData: state.user.teamConfluenceMeeting,
    confluenceComment: state.user.teamConfluenceComment,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,
  };
}

const actionCreators = {
  getTeamConfluenceMeeting: userActions.getTeamConfluenceMeeting,
  getTeamConfluenceComment: userActions.getTeamConfluenceComment,
};

const Communication = connect(mapState, actionCreators)(CommunicationPage);
export { Communication as CommunicationQualityPage };
