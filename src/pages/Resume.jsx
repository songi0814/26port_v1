// src/pages/Resume.jsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import ContactCircle from "../components/ContactCircle";
import ResumeBackground from "../components/ResumeBackground";
import ResumeCard from "../components/ResumeCard";
// import TestBackground from "../components/TestBackground";
import "../css/reset.css";
import "../css/font.css";
import "../css/resume.css";
import "../css/resumeCard.css"
import "../css/resumeBackground.css";

function Resume() {
  useEffect(() => {
    // 페이지 진입 시 항상 상단으로 스크롤 초기화
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="resume-page">
      <Header />

      <ResumeBackground />

      <ResumeCard />

      <ContactCircle />
    </div>
  );
}

export default Resume;
