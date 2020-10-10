## 1. URL contains what? What is the function of each part of the URL?
> ```URL => Uniform Resource Locator```

> **Hosting:**
>> Means that all the web pages and their supporting files are available on that computer. The web server will send any web page from the website it is hosting to any user's browser, per user request.
>
> **Perfect Explanation of Webpage and Web Server:**
>> Don't confuse websites and web servers. For example, if you hear someone say, "My website is not responding", it actually means that the web server is not responding and therefore the website is not available. More importantly, since a web server can host multiple websites, the term web server is never used to designate a website, as it could cause great confusion. In our previous example, if we said, "My web server is not responding", it means that multiple websites on that web server are not available.
>
**Read Articles Below, Helpful a Lot:**
1. [How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)
2. [What is the difference between webpage, website, web server, and search engine?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines)
3. [What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
4. [What are hyperlinks? The concepts behind links on the web.](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_hyperlinks)
5. [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

<img src="imgs/URL_components.png" width="500" alt="URL Components">
<img src="imgs/URL_Example.png" width="500" alt="URL Example">

## 2. What the function of DNS? how to use ***nslookup*** command?
> The domain name system resolves the names of internet sites with their underlying IP addresses adding efficiency and even security in the process.

> Think of DNS like your smartphone's contact list, which matches people's name with their phone numbers and email addresses. Then multiply that contact list by everyone else on the planet.
> Example:
> - ***nslookup  baidu.com***
>   - Server:	192.168.0.1  Address:	192.168.0.1#53
>   - Non-authoritative answer:
>     - Name:	baidu.com Address: 220.181.38.148
>     - Name:	baidu.com Address: 39.156.69.79
> - ***nslookup  google.com***
>   - Server:		192.168.0.1 Address:	192.168.0.1#53
>   - Non-authoritative answer:
>     - Name:	google.com Address: 172.217.5.14
> - ***nslookup  github.com***
>   - Server:		192.168.0.1 Address:	192.168.0.1#53
>   - Non-authoritative answer:
>     - Name:	github.com Address: 140.82.112.4
> - ***nslookup  yueran-yu.github.io***
>   - SServer:		192.168.0.1 Address:	192.168.0.1#53
>   - Non-authoritative answer:
>     - Name:	yueran-yu.github.io Address: 185.199.110.153
>     - Name:	yueran-yu.github.io Address: 185.199.108.153
>     - Name:	yueran-yu.github.io Address: 185.199.109.153
>     - Name:	yueran-yu.github.io Address: 185.199.111.153
>

## 3. What the IP used for? How to use ping?
  > An IP address allows information to be sent and received by the correct parties,
  which means they can also be used to track down a user's physical location.
> - Some special IP
>   - 127.0.0.1 represent your laptop itself
>   - localhost: this is a hostname that refers to the current computer used to access it.
>   - 0.0.0.0 doesn't represent any devices.

## 4. What is Domain, what's the type of Domain?
  > A domain name is your website name. A domain name is the address where Internet users can access your website. A domain name is used for finding and identifying computers on the Internet. Computers use IP addresses, which are a series of number. However, it is difficult for humans to remember strings of numbers. Because of this, domain names were developed and used to identify entities on the Internet rather than using IP addresses.

####  Knowledge Points
> - A domain name can correspond to different IPs.
>   - This is called load balance to prevent one machine from breaking down.
> - One IP corresponds to a different domain name.
>   - This is called a Shared host, and poor developers do it.


<img src="imgs/Domain_name.png" width="500" alt="Domain Name">
