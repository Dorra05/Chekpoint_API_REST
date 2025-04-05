-- Create CUSTOMER table
CREATE TABLE CUSTOMER (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50) NOT NULL,
    Address VARCHAR2(100),
    Phone VARCHAR2(20)
);

-- Create PRODUCT table
CREATE TABLE PRODUCT (
    ProductID NUMBER PRIMARY KEY,
    Name VARCHAR2(50) NOT NULL,
    Price NUMBER(10,2) CHECK (Price > 0)
);

-- Create ORDERS table
CREATE TABLE ORDERS (
    OrderID NUMBER PRIMARY KEY,
    CustomerID NUMBER NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES CUSTOMER(CustomerID)
);

-- Create ORDER_DETAILS table
CREATE TABLE ORDER_DETAILS (
    OrderID NUMBER,
    ProductID NUMBER,
    Quantity NUMBER CHECK (Quantity > 0),
    PRIMARY KEY (OrderID, ProductID),
    FOREIGN KEY (OrderID) REFERENCES ORDERS(OrderID),
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID)
);

-- Add Category column to PRODUCT table
ALTER TABLE PRODUCT ADD Category VARCHAR2(20);

-- Add OrderDate column to ORDERS table with default value as SYSDATE
ALTER TABLE ORDERS ADD OrderDate DATE DEFAULT SYSDATE;