// ---- Auth-only tab visibility ----
function updateSidebarTabs() {
  const isLoggedIn = !!state.user;
  document.querySelectorAll('.auth-only').forEach(el => {
    el.style.display = isLoggedIn ? '' : 'none';
  });
  // Hide Settings & Privacy and Help & Privacy if not logged in
  document.querySelectorAll('li[data-tab="settingsprivacy"], li[data-tab="helpprivacy"]').forEach(el => {
    el.style.display = isLoggedIn ? '' : 'none';
  });
}
// Basic demo app: client-side only
const sampleJobs = [
  {id:'j1', title:'Cashier', company:'J&F', loc:'Borongan City', desc:'Handles customer payments and issues receipts at the counter.',
    images:["https://th.bing.com/th/id/OIP.MOSGhaFcG84CleUQUuKZLQHaFj?w=245&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3","https://ph-test-11.slatic.net/shop/1e3290f0a5ade7947d1010c2d1968d41.png"],
    address:'J&F Department Store, Real St., Borongan City, Eastern Samar', requirements:'Application Letter, Resume', info: 'Phone: (02) 8366-8788', hr:'hr@j&f.com'
  },
  {id:'j2', title:'Mc Donald', company:'The Golden Arches Development Corporation', loc:'Borongan City', desc:'"Serving Smiles, One Order at a Time.".',
    images:["https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/486576252_9511589078890267_6544864381093062768_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeERHNWbjbVu_FZQKg4g1qk2bSUz9UTwueJtJTP1RPC54tFb_9H3KMwqjL1mPosQqu2tnGAahwQhBpHR4XPBPHmV&_nc_ohc=1viBN8Kum6oQ7kNvwFKLuej&_nc_oc=AdlBfn8Tytw1MWSPnfLTD02Q-ATvssdd79iAhoFXH3o-ylqZjEe3o2TNkzMG6VSB1zg&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=14nFCsSS7zR-h1nNM2n7RQ&oh=00_AfvfTKLyuC9tuOwPFnLk5HILWL2BZjhGGYmeZHi_v9mnRA&oe=6989F037","https://tse4.mm.bing.net/th/id/OIP._qPkK1UipkjNSt7yEmlHEAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"],
    address:'Songco, Borongan City, Eastern Samar', requirements:'Application Letter, Resume', info:'Phone: (+63) 9369961402 ', hr:'hr@mcdo.com'
  },
  {id:'j3', title:'Accounting Staff / Branch Secretary', company:'J&F', loc:'Borongan City', desc:'Manages basic accounting tasks and assists with branch administrative work.',
    images:["https://tse3.mm.bing.net/th/id/OIP.e5rN2l_wyVI8_fqdrZ-G1QHaC0?rs=1&pid=ImgDetMain&o=7&rm=3","https://ph-test-11.slatic.net/shop/1e3290f0a5ade7947d1010c2d1968d41.png"],
    address:'J&F Department Store, Songco, Borongan City, Eastern Samar', requirements:'Application Letter, Resume', info:'Phone: (02) 8366-8788', hr:'hr@j&f.com'
  },
  {id:'j4', title:'Scuba Diving Instructor / Dive Guide', company:'Lurop Este', loc:'Ando/Divinubo Dive Center', desc:'Teaches diving skills and guides tourists during underwater activities.',
    images:["https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/536658874_122123509226927694_206714450335443689_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9ULPyH6lEQQs0Cy5-hIiKWtfstEUuPEla1-y0RS48SRYA5yJNBB4PZS1xo7_uDu5p85pd9yb1ST38FsWd3scT&_nc_ohc=PRN-iq4_WRQQ7kNvwGOuaXY&_nc_oc=AdmzpbdmAqRTYqdzNQrg5mXJhud7lb0cttTNR3oawCZK8RhQsoehhtBrWsEkBC_Id4LUgiTDbVJMSr7J-2ANJS6_&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=ojGq-iTMqxPlTv0QzRxcPw&oh=00_AfiW2QgBxhL3VjrlmajrQwvNgsmkTqd9WYq7z6on9lDilQ&oe=692B7E4D","https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/518372856_122118104168927694_7506096328688728586_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFmVoujb24lVeu2p28-mGjBA73i3Qoh7tgDveLdCiHu2Ii_aSdpMoWRQEkYsJJJO5_DMYAE1QH8BxhtXUY6z1Ri&_nc_ohc=o_sxtXWQqpAQ7kNvwEhbiOM&_nc_oc=AdnGltnb1IHIwXkVNhb_72LKuY_GKr2kEax0pnAS__DMNIxPrOosBG3ug_dYAdSpz5ucpFCIf3gT7GGUW3z0QrtJ&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=RurIxOxWiCawXHpQ4nNwNA&oh=00_Afj-WxarQ1Vqxe9MeSKHJehb56s1ICLWcB3dsJFEzTYftg&oe=692BA762"],
    address:'Magsaysay street, Maydolong, Philippines', requirements:'Application Letter, Resume', info:'Phone (+63) 956 433 3708', hr:'luropeste@gmail.com'
  },
  {id:'j5', title:'Jolibee', company:'Jollibee Foods Corp', loc:'Borongan City', desc:'Build mobile apps for iOS/Android.',
    images:["https://tse1.mm.bing.net/th/id/OIP.PMWI_q83HRWgivKb4JBF9AHaGp?rs=1&pid=ImgDetMain&o=7&rm=3","https://tnt.abante.com.ph/wp-content/uploads/2018/02/jollibee.jpg"],
    address:'Real St, Borongan City, Eastern Samar', requirements:'Resume, Application Letter,', info:'Phone (+63) 917 502 2978 ', hr:'jolibeeborongan@gmail.com'
  },
  {id:'j6', title:'Mang Inasal', company:'Jollibee Foods Corp', loc:'Borongan City', desc:'Automate cloud deployments.',
    images:["https://tse4.mm.bing.net/th/id/OIP.2X1TTd_m0o3J2m9YVbITywHaHa?rs=1&pid=ImgDetMain&o=7&rm=3","https://tse2.mm.bing.net/th/id/OIP.IND0RaR1Uc6mEjVobGiTdwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"],
    address:'Real St, Borongan City, Eastern Samar', requirements:'Resume, Application Lette', info:'Phone (+63) 917 502 2978', hr:'jolibeeborongan@gmail.com'
  },
  {id:'j7', title:'Full Stack Developer', company:'Stackly', loc:'Remote', desc:'Work on both frontend and backend.',
    images:["https://www.imarkinfotech.com/static/images/full-stack_app-development.jpg","https://tse3.mm.bing.net/th/id/OIP.Pc1r0aQhD8-z-IrMnr_65wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"],
    address:'Remote', requirements:'JS, Node, React', info:'Full stack', hr:'hr@stackly.com'
  },
  {id:'j8', title:'UI Engineer', company:'PixelPush', loc:'Makati', desc:'Pixel-perfect UI implementation.',
    images:["https://tse1.mm.bing.net/th/id/OIP.B7K0nYGl-TOofmt7wiJCiAHaE2?rs=1&pid=ImgDetMain&o=7&rm=3","https://i.pinimg.com/originals/db/a1/ac/dba1ac49e05ebcdf36bae9829d01d646.jpg"],
    address:'UI Center, Makati', requirements:'CSS, HTML, JS', info:'UI dev', hr:'hr@pixelpush.com'
  },
  {id:'j9', title:'Data Scientist', company:'InsightAI', loc:'Remote', desc:'Analyze data and build ML models.',
    images:["https://th.bing.com/th/id/OIP.pdkKZRfnH2LO8LAbLzof6AHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3","https://media.licdn.com/dms/image/D5612AQEhcec1IdBpIQ/article-cover_image-shrink_720_1280/0/1680799784116?e=2147483647&v=beta&t=DRghePN9gu-ktviQrrv36sO5TBXueyYm3aCpSqseaMo"],
    address:'Remote', requirements:'Python, ML, Data', info:'Data science', hr:'hr@insightai.com'
  },
  {id:'j10', title:'SysAdmin', company:'InfraTech', loc:'Quezon City', desc:'Maintain IT infrastructure.',
    images:["https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5d6e60d9c9361a764d0929b8_system-administrator.jpg","https://media.istockphoto.com/id/1330012055/photo/cropped-shot-of-two-male-it-support-agents-working-together-in-a-dark-network-server-room.jpg?s=612x612&w=0&k=20&c=XMwkhgsYHoYC6qbnlcT47Gju1ic_1jksx5YoQ9AGM_w="],
    address:'Infra Bldg, QC', requirements:'Linux, Networking', info:'Sysadmin', hr:'hr@infratech.com'
  },
  {id:'j11', title:'Support Engineer', company:'HelpDesk', loc:'Remote', desc:'Provide tech support.',
    images:["https://www.liveabout.com/thmb/o9hqB9Lza5JvhrXqBfbQU_DJtus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-906499516-5bc6570d46e0fb0026d6f1e0.jpg","https://www.stream-perfect.com/wp-content/uploads/2020/08/Hire-Technical-Support-Engineer.jpg"],
    address:'Remote', requirements:'Support, Communication', info:'Support', hr:'hr@helpdesk.com'
  },
  {id:'j12', title:'Marketing Specialist', company:'Marketly', loc:'BGC', desc:'Digital marketing campaigns.',
    images:["https://tse3.mm.bing.net/th/id/OIP.X_tuOoz4214oOw72mpgbXQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3","https://tse3.mm.bing.net/th/id/OIP.myJzjOy2FlFinL9S-mBQrQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"],
    address:'Market Tower, BGC', requirements:'SEO, SEM', info:'Marketing', hr:'hr@marketly.com'
  },
  {id:'j13', title:'Content Writer', company:'WriteNow', loc:'Remote', desc:'Write blogs and articles.',
    images:["https://valorem.keka.com/careers/content/images/linkedin-thumbnail.png","https://contentwriters.com/blog/wp-content/uploads/content-writer.jpg"],
    address:'Remote', requirements:'Writing, SEO', info:'Content writing', hr:'hr@writenow.com'
  },
  {id:'j14', title:'HR Manager', company:'PeopleFirst', loc:'Ortigas', desc:'Manage HR operations.',
    images:["https://www.thehtgroup.com/wp-content/uploads/2018/08/bg_handshake866149824-2000x1333.jpg","https://tse3.mm.bing.net/th/id/OIP.uw7m6Eg8BrhQCGFuqvuQqQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"],
    address:'HR Bldg, Ortigas', requirements:'HR, Management', info:'HR', hr:'hr@peoplefirst.com'
  },
  {id:'j15', title:'Finance Analyst', company:'FinSight', loc:'Remote', desc:'Financial analysis and reporting.',
    images:["https://c9staff.com/wp-content/uploads/2024/05/Key-Responsibilities-of-a-Financial-Analyst-1024x574.webp","https://tse3.mm.bing.net/th/id/OIP.qZxF8DakF6sSL_7asdb4VgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"],
    address:'Remote', requirements:'Finance, Excel', info:'Finance', hr:'hr@finsight.com'
  },
  {id:'j16', title:'Sales Executive', company:'SellWell', loc:'Makati', desc:'Drive sales and partnerships.',
    images:["https://i.roamcdn.net/t/kazi/ng/og-template-1200w-630h/5f3db9b84a8f329004f249ce25296d35/-/eyJ0ZW1wbGF0ZSI6ImpvYi0wOS0yMDI0IiwicmVwbGFjZW1lbnRzIjp7ImpvYlRpdGxlIjoiU2FsZXMgRXhlY3V0aXZlIiwiam9iRnVuY3Rpb24iOiJDdXN0b21lciBTZXJ2aWNlICYgU3VwcG9ydCIsInNhbGFyeSI6Ik5HTiA3NSwwMDAgLSAxNTAsMDAwIiwibG9jYXRpb24iOiJMYWdvcyIsIndvcmtUeXBlIjoiRnVsbCBUaW1lIn0sImltYWdlcyI6eyJiYWNrZ3JvdW5kIjp7ImZpbGUiOiJzMzpcL1wvc2hhcmVkLWZvbGRlci1wcm9kXC8yMDI0LTA5XC9yZWN0YW5nbGVcL2pvYmZ1bmN0aW9uXC9jdXN0b21lci1zZXJ2aWNlLWFuZC1zdXBwb3J0LnBuZyJ9fX0%3D/sales-executive-4nejw2.jpg","https://cdn.seeklearning.com.au/media/images/career-guide/module/sales-executive.jpg"],
    address:'Sales Tower, Makati', requirements:'Sales, CRM', info:'Sales', hr:'hr@sellwell.com'
  },
  {id:'j17', title:'Business Analyst', company:'BizLogic', loc:'Remote', desc:'Analyze business processes.',
    images:["https://tse1.mm.bing.net/th/id/OIP.bluXejAckEFmlgiPCisWsAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3","https://potomac.edu/wp-content/uploads/2022/11/what-does-a-business-systems-analyst-do.jpg"],
    address:'Remote', requirements:'Analysis, Excel', info:'Business analysis', hr:'hr@bizlogic.com'
  },
  {id:'j18', title:'Project Manager', company:'PlanPro', loc:'Taguig', desc:'Lead project teams.',
    images:["https://th.bing.com/th/id/OIP._rdHB9LTODxUDFgl5QlfBAHaFQ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3","https://elements-resized.envatousercontent.com/elements-video-cover-images/6bdf5904-fd4b-4cef-bc78-1a88a552ff6d/video_preview/video_preview_0000.jpg?w=1000&cf_fit=cover&q=85&format=auto&s=9d8c76ad543db42feb9377d3be975495259bb29cf18f493320a6bb070cee4505"],
    address:'Proj Bldg, Taguig', requirements:'PM, Agile', info:'Project management', hr:'hr@planpro.com'
  },
  {id:'j19', title:'Graphic Designer', company:'Artify', loc:'Remote', desc:'Create graphics and visuals.',
    images:["https://www.forbes.com/advisor/wp-content/uploads/2023/06/graphic-designer-desk.jpeg-1.jpg","https://th.bing.com/th/id/OIP.PvUk1W_g6SaZoDtOjzzlewHaDN?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"],
    address:'Remote', requirements:'Photoshop, Illustrator', info:'Graphics', hr:'hr@artify.com'
  },
  {id:'j20', title:'Customer Success', company:'Cliently', loc:'Cebu', desc:'Ensure customer satisfaction.',
    images:["https://th.bing.com/th?id=OIF.Exl4NaaJoJ5x%2f5%2bmsZvFSA&rs=1&pid=ImgDetMain&o=7&rm=3","https://tse1.mm.bing.net/th/id/OIP.jus4aw5tXaqQJuGlp2dIuQHaEs?rs=1&pid=ImgDetMain&o=7&rm=3"],
    address:'Client Center, Cebu', requirements:'Support, CRM', info:'Customer success', hr:'hr@cliently.com'
  },
];

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const state = {
  user: null,
  jobs: sampleJobs,
  saved: [],
  applications: [],
};

