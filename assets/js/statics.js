document.getElementById("header").innerHTML = `
    <h1 id="logo"><a href="index.html">TMD</a></h1>
    
    <nav id="nav">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="https://texasmachinedesign.zendesk.com">Support</a></li>
            <li><a id="models" onClick=modelMenu()>Models</a>
                <ul id="menu">
                    <li><a href="lpx.html">LPX</a></li>
                    <li><a href="rpx.html">RPX</a></li>
                    <li><a href="sbx.html">SBX</a></li>
                    <li><a href="autosaw.html">AutoSaw</a></li>
                </ul>
            <li><a href="#five" class="button primary scrolly">Contact</a></li>
        </ul>
    </nav>
`
function modelMenu() {
        var list = document.getElementById("menu");
    
        if (list.style.display == "none"){
            list.style.display = "inline";
        }else{
            list.style.display = "none";
        }
    }

modelMenu(); //Calling the function to get it loaded, saving you a click.

document.getElementById("five").innerHTML = `
    <div class="container">
        <header>
            <h2>Any question, any time.</h2>
            <p>Current customers please use the <a href="https://texasmachinedesign.zendesk.com"><strong>support</strong></a> link to submit parts or service requests.</p>
        </header>
            
        <div class="box alt">
            <form class="cta" method="post" data-netlify="true" onSubmit="submit">
                <div class="col-8 col-12-xsmall pad1">
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
                </div>
                <div class="col-8 col-12-xsmall pad1">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
                </div>
                <div class="col-8 col-12-xsmall pad1">
                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required>
                </div>
                <div class="col-8 col-12-xsmall pad1">
                    <textarea class="form-control" id="message" name="message" placeholder="Your Message" required></textarea>
                </div>
                <div class="gtr col-8 col-12-xsmall mar1">
                    <input type="submit" value="Contact Us" class="button primary"/>
                </div>
            </form>
        </div>
    </div>
`
document.getElementById("footer").innerHTML = `
<ul class="icons">
    <li><a href="https://www.facebook.com/texasmachinedesign" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
    <!-- <li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li> -->
    <li><a href="https://twitch.tv/texasmachinedesign" class="icon brands alt fa-twitch"><span class="label">Twitch</span></a></li>
    <li><a href="mailto:info@texasmachinedesign.com" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
</ul>

<ul class="copyright">
    <li>&copy; TMD, LLC. All rights reserved. +1.512.772.4411</li><li>Design: <a href="http://html5up.net">HTML5 UP</a> and <a href="https://rubrnek.netlify.app">RUBRNEK</a></li>
</ul>
`