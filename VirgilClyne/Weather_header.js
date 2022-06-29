var headers = $response.headers;

delete headers["If-None-Match"];

$done({ headers });