// ---- Persistence ----
function loadState(){
  const raw = localStorage.getItem('jobly');
  if(raw){
    const data = JSON.parse(raw);
    state.user = data.user || null;
    state.saved = data.saved || [];
    state.applications = data.applications || [];
    // profile data if any
    state.profile = data.profile || {};
  } else {
    state.profile = {};
  }
  const theme = localStorage.getItem('jobly_theme') || 'light';
  if(theme === 'dark') document.documentElement.classList.add('dark');
}
function saveState(){
  const data = { user: state.user, saved: state.saved, applications: state.applications, profile: state.profile };
  localStorage.setItem('jobly', JSON.stringify(data));
}
function setYear(){ $('#year').textContent = new Date().getFullYear(); }

// ---- UI helpers ----
function openModal(){ $('#authModal').classList.remove('hidden'); $('#authModal').setAttribute('aria-hidden','false'); }
function closeModal(){ $('#authModal').classList.add('hidden'); $('#authModal').setAttribute('aria-hidden','true'); }
function showTab(tab){
  document.querySelectorAll('.sidebar nav li').forEach(li=>li.classList.toggle('active', li.dataset.tab===tab));
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
  const pane = document.getElementById('tab-' + tab);
  if(pane) pane.classList.add('active');
  if(tab==='saved') renderSaved();
  if(tab==='applications') renderApplications();
  if(tab==='profile') populateProfileForm();
  if(tab==='local') renderLocalJobs();
  if(tab==='featured') renderFeaturedJobPane();
}
function updateAuthArea(){
  const area = $('#authArea');
  area.innerHTML = '';
  if(state.user){
    const btn = document.createElement('div');
    btn.innerHTML = `<div class="small">Hi, ${state.user.name || state.user.email}</div>
      <div style="display:flex;gap:8px;margin-top:6px">
        <button id="gotoProfile" class="btn">Profile</button>
        <button id="logoutBtn" class="btn">Log out</button>
      </div>`;
    area.appendChild(btn);
    $('#logoutBtn').addEventListener('click', logout);
    $('#gotoProfile').addEventListener('click', ()=>{
      // If on landing page, slide to main app and show profile
      const jobBoardHome = document.getElementById('jobBoardHome');
      const mainApp = document.getElementById('mainApp');
      if(jobBoardHome.classList.contains('active')) {
        jobBoardHome.classList.remove('center');
        jobBoardHome.classList.add('to-left');
        jobBoardHome.classList.remove('active');
        mainApp.classList.remove('to-right');
        mainApp.classList.add('center');
        mainApp.classList.add('active');
        document.body.classList.add('mainApp-active');
        setTimeout(() => showTab('profile'), 100);
      } else {
        showTab('profile');
      }
    });
  } else {
    const button = document.createElement('button');
    button.className='btn primary';
    button.id='openLoginBtn';
    button.textContent='Log in';
    area.appendChild(button);
    button.addEventListener('click', openModal);
  }
  updateSidebarTabs();
}
// ---- Highlight modal logic ----
function openHighlightModal(type) {
  const modal = document.getElementById('highlightModal');
  const content = document.getElementById('highlightModalContent');
  let html = '';
  if(type === 'recommend') {
    html = `<h2>Recommended Jobs</h2>
      <p>Here are some top picks and trending jobs for you:</p>
      <div id='modalRecommendedJobs' class='recommended-jobs-grid'></div>`;
  } else if(type === 'companies') {
    html = `<h2>Top Companies</h2>
      <div id='modalTopCompaniesJobs' class='topcompanies-jobs-grid'></div>`;
  } else if(type === 'save') {
    html = `<h2>Save & Apply</h2>
      <p>View your saved jobs and apply to them easily.</p>
      <div id='modalSavedJobs' class='saved-jobs-grid'></div>`;
  } else if(type === 'privacy') {
    html = `<h2>Privacy First</h2>
      <p>Your data stays on your device. No tracking, no sharing, ever.</p>`;
  }
  content.innerHTML = html;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
  document.getElementById('closeHighlightModal').onclick = closeHighlightModal;
  // Helper to float job details over Find Your Dream Job only
  function openFloatingJobDetails(job) {
    // Only show if on Find Your Dream Job (landing page is active)
    if (!document.getElementById('jobBoardHome').classList.contains('active')) return;
    // Create floating modal if not exists
    let floatModal = document.getElementById('floatingJobDetailsModal');
    if (!floatModal) {
      floatModal = document.createElement('div');
      floatModal.id = 'floatingJobDetailsModal';
      floatModal.className = 'modal';
      floatModal.innerHTML = `<div class="modal-card job-details-card"><button id="closeFloatingJobDetails" class="close">✕</button><div id="floatingJobDetailsContent"></div></div>`;
      document.body.appendChild(floatModal);
    }
    // Fill content
    document.getElementById('floatingJobDetailsContent').innerHTML = `
      <h2>${job.title}</h2>
      <div class="muted">${job.company} • ${job.loc}</div>
      <div style="margin:10px 0;">${job.images && job.images.length ? `<img src="${job.images[0]}" style="max-width:100%;border-radius:10px;" />` : ''}</div>
      <p>${job.desc}</p>
      <hr />
      <div><b>Address:</b> ${job.address || '-'}</div>
      <div><b>Location:</b> ${job.loc}</div>
      <div><b>Requirements:</b> ${job.requirements || '-'}</div>
      <div><b>Info:</b> ${job.info || '-'}</div>
      <div><b>HR Email:</b> <a href="mailto:${job.hr}">${job.hr}</a></div>
    `;
    floatModal.classList.remove('hidden');
    floatModal.setAttribute('aria-hidden','false');
    document.getElementById('closeFloatingJobDetails').onclick = function() {
      floatModal.classList.add('hidden');
      floatModal.setAttribute('aria-hidden','true');
    };
    // Close on backdrop click
    floatModal.onclick = function(e) {
      if (e.target === floatModal) {
        floatModal.classList.add('hidden');
        floatModal.setAttribute('aria-hidden','true');
      }
    };
  }
  // Populate recommended jobs if needed
  if(type === 'recommend') {
    const jobs = state.jobs.slice().sort(()=>0.5-Math.random()).slice(0,14);
    const grid = document.getElementById('modalRecommendedJobs');
    jobs.forEach(j => {
      const card = document.createElement('div');
      card.className = 'recommended-job-card';
      card.innerHTML = `<b>${j.title}</b> at ${j.company}<div style='flex:1'></div><button class='btn view-btn' data-jobid='${j.id}'>View</button>`;
      card.querySelector('.view-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (!state.user) { openModal(); return; }
        openFloatingJobDetails(j);
      });
      grid.appendChild(card);
    });
  }
  if(type === 'companies') {
    const jobs = state.jobs.slice().sort(()=>0.5-Math.random()).slice(0,14);
    const grid = document.getElementById('modalTopCompaniesJobs');
    jobs.forEach(j => {
      const card = document.createElement('div');
      card.className = 'topcompanies-job-card';
      card.innerHTML = `<b>${j.title}</b> at ${j.company}<div style='flex:1'></div><button class='btn view-btn' data-jobid='${j.id}'>View</button>`;
      card.querySelector('.view-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (!state.user) { openModal(); return; }
        openFloatingJobDetails(j);
      });
      grid.appendChild(card);
    });
  }
  // Populate saved jobs if needed
  if(type === 'save') {
    const savedJobs = state.jobs.filter(j => state.saved.includes(j.id));
    const grid = document.getElementById('modalSavedJobs');
    if(savedJobs.length === 0) {
      grid.innerHTML = '<div class="muted">No saved jobs yet.</div>';
    } else {
      savedJobs.forEach(j => {
        const card = document.createElement('div');
        card.className = 'saved-job-card';
        card.innerHTML = `<b>${j.title}</b> at ${j.company}<div style='flex:1'></div><button class='btn view-btn' data-jobid='${j.id}'>View</button>`;
        card.querySelector('.view-btn').addEventListener('click', function(e) {
          e.preventDefault();
          if (!state.user) { openModal(); return; }
          openFloatingJobDetails(j);
        });
        grid.appendChild(card);
      });
    }
  }
}
function closeHighlightModal() {
  const modal = document.getElementById('highlightModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
}

// ---- Jobs rendering ----
function cardForJob(job, isSaved){
  const div = document.createElement('div');
  div.className='card';
  // Image slider
  let imgHtml = '';
  if(job.images && job.images.length > 0){
    imgHtml = `<div class="job-img-slider">
      <img src="${job.images[0]}" class="job-img" data-idx="0" />
      ${job.images.length > 1 ? `<button class="slider-btn prev">‹</button><button class="slider-btn next">›</button>` : ''}
    </div>`;
  }
  div.innerHTML = `
    ${imgHtml}
    <div style="display:flex;justify-content:space-between;align-items:flex-start">
      <div>
        <h3>${job.title}</h3>
        <div class="muted">${job.company} • ${job.loc}</div>
      </div>
      <div class="actions">
        <button class="btn" data-action="save">${isSaved? '★':'☆'}</button>
      </div>
    </div>
    <p class="muted" style="margin:8px 0">${job.desc}</p>
    <div class="row">
      <button class="btn primary" data-action="apply">Apply</button>
      <button class="btn" data-action="details">Details</button>
      <div class="muted">Remote-friendly</div>
    </div>
  `;
  div.querySelector('[data-action="save"]').addEventListener('click', () => toggleSave(job.id));
  div.querySelector('[data-action="apply"]').addEventListener('click', () => openApplyDialog(job));
  div.querySelector('[data-action="details"]').addEventListener('click', (e) => {
    e.preventDefault();
    if (!state.user) {
      openModal();
      return;
    }
    openJobDetails(job);
  });
  // Slider logic
  if(job.images && job.images.length > 1){
    const img = div.querySelector('.job-img');
    let idx = 0;
    div.querySelector('.slider-btn.next').addEventListener('click', ()=>{
      idx = (idx+1)%job.images.length;
      img.src = job.images[idx];
      img.setAttribute('data-idx', idx);
    });
    div.querySelector('.slider-btn.prev').addEventListener('click', ()=>{
      idx = (idx-1+job.images.length)%job.images.length;
      img.src = job.images[idx];
      img.setAttribute('data-idx', idx);
    });
  }
  return div;
}
// Job Details Modal
function openJobDetails(job) {
  // Floating modal for job details
  let floatModal = document.getElementById('floatingJobDetailsModal');
  if (!floatModal) {
    floatModal = document.createElement('div');
    floatModal.id = 'floatingJobDetailsModal';
    floatModal.className = 'modal';
    floatModal.innerHTML = `<div class="modal-card job-details-card"><button id="closeFloatingJobDetails" class="close">✕</button><div id="floatingJobDetailsContent"></div></div>`;
    document.body.appendChild(floatModal);
  }
  document.getElementById('floatingJobDetailsContent').innerHTML = `
    <h2>${job.title}</h2>
    <div class="muted">${job.company} • ${job.loc}</div>
    <div style="margin:10px 0;">${job.images && job.images.length ? `<img src="${job.images[0]}" style="max-width:100%;border-radius:10px;" />` : ''}</div>
    <p>${job.desc}</p>
    <hr />
    <div><b>Address:</b> ${job.address || '-'}</div>
    <div><b>Location:</b> ${job.loc}</div>
    <div><b>Requirements:</b> ${job.requirements || '-'}</div>
    <div><b>Info:</b> ${job.info || '-'}</div>
    <div><b>HR Email:</b> <a href="mailto:${job.hr}">${job.hr}</a></div>
    <div style="margin-top:16px"><button class="btn" id="closeFloatingJobDetailsBtn">Close</button></div>
  `;
  floatModal.classList.remove('hidden');
  floatModal.setAttribute('aria-hidden','false');
  document.getElementById('closeFloatingJobDetails').onclick = function() {
    floatModal.classList.add('hidden');
    floatModal.setAttribute('aria-hidden','true');
  };
  document.getElementById('closeFloatingJobDetailsBtn').onclick = function() {
    floatModal.classList.add('hidden');
    floatModal.setAttribute('aria-hidden','true');
  };
  floatModal.onclick = function(e) {
    if (e.target === floatModal) {
      floatModal.classList.add('hidden');
      floatModal.setAttribute('aria-hidden','true');
    }
  };
}

function renderJobs(filter){
  const list = $('#jobsList');
  list.innerHTML = '';
  const results = state.jobs.filter(j => {
    if(!filter) return true;
    const s = filter.toLowerCase();
    return j.title.toLowerCase().includes(s) || j.company.toLowerCase().includes(s);
  });
  results.forEach(j => list.appendChild(cardForJob(j, state.saved.includes(j.id))));
}

function renderSaved(){
  const list = $('#savedList');
  list.innerHTML = '';
  const savedJobs = state.jobs.filter(j => state.saved.includes(j.id));
  if(savedJobs.length === 0){ list.innerHTML = '<div class="muted">No saved jobs yet.</div>'; return; }
  savedJobs.forEach(j => list.appendChild(cardForJob(j, true)));
}

function renderApplications(){
  const list = $('#applicationsList');
  list.innerHTML = '';
  if(state.applications.length === 0){ list.innerHTML = '<div class="muted">You have not applied to any jobs yet.</div>'; return; }
  state.applications.forEach(a => {
    const job = state.jobs.find(j=>j.id===a.jobId) || {title:'Unknown'};
    const div = document.createElement('div'); div.className='card';
    div.innerHTML = `<h3>${job.title}</h3>
      <div class="muted">${a.name} • ${a.email}</div>
      <p class="muted" style="margin-top:8px">${a.cover ? a.cover.substring(0, 60) + (a.cover.length > 60 ? '...' : '') : ''}</p>
      <div class="form-actions"><button class="btn" data-id="${a.id}">View</button></div>`;
    div.querySelector('button[data-id]')?.addEventListener('click', () => showApplicationDetails(a));
    list.appendChild(div);
  });
}

// Show application details modal
function showApplicationDetails(app) {
  const job = state.jobs.find(j=>j.id===app.jobId) || {title:'Unknown'};
  const modal = document.getElementById('applicationDetailsModal');
  const content = document.getElementById('applicationDetailsContent');
  content.innerHTML = `
    <h2>${job.title}</h2>
    <div class="muted">${app.name} • ${app.email}</div>
    <div style="margin:12px 0 18px 0;"><b>Cover Letter:</b><br><div style="white-space:pre-line;background:#f6f7fb;padding:12px 14px;border-radius:10px;margin-top:6px;">${app.cover || '<i>No cover letter provided.</i>'}</div></div>
    <div><b>Applied on:</b> ${new Date(app.when).toLocaleString()}</div>
    <div style="margin-top:18px;"><button class="btn" id="closeApplicationDetailsBtn">Close</button></div>
  `;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
  document.getElementById('closeApplicationDetails').onclick = closeApplicationDetails;
  document.getElementById('closeApplicationDetailsBtn').onclick = closeApplicationDetails;
}
function closeApplicationDetails(){
  const modal = document.getElementById('applicationDetailsModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
}

// ---- Save / Apply ----
function toggleSave(jobId){
  if(!state.user){ openModal(); return; }
  const idx = state.saved.indexOf(jobId);
  if(idx === -1) state.saved.push(jobId);
  else state.saved.splice(idx,1);
  saveState(); renderJobs($('#searchInput').value);
}

function openApplyDialog(job){
  if(!state.user){ openModal(); return; }
  const id = 'apply-'+job.id;
  const overlay = document.createElement('div');
  overlay.className='modal';
  overlay.innerHTML = `
    <div class="modal-card">
      <button class="close">✕</button>
      <h3>Apply for ${job.title}</h3>
      <form id="applyForm" class="form-card">
        <label>Name <input required name="name" value="${state.user.name || ''}"></label>
        <label>Email <input required name="email" value="${state.user.email || ''}"></label>
        <label>Cover letter <textarea name="cover" rows="4" placeholder="Tell why you fit..."></textarea></label>
        <div class="form-actions"><button class="btn primary" type="submit">Send Application</button></div>
      </form>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('.close').addEventListener('click', ()=>overlay.remove());
  overlay.querySelector('#applyForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    state.applications.push({
      id: 'a' + Date.now(),
      jobId: job.id,
      name: fd.get('name'),
      email: fd.get('email'),
      cover: fd.get('cover'),
      when: new Date().toISOString(),
    });
    saveState(); overlay.remove(); showTab('applications');
  });
}

// ---- Auth (simple) ----
function openLogin(){ openModal(); }
function logout(){
  state.user = null;
  saveState(); updateAuthArea(); alert('Logged out');
}

function switchAuthMode(mode){
  document.querySelectorAll('.auth-tabs button').forEach(b=>b.classList.toggle('active', b.dataset.mode===mode));
  const signupExtra = $('#signupExtra');
  signupExtra.classList.toggle('hidden', mode!=='signup');
  $('#authSubmit').textContent = mode==='signup' ? 'Create account' : 'Continue';
  $('#authForm').dataset.mode = mode;
}

function handleAuthSubmit(e){
  e.preventDefault();
  const mode = e.target.dataset.mode || 'login';
  const email = $('#authEmail').value.trim().toLowerCase();
  const pass = $('#authPassword').value;
  if(!email || pass.length < 6) { alert('Please provide valid email and password (min 6 chars).'); return; }
  if(mode === 'signup'){
    let existing = localStorage.getItem('users_db') ? JSON.parse(localStorage.getItem('users_db')) : [];
    if(existing.find(u=>u.email.trim().toLowerCase()===email)){
      alert('An account with that email already exists. Please log in.');
      return;
    }
    const name = $('#authName').value.trim() || '';
    const user = {id: 'u'+Date.now(), email, name, pass};
    existing.push(user); localStorage.setItem('users_db', JSON.stringify(existing));
    state.user = {email:user.email, id:user.id, name:user.name};
    state.profile = {name:user.name, email:user.email, avatar:null, bio:''};
    saveState(); updateAuthArea(); closeModal();
    showTab('profile');
  } else {
    let existing = localStorage.getItem('users_db') ? JSON.parse(localStorage.getItem('users_db')) : [];
    const found = existing.find(u=>u.email.trim().toLowerCase()===email && u.pass===pass);
    if(found){
      state.user = {email:found.email, id:found.id, name:found.name};
      state.profile = {};
      saveState(); updateAuthArea(); closeModal();
    } else {
      alert('Invalid credentials.');
    }
  }
}

// ---- Profile ----
function populateProfileForm(){
  // Use state.profile if it has a name/email, otherwise use state.user
  const name = (state.profile && state.profile.name) ? state.profile.name : (state.user ? state.user.name : '');
  const email = (state.profile && state.profile.email) ? state.profile.email : (state.user ? state.user.email : '');
  $('#avatarPreview').src = state.profile?.avatar || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"></svg>';
  $('#profileName').value = name;
  $('#profileEmail').value = email;
  $('#profileBio').value = state.profile?.bio || '';
  if($('#profileGender')) $('#profileGender').value = state.profile?.gender || '';
  // Display name in header
  if($('#profileNameDisplay')) $('#profileNameDisplay').textContent = name;
}
// Profile tab switching
document.addEventListener('DOMContentLoaded', ()=>{
  $$('.profile-tab-btn').forEach(btn=>{
    btn.addEventListener('click', function(){
      $$('.profile-tab-btn').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      $$('.profile-tab-content').forEach(tab=>tab.classList.add('hidden'));
      const tabId = this.getAttribute('data-profile-tab');
      if(tabId && $('#profileTab'+tabId.charAt(0).toUpperCase()+tabId.slice(1)))
        $('#profileTab'+tabId.charAt(0).toUpperCase()+tabId.slice(1)).classList.remove('hidden');
    });
  });
  if($('#profileThemeToggle')){
    $('#profileThemeToggle').addEventListener('click', toggleTheme);
  }
});

function handleAvatarInput(e){
  const f = e.target.files[0];
  if(!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.profile.avatar = reader.result;
    $('#avatarPreview').src = reader.result;
    saveState();
  };
  reader.readAsDataURL(f);
}

function handleProfileSave(e){
  e.preventDefault();
  if(!state.user){ alert('You must be logged in to save profile.'); return; }
  state.profile.name = $('#profileName').value.trim();
  state.profile.email = $('#profileEmail').value.trim();
  state.profile.bio = $('#profileBio').value.trim();
  if($('#profileGender')) state.profile.gender = $('#profileGender').value;
  saveState();
  alert('Profile updated');
}

function deleteAccount(){
  if(!confirm('Delete your local account? This removes saved data from your browser.')) return;
  // remove from users_db (simple)
  const users = localStorage.getItem('users_db') ? JSON.parse(localStorage.getItem('users_db')) : [];
  const filtered = users.filter(u => u.email !== state.user.email);
  localStorage.setItem('users_db', JSON.stringify(filtered));
  // clear app data
  localStorage.removeItem('jobly');
  state.user = null; state.saved = []; state.applications = []; state.profile = {};
  updateAuthArea(); renderJobs(); showTab('jobs'); alert('Account removed locally.');
}

// ---- Theme ----
function toggleTheme(){
  const dark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('jobly_theme', dark ? 'dark' : 'light');
}

// ---- Events ----
function init(){
  loadState();
  setYear();
  renderJobs();
  updateAuthArea();

  // sidebar nav
  document.querySelectorAll('.sidebar nav li').forEach(li=>{
    li.addEventListener('click', ()=>showTab(li.dataset.tab || 'jobs'));
  });

  // auth modal controls
  $('#openLogin')?.addEventListener('click', openModal);
  $('#openLoginBtn')?.addEventListener('click', openModal);
  $('#closeAuth').addEventListener('click', closeModal);
  document.querySelectorAll('.auth-tabs button').forEach(b=>b.addEventListener('click', ()=>switchAuthMode(b.dataset.mode)));
  $('#authForm').addEventListener('submit', handleAuthSubmit);
  switchAuthMode('login');

  // search
  $('#searchInput').addEventListener('input', (e)=>renderJobs(e.target.value));

  // avatar/profile
  if($('#avatarInput')) $('#avatarInput').addEventListener('change', handleAvatarInput);
  if($('#profileForm')) $('#profileForm').addEventListener('submit', handleProfileSave);
  if($('#deleteAccount')) $('#deleteAccount').addEventListener('click', deleteAccount);

  // modal close on backdrop
  $('#authModal').addEventListener('click', (e)=>{
    if(e.target === $('#authModal')) closeModal();
  });

  // theme
  $('#themeToggle').addEventListener('click', toggleTheme);

  // allow opening login when clicking "Apply" if not logged in
  // initial populate
  if(state.profile) populateProfileForm();
}

// Profile menu toggle logic
function setupProfileMenu() {
  const menuBtn = document.getElementById('profileMenuBtn');
  const menu = document.getElementById('profileMenu');
  if (!menuBtn || !menu) return;
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });
  // Hide menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && e.target !== menuBtn) {
      menu.classList.add('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Highlight card click logic
  document.querySelectorAll('.highlight-card').forEach(card => {
    card.addEventListener('click', () => openHighlightModal(card.getAttribute('data-highlight')));
    card.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') openHighlightModal(card.getAttribute('data-highlight')); });
  });
  const jobBoardHome = document.getElementById('jobBoardHome');
  const mainApp = document.getElementById('mainApp');
  const exitBtn = document.getElementById('exitToHome');
  const mainAppExitBtn = document.getElementById('mainAppExitBtn');
  const topbarExitBtn = document.getElementById('topbarExitBtn');
  // Show/hide mainAppExitBtn only on landing page
  function updateMainAppExitBtn() {
    if(mainAppExitBtn) {
      // Show only if landing page is visible
      if (jobBoardHome.classList.contains('active')) {
        mainAppExitBtn.style.display = 'inline-block';
      } else {
        mainAppExitBtn.style.display = 'none';
      }
    }
  }

  // Initial state
  updateMainAppExitBtn();

  // Helper to slide to main app (from landing page)
  function slideToMain() {
    jobBoardHome.classList.remove('center');
    jobBoardHome.classList.add('to-left');
    jobBoardHome.classList.remove('active');
    mainApp.classList.remove('to-right');
    mainApp.classList.add('center');
    mainApp.classList.add('active');
    document.body.classList.add('mainApp-active');
    updateMainAppExitBtn();
  }
  // Helper to slide to home (from main app to landing page)
  function slideToHome() {
    mainApp.classList.remove('center');
    mainApp.classList.remove('active');
    mainApp.classList.add('to-right');
    jobBoardHome.classList.remove('to-left');
    jobBoardHome.classList.add('center');
    jobBoardHome.classList.add('active');
    document.body.classList.remove('mainApp-active');
    updateMainAppExitBtn();
  }
  if(topbarExitBtn) {
    topbarExitBtn.style.display = 'none'; // Always hide on load/landing
    topbarExitBtn.addEventListener('click', () => {
      slideToHome();
    });
  }
  if(jobBoardHome && mainApp) {
    // Exit to Home button (now in topbar and mainApp)
    if(exitBtn) {
      exitBtn.addEventListener('click', () => {
        slideToHome();
      });
      exitBtn.style.display = 'none';
    }
    if(mainAppExitBtn) {
      mainAppExitBtn.addEventListener('click', () => {
        mainApp.classList.remove('center');
        mainApp.classList.remove('active');
        mainApp.classList.add('to-right');
        jobBoardHome.classList.remove('to-left');
        jobBoardHome.classList.add('center');
        jobBoardHome.classList.add('active');
        document.body.classList.remove('mainApp-active');
        // Always show the X button on both landing and main page
        mainAppExitBtn.style.display = 'inline-block';
      });
    }
    // Always show the X button on page load
    if(mainAppExitBtn) mainAppExitBtn.style.display = 'inline-block';
    // Enter job board button
    const enterBtn = document.getElementById('enterJobBoard');
    if(enterBtn) {
      enterBtn.addEventListener('click', () => {
        slideToMain();
        showTab('jobs');
        updateMainAppExitBtn();
      });
    }
    // Hero search form
    const heroSearchForm = document.getElementById('heroSearchForm');
    if(heroSearchForm) {
      heroSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = document.getElementById('heroSearchInput').value.trim();
        if (!val) {
          document.getElementById('heroSearchInput').focus();
          return;
        }
        slideToMain();
        showTab('jobs');
        document.getElementById('searchInput').value = val;
        renderJobs(val);
        updateMainAppExitBtn();
      });
    }
  }
  // Show dark mode on both pages
  const themeToggle = document.getElementById('themeToggle');
  if(themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  init();
});
// Jobs Exit button logic
const jobsExitBtn = document.getElementById('jobsExitBtn');
if (jobsExitBtn) {
  jobsExitBtn.addEventListener('click', () => {
    // Go back to landing page
    const jobBoardHome = document.getElementById('jobBoardHome');
    const mainApp = document.getElementById('mainApp');
    mainApp.classList.remove('center');
    mainApp.classList.remove('active');
    mainApp.classList.add('to-right');
    jobBoardHome.classList.remove('to-left');
    jobBoardHome.classList.add('center');
    jobBoardHome.classList.add('active');
    document.body.classList.remove('mainApp-active');
  });
}
function renderFeaturedJobPane() {
  const container = document.getElementById('featuredJobPane');
  if (!container) return;
  // Show 7 high recommended jobs (same logic as Local Jobs)
  const highRecommendedKeywords = ['engineer', 'developer', 'data', 'devops', 'full stack', 'support', 'sysadmin'];
  const jobs = state.jobs.filter(j => highRecommendedKeywords.some(k => j.title.toLowerCase().includes(k)));
  container.innerHTML = '';
  if (jobs.length === 0) {
    container.innerHTML = '<div class="muted">No high recommended jobs available.</div>';
    return;
  }
  jobs.slice(0, 7).forEach(j => {
    // Create card and remove default save event
    const card = cardForJob(j, state.saved.includes(j.id));
    const saveBtn = card.querySelector('[data-action="save"]');
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
    newSaveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSave(j.id);
      renderFeaturedJobPane();
      renderSaved();
    });
    container.appendChild(card);
  });
}
function renderLocalJobs() {
  const list = document.getElementById('localJobsList');
  if (!list) return;
  // Show 7 high recommended jobs (e.g., with keywords in title)
  const highRecommendedKeywords = ['engineer', 'developer', 'data', 'devops', 'full stack', 'support', 'sysadmin'];
  const jobs = state.jobs.filter(j => highRecommendedKeywords.some(k => j.title.toLowerCase().includes(k)));
  list.innerHTML = '';
  if (jobs.length === 0) {
    list.innerHTML = '<div class="muted">No high recommended jobs available.</div>';
    return;
  }
  jobs.slice(0, 7).forEach(j => {
    // Create card and remove default save event
    const card = cardForJob(j, state.saved.includes(j.id));
    const saveBtn = card.querySelector('[data-action="save"]');
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
    newSaveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSave(j.id);
      renderLocalJobs();
      renderSaved();
    });
    list.appendChild(card);
  });
}

// ---- Featured Job Sidebar ----
function renderFeaturedJobSidebar() {
  const container = document.getElementById('featuredJobSidebar');
  if (!container) return;
  // Only show jobs that are not 'Product Designer'
  const jobs = state.jobs.filter(j => j.title !== 'Product Designer');
  if (!jobs || jobs.length === 0) { container.innerHTML = ''; return; }
  const job = jobs[Math.floor(Math.random() * jobs.length)];
  container.innerHTML = `
    <div style="background:var(--card);border-radius:10px;box-shadow:var(--shadow);padding:12px 14px 10px 14px;display:flex;flex-direction:column;gap:6px;align-items:flex-start;">
      <div style="font-size:0.95em;color:var(--accent);font-weight:700;margin-bottom:2px;">Featured Job</div>
      <div style="font-size:1.08em;font-weight:600;">${job.title}</div>
      <div class="muted" style="font-size:0.97em;">${job.company} • ${job.loc}</div>
      <div style="font-size:0.97em;margin:4px 0 0 0;">${job.desc}</div>
      <button class="btn view-btn" style="margin-top:6px;" onclick="window.open('','_blank').document.write('<h2>${job.title}</h2><div>${job.company} • ${job.loc}</div><p>${job.desc}</p>');">View</button>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedJobSidebar();
  renderFeaturedJobPane();
  // Add Account form logic
  const addAccountForm = document.getElementById('addAccountForm');
  if (addAccountForm) {
    addAccountForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('addAccountEmail').value.trim();
      const password = document.getElementById('addAccountPassword').value;
      const msg = document.getElementById('addAccountMsg');
      const users = localStorage.getItem('users_db') ? JSON.parse(localStorage.getItem('users_db')) : [];
      const found = users.find(u => u.email === email && u.pass === password);
      if (found) {
        state.user = { email: found.email, id: found.id, name: found.name };
        state.profile = state.profile || { name: found.name, email: found.email };
        saveState();
        updateAuthArea();
        msg.textContent = 'Account added and logged in!';
        showTab('jobs');
      } else {
        msg.textContent = 'Account not found or password incorrect.';
      }
    });
  }
  // Floating modal for Settings & Privacy options
  function showSettingsFloatModal(contentHtml) {
    let modal = document.getElementById('settingsFloatModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'settingsFloatModal';
      modal.className = 'modal';
      modal.innerHTML = `<div class="modal-card" id="settingsFloatModalCard"><button id="closeSettingsFloatModal" class="close">✕</button><div id="settingsFloatModalContent"></div></div>`;
      document.body.appendChild(modal);
    }
    document.getElementById('settingsFloatModalContent').innerHTML = contentHtml;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
    document.getElementById('closeSettingsFloatModal').onclick = function() {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden','true');
    };
    modal.onclick = function(e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden','true');
      }
    };
  }
  // Settings & Privacy tab logic
  const settingsOptions = {
    // REMOVE this block:
    // password: `<h3>Change Password</h3>
    // <form id='changePassForm' class='form-card'>
    //   <label>Current Password
    //     <input id='currentPassword' type='password' required />
    //   </label>
    //   <label>New Password
    //     <input id='newPassword' type='password' required />
    //   </label>
    //   <label>Confirm New Password
    //     <input id='confirmNewPassword' type='password' required />
    //   </label>
    //   <div class='form-actions'>
    //     <button type='submit' class='btn primary'>Change Password</button>
    //   </div>
    // </form>`,
    notif: `<h3>Notification Preferences</h3><form id='notifPrefForm' class='form-card'><label style='display:flex;align-items:center;gap:8px;'><input type='checkbox' id='notifEmail' /> Email notifications</label><label style='display:flex;align-items:center;gap:8px;'><input type='checkbox' id='notifSMS' /> SMS notifications</label><label style='display:flex;align-items:center;gap:8px;'><input type='checkbox' id='notifPush' /> App push notifications</label><div class='form-actions'><button type='submit' class='btn primary'>Save Preferences</button></div></form>`,
    privacy: `<h3>Privacy Controls</h3><form id='privacyControlForm' class='form-card'><label style='display:flex;align-items:center;gap:8px;'><input type='checkbox' id='privacyProfile' /> Make my profile private</label><label style='display:flex;align-items:center;gap:8px;'><input type='checkbox' id='privacyHideEmail' /> Hide my email from employers</label><div class='form-actions'><button type='submit' class='btn primary'>Save Privacy Settings</button></div></form>`,
    addaccount: `<h3>Add Account</h3><form id='addAccountFloatForm' class='form-card'><label>Email<input id='addAccountFloatEmail' type='email' required /></label><label>Full Name<input id='addAccountFloatName' type='text' required /></label><label>Password<input id='addAccountFloatPassword' type='password' required minlength='6' /></label><div class='form-actions'><button type='submit' class='btn primary'>Add Account</button></div></form>`,
    switchaccount: `<h3>Switch Account</h3><div id='switchAccountList'></div>`
  };
  const settingsList = document.getElementById('settingsOptionsList');
  if(settingsList) {
    settingsList.querySelectorAll('.settings-option-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const key = this.getAttribute('data-settings');
        if (settingsOptions[key]) {
          showSettingsFloatModal(settingsOptions[key]);
          // Notification Preferences logic
          if (key === 'notif') {
            setTimeout(() => {
              // Load saved preferences
              const prefs = JSON.parse(localStorage.getItem('jobly_notif_prefs') || '{}');
              document.getElementById('notifEmail').checked = !!prefs.email;
              document.getElementById('notifSMS').checked = !!prefs.sms;
              document.getElementById('notifPush').checked = !!prefs.push;
              document.getElementById('notifPrefForm').onsubmit = function(e) {
                e.preventDefault();
                const newPrefs = {
                  email: document.getElementById('notifEmail').checked,
                  sms: document.getElementById('notifSMS').checked,
                  push: document.getElementById('notifPush').checked
                };
                localStorage.setItem('jobly_notif_prefs', JSON.stringify(newPrefs));
                showFloatingMessage('Preferences saved!','success');
              };
            }, 50);
          }
          // Privacy Controls logic
          if (key === 'privacy') {
            setTimeout(() => {
              // Load saved privacy settings
              const privacy = JSON.parse(localStorage.getItem('jobly_privacy') || '{}');
              document.getElementById('privacyProfile').checked = !!privacy.profile;
              document.getElementById('privacyHideEmail').checked = !!privacy.hideEmail;
              document.getElementById('privacyControlForm').onsubmit = function(e) {
                e.preventDefault();
                const newPrivacy = {
                  profile: document.getElementById('privacyProfile').checked,
                  hideEmail: document.getElementById('privacyHideEmail').checked
                };
                localStorage.setItem('jobly_privacy', JSON.stringify(newPrivacy));
                showFloatingMessage('Privacy settings saved!','success');
              };
            }, 50);
          }
          // Special logic for Switch Account
          if (key === 'switchaccount') {
            setTimeout(() => {
              const container = document.getElementById('switchAccountList');
              if (!container) return;
              const users = localStorage.getItem('users_db') ? JSON.parse(localStorage.getItem('users_db')) : [];
              if (!users.length) {
                container.innerHTML = '<div class="muted">No accounts found.</div>';
                return;
              }
              container.innerHTML = users.map(u => {
                const isCurrent = state.user && state.user.email && u.email && state.user.email.trim().toLowerCase() === u.email.trim().toLowerCase();
                return `
                <div style='display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #eee;'>
                  <span style='flex:1;'>
                    <b>${u.name || u.email}</b><br>
                    <span style='font-size:0.95em;color:var(--muted);'>${u.email}</span>
                  </span>
                  <button class='icon-btn remove-account' title='Remove' data-email='${u.email}' style='color:#e74c3c;font-size:1.2em;'>🗑️</button>
                  ${!isCurrent ? `<button class='icon-btn switch-account' title='Switch' data-email='${u.email}' style='color:#574fd6;font-size:1.2em;margin-left:2px;'>🔄</button>` : ''}
                </div>
                `;
              }).join('');
              // Remove account logic
              container.querySelectorAll('.remove-account').forEach(btn => {
                btn.onclick = function() {
                  const email = this.getAttribute('data-email');
                  let users = localStorage.getItem('users_db') ? JSON.parse(localStorage.getItem('users_db')) : [];
                  users = users.filter(u => u.email !== email);
                  localStorage.setItem('users_db', JSON.stringify(users));
                  if(state.user && state.user.email === email) {
                    state.user = null;
                    state.profile = {};
                    saveState();
                    updateAuthArea();
                    closeModal();
                  }
                  this.parentElement.remove();
                };
              });
              // Switch account logic
              container.querySelectorAll('.switch-account').forEach(btn => {
                btn.onclick = function() {
                  const email = this.getAttribute('data-email');
                  const users = localStorage.getItem('users_db') ? JSON.parse(localStorage.getItem('users_db')) : [];
                  const found = users.find(u => u.email === email);
                  if(found) {
                    state.user = { email: found.email, id: found.id, name: found.name };
                    state.profile = {};
                    saveState();
                    updateAuthArea();
                    // Hide the Switch Account modal after switching
                    const modal = document.getElementById('settingsFloatModal');
                    if(modal) {
                      modal.classList.add('hidden');
                      modal.setAttribute('aria-hidden','true');
                    }
                    // After switching, go to profile tab
                    showTab('profile');
                  }
                };
              });
            }, 50);
          }
          // Special logic for Add Account
          if (key === 'addaccount') {
            setTimeout(() => {
              const form = document.getElementById('addAccountFloatForm');
              if (form) {
                form.onsubmit = function(e) {
                  e.preventDefault();
                  const email = document.getElementById('addAccountFloatEmail').value.trim();
                  const name = document.getElementById('addAccountFloatName').value.trim();
                  const password = document.getElementById('addAccountFloatPassword').value;
                  let users = localStorage.getItem('users_db') ? JSON.parse(localStorage.getItem('users_db')) : [];
                  if(users.find(u => u.email === email)) {
                    showFloatingMessage('Account already exists. Please use Switch Account.','error');
                    return;
                  }
                  const user = {id: 'u'+Date.now(), email, name, pass: password};
                  users.push(user);
                  localStorage.setItem('users_db', JSON.stringify(users));
                  // Log in as the new user
                  state.user = {email:user.email, id:user.id, name:user.name};
                  state.profile = {};
                  saveState();
                  updateAuthArea();
                  showFloatingMessage('Account successfully added!','success');
                  closeModal();
                  // Only clear Add Account fields, do not switch to Switch Account tab
                  setTimeout(() => {
                    const emailField = document.getElementById('addAccountFloatEmail');
                    const nameField = document.getElementById('addAccountFloatName');
                    const passField = document.getElementById('addAccountFloatPassword');
                    if(emailField) emailField.value = '';
                    if(nameField) nameField.value = '';
                    if(passField) passField.value = '';
                  }, 1200);
                };
              }
            }, 50);
          }
        }
      });
    });
  }
  // Floating message utility
  function showFloatingMessage(msg, type) {
    let floatMsg = document.getElementById('floatingMsg');
    if (!floatMsg) {
      floatMsg = document.createElement('div');
      floatMsg.id = 'floatingMsg';
      floatMsg.style.position = 'fixed';
      floatMsg.style.top = '50%';
      floatMsg.style.left = '50%';
      floatMsg.style.transform = 'translate(-50%,-50%)';
      floatMsg.style.zIndex = '9999';
      floatMsg.style.background = type === 'error' ? '#e74c3c' : '#2ecc71';
      floatMsg.style.color = '#fff';
      floatMsg.style.padding = '18px 32px';
      floatMsg.style.borderRadius = '12px';
      floatMsg.style.fontSize = '1.15em';
      floatMsg.style.boxShadow = '0 4px 24px #0002';
      floatMsg.style.textAlign = 'center';
      document.body.appendChild(floatMsg);
    }
    floatMsg.textContent = msg;
    floatMsg.style.display = 'block';
    setTimeout(() => {
      floatMsg.style.display = 'none';
    }, 2200);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // Help & Privacy FAQ logic
  const faqs = [
    {
      q: 'How do I create an account?',
      steps: [
        'Click the Log in button at the top right.',
        'Select the Sign up tab in the modal.',
        'Enter your email, password, and full name.',
        'Click Create account to finish.'
      ]
    },
    {
      q: 'How do I reset my password?',
      steps: [
        'Currently, password reset is not available in this demo.',
        'You may create a new account or contact support.'
      ]
    },
    {
      q: 'How do I apply for a job?',
      steps: [
        'Go to All Jobs or use the search bar.',
        'Click Apply on your chosen job.',
        'Fill out the application form and submit.'
      ]
    },
    {
      q: 'How do I save a job?',
      steps: [
        'Log in to your account.',
        'Click the ☆ (star) icon on any job card to save it.'
      ]
    },
    {
      q: 'How do I edit my profile?',
      steps: [
        'Go to your Profile tab.',
        'Edit your information and click Save.'
      ]
    },
    {
      q: 'Is my data private?',
      steps: [
        'Yes, all your data stays on your device.',
        'No tracking or sharing is done by Jobly.'
      ]
    }
  ];
  const faqsList = document.getElementById('faqsList');
  const faqSteps = document.getElementById('faqSteps');
  const helpSearchInput = document.getElementById('helpSearchInput');
  function renderFaqs(filter = '') {
    if (!faqsList) return;
    faqsList.innerHTML = '';
    const filtered = faqs.filter(f => f.q.toLowerCase().includes(filter.toLowerCase()));
    if (filtered.length === 0) {
      faqsList.innerHTML = '<div class="muted">No FAQs found.</div>';
      if(faqSteps) faqSteps.style.display = 'none';
      return;
    }
    filtered.forEach((faq, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.style = 'width:100%;text-align:left;margin-bottom:8px;padding:10px 14px;border-radius:8px;background:var(--card);box-shadow:var(--shadow);font-size:1em;cursor:pointer;';
      btn.textContent = faq.q;
      btn.onclick = () => {
        if(faqSteps) {
          faqSteps.innerHTML = `<div style='display:flex;justify-content:flex-end;align-items:center;'><button id='closeFaqSteps' class='close' style='font-size:1.2em;margin-bottom:8px;'>✕</button></div><div><b>Step-by-step:</b><ol style='margin-top:8px;'>${faq.steps.map(s => `<li>${s}</li>`).join('')}</ol></div>`;
          faqSteps.style.display = 'block';
          const closeBtn = document.getElementById('closeFaqSteps');
          if(closeBtn) closeBtn.onclick = () => { faqSteps.style.display = 'none'; };
        }
      };
      faqsList.appendChild(btn);
    });
    if(faqSteps) faqSteps.style.display = 'none';
  }
  if (faqsList && faqSteps) {
    renderFaqs();
    if (helpSearchInput) {
      helpSearchInput.addEventListener('input', e => {
        renderFaqs(e.target.value);
      });
    }
  }
});
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('exit-tab-btn')) {
    // Hide all tab-panes
    document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('active'));
    // Hide main app
    const mainApp = document.getElementById('mainApp');
    if (mainApp) mainApp.classList.remove('active');
    // Show landing page (Finding Dream Job)
    const home = document.getElementById('jobBoardHome');
    if (home) home.classList.add('active');
    // Optional: scroll to top
    window.scrollTo(0, 0);
  }

});





