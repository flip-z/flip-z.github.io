---
layout: default
title: Home
---

<section>
    <p class="about-text">Heyo I am Jon, and this page exists as motivation to write down and share the thoughts, projects, and ideas that fill my head.</p>
</section>

<section>
    <h2 class="section-title">Some Thoughts</h2>
    <ol class="writing-list">
        {% for opinion in site.opinions %}
            <li><a href="{{ opinion.url | relative_url }}">{{ opinion.title }}</a></li>
        {% endfor %}
    </ol>
</section>

<section>
    <h2 class="section-title">Reviews & Favorites</h2>
    <ol class="writing-list">
        {% for review in site.reviews %}
            <li><a href="{{ review.url | relative_url }}">{{ review.title }}</a></li>
        {% endfor %}
    </ol>
</section>