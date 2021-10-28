import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea'

function App(){
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pão na padaria', done: false},
    {id: 2, name: 'Comprar um bolo na padaria', done: false}
  ]);

  const handleAddTaks = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskDone = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList){
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <C.Conteiner>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTaks} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskDone}/>
        ))}

      </C.Area>
    </C.Conteiner>
  );
}

export default App;
