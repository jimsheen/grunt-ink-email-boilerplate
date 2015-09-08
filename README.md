<h1>Jim's Grunt Bower Boilerplate for Initial Project Setup</h1>

<h2>How to set up</h2>
<pre>
<code>
cd 'directory' <br>
git clone this repo<br>
npm init<br>
npm install <br>
bower init <br>
grunt dev  <br>
</code> 
</pre>

<h2>Add a bower package project</h2>
<p>Automatically adds &lt;script&gt; and &lt;link&gt; tags to index.html using  <a href="https://github.com/stephenplusplus/grunt-wiredep">grunt-wiredep</a>
</p>
<p>Open new terminal window</p>
<code>
bower install ‘package’ —save 
</code>

<h2>To Build Project</h2>
<code>
grunt build 
</code>
<ul>
<li>Moves all files and folders to build folder</li>
<li>Minifies css files</li>
<li>Moves bower_components to libs folder</li>
<li>Minifies images</li>
<li>Replaces link and src targets containing bower_components in index.html to point to build directory</li>
</ul>


<h3>Packages used</h3>
<p>
Auto link packages in HTML
<a href="https://github.com/stephenplusplus/grunt-wiredep">grunt-wiredep</a>
<br>
SASS compiler
<a href="https://github.com/gruntjs/grunt-contrib-sass">grunt-contrib-sass</a>
<br>
Copy files and folders
<a href="https://github.com/gruntjs/grunt-contrib-copy">grunt-contrib-copy</a>
<br>
Minify images
<a href="https://github.com/gruntjs/grunt-contrib-imagemin">grunt-contrib-imagemin</a>
<br>
Concatenate files
<a href="https://github.com/gruntjs/grunt-contrib-concat">grunt-contrib-concat</a>
<br>
Minify CSS
<a href="https://github.com/gruntjs/grunt-contrib-cssmin">grunt-contrib-cssmin</a>
<br>
Copy bower_components to folder (faster than recursive lookup using grunt-contrib-copy)
<a href="https://github.com/timmywil/grunt-bowercopy">grunt-bower-copy</a>
<br>
Replace string in files
<a href="https://github.com/outaTiME/grunt-replace">grunt-replace</a>
</p>
