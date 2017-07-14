# Alt-Svc demo \#1

This is a simple demo of load balancing HTTP requests using [Alt-Svc](https://tools.ietf.org/html/rfc7838). 

## Status
This is a quick and dirty demo - no finesse whatsoever. You're free to use it as per the license terms but you might experience some pain. If it's useful and if time permits, i'll tidy this up and make it simpler to use.

## Setup
You  need to: 

1. Create 2 x HTTP/2-capable web servers, on separate IP addresses or ports (i.e. it could be the same physical/virtual server for both)
2. Set [./primary](./primary) as the web root of one server and [./secondary](./secondary) as the web root of the other
3. Configure the web server which hosts [./primary](./primary) to send an `Alt-Svc` HTTP response header which points to the web server IP address/port hosting [./secondary](./secondary) and with a max-age (`ma`) of your choosing (usually ~60 sec is a decent starting point)
4. [Optional] You might want to configure each web server to also send a uniquely identifiable HTTP response header to ensure which responses come from which server

When you visit the primary web server in a web-browser, you should see (initially) that responses come from your primary server and then there will be a swap-over to the secondary once the HTTP/2 session is brought up. 

NOTE: At the time of writing, only Firefox supports `Alt-Svc` - although Chrome work is in progress.


## License
[MIT](./license.md)