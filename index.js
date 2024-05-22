function myfunction(site) {
  if (site.style.display == "block") {
    site.style.display = "none";
  } else {
    site.style.display = "block";
  }
}

var amenic = document.getElementById("amenicDetails");
const projectName = [
  "amenic",
  "aAmenic",
  "pantani",
  "bonbon",
  "ecuador",
  "expo",
];

//this function open the board of details below each project
function openDetail(project) {
  const projectNotSelected = projectName.filter(function (letter) {
    return letter !== project;
  });

  //check any not selected project to hide
  for (let index = 0; index < projectNotSelected.length; index++) {
    const element = projectNotSelected[index];
    var projectOut = element + "Details";
    var projectOut = document.getElementById(projectOut);
    if (projectOut.style.display == "block") {
      console.log("hi");
      projectOut.style.display = "none";
    }
  }

  var project = project + "Details";
  console.log(project);
  var projectFull = document.getElementById(project);
  myfunction(projectFull);

  //jump to project position
  document.getElementById(project).scrollIntoView({ behavior: "smooth" });
}
