import { Link, useNavigate, useParams } from "react-router-dom";
import {RiDeleteBin2Fill as DelObj} from "react-icons/ri";
import {AiFillEdit as EditObj} from "react-icons/ai";

import { ListaProdutos } from "../../mocks/listaProdutos";
import style from "./produtos.module.css";
import { useEffect, useState } from "react";


export const Produtos = () => {
  document.title = "Excluir Produto"
  const navigate = useNavigate();

const [list, setList] = useState([]);

const handleDelete = (produtoId) =>{
  setList(() => {
    let indice = ListaProdutos.findIndex(item => item.id ==  produtoId);
    ListaProdutos.splice(indice,1);
    return ListaProdutos;
  });

  navigate("/produtos")

  alert("Produto excluído com sucesso!");
}

useEffect(() => {
  setList(ListaProdutos)
});

  return (
      <>
          <h1>Produtos de Informática</h1>

          <table className={style.tableStyle} >
              <thead>
                <tr className={style.tableHeaderStyle}>
                  <th className={style.tableHeaderStyle}>ID</th>
                  <th className={style.tableHeaderStyle}>NOME</th>
                  <th className={style.tableHeaderStyle}>DESCRIÇÃO</th>
                  <th className={style.tableHeaderStyle}>PREÇO</th>
                  <th className={style.tableHeaderStyle}>Editar/Excluir</th>
                </tr>
              </thead>

              <tbody>
                {list.map((produto,indice)=>(
                    <tr key={indice} className={style.tableLineStyle}>
                      <td className={style.tableDataStyle}>{produto.id}</td>
                      <td className={style.tableDataStyle}>{produto.nome}</td>
                      <td className={style.tableDataStyle}>{produto.desc}</td>
                      <td className={style.tableDataStyle}>{produto.preco}</td>
                      <td className={style.tableDataStyle}><Link to={`/produtos/editar/${produto.id}`}><EditObj/></Link> | <button onClick={() => handleDelete(produto.id)}><DelObj/></button></td>
                    </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <Link to={`/produtos/inserir/${ListaProdutos.length + 1}`}>Adicionar +</Link>
                  <td colSpan={5} style={{textAlign:"center"}}>Total Produtos: {ListaProdutos.length}</td>
                </tr>
              </tfoot>
          </table>
      </>
    )
  }
