import axios from "axios";

interface StatementData {
  jobDescription: string;
  resume: string;
  statementOfQualifications: string;
}

const generateStatement = async (data: StatementData): Promise<string> => {
  try {
    const response = await axios.post("/api/generate-statement", data);
    return response.data.generatedStatement;
  } catch (error) {
    console.error("Error generating statement:", error);
    throw error;
  }
};

export default {
  generateStatement,
};
