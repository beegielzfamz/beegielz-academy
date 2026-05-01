# beegielz-academy

<!DOCTYPE html>  <html lang="id" class="scroll-smooth">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>BEEGIELZ ACADEMY | Elite Strategic Community</title>  <!-- Google Fonts berdasarkan Brand Guide -->  
<link rel="preconnect" href="https://fonts.googleapis.com">  
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Montserrat:wght@200;300;400;600&display=swap" rel="stylesheet">  
  
<!-- Libraries -->  
<script src="https://unpkg.com/lucide@latest"></script>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>  

<!-- Tailwind dengan Custom Config sesuai Palet Warna -->  
<script src="https://cdn.tailwindcss.com"></script>  
<script>  
    tailwind.config = {  
        theme: {  
            extend: {  
                colors: {  
                    navy: '#0B1C2C',  
                    gold: '#C8A96A',  
                    champagne: '#E6C78A',  
                    dark: '#050505',  
                },  
                fontFamily: {  
                    serif: ['Cinzel', 'serif'],  
                    sans: ['Montserrat', 'sans-serif'],  
                },  
            }  
        }  
    }  
</script>  

<style>  
    body {   
        background-color: #050505;   
        color: #E2E8F0;   
        font-family: 'Montserrat', sans-serif;  
        overflow-x: hidden;  
    }  

    .font-cinzel { font-family: 'Cinzel', serif; }  

    .gold-text-gradient {  
        background: linear-gradient(to bottom, #E6C78A 0%, #C8A96A 50%, #B89045 100%);  
        -webkit-background-clip: text;  
        -webkit-text-fill-color: transparent;  
    }  

    .nav-link {  
        font-size: 10px;  
        letter-spacing: 0.3em;  
        text-transform: uppercase;  
        color: rgba(230, 199, 138, 0.6);  
        transition: all 0.3s ease;  
    }  
    .nav-link:hover { color: #E6C78A; }  

    .btn-apply {  
        background-color: #C8A96A;  
        color: #0B1C2C;  
        font-weight: 700;  
        letter-spacing: 0.1em;  
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);  
    }  
    .btn-apply:hover {  
        transform: translateY(-2px);  
        box-shadow: 0 10px 20px rgba(200, 169, 106, 0.3);  
    }  

    .value-card {  
        border: 1px solid rgba(200, 169, 106, 0.1);  
        background: linear-gradient(180deg, rgba(11, 28, 44, 0.2) 0%, rgba(5, 5, 5, 0) 100%);  
        transition: border 0.5s ease;  
    }  
    .value-card:hover { border-color: rgba(200, 169, 106, 0.5); }  

    .tier-card {  
        background: rgba(11, 28, 44, 0.3);  
        border: 1px solid rgba(200, 169, 106, 0.15);  
        transition: all 0.5s ease;  
    }  
    .tier-card:hover {  
        border-color: #C8A96A;  
        background: rgba(11, 28, 44, 0.5);  
        transform: translateY(-10px);  
    }  

    .reveal { opacity: 0; transform: translateY(30px); }  
      
    /* Custom Scrollbar */  
    ::-webkit-scrollbar { width: 5px; }  
    ::-webkit-scrollbar-track { background: #050505; }  
    ::-webkit-scrollbar-thumb { background: #C8A96A; }  
</style>

</head>  
<body class="antialiased">  <!-- Header / Navbar -->  
<nav class="fixed w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center bg-dark/80 backdrop-blur-md border-b border-gold/10">  
    <div class="flex items-center space-x-3">  
        <img src="file_00000000ed5471faacccdca844c02ccc.jpg" alt="Logo" class="w-8 h-8 rounded-full border border-gold/30">  
        <span class="font-cinzel text-sm font-bold tracking-[0.2em] text-gold">BEEGIELZ <span class="hidden md:inline">ACADEMY</span></span>  
    </div>  
    <div class="hidden lg:flex space-x-10">  
        <a href="#about" class="nav-link">About</a>  
        <a href="#values" class="nav-link">Values</a>  
        <a href="#membership" class="nav-link">Membership</a>  
        <a href="#gallery" class="nav-link">Gallery</a>  
    </div>  
    <a href="#gatekeeper" class="btn-apply px-6 py-2 text-[10px] uppercase">Apply Now</a>  
</nav>  

<!-- Hero Section sesuai Gambar 11 -->  
<section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">  
    <div class="absolute inset-0 bg-navy opacity-20"></div>  
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,169,106,0.05)_0%,_transparent_70%)]"></div>  
      
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">  
        <div class="reveal">  
            <h2 class="font-cinzel text-gold text-lg md:text-xl tracking-[0.3em] mb-4">BEEGIELZ ACADEMY</h2>  
            <h1 class="font-cinzel text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white">  
                ELITE COMMUNITY FOR <span class="gold-text-gradient">STRATEGIC MINDS</span>  
            </h1>  
            <p class="font-sans text-white/40 tracking-[0.2em] text-sm mb-10 uppercase">Think Sharp. Move Silent.</p>  
            <div class="flex space-x-6">  
                <a href="#gatekeeper" class="btn-apply px-10 py-4 text-xs uppercase inline-block">Apply Now</a>  
                <a href="#about" class="border border-gold/30 px-10 py-4 text-xs uppercase text-gold hover:bg-gold/5 transition inline-block">Learn More</a>  
            </div>  
        </div>  
        <div class="flex justify-center lg:justify-end reveal">  
            <div class="relative w-full max-w-lg">  
                <img src="file_00000000ed5471faacccdca844c02ccc.jpg" alt="Beegielz Logo" class="w-full h-auto rounded-lg shadow-[0_0_50px_rgba(200,169,106,0.15)] border border-gold/20">  
                <div class="absolute -bottom-6 -left-6 bg-navy/90 p-6 border border-gold/20 backdrop-blur">  
                    <p class="font-cinzel text-gold text-xl font-bold italic">EST. 2010</p>  
                </div>  
            </div>  
        </div>  
    </div>  
