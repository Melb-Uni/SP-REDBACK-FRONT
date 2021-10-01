import { userConstants } from "../_constants";
import { userService } from "../_services";
import { history } from "../_helpers";
import { formatLineChartData } from "../_utils/formatLineChartData.js";
import { formatDonutChartData } from "../_utils/formatDonutChartData.js";
import { unixToDate } from "../_utils/unixToDate.js";
import { failureToast } from "../_utils/toast";
import { successToast } from "../_utils/toast";

export const userActions = {
  login,
  logout,
  getTeamConfluencePages,
  // Get Team Confluence Pages Week
  getTeamConfluencePagesWeek,
  // Get Team Confluence Pages Month
  getTeamConfluencePagesMonth,
  // Get Team Confluence Pages Change
  getTeamConfluencePagesChange,
  // Get Team Confluence Updates
  getTeamConfluenceUpdate,
  getTeamGithubCommits,
  getTeamJiraTickets,
  getTeamConfluenceMeeting,
  // Get Team Confluence Comments
  getTeamConfluenceComment,
  getTeamCodeMetrics,
  setTeamInfo,
  getConfluenceIndividualData,
  // Get Individual Confluence Contribution
  getConfluenceIndividualContribution,
  getGithubIndividualData,
  getJiraIndividualData,
  getConfluenceSpaceByKeyWord,
  importProject,
  getImportedProject,
  deleteImportedProject,
  setCurrentTeamKey,
  setCurrentTeamName,
  getTeamMemberList,
};

function request(action, payload) {
  return { type: action, payload };
}
function success(action, payload) {
  return { type: action, payload };
}
function failure(action, payload) {
  return { type: action, payload };
}

function unixToDateHelper(jsonData) {
  for (let i = 0, len = jsonData.length; i < len; i++) {
    jsonData[i].time = unixToDate(jsonData[i].time);
  }

  return jsonData;
}

function checkRespCode(response) {
  return response.code == 0;
}

function getTeamConfluencePages(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_CONFLUENCE_PAGES_REQUEST));
    userService.getTeamConfluencePages(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_SUCCESS, // Action
              formatLineChartData(response) // Payload
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_PAGES_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}
// Get Team Confluence Pages Week
function getTeamConfluencePagesWeek(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_CONFLUENCE_PAGES_WEEK_REQUEST));
    userService.getTeamConfluencePagesWeek(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_WEEK_SUCCESS, // Action
              formatLineChartData(response) // Payload
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_WEEK_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_PAGES_WEEK_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}
// Get Team Confluence Pages Month
function getTeamConfluencePagesMonth(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_CONFLUENCE_PAGES_MONTH_REQUEST));
    userService.getTeamConfluencePagesMonth(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_MONTH_SUCCESS, // Action
              formatLineChartData(response) // Payload
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_MONTH_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_PAGES_MONTH_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}
// Get Team Confluence Pages Change
function getTeamConfluencePagesChange(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_CONFLUENCE_PAGES_CHANGE_REQUEST));
    userService.getTeamConfluencePagesChange(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_CHANGE_SUCCESS, // Action
              formatLineChartData(response) // Payload
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_CHANGE_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_PAGES_CHANGE_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}
// Get Team Confluence Updates
function getTeamConfluenceUpdate(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_CONFLUENCE_UPDATE_REQUEST));
    userService.getTeamConfluenceUpdate(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_UPDATE_SUCCESS,
              response.data
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_UPDATE_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_UPDATE_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTeamGithubCommits(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_GITHUB_COMMITS_REQUEST));
    userService.getTeamGithubCommits(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_GITHUB_COMMITS_SUCCESS,
              formatLineChartData(response)
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_GITHUB_COMMITS_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_GITHUB_COMMITS_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTeamJiraTickets(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_JIRA_TICKETS_REQUEST));
    userService.getTeamJiraTickets(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_JIRA_TICKETS_SUCCESS,
              formatLineChartData(response)
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_JIRA_TICKETS_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(userConstants.GET_TEAM_JIRA_TICKETS_FAILURE, error.toString())
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTeamConfluenceMeeting(teamKey) {
  return (dispatch) => {
    userService.getTeamConfluenceMeeting(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_MEETINGS_SUCCESS,
              unixToDateHelper(response.data)
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_MEETINGS_FAILURE,
              response.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_MEETINGS_FAILURE,
            error.toString()
          )
        );
      }
    );
  };
}

function getTeamConfluenceComment(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_CONFLUENCE_COMMENT_REQUEST));
    userService.getTeamConfluenceComment(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_COMMENT_SUCCESS, 
              response.data
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_COMMENT_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_COMMENT_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function setTeamInfo(
  teamKey,
  jiraUrl,
  githubUrl,
  githubUsername,
  githubPassword
) {
  return (dispatch) => {
    dispatch(request(userConstants.SETTEAMINFO_REQUEST));
    return userService
      .setTeamInfo(teamKey, jiraUrl, githubUrl, githubUsername, githubPassword)
      .then(
        (response) => {
          if (checkRespCode(response)) {
            dispatch(
              success(userConstants.SETTEAMINFO_SUCCESS, {
                [teamKey]: {
                  jiraUrl,
                  githubUrl,
                  githubUsername,
                  githubPassword,
                },
              })
            );
            successToast(response.message);
          } else {
            dispatch(failure(userConstants.SETTEAMINFO_FAILURE));
            failureToast(response.message);
          }
        },
        (error) => {
          dispatch(
            failure(userConstants.SETTEAMINFO_FAILURE, error.toString())
          );
          failureToast(error.toString());
        }
      );
  };
}

function getTeamCodeMetrics(teamKey) {
  return (dispatch) => {
    userService.getTeamCodeMetrics(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(userConstants.GET_TEAM_CODE_METRICS_SUCCESS, response.data)
          );
        } else {
          dispatch(
            failure(userConstants.GET_TEAM_CODE_METRICS_FAILURE, response.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(userConstants.GET_TEAM_CODE_METRICS_FAILURE, error.toString())
        );
      }
    );
  };
}

