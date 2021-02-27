import { BASE_BACKEND, getData, postData } from ".";
import { DonationsModel, IApiResponseBase } from "../types";
import settings from "../settings";

const url = `${BASE_BACKEND}${settings.url.donations}`;

export const fetchDonations = (): Promise<IApiResponseBase<DonationsModel[]>> =>
  getData({ url });

export const createDonations = (
  item: DonationsModel,
): Promise<IApiResponseBase<undefined>> =>
  postData({
    url,
    body: item,
  }).then((data: IApiResponseBase<undefined>) => data);
