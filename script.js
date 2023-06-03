const host = "https://api.minireg.thanayut.in.th/courses";

//fetch data from API and return data back
const getData = async () => {
  try {
    const returnData = await fetch(host);
    const courses = await returnData.json();

    // console.log(courses);
    return courses;
  } catch (err) {
    console.log(err);
  }
};

//add data to DOM
const sectionsOfCourses = (courses) => {
  courses.forEach((course) => {
    const newCourseDiv = document.createElement("div");
    newCourseDiv.classList.add("course");

    newCourseDiv.innerHTML = `
    <h3>${course.courseNo} ${course.abbrName}</h3>
    <h4>จำนวนหน่วยกิต</h4>
    <p>${course.credit} หน่วยกิต</p>
    <h4>จำนวนที่นั่ง</h4>
    <p>${course.totalSeats}</p>
    `;

    const mainPage = document.getElementById("mainsite");
    mainPage.appendChild(newCourseDiv);
  });
};

//call the above 2 functions
const init = async () => {
  const data = await getData();
  sectionsOfCourses(data.courses);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});
