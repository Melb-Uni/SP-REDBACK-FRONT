import { unixToDate } from "../_utils/unixToDate.js";

export function formatLineChartData(response) {
  let rawData = response.data;
  let labelDataMap = getlabelDataMap(rawData);
  let xaxis = [];
  let datasets = [];
  for (let key in labelDataMap) {
    if (key == "time") {
      xaxis = labelDataMap[key].map(unixToDate);
    } else {
      datasets.push({
        label: key + " (from " + xaxis[0] + " to " + xaxis[xaxis.length - 1] + ")",
        data: labelDataMap[key],
        fill: false,
        borderColor: getRandomColor(),
        tension: 0,
        pointRadius: 0,
      });
    }
  }

  let result = {labels: xaxis, datasets: datasets}
  result["github"] = [];
  let github_labels = result["labels"];
  let github_pages = [];
  let github_versions = [];
  for (let i = 0; i < result["datasets"].length; i++) {
    if (result["datasets"][i]["label"].startsWith("commit_count")) {
      github_pages = result["datasets"][i]["data"];
    }
    if (result["datasets"][i]["label"].startsWith("version")) {
      github_versions = result["datasets"][i]["data"];
    }
  }
  for (let i = 0; i < github_labels.length; i++) {
    result["github"].push({"name": github_labels[i], "commit_count": github_pages[i], "version": github_versions[i]})
  }

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

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
