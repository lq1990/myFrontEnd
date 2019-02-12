interface State {
  order: Order;

  cancelOrder();
  verifyPayment();
  shipOrder();
}

class Order {
  public cancelledOrderState: State;
  public paymentPendingState: State;
  public orderShippedState: State;
  public orderBeingPreparedState: State;
    
  public curState: State;

  constructor() {
      this.cancelledOrderState = new CancelledOrderState(this);
      this.paymentPendingState = new PaymentPendingState(this);
      this.orderShippedState = new OrderShippedState(this);
      this.orderBeingPreparedState = new OrderBeingPreparedState(this);
  }

  public setState(state: State) {
    this.curState = state;
  }

  /**
   * getState
   */
  public getState(): State {
    return this.curState;
  }
}

class PaymentPendingState implements State {
  order: Order;

  constructor(order: Order) {
      this.order = order;
  }
  
  cancelOrder() {
    console.log("取消为付款的订单！");
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayment() {
    console.log("付款确认，等待发货！")
    this.order.setState(this.order.orderBeingPreparedState);
  }
  shipOrder() {
    console.log("不能发货，因为付款还在进行中！")
  }
}

class CancelledOrderState implements State {
  order: Order;

  constructor(order: Order) {
      this.order = order;
  }
  
  cancelOrder() {
    console.log("订单已经被取消了！")
  }
  verifyPayment() {
    console.log("订单已经被取消了，不能付款！")
  }
  shipOrder() {
    console.log("订单已经被取消了，不能发货！")
  }
}

class OrderBeingPreparedState implements State {
  order: Order;

  constructor(order: Order) {
      this.order = order;
  }
  
  cancelOrder() {
    console.log("取消订单！")
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayment() {
    console.log("已经确认了付款！")

  }
  shipOrder() {
    console.log("现在发货！");
    this.order.setState(this.order.orderShippedState);
  }
}

class OrderShippedState implements State {
  order: Order;

  constructor(order: Order) {
      this.order = order;
  }
  
  cancelOrder() {
    console.log("不能取消，已经发货")
  }
  verifyPayment() {
    console.log("不能在此确认付款，已经发货")
  }
  shipOrder() {
    console.log("已经发货")
  }
}


let order = new Order();
order.getState().shipOrder();

console.log( (<any>order.getState()).constructor.name );