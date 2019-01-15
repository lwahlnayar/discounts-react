DROP TABLE IF EXISTS retailers;

CREATE TABLE retailers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  quality VARCHAR(5) NOT NULL,
  active_vouchers INT NOT NULL,
  published BOOLEAN NOT NULL,
  indexed BOOLEAN NOT NULL,
  affiliate_network VARCHAR(300),
  KW1 VARCHAR(100) NOT NULL,
  KW2 VARCHAR(100),
  KW3 VARCHAR(100),
  KW4 VARCHAR(100),
  url VARCHAR(100) NOT NULL
);


INSERT INTO retailers (name, quality, active_vouchers, published, indexed, KW1, url) VALUES (
    'Zalando',
    'AAA',
    5,
    'no',
    'no',
    'zalando promo code',
    'zalando-promo-code'
);
