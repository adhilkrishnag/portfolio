import 'dart:io';

void main() async {
  final port = 8080;
  final server = await HttpServer.bind(InternetAddress.loopbackIPv4, port);
  print('Portfolio preview server running at: http://localhost:$port/');

  final mimeTypes = {
    'html': 'text/html; charset=UTF-8',
    'js': 'application/javascript; charset=UTF-8',
    'css': 'text/css; charset=UTF-8',
    'json': 'application/json; charset=UTF-8',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'svg': 'image/svg+xml',
    'txt': 'text/plain; charset=UTF-8',
    'xml': 'application/xml; charset=UTF-8',
    'pdf': 'application/pdf',
  };

  await for (HttpRequest req in server) {
    var path = req.uri.path;
    if (path == '/' || path.isEmpty) {
      path = '/index.html';
    }
    
    final relativePath = path.startsWith('/') ? path.substring(1) : path;
    final file = File(relativePath);

    if (await file.exists()) {
      final ext = path.split('.').last.toLowerCase();
      req.response.headers.contentType = ContentType.parse(mimeTypes[ext] ?? 'application/octet-stream');
      req.response.headers.set('Access-Control-Allow-Origin', '*');
      if (ext == 'pdf') {
        final filename = path.split('/').last;
        req.response.headers.set('Content-Disposition', 'attachment; filename="$filename"');
      }
      await req.response.addStream(file.openRead());
    } else {
      req.response.statusCode = HttpStatus.notFound;
      req.response.write('404 Not Found: $path');
    }
    await req.response.close();
  }
}