function getConfluenceIndividualData(teamKey) {
  return (dispatch) => {
    userService.getConfluenceIndividualData(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_SUCCESS,
              formatDonutChartData(response)
            )
          );
        } else {
          dispatch(
            failure(userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_FAILURE)
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

// Get Individual Confluence Contribution
function getConfluenceIndividualContribution(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_INDIVIDUAL_CONFLUENCE_CONTRIBUTION_REQUEST));
    userService.getConfluenceIndividualContribution(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_INDIVIDUAL_CONFLUENCE_CONTRIBUTION_SUCCESS, // Action
              response.data // Payload <-- NEED UPDATE
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_INDIVIDUAL_CONFLUENCE_CONTRIBUTION_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_INDIVIDUAL_CONFLUENCE_CONTRIBUTION_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getGithubIndividualData(teamKey) {
  return (dispatch) => {
    userService.getGithubIndividualData(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_SUCCESS,
              formatDonutChartData(response)
            )
          );
        } else {
          dispatch(
            failure(userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_FAILURE)
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getJiraIndividualData(teamKey) {
  return (dispatch) => {
    userService.getJiraIndividualData(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_INDIVIDUAL_JIRA_COUNTS_SUCCESS,
              formatDonutChartData(response)
            )
          );
        } else {
          dispatch(failure(userConstants.GET_INDIVIDUAL_JIRA_COUNTS_FAILURE));
          failureToast(response.msg);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_INDIVIDUAL_JIRA_COUNTS_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getConfluenceSpaceByKeyWord(keyWord) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_REQUEST));
    userService.getConfluenceSpaceByKeyWord(keyWord).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_SUCCESS,
              response
            )
          );
        } else {
          dispatch(
            failure(userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_FAILURE)
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function importProject(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.IMPORT_PROJECT_REQUEST));
    userService.importProject(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(success(userConstants.IMPORT_PROJECT_SUCCESS));
          successToast(response.message);
        } else {
          dispatch(failure(userConstants.IMPORT_PROJECT_FAILURE));
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(failure(userConstants.IMPORT_PROJECT_FAILURE));
        failureToast(error.toString());
      }
    );
  };
}

function deleteImportedProject(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.DELETE_IMPORTED_PROJECT_REQUEST));
    userService.deleteImportedProject(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(success(userConstants.DELETE_IMPORTED_PROJECT_SUCCESS));
          successToast(response.msg);
        } else {
          dispatch(failure(userConstants.DELETE_IMPORTED_PROJECT_FAILUER));
          failureToast(response.msg);
        }
      },
      (error) => {
        dispatch(failure(userConstants.DELETE_IMPORTED_PROJECT_FAILUER));
        failureToast(error.toString());
      }
    );
  };
}

function getImportedProject() {
  return (dispatch) => {
    return userService.getImportedProject().then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(userConstants.GET_IMPORTED_PROJECT_SUCCESS, response.data)
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_IMPORTED_PROJECT_FAILURE,
              response.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(userConstants.GET_IMPORTED_PROJECT_FAILURE, error.toString())
        );
      }
    );
  };
}

function setCurrentTeamKey(teamKey) {
  return (dispatch) => {
    dispatch({ type: userConstants.SET_CURRENT_TEAM_KEY, payload: teamKey });
  };
}

function getTeamMemberList(teamKey) {
  return (dispatch) => {
    return userService.getTeamMemberList(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_MEMBER_LIST_SUCCESS,
              response.data.user_list
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_MEMBER_LIST_FAILURE,
              response.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(userConstants.GET_TEAM_MEMBER_LIST_FAILURE, error.toString())
        );
      }
    );
  };
}

function setCurrentTeamName(teamName) {
  return (dispatch) => {
    dispatch({
      type: userConstants.SET_CURRENT_TEAM_NAME,
      payload: teamName,
    });
  };
}

function login(username, password) {
  return (dispatch) => {
    dispatch(request(userConstants.LOGIN_REQUEST), username);
    userService.login(username, password).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(success(userConstants.LOGIN_SUCCESS, username));
          history.push("/coordinator");
        } else {
          dispatch(failure(userConstants.LOGIN_FAILURE, response.msg));
          failureToast(response.msg);
        }
      },
      (error) => {
        dispatch(failure(userConstants.LOGIN_FAILURE, error.toString()));
        failureToast(error.toString());
      }
    );
  };
}

function logout() {
  return (dispatch) => {
    dispatch({
      type: userConstants.LOGOUT_SUCCESS,
    });
  };
}
