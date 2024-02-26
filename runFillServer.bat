@echo off
set /p "proxytype=Enter Proxy Type (socks4/socks5/http): "
set /p "servers=Enter Servers to fill (all/giga/crazy/virus or for multiple put a , without spaces aka crazy,giga): "
node fillServer.js %proxytype% %servers%
pause