</section>  

<!-- About Us Section -->  
<section id="about" class="py-32 bg-dark">  
    <div class="container mx-auto px-6 max-w-4xl text-center reveal">  
        <h2 class="font-cinzel text-gold text-2xl tracking-[0.4em] mb-12">ABOUT US</h2>  
        <p class="text-white/60 text-lg md:text-xl leading-relaxed font-light italic mb-12">  
            "BeeGielz Academy adalah komunitas eksklusif yang dibangun untuk individu yang berorientasi pada pertumbuhan, disiplin, dan identitas kuat. Kami tidak mencari jumlah, kami membangun kualitas. Setiap anggota dipilih, bukan diterima."  
        </p>  
        <div class="w-24 h-[1px] bg-gold/30 mx-auto"></div>  
    </div>  
</section>  

<!-- Our Values Section sesuai Grid 04 -->  
<section id="values" class="py-32 bg-[#030303]">  
    <div class="container mx-auto px-6">  
        <div class="text-center mb-20 reveal">  
            <h2 class="font-cinzel text-gold text-3xl tracking-[0.5em] uppercase">Our Values</h2>  
        </div>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">  
            <!-- Knowledge -->  
            <div class="value-card p-12 text-center reveal">  
                <div class="mb-8 flex justify-center text-gold">  
                    <i data-lucide="brain" class="w-12 h-12"></i>  
                </div>  
                <h3 class="font-cinzel text-xl text-white mb-4 tracking-widest">KNOWLEDGE</h3>  
                <p class="text-[10px] text-white/40 tracking-[0.2em] leading-relaxed uppercase">Kemampuan berpikir strategis dan memahami sistem.</p>  
            </div>  
            <!-- Discipline -->  
            <div class="value-card p-12 text-center reveal">  
                <div class="mb-8 flex justify-center text-gold">  
                    <i data-lucide="shield-check" class="w-12 h-12"></i>  
                </div>  
                <h3 class="font-cinzel text-xl text-white mb-4 tracking-widest">DISCIPLINE</h3>  
                <p class="text-[10px] text-white/40 tracking-[0.2em] leading-relaxed uppercase">Kontrol diri dan konsistensi dalam eksekusi.</p>  
            </div>  
            <!-- Loyalty -->  
            <div class="value-card p-12 text-center reveal">  
                <div class="mb-8 flex justify-center text-gold">  
                    <i data-lucide="flame" class="w-12 h-12"></i>  
                </div>  
                <h3 class="font-cinzel text-xl text-white mb-4 tracking-widest">LOYALTY</h3>  
                <p class="text-[10px] text-white/40 tracking-[0.2em] leading-relaxed uppercase">Integritas terhadap nilai dan komitmen.</p>  
            </div>  
        </div>  
    </div>  
</section>  

