#  vila-requests

  

> Widget destinado aos usuários do Push Platform. Este widget é um formulário para fazer a publicação de notificações.

  

[![NPM](https://img.shields.io/npm/v/vila-requests.svg)](https://www.npmjs.com/package/vila-requests)  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



##  Instalação  

#### NPM
```bash
npm install vila-requests axios
```

#### YARN
```bash
yarn add vila-requests axios
```

##  Utilização

```jsx

import React  from  'react'
import {
    get,
    post,
    put,
    destroy,
    setAuthorizationToken,
} from  'vila-requests'
  
export default function Example(){
	
    useEffect(() => { getFacts() }, [])

    const getFacts = async () => {
        const response = await get({
            serverUrl: "https://cat-fact.herokuapp.com",
            endpoint: "facts"
        })

        console.log(response)
    }

    ...
}

```

## Parâmetros

| PARÂMETRO         | OBRIGATÓRIO | DESCRIÇÃO                                                                      |
|-------------------|-------------|--------------------------------------------------------------------------------|
| serverUrl         | sim         | Este parâmetro é referente ao baseUrl da API que será consultada               |
| endpoint          | não         | Endpoint da rota desejada                                                      |
| bodyParams        | não         | Parâmetros que serão enviados pelo body do request (passar em formato de JSON) |
| queryStringParams | não         | Parâmetros que serão enviados pela URL do request (passar em formato de JSON)  |

##  License  

MIT © [vilaapps](https://github.com/vilaapps)
