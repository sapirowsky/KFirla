<?php
    require_once("header.php");
?>
    <main>
        <div class="container">
            <div class="left">
                <ul data-slides>
                    <li class="slide" data-active>
                        <a href="#"><img src="src/img/screenshot.png" alt="jakies zdjecie">
                            <h1>Przykładowe miejsce #1</h1>
                        </a>
                    </li>
                    <li class="slide">
                        <a href="#"><img src="src/img/Beautiful-Full-HD-Images.jpg" alt="jakies zdjecie">
                            <h1>Przykładowe miejsce #2</h1>
                        </a>
                    </li>
                    <li class="slide">
                        <a href="#"><img src="src/img/R.jfif" alt="jakies zdjecie">
                            <h1>Przykładowe miejsce #3</h1>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="container">
                <section class="main-content" id="main-content">
                            <p>Krystian Firla</p>
                            <p>Email: kfirla@gmail.com</p>
                            <p>nr kom: 698 490 438</p>
                            <h4 style="margin-top: 2rem;">&copy; copyright Krystia Firla 2022 - <span id="date"></span></h4>
                </section>
                </div>
            </div>
        </div>
    </main>
    <?php
    require_once("footer.php")
?>