<!-- Membership Tiers Section -->  
<section id="membership" class="py-32 bg-dark">  
    <div class="container mx-auto px-6">  
        <div class="text-center mb-20 reveal">  
            <h2 class="font-cinzel text-gold text-3xl tracking-[0.5em] uppercase">Membership Tiers</h2>  
            <p class="text-white/30 text-[10px] tracking-[0.3em] uppercase mt-4">Not everyone belongs here.</p>  
        </div>  
          
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">  
            <!-- Core Member -->  
            <div class="tier-card p-10 reveal">  
                <h4 class="font-cinzel text-white text-lg tracking-widest mb-2">CORE MEMBER</h4>  
                <p class="text-[9px] text-gold/60 tracking-widest uppercase mb-8">Akses Komunitas Dasar</p>  
                <ul class="space-y-4 mb-10">  
                    <li class="flex items-center text-[10px] text-white/50 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> AKSES DISCORD</li>  
                    <li class="flex items-center text-[10px] text-white/50 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> KONTEN EKSKLUSIF</li>  
                    <li class="flex items-center text-[10px] text-white/50 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> EVENT KOMUNITAS</li>  
                </ul>  
                <button class="w-full border border-gold/30 py-3 text-[10px] uppercase tracking-widest hover:bg-gold hover:text-dark transition">Select Tier</button>  
            </div>  

            <!-- Elite -->  
            <div class="tier-card p-10 border-gold/50 bg-navy/40 relative reveal scale-105 z-10">  
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[8px] font-bold text-dark tracking-widest">RECOMMENDED</div>  
                <h4 class="font-cinzel text-gold text-xl tracking-widest mb-2">ELITE</h4>  
                <p class="text-[9px] text-white/40 tracking-widest uppercase mb-8">Akses Inner Circle & Strategis</p>  
                <ul class="space-y-4 mb-10">  
                    <li class="flex items-center text-[10px] text-white/80 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> SEMUA DI CORE</li>  
                    <li class="flex items-center text-[10px] text-white/80 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> DISKUSI STRATEGIS</li>  
                    <li class="flex items-center text-[10px] text-white/80 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> PRIVATE GROUP</li>  
                </ul>  
                <button class="w-full btn-apply py-3 text-[10px] uppercase tracking-widest">Select Tier</button>  
            </div>  

            <!-- Executive -->  
            <div class="tier-card p-10 reveal">  
                <h4 class="font-cinzel text-white text-lg tracking-widest mb-2">EXECUTIVE</h4>  
                <p class="text-[9px] text-gold/60 tracking-widest uppercase mb-8">Akses Eksklusif & Kolaborasi</p>  
                <ul class="space-y-4 mb-10">  
                    <li class="flex items-center text-[10px] text-white/50 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> SEMUA DI ELITE</li>  
                    <li class="flex items-center text-[10px] text-white/50 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> NETWORKING EKSKLUSIF</li>  
                    <li class="flex items-center text-[10px] text-white/50 tracking-wider"><i data-lucide="check" class="w-3 h-3 mr-3 text-gold"></i> MENTORSHIP & PROJECT</li>  
                </ul>  
                <button class="w-full border border-gold/30 py-3 text-[10px] uppercase tracking-widest hover:bg-gold hover:text-dark transition">Select Tier</button>  
            </div>  
        </div>  
    </div>  
</section>  

<!-- Footer -->  
<footer class="py-20 border-t border-gold/10 bg-black">  
    <div class="container mx-auto px-6 text-center">  
        <img src="file_00000000ed5471faacccdca844c02ccc.jpg" alt="Logo" class="w-16 h-16 mx-auto mb-8 rounded-full border border-gold/20 opacity-50 grayscale hover:grayscale-0 transition duration-500">  
        <h5 class="font-cinzel text-gold text-sm tracking-[0.5em] mb-4">BEEGIELZ ACADEMY</h5>  
        <p class="text-[9px] text-white/20 tracking-widest uppercase mb-10">&copy; 2026 BEEGIELZFAMZ133CLAN.COM. ALL RIGHTS RESERVED.</p>  
        <div class="flex justify-center space-x-6 opacity-30">  
            <i data-lucide="instagram" class="w-4 h-4 cursor-pointer hover:text-gold"></i>  
            <i data-lucide="twitter" class="w-4 h-4 cursor-pointer hover:text-gold"></i>  
            <i data-lucide="youtube" class="w-4 h-4 cursor-pointer hover:text-gold"></i>  
        </div>  
    </div>  
</footer>  

<script>  
    // Initialize Icons  
    lucide.createIcons();  

    // GSAP Scroll Animations  
    gsap.registerPlugin(ScrollTrigger);  
      
    window.addEventListener('load', () => {  
        gsap.utils.toArray(".reveal").forEach(el => {  
            gsap.to(el, {  
                scrollTrigger: {  
                    trigger: el,  
                    start: "top 85%",  
                    toggleActions: "play none none none"  
                },  
                opacity: 1,  
                y: 0,  
                duration: 1.2,  
                ease: "power4.out"  
            });  
        });  

        // Navbar Blur Effect on Scroll  
        window.addEventListener('scroll', () => {  
            const nav = document.querySelector('nav');  
            if (window.scrollY > 50) {  
                nav.classList.add('py-4', 'bg-dark/95');  
                nav.classList.remove('py-6', 'bg-dark/80');  
            } else {  
                nav.classList.add('py-6', 'bg-dark/80');  
                nav.classList.remove('py-4', 'bg-dark/95');  
            }  
        });  
    });  
</script>

</body>  
</html>
