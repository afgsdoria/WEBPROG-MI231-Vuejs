<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atasha's Website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gUgBZKDx2Od3+F9Q+IGnaOTforBas3jDj7699rhc+9cd5JzYdCbgAstrVFlOz7XwMWvrK+pdwRjqGY0vNqhqA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/style.css?version=0.1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <h2>HELLO,</h2>
          <h1>I AM ATASHA!</h1>
          <p>My full name is Atasha Frances Gayle Doria, but you can call me Atasha for short.
          <br>
          <br>
          I am interested in many things, and we might share something in common. To learn more about me, feel free to browse my website.
          </p>
          <a href="https://afgsdoria.github.io/WEBPROG-Personal-Website/home/education.html" class="education-icons" data-tooltip="I, AS A STUDENT...">
            <span class="material-symbols-outlined">school</span>
          </a>
          <a href="https://afgsdoria.github.io/WEBPROG-Personal-Website/home/favorite.html" class="favorite-icons" data-tooltip="LET'S UNLOCK...">
            <span class="material-symbols-outlined">favorite</span>
          </a>
          <a href="https://afgsdoria.github.io/WEBPROG-Personal-Website/home/contact.html" class="comment-icons" data-tooltip="CONNECT...">
            <span class="material-symbols-outlined">mode_comment</span>
          </a>
          <a href="https://afgsdoria.github.io/WEBPROG-Personal-Website/home/references.html" class="search-icons" data-tooltip="SOURCES">
            <span class="material-symbols-outlined">search</span>
          </a>
        </div>
        <div class="col-6 col-md-3">
          <img src="https://afgsdoria.github.io/WEBPROG-Personal-Website/home/images/HomePage-img.png" class="img-fluid" alt="Graduation Picture for Home Page">        </div>
      </div>
    </div>
  </body>
  </html>
</template>

<script>
  // Add your JavaScript code here
</script>

<style>
  body {
    background-color: #DBD8D1;
  }

  h2 {
    font-family: "Staatliches", serif;
    font-weight: 400;
    font-size: 64px;
    font-style: normal;
    margin-bottom: 0px;
  }

  h1 {
    font-family: "Staatliches", serif;
    font-weight: 400;
    font-size: 96px;
    font-style: normal;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  
  p {
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    text-align: justify;
  }
  
  .container {
    clear: both;
    padding-left: 100px;
    padding-right: 5px;
  }
  
  .col-md-9 {
    float: left;
    width: 40%;
    padding: 75px;
  }
  
  .col-md-3 {
    float: right;
    width: 40%;
  }
  
  @media screen and (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .col-md-9, .col-md-3 {
      width: 90%;
      padding: 20px;
      text-align: left;
    }

    .col-md-3 {
      text-align: left;
    }
  }
  
  .img-fluid {
    max-width: 68%;
    height: auto;
    object-fit: cover;
  }

  a {
    text-decoration: none; 
    display: inline-block;
    padding: 10px 12px;
    border-radius: 100%; 
    background-color: #31589B; 
    color: #DBD8D1;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 20x;
    margin-top: 5px;
    position: relative;
  }
  
  .material-symbols-outlined {
    font-size: 20px;
  }
  
  a:hover::after {
    content: attr(data-tooltip); 
    position: absolute; 
    top: 120%; 
    left: 50%;
    transform: translateX(-50%);
    background-color: #31589B; 
    color: #fff; 
    padding: 5px 10px; 
    border-radius: 5px; 
    white-space: nowrap; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
    opacity: 0; 
    transition: opacity 0.3s; 
    pointer-events: none; 
    font-family: "Poppins", serif;
  }
  
  a:hover::after {
    opacity: 1;
  }
</style>