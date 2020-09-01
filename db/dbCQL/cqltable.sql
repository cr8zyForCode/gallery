

CREATE KEYSPACE properties WITH replication =
  {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 1};

CREATE TABLE properties.property (
  id int,
  small_description text,
  star_rating number,
  review_total number,
  superhost boolean,
  city text,
  state_province text,
  country text,
  PRIMARY KEY (id)
);

CREATE TABLE properties.images_by_property (
  id int,
  property_id int,
  url text,
  small_description text,
  grouping int,
  PRIMARY KEY (property_id)
  AND CLUSTERING ORDER BY (order ASC)
);

--- add cluster for order
--- AND CLUSTERING ORDER BY (order ASC)