-- @block { genesis }
create database carryout;

-- @block { use }
use carryout;

-- @block { media }
create table if not exists media (
  id int primary key auto_increment,
  fieldname varchar(255) not null,
  encoding varchar(255) not null,
  mimetype varchar(255) not null,
  filename text not null,
  size bigint not null,
  path text not null,
  url text not null
);

-- @block { user }
create table if not exists user (
  id int primary key auto_increment,
  name varchar(255),
  phone bigint not null unique,
  username varchar(255) not null unique,
  email varchar(255) not null unique,
  password text not null,
  media int,
  reset_token text,
  otp int,
  is_verified bool default false,
  foreign key (media) references media(id)
);

-- @block { addresses }
create table if not exists addresses (
  id int primary key auto_increment,
  user int not null,
  lat int,
  lng int,
  oneline text not null,
  region varchar(255) not null,
  state varchar(255) not null,
  zip int not null,
  country varchar(255) not null,
  foreign key (user) references user(id)
);

-- @block { menu }
create table if not exists menu (
  id int primary key auto_increment,
  name varchar(255) not null,
  slug varchar(255) not null unique,
  description text,
  price decimal(10,2) not null,
  media int not null,
  foreign key (media) references media(id)
);

-- @block { item }
create table if not exists item (
  id int primary key auto_increment,
  name varchar(255) not null,
  slug varchar(255) not null unique,
  price decimal(10,2) not null,
  defaultQty int not null,
  maxQty int default 1
);

-- @block { menu_items } -- { Menu has many items }
create table if not exists menu_items (
  id int primary key auto_increment,
  menu_id int not null,
  item_id int not null,
  category enum ('item', 'optional') not null,
  foreign key (menu_id) references menu(id),
  foreign key (item_id) references item(id)
);