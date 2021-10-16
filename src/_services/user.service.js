
export const userService = {
  login,
  getTeamConfluencePages,
  getTeamConfluencePagesWeek,
  getTeamConfluencePagesMonth,
  getTeamConfluenceUpdate,
  getTeamGithubCommits,
  getTeamJiraTickets,
  getTeamConfluenceMeeting,
  getTeamConfluenceComment,
  setTeamInfo,
  getTeamCodeMetrics,
  getIndividualContribution,
  getConfluenceIndividualData,
  getConfluenceIndividualContribution,
  getGithubIndividualData,
  getJiraIndividualData,
  // Get Individual Jira Contribution
  getJiraIndividualContribution,
  getImportedProject,
  importProject,
  deleteImportedProject,
  getConfluenceSpaceByKeyWord,
  getTeamMemberList,
};

const baseUrl = "/api/v1";

function getTeamConfluencePages(teamKey) {
  let url = baseUrl + "/confluence/spaces/" + teamKey + "/page_count_all";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamConfluencePagesWeek(teamKey) {
  let url = baseUrl + "/confluence/spaces/" + teamKey + "/page_count_7";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamConfluencePagesMonth(teamKey) {
  let url = baseUrl + "/confluence/spaces/" + teamKey + "/page_count_30";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamConfluenceUpdate(teamKey) {
  let url = baseUrl + "/confluence/spaces/" + teamKey + "/pages/updated_files";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamGithubCommits(teamKey) {
  let url = baseUrl + "/git/" + teamKey + "/commit_count";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamJiraTickets(teamKey) {
  let url = baseUrl + "/jira/" + teamKey + "/ticket_count";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamConfluenceMeeting(teamKey) {
  let url = baseUrl + "/confluence/" + teamKey + "/meeting_minutes";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamConfluenceComment(teamKey) {
  let url = baseUrl + "/confluence/spaces/" + teamKey + "/pages/comments";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}


function setTeamInfo(
  teamKey,
  jiraUrl,
  githubUrl,
  githubUsername,
  githubPassword
) {
  let payload = {
    space_key: teamKey,
    jira_url: jiraUrl,
    git_url: githubUrl,
    git_username: githubUsername,
    git_password: githubPassword,
  };

  let url = baseUrl + "/git/config";

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(payload),
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamCodeMetrics(teamKey) {
  let url = baseUrl + "/git/metrics/" + teamKey;

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getGithubIndividualData(teamKey) {
  let url = baseUrl + "/git/individual_commits/" + teamKey;

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getJiraIndividualData(teamKey) {
  let url = baseUrl + "/jira/" + teamKey + "/contributions";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

// Get Individual Jira Contribution START
function getJiraIndividualContribution(teamKey) {
  let url = baseUrl + "/jira/" + teamKey + "/contributions";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}
// Get Individual Jira Contribution END

function getIndividualContribution(teamKey) {
  let url = baseUrl + "/coordinator/"+teamKey+"/individual_contributions";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getConfluenceIndividualData(teamKey) {
  let url = baseUrl + "/confluence/spaces/" + teamKey + "/pages/contributions";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getConfluenceIndividualContribution(teamKey) {
  let url = baseUrl + "/confluence/spaces/" + teamKey + "/pages/contributions_new";
  
  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}


function getConfluenceSpaceByKeyWord(keyWord) {
  let url = baseUrl + "/confluence/spaces/" + keyWord;

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function importProject(teamKey) {
  let payload = {
    space_key: teamKey,
  };

  let url = baseUrl + "/project/import";

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(payload),
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getImportedProject() {
  let url = baseUrl + "/confluence/imported_projects";

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function deleteImportedProject(teamKey) {
  let payload = {
    space_key: teamKey,
  };

  let url = baseUrl + "/project/delete";

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(payload),
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function getTeamMemberList(teamKey) {
  let url = baseUrl + "/team/" + teamKey;

  const requestOptions = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

function login(username, password) {
  let url = baseUrl + "/sso/login";

  let data = {
    username: username,
    password: password,
  };

  const requestOptions = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}
