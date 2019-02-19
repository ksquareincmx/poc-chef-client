import { IEvent, IEventDTO } from "src/partner/interfaces/Event";
import moment from "moment";

const toEntity = (dto: IEventDTO): IEvent => {
  return {
    id: String(dto.id),
    orderNumber: `Event: #${String(dto.id)}`,
    name: String(dto.name),
    startDate: new Date(dto.start_date * 1000),
    endDate: new Date(dto.end_date * 1000),
    startDateString: moment(new Date(dto.start_date * 1000)).format("	L"),
    starTimeString: moment(new Date(dto.start_date * 1000)).format("LT"),
    endDateString: moment(new Date(dto.end_date * 1000)).format("	L"),
    endTimeString: moment(new Date(dto.end_date * 1000)).format("LT"),
    pocChucTortaUnitPrice: Number(dto.poc_chuc_torta_unit_price),
    pocChucTortaAmount: Number(dto.poc_chuc_torta_amount),
    pocChucTotal: Number(dto.poc_chuc_torta_unit_price) * Number(dto.poc_chuc_torta_amount),
    shrimpTortaUnitPrice: Number(dto.shrimp_torta_unit_price),
    shrimpTortaAmount: Number(dto.shrimp_torta_amount),
    shrimpTotal: Number(dto.shrimp_torta_unit_price) * Number(dto.shrimp_torta_amount),
    total:
      Number(dto.poc_chuc_torta_unit_price) * Number(dto.poc_chuc_torta_amount) +
      Number(dto.shrimp_torta_unit_price) * Number(dto.shrimp_torta_amount),
  };
};

export default {
  toEntity,
};
