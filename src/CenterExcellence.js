import React, { useState, useEffect } from "react";
import Services from "./components/Services/Index";
import BreadCrumb from "./components/BreadCrumb/Index";
import Container from "./components/Container/Index";
import { BASE_URL } from "./Utils/useApi";
import axios from "axios";
import data from "./JsonData/COElisting.json";

const CenterExcellence = () => {
  const [pageData, setPageData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/coe_listings.php`);
        setPageData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Container>
        <BreadCrumb
          pageName={"Centres Of Excellence"}
          _parentClass={"col-12 float-start"}
        />
      </Container>
      <Services
        _internalExellence={"p-100"}
        showButton={false}
        Data={pageData}
      />
    </>
  );
};

export default CenterExcellence;
