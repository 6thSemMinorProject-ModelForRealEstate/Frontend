import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./css/Predict.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Axios from "../config/Axios";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Predict = () => {
  const [area, setArea] = useState("");
  const [noOfBedrooms, setNoOfBedrooms] = useState("");
  const [gymnasium, setGymnasium] = useState("");
  const [swimmingPool, setSwimmingPool] = useState("");
  const [landscapeGardens, setLandscapeGardens] = useState("");
  const [indoorGames, setIndoorGames] = useState("");
  const [sportsFacility, setSportsFacility] = useState("");
  const [atm, setAtm] = useState("");
  const [clubhouse, setClubhouse] = useState("");
  const [security, setSecurity] = useState("");
  const [powerbackup, setPowerbackup] = useState("");
  const [carParking, setCarParking] = useState("");
  const [liftAvailable, setLiftAvailable] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const notify = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleClose = (e) => {
    setOpen(false);
    if (e === 2) {
      setArea("");
      setNoOfBedrooms("");
      setGymnasium("");
      setSwimmingPool("");
      setLandscapeGardens("");
      setIndoorGames("");
      setSportsFacility("");
      setAtm("");
      setClubhouse("");
      setSecurity("");
      setPowerbackup("");
      setCarParking("");
      setLiftAvailable("");
      setFurnishing("");
    }
  };

  const handleSubmit = async () => {
    if (area == "") {
      notify("Area is required...");
      return;
    }

    if (noOfBedrooms == "") {
      notify("Number of bedrooms is required...");
      return;
    }

    if (gymnasium == "" && gymnasium != 0) {
      notify("Please choose one option from Gymnasium gardens field...");
      return;
    }

    if (swimmingPool == "" && swimmingPool != 0) {
      notify("Please choose one option from swimming pool field...");
      return;
    }

    if (landscapeGardens == "" && landscapeGardens != 0) {
      notify("Please choose one option from landcsacpe gardens field...");
      return;
    }

    if (indoorGames == "" && indoorGames != 0) {
      notify("Please choose one option from indoor games field...");
      return;
    }

    if (sportsFacility == "" && sportsFacility != 0) {
      notify("Please choose one option from sports facility field...");
      return;
    }

    if (atm == "" && atm != 0) {
      notify("Please choose one option from atm field...");
      return;
    }

    if (clubhouse == "" && clubhouse != 0) {
      notify("Please choose one option from club house field...");
      return;
    }

    if (security == "" && security != 0) {
      notify("Please choose one option from security field...");
      return;
    }

    if (powerbackup == "" && powerbackup != 0) {
      notify("Please choose one option from powerbackuo field...");
      return;
    }

    if (carParking == "" && carParking != 0) {
      notify("Please choose one option from car parking field...");
      return;
    }

    if (liftAvailable == "" && liftAvailable != 0) {
      notify("Please choose one option from lift available field...");
      return;
    }

    if (furnishing == "" && furnishing != 0) {
      notify("Please choose one option from furnishing field...");
      return;
    }

    setLoading(true);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = {
      area: area,
      noOfBedrooms: noOfBedrooms,
      gymnasium: gymnasium,
      swimmingPool: swimmingPool,
      landscapeGardens: landscapeGardens,
      indoorGames: indoorGames,
      sportsFacility: sportsFacility,
      atm: atm,
      clubhouse: clubhouse,
      security: security,
      powerbackup: powerbackup,
      carParking: carParking,
      liftAvailable: liftAvailable,
      furnishing: furnishing,
    };

    try {
      const result = await Axios.post("/prediction/predict", body, config);

      console.log(JSON.stringify(result.data), "sUCESS...");
      setLoading(false);
      setPredictedPrice(result.data.price);
      handleClickOpen();
    } catch (err) {
      console.log("ERROR...");
      setLoading(false);
    }
  };

  return (
    <>
    <div className="bg1">
    <Container component="main" maxWidth="sm" sx={{ mb: 0 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 0, md: 0 }, p: { xs: 2, md: 3 } }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          sx={{ marginBottom: "20px" }}
        >
          <span className="predictiHeading">Real Estate Price Predictor</span>
        </Typography>
        <React.Fragment>
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="area"
                  fullWidth
                  autoComplete="given-name"
                  id="standard-basic"
                  label="Area"
                  type="number"
                  variant="standard"
                  value={area}
                  onChange={(event) => setArea(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="noOfBedrooms"
                  name="noOfBedrooms"
                  label="No. Of Bedrooms"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  required
                  type="number"
                  value={noOfBedrooms}
                  onChange={(event) => setNoOfBedrooms(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="Gymnasium">Gymnasium</InputLabel>
                  <Select
                    labelId="Gymnasium"
                    id="demo-simple-select"
                    value={gymnasium}
                    label="Gymnasium"
                    type="number"
                    fullWidth
                    onChange={(event) => setGymnasium(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Gymnasium want</MenuItem>
                    <MenuItem value={0}>Gymnasium not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="swimmingPool">Swimming Pool</InputLabel>
                  <Select
                    labelId="swimmingPool"
                    id="demo-simple-select"
                    value={swimmingPool}
                    type="number"
                    label="Swimming Pool"
                    onChange={(event) => setSwimmingPool(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Swimming Pool want</MenuItem>
                    <MenuItem value={0}>Swimming Pool not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="landscapeGardens">
                    Landscape Gardens
                  </InputLabel>
                  <Select
                    labelId="landscapeGardens"
                    id="demo-simple-select"
                    label="Landscape Gardens"
                    value={landscapeGardens}
                    type="number"
                    onChange={(event) =>
                      setLandscapeGardens(event.target.value)
                    }
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Landscape Gardens want</MenuItem>
                    <MenuItem value={0}>Landscape Gardens not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="Indoor Games">Indoor Games</InputLabel>
                  <Select
                    labelId="Indoor Games"
                    id="demo-simple-select"
                    label="Indoor Games"
                    type="number"
                    value={indoorGames}
                    onChange={(event) => setIndoorGames(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Indoor Games want</MenuItem>
                    <MenuItem value={0}>Indoor Games not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="SpFacilityorts ">Sports Facility</InputLabel>
                  <Select
                    labelId="SpFacilityorts "
                    id="demo-simple-select"
                    label="SpFacilityorts "
                    type="number"
                    value={sportsFacility}
                    onChange={(event) => setSportsFacility(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Sports Facility want</MenuItem>
                    <MenuItem value={0}>Sports Facility not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="Atm ">Atm </InputLabel>
                  <Select
                    labelId="Atm"
                    id="demo-simple-select"
                    label="Atm"
                    type="number"
                    value={atm}
                    onChange={(event) => setAtm(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Atm want</MenuItem>
                    <MenuItem value={0}>Atm not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="Club House ">Club House</InputLabel>
                  <Select
                    labelId="Club House"
                    id="demo-simple-select"
                    label="Club House"
                    type="number"
                    value={clubhouse}
                    onChange={(event) => setClubhouse(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Club House want</MenuItem>
                    <MenuItem value={0}>Club House not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="Security ">Security</InputLabel>
                  <Select
                    labelId="Security"
                    id="demo-simple-select"
                    label="Security"
                    type="number"
                    value={security}
                    onChange={(event) => setSecurity(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Security want</MenuItem>
                    <MenuItem value={0}>Security not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="Power Backup">Power Backup</InputLabel>
                  <Select
                    labelId="Power Backup"
                    id="demo-simple-select"
                    type="number"
                    label="Power Backup"
                    value={powerbackup}
                    onChange={(event) => setPowerbackup(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Power Backup want</MenuItem>
                    <MenuItem value={0}>Power Backup not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="Car Parking">Car Parking</InputLabel>
                  <Select
                    labelId="Car Parking"
                    id="demo-simple-select"
                    label="Car Parking"
                    type="number"
                    value={carParking}
                    onChange={(event) => setCarParking(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Car Parking want</MenuItem>
                    <MenuItem value={0}>Car Parking not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="Lift Available">Lift Available</InputLabel>
                  <Select
                    labelId="Lift Available"
                    id="demo-simple-select"
                    label="Lift Available"
                    type="number"
                    value={liftAvailable}
                    onChange={(event) => setLiftAvailable(event.target.value)}
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={1}>Lift want</MenuItem>
                    <MenuItem value={0}>Lift not want</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="Furnishing">Furnishing</InputLabel>
                  <Select
                    labelId="Furnishing"
                    id="demo-simple-select"
                    label="Furnishing"
                    type="number"
                    value={furnishing}
                    onChange={(event) => setFurnishing(event.target.value)}
                    required
                  >
                    <MenuItem value="" disabled selected>
                      --Please select an option--
                    </MenuItem>
                    <MenuItem value={0}>Unfurnished</MenuItem>
                    <MenuItem value={1}>Semi-furnished</MenuItem>
                    <MenuItem value={2}>Fully-furnished</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <Button
                    id="btn"
                    onClick={() => handleSubmit()}
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {"Predict Price"}
                  </Button>
                )}
              </Grid>
            </Grid>
          </React.Fragment>
        </React.Fragment>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Price Predicted Successfully"} <CelebrationIcon />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estimated Price:- {predictedPrice}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(1)}>Edit Details</Button>
          <Button onClick={() => handleClose(2)} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
    </div>
    </>
  );
};
