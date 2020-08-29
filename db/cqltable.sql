

CREATE KEYSPACE properties WITH replication =
  {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 1};

CREATE TABLE properties.property (
  id int,
  description text,
  starRating number,
  reviewTotal number,
  superhost boolean,
  location text,
  PRIMARY KEY (id)
);

CREATE TABLE properties.images_by_property (
  id int,
  property_id int,
  url text,
  description text,
  order int,
  PRIMARY KEY (property_id)
  AND CLUSTERING ORDER BY (order ASC)
);

--- add cluster for order
--- AND CLUSTERING ORDER BY (order ASC)