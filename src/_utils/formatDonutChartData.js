import randomColor from "randomcolor";

export function formatDonutChartData(response) {
  let rawData = response.data;
  let labelDataMap = getlabelDataMap(rawData);
  let xaxis = [];
  let datasets = [];
  let result = {};
  for (let key in labelDataMap) {
    if (key == "student") {
      xaxis = labelDataMap[key];
    } else {
      datasets.push({
        label: key,
        data: labelDataMap[key].slice(),
        backgroundColor: randomColor({
          count: xaxis.length,
          format: 'rgb',
          seed: 1
        }).slice()
      });
    }
  }
  let formattedData = {
    labels: xaxis,
    datasets: datasets,
  };
  
  let colorForOtherElseStudents = randomColor({
    seed: 2
  });
  let studentList = formattedData.labels.slice();
  studentList.push("All");
  for (let i = 0, len=studentList.length; i < len; i++) {
    
    result[studentList[i]] = formatDonutChartDataForOneStudent(formattedData, studentList[i], colorForOtherElseStudents);
    
  }
  
  result["All"]["github"] = []
  let github_labels = result["All"]["labels"];
  let github_commits = [];
  let github_versions = [];
  let github_datasets = result["All"]["datasets"];
  for (let i = 0; i < github_datasets.length; i++) {
    if (github_datasets[i]["label"] === "commit_count") {
      github_commits = github_datasets[i]["data"];
    }
    if (github_datasets[i]["label"] === "version") {
      github_versions = github_datasets[i]["data"];
    }
  }
  for (let i = 0; i < github_labels.length; i++) {
    result["All"]["github"].push({"name": github_labels[i], "commit_count": github_commits[i],
      "version": github_versions[i]})
  }

  return result;
}

function formatDonutChartDataForOneStudent(formattedData, student, colorForOtherElseStudents) {
    if (student === "All") {
      return formattedData;
    }
   
    let index = 0;

    for (let i = 0, len = formattedData.labels.length; i < len; i++) {
      if (formattedData.labels[i] === student) {
        index = i;
        break;
      }
    }

    let confluence = formattedData.datasets[0].data[index];
    let jira = formattedData.datasets[1].data[index];

    let result = {
      labels: ["Confluence", "Jira"],
      datasets: [{
        label: formattedData.datasets[0].label,
        data: [confluence, jira],
        backgroundColor: [formattedData.datasets[0].backgroundColor[index], formattedData.datasets[1].backgroundColor[index]]
      }]
    };

    return result;
  }


function getlabelDataMap(rawData) {
  let labelDataMap = {};
  for (let i = 0, len = rawData.length; i < len; i++) {
    for (let key in rawData[i]) {
      if (!labelDataMap[key]) {
        labelDataMap[key] = [rawData[i][key]];
      } else {
        labelDataMap[key].push(rawData[i][key]);
      }
    }
  }
  return labelDataMap;
}
