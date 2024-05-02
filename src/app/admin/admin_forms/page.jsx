"use client";
import React, { useState } from "react";
import NavbarComponent from "../navbar";
import {
  Card,
  Step,
  Stepper,
  Typography,
  Button,
  Radio,
  Input,
} from "@material-tailwind/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Academic_Qualification from "./Components/A.Academic_Qualification";
import Recruitment_Selection from "./Components/B.Recruitment_Selection";
import Ranking_Promotion from "./Components/C.Ranking_Promotion";
import Faculty_Loading from "./Components/D.Faculty_Loading";
import Professional_Performance_and_Scholarly_Work from "./Components/E.Professional_Performance_and_Scholarly_Work";
import Performance_Evaluation from "./Components/F.Performance_Evaluation";
import Faculty_Development_Program from "./Components/G.Faculty_Development_Program";
import Faculty_Relationships from "./Components/H.Faculty_Relationships";
import Salaries_And_Fringe_Benefits from "./Components/I.Salaries_And_Fringe_Benefits";

export default function AdminForms() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [academicweightedmean, setAcademicWeightedMean] = useState(0);
  const [recruitmentweightedmean, setRecruitmentWeightedMean] = useState(0);
  const [rankingweightedmean, setRankingWeightedMean] = useState(0);
  const [facultyloadingweightedmean, setFacultyLoadingWeightedMean] =
    useState(0);
  const [
    professionalandscholarlyweightedmean,
    setProfessionalAndScholarlyWeightedMean,
  ] = useState(0);

  const [
    performanceevaluationweightedmean,
    setPerformanceEvaluationWeightedMean,
  ] = useState(0);

  const [facultydevelopmentweightedmean, setFacultyDevelopmentWeightedMean] =
    useState(0);

  const [
    facultyrelationshipsweightedmean,
    setFacultyRelationshipsWeightedMean,
  ] = useState(0);

  const [
    salariesandfringebenefitsweightedmean,
    setSalariesAndFringeBenefitsWeightedMean,
  ] = useState(0);

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep((cur) => cur + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const TABLE_HEAD = ["SUB-AREAS", "RATING"];
  const TABLE_ROWS = [
    {
      SUB_AREAS: "Academic Qualification and Teaching Experiences",
      RATING: academicweightedmean,
    },
    {
      SUB_AREAS: "Recruitment and Selection",
      RATING: recruitmentweightedmean,
    },
    {
      SUB_AREAS: "Ranking and Promotion",
      RATING: rankingweightedmean,
    },
    {
      SUB_AREAS: "Faculty Loading",
      RATING: facultyloadingweightedmean,
    },
    {
      SUB_AREAS: "Professional Performance and Scholarly Work",
      RATING: professionalandscholarlyweightedmean,
    },
    {
      SUB_AREAS: "Performance Evaluation",
      RATING: performanceevaluationweightedmean,
    },
    {
      SUB_AREAS: "Faculty Development Program",
      RATING: facultydevelopmentweightedmean,
    },
    {
      SUB_AREAS: "Faculty Relationships",
      RATING: facultyrelationshipsweightedmean,
    },
    {
      SUB_AREAS: "Salaries and Benefits",
      RATING: salariesandfringebenefitsweightedmean,
    },
  ];

  const handleAcademicMean = (value) => {
    setAcademicWeightedMean(value);
  };

  const handleRecruitmentMean = (value) => {
    setRecruitmentWeightedMean(value);
  };

  const handleRankingMean = (value) => {
    setRankingWeightedMean(value);
  };

  const handleFacultyLoadingMean = (value) => {
    setFacultyLoadingWeightedMean(value);
  };

  const handleProfessionalMean = (value) => {
    setProfessionalAndScholarlyWeightedMean(value);
  };

  const handlePerformanceMean = (value) => {
    setPerformanceEvaluationWeightedMean(value);
  };

  const handleFacultyDevelopmentMean = (value) => {
    setFacultyDevelopmentWeightedMean(value);
  };

  const handleFacultyRelationshipsMean = (value) => {
    setFacultyRelationshipsWeightedMean(value);
  };

  const handleSalariesMean = (value) => {
    setSalariesAndFringeBenefitsWeightedMean(value);
  };

  const totalSum = TABLE_ROWS.reduce((acc, row) => acc + row.RATING, 0);

  const areaCount = TABLE_ROWS.length;
  const areaMean = totalSum / areaCount;

  const saveAsPDF = () => {
    const card = document.getElementById("summary-card");

    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("summary.pdf");
    });
  };

  return (
    <>
      <NavbarComponent />
      <div className="flex min-h-full flex-1 flex-col justify-center items-center py-10 sm:px-6 lg:px-8">
        <Typography variant="h2" className="mb-4 text-center">
          Admin Forms
        </Typography>
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-black text-center">
          Content
        </h2>
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          <Step onClick={() => setActiveStep(2)}>3</Step>
          <Step onClick={() => setActiveStep(3)}>4</Step>
          <Step onClick={() => setActiveStep(4)}>5</Step>
          <Step onClick={() => setActiveStep(5)}>6</Step>
          <Step onClick={() => setActiveStep(6)}>7</Step>
          <Step onClick={() => setActiveStep(7)}>8</Step>
          <Step onClick={() => setActiveStep(8)}>9</Step>
          <Step onClick={() => setActiveStep(9)}>10</Step>
        </Stepper>
        {activeStep === 0 && (
          <Academic_Qualification AcademicMean={handleAcademicMean} />
        )}
        {activeStep === 1 && (
          <Recruitment_Selection RecruitmentMean={handleRecruitmentMean} />
        )}
        {activeStep === 2 && (
          <Ranking_Promotion RankingMean={handleRankingMean} />
        )}
        {activeStep === 3 && (
          <Faculty_Loading FacultyLoadingMean={handleFacultyLoadingMean} />
        )}
        {activeStep === 4 && (
          <Professional_Performance_and_Scholarly_Work
            ProfessionalMean={handleProfessionalMean}
          />
        )}
        {activeStep === 5 && (
          <Performance_Evaluation PerformanceMean={handlePerformanceMean} />
        )}
        {activeStep === 6 && (
          <Faculty_Development_Program
            FacultyDevelopmentMean={handleFacultyDevelopmentMean}
          />
        )}
        {activeStep === 7 && (
          <Faculty_Relationships
            FacultyRelationshipsMean={handleFacultyRelationshipsMean}
          />
        )}
        {activeStep === 8 && (
          <Salaries_And_Fringe_Benefits
            SalariesBenefitsMean={handleSalariesMean}
          />
        )}
        {activeStep === 9 && (
          <>
            <div className="mt-10"></div>
            <div>
              <Card className="w-full h-full px-10 py-10" id="summary-card">
                <Typography className="mb-5 text-center text-bold">
                  Summary of Ratings
                </Typography>
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(({ SUB_AREAS, RATING }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={SUB_AREAS}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {SUB_AREAS}
                            </Typography>
                          </td>
                          <td className={`${classes} bg-blue-gray-50/50`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {RATING}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          TOTAL
                        </Typography>
                      </td>
                      <td className="p-4 bg-blue-gray-50/50">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {totalSum}
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          AREA MEAN
                        </Typography>
                      </td>
                      <td className="p-4 bg-blue-gray-50/50">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {areaMean.toFixed(2)}
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
            <Button className="mt-5" onClick={saveAsPDF}>
              Download PDF
            </Button>
          </>
        )}

        <div className="mt-16 flex justify-between space-x-20">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
