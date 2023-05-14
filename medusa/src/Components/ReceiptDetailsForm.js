import React, { useState } from 'react';
import './ReceiptDetailsForm.css';

function ReceiptDetailsForm() {
  const [rrn, setRRN] = useState('');
  const [terminalID, setTerminalID] = useState('');
  const [logCode, setLogCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseUrl= '';
    const link =`${baseUrl}/receipt?rrn=${rrn}&terminal_id=${terminalID}&log_code=${logCode}`;
    window.location.href = link;
  }

  return (
    <form onSubmit={handleSubmit} className="receipt-details-form">
      <label>
        RRN:
        <input type="text" value={rrn} onChange={(e) => setRRN(e.target.value)} className="receipt-details-input" />
      </label>
      <br />
      <label>
        Terminal ID:
        <input type="text" value={terminalID} onChange={(e) => setTerminalID(e.target.value)} className="receipt-details-input" />
      </label>
      <br />
      <label>
        LogCode:
        <input type="text" value={logCode} onChange={(e) => setLogCode(e.target.value)} className="receipt-details-input" />
      </label>
      <br />
      <input type="submit" value="Submit" className="receipt-details-button" />
    </form>
  );
}

export default ReceiptDetailsForm;