import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <section class="light">
                    <h2>Projects From Early in my Career</h2>
                    <h3>Space Invaders Clone Expanded with Multiplayer</h3>
                    <p>
                    A clone of Devon Cooper’s and Sidak Dhillon’s space invaders running on an ARM Mbed LPC1768 chip, but with
                    audio and multiplayer features added to it via the addition of a speaker, joystick, and Bluetooth module. This is written in C++
                    </p>
                    <p>
                    The project has its own page hosted <a href="https://jonathanquang.github.io/ECE4180-Space-Invaders-Clone-Expanded-with-Multiplayer/">here</a>.
                    </p>
                    <p>
                    Source code for the project found <a href="https://os.mbed.com/users/dmartin99/code/space_invaders_pvp/shortlog/">here</a>.
                    </p>
                    <h3>Emotion Based Playlist Generator</h3>
                    <p>
                    This project combines lastFM's API, musixMatch's API, and IBM Watson's API with Python's Flask Library to form a lightweight web application that
generates a playlist using a person's lastFM profile as the initial source of songs and picking out songs whose lyrics display a certain emotion while also caching results in a SQLite3 DB so as to not
exhaust API rate limits.
                    </p>
                    <p>The project can be found <a href="https://github.com/JFreud/jubilant-api-project">here</a>.</p>
                    <h3>Mario Party Inspired Boardgame with Minigames App</h3>
                    <p>
                    A webapp that makes use of a heavy amount of vanilla javascript served by a Python Flask app. Utilizes an SQLite3 database to maintain persistence between transitions to minigames.
                    </p>
                    <p>The project can be found <a href="https://github.com/tiffanychenn/DIJiTal">here</a>.</p>
                    <h3>Wifi-Basher</h3>
                    <p>
                    I wrote this before I even started college. This project makes use of Python and Bash to brute force WiFi passwords. Created because I forgot the school's WiFi password.
                    </p>
                    <p>The project can be found <a href="https://github.com/tiffanychenn/DIJiTal">https://github.com/JonathanQuang/Wifi-Basher-Windows10</a>.</p>
            </section>

            </div>
        )
    }

}