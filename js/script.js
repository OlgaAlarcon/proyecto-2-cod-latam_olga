function downloadFile() {
    setTimeout(function() {
      let fileUrl = 'CV.pdf';
      let link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'CV.pdf';

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }, 1000); 
  }