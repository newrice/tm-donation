import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import {
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { isArray, isEmpty, isInteger } from "lodash";
import { createDonations, fetchDonations } from "../api/donations";
import settings from "../settings";
import { thousandCommas } from "../utils";
import { DonationsModel } from "../types";

const amountMin = 1;
const amountMax = 5000;

const sumTotal = (list: DonationsModel[]): number => {
  let total = 0;
  if (list && !isEmpty(list) && isArray(list)) {
    list.forEach(item => {
      total += item.amount;
    });
  }
  return total;
};

const validateName = (name: string): string => {
  if (!name) {
    return "名前を入力してください";
  }
  return "";
};

const validateAmount = (amount: number | string): string => {
  if (!amount) {
    return "金額を入力してください";
  }
  if (!isInteger(amount) || amount < amountMin || amount > amountMax) {
    return `${amountMin}〜${amountMax}の整数で入力してください`;
  }
  return "";
};

const isOverTarget = (current: number): boolean => current >= settings.目標額;

export const Donation = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [nameValid, setNameValid] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [amountValid, setAmountValid] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [refresh, setRefresh] = useState<boolean>(false);
  useEffect(() => {
    const refreshPage = async () => {
      const res = await fetchDonations();
      if (res.body) {
        setTotal(sumTotal(res.body));
      }
      setName("");
      setAmount("");
    };
    refreshPage();
  }, [refresh]);
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
    setNameValid(validateName(value));
  };
  const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setAmount(value);
    setAmountValid(validateAmount(value));
  };
  const doRefresh = () => {
    setRefresh(!refresh);
  };
  const onDonateClick = async () => {
    const res = await createDonations({
      name,
      amount: typeof amount === "string" ? 0 : amount || 0,
    });
    if (res.result && !res.result.error) {
      doRefresh();
    }
  };
  return (
    <>
      <div className="column-container ai-center-container">
        <Card
          className="margin-tb-8 column-container ai-center-container"
          style={{ width: "80%", maxWidth: 500, padding: "10px" }}
        >
          <Typography variant="h5">吉田さんプレゼント代</Typography>
          <Typography variant="h6">
            {`現在の支援総額：${thousandCommas(total || 0)}円`}
          </Typography>
          <Typography>
            {`目標金額は：${thousandCommas(settings.目標額)}円`}
          </Typography>
        </Card>
        <Card style={{ width: "80%", maxWidth: 500, padding: "0px 20px" }}>
          <div className="margin-tb-8 row-container jc-flex-end-container">
            <IconButton size="small" onClick={doRefresh}>
              <RefreshIcon />
            </IconButton>
          </div>
          <div className="margin-tb-8 column-container each-margin-tb-8-container">
            <TextField
              label="お名前"
              error={!!nameValid}
              helperText={nameValid}
              value={name}
              onChange={onNameChange}
              inputProps={{
                maxLength: 10,
              }}
            />
            <TextField
              label="金額"
              error={!!amountValid}
              helperText={amountValid}
              type="number"
              value={amount}
              onChange={onAmountChange}
            />
            <Button
              color="primary"
              variant="contained"
              disabled={!!(nameValid || amountValid || isOverTarget(total))}
              onClick={onDonateClick}
            >
              支援する
            </Button>
            <div className="margin-tb-8 row-container jc-flex-end-container">
              <Typography>※お支払いは現金 or LinePayでお願いします</Typography>
            </div>
          </div>
        </Card>
      </div>
      {isOverTarget(total) && <Confetti />}
    </>
  );
};

export default Donation;
