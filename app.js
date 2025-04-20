// Navigation Tabs
const mainContent = document.getElementById('mainContent');
const uploadModal = document.getElementById('uploadModal');
const uploadBtn = document.getElementById('uploadBtn');
const submitUpload = document.getElementById('submitUpload');
const closeUpload = document.getElementById('closeUpload');

// Tab click events
document.getElementById('homeTab').addEventListener('click', loadHome);
document.getElementById('trendingTab').addEventListener('click', loadTrending);
document.getElementById('liveTab').addEventListener('click', loadLive);
document.getElementById('profileTab').addEventListener('click', loadProfile);

uploadBtn.addEventListener('click', () => uploadModal.classList.remove('hidden'));
closeUpload.addEventListener('click', () => uploadModal.classList.add('hidden'));

// Load Functions
function loadHome() {
  mainContent.innerHTML = `<h1>🏠 Home Feed</h1>`;
}

function loadTrending() {
  mainContent.innerHTML = `<h1>🔥 Trending Videos</h1>`;
}

function loadLive() {
  mainContent.innerHTML = `
    <h1>🛜 Live Stream!</h1>
    <button onclick="startLive()">Start Live</button>
    <div id="liveStatus"></div>
  `;
}

function loadProfile() {
  mainContent.innerHTML = `<h1>👤 Your Profile</h1>`;
}

// Upload function
submitUpload.addEventListener('click', () => {
  const file = document.getElementById('videoInput').files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    const videoCard = `
      <div class="video-card">
        <video src="${url}" controls></video>
        <div class="video-actions">
          <button>❤️ Like</button>
          <button>💬 Comment</button>
          <button>🔗 Share</button>
        </div>
      </div>
    `;
    mainContent.innerHTML = videoCard;
    uploadModal.classList.add('hidden');
  }
});

// Live stream simulation
function startLive() {
  document.getElementById('liveStatus').innerHTML = `
    <p style="color: green; font-weight: bold;">🔴 You are Live Now!</p>
  `;
}
