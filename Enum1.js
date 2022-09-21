//Enum in TypeScript
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["SHIPPED"] = 0] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 1] = "DELIVERED";
    OrderStatus[OrderStatus["ORDERED"] = 2] = "ORDERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {})); //enum order status
function myStatus(status) {
    return status === OrderStatus.SHIPPED;
}
console.log(myStatus(OrderStatus.DELIVERED));
