function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "images/beachHome.jpg"
    } else {
      pic = "images/quantum.JPG"
    }
    document.getElementById('myImage').src = pic;
  }
  