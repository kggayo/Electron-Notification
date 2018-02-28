

document.addEventListener('DOMContentLoaded', function() {
    var notificationOptions = {
        title: "Basic Notification",
        body: "Short message part"
      }
    
    let timer = setInterval(() => {
        new Notification(notificationOptions.title, notificationOptions);
    }, 15000); // 15 seconds
})