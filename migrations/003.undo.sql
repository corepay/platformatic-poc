ALTER TABLE customers
DROP CONSTRAINT fk_address_id,
DROP CONSTRAINT fk_phone_id,
DROP CONSTRAINT fk_email_id,
DROP COLUMN address_id,
DROP COLUMN phone_id,
DROP COLUMN email_id;

ALTER TABLE invoices
DROP CONSTRAINT fk_customer_id,
DROP COLUMN customer_id;

ALTER TABLE line_items
DROP CONSTRAINT fk_product_id,
DROP CONSTRAINT fk_invoice_id;

DROP TABLE IF EXISTS line_items;