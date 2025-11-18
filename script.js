document.getElementById("titulo").innerHTML = "Mi Lista de Tareas";

document.getElementById("boton-agregar").addEventListener("click", function(e){
    e.preventDefault();
    
    const input = document.getElementById("nueva-tarea");
    const texto = input.value;

    if(texto)
    {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = texto;
        
        const boton = document.createElement("button");
        boton.className = "btn btn-danger btn-sm";
        boton.innerHTML = '<i class="bi bi-trash"></i>';
        boton.onclick = function()
        {
            li.remove();
        };
        
        li.appendChild(boton);
        document.getElementById("lista-tareas").appendChild(li);
        input.value = "";
        
        document.getElementById("alerta").classList.remove("d-none");
        
        setTimeout(function()
        {
            document.getElementById("alerta").classList.add("d-none");
        }, 3000);
    }
});