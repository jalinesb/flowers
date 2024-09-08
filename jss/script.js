// Função para adicionar mais imagens ao rolar para baixo (rolagem infinita)
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        let gallery = document.querySelector('.gallery');
        for (let i = 0; i < 4; i++) {
            let imgItem = document.createElement('div');
            imgItem.classList.add('image-item', 'selection');
            let img = document.createElement('img');
            img.src = `img${Math.floor(Math.random() * 5) + 1}.jpg`; // Adiciona imagens aleatórias
            img.alt = "Imagem extra";
            imgItem.appendChild(img);
            gallery.appendChild(imgItem);
        }
    }
});

// Efeito de desfoque ao passar o mouse sobre uma imagem
document.querySelectorAll('.image-item img').forEach(item => {
    item.addEventListener('mouseover', () => {
        document.body.classList.add('blurred');
    });
    item.addEventListener('mouseout', () => {
        document.body.classList.remove('blurred');
    });
});
