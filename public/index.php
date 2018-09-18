<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue Equalizer</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>

<body>
    <div id="app">
        <div class="container">
            <div class="col12">
                <h1>Vue Equalizer</h1>
            </div>
            <equalizer 
                :classes="['card','card-title', 'card-desc']"
                :config="{
                    1360: 4,
                    1024: 4,
                    680: 3,
                    0: 1
                }"
            >
                <div class="col3 m-1_3">
                    <div class="card eq-item">
                        <h2 class="card-title">Card 1 </h2>
                        <img src="http://placekitten.com/g/500/281" alt="Card Img">
                        <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus debitis eaque quam, ab fuga dolore eum optio corrupti deleniti distinctio, et quas aliquid nam dicta porro! Doloribus, quidem! Voluptate?</p>
                        <a href="/" class="card-cta">Read More</a>
                    </div>
                </div>
                <div class="col3 m-1_3">
                    <div class="card eq-item">
                        <h2 class="card-title">Card 2 which has a really long title for some reason</h2>
                        <img src="http://placekitten.com/g/500/281" alt="Card Img">
                        <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="/" class="card-cta">Read More</a>
                    </div>
                </div>
                <div class="col3 m-1_3">
                    <div class="card eq-item">
                        <h2 class="card-title">Card 3 medium size title</h2>
                        <img src="http://placekitten.com/g/500/281" alt="Card Img">
                        <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus debitis eaque quam, ab fuga dolore eum optio corrupti deleniti distinctio.</p>
                        <a href="/" class="card-cta">Read More</a>
                    </div>
                </div>
                <div class="col3 m-1_3">
                    <div class="card eq-item">
                        <h2 class="card-title">Card 4</h2>
                        <img src="http://placekitten.com/g/500/281" alt="Card Img">
                        <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quidem! Voluptate?</p>
                        <a href="/" class="card-cta">Read More</a>
                    </div>
                </div>
                <div class="col3 m-1_3">
                    <div class="card eq-item">
                        <h2 class="card-title">Card 5 </h2>
                        <img src="http://placekitten.com/g/500/281" alt="Card Img">
                        <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus debitis eaque quam.</p>
                        <a href="/" class="card-cta">Read More</a>
                    </div>
                </div>
                <div class="col3 m-1_3">
                    <div class="card eq-item">
                        <h2 class="card-title">Card 6</h2>
                        <img src="http://placekitten.com/g/500/281" alt="Card Img">
                        <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="/" class="card-cta">Read More</a>
                    </div>
                </div>
                <div class="col3 m-1_3">
                    <div class="card eq-item">
                        <h2 class="card-title">Card 7 may have a longer title</h2>
                        <img src="http://placekitten.com/g/500/281" alt="Card Img">
                        <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus debitis eaque quam, ab fuga dolore eum optio corrupti deleniti distinctio.</p>
                        <a href="/" class="card-cta">Read More</a>
                    </div>
                </div>
                <div class="col3 m-1_3">
                    <div class="card eq-item">
                        <h2 class="card-title">Card 8</h2>
                        <img src="http://placekitten.com/g/500/281" alt="Card Img">
                        <p class="card-desc">Quod repellendus debitis eaque quam, ab fuga dolore eum optio corrupti deleniti distinctio.</p>
                        <a href="/" class="card-cta">Read More</a>
                    </div>
                </div>
            </equalizer>
        </div>
    </div>
    <script src="/assets/js/min/app.js"></script>
</body>

</html>