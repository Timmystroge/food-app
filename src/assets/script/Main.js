const Main = () => {
  let notifyForm = document.querySelector(".notify-form");
  const getDets = () => {
    notifyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let userEmail = notifyForm.email.value;
      let details = [{ email: userEmail, form: "Notify Form" }];
      localStorage.setItem(userEmail, JSON.stringify(details));
      console.log(userEmail);
      alert('Success! We will notify you with this Email :)')
      notifyForm.reset();
    });
  };
  getDets();
 
};

export default Main;
