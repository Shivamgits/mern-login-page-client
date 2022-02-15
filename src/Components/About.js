import React, { useEffect } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="jumbotron">
          <hr className="my-4" />
          <form >
            <p>User ID : 123456789</p>
            <p>Name : Shivam Singh</p>
            <p>email : ss@gmail.com</p>
            <p>phone : 1234567889</p>
            <p>Profession : Web developer</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
