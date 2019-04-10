import * as orderProductMapper from './OrderProductMapper'
import { IOrder, IOrderDto } from '../models/Order'

export const toModel = (order: IOrderDto): IOrder => ({
    id: order.id,
    total: order.total,
    cancelled: order.cancelled,
    paid: order.paid,
    products: order.products.map(orderProductMapper.toModel),
    userId: order.user_id,
    eventId: order.event_id,
    eventName: order.event_name,
    createdBy: order.created_by,
    createdAt: order.created_at,
    updatedAt: order.updated_at,
});