DROP TABLE IF EXISTS vouchers;
DROP TABLE IF EXISTS retailers;

CREATE TABLE retailers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL UNIQUE,
  quality VARCHAR(5) NOT NULL,
  published BOOLEAN NOT NULL,
  indexed BOOLEAN NOT NULL,
  affiliate_network VARCHAR(300),
  KW1 VARCHAR(100) NOT NULL,
  KW2 VARCHAR(100),
  KW3 VARCHAR(100),
  KW4 VARCHAR(100),
  url VARCHAR(100) NOT NULL,
  static_content_top VARCHAR(350),
  static_content_left VARCHAR(500),
  static_content_right VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vouchers(
  id SERIAL PRIMARY KEY,
  title VARCHAR (150) NOT NULL,
  description VARCHAR(250) NOT NULL,
  type VARCHAR(4) NOT NULL,
  retailer_id INT REFERENCES retailers(id) NOT NULL,
  retailer_name VARCHAR(200) REFERENCES retailers(name) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO retailers (name, quality, published, indexed, KW1, url) VALUES (
    'Zalando',
    'AAA',
    'no',
    'no',
    'zalando promo code',
    'zalando-promo-code'
);

INSERT INTO retailers (name, quality, published, indexed, KW1, url) VALUES (
    'Amazon',
    'AAA',
    'no',
    'no',
    'amazon discount code',
    'amazon-promo-code'
);

INSERT INTO retailers (name, quality, published, indexed, KW1, url) VALUES (
    'GoDaddy',
    'AAA',
    'no',
    'no',
    'godaddy discount code',
    'godaddy-discount-code'
);

INSERT INTO retailers (name, quality, published, indexed, KW1, url) VALUES (
    'Vueling',
    'AAA',
    'no',
    'no',
    'vueling promo code',
    'vueling-promo-code'
);

-- vouchers
INSERT INTO vouchers (title, description, type, retailer_name, retailer_id) VALUES (
  '50% discount code on all shoes',
  'Get your Zalando discount code for all shoes in the Zalando store!',
  'Code',
  'Zalando',
  1
);

INSERT INTO vouchers (title, description, type, retailer_name, retailer_id) VALUES (
  '25% off discount code on yellow socks!',
  'Looking for yellow socks! We offer you a code of 25% Zalando discount for all yellow socks!',
  'Code',
  'Zalando',
  1
);
