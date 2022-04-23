import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Brekkie = () => {
    return (
        <Stack spacing={1} sx={{ }}>
            <Box sx={{fontSize: '1.5em'}}>brekkie</Box>
            <Box>porridge</Box>
        </Stack>
    );
}

const Soups = () => {
    return (
        <Stack spacing={1}>
            <Box sx={{ fontSize: '1.5em' }}>soups</Box>
            <Box>veggie broth</Box>
            <Box>veggie soup</Box>
            <Box>chicken tortilla</Box>
            <Box>lentil soup</Box>
        </Stack>
    );
}

const Pasta = () => {
    return (
        <Stack spacing={1}>
            <Box sx={{fontSize: '1.5em' }}>pasta</Box>
            <Box>mushroom risotto</Box>
        </Stack>
    );
}

const Other = () => {
    return (
        <Stack spacing={1} sx={{paddingTop: '10px' }}>
            <Box sx={{fontSize: '1.5em' }}>other</Box>
            <Box>stuffed cabbage rolls</Box>
        </Stack>
    );
}

const ColumnOne = () => {
    return (
        <Stack spacing={1} sx={{ marginRight: '50px' }}>
            <Brekkie />
        </Stack>
    );
}

const ColumnTwo = () => {
    return (
        <Stack spacing={1} sx={{ marginRight: '50px' }}>
            <Soups />
        </Stack>
    );
}

const ColumnThree = () => {
    return (
        <Stack spacing={1} sx={{ }}>
            <Pasta />
            <Other />
        </Stack>
    );
}

const Home = () => {
  return (
    <Stack
        spacing={2}
        sx={{ textAlign: 'center', marginTop: '75px' }}>
        <Box sx={{ fontSize: '3em' }}>recipes</Box>
        <Stack
            sx={{ paddingTop: '20px', justifyContent: 'center', textAlign: 'left' }}
            direction="row">
          <ColumnOne />
          <ColumnTwo />
          <ColumnThree />
        </Stack>
    </Stack>
  );
}

export default Home;
