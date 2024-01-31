"use client";
import React, { useState } from "react";
import Paywall from "./paywall";
import LoadingState from "./loading";
import Toast from "./toast";
import ResultDisplay from "./resultdisplay";

interface ValidationResult {
  isValid: boolean;
  message: string;
}

const validateInputData = (
  jobDescription: string,
  resume: string,
  statementOfQualifications: string
): ValidationResult => {
  if (!jobDescription.trim())
    return { isValid: false, message: "Job description is required." };
  if (!resume.trim()) return { isValid: false, message: "Resume is required." };
  if (!statementOfQualifications.trim())
    return {
      isValid: false,
      message: "Statement of qualifications is required.",
    };

  // Add any other specific validations here

  return { isValid: true, message: "" };
};

const MainScreen = () => {
  const [jobDescription, setJobDescription] = useState<string>("");
  const [resume, setResume] = useState<string>("");
  const [statementOfQualifications, setStatementOfQualifications] =
    useState<string>("");
  const [showPaywall, setShowPaywall] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const createPrompt = () => {
    return `Given the following job description, resume, and statement of qualifications description, generate a professional Statement of Qualifications.

    Job Description:
    ${jobDescription}

    Resume:
    ${resume}

    Statement of Qualifications Description:
    ${statementOfQualifications}

    Please create a Statement of Qualifications based on the above information.`;
  };

  const handleRequest = async () => {
    setIsLoading(true);
    const stuff = createPrompt();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stuff }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Extract the result from the response
      const result = await response.json();
      console.log(result, "RESULT");
      setGeneratedStatement(result.data.message.content);
      setIsLoading(false);
      setToast({ message: "Request successful!", type: "success" });
    } catch (error) {
      setIsLoading(false);
      setToast({ message: "An error occurred.", type: "error" });
    }
  };

  const handleSubmit = () => {
    const sanitizedJobDescription = sanitizeInput(jobDescription);
    const sanitizedResume = sanitizeInput(resume);
    const sanitizedStatementOfQualifications = sanitizeInput(
      statementOfQualifications
    );

    const validationResult = validateInputData(
      sanitizedJobDescription,
      sanitizedResume,
      sanitizedStatementOfQualifications
    );
    if (!validationResult.isValid) {
      alert(validationResult.message); // Replace with a more sophisticated error display
      return;
    }

    try {
      // Proceed with API call or data processing
    } catch (error) {
      const errorMessage = handleError(error);
      alert(errorMessage); // Replace with a more sophisticated error display
    }
  };
  const [generatedStatement, setGeneratedStatement] = useState<string>("");

  const handlePurchase = (credits: number, amount: number) => {
    console.log(`Purchased ${credits} credits for $${amount}`);
    // Payment processing logic goes here
    setShowPaywall(false);
    // Proceed with generating the statement of qualifications
  };

  const handleError = (error: any): string => {
    console.error("An error occurred:", error);
    return "An unexpected error occurred. Please try again later.";
  };

  const sanitizeInput = (input: string): string => {
    // Simple example: Remove script tags and trim whitespace
    return input.replace(/<script.*?>.*?<\/script>/gi, "").trim();
  };

  return (
    <div className="container mx-auto p-4">
      {isLoading && <LoadingState />}
      {toast && <Toast message={toast.message} type={toast.type} />}

      <h2 className="text-lg font-semibold mb-4">
        Qualifications Statement Generator
      </h2>
      <p className="mb-4">
        Welcome to the Qualifications Statement Generator. Please paste the job
        description, your resume, and the statement of qualifications for the
        job in the respective fields below. Then click "Generate Statement" to
        proceed.
      </p>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="jobDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Job Description
          </label>
          <textarea
            id="jobDescription"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Paste the job description here"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Your Resume
          </label>
          <textarea
            id="resume"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Paste your resume here"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="statementOfQualifications"
            className="block text-sm font-medium text-gray-700"
          >
            Statement of Qualifications
          </label>
          <textarea
            id="statementOfQualifications"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Paste the statement of qualifications for the job here"
            value={statementOfQualifications}
            onChange={(e) => setStatementOfQualifications(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRequest}
        >
          Generate Statement
        </button>
      </div>
      {showPaywall && <Paywall onPurchase={handlePurchase} />}
      {generatedStatement && (
        <ResultDisplay generatedText={generatedStatement} />
      )}
    </div>
  );
};

export default MainScreen;
