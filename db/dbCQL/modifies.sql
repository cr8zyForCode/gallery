-- LOAD CSV FILE INTO CSQL
COPY table_name [ ( column_list ) ]
  FROM 'file_name'[ , 'file2_name', ... ] | STDIN
  [ WITH option = 'value' [ AND ... ] ]

  COPY gallery.properties FROM '/Users/luna/Documents/HACKREACTOR/HRSF129/SDC/gallery/db/dataGenerators/propertiesData.csv' WITH DELIMITER=',' AND HEADER=TRUE;