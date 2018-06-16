// exports.root_url = "http://twolinks.herokuapp.com/";
exports.root_url = "http://localhost:5000/";

exports.min_vanity_length = 4;
exports.num_of_urls_per_hour = 50;

exports.get_query = 'SELECT * FROM urls WHERE segment = {SEGMENT}';
exports.add_query = 'INSERT INTO urls SET url = {URL}, segment = {SEGMENT}, ip = {IP}';
exports.check_url_query = 'SELECT * FROM urls WHERE url = {URL}';
exports.update_views_query = 'UPDATE urls SET num_of_clicks = {VIEWS} WHERE id = {ID}';
exports.insert_view = 'INSERT INTO stats SET ip = {IP}, url_id = {URL_ID}, referer = {REFERER}';
exports.check_ip_query = 'SELECT COUNT(id) as counted FROM urls WHERE datetime_added >= now() - INTERVAL 1 HOUR AND ip = {IP}';

exports.host = process.env.HOST;
exports.user = process.env.USER;
exports.password = process.env.PASSWORD;
exports.database = process.env.DATABASE;	