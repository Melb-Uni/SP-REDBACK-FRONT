import { userConstants } from "../_constants";

const initState = {
  requestIndividualConfluencePages: false,
  requestIndividualContribution: false,
  requestIndividualGitHubCommits: false,
  requestIndividualJiraCounts: false,
  // Request Individual Jira Contribution START
  requestIndividualJiraContribution:false,
  // Request Individual Jira Contribution END  
  requestIndividualConfluenceContribution: false,
  requestTeamConfluencePages: false,
  requestTeamConfluencePagesWeek: false,
  requestTeamConfluencePagesMonth: false,
  requestTeamGithubCommits: false,
  requestTeamJiraTickets: false,
  requestTeamJiraCycleTime: false,
  requestTeamJiraThroughOutput: false,
  requestTeamJiraHistory: false,
  requestTeamConfluenceUpdate: false,
  requestTeamConfluenceComment: false,
  requestSetTeamInfo: false,
  requestTeamCodeMetrics: false,
  requestConfluenceSpaceByKeyWord: false,
  importProject: false,
  requestImportedProject: false,
  currentTeamKey: "",
  currentTeamName: "",
  isLogin: false,
  requestLogin: false,
  teamInfo:{},
};

export function user(state = initState, action) {
  switch (action.type) {
    case userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_REQUEST:
      return {
        ...state,
        requestIndividualConfluencePages: true,
      };
    case userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_SUCCESS:
      return {
        ...state,
        requestIndividualConfluencePages: false,
        individualConfluencePages: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_FAILURE:
      return {
        ...state,
        requestIndividualConfluencePages: false,
        individualConfluencePages: {},
      };
    case userConstants.GET_INDIVIDUAL_CONTRIBUTION_REQUEST:
      return {
        ...state,
        requestIndividualContribution: true,
      };
    case userConstants.GET_INDIVIDUAL_CONTRIBUTION_SUCCESS:
      return {
        ...state,
        requestIndividualContribution: false,
        individualContribution: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_CONTRIBUTION_FAILURE:
      return {
        ...state,
        requestIndividualContribution: false,
        individualContribution: {},
      };
    case userConstants.GET_INDIVIDUAL_CONFLUENCE_CONTRIBUTION_REQUEST:
      return {
        ...state,
        requestIndividualConfluenceContribution: true,
      };
    case userConstants.GET_INDIVIDUAL_CONFLUENCE_CONTRIBUTION_SUCCESS:
      return {
        ...state,
        requestIndividualConfluenceContribution: false,
        individualConfluenceContribution: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_CONFLUENCE_CONTRIBUTION_FAILURE:
      return {
        ...state,
        requestIndividualConfluenceContribution: false,
        individualConfluenceContribution: {},
      };
    case userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_REQUEST:
      return {
        ...state,
        requestIndividualGitHubCommits: true,
      };

    case userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_SUCCESS:
      return {
        ...state,
        requestIndividualGitHubCommits: false,
        individualGitHubCommits: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_FAILURE:
      return {
        ...state,
        requestIndividualGitHubCommits: false,
        individualGitHubCommits: {},
      };
    case userConstants.GET_INDIVIDUAL_JIRA_COUNTS_REQUEST:
      return {
        ...state,
        requestIndividualJiraCounts: true,
      };

    case userConstants.GET_INDIVIDUAL_JIRA_COUNTS_SUCCESS:
      return {
        ...state,
        requestIndividualJiraCounts: false,
        individualJiraCounts: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_JIRA_COUNTS_FAILURE:
      return {
        ...state,
        requestIndividualJiraCounts: false,
        individualJiraCounts: {},
      };
      
    // INDIVIDUAL_JIRA_CONTRIBUTION START
    case userConstants.GET_INDIVIDUAL_JIRA_CONTRIBUTION_REQUEST:
        return {
          ...state,
          requestIndividualJiraContribution: true,
      };

    case userConstants.GET_INDIVIDUAL_JIRA_CONTRIBUTION_SUCCESS:
        return {
          ...state,
          requestIndividualJiraContribution: false,
          individualJiraContribution: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_JIRA_CONTRIBUTION_FAILURE:
        return {
          ...state,
          requestIndividualJiraContribution: false,
          individualJiraContribution: {},
      };
    // INDIVIDUAL_JIRA_CONTRIBUTION END

    case userConstants.GET_TEAM_JIRA_CYCLETIME_REQUEST:
        return {
          ...state,
          requestTeamJiraCycleTime: true,
      };
    case userConstants.GET_TEAM_JIRA_CYCLETIME_SUCCESS:
        return {
          ...state,
          requestTeamJiraCycleTime: false,
          teamJiraCycleTime: action.payload,
      };
    case userConstants.GET_TEAM_JIRA_CYCLETIME_FAILURE:
        return {
          ...state,
          requestTeamJiraCycleTime: false,
          teamJiraCycleTime: {},
      };

    case userConstants.GET_TEAM_JIRA_THROUGHOUTPUT_REQUEST:
        return {
          ...state,
          requestTeamJiraThroughOutput: true,
      };
    case userConstants.GET_TEAM_JIRA_THROUGHOUTPUT_SUCCESS:
        return {
          ...state,
          requestTeamJiraThroughOutput: false,
          teamJiraThroughOutput: action.payload,
      };
    case userConstants.GET_TEAM_JIRA_THROUGHOUTPUT_FAILURE:
        return {
          ...state,
          requestTeamJiraThroughOutput: false,
          teamJiraThroughOutput: {},
      };

    case userConstants.GET_TEAM_JIRA_HISTORY_REQUEST:
        return {
          ...state,
          requestTeamJiraHistory: true,
      };
    case userConstants.GET_TEAM_JIRA_HISTORY_SUCCESS:
        return {
          ...state,
          requestTeamJiraHistory: false,
          teamJiraHistory: action.payload,
      };
    case userConstants.GET_TEAM_JIRA_HISTORY_FAILURE:
        return {
          ...state,
          requestTeamJiraHistory: false,
          teamJiraHistory: {},
      };

    case userConstants.GET_TEAM_CONFLUENCE_PAGES_REQUEST:
      return {
        ...state,
        requestTeamConfluencePages: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_SUCCESS:
      return {
        ...state,
        requestTeamConfluencePages: false,
        teamConfluencePages: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_FAILURE:
      return {
        ...state,
        requestTeamConfluencePages: false,
        teamConfluencePages: {},
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_WEEK_REQUEST:
      return {
        ...state,
        requestTeamConfluencePagesWeek: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_WEEK_SUCCESS:
      return {
        ...state,
        requestTeamConfluencePagesWeek: false,
        teamConfluencePagesWeek: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_WEEK_FAILURE:
      return {
        ...state,
        requestTeamConfluencePagesWeek: false,
        teamConfluencePagesWeek: {},
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_MONTH_REQUEST:
      return {
        ...state,
        requestTeamConfluencePagesMonth: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_MONTH_SUCCESS:
      return {
        ...state,
        requestTeamConfluencePagesMonth: false,
        teamConfluencePagesMonth: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_MONTH_FAILURE:
      return {
        ...state,
        requestTeamConfluencePagesMonth: false,
        teamConfluencePagesMonth: {},
      };
    case userConstants.GET_TEAM_CONFLUENCE_UPDATE_REQUEST:
      return {
        ...state,
        requestTeamConfluenceUpdate: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_UPDATE_SUCCESS:
      return {
        ...state,
        requestTeamConfluenceUpdate: false,
        teamConfluenceUpdate: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_UPDATE_FAILURE:
      return {
        ...state,
        requestTeamConfluenceUpdate: false,
        teamConfluenceUpdate: {},
      };
    case userConstants.GET_TEAM_GITHUB_COMMITS_REQUEST:
      return {
        ...state,
        requestTeamGithubCommits: true,
      };
    case userConstants.GET_TEAM_GITHUB_COMMITS_SUCCESS:
      return {
        ...state,
        requestTeamGithubCommits: false,
        teamGithubCommits: action.payload,
      };
    case userConstants.GET_TEAM_GITHUB_COMMITS_FAILURE:
      return {
        ...state,
        requestTeamGithubCommits: false,
        teamGithubCommits: {},
      };
    case userConstants.GET_TEAM_JIRA_TICKETS_REQUEST:
      return {
        ...state,
        requestTeamJiraTickets: true,
      };
    case userConstants.GET_TEAM_JIRA_TICKETS_SUCCESS:
      return {
        ...state,
        requestTeamJiraTickets: false,
        teamJiraTickets: action.payload,
      };
    case userConstants.GET_TEAM_JIRA_TICKETS_FAILURE:
      return {
        ...state,
        requestTeamJiraTickets: false,
        teamJiraTickets: {},
      };
    case userConstants.GET_TEAM_CONFLUENCE_MEETINGS_REQUEST:
      return {
        ...state,
        requestTeamConfluenceMeetins: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_MEETINGS_SUCCESS:
      return {
        ...state,
        requestTeamConfluenceMeetins: false,
        teamConfluenceMeeting: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_MEETINGS_FAILURE:
      return {
        ...state,
        requestTeamConfluenceMeetins: false,
      };
    case userConstants.GET_TEAM_CONFLUENCE_COMMENT_REQUEST:
      return {
        ...state,
        requestTeamConfluenceComment: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_COMMENT_SUCCESS:
      return {
        ...state,
        requestTeamConfluenceComment: false,
        teamConfluenceComment: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_COMMENT_FAILURE:
      return {
        ...state,
        requestTeamConfluenceComment: false,
        teamConfluenceComment: {},
      };
    case userConstants.GET_TEAM_CODE_METRICS_REQUEST:
      return {
        ...state,
        requestTeamCodeMetrics: true,
      };
    case userConstants.GET_TEAM_CODE_METRICS_SUCCESS:
      return {
        ...state,
        teamCodeMetrics: action.payload,
        requestTeamCodeMetrics: false,
      };
    case userConstants.GET_TEAM_CODE_METRICS_FAILURE:
      return {
        ...state,
        requestTeamCodeMetrics: false,
      };
    case userConstants.SETTEAMINFO_REQUEST:
      return {
        ...state,
        requestSetTeamInfo: true,
      };
    case userConstants.SETTEAMINFO_SUCCESS:
      return {
        ...state,
        requestSetTeamInfo: false,
        teamInfo: Object.assign(state.teamInfo, action.payload),
        setTeamInfoSuccess: true,
      };
    case userConstants.SETTEAMINFO_FAILURE:
      return {
        ...state,
        requestSetTeamInfo: false,
        setTeamInfoSuccess: false,
      };
    case userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_REQUEST:
      return {
        ...state,
        requestConfluenceSpaceByKeyWord: true,
      };
    case userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_SUCCESS:
      return {
        ...state,
        confluenceSpaceSearchResult: action.payload,
        requestConfluenceSpaceByKeyWord: false,
      };
    case userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_FAILURE:
      return {
        ...state,
        requestConfluenceSpaceByKeyWord: false,
      };
    case userConstants.GET_TEAM_MEMBER_LIST_REQUEST:
      return {
        ...state,
        requestTeamMemberList: true,
      };
    case userConstants.GET_TEAM_MEMBER_LIST_SUCCESS:
      return {
        ...state,
        requestTeamMemberList: false,
        teamMemberList: action.payload,
        getTeamMemberListSuccess: true,
      };
    case userConstants.GET_TEAM_MEMBER_LIST_FAILURE:
      return {
        ...state,
        requestTeamMemberList: false,
        getTeamMemberListSuccess: false,
      };
    case userConstants.IMPORT_PROJECT_REQUEST:
      return {
        ...state,
        importProject: true,
      };
    case userConstants.IMPORT_PROJECT_SUCCESS:
      return {
        ...state,
        importProject: false,
        importProjectSuccess: true,
      };
    case userConstants.IMPORT_PROJECT_FAILURE:
      return {
        ...state,
        importProject: false,
        importProjectSuccess: false,
      };
    case userConstants.GET_IMPORTED_PROJECT_REQUEST:
      return {
        ...state,
        requestImportedProject: true,
      };
    case userConstants.GET_IMPORTED_PROJECT_SUCCESS:
      return {
        ...state,
        importedProject: action.payload,
        requestImportedProject: false,
      };
    case userConstants.GET_IMPORTED_PROJECT_FAILURE:
      return {
        ...state,
        requestImportedProject: false,
      };
    case userConstants.DELETE_IMPORTED_PROJECT_REQUEST:
      return {
        ...state,
        deleteImportedProject: true,
      };
    case userConstants.DELETE_IMPORTED_PROJECT_SUCCESS:
      return {
        ...state,
        deleteImportedProject: false,
        deleteProjectSuccess: true,
      };
    case userConstants.DELETE_IMPORTED_PROJECT_FAILUER:
      return {
        ...state,
        deleteImportedProject: false,
        deleteProjectSuccess: false,
      };
    case userConstants.SET_CURRENT_TEAM_NAME:
      return {
        ...state,
        currentTeamName: action.payload,
      };
    case userConstants.SET_CURRENT_TEAM_KEY:
      return {
        ...state,
        currentTeamKey: action.payload,
      };
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        requestLogin: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        requestLogin: false,
        isLogin: true,
        isLogout: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        requestLogin: false,
      };
    case userConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        isLogout: true,
      };
    default:
      return state;
  }
}
