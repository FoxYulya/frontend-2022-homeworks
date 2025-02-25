const baseRepoUrl = "https://github.com/kottans/frontend-2022-homeworks/";

const prLabels = [
  "task-PopUp",
  "task-DOM",
  "task-TJSW",
  "task-Frogger",
  "task-TJSW-OOP",
  "task-MPG",
  "task-Friends",
];

const prStates = [
  "open",
  "merged",
];

const parsingRegex = {
  pr: /^(?<prNr>\d+)\t.+\t(?<author>.+):.*$/mg,
  issue: /^(?<issueNr>\d+).+\t(?<author>.+):.*\t(?<labels>.*)\t.*$/mg,
};

const url = {
  prListFilteredByAuthorPrefix: baseRepoUrl + "pulls?q=is%3Apr+author%3A",
  prPrefix: baseRepoUrl + "pull/",
  issuePrefix: baseRepoUrl + "issues/",
}

const statsFileName = "./pr-stats.md";

module.exports = {
  prLabels,
  prStates,
  parsingRegex,
  url,
  statsFileName,
};
