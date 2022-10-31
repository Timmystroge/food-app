// notify form @ landing page
const Main = () => {
  let notifyForm = document.querySelector(".notify-form");
  const getDets = () => {
    notifyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let userEmail = notifyForm.email.value;
      let userEmailCaps = userEmail.toUpperCase();
      let details = [{ email: userEmail, form: "Notify Form" }];
      localStorage.setItem(userEmail, JSON.stringify(details));
      console.log(userEmail);
      alert("Success! We will notify you with this Email :) " + userEmailCaps );
      notifyForm.reset();
    });
  };
  getDets();
};

//toggle show and hide
export const ToggleShowHide = () => {
  let password = document.querySelector("#password");
  let togglecontext = document.querySelector(".toggleText2");
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    togglecontext.textContent = "hide";
  } else {
    password.setAttribute("type", "password");
    togglecontext.textContent = "show";
  }
};

//validate email
export const ValidateEmail = (formField) => {
  let registerForm = formField;
  let feedback = document.querySelector(".feedback");
  registerForm.email.addEventListener("keyup", (e) => {
    e.preventDefault();
    let formEmail = registerForm.email.value;
    if (formEmail.includes("@")) {
      // console.log('valid');
      feedback.style.color = "green";
      feedback.textContent = "Valid";
    } else {
      // console.log('not valid');
      feedback.style.color = "red";
      feedback.textContent = "@ missing";
    }
  });
};

export const DashboardMenuToggle = () => {
  // dashboard menu Toggle (show and hide)
  const menu = document.querySelector(".navbar__burger");
  let navMenu = document.querySelector(".show__nav-menubar");
  let menuBar = document.querySelector(".menu__bar");
  menu.addEventListener("click", () => {
    navMenu.style.display = "block";
    menuBar.style.left = "0";
  });
  navMenu.addEventListener("click", (e) => {
    if (
      e.target.className === "show__nav-menubar" ||
      e.target.className === "menubar__toggle"
    ) {
      navMenu.style.display = "none";
      menuBar.style.left = "-100%";
    } else {
      navMenu.style.display = "block";
      menuBar.style.left = "0";
    }
  });
};

// copyrightYear
export const CopyrightYear = () => {
  const copy = document.querySelector(".year");
  let now = new Date();
  let year = now.getFullYear();
  copy.textContent = year;
};

export default Main;
