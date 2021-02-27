import React, { useEffect, useState } from "react";
import { Button, Card, TextField, Typography } from "@material-ui/core";
import { isArray, isEmpty } from "lodash";
import { createDonations, fetchDonations } from "../api/donations";
import settings from "../settings";
import { thousandCommas } from "../utils";
import { DonationsModel } from "../types";

const sumTotal = (list: DonationsModel[]): number => {
  let total = 0;
  if (list && !isEmpty(list) && isArray(list)) {
    list.forEach(item => {
      total += item.amount;
    });
  }
  return total;
};

export const Donation = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [total, setTotal] = useState<number>();
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
    setName(event.target.value);
  };
  const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value, 10));
  };
  const onDonateClick = async () => {
    const res = await createDonations({
      name,
      amount: typeof amount === "string" ? 0 : amount || 0,
    });
    if (res.result && res.result.error) {
      setRefresh(!refresh);
    }
  };
  return (
    <>
      <div className="column-container ai-center-container">
        <Card
          className="margin-tb-8 column-container ai-center-container"
          style={{ width: "80%", maxWidth: 500, padding: "10px" }}
        >
          <Typography variant="h6">
            {`現在の支援総額：${thousandCommas(total || 0)}円`}
          </Typography>
          <Typography>
            {`目標金額は：${thousandCommas(settings.目標額)}円`}
          </Typography>
        </Card>
        <Card style={{ width: "80%", maxWidth: 500, padding: "0px 20px" }}>
          <div className="margin-tb-8 column-container each-margin-tb-8-container">
            <TextField label="名前" value={name} onChange={onNameChange} />
            <TextField
              label="金額"
              type="number"
              value={amount}
              onChange={onAmountChange}
            />
            <Button color="primary" variant="contained" onClick={onDonateClick}>
              支援する
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Donation;
