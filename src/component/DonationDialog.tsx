import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogProps,
  TextField,
} from "@material-ui/core";
import {
  validateAmount,
  validateEmail,
  validateName,
  validateComment,
} from "./DonationDialogValidator";
import settings from "../settings";
import { DonationsModel } from "../types";

export interface ConfirmProps extends DialogProps {
  open: boolean;
  onCancelClick: () => void;
  onOkClick: (data: DonationsModel) => void;
  cancelButtonText?: string;
  okButtonText?: string;
}

const DonationDialog = ({
  open,
  onCancelClick,
  onOkClick,
  cancelButtonText,
  okButtonText,
  ...rest
}: ConfirmProps): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [nameValid, setNameValid] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [amountValid, setAmountValid] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [commentValid, setCommentValid] = useState<string>("");
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
    setNameValid(validateName(value));
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };
  const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setAmount(value);
    setAmountValid(validateAmount(value));
  };
  const onCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setComment(value);
    setCommentValid(validateComment(value));
  };
  const handleSubmit = () => {
    const data: DonationsModel = {
      name,
      amount: typeof amount === "string" ? parseInt(amount, 10) : amount,
      comment,
      email,
    };
    onOkClick(data);
  };
  return (
    <Dialog
      open={open}
      onClose={onCancelClick}
      PaperProps={{ style: { width: "50%", maxWidth: "70%" } }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {/* <DialogTitle></DialogTitle> */}
      <DialogContent className="column-container ai-center-container">
        <TextField
          label="お名前"
          className="margin-tb-8"
          style={{
            width: "100%",
          }}
          error={!!nameValid}
          helperText={nameValid}
          value={name}
          onChange={onNameChange}
          inputProps={{
            maxLength: 10,
          }}
        />
        <TextField
          label="メールアドレス"
          className="margin-tb-8"
          style={{
            width: "100%",
          }}
          error={!!emailValid}
          helperText={emailValid || "コメント編集時に必要になります"}
          value={email}
          onChange={onEmailChange}
          inputProps={{
            maxLength: 50,
          }}
        />
        <TextField
          label="コメント"
          multiline
          rows={3}
          className="margin-tb-8"
          style={{
            width: "100%",
          }}
          error={!!commentValid}
          helperText={commentValid}
          value={comment}
          onChange={onCommentChange}
          inputProps={{
            maxLength: 500,
          }}
        />
        <TextField
          label="金額"
          className="margin-tb-8"
          style={{
            width: "100%",
          }}
          error={!!amountValid}
          helperText={
            amountValid ||
            `推奨金額${settings.app.donation.寄付額.目安表示額}円`
          }
          type="number"
          value={amount}
          onChange={onAmountChange}
        />
        <div
          className="row-container jc-flex-end-container"
          style={{ width: "100%" }}
        >
          ※お支払い方法：G3社員へ現金渡し or QR決済
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onCancelClick}>
          {cancelButtonText || "Cancel"}
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={
            !!(
              validateName(name) ||
              validateEmail(email) ||
              validateComment(comment) ||
              validateAmount(amount)
            )
          }
          onClick={handleSubmit}
        >
          {okButtonText || "OK"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DonationDialog;
