var btnArea = document.getElementsByClassName("btn-area");
var detailsAppBottom = document.getElementsByClassName("detailsAppBottom");
var btnAreaV = document.getElementsByClassName("btn-area-veille");
var veilleArea = document.getElementsByClassName("detailsVeilleBottom");

/* var amenic = document.getElementById("amenicDetails"); */
const projectName = [
  "amenic",
  "aAmenic",
  "pantani",
  "bonbon",
  "expo",
  "ecuador",
];

const veilleName = ["euro", "api"];

//this funciton manage the closing buttons
function closeTab() {
  btnArea[0].style.display = "none";
  detailsAppBottom[0].style.display = "none";
  for (let index = 0; index < projectName.length; index++) {
    projectOut = document.getElementById(projectName[index] + "Details");
    projectOut.style.display = "none";
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  }
}
function closeTabV() {
  btnAreaV[0].style.display = "none";
  veilleArea[0].style.display = "none";
  for (let index = 0; index < veilleName.length; index++) {
    veilleOut = document.getElementById(veilleName[index] + "Details");
    veilleOut.style.display = "none";
    for (let index = 0; index < veilleOut.children.length; index++) {
      console.log(veilleOut.children[index]);
      veilleOut.children[index].style.display = "none";
    }
    document
      .getElementById("veilleTechno")
      .scrollIntoView({ behavior: "smooth" });
  }
}

function rotateTab(where) {
  for (let index = 0; index < projectName.length; index++) {
    project = document.getElementById(projectName[index] + "Details");
    if (project.style.display == "block") {
      if (where == "back") {
        if (index == 0) {
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
        document
          .getElementById("pointToGO")
          .scrollIntoView({ behavior: "smooth" });
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
      document
        .getElementById("pointToGO")
        .scrollIntoView({ behavior: "smooth" });
      break;
    }
  }
}
function rotateTabV(where) {
  for (let index = 0; index < veilleName.length; index++) {
    veilleOut = document.getElementById(veilleName[index] + "Details");
    if (veilleOut.style.display == "block") {
      veilleOut = document.getElementById(veilleName[index] + "Details");
      for (let i = 0; i < veilleOut.children.length; i++) {
        if (veilleOut.children[i].style.display == "block") {
          if (where == "back") {
            if (i == 0) {
              veilleShow = veilleOut.children[veilleOut.children.length - 1];
            } else {
              veilleShow = veilleOut.children[i - 1];
            }
            veilleOut.children[i].style.display = "none";
            veilleShow.style.display = "block";
            document
              .getElementById("pointToGO2")
              .scrollIntoView({ behavior: "smooth" });
            break;
          }
          if (i == veilleOut.children.length - 1) {
            veilleShow = veilleOut.children[0];
          } else {
            veilleShow = veilleOut.children[i + 1];
          }
          veilleOut.children[i].style.display = "none";
          veilleShow.style.display = "block";
          document
            .getElementById("pointToGO2")
            .scrollIntoView({ behavior: "smooth" });
          break;
        }
      }
    }
  }
}

//this function open or close the tab sent in the parameters
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
function checkOpenVeille(tab) {
  if (tab.style.display == "block") {
    tab.style.display = "none";
    btnAreaV[0].style.display = "none";
    veilleArea[0].style.display = "none";
  } else {
    tab.style.display = "block";
    btnAreaV[0].style.display = "flex";
    veilleArea[0].style.display = "flex";
  }
}

//this function open the board of details below each project
function openDetail(tab) {
  if (projectName.includes(tab)) {
    const projectNotSelected = projectName.filter(function (letter) {
      return letter !== tab;
    });

    //check any not selected project to hide
    for (let index = 0; index < projectNotSelected.length; index++) {
      var projectOut = document.getElementById(
        projectNotSelected[index] + "Details"
      );
      if (projectOut.style.display == "block") {
        projectOut.style.display = "none";
      }
    }

    var project = tab + "Details";
    var projectFull = document.getElementById(project);
    checkOpen(projectFull);

    //jump to project position
    /*   document.getElementById(project).scrollIntoView({ behavior: "smooth" });
     */ document
      .getElementById("pointToGO")
      .scrollIntoView({ behavior: "smooth" });
  } else if (veilleName.includes(tab)) {
    const veilleNotSelected = veilleName.filter(function (letter) {
      return letter !== tab;
    });

    //check any not selected project to hide
    for (let index = 0; index < veilleNotSelected.length; index++) {
      var veilleOut = document.getElementById(
        veilleNotSelected[index] + "Details"
      );
      if (veilleOut.style.display == "block") {
        veilleOut.style.display = "none";
      }
    }
    var veille = tab + "Details";
    var veilletFull = document.getElementById(veille);
    checkOpenVeille(veilletFull.children[0]);
    checkOpenVeille(veilletFull);
    //jump to project position
    /*   document.getElementById(project).scrollIntoView({ behavior: "smooth" });
     */ document
      .getElementById("pointToGO2")
      .scrollIntoView({ behavior: "smooth" });
  }
}
let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector(".page-content");
const slider2 = document.querySelector(".page-content2");

var sliders = [slider, slider2];
for (let index = 0; index < sliders.length; index++) {
  const slider = sliders[index];

  const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const stopDragging = (e) => {
    mouseDown = false;
  };

  const move = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  };

  // Add the event listeners
  slider.addEventListener("mousemove", move, false);
  slider.addEventListener("mousedown", startDragging, false);
  slider.addEventListener("mouseup", stopDragging, false);
  slider.addEventListener("mouseleave", stopDragging, false);
}
