-- manufacturer SCHEMA
CREATE TABLE manufacturer (
  id_medicine int(20) PRIMARY KEY NOT NULL AUTOINCREMENT,
  med_name varchar(255) NOT NULL,
  location TEXT,
  manufacturer_name VARCHAR(255) NOT NULL,
  date_made TIMESTAMP DEFAULT current_timestamp,
  date_distributed TIMESTAMP DEFAULT current_timestamp,
  meds_use TEXT,
)

-- sahpra table
CREATE TABLE Sahpra (
    id_medicine int PRIMARY KEY NOT NULL,
    staff_number int(20),
    received timestamp DEFAULT CURRENT_TIMESTAMP,
    approved timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_approved BOOLEAN DEFAULT TRUE,
    CONSTRAINTS FK_sahpra_medicine FOREIGN KEY (id_medicine) REFERENCES manufacturer(id_medicine)
);

-- retailer/ clinic
CREATE TABLE RetailerClinic (
    id_medicine int(20),
    name varchar(255),
    date timestamp DEFAULT CURRENT_TIMESTAMP,
    purpose TEXT,
    CONSTRAINT fk_id_medicine_retailer_clinic FOREIGN KEY (id_medicine) REFERENCES manufacturer(id_medicine)
);

-- warehouses
CREATE TABLE Warehouse (
    id_medicine int(20),
    name varchar(255),
    date timestamp DEFAULT CURRENT_TIMESTAMP,
    dispatched TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_id_medicine_warehouse FOREIGN KEY (id_medicine) REFERENCES manufacturer(id_medicine)
);