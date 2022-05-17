<header>
    <?php if($_SERVER['REQUEST_URI'] == '/cinetech/' || $_SERVER['REQUEST_URI'] == '/cinetech/index.php'): ?>
    <img src="./assets/cinetechLogo.png" alt="Logo Cinetech">
    <?php else: ?>
        <img src="../assets/cinetechLogo.png" alt="Logo Cinetech">
    <?php endif ?>
    <form>
        <input type="searc" placeholder="Recherche">
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
    <nav>
        <ul>
            <?php if($_SERVER['REQUEST_URI'] == '/cinetech/' || $_SERVER['REQUEST_URI'] == '/cinetech/index.php'): ?>
            <li><a href="./index.php">Accueil</a></li>
            <li><a href="./view/movies.php">Films</a></li>
            <li><a href="./view/series.php">Séries</a></li>
            <li><a href="#"><i class="fa-solid fa-user-astronaut"></i></a></li>
            <?php else: ?>
            <li><a href="../index.php">Accueil</a></li>
            <li><a href="movies.php">Films</a></li>
            <li><a href="series.php">Séries</a></li>
            <li><a href="#"><i class="fa-solid fa-user-astronaut"></i></a></li>
            <?php endif ?>
        </ul>
    </nav>
</header>