import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Summary() {
  const [selectedText, setSelectedText] = useState(null);

  const handleTextClick = (index) => {
    setSelectedText(index);
  };

  return (
    <Box  style={{display:'flex',justifyContent:'space-evenly'}}>
      {["Summary","Order Lines","Suppliers","Analysis","Freight Details","Delivery","Invoice","Memos","Notes & Attachments", "Budgets"].map((index) => (
        <Typography
          key={index}
          onClick={() => handleTextClick(index)}
          style={{
            cursor: 'pointer',
            borderBottom: selectedText === index ? '2px solid green' : '',
            paddingBottom: '4px',
            marginBottom: '8px',
            display: 'inline-block',
            marginRight: '10px',
          }}
        >
           {index}
        </Typography>
      ))}
    </Box>
  );
}

export default Summary;
