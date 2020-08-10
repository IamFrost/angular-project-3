create database items;

create table accessmenu1
(
	menu1id int,
	menu1name varchar(255)
);

insert into accessmenu1(menu1id,menu1name) values(1,'ADMIN');
insert into accessmenu1(menu1id,menu1name) values(2,'ACCOUNTS');
insert into accessmenu1(menu1id,menu1name) values(3,'SALE');
insert into accessmenu1(menu1id,menu1name) values(4,'INVENTORY');
insert into accessmenu1(menu1id,menu1name) values(5,'RECEIVED GOODS');

create table accesssubmenu1
(
	submenu1id int,
	submenu1name varchar(255),
	menu1name varchar(255)
);

insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(1,'Create User',1);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(2,'User Access',1);

insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(3,'Accounting Head Entry',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(4,'Buyer Ledger',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(5,'Contra Voucher Entry',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(6,'General Ledger',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(7,'Item Ledger',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(8,'Ledger Book',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(9,'Open Balance for Buyer',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(10,'Open Balance for Supplier',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(11,'Receive Payment',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(12,'Supplier Ledger',2);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(13,'Voucher Entry',2);

insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(14,'Buyer',3);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(15,'Buyer List',3);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(16,'MR Search',3);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(17,'Sale Entry',3);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(18,'Sale Product Search',3);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(19,'Buyer Ledger',3);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(20,'Sale Return Entry',3);

insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(21,'Card Entry',4);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(22,'Damage Adjust',4);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(23,'Item Entry',4);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(24,'Item Search',4);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(25,'Opening Balance',4);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(26,'Opening Quantity',4);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(27,'Stock Position',4);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(28,'Unit Entry',4);

insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(21,'Purchase Chalan',5);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(22,'Purchase Edit',5);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(23,'Purchase Entry',5);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(24,'Purchase Product Search Details',5);
insert into accesssubmenu1(submenu1id,submenu1name,menu1name) values(25,'Supplier Info Entry',5);





create table usersec(
	userid varchar(255),
	mainmenu varchar(255),
	menuname varchar(255)
);

insert into usersec values('rony','Accounting Head Entry','ACCOUNTS');
insert into usersec values('suman','Create User','ADMIN');
insert into usersec values('rony','Card Entry','INVENTORY');
insert into usersec values('rony','Purchase Product Search Details','RECEIVED GOODS');
insert into usersec values('rony','Ledger Book','ACCOUNTS');
insert into usersec values('alex','Unit Entry','INVENTORY');




create table logins
(
  id SERIAL
	username varchar(255),
	email varchar(255),
	password1 varchar(255),
  privilege varchar(255)
);

insert into logins values('a','a@a.a','a','admin');
insert into logins values('rony','rony@mycompany.com','a','user');
insert into logins values('alex','alex@thatcompany.com','a','user');
insert into logins values('b','b@b.b','b','user');



create table purchases
(
	item_id int unique,
	item_name varchar(255),
	item_quantity float,
	item_rate float,
	item_purchase_date date
);

insert into purchases values(1,'pencil',20,5.5,'2020-05-09');
insert into purchases values(2,'pen',10,5.5,'2020-04-04');
insert into purchases values(3,'rubber',5,5.5,'2019-01-01');
