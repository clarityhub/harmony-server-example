#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE DATABASE "clarity_harmony_development";
  CREATE DATABASE "clarity_harmony_test";

  GRANT ALL PRIVILEGES ON DATABASE clarity_harmony_development to postgres;
  GRANT ALL PRIVILEGES ON DATABASE clarity_harmony_test to postgres;
EOSQL
