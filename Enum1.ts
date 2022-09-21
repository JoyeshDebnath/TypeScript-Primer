//Enum in TypeScript

enum OrderStatus {
	SHIPPED,
	DELIVERED,
	ORDERED,
	RETURNED,
} //enum order status

function myStatus(status: OrderStatus): boolean {
	return status === OrderStatus.SHIPPED;
}

console.log(myStatus(OrderStatus.DELIVERED));
