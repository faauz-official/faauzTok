document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const videoTitle = document.getElementById('videoTitle').value;
    const videoFile = document.getElementById('videoFile').files[0];
    const hashtags = document.getElementById('hashtags').value;
  
    if (!videoFile) {
      alert('Please select a video file!');
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const videoData = {
        title: videoTitle,
        hashtags: hashtags,
        fileUrl: event.target.result,
        views: 0,
        likes: 0,
        comments: 0
      };
  
      // Save to localStorage (fake database)
      let videos = JSON.parse(localStorage.getItem('faauztokVideos')) || [];
      videos.push(videoData);
      localStorage.setItem('faauztokVideos', JSON.stringify(videos));
  
      alert('Video uploaded successfully!');
      window.location.href = 'index.html';
    };
  
    reader.readAsDataURL(videoFile);
  });
  