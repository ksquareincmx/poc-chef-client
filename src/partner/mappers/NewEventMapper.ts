import moment from "moment-timezone";

import { INewEvent } from "./../models";

export const newEventMapper = {
  toDTO: (newEvent: INewEvent.INewEvent): INewEvent.INewEventDTO => {
    return {
      event_name: newEvent.eventName,
      start_date: moment(newEvent.startDateStr)
        .utc()
        .unix(),
      end_date: moment(newEvent.expirationDateStr)
        .utc()
        .unix(),
      start_hour: moment(newEvent.startDate)
        .utc()
        .unix(),
      end_hour: moment(newEvent.startDate)
        .utc()
        .unix(),
      poc_chuc_torta_unitary_price: newEvent.pocChucTortaUnitPrice,
      shrimp_torta_unitary_price: newEvent.shrimpTortaUnitPrice
    };
  },
  toEntity: (dto: INewEvent.ICreatedEventDTO): INewEvent.ICreatedEvent => {
    return {
      id: dto.id,
      eventName: dto.event_name,
      startDate: new Date(dto.start_date * 1000),
      expirationDate: new Date(dto.end_date * 1000),
      startDateString: moment(dto.start_date * 1000)
        .tz("America/Mexico_City")
        .format("L"),
      expirationDateString: moment(dto.end_date * 1000)
        .tz("America/Mexico_City")
        .format("L"),
      starHour: moment(dto.start_date * 1000)
        .tz("America/Mexico_City")
        .format("LT"),
      expirationHour: moment(dto.end_date * 1000)
        .tz("America/Mexico_City")
        .format("LT"),
      pocChucTortaUnitPrice: dto.poc_chuc_torta_unitary_price,
      shrimpTortaUnitPrice: dto.shrimp_torta_unitary_price
    };
  }
};
