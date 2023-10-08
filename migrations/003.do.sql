
CREATE TABLE line_items (
id INTEGER PRIMARY KEY,
product_id INT NOT NULL,
invoice_id INT NOT NULL,
CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products(id),
CONSTRAINT fk_invoice_id FOREIGN KEY (invoice_id) REFERENCES invoices(id));

ALTER TABLE customers
ADD COLUMN address_id INT;

ALTER TABLE customers
ADD COLUMN phone_id INT;

ALTER TABLE customers
ADD COLUMN email_id INT;

ALTER TABLE customers
ADD CONSTRAINT fk_address_id FOREIGN KEY (address_id) REFERENCES addresses(id);

ALTER TABLE customers
ADD CONSTRAINT fk_phone_id FOREIGN KEY (phone_id) REFERENCES phones(id);

ALTER TABLE customers
ADD CONSTRAINT fk_email_id FOREIGN KEY (email_id) REFERENCES emails(id);

ALTER TABLE invoices
ADD COLUMN customer_id INT;

ALTER TABLE invoices
ADD CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customers(id);
