import React from 'react';
import { styled } from '@mui/material/styles';

const TopPadding = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        padding: '0px',
    },
    [theme.breakpoints.up('md')]: {
        padding: '10px',
    },
    [theme.breakpoints.up('lg')]: {
        padding: '30px',
    },
}));

const BottomPadding = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        padding: '10px',
    },
    [theme.breakpoints.up('md')]: {
        padding: '15px',
    },
    [theme.breakpoints.up('lg')]: {
        padding: '25px',
    },
}));

export const TitlePadding = (props) => {
    return (
        <>
            <TopPadding />
            {props.content}
            <BottomPadding />
        </>
    );
};
