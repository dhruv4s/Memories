import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Forms from "./components/forms/forms.js";
import Cards from "./components/cards/cards.js";
import { useDispatch } from "react-redux";
import { getMemories } from "./actions/cardsActions.js";
import "./styles.css";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMemories());
  }, [currentId, dispatch]);
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar className="appBar" position="static" color="inherit">
          <Typography className="heading" variant="h3" align="center">
            Memories
          </Typography>
          <img className="img" src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              className="container"
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Cards setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Forms currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
