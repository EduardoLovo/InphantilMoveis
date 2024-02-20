import React from "react";
import Logo from "../../img/logovetor.png";
import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="contentHome">
      {isLoading ? <Loading /> : <img src={Logo} alt="logo inphantil" />}
    </div>
  );
};
