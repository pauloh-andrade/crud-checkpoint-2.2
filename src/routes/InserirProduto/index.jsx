import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../mocks/listaProdutos";
import { useState } from "react";

export const InserirProduto = () => {
    const {id} = useParams();

    document.title = "Inserir Produtos " + id;

    const navigate = useNavigate();

    const [produto, setProduto] = useState({}); 

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduto({ ...produto, [name]:value})
    }

    const handleSubmit = (event) =>{
      event.preventDefault();


      ListaProdutos.push({...produto, id});

      navigate("/produtos");
   }

    return (
      <div>
          <h1>Inserir Produtos</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Cadastrar Produto</legend>
                <input type="hidden" name="id" value={produto.id} onChange={handleChange}/>
                <div>
                  <label htmlFor="idProd">Nome do Produto</label>
                  <input type="text" name="nome" id="idProd" value={produto.nome} onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição</label>
                  <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="idPreco">Preço</label>
                  <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
                </div>
                <div>
                  <button type="submit">Inserir</button>
                </div>
              </fieldset>
            </form>
          </div>
      </div>
    )
  }
  