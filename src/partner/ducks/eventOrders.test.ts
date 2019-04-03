import reducerEventOrders, {
  IEventOrdersState,
  initialEventOrdersState,
  fetchEventOrdersStarted,
  fetchEventOrdersSucceed,
  fetchEventOrdersFailed,
  checkAllUnpaidOrders,
  checkAllPaidOrders,
  checkPaidOrderById,
  checkUnpaidOrderById,
  moveCheckedOrdersToPaid,
  moveCheckedOrdersToUnpaid
} from "./eventOrders";
import { IOrder } from "../models";
import { order } from "../models/Order";

describe("test eventOrders reducer", () => {
  it("test fetchAllOrdersByEventIdStart, Should set isLoading to true", () => {
    const expectedNewState: IEventOrdersState = { ...initialEventOrdersState, isLoading: true };
    const newState: IEventOrdersState = reducerEventOrders(
      initialEventOrdersState,
      fetchEventOrdersStarted()
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("test fetchAllOrdersByEventIdSuccess, Should set orders, isLoading to false, and set paid and unpaid orders", () => {
    const prevState: IEventOrdersState = { ...initialEventOrdersState, isLoading: true };
    const paidOrders: IOrder.IOrder[] = [
      { ...order(), paid: true, id: "10-a-25" },
      { ...order(), paid: true, id: "11-b-25" }
    ];
    const unpaidOrders: IOrder.IOrder[] = [
      { ...order(), id: "20-unp" },
      { ...order(), id: "21-unp" }
    ];
    const orders: IOrder.IOrder[] = [...paidOrders, ...unpaidOrders];
    const expectedNewState: IEventOrdersState = {
      ...prevState,
      isLoading: false,
      orders,
      paidOrders,
      unpaidOrders
    };
    const newState: IEventOrdersState = reducerEventOrders(
      prevState,
      fetchEventOrdersSucceed(orders)
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("test fetchAllOrdersByEventIdFaild, Should set an error, set isLoading as false", () => {
    const error: Error = new Error("error at fetching event's orders");
    const prevState: IEventOrdersState = { ...initialEventOrdersState, isLoading: true };
    const expectedNewState: IEventOrdersState = { ...prevState, isLoading: false, error };
    const newState: IEventOrdersState = reducerEventOrders(
      prevState,
      fetchEventOrdersFailed(error)
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("test eventOrdersCheckAllUnpaid, Should set unpaidOrders's check property as true", () => {
    const prevState: IEventOrdersState = {
      ...initialEventOrdersState,
      unpaidOrders: [order(), order()]
    };
    const checkedOrders: IOrder.IOrder[] = [
      { ...order(), checked: true },
      { ...order(), checked: true }
    ];
    const expectedNewState: IEventOrdersState = { ...prevState, unpaidOrders: checkedOrders };
    const newStateChecked: IEventOrdersState = reducerEventOrders(
      prevState,
      checkAllUnpaidOrders(true)
    );
    expect(newStateChecked).toEqual(expectedNewState);
  });

  it("test eventOrdersCheckAllUnpaid, Should set unpaidOrders's check property as false", () => {
    const ordersChecked: IOrder.IOrder[] = [
      { ...order(), checked: true },
      { ...order(), checked: true }
    ];
    const prevState: IEventOrdersState = {
      ...initialEventOrdersState,
      unpaidOrders: ordersChecked
    };
    const expectedNewState: IEventOrdersState = { ...prevState, unpaidOrders: [order(), order()] };
    const newStateUnchecked: IEventOrdersState = reducerEventOrders(
      prevState,
      checkAllUnpaidOrders(false)
    );
    expect(newStateUnchecked).toEqual(expectedNewState);
  });

  it("test eventOrdersCheckAllPaid, Should set paidOrders's check property as true", () => {
    const prevState: IEventOrdersState = {
      ...initialEventOrdersState,
      paidOrders: [order(), order()]
    };
    const ordersChecked: IOrder.IOrder[] = [
      { ...order(), checked: true },
      { ...order(), checked: true }
    ];
    const expectedNewState: IEventOrdersState = { ...prevState, paidOrders: ordersChecked };
    const newStateChecked: IEventOrdersState = reducerEventOrders(
      prevState,
      checkAllPaidOrders(true)
    );
    expect(newStateChecked).toEqual(expectedNewState);
  });

  it("test eventOrdersCheckAllPaid, Should set paidOrders's check property as false", () => {
    const ordersChecked: IOrder.IOrder[] = [
      { ...order(), checked: true },
      { ...order(), checked: true }
    ];
    const prevState: IEventOrdersState = { ...initialEventOrdersState, paidOrders: ordersChecked };
    const expectedNewState: IEventOrdersState = { ...prevState, paidOrders: [order(), order()] };
    const newStateUnchecked: IEventOrdersState = reducerEventOrders(
      prevState,
      checkAllPaidOrders(false)
    );
    expect(newStateUnchecked).toEqual(expectedNewState);
  });

  it("test checkOrdersCheckOnePaid, Should check one paid order by its id", () => {
    const orderIdChecked: string = "1a41";
    const checked: boolean = true;
    const orders: IOrder.IOrder[] = [{ ...order(), id: "1a40" }, { ...order(), id: "1a41" }];
    const prevState: IEventOrdersState = { ...initialEventOrdersState, paidOrders: orders };
    const ordersModified: IOrder.IOrder[] = [
      { ...order(), id: "1a40" },
      { ...order(), checked, id: "1a41" }
    ];
    const expectedNewState: IEventOrdersState = { ...prevState, paidOrders: ordersModified };
    const newState: IEventOrdersState = reducerEventOrders(
      prevState,
      checkPaidOrderById(orderIdChecked, checked)
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("test checkOrdersCheckOnePaid, Should uncheck one paid order by its id", () => {
    const orderIdUnchecked: string = "1a41";
    const checked: boolean = false;
    const orders: IOrder.IOrder[] = [
      { ...order(), checked: true, id: "1a40" },
      { ...order(), checked: true, id: "1a41" }
    ];
    const prevState: IEventOrdersState = { ...initialEventOrdersState, paidOrders: orders };
    const ordersModified: IOrder.IOrder[] = [
      { ...order(), checked: true, id: "1a40" },
      { ...order(), checked: false, id: "1a41" }
    ];
    const expectedNewState: IEventOrdersState = { ...prevState, paidOrders: ordersModified };
    const newState: IEventOrdersState = reducerEventOrders(
      prevState,
      checkPaidOrderById(orderIdUnchecked, checked)
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("test checkOrdersCheckOneUnpaid, Should check one unpaid order by its id", () => {
    const orderIdChecked: string = "1a41";
    const checked: boolean = true;
    const orders: IOrder.IOrder[] = [{ ...order(), id: "1a40" }, { ...order(), id: "1a41" }];
    const prevState: IEventOrdersState = { ...initialEventOrdersState, unpaidOrders: orders };
    const ordersModified: IOrder.IOrder[] = [
      { ...order(), id: "1a40" },
      { ...order(), checked, id: "1a41" }
    ];
    const expectedNewState: IEventOrdersState = { ...prevState, unpaidOrders: ordersModified };
    const newState: IEventOrdersState = reducerEventOrders(
      prevState,
      checkUnpaidOrderById(orderIdChecked, checked)
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("test checkOrdersCheckOneUnpaid, Should uncheck one unpaid order by its id", () => {
    const orderIdUnchecked: string = "1a41";
    const checked: boolean = false;
    const orders: IOrder.IOrder[] = [
      { ...order(), checked: true, id: "1a40" },
      { ...order(), checked: true, id: "1a41" }
    ];
    const prevState: IEventOrdersState = { ...initialEventOrdersState, unpaidOrders: orders };
    const ordersModified: IOrder.IOrder[] = [
      { ...order(), checked: true, id: "1a40" },
      { ...order(), checked, id: "1a41" }
    ];
    const expectedNewState: IEventOrdersState = { ...prevState, unpaidOrders: ordersModified };
    const newState: IEventOrdersState = reducerEventOrders(
      prevState,
      checkUnpaidOrderById(orderIdUnchecked, checked)
    );
    expect(newState).toEqual(expectedNewState);
  });

  it("test moveCheckedOrdersToPaid, Should move checked unpaid orders to paidOrders", () => {
    const defaultOrder: IOrder.IOrder = order();
    const prevPaidOrders: IOrder.IOrder[] = [
      { ...defaultOrder, id: "10" },
      { ...defaultOrder, id: "20" },
      { ...defaultOrder, id: "30" }
    ];
    const prevUnpaidOrders: IOrder.IOrder[] = [
      { ...defaultOrder, checked: true, id: "40" },
      { ...defaultOrder, id: "50" },
      { ...defaultOrder, checked: true, id: "60" }
    ];

    const prevState: IEventOrdersState = {
      ...initialEventOrdersState,
      paidOrders: prevPaidOrders,
      unpaidOrders: prevUnpaidOrders
    };
    const expectedNewState: IEventOrdersState = {
      ...initialEventOrdersState,
      paidOrders: [...prevPaidOrders, ...prevUnpaidOrders.filter(o => o.checked)],
      unpaidOrders: [{ ...defaultOrder, id: "50" }]
    };
    const newState: IEventOrdersState = reducerEventOrders(prevState, moveCheckedOrdersToPaid());
    expect(newState).toEqual(expectedNewState);
  });

  it("test moveCheckedOrdersToUnpaid, Should move checked paid orders to unpaidOrders", () => {
    const defaultOrder: IOrder.IOrder = order();
    const prevPaidOrders: IOrder.IOrder[] = [
      { ...defaultOrder, checked: true, id: "10" },
      { ...defaultOrder, checked: true, id: "20" },
      { ...defaultOrder, id: "30" }
    ];
    const prevUnpaidOrders: IOrder.IOrder[] = [
      { ...defaultOrder, id: "40" },
      { ...defaultOrder, id: "50" },
      { ...defaultOrder, id: "60" }
    ];

    const prevState: IEventOrdersState = {
      ...initialEventOrdersState,
      paidOrders: prevPaidOrders,
      unpaidOrders: prevUnpaidOrders
    };

    const expectedNewState: IEventOrdersState = {
      ...initialEventOrdersState,
      paidOrders: [...prevPaidOrders.filter(o => !o.checked)],
      unpaidOrders: [...prevUnpaidOrders, ...prevPaidOrders.filter(o => o.checked)]
    };
    const newState: IEventOrdersState = reducerEventOrders(prevState, moveCheckedOrdersToUnpaid());
    expect(newState).toEqual(expectedNewState);
  });
});
