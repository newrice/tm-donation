import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogProps,
} from "@material-ui/core";

export interface ConfirmProps extends DialogProps {
  open: boolean;
  title?: string;
  content: React.ReactNode;
  onCancelClick: () => void;
  onOkClick: () => void;
  cancelButtonText?: string;
  okButtonText?: string;
}

const Confirm = ({
  open,
  title,
  content,
  onCancelClick,
  onOkClick,
  cancelButtonText,
  okButtonText,
  ...rest
}: ConfirmProps): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Dialog open={open} onClose={onCancelClick} {...rest}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{content}</DialogContent>
    <DialogActions>
      <Button color="primary" onClick={onCancelClick}>
        {cancelButtonText || "Cancel"}
      </Button>
      <Button color="primary" variant="contained" onClick={onOkClick}>
        {okButtonText || "OK"}
      </Button>
    </DialogActions>
  </Dialog>
);
export default Confirm;
