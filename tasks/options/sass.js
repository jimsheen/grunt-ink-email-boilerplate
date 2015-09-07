module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'dev/css/global.css': 'dev/css/global.scss'
    }
  }
}