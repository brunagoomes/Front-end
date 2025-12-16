<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciador de Tarefas Simples</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f4f4f9; }
        .container { max-width: 800px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        h1, h2 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        #listaTarefas { list-style: none; padding: 0; }
        .tarefa { display: flex; justify-content: space-between; align-items: center; padding: 10px; margin-bottom: 8px; border: 1px solid #ddd; border-radius: 4px; transition: background-color 0.3s; }
        .concluida { background-color: #e6ffe6; text-decoration: line-through; color: #777; }
        .tarefa-info { flex-grow: 1; }
        .tarefa-prioridade { font-size: 0.8em; padding: 2px 5px; border-radius: 3px; color: white; margin-left: 10px; }
        .prioridade-baixa { background-color: #4CAF50; }
        .prioridade-media { background-color: #FFC107; }
        .prioridade-alta { background-color: #F44336; }
        button { margin-left: 5px; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.2s; }
        .btn-concluir { background-color: #2196F3; color: white; }
        .btn-remover { background-color: #f44336; color: white; }
        .btn-concluir:hover { background-color: #0b7dda; }
        .btn-remover:hover { background-color: #d32f2f; }
        form div { margin-bottom: 10px; }
        input[type="text"], select { padding: 8px; width: calc(100% - 100px); margin-right: 10px; border: 1px solid #ccc; border-radius: 4px; }
        form button { width: 80px; }
    </style>
</head>
<body>

    <div class="container">
        <h1>✅ Gerenciador de Tarefas</h1>

        <form id="formAdicionarTarefa">
            <h2>Adicionar Nova Tarefa</h2>
            <div>
                <input type="text" id="descricao" placeholder="Descrição da Tarefa" required>
                <select id="prioridade">
                    <option value="baixa">Baixa</option>
                    <option value="média">Média</option>
                    <option value="alta">Alta</option>
                </select>
                <button type="submit" class="btn-concluir">Adicionar</button>
            </div>
        </form>

        <h2>Lista de Tarefas</h2>
        <ul id="listaTarefas"></ul>
    </div>

    <script>
        let tarefas = [];
        let proximoId = 1;

        function adicionarTarefa(descricao, prioridade) {
            const novaTarefa = {
                id: proximoId++,
                descricao: descricao,
                concluida: false,
                prioridade: prioridade.toLowerCase()
            };
            
            tarefas.push(novaTarefa);
            listarTarefas();
        }

        function marcarComoConcluida(id) {
            const tarefa = tarefas.find(t => t.id === id);
            
            if (tarefa) {
                tarefa.concluida = !tarefa.concluida;
                listarTarefas();
            }
        }

        function removerTarefa(id) {
            const tamanhoAntes = tarefas.length;
            tarefas = tarefas.filter(t => t.id !== id);
            
            if (tarefas.length < tamanhoAntes) {
                listarTarefas();
            }
        }

        function listarTarefas() {
            const listaHTML = document.getElementById('listaTarefas');
            listaHTML.innerHTML = '';

            if (tarefas.length === 0) {
                listaHTML.innerHTML = '<li style="text-align: center; color: #777;">Nenhuma tarefa cadastrada.</li>';
                return;
            }

            tarefas.forEach(tarefa => {
                const li = document.createElement('li');
                li.classList.add('tarefa');
                if (tarefa.concluida) {
                    li.classList.add('concluida');
                }
                
                const prioridadeClass = `prioridade-${tarefa.prioridade}`; 

                li.innerHTML = `
                    <div class="tarefa-info">
                        <strong>${tarefa.descricao}</strong>
                        <span class="tarefa-prioridade ${prioridadeClass}">${tarefa.prioridade.toUpperCase()}</span>
                        <small>(ID: ${tarefa.id})</small>
                    </div>
                    <div>
                        <button class="btn-concluir" onclick="marcarComoConcluida(${tarefa.id})">
                            ${tarefa.concluida ? 'Desfazer' : 'Concluir'}
                        </button>
                        <button class="btn-remover" onclick="removerTarefa(${tarefa.id})">
                            Remover
                        </button>
                    </div>
                `;
                listaHTML.appendChild(li);
            });
        }
        
        document.getElementById('formAdicionarTarefa').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const descricaoInput = document.getElementById('descricao');
            const prioridadeSelect = document.getElementById('prioridade');

            const descricao = descricaoInput.value.trim();
            const prioridade = prioridadeSelect.value;
            
            if (descricao) {
                adicionarTarefa(descricao, prioridade);
                descricaoInput.value = '';
            }
        });

        document.addEventListener('DOMContentLoaded', listarTarefas);

        // Tarefas de exemplo
        adicionarTarefa("Estudar a estrutura de dados (Array)", "alta");
        adicionarTarefa("Revisar a sintaxe de objetos JS", "baixa");
        marcarComoConcluida(1);
    </script>

</body>
</html>
