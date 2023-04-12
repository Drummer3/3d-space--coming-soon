const options = {
    background: {
        color: '#000',
    },
    detectRetina: false,
    fpsLimit: 60,
    interactivity: {
        detectsOn: 'canvas',
        events: {
            resize: true,
        },
    },
    particles: {
        color: {
            value: '#fff',
        },
        number: {
            density: {
                enable: true,
                area: 1080,
            },
            limit: 0,
            value: 400,
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false,
            },
            random: {
                enable: true,
                minimumValue: 0.05,
            },
            value: 1,
        },
        shape: {
            type: 'circle',
        },
        size: {
            random: {
                enable: true,
                minimumValue: 0.5,
            },
            value: 1.5,
        },
    },
}


export default function LoadTsParticles() {
    tsParticles.load("particles", options);
}