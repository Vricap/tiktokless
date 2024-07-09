# tiktokless

**Cosume** Tiktok _without_ Tiktok.

## Usage

Add your wholesome or funny or important videos link to `Add`. Just make sure the url you copy is the one presented by tiktok as "copy link" -- this appear when you click "share" icon.
If not, my parser program which will parse the url to valid embed url link will likely broken lol.  

## But Why lol

I don't know. Have you ever, when the only think you want do when you open tiktok is just to see your liked videos; instead you trapped in your fyp for endless consuming? That is the reason i made this.

\*This is very simple program. No framewok used (exept Gin). It doesn't even use database. All rendering is done on server (SSR)

## Tip

It work best on phone. Just change the Gin server configuration to like this: `Router.run("0.0.0.0:<PORT>")`, then, to access the website on phone, see [this](https://www.linkedin.com/pulse/how-run-localhost-your-mobile-phone-step-by-step-guide-jide-a-/) tutorial. Since its an SSR, once you done load the website, you can kill the server and it still will work. Because all the data already get send to client -- now it will work just like static website (just don't add new video of course, since that will make an request to the server).  
You could `Add`, `Delete`, see `Previous` and `Next` video and you could `Indexing` videos.  

