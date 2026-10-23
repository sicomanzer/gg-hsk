# server.py - Local Web Server with Auto Browser Launch for HSK 3 Master
import http.server
import socketserver
import webbrowser
import socket
import os
import sys

PORT = 8080

# Change directory to this script's directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return 'localhost'

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable aggressive caching for local testing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        # Keep terminal clean, only log errors
        if args and str(args[1]) >= '400':
            super().log_message(format, *args)

def run():
    port = PORT
    handler = QuietHandler

    for attempt in range(5):
        try:
            httpd = socketserver.TCPServer(('', port), handler)
            break
        except OSError:
            port += 1

    local_ip = get_local_ip()
    url = f"http://localhost:{port}"
    network_url = f"http://{local_ip}:{port}"

    print("=" * 64)
    print("   ยินดีต้อนรับสู่ HSK 3 Master (ระบบเตรียมสอบ HSK ระดับ 3)")
    print("=" * 64)
    print(f" * ใช้งานบนคอมพิวเตอร์เครื่องนี้: {url}")
    print(f" * ใช้งานบนมือถือ / แท็บเล็ตผ่าน Wi-Fi เดียวกัน: {network_url}")
    print("=" * 64)
    print(" กำลังเปิดเบราว์เซอร์อัตโนมัติ...")
    print(" (เมื่อเลิกใช้งาน สามารถกดปิดหน้าต่างนี้ได้เลยครับ)\n")

    webbrowser.open(url)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nกำลังปิดเซิร์ฟเวอร์เรียบร้อยครับ...")
        httpd.server_close()

if __name__ == '__main__':
    run()
