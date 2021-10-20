import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <section class="light">
                    <h2>Projects From Early in my Career</h2>
                    <h3>Emotion Based Playlist Generator</h3>
                    <p>
                    This project combines multiple REST APIs and Python's Flask Library to form a lightweight web application that
generates a playlist using a person's lastFM profile as the initial source of songs and picking out songs whose lyrics display a certain emotion
                    </p>
                    <p>The project can be found <a href="https://github.com/JFreud/jubilant-api-project">here</a>.</p>
                    <h3>Mario Party Inspired Boardgame with Minigames App</h3>
                    <p>
                    This project makes use of a heavy amount of vanilla javascript served by a Python Flask app. Utilizes an SQLite3 database to maintain persistence between transitions to minigames.
                    </p>
                    <p>The project can be found <a href="https://github.com/tiffanychenn/DIJiTal">here</a>.</p>
            </section>

            </div>
        )
    }

}