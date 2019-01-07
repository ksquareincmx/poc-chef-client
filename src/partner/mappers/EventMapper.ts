import { IEvent, IEventDTO } from "../interfaces/Event";

const toEntity = (dto: IEventDTO): IEvent => {
  return {
    id: dto.id,
    name: dto.name,
    startDate: new Date(dto.start_date),
    endDate: new Date(dto.end_date),
    pocChucTortaUnitPrice: dto.poc_chuc_torta_unit_price,
    pocChucTortaAmount: dto.poc_chuc_torta_amount,
    shrimpTortaUnitPrice: dto.shrimp_torta_unit_price,
    shrimpTortaAmount: dto.shrimp_torta_amount,
    total: dto.total
  };
};

export default {
  toEntity
};
