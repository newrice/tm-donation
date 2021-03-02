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
import { formatDistance } from "date-fns";
import { ja } from "date-fns/locale";
import { createDonations, fetchDonations } from "../api/donations";
import settings from "../settings";
import { thousandCommas } from "../utils";
import { DonationsModel } from "../types";
import { Confirm } from "../component";

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

const isOverDeadline = (): boolean => {
  const now = new Date();
  const { 締切 } = settings.app.donation;
  return now > 締切;
};
const diffDeadline = (): string =>
  isOverDeadline()
    ? "募集終了しました"
    : formatDistance(settings.app.donation.締切, new Date(), { locale: ja });

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

const isOverTarget = (current: number): boolean =>
  current >= settings.app.donation.目標額;

export const Donation = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [nameValid, setNameValid] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [amountValid, setAmountValid] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const refreshPage = async () => {
      try {
        setIsLoading(true);
        const res = await fetchDonations();
        if (res.body) {
          setTotal(sumTotal(res.body));
        } else {
          setTotal(sumTotal([]));
        }
        setName("");
        setAmount("");
      } catch (e) {
        console.log(`Error : ${e.message}`);
      } finally {
        setIsLoading(false);
      }
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
  const onDonateClick = () => {
    setDialogOpen(true);
  };
  const handleCancel = () => {
    setDialogOpen(false);
  };
  const handleSubmit = async () => {
    setDialogOpen(false);
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
          <div>
            <Typography variant="h5">吉田さんプレゼント代</Typography>
            <Typography
              style={{ fontSize: 14, verticalAlign: "middle" }}
              color="textSecondary"
              gutterBottom
            >
              ・現在の支援総額
            </Typography>
            <Typography variant="h5" align="center">
              {isLoading ? "loading..." : `${thousandCommas(total || 0)}円`}
            </Typography>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              ・目標金額
            </Typography>
            <Typography variant="h5" align="center">
              {`${thousandCommas(settings.app.donation.目標額)}円`}
            </Typography>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              ・募集終了まで残り
            </Typography>
            <Typography variant="h5" align="center">
              {diffDeadline()}
            </Typography>
          </div>
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
              disabled={
                !!(
                  validateName(name) ||
                  validateAmount(amount) ||
                  isOverTarget(total) ||
                  isOverDeadline()
                )
              }
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
      <Confirm
        open={dialogOpen}
        title="ご確認"
        content={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            <div style={{ padding: "0px 20px" }}>
              <Typography>{`お名前:${name}`}</Typography>
              <Typography>
                {`金額:${thousandCommas(
                  typeof amount === "string" ? 0 : amount,
                )}円`}
              </Typography>
            </div>
          </>
        }
        onOkClick={handleSubmit}
        onCancelClick={handleCancel}
        PaperProps={{ style: { width: "50%" } }}
      />
    </>
  );
};

export default Donation;
