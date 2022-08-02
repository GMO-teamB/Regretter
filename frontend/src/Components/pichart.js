import "./pichart.css";
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import {
  AccountCircle,
} from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const CircularInternalContent = styled.div`
  left: 0;
  top: 16px;
  bottom: 0;
  right: 0;
  position: absolute;
`

const ProbabilitySuffix = styled(Typography)`
  margin-bottom: 4px;
`

const StyledCircularBackground = styled(CircularProgress)`
  color: #bfbfbf;
`

const StyledCircularBar = styled(CircularProgress)`
  position: absolute;
`

export function PieChart(){
    const value = 80
    return (
      <Box position="relative" display="inline-flex">
        {/* 背景用のCircularProgress */}
        <StyledCircularBackground variant="determinate" size={300} value={100} />
        {/* バロメーター用のCircularProgress */}
        <StyledCircularBar variant="determinate" size={300} value={value} />
        <CircularInternalContent>
          <Grid container justify="center">
            <AccountCircle fontSize="large" />
            <Grid
              container
              justify="center"
              alignItems="flex-end"
            >
              <Typography variant="h5">{value}</Typography>
              <ProbabilitySuffix variant="caption">%</ProbabilitySuffix>
            </Grid>
          </Grid>
        </CircularInternalContent>
      </Box>
    )
  }