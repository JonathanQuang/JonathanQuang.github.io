import React, { Component } from "react";
import * as THREE from "three";
import spaceTexture from '../spaceTexture.jpg';
import nasaMoonTexture from '../nasaMoonTexture.jpg';
import nasaMoonNormal from '../nasaMoonNormal.jpg';
import gradImage from '../lowResPic.jpg';
import { CubeCamera } from "three";



export default class Background extends Component{
    componentDidMount() {
      // === THREE.JS CODE START ===
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#threeJSbackground')
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      var geometry = new THREE.TorusGeometry( 10, 3, 16, 30 );
      var material = new THREE.MeshStandardMaterial( { color: 0x260C07} );
      var torus = new THREE.Mesh( geometry, material );

      var pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(20,20,20);

      var ambientlight = new THREE.AmbientLight(0xffffff);

      function addStar() {
          var sphereGeo = new THREE.SphereGeometry(0.25, 24, 24);
          const sphereMaterial = new THREE.MeshStandardMaterial({color:0xffffff});
          const star = new THREE.Mesh(sphereGeo, sphereMaterial);
          const [xPos, yPos, zPos] = Array(3).fill().map( () => THREE.MathUtils.randFloatSpread(100));
          star.position.set(xPos, yPos, zPos);
          scene.add(star);
      }

      Array(100).fill().forEach(addStar);


      
      scene.add( torus, pointLight, ambientlight );
      scene.add(pointLight);


      const profileBoxTexture = new THREE.TextureLoader().load(gradImage);

      var profileBox = new THREE.Mesh(
        new THREE.BoxGeometry(3,3,3),
        new THREE.MeshStandardMaterial({map:profileBoxTexture})
      );

    /*
      var moonTexture = new THREE.TextureLoader().load(nasaMoonTexture);
      var moonNormal = new THREE.TextureLoader().load(nasaMoonNormal);

      var moon = new THREE.Mesh(
          new THREE.SphereGeometry(3, 32, 32),
          new THREE.MeshStandardMaterial(
              {
                  map: moonTexture,
                  normalMap: moonNormal
              }
          )
      )*/


      scene.add(profileBox);
      /* scene.add(moon); */

      camera.position.z = 30;

              

      function moveCam() {
        const t = document.body.getBoundingClientRect().top;
        
        //camera.position.x = t * -0.0002;
        camera.position.y = t * -0.0002 * -10;
        //camera.position.z = t * -0.0002 *+30;
        camera.rotation.x = t * -0.0002 * -7;
        camera.rotation.y = t * -0.0002 * 3.5;
      }

      document.body.onscroll = moveCam;


      

    var cameraLookVector = new THREE.Vector3();
    
      var animate = function () {
        requestAnimationFrame( animate );
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        //moon.rotation.y += 0.03;
        profileBox.rotation.y += 0.03;
        profileBox.rotation.x += 0.02;

        camera.getWorldDirection(cameraLookVector);

        renderer.render( scene, camera );
      };

      var backgroundTexture = new THREE.TextureLoader().load(spaceTexture)
      scene.background = backgroundTexture;

      document.addEventListener("keypress", function onPress(event) {
        if (event.key === "z") {
            console.log(camera.position);
            console.log(cameraLookVector);
            camera.position.add(cameraLookVector);
        }
    });



      animate();
      // === THREE.JS EXAMPLE CODE END ===
    }
    render() {
      return (
        <div />
      )
    }
  }
