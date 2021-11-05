import React from "react";
import LogotypeCompany from "./LogotypeCompany/LogotypeCompany";
import PicturesOfHouse from "./PicturesOfHouse/PicturesOfHouse";
import LoginUser from "./LoginUser/LoginUser";
import "./mainPage.css";

const MainPage = ({ goToVirtualOffice }) => {
  const [picturesActive, setImagenes] = React.useState(true);
  const desplegarForm = () => setImagenes(!picturesActive);

  return (
    <div className="main-content">
      <LogotypeCompany eventIngresar={desplegarForm} />
      {picturesActive ? (
        <PicturesOfHouse />
      ) : (
        <LoginUser setupVirtualOffice={goToVirtualOffice} />
      )}
    </div>
  );
};

export default MainPage;
