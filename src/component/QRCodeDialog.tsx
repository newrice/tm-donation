import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

export interface QRCodeDialogProps {
  open: boolean;
  onClose: () => void;
}

const QRCodeDialog = ({ open, onClose }: QRCodeDialogProps): JSX.Element => (
  <Dialog open={open} onClose={onClose}>
    <DialogContent>
      <div>PayPay QRCode</div>
      <img src="/qr.jpg" alt="qrcode" width="180px" style={{}} />
    </DialogContent>
  </Dialog>
);
export default QRCodeDialog;
