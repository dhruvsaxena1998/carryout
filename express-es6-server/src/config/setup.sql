-- @block
create database carryout;
-- @block 
use carryout;
-- @block
create table if not exists item (
    id int primary key auto_increment,
    name varchar(255) not null,
    slug varchar(255) not null,
    price decimal(10, 2) not null unique,
    currentqty int not null,
    defaultqty int not null,
    maxqty int default 1
);
-- @block
create table if not exists menu (
    id int primary key auto_increment,
    name varchar(255) not null,
    description text,
    price decimal(10, 2) not null
);
-- @block
create table if not exists media (
    id int primary key auto_increment,
    menu_id int not null,
    fieldname text not null,
    encoding varchar(50) not null,
    mimetype varchar(50) not null,
    filename text not null,
    size bigint not null,
    path text not null,
    url text not null,
    foreign key (menu_id) references menu(id)
);