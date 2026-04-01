<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Shiva Bankali Rudrakshya Bhandar | <?php echo $pageTitle ?? 'Authentic Rudraksha'; ?></title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&family=Playfair+Display:wght@500;600;700;800&display=swap" rel="stylesheet">
  <!-- Font Awesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="top-bar">✨ 100% Authentic Rudraksha | Lab Tested | Free Shipping Worldwide ✨</div>
<header class="main-header">
  <div class="header-content">
    <div class="logo">Shiva Bankali <span>Rudrakshya</span></div>
    <div class="search-bar">
      <input type="text" id="searchInput" placeholder="Search by name, benefit...">
      <button id="searchBtn"><i class="fas fa-search"></i></button>
    </div>
    <div class="header-icons">
      <i class="fas fa-heart" id="wishlistIcon"></i><span id="wishlistCount" class="cart-count">0</span>
      <i class="fas fa-shopping-cart" id="cartIcon"></i><span id="cartCount" class="cart-count">0</span>
      <i class="fas fa-user"></i>
    </div>
  </div>
</header>
<div class="nav-menu">
  <div class="container">
    <div class="nav-links" id="navLinks">
      <a href="index.php">Home</a>
      <a href="rudraksha.php">Rudraksha</a>
      <a href="malas.php">Malas</a>
      <a href="yantras.php">Yantras</a>
      <a href="accessories.php">Accessories</a>
      <a href="knowledge.php">Knowledge</a>
    </div>
  </div>
</div>
<main id="app">
  <!-- Page content will be inserted here -->
  <?php
  // Each page will output its own content inside #app.
  // We'll close the main tag and reopen in page files? Better to keep main open and let pages fill it.
  // Actually we'll output page content directly, no extra #app needed.
  ?>