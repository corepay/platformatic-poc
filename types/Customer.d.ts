/**
 * Customer
 * A Customer
 */
declare interface Customer {
    id?: number;
    addressId?: number | null;
    emailId?: number | null;
    phoneId?: number | null;
    title: string;
}
export { Customer };
