import React from "react";
import { PredictionForm } from "./PredictionForm";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Predict = () => {
    return(
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } ,}}>
          <Typography component="h1" variant="h4" align="center" sx={{ "marginBottom":"20px"}}>
              <span className="predictiHeading">Real Estate Price Predictor</span>
          </Typography>
          <React.Fragment>
              <PredictionForm />

              <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                >
                  {"Predict Price"}
                </Button>
            </React.Fragment>
          </Paper>

          </Container>
    )
};
