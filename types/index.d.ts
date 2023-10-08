import { Address } from './Address'
import { Customer } from './Customer'
import { Email } from './Email'
import { Invoice } from './Invoice'
import { LineItem } from './LineItem'
import { Phone } from './Phone'
import { Product } from './Product'
  
interface EntityTypes  {
  Address: Address
    Customer: Customer
    Email: Email
    Invoice: Invoice
    LineItem: LineItem
    Phone: Phone
    Product: Product
}
  
export { EntityTypes, Address, Customer, Email, Invoice, LineItem, Phone, Product }