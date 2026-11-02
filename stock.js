<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RemyTCG - Exclusive Proxy Service</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        
        /* Smooth Scroll pour les ancres du menu */
        html { scroll-behavior: smooth; }
        
        body { font-family: 'Inter', sans-serif; background: #111111; color: #fff; margin: 0; padding: 0; line-height: 1.6; display: flex; flex-direction: column; min-height: 100vh; }
        
        /* Menu de Navigation Fixe */
        .top-nav { background: rgba(17, 17, 17, 0.95); padding: 15px 20px; text-align: center; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid #333; backdrop-filter: blur(5px); }
        .top-nav a { color: #fff; margin: 0 15px; text-decoration: none; font-weight: 700; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px; transition: color 0.2s; }
        .top-nav a:hover { color: #FFCB05; }

        /* Header & Logo */
        .header { background: linear-gradient(135deg, #FFCB05 0%, #d4a700 100%); padding: 50px 20px 80px 20px; text-align: center; color: #111; position: relative; }
        .logo-container { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 10px; }
        .logo-icon { width: 40px; height: 40px; }
        h1 { margin: 0; font-weight: 900; font-size: 3.5em; letter-spacing: -1.5px; text-transform: uppercase; }
        .subtitle { font-weight: 700; font-size: 1.2em; opacity: 0.9; max-width: 600px; margin: 10px auto 0 auto; }
        
        /* How it works Banner - ÉLARGI POUR PC */
        .intro-banner { max-width: 1200px; width: 90%; margin: -50px auto 40px auto; background: #1c1c1c; border: 2px solid #333; border-radius: 16px; padding: 30px; text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative; z-index: 10; scroll-margin-top: 80px; }
        .intro-banner h2 { color: #FFCB05; margin-top: 0; font-size: 1.5em; display: flex; align-items: center; gap: 10px; }
        .intro-banner p { color: #ddd; margin-bottom: 20px; font-size: 0.95em; }
        .intro-banner ul { color: #ddd; padding-left: 20px; margin-bottom: 25px; font-size: 0.95em; }
        .intro-banner li { margin-bottom: 10px; }
        .intro-banner strong { color: #fff; }
        .btn-main { display: inline-block; background: #FFCB05; color: #111; padding: 16px 30px; text-decoration: none; font-weight: 900; border-radius: 8px; font-size: 1.1em; transition: transform 0.2s, background 0.2s; text-align: center; width: calc(100% - 60px); max-width: 300px; box-sizing: border-box;}
        .btn-main:hover { background: #fff; transform: translateY(-2px); }

        /* Container - ÉLARGI POUR PC */
        .container { max-width: 1600px; width: 95%; margin: 0 auto; padding: 20px; flex-grow: 1; scroll-margin-top: 80px; box-sizing: border-box; }
        
        /* Filters */
        .filters { display: flex; gap: 15px; max-width: 800px; margin: 0 auto 40px auto; justify-content: center; flex-wrap: wrap;}
        .search-bar, .category-select { padding: 15px 25px; border-radius: 50px; border: 2px solid #333; background: #222; color: white; font-size: 1.1em; outline: none; transition: border-color 0.3s; }
        .search-bar { flex-grow: 1; min-width: 250px;}
        .category-select { cursor: pointer; appearance: none; padding-right: 45px; background-image: url('data:image/svg+xml;utf8,<svg fill="%23FFCB05" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>'); background-repeat: no-repeat; background-position: right 15px center; }
        .search-bar:focus, .category-select:focus { border-color: #FFCB05; }
        
        /* Grid - RÉAJUSTÉE POUR PLUS DE COLONNES */
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 25px; }
        .card { background: #1c1c1c; border-radius: 16px; overflow: hidden; border: 1px solid #333; transition: transform 0.2s, border-color 0.2s; display: flex; flex-direction: column; }
        .card:hover { transform: translateY(-5px); border-color: #FFCB05; }
        .card-img { width: 100%; height: 220px; object-fit: cover; border-bottom: 1px solid #333; background: #fff; }
        .card-content { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
        .category { font-size: 0.75em; color: #FFCB05; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; }
        .card h3 { margin: 10px 0; font-size: 1.3em; }
        .card p { color: #aaa; font-size: 0.9em; line-height: 1.5; flex-grow: 1; }
        .btn { background: #333; color: #fff; text-align: center; padding: 12px; text-decoration: none; font-weight: 700; border-radius: 8px; margin-top: 20px; transition: background 0.2s, color 0.2s; }
        .card:hover .btn { background: #FFCB05; color: #111; }

        /* Footer & Contact Section */
        .footer-contact { background: #151515; padding: 60px 20px; text-align: center; border-top: 1px solid #333; margin-top: 60px; scroll-margin-top: 50px;}
        .footer-contact h2 { color: #fff; font-size: 2.2em; margin: 0 0 15px 0; font-weight: 900; }
        .footer-contact p { color: #aaa; max-width: 600px; margin: 0 auto 30px auto; font-size: 1.1em; }
        .contact-links { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-bottom: 20px;}
        .contact-btn { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 700; transition: all 0.2s; border: 1px solid #333; color: #fff; background: #1c1c1c; font-size: 1em; cursor: pointer; font-family: inherit; }
        .contact-btn:hover { transform: translateY(-3px); }
        .insta-btn:hover { background: #E1306C; border-color: #E1306C; color: #fff; }
        .tiktok-btn:hover { background: #00f2fe; border-color: #00f2fe; color: #111; }
        .youtube-btn:hover { background: #FF0000; border-color: #FF0000; color: #fff; }
        .email-btn:hover { background: #FFCB05; border-color: #FFCB05; color: #111; }
    </style>
</head>
<body>
    <!-- Menu Navigation Fixe -->
    <nav class="top-nav">
        <a href="#setup">Setup Guide</a>
        <a href="#shop">Catalog</a>
        <a href="#contact">Contact</a>
    </nav>

    <div class="header">
        <div class="logo-container">
            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="12" y1="9" x2="12" y2="2"></line>
                <line x1="12" y1="22" x2="12" y2="15"></line>
            </svg>
            <h1>RemyTCG</h1>
        </div>
        <div class="subtitle">Your trusted proxy for 100% Authentic Simplified Chinese Pokémon TCG</div>
    </div>
    
    <div id="setup" class="intro-banner">
        <h2>⚠️ Step 1: Account Setup (Required)</h2>
        <p>To buy from the Chinese Taobao market at local prices without Western markups, you need a proxy account. <strong>Joyagoo is our official and secure partner.</strong></p>
        <ul>
            <li><strong>Exclusive Welcome Gift:</strong> Register via the link below to unlock up to <strong>1200 CNY (~$165 USD)</strong> in shipping coupons!</li>
            <li><strong>Local Prices:</strong> You only pay the true item price + transparent international shipping.</li>
            <li><strong>Guaranteed Authenticity:</strong> Do not search for products yourself. I personally vet and update every link in this catalog daily.</li>
        </ul>
        <div style="text-align: center;">
            <a href="https://joyagoo.com/register/?ref=301118558" class="btn-main" target="_blank">Register on Joyagoo Now</a>
        </div>
    </div>

    <div id="shop" class="container">
        <div class="filters">
            <input type="text" id="search" class="search-bar" placeholder="🔍 Search for a booster, a box..." onkeyup="filtrer()">
            <select id="category-filter" class="category-select" onchange="filtrer()">
                <option value="">All Categories</option>
            </select>
        </div>
        
        <div class="grid" id="catalogue"></div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="footer-contact">
        <h2>Connect With Us!</h2>
        <p>Reach out with any questions, custom orders, or B2B wholesale collaborations. We are here to help you source the best Simplified Chinese products.</p>
        
        <div class="contact-links">
            <!-- Instagram -->
            <a href="https://instagram.com/remy.tcg" target="_blank" class="contact-btn insta-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                @remy.tcg
            </a>
            
            <!-- TikTok -->
            <a href="https://tiktok.com/@remy_tcg" target="_blank" class="contact-btn tiktok-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path><path d="M15 8a4 4 0 1 0 0-4v16a4 4 0 0 1-4-4"></path><line x1="15" y1="4" x2="19" y2="4"></line></svg>
                @remy_tcg
            </a>

            <!-- YouTube -->
            <a href="https://youtube.com/@remytcg" target="_blank" class="contact-btn youtube-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                @remytcg
            </a>
        </div>

        <!-- Copy Email Button -->
        <div class="contact-links">
            <button onclick="copyEmail(this)" class="contact-btn email-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>contact.remytcg@gmail.com</span>
            </button>
        </div>
    </div>

    <!-- Script pour copier l'email -->
    <script>
        function copyEmail(button) {
            const email = "contact.remytcg@gmail.com";
            const textSpan = button.querySelector("span");
            
            navigator.clipboard.writeText(email).then(() => {
                const originalText = textSpan.innerText;
                textSpan.innerText = "Copied to clipboard! ✓";
                button.style.borderColor = "#4CAF50";
                button.style.color = "#4CAF50";
                
                setTimeout(() => {
                    textSpan.innerText = originalText;
                    button.style.borderColor = "";
                    button.style.color = "";
                }, 2500);
            });
        }
    </script>
    <script src="stock.js"></script>
</body>
</html>
