import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Api } from '../../Api/Api';
import './Task.css'



export const Task = () => {
    const type = localStorage.getItem("user");

    const notify = () => toast("Tarefa adicionada!");


    console.log(type);

    const [tasks, setTasks] = useState([]);
 
    const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllTaskUrl());
    const results = await response.json();
        
    setTasks(results);
  };
    useEffect(() => {
        loadData();
    }, []);


    const handleAdd = async (e) => {
        e.preventDefault();
        
        const text = e.target.text.value;
        const vendedor = e.target.vendedor.value;


        if(!text || !vendedor) {
            alert('preencha todos os campos');
        } else {

        
        
        const payload = {
            check: false,
            text: text,
            vendedor: vendedor
        }

        console.log(payload);
        const response = await Api.buildApiPostRequest(
            Api.addTaskUrl(),
            payload,
            true
          );
          
          if (response.status === 200) {
            // Product created successfully
            e.target.text.value= ''
            e.target.vendedor.value=''
            loadData()
          } else {
            // Error
          }
        }
    }

    const handleCheck = async (e) => {
        e.preventDefault();

        const id = e.target.id

        console.log(id);
        var className = e.target.className
        
        console.log(className);

        if(className === 'falsecheck') {
            className = true
        } else {
            className = false
            // console.log(className);
        }


        const payload = {
            check: className
        }


        const response = await Api.buildApiPatchRequest(
            Api.updateTaskUrl(id),
            payload,
            true
          );
          if (response.status === 200) {
            // Product updated successfully
            loadData();
          } else {
            // Error
            console.log("Erro ao atualizar");
          }
    }

    const deleteTask = async (e) => {
        e.preventDefault();

        const id = e.target.id

        console.log(id);

        const response = await Api.buildApiDeleteRequest(
          Api.deleteTaskUrl(id),
          true
        );
    
        if (response.status === 200) {
          // Product updated successfully
          loadData();

        } else {
          // Error
          console.log("Erro ao deletar");
        }
      };

    const naoAuto = () => {
        alert('Não autorizado, apenas Adm pode fazer alterações');
    }

  return (
    <div className='contentTask'>
        <form onSubmit={handleAdd} className='formTask'>
            <label>Tarefa:</label>
            <textarea id='text' name='text'/>
            <label>Colaborador(a):</label>
            <input id='vendedor' name='vendedor'/>
            <button onClick={notify}>Adicionar Tarefa</button>
        </form>
        <div>
            {tasks.map((task, index) => (
                <div key={index} className={task.check === true ? 'cardTask': 'backgroundcard'}>
                    <div>
                        
                        <div>
                            <label>Tarefa:</label>
                            <p>{task.text}</p>
                        </div>
                        <div>
                            <label>Colaborador(a):</label>
                            <p>{task.vendedor}</p>
                        </div>
                    </div>
                    <div className='btnCheck' >
                        <div id={task._id} className={task.check === true ? 'check ': 'falsecheck'} onClick={type === "adm" ? handleCheck: naoAuto}>
                        </div>
                        {/* {task.check === true ? <input type='checkbox' checked onChange={handleCheck}/>:<input type='checkbox' onChange={handleCheck} />}  */}
                        <button id={task._id} onClick={type === "adm" ? deleteTask : naoAuto}>Delete</button>
                    </div>
                </div>
            )).reverse()}
        </div>
    </div>
  )
}
