-- @block { insert into media }
INSERT INTO MEDIA
  (fieldname, encoding, mimetype, filename, size, path, url)
VALUES
  ("image", "7bit", "image/jpeg", "salad_0qz0oy1.jpg", 39565, '/uploads', '/uploads/salad_0qz0oy1.jpg'),
  ("image", "7bit", "image/jpeg", "thali1_iaa7ws.jpg", 31225, '/uploads', '/uploads/thali1_iaa7ws.jpg');

-- @block { insert into role }
INSERT INTO ROLE (name) VALUES ('admin'), ('employee'), ('customer');

-- @block { insert into item }
INSERT INTO ITEM 
  (name, slug, price, defaultQty, maxQty)
VALUES
  ('Mix Daal', 'mix-daal', 20, 1, 2),
  ('Mix Vegetable', 'mix-veg', 20, 1, 2),
  ('Salad', 'salad', 10, 1, 2),
  ('Chapatis', 'chapatis', 3, 6, 12),
  ('Fried Onions', 'fried-onions', 10, 0, 2);

-- @block { insert into menu }
INSERT INTO MENU
  (name, slug, description, price, media)
VALUES
  ('Thali 1', 'thali-1', 'Mix daal and mix veg', 58, 1),
  ('Thali 2', 'thali-2', 'Mix daal and mix veg and fried onions', 62, 1);

-- @block { insert into menu_items }
INSERT INTO MENU_ITEMS
  (menu_id, item_id, category)
VALUES
  (1,1, 'item'),
  (1,2, 'item'),
  (1,3, 'optional'),
  (1,5, 'optional'),
  (2,1, 'item'),
  (2,2, 'item'),
  (2,3, 'item'),
  (2,4, 'optional'),
  (2,5, 'item');