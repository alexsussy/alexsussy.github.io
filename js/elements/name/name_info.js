    var anim;
    var animData = {
        container: document.getElementById('bodymovin'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        autoloadSegments: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path: 'asset/animation/name/name_anim.json'
    };
    anim = bodymovin.loadAnimation(animData);