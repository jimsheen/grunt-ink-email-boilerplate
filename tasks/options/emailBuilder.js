module.exports = {
    build: {
        files: {
            'build/index.html': 'dev/index.html'
        }
    },
    litmus: {
        files: {
             'build/index.html': 'dev/index.html'
        },
        options: {
            encodeSpecialChars: true,
            litmus: {
                username: 'username',
                password: 'password',
                url: 'https://yoursite.litmus.com',
               applications : ['gmailnew', 'hotmail', 'outlookcom', 'ol2000', 'ol2002', 'ol2003', 'ol2007', 'ol2010','ol2011', 'ol2013', 'appmail8', 'iphone5', 'ipad3']
            }
        }
    }
}
