master = window.parent.document;
head = master.getElementsByTagName("head")[0];
favicon = master.createElement("link");
favicon.rel = "shortcut icon";
favicon.type = "image/png";
favicon.href = "//cdn.sstatic.net/stackoverflow/img/favicon.ico?v=038622610830";
head.appendChild(favicon);
