import { Button, Box, Container } from '@material-ui/core'

function App() {
  return (
    <Container fixed>
      <h1>Title h1</h1>
      <h2>Title h2</h2>
      <h3>Title h3</h3>
      <h4>Title h4</h4>
      <h5>Title h5</h5>
      <h6>Title h6</h6>
      <Button variant="contained" color="primary">
        test
      </Button>

      <Box m={1} p={3} color="text.primary" clone>
        <Button variant="contained" color="primary">
          test2
        </Button>
      </Box>

      <Box component="span">
        <Button variant="contained" color="primary">
          test3
        </Button>
      </Box>
    </Container>
  )
}

export default App
