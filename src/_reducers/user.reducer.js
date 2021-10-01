import { userConstants } from "../_constants";

const initState = {
  requestIndividualConfluencePages: false,
  requestIndividualGitHubCommits: false,
  requestIndividualJiraCounts: false,
  // Request Individual Confluence Contribution START - Individual Page
  requestIndividualConfluenceContribution: false,
  // Request Individual Confluence Contribution END
  requestTeamConfluencePages: false,
  // Request Team Confluence Page 7 START - Process Page
  requestTeamConfluencePagesWeek: false,
  // Request Team Confluence Page 7 END
  // Request Team Confluence Page 30 START - Process Page
  requestTeamConfluencePagesMonth: false,
  // Request Team Confluence Page 30 END
  // Request Team Confluence Page count START - Process Page
  requestTeamConfluencePagesChange: false,
  // Request Team Confluence Page count END
  requestTeamGithubCommits: false,
  requestTeamJiraTickets: false,
  // Request Team Confluence Update START - Process Page
  requestTeamConfluenceUpdate: false,
  // Request Team Confluence Update END
  // Request Team Confluence Comment START - Communication Page
  requestTeamConfluenceComment: false,
  // Request Team Confluence Comment END
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
    // Individual Confluence Contribution START - Individual
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
    // Individual Confluence Contribution END
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

    // Team Confluence Page Week START
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
    // Team Confluence Page Week END
    
    // Team Confluence Page Month START
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
    // Team Confluence Page Month END

    // Team Confluence Page Change START
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_CHANGE_REQUEST:
      return {
        ...state,
        requestTeamConfluencePagesChange: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_CHANGE_SUCCESS:
      return {
        ...state,
        requestTeamConfluencePagesWeek: false,
        teamConfluencePagesChange: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_CHANGE_FAILURE:
      return {
        ...state,
        requestTeamConfluencePagesCHANGE: false,
        teamConfluencePagesChange: {},
      };
    // Team Confluence Page Change END

    // Team Confluence Update START - Process
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
    // Team Confluence Update END
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
    // Team Confluence Comment START - Communication
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
    // Team Confluence Comment END
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
