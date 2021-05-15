import { isInteger } from "lodash";
import isEmail from "validator/lib/isEmail";
import settings from "../settings";

const { 寄付額 } = settings.app.donation;

export const validateName = (name: string): string => {
  if (!name) {
    return "名前を入力してください";
  }
  return "";
};

export const validateAmount = (amount: number | string): string => {
  if (!amount) {
    return "金額を入力してください";
  }
  if (!isInteger(amount) || amount <= 寄付額.MIN || amount >= 寄付額.MAX) {
    return `${寄付額.MIN}〜${寄付額.MAX}の整数で入力してください`;
  }
  return "";
};

export const validateEmail = (email: string): string => {
  if (!email) {
    return "メールアドレスを入力してください";
  }
  if (!isEmail(email)) {
    return `有効なメールアドレスを入力してください`;
  }
  return "";
};

export const validateComment = (comment: string): string => {
  if (!comment) {
    return "コメントを入力してください";
  }
  return "";
};
