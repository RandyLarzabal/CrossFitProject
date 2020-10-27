let CONFIG = {};

//Make this global to use all over the application

CONFIG.node_env = process.env.NODE_ENV;
CONFIG.root_api = process.env.ROOT_API;
CONFIG.port = process.env.PORT;

CONFIG.format_logs = process.env.FORMAT_LOGS;

CONFIG.db_dialect = process.env.DB_DIALECT
CONFIG.db_host = process.env.DB_HOST
CONFIG.db_port = process.env.DB_PORT
CONFIG.db_name = process.env.DB_NAME
CONFIG.db_user = process.env.DB_USER
CONFIG.db_password = process.env.DB_PASSWORD

CONFIG.root_upload_folder = process.env.ROOT_UPLOAD_FOLDER;

module.exports = CONFIG;

