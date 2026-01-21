export declare const Role: {
    readonly CUSTOMER: "CUSTOMER";
    readonly EVENT_ORGANIZER: "EVENT_ORGANIZER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const OrderStatus: {
    readonly WAITING_PAYMENT: "WAITING_PAYMENT";
    readonly WAITING_ADMIN_CONFIRMATION: "WAITING_ADMIN_CONFIRMATION";
    readonly DONE: "DONE";
    readonly REJECTED: "REJECTED";
    readonly EXPIRED: "EXPIRED";
    readonly CANCELED: "CANCELED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
//# sourceMappingURL=enums.d.ts.map