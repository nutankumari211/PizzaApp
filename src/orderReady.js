// Assuming you have an action creator like this in your actions file
export const orderReady = (orderId, readyTime) => ({
    type: 'ORDER_READY',
    payload: { orderId, readyTime },
  });
  
  // Dispatch this action where the order transitions to "Order Ready"
  store.dispatch(orderReady(orderId, new Date()));
  