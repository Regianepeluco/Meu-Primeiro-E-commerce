const dados = [
    {
        img: '/imgs/Sulley.jpg',  
        categorias: 'Disney',       
        titulo:'Funko POP Sulley',
        descricao:'Funko POP Sulley 385 - Disney Pixar',
        preco: 200        
    },
    {
        img: '/imgs/Harry Potter.jpg',        
        titulo:'Funko POP Harry Potter',
        categorias: 'Harry Potter',
        descricao:'Funko POP Harry Potter 112 - Wizarding World',
        preco: 200        
    },
    {
        img: '/imgs/Zezé.jpg',   
        categorias: 'Disney',    
        titulo:'Funko POP Zezé',
        descricao:'Funko POP Zeze 367 - Disney Pixar',
        preco: 200        
    },
    {
        img: '/imgs/Alvo Dumbledore.jpg',   
        categorias: 'Harry Potter',     
        titulo:'Funko POP Alvo Dumbledore',
        descricao:'Funko POP Alvo Dumbledore 04 - Wizarding World',
        preco: 200        
    },
    {
        img: '/imgs/Mickey Feiticeiro.jpg', 
        categorias: 'Disney',       
        titulo:'Funko POP Mickey Feiticeiro',
        descricao:'Funko POP Mickey Feiticeiro 993 - Disney Fantasia',
        preco: 200        
    },
    {
        img: '/imgs/Yoda Baby.jpg',  
        categorias: 'Star Wars',     
        titulo:'Funko POP Yoda Baby',
        descricao:'Funko POP Yoda Baby 468 - Star Wars',
        preco: 200        
    }
];

const dadosCarrinho = []

function receberProduto(produto){          
    dadosCarrinho.push(produto);
    
    const precoTotal = dadosCarrinho.map(item => item.preco);
    const somaResultado = precoTotal.reduce((soma, preco) => soma + preco );
    const spanQuantidade = document.getElementById('spanQuantidade');
    const spanPreco = document.getElementById('spanPreco');

    spanPreco.innerText = `R$${somaResultado},00`;
    spanQuantidade.innerText = dadosCarrinho.length

    criarCarrinho();    
} 

function criarProduto(arrayDados) {
    
    const list = document.querySelector('.listaProdutos');
    list.innerHTML = ''

    const ul = document.getElementById('carrinho-final');

    if (dadosCarrinho.length === 0){
        ul.innerHTML = "<p>Carrinho vazio</p><span>Adicione itens</span>"              
    }

    for(let i = 0; i < arrayDados.length; i++){  
        
        const li = document.createElement('li');
        const div1 = document.createElement('div'); 
        const img = document.createElement('img');
        const categorias = document.createElement('span');
        const div2 = document.createElement('div');
        const h2 = document.createElement('h2');
        const descricao = document.createElement('p');
        const preco = document.createElement('p');
        const button = document.createElement('button');        
        
        li.classList.add('listaItem');        
        img.src = arrayDados[i].img;        
        categorias.innerText = arrayDados[i].categorias;      
        categorias.classList.add('categoria');        
        h2.innerText = arrayDados[i].titulo;        
        descricao.innerText = arrayDados[i].descricao;        
        preco.innerText = `R$${arrayDados[i].preco},00`;
        button.innerText = 'Adicionar ao carrinho';
        button.addEventListener('click', function (event){
           receberProduto(arrayDados[i]);
        })    

        div1.appendChild(img);
        div1.appendChild(categorias);
        li.appendChild(div1);
        div2.appendChild(h2);
        div2.appendChild(descricao);
        div2.appendChild(preco);
        li.appendChild(div2);
        li.appendChild(button);        
        list.appendChild(li);
    }
}

criarProduto(dados);

function criarCarrinho (){
    const ulCarrinhoFinal = document.getElementById('carrinho-final');
    ulCarrinhoFinal.innerHTML = ''  
    
    const liCarrinhoCSS = document.createElement('liCarrinhosCSS');
    liCarrinhoCSS.classList.add('liCarrinhoCSS');

    for(let i = 0; i < dadosCarrinho.length; i++){   
       
        const divCarrinhoCSSImg = document.createElement('div');
        const divCarrinho = document.createElement('div');
        const divCarrinhoCSSTexto = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const preco = document.createElement('p');
        const button = document.createElement('button');                        
               
        divCarrinhoCSSImg.classList.add('divCarrinhoCSSImg');          
        divCarrinho.classList.add('divCarrinho');        
        divCarrinhoCSSTexto.classList.add('divCarrinhoCSSTexto');         
        img.src = dadosCarrinho[i].img;    
        h3.innerText = dadosCarrinho[i].titulo;    
        preco.innerText = `R$${dadosCarrinho[i].preco},00`;       
        button.innerText = 'Remover';
        button.addEventListener('click', function(e){                       
            removerProduto(i);
        })        

        divCarrinhoCSSImg.appendChild(img); 
        divCarrinhoCSSTexto.appendChild(h3);               
        divCarrinhoCSSTexto.appendChild(preco);        
        divCarrinhoCSSTexto.appendChild(button); 
        divCarrinho.appendChild(divCarrinhoCSSImg);
        divCarrinho.appendChild(divCarrinhoCSSTexto);        
        liCarrinhoCSS.appendChild(divCarrinho);            
        ulCarrinhoFinal.appendChild(liCarrinhoCSS);               
    }
       
}

function removerProduto(i){
    let index = i;
    let remover = dadosCarrinho.splice(index,1);

    criarCarrinho(dadosCarrinho);
    const div = document.getElementById('carrinho-final');
    if (dadosCarrinho.length === 0){
        div.innerHTML = "<p>Carrinho vázio</p><span>Adicione itens</span>"
    }
    const precoTotal = dadosCarrinho.map(item => item.preco);
    const somaResultado = precoTotal.reduce((soma, preco) => soma + preco , 0);    
    const spanQuantidade = document.getElementById('spanQuantidade');
    const spanPreco = document.getElementById('spanPreco');

    spanPreco.innerText = `R$${somaResultado},00`;
    spanQuantidade.innerText = dadosCarrinho.length;

} 
const campoPesquisa = document.getElementById('campoPesquisa');
const buttonPesquisa = document.getElementById('buttonPesquisa');
buttonPesquisa.addEventListener('click', digitarPesquisa);

function digitarPesquisa(){
    for(let i = 0; i < dados.length; i++){
        if( dados[i].titulo === campoPesquisa.value){
            criarProduto([dados[i]]);            
        }
        
    }
    
}

const filtroTodos = document.getElementById('Todos');
const filtroDisney = document.getElementById('Disney');
const filtroStarWars = document.getElementById('Star Wars');
const filtroHarryPotter = document.getElementById('Harry Potter');

filtroTodos.addEventListener('click', filtrar);
filtroDisney.addEventListener('click',clicarProduto )
filtroStarWars.addEventListener('click',clicarProduto )
filtroHarryPotter.addEventListener('click',clicarProduto )


function clicarProduto(event){
    const produtosFiltrados = []
    for(let i = 0; i< dados.length; i++){
        if( dados[i].categorias === event.target.innerText ){
            produtosFiltrados.push(dados[i]);
        }
    } 
    criarProduto(produtosFiltrados);  
}

function filtrar(filtrarTodos){          
      
    criarProduto(dados)
      
} 
