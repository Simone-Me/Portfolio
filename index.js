var btnArea = document.getElementsByClassName("btn-area");
var detailsAppBottom = document.getElementsByClassName("detailsAppBottom");

function closeTab() {
  btnArea[0].style.display = "none";
  detailsAppBottom[0].style.display = "none";
  for (let index = 0; index < projectName.length; index++) {
    projectOut = document.getElementById(projectName[index] + "Details");
    projectOut.style.display = "none";
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  }
}

function rotateTab(where) {
  for (let index = 0; index < projectName.length; index++) {
    project = document.getElementById(projectName[index] + "Details");
    if (project.style.display == "block") {
      if (where == "back") {
        if (index == 0) {
          console.log(index);
          projectShow = document.getElementById(
            projectName[projectName.length - 1] + "Details"
          );
        } else {
          projectShow = document.getElementById(
            projectName[index - 1] + "Details"
          );
        }
        project.style.display = "none";
        projectShow.style.display = "block";
        break;
      }
      if (index == projectName.length - 1) {
        projectShow = document.getElementById(projectName[0] + "Details");
      } else {
        projectShow = document.getElementById(
          projectName[index + 1] + "Details"
        );
      }
      project.style.display = "none";
      projectShow.style.display = "block";
      break;
    }
  }
}

function checkOpen(site) {
  if (site.style.display == "block") {
    site.style.display = "none";
    btnArea[0].style.display = "none";
    detailsAppBottom[0].style.display = "none";
  } else {
    site.style.display = "block";
    btnArea[0].style.display = "flex";
    detailsAppBottom[0].style.display = "block";
  }
}

/* var amenic = document.getElementById("amenicDetails"); */
const projectName = [
  "amenic",
  "aAmenic",
  "pantani",
  "bonbon",
  "expo",
  "ecuador",
];

//this function open the board of details below each project
function openDetail(project) {
  const projectNotSelected = projectName.filter(function (letter) {
    return letter !== project;
  });

  //check any not selected project to hide
  for (let index = 0; index < projectNotSelected.length; index++) {
    var projectOut = document.getElementById(
      projectNotSelected[index] + "Details"
    );
    if (projectOut.style.display == "block") {
      console.log("hi");
      projectOut.style.display = "none";
    }
  }

  var project = project + "Details";
  var projectFull = document.getElementById(project);
  checkOpen(projectFull);

  //jump to project position
  /*   document.getElementById(project).scrollIntoView({ behavior: "smooth" });
   */ document
    .getElementById("pointToGO")
    .scrollIntoView({ behavior: "smooth" });
}
