# Assignment-1 Solution </h1>
---
#### 1) What is a protocol stack, and how is it used in web development?

- Protocol stack means set of protocols are being used in the communication network and each protocol operates at a different layer.
- In web development, the protocol stack is crucial for facilitating communication between web servers and clients (browsers).
- There are different types of protocols such as, HTTP, HTTPS, TCP/IP, TELNET, FTP, so-on...

<table>
    <th colspan="5">TCP/IP stack</th>
    <tr>
        <th>Application layer</th>
        <td>HTTP</td>
        <td>HTTPS</td>
        <td>FTP</td>
        <td>DNS</td>
    </tr>
    <tr>
        <th>Transport layer</th>
        <td colspan='2'>TCP</td>
        <td colspan='2'>UDP</td>
    </tr>
    <tr>
        <th>Network layer</th>
        <td colspan='4'>IP(v4, v6)</td>
    </tr>
    <tr>
        <th>Link layer</th>
        <td colspan='2'>Ethernet</td>
        <td colspan='2'>Wireless LAN</td>
    </tr>
</table>



#### 2) What are the different types of web servers, and how do they differ in terms of functionality and performance?
- Web servers are specialized software or hardware systems that store, process and deliver web content like webpages, images, video files to client over internet.
- Types of webservers: Apache, Nginx, Microsoft Internet Information Services (IIS)...
- They differ in functionality, performance and compatibility with various operating systems and web development technologies.

#### 3) What is web hosting, and what are the different types of hosting services available for websites?

- web hosting means to provide storage space, resources and services required for a website or web application to be accessible on the internet
- Types of web hosting:
  - <b>Shared hosting:</b> 
    - Sharing resources like RAM, CPU and storage with multiple websites
    - Which makes it cost effective.
    - Best for small websites or blogs with low to moderate traffic.
  - <b>Virtual Private Server (VPS)hosting:</b>
    - physical server is devided in multiple virtual servers using virtualization technology.
    - So by this each server has its own dedicated resources.
    - VPS hosting is suitable for medium-sized websites or applications with moderate to high traffic, and for users who need more control over their hosting environment.
  - <b>Dedicated hosting</b>
    - provides the entire physical server.
    - provides maximum control, performance and security.
    - Dedicated hosting is best suited for large websites or applications with high traffic volumes, or for businesses that require a high level of security and control over their hosting environment.
  - <b>Cloud hosting</b>
    - uses a network of interconnected servers, resources and workload across multiple machines.
    - Highly scalable.
    - Cloud hosting is suitable for websites or applications with variable traffic or those that require the ability to scale resources quickly.
  - <b>Managed hosting</b>
    - hosting provider takes care of all technical aspects of running a website, such as server management, security, software updates, backups, and performance optimization.
    - Managed hosting is suitable for businesses that lack in-house technical expertise or want to focus on their core operations rather than dealing with the complexities of managing a server.

#### 4) What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

- Scalling means adding more resorcess to web server when server is in a need for extra resource.
- Scalling is very important for web application because when traffic incresse or some time operations requires more comutation power, scalling helps the web application being alive.

|Vertical scalling| Horizontal scalling|
|---|---|
|![explains Vertical scalling](./Images/vertical%20scalling.png)|![explains Horizontal scalling](./Images/Horizontal%20scalling.png)|
|Vertical scalling means on a same server we are upgrading resources like RAM, CPU...|Horizontal scalling means adding more server to the web application to cater more users.|
|Cost effectve.|Very costly.|
|1st preferance is given to Vertical scalling.| once we reach the limit in vertical scalling then we start implementing horizontal scalling.|


#### 5) What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?
- SEO is the process of improving a website's visibility and rankings on search engine results pages by making it more accessible, relevant, and user-friendly for both search engines and users.
- The goal of SEO is to attract organic (non-paid) traffic from search engines, such as Google, Bing, or Yahoo, by ensuring that the website appears higher in the search results for relevant keywords and phrases.
- <b>On-page SEO</b>
  - keyword research
  - Content optimization
  - Title tags
  - meta description 
  - heading tags
  - image optimization
- <b>Off-page SEO</b>
  - Link building
  - Social media promotion
  - Guest posting
- <b>Technical SEO</b>
  - site speed
  - mobile responsiveness
  - XML sitemaps
  - Robots.txt
  - SSL certificates
  - clean URLs
  - Schema Markup
