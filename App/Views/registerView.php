<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="../../public/js/register.js"></script>
<!--    <link rel="stylesheet" href="../style/header.css">-->
    <link rel="stylesheet" href="../style/register.css">
    <title>Cinetech - Inscription</title>
</head>
<body>
<?php include_once('./header.php') ?>
    <main>
        <form method="POST">
            <input type="text" name="firstname" placeholder="Prénom" required>
            <input type="text" name="name" placeholder="Nom" required>
            <input type="email" name="email" placeholder="Email" required><small></small>
            <input type="password" name="password" placeholder="Mot de passe" required>
            <input type="submit" name="register" value="Inscription">
        </form>
    </main>
</body>
</html>