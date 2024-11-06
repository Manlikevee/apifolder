'use client'

import { useEffect, useState } from "react";

import React from 'react'

const page = () => {
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
      fetch("/api/fetchportfolio")
        .then((res) => res.json())
        .then((data) => setPortfolioData(data))
        .catch((error) => console.error("Error fetching portfolio data:", error));
    }, []);

    return (
        <div>
        <h1>Portfolio Data</h1>
        <pre>{portfolioData ? JSON.stringify(portfolioData, null, 2) : "Loading..."}</pre>
      </div>
  )
}

export default page