import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import './App.css';

const Brekkie = () => {
    return (
        <Stack spacing={1} sx={{marginRight: '10px' }}>
            <Box sx={{fontSize: '1.5em'}}>brekkie</Box>
            <Box>oatmeal</Box>
        </Stack>
    );
}

const Dunch = () => {
    return (
        <Stack spacing={1}>
            <Box sx={{fontSize: '1.5em' }}>dunch</Box>
            <Box>veggie soup</Box>
        </Stack>
    );
}

const App = () => {
  return (
    <Stack
        spacing={2}
        sx={{ textAlign: 'center', marginTop: '75px' }}>
        <Box sx={{ fontSize: '3em' }}>recipes</Box>
        <Stack
            sx={{ marginTop: '10px', justifyContent: 'center' }}
            direction="row">
          <Brekkie />
          <Dunch />
        </Stack>
    </Stack>
  );
}

export default App;
