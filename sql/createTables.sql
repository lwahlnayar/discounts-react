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
    0,
    'no',
    'no',
    'zalando promo code',
    'zalando-promo-code'
);

INSERT INTO retailers (name, quality, active_vouchers, published, indexed, KW1, url) VALUES (
    'Amazon',
    'AAA',
    0,
    'no',
    'no',
    'amazon discount code',
    'amazon-promo-code'
);

INSERT INTO retailers (name, quality, active_vouchers, published, indexed, KW1, url) VALUES (
    'GoDaddy',
    'AAA',
    0,
    'no',
    'no',
    'godaddy discount code',
    'godaddy-discount-code'
);

INSERT INTO retailers (name, quality, active_vouchers, published, indexed, KW1, url) VALUES (
    'Vueling',
    'AAA',
    0,
    'no',
    'no',
    'vueling promo code',
    'vueling-promo-code'
);
