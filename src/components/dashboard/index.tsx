import React, { useState } from 'react';
import { Typography, Stack, TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUser from '../../hooks/useUser';

const Dashboard = () => {
  // const navigate = useNavigate();
  const { userInfo } = useUser();
  const [amount, setAmount] = useState<number>();
  const handleSubmit = () => {
    console.log('submitted', amount);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/payment`, {
        amount: Number(amount) * 100,
      })
      .then((res) => {
        window.location.replace(res?.data?.data?.data?.instrumentResponse?.redirectInfo?.url);
      })
      .catch((err) => console.log('error', err));
  };
  return (
    <Stack>
      <Stack p={2} textAlign='center'>
        <Typography fontWeight={600} fontSize={24}>
          Get money out of credit card @1% only
        </Typography>
        {userInfo?.firstName?.length !== 0 && (
          <Typography fontWeight={600} fontSize={18} color='primary'>
            Welcome Onboard {userInfo?.firstName}!
          </Typography>
        )}
      </Stack>
      <Stack
        spacing={2}
        sx={{
          margin: '0 auto',
        }}
      >
        <TextField
          id='outlined-number'
          label='Amount'
          type='number'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant='contained' onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
      <Stack
        spacing={2}
        sx={{
          margin: '0 auto',
          padding: '50px',
        }}
      >
        <Typography>For Testing Use below credentials:</Typography>
        <Typography>card_number: 4208585190116667,</Typography>
        <Typography>card_type: CREDIT_CARD,</Typography>
        <Typography>card_issuer: VISA,</Typography>
        <Typography>expiry_month: 06,</Typography>
        <Typography>expiry_year: 2027,</Typography>
        <Typography>cvv: 508</Typography>
        <Typography fontWeight={600}>Note: OTP = 123456</Typography>
      </Stack>
    </Stack>
  );
};
export default Dashboard;
