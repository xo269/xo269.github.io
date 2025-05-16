var posts=["2025/05/16/hello-world/","2025/05/17/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };