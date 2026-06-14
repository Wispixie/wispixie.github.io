particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, // Number of magical sparks
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ffc6ff", "#bdb2ff", "#9bf6ff", "#ffd166"] // Pastel magic palette
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false // Turned off so they float freely like stardust instead of a web
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "top", // Drift upwards like magic dust
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble" // Makes them swell slightly when mouse is near
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Burst out more sparkles on click
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 100,
        "size": 8,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});