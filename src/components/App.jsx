import React from "react";
import 'fontsource-roboto';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Game from "./Game";

function App() {

return(
<Container maxWidth="sm">
      <Box my={4}>
      <Game />
      </Box>
    </Container>

)
}
  
export default App;