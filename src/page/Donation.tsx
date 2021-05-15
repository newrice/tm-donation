import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Button, Card, TextField, Typography } from "@material-ui/core";
import { isArray, isEmpty } from "lodash";
import { formatDistance } from "date-fns";
import { ja } from "date-fns/locale";
import { createDonations, fetchDonations } from "../api/donations";
import settings from "../settings";
import { thousandCommas } from "../utils";
import { DonationsModel, DonationsModelBase } from "../types";
import DonationDialog from "../component/DonationDialog";
import QRCodeDialog from "../component/QRCodeDialog";

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

const isOverTarget = (current: number): boolean =>
  current >= settings.app.donation.目標額;

export const Donation = (): JSX.Element => {
  const [total, setTotal] = useState<number>(0);
  const [datas, setDatas] = useState<DonationsModelBase[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [qrDialogOpen, setQrDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const refreshPage = async () => {
      try {
        setIsLoading(true);
        const res = await fetchDonations();
        setDatas(res.body || []);
        setTotal(sumTotal(res.body || []));
      } catch (e) {
        console.log(`Error : ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    refreshPage();
  }, [refresh]);
  const doRefresh = () => {
    setRefresh(!refresh);
  };
  const onDonateClick = () => {
    setDialogOpen(true);
  };
  const onPaymentClick = () => {
    setQrDialogOpen(true);
  };
  const handlePaymentClose = () => {
    setQrDialogOpen(false);
  };
  const handleCancel = () => {
    setDialogOpen(false);
  };
  const handleSubmit = async (data: DonationsModel) => {
    setDialogOpen(false);
    const res = await createDonations(data);
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
          <div className="column-container">
            <Typography variant="h5" className="margin-tb-8">
              {settings.app.donation.タイトル}
            </Typography>
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
            <div className="row-container ">
              <Button
                color="primary"
                variant="contained"
                className="margin-8"
                style={{ flexGrow: 4 }}
                disabled={!!isOverDeadline()}
                onClick={onDonateClick}
              >
                支援する
              </Button>
              <Button
                color="default"
                variant="contained"
                className="margin-8"
                style={{ flexGrow: 1 }}
                disabled={!!isOverDeadline()}
                onClick={onPaymentClick}
              >
                QR決済
              </Button>
            </div>
          </div>
        </Card>
        <DonationDialog
          open={dialogOpen}
          onOkClick={handleSubmit}
          onCancelClick={handleCancel}
        />
        <QRCodeDialog open={qrDialogOpen} onClose={handlePaymentClose} />
        {datas.map(item => (
          <Card style={{ width: "80%", maxWidth: 500, padding: 10, margin: 8 }}>
            <div>{`${item.name} さんより`}</div>
            <TextField
              multiline
              value={item.comment}
              className="margin-tb-8"
              style={{
                width: "100%",
              }}
            />
          </Card>
        ))}
        {/* <Card style={{ width: "80%", maxWidth: 500, padding: "0px 20px" }}>
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
          </div>
        </Card> */}
      </div>
      {isOverTarget(total) && <Confetti />}
    </>
  );
};

export default Donation;
