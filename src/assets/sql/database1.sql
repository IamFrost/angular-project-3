DROP SCHEMA IF EXISTS schema1;

CREATE SCHEMA schema1;

CREATE SEQUENCE accessid_seq;
CREATE TABLE schema1.access_1
  (
     accessid     INT NOT NULL DEFAULT NEXTVAL('accessid_seq'),
     username     VARCHAR(255),
     menu_1_id    INT,
     submenu_1_id INT
  );

CREATE SEQUENCE submenu_1_id_seq;
CREATE TABLE schema1.access_submenu_1
  (
     submenu_1_id   INT NOT NULL DEFAULT NEXTVAL('submenu_1_id_seq'),
     submenu_1_name VARCHAR(255),
     menu_1_id      INT
  );

CREATE SEQUENCE menu_1_id_seq;
CREATE TABLE schema1.access_menu_1
  (
     menu_1_id   INT NOT NULL DEFAULT NEXTVAL('menu_1_id_seq'),
     menu_1_name VARCHAR(255)
  );

CREATE SEQUENCE purchase_id_seq;
CREATE TABLE schema1.purchase
  (
     purchase_id   INT NOT NULL DEFAULT NEXTVAL('purchase_id_seq'),
     item_name     VARCHAR(255),
     item_quantity FLOAT,
     item_rate     FLOAT,
     item_date     DATE,
     item_id       INT
  );

CREATE SEQUENCE privilege_id_seq;
CREATE TABLE schema1.privilege
  (
     privilege_id   INT NOT NULL DEFAULT NEXTVAL('privilege_id_seq'),
     privilege_name VARCHAR(255),
     username       VARCHAR(255)
  );

CREATE SEQUENCE userid_seq;
CREATE TABLE schema1.login_1
  (
     userid     INT NOT NULL DEFAULT NEXTVAL('userid_seq'),
     username   VARCHAR(255),
     email      VARCHAR(255),
     password_1 VARCHAR(255)
  );

INSERT INTO schema1.access_1
            (accessid,
             username,
             menu_1_id,
             submenu_1_id)
VALUES     (1,
            'suman',
            1,
            1);

INSERT INTO schema1.access_1
            (accessid,
             username,
             menu_1_id,
             submenu_1_id)
VALUES     (2,
            'rony',
            2,
            4);

INSERT INTO schema1.access_1
            (accessid,
             username,
             menu_1_id,
             submenu_1_id)
VALUES     (3,
            'rony',
            3,
            19);

INSERT INTO schema1.access_1
            (accessid,
             username,
             menu_1_id,
             submenu_1_id)
VALUES     (4,
            'rony',
            2,
            3);

INSERT INTO schema1.access_1
            (accessid,
             username,
             menu_1_id,
             submenu_1_id)
VALUES     (5,
            'rony',
            4,
            23);

INSERT INTO schema1.access_1
            (accessid,
             username,
             menu_1_id,
             submenu_1_id)
VALUES     (6,
            'alex',
            5,
            31);

INSERT INTO schema1.access_1
            (accessid,
             username,
             menu_1_id,
             submenu_1_id)
VALUES     (7,
            'alex',
            4,
            28);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (1,
            'Create User',
            1);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (2,
            'User Access',
            1);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (3,
            'Accounting Head Entry',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (4,
            'Buyer Ledger',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (5,
            'Contra Voucher Entry',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (6,
            'General Ledger',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (7,
            'Item Ledger',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (8,
            'Ledger Book',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (9,
            'Open Balance for Buyer',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (10,
            'Open Balance for Supplier',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (11,
            'Receive Payment',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (12,
            'Supplier Ledger',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (13,
            'Voucher Entry',
            2);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (14,
            'Buyer',
            3);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (15,
            'Buyer List',
            3);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (16,
            'MR Search',
            3);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (17,
            'Sale Entry',
            3);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (18,
            'Sale Product Search',
            3);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (19,
            'Buyer Ledger',
            3);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (20,
            'Sale Return Entry',
            3);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (21,
            'Card Entry',
            4);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (22,
            'Damage Adjust',
            4);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (23,
            'Item Entry',
            4);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (24,
            'Item Search',
            4);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (25,
            'Opening Balance',
            4);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (26,
            'Opening Quantity',
            4);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (27,
            'Stock Position',
            4);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (28,
            'Unit Entry',
            4);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (29,
            'Purchase Chalan',
            5);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (30,
            'Purchase Edit',
            5);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (31,
            'Purchase Entry',
            5);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (32,
            'Purchase Product Search Details',
            5);

INSERT INTO schema1.access_submenu_1
            (submenu_1_id,
             submenu_1_name,
             menu_1_id)
VALUES     (33,
            'Supplier Info Entry',
            5);

INSERT INTO schema1.access_menu_1
            (menu_1_id,
             menu_1_name)
VALUES     (1,
            'ADMIN');

INSERT INTO schema1.access_menu_1
            (menu_1_id,
             menu_1_name)
VALUES     (2,
            'ACCOUNTS');

INSERT INTO schema1.access_menu_1
            (menu_1_id,
             menu_1_name)
VALUES     (3,
            'SALE');

INSERT INTO schema1.access_menu_1
            (menu_1_id,
             menu_1_name)
VALUES     (4,
            'INVENTORY');

INSERT INTO schema1.access_menu_1
            (menu_1_id,
             menu_1_name)
VALUES     (5,
            'RECEIVED GOODS');

INSERT INTO schema1.purchase
            (purchase_id,
             item_name,
             item_quantity,
             item_rate,
             item_date,
             item_id)
VALUES     (1,
            'pencil',
            20,
            5.5,
            '2020-05-09',
            1000);

INSERT INTO schema1.purchase
            (purchase_id,
             item_name,
             item_quantity,
             item_rate,
             item_date,
             item_id)
VALUES     (2,
            'pen',
            10,
            5.5,
            '2020-04-04',
            1001);

INSERT INTO schema1.purchase
            (purchase_id,
             item_name,
             item_quantity,
             item_rate,
             item_date,
             item_id)
VALUES     (3,
            'rubber',
            5,
            5.5,
            '2019-01-01',
            1002);

INSERT INTO schema1.privilege
            (privilege_id,
             privilege_name,
             username)
VALUES     (1,
            'admin',
            'a');

INSERT INTO schema1.login_1
            (userid,
             username,
             email,
             password_1)
VALUES     (1,
            'a',
            'a@a.a',
            'a');

INSERT INTO schema1.login_1
            (userid,
             username,
             email,
             password_1)
VALUES     (2,
            'rony',
            'rony@mycompany.com',
            'a');

INSERT INTO schema1.login_1
            (userid,
             username,
             email,
             password_1)
VALUES     (3,
            'alex',
            'alex@thatcompany.com',
            'a');

INSERT INTO schema1.login_1
            (userid,
             username,
             email,
             password_1)
VALUES     (4,
            'b',
            'b@b.b',
            'b');
