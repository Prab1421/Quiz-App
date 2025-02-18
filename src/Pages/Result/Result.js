import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Categories from "../../Data/Categories"; // Import Categories to map value to name
import "./Result.css";

const Result = ({ name, score, category, difficulty }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get values from navigation state or fallback to localStorage
  const storedName = location.state?.name || localStorage.getItem("name");
  const storedCategoryValue = location.state?.category || localStorage.getItem("category");
  const storedDifficulty = location.state?.difficulty || localStorage.getItem("difficulty");

  // Convert category value to category name if needed
  const displayedCategory =
    Categories.find(cat => cat.value === Number(storedCategoryValue))?.category || storedCategoryValue;

  useEffect(() => {
    if (!storedName) {
      navigate("/");
    }
  }, [storedName, navigate]);

  return (
    <div className="result">
      <Card className="result-card" variant="outlined">
        <CardContent>
          <Typography variant="h5" className="result-title">
            Quiz Result
          </Typography>
          <Typography variant="h6">Name: {storedName}</Typography>
          <Typography variant="h6">Category: {displayedCategory}</Typography>
          <Typography variant="h6">Difficulty: {storedDifficulty}</Typography>
          <Typography variant="h5" className="score">
            Final Score: {score} / 10
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: 20 }}
            href="/"
          >
            Go to Homepage
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Result;
