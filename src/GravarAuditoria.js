import React, { useState } from 'react';
import { api } from './api';

export default () =>  {
    const [qtd, setQtd] = useState(0);
    const [paraGravar, setParaGravar] = useState(0);

    const data =  {
        classe:"br.gov.prodemge.ssc.sscauditoria.entidades.auditoria.ServicoAuditoriaSimpleVO",
        objeto: {
            servidor: "Javascript",
            classe:"br.gov.prodemge.ssc.sscauditoria.entidades.rest.RestVO",
            usuario: "usuário Javascript",
            metodo: "metodoJavascript",
            versao: "5.0.0"
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(data);

            const response = await api.post('/listarBaseadoExemplo', data, {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                }
            });
            console.log(response);

        } catch(err) {
            console.log(err);
        }
    }



    return (
        <form className="form-inline mt-5 ml-5" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Quantidade para gravar"
                value={paraGravar}
                onChange={e => setParaGravar(e.target.value)}
            />
        </div>
        <div className="form-group mx-sm-3 mb-2">
            <input 
                type="text" 
                className="form-control" 
                disabled 
                placeholder="Quantidade gravada: 0"
                value={qtd}
                onChange={e => setQtd(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Iniciar gravação</button>
        </form>
    );
}
