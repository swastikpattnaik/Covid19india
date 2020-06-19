if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"da04bbac4b3f6165eba77c3978528be9","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"da04bbac4b3f6165eba77c3978528be9","url":"index.html"},{"revision":"d119feaff17a651ecf3af96dd427ed08","url":"precache-manifest.d119feaff17a651ecf3af96dd427ed08.js"},{"revision":"010abe3d2b1ba45c96937ceb6cdcc1ab","url":"static/css/29.93b3b32d.chunk.css"},{"revision":"e1d6797096ff2cefb9330b879fd5ece5","url":"static/css/App.74867c80.chunk.css"},{"revision":"3a2e9ffbc8890e03644c51e5b465e306","url":"static/js/0.f9de2b3b.chunk.js"},{"revision":"24ab3c44a0e46a6dc2f25a573fb16b53","url":"static/js/1.90be350c.chunk.js"},{"revision":"080a725dbb13d4817a7ae6acc6f895ae","url":"static/js/2.a2c8dd38.chunk.js"},{"revision":"605c4a6be4d1554f316ebd2cc776652e","url":"static/js/27.aec2f85c.chunk.js"},{"revision":"effd1f6b7ae0e671e1aeddd123c00d3a","url":"static/js/28.aa72f9be.chunk.js"},{"revision":"a2626ef3d6c024b809e970417f304e34","url":"static/js/29.ceb78f1c.chunk.js"},{"revision":"1f27d601f0eeb272a3fc553242df6419","url":"static/js/3.760bdd2e.chunk.js"},{"revision":"4622c020d8027bce144465501e343e28","url":"static/js/30.54246417.chunk.js"},{"revision":"1570efba1aa7328f75ec95585fc7deba","url":"static/js/31.d06474a9.chunk.js"},{"revision":"f484f6bbcf869e95acad74c9e419d892","url":"static/js/32.520927b7.chunk.js"},{"revision":"0d245f5ba3d3ffbd974da75583272334","url":"static/js/33.3bdd8e36.chunk.js"},{"revision":"886944cc452d3451d60bfe500dab8eb9","url":"static/js/34.803969f1.chunk.js"},{"revision":"55c1214c6aae96f841ad39f5e59b1e0e","url":"static/js/35.7b24e164.chunk.js"},{"revision":"db87fe744d1a80bf7e02cca5aa05c66f","url":"static/js/36.9550ecb1.chunk.js"},{"revision":"4e61ddd3d2ac7c8fb8087ed64fe8220c","url":"static/js/37.4f905d7a.chunk.js"},{"revision":"823746f4eef271145784e6aaa0ce4c4f","url":"static/js/38.214ed514.chunk.js"},{"revision":"753cba77f44971f14422bb4cdee36c21","url":"static/js/4.e557980b.chunk.js"},{"revision":"db35fb059d0dbbf67bd231d0dbbd0851","url":"static/js/About.ccb10eb3.chunk.js"},{"revision":"f1be81695247b809937862c039a5f62e","url":"static/js/Actions.32e0a72f.chunk.js"},{"revision":"a2b41aab2a71b74664dfee2747d7fdcf","url":"static/js/App.5064393c.chunk.js"},{"revision":"cc524f347ffd85647765bd5f5a80405d","url":"static/js/Demographics.a1ff0851.chunk.js"},{"revision":"944489e758432e83dff07b93fe6aed50","url":"static/js/Essentials.f7e71a87.chunk.js"},{"revision":"dddb8b5f702e4f1a8bfdcb019038f061","url":"static/js/Footer.8f3a2b84.chunk.js"},{"revision":"a94ced72ba2acd5ef4f10c710ba684e0","url":"static/js/Home.c60566eb.chunk.js"},{"revision":"9f2f993084081c910c64e16ef43c40cf","url":"static/js/LanguageSwitcher.9f89f1e9.chunk.js"},{"revision":"8578794fa4fc1e3ecdd5843006c71c2b","url":"static/js/Level.4f2f4f69.chunk.js"},{"revision":"ebe089c6ab5b57837067d0a2470cdca2","url":"static/js/main.33ef82a4.chunk.js"},{"revision":"15b06f67146d8107fc98235b02af905e","url":"static/js/MapExplorer.e7151c9f.chunk.js"},{"revision":"78e2abfdfb74050dd676abb156c27cc8","url":"static/js/MapVisualizer.c7302382.chunk.js"},{"revision":"c07f87602b5f3d4ba20c5496026cfb27","url":"static/js/Minigraph.8d2122f0.chunk.js"},{"revision":"c9af185348fc441dc2e87c2005dc268b","url":"static/js/Row.725a6ee6.chunk.js"},{"revision":"acd45eba7102289f347a7df47895c294","url":"static/js/runtime-main.3fb87498.js"},{"revision":"57095d67cb4bf4b8991961a9d162d950","url":"static/js/Search.7091cac9.chunk.js"},{"revision":"95523362253a22d47a27b11331ab797b","url":"static/js/State.c76d5f41.chunk.js"},{"revision":"22c3c19c3ffffec8a9ec92ddb6ab99d5","url":"static/js/Table.3c16afc3.chunk.js"},{"revision":"510aa9ec5299fc971ebe36af1f5b40f1","url":"static/js/Timeline.00ab8472.chunk.js"},{"revision":"33d88d52d352c8f1ea4c3db6b01debdc","url":"static/js/TimeSeries.024534a4.chunk.js"},{"revision":"286c8c72a600b18e4ae8c53111b4a831","url":"static/js/TimeSeriesExplorer.3cabbe1d.chunk.js"},{"revision":"960f173a48819b453100500b7b2afbb2","url":"static/js/Updates.df1b2204.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
