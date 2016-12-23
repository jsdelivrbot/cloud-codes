cmd_Release/obj.target/pow.node := g++ -shared -pthread -rdynamic -m64  -Wl,-soname=pow.node -o Release/obj.target/pow.node -Wl,--start-group Release/obj.target/pow/pow.o -Wl,--end-group 
