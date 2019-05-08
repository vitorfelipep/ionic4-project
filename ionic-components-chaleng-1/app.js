const courseInput = document.querySelector("#input-course");
const ratingInput = document.querySelector("#input-rating");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");

const myRatingCoursesList = document.querySelector("#rating-courses-list");

confirmBtn.addEventListener("click", () => {
  const courseName = courseInput.value;
  const ratingCourse = ratingInput.value;

  if(isValidFields(courseName, ratingCourse)) {
    const newItem = document.createElement("ion-item");
    newItem.innerHTML =  `<strong>${ courseName } </strong>` + ' &nbsp; - ' +  `${ratingCourse}/5`;
  
    myRatingCoursesList.appendChild(newItem);
  }

});

function isValidFields(courseName, ratingCourse) {
  const alertCtrl = document.querySelector("ion-alert-controller");
  if (
    courseName.trim().length <= 0
  ) {
    alertCtrl.create(returnAlertMessage('Please enter valid Name Course'))
    .then(alertElement => {
        alertElement.present();
    });
    return;
  }

  if (
    isNaN(ratingCourse) || ratingCourse <= 0 
  ) {
    alertCtrl.create(returnAlertMessage('Please enter valid Rating! Should be a number between 1 and 5'))
    .then(alertElement => {
        alertElement.present();
    });
    return;
  }
  return true;
}


function returnAlertMessage(messageParameter) {
  return {
    message: messageParameter,
    header: "Invalid inputs",
    buttons: ['Okay']
  